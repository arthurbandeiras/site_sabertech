import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Props {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}

export default function GalleryModal({ images, initialIndex = 0, onClose }: Props) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => setIndex(initialIndex), [initialIndex]);

  const prev = useCallback(() => setIndex((i) => (i === 0 ? images.length - 1 : i - 1)), [images.length]);
  const next = useCallback(() => setIndex((i) => (i === images.length - 1 ? 0 : i + 1)), [images.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, onClose]);

  if (!images || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 bg-background/80 rounded-full p-2"
        aria-label="Fechar"
      >
        <X className="w-5 h-5" />
      </button>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/60 rounded-full p-3"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div className="max-w-5xl w-full px-4">
        <div className="relative bg-muted rounded-lg overflow-hidden">
          <img
            src={`/galeria/${images[index]}`}
            alt={`Imagem ${index + 1}`}
            className="w-full h-[60vh] object-contain bg-black"
          />
          <div className="absolute left-4 bottom-4 text-white/90 text-sm bg-black/40 rounded-md px-3 py-1">
            {index + 1} / {images.length}
          </div>
        </div>
      </div>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/60 rounded-full p-3"
        aria-label="Próximo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
