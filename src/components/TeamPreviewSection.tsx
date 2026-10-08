import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { teamMembers } from "@/data/team";

const TeamPreviewSection = () => {
  const featuredMembers = teamMembers.slice(0, 3);

  return (
    <section id="equipe" className="section-padding bg-dark-blue-section">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-blue-section-foreground mb-4">
            Voluntários
          </h2>
          <p className="text-foreground/80 text-lg">
            Conheça alguns dos voluntários que ajudam o projeto a acontecer.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {featuredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-[32px] p-6 text-center shadow-[0_25px_60px_rgba(0,0,0,0)]"
            >
              <div className="mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full border-2 border-primary/20 bg-muted">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground/80">
                  {member.name}
                </h3>
                <p className="text-sm text-foreground/80">
                  {member.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild className="rounded-full px-7 py-3">
            <Link to="/equipe">Ver mais</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamPreviewSection;
