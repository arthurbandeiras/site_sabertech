import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import https from "https";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const uploadDir = path.resolve("./uploads");
// Vite copies everything from `public/` into `dist/` during build, so in
// production (and inside the Docker image, which only ships `dist`) this is
// where both the built app and the static assets (galeria, team, etc.) live.
const distDir = path.join(__dirname, "dist");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const safeName = file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, "_");
    cb(null, `${timestamp}-${safeName}`);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Nenhum arquivo enviado." });
  }

  res.json({
    message: "Arquivo enviado com sucesso.",
    filename: req.file.filename,
    originalName: req.file.originalname,
  });
});

app.get("/api/uploads", (req, res) => {
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao listar uploads." });
    }
    res.json({ files });
  });
});

app.get("/api/galeria", (req, res) => {
  // In production only `dist` exists (it ships a copy of `public`); in local
  // dev (before `npm run build`) fall back to the original `public` folder.
  const distGaleria = path.join(distDir, "galeria");
  const galeriaDir = fs.existsSync(distGaleria) ? distGaleria : path.join(__dirname, "public", "galeria");
  fs.readdir(galeriaDir, { withFileTypes: true }, async (err, entries) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao listar galeria." });
    }

    try {
      const dirents = entries || [];
      const folders = dirents.filter((d) => d.isDirectory()).map((d) => d.name);

      const imageRegex = /\.(jpg|jpeg|png|webp|gif)$/i;

      const events = [];

      // Process folders as events
      for (let i = 0; i < folders.length; i++) {
        const folder = folders[i];
        const folderPath = path.join(galeriaDir, folder);
        const files = fs.readdirSync(folderPath);
        const imagesInFolder = files.filter((f) => imageRegex.test(f)).map((f) => `${folder}/${f}`);

        // Try to load event metadata from event.json
        let metadata = {};
        const metaPath = path.join(folderPath, "event.json");
        if (fs.existsSync(metaPath)) {
          try {
            const raw = fs.readFileSync(metaPath, "utf8");
            metadata = JSON.parse(raw || "{}");
          } catch (e) {
            console.warn(`Erro lendo metadata em ${metaPath}:`, e.message);
          }
        }

        events.push({
          id: `event-${folder}`,
          folder,
          cover: metadata.cover ? `${folder}/${metadata.cover}` : (imagesInFolder[0] || null),
          date: metadata.date || null,
          description: metadata.description || null,
          images: imagesInFolder,
        });
      }

      // Sort events by date descending (most recent first)
      events.sort((a, b) => {
        if (!a.date || !b.date) return 0;
        return b.date.localeCompare(a.date);
      });

      // Backwards compatibility: provide a flat `images` array with covers of top 6 events
      const flatImages = events.slice(0, 6).map((evt, idx) => ({
        id: `cover-${idx}`,
        filename: evt.cover,
        label: `Foto ${idx + 1}`,
      })).filter((img) => img.filename);

      res.json({ events, images: flatImages });
    } catch (e) {
      console.error("Erro processando galeria:", e);
      res.status(500).json({ error: "Erro ao processar galeria." });
    }
  });
});
// Endpoint to verify YouTube video availability via oEmbed
app.get('/api/youtube/oembed', async (req, res) => {
  const videoId = req.query.videoId;
  if (!videoId) return res.status(400).json({ ok: false, error: 'missing videoId' });

  try {
    const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${encodeURIComponent(
      videoId
    )}&format=json`;
    const r = await fetch(oembedUrl);
    if (!r.ok) {
      return res.json({ ok: false, error: 'video not found' });
    }
    const json = await r.json();
    return res.json({ ok: true, ...json });
  } catch (e) {
    console.warn('youtube oembed error', e.message);
    return res.json({ ok: false, error: e.message });
  }
});

app.use("/uploads", express.static(uploadDir));

// Serve the built frontend (vite build output).
app.use(express.static(distDir));

// SPA fallback: any GET request that didn't match an API route or a static
// file above falls back to index.html so client-side routing (react-router)
// works on a full page refresh / direct link.
// NOTE: Express 5 (path-to-regexp v7) no longer accepts a bare "*" as a
// route path — it throws "Missing parameter name". Using app.use() with no
// path at all avoids path-to-regexp parsing entirely and matches everything.
app.use((req, res, next) => {
  if (req.method !== "GET" || req.path.startsWith("/api")) return next();
  res.sendFile(path.join(distDir, "index.html"));
});

// In production (inside the Docker image) a self-signed cert is baked in at
// build time and the app terminates TLS itself on 443, since the server
// sits behind an institutional proxy (sabertech.ufes.br) that accepts a
// self-signed backend certificate. Locally, without a cert, it just falls
// back to plain HTTP on 5000 as before.
const certDir = path.join(__dirname, "certs");
const keyPath = path.join(certDir, "key.pem");
const certPath = path.join(certDir, "cert.pem");

if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
  const port = process.env.PORT || 443;
  const httpsOptions = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath),
  };
  https.createServer(httpsOptions, app).listen(port, () => {
    console.log(`Server (HTTPS) running on https://localhost:${port}`);
  });
} else {
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server (HTTP) running on http://localhost:${port}`);
  });
}
