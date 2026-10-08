import { motion } from "framer-motion";
import { Heart, Users, BookOpen } from "lucide-react";

const stats = [
  { icon: Users, label: "Educandos atendidos", value: "30+" },
  { icon: BookOpen, label: "Ações em andamento", value: "5" },
  { icon: Heart, label: "Voluntários na equipe atual", value: "10+" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-dark-blue-section">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-blue-section-foreground mb-4">
            Sobre o Projeto
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >

            <p className="text-lg leading-relaxed text-foreground/80">
              Os alunos e professoras do curso de Engenharia 
              Elétrica da UFES atuam em parceria com o SECRI (Serviço de Engajamento Comunitário), localizada no morro de São Benedito (Território do Bem).


            </p>

            <p className="text-lg leading-relaxed text-foreground/80 mb-4">
              Nossas principais atividades são 
              montagem e manutenção do laboratório de informática no espaço físico 
              do centro comunitário, capacitação de monitores e educadores e 
              oferecimento de atividades educarivas para os adolescentes atendidos pela organização.
            </p>

            <p className="text-lg leading-relaxed text-foreground/80 mb-4">
              O SECRI, nosso principal parceiro, é uma Organização 
              da Sociedade Civil que, há 37 anos, se dedica a trabalhar 
              junto às famílias do bairro São Benedito e comunidades vizinhas na 
              cidade de Vitória/ES. 
              
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
