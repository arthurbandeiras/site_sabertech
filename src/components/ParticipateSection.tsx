import { motion } from "framer-motion";
import { MapPin, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: Calendar, text: "Confira as datas de inscrição no nosso calendário" },
  { icon: MapPin, text: "Compareça ao centro comunitário para efetuar a matrícula" },
  { icon: Mail, text: "Ou entre em contato por e-mail" },
];

const ParticipateSection = () => {
  return (
    <section id="participar" className="section-padding bg-sage">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-foreground mb-4">
            Quer ser um voluntário?
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Entre em contato conosco pelo email
          </p>
        </motion.div>
      {/*
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 text-center border border-border shadow-sm"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-sm font-display font-bold text-muted-foreground mb-2">
                Passo {i + 1}
              </div>
              <p className="text-foreground">{step.text}</p>
            </motion.div>
          ))}
        </div>
      */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card rounded-2xl p-8 border border-border shadow-sm max-w-lg mx-auto text-center"
        >
          <h3 className="text-xl font-bold font-display mb-4">Contato</h3>
          <div className="space-y-3 text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              sabertechufes@gmail.com
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              CT II — Av. Fernando Ferrari <br />
              Goiabeiras, Vitória — ES
          
            </div>
          </div>
          {/*}
          <Button className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold rounded-full px-8">
            Entrar em Contato
          </Button>
          */}
        </motion.div>
      </div>
    </section>
  );
};

export default ParticipateSection;
