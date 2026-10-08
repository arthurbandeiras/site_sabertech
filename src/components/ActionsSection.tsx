import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { actions } from "@/data/actions";

const ActionsSection = () => {
  return (
    <section id="acoes" className="section-padding bg-background">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Nossas Ações
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-4" />
          <p className="text-foreground/80 text-lg">
            Projetos e atividades que impactam nossa comunidade
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {actions.map((action, i) => (
                <CarouselItem
                  key={action.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-card rounded-xl overflow-hidden border border-border shadow-sm"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={action.image}
                        alt={action.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-primary font-medium">
                        {action.date}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">
                        {action.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {action.description}
                      </p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="text-center mt-8">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium text-sm px-6 py-2 rounded-full shadow-lg">
            <Link to="/acoes">Ver mais</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActionsSection;