import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import GalleryModal from "@/components/GalleryModal";

const Gallery = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

  useEffect(() => {
    fetch("/api/galeria")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.events || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar galeria:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center p-8">Carregando...</div>;

  return (
    <div className="min-h-screen bg-background">
      <div className="container-content py-20">
        <Link
          to="/"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 font-display font-semibold"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao início
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Galeria Completa
          </h1>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-foreground/80 text-lg">
            Todos os momentos das nossas aulas e atividades
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {events.map((evt, i) => (
            <motion.div
              key={evt.id || i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-muted rounded-xl overflow-hidden border border-border cursor-pointer"
              onClick={() => setSelectedEvent(evt)}
            >
              <div className="aspect-square overflow-hidden">
                {evt.cover ? (
                  <img
                    src={`/galeria/${evt.cover}`}
                    alt={evt.description || `Evento ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">Sem imagem</div>
                )}
              </div>
              <div className="p-3">
                <div className="text-sm text-muted-foreground">{evt.date || "Data não informada"}</div>
                <div className="font-semibold text-foreground truncate">{evt.description || "Descrição não informada"}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <GalleryModal
          images={selectedEvent.images || []}
          initialIndex={0}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default Gallery;