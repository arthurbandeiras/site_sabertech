import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GallerySection = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetch("/api/galeria")
      .then(res => res.json())
      .then(data => {
        const sortedPhotos = data.images
          .sort((a, b) => b.filename.localeCompare(a.filename))
          .slice(0, 6);
        setPhotos(sortedPhotos);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao carregar galeria:", err);
        setLoading(false);
      });
  }, []);

  // Função para iniciar o intervalo
  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prev => (prev === photos.length - 1 ? 0 : prev + 1));
    }, 5000);
  }, [photos.length]);

  // Função para parar o intervalo
  const stopInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Auto-play com reinício ao interagir
  useEffect(() => {
    if (photos.length === 0 || loading) return;
    startInterval();
    return () => stopInterval();
  }, [photos.length, loading, startInterval, stopInterval]);

  const goToPrev = useCallback(() => {
    stopInterval(); // Para o intervalo atual
    setDirection(-1);
    setCurrentIndex(prev => (prev === 0 ? photos.length - 1 : prev - 1));
    startInterval(); // Reinicia a contagem
  }, [photos.length, stopInterval, startInterval]);

  const goToNext = useCallback(() => {
    stopInterval(); // Para o intervalo atual
    setDirection(1);
    setCurrentIndex(prev => (prev === photos.length - 1 ? 0 : prev + 1));
    startInterval(); // Reinicia a contagem
  }, [photos.length, stopInterval, startInterval]);

  // Pausar auto-play ao hover
  const [isPaused, setIsPaused] = useState(false);

  if (loading) return <div className="text-center p-8">Carregando...</div>;

  const getVisiblePhotos = (centerIndex: number) => {
    const total = photos.length;
    const prevIndex = (centerIndex - 1 + total) % total;
    const nextIndex = (centerIndex + 1) % total;
    return [
      { ...photos[prevIndex], position: "left" as const },
      { ...photos[centerIndex], position: "center" as const },
      { ...photos[nextIndex], position: "right" as const },
    ];
  };

  const visiblePhotos = getVisiblePhotos(currentIndex);

  // Variants para animação suave de slide
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="galeria" className="section-padding bg-dark-blue-section">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-blue-section-foreground mb-4">
            Galeria de Fotos
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-foreground/80 text-lg">
            Momentos das nossas aulas e atividades
          </p>
        </motion.div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Botão anterior */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background rounded-full p-3 shadow-lg transition-colors -left-4 md:left-0"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Carrossel de 3 imagens com animação suave */}
          <div className="flex items-center justify-center gap-2 md:gap-4 px-8">
            <AnimatePresence mode="sync" custom={direction}>
              {visiblePhotos.map((photo, idx) => (
                <motion.div
                  key={`${photo.id}-${photo.position}`}
                  custom={direction}
                  initial={{ x: direction > 0 ? 50 : -50, opacity: 0 }}
                  animate={{ x: 0, opacity: photo.position === "center" ? 1 : 0.5 }}
                  exit={{ x: direction > 0 ? -50 : 50, opacity: 0 }}
                  transition={{ 
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 }
                  }}
                  className={`relative ${
                    photo.position === "center"
                      ? "w-full max-w-2xl z-10"
                      : "w-full max-w-xs hidden sm:block"
                  }`}
                >
                  <div
                    className={`aspect-video bg-muted rounded-xl overflow-hidden border border-border ${
                      photo.position !== "center" ? "grayscale" : ""
                    }`}
                  >
                    <img
                      src={`/galeria/${photo.filename}`}
                      alt={photo.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Botão próximo */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background rounded-full p-3 shadow-lg transition-colors -right-4 md:right-0"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-6">
          {photos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                stopInterval(); // Para o intervalo atual
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
                startInterval(); // Reinicia a contagem
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-primary w-8" : "bg-primary/30 w-2 hover:w-4"
              }`}
              aria-label={`Ir para foto ${idx + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild className="rounded-full px-6">
            <Link to="/galeria">Ver mais</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
