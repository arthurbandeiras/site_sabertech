import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Minimize2, Maximize2 } from "lucide-react";
import heroImage from "@/assets/home.jpg";

const HeroSection = () => {
  const heroYoutubeId = import.meta.env.VITE_HERO_YOUTUBE_ID;
  const [videoAvailable, setVideoAvailable] = useState(false);
  const [isMinimized, setIsMinimized] = useState(() => {
    try {
      return localStorage.getItem("heroVideoMinimized") === "1";
    } catch {
      return false;
    }
  });
  const showHeroVideo = Boolean(heroYoutubeId && heroYoutubeId.trim());

  useEffect(() => {
    let mounted = true;
    if (!showHeroVideo) return;
    fetch(`/api/youtube/oembed?videoId=${encodeURIComponent(heroYoutubeId)}`)
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        setVideoAvailable(Boolean(data && data.ok));
      })
      .catch(() => {
        if (!mounted) return;
        setVideoAvailable(false);
      });
    return () => {
      mounted = false;
    };
  }, [heroYoutubeId, showHeroVideo]);

  useEffect(() => {
    try {
      localStorage.setItem("heroVideoMinimized", isMinimized ? "1" : "0");
    } catch {}
  }, [isMinimized]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Comunidade aprendendo junta"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 section-padding container-content w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-sm font-display font-semibold mb-6">
            Educação para todos
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            SaberTech: conectar para transformar
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/85 mb-8 leading-relaxed max-w-lg">
            Uma parceria entre universidade e comunidade para impactar vidas por meio da educação.
          </p>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-bold text-base px-8 py-6 rounded-full shadow-lg"
            onClick={() =>
              document.getElementById("cursos")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Ver os Cursos
          </Button>
        </motion.div>

        {showHeroVideo && videoAvailable && (
          <>
            {!isMinimized && (
              <div className="hidden lg:block fixed right-6 bottom-6 w-80 md:w-[420px] h-48 md:h-[236px] rounded-[1.25rem] border border-white/15 bg-background/80 shadow-2xl backdrop-blur-xl overflow-hidden z-50">
                <div className="relative w-full h-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${heroYoutubeId}?autoplay=1&controls=1&rel=0&modestbranding=1&playsinline=1&cc_load_policy=0`}
                    title="Vídeo de destaque do SaberTech"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                  <button
                    aria-label="Minimizar vídeo"
                    onClick={() => setIsMinimized(true)}
                    className="absolute left-2 top-2 bg-black/40 hover:bg-black/50 text-white p-1 rounded-full"
                  >
                    <Minimize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {isMinimized && (
              <button
                aria-label="Restaurar vídeo"
                onClick={() => setIsMinimized(false)}
                className="hidden lg:flex fixed right-6 bottom-6 w-14 h-14 rounded-full bg-background/90 border border-white/15 shadow-lg items-center justify-center z-50"
              >
                <Maximize2 className="w-5 h-5 text-white" />
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
