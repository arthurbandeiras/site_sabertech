# ---- build stage: compila o frontend (vite build) ----
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
# .env é lido pelo Vite em tempo de build (variáveis VITE_*)
RUN npm run build

# ---- runtime stage: só o necessário para rodar o server Express ----
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

COPY server.js ./
COPY --from=builder /app/dist ./dist

# pasta onde os uploads (multer) são gravados — útil montar como volume
RUN mkdir -p uploads

# Certificado autoassinado para sabertech.ufes.br. O servidor fica atrás de
# um proxy institucional que aceita certificado autoassinado no backend, por
# isso não é necessário (nem viável) um certificado validado publicamente.
RUN apk add --no-cache openssl \
    && mkdir -p certs \
    && openssl req -x509 -nodes -days 825 \
         -newkey rsa:2048 \
         -keyout certs/key.pem \
         -out certs/cert.pem \
         -subj "/CN=sabertech.ufes.br" \
         -addext "subjectAltName=DNS:sabertech.ufes.br"

EXPOSE 443
ENV PORT=443

CMD ["node", "server.js"]
