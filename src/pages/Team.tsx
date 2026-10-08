import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { teamMembers } from "@/data/team";

const categoryOrder = ["Professor Voluntário", "Aluno Voluntário"];

const Team = () => {
  const groupedMembers = teamMembers.reduce<Record<string, typeof teamMembers>>((acc, member) => {
    acc[member.category] = acc[member.category] || [];
    acc[member.category].push(member);
    return acc;
  }, {});

  const categories = Array.from(new Set([...categoryOrder, ...Object.keys(groupedMembers)]));

  return (
    <div className="min-h-screen section-padding py-20">
      <div className="container-content">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors font-display font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Nossa Equipe
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professores, monitores e voluntários que fazem o projeto acontecer
          </p>
        </motion.div>

        {categories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Em breve, informações sobre nossa equipe.</p>
          </div>
        ) : (
          categories.map((category) => {
            const members = groupedMembers[category] || [];
            if (members.length === 0) return null;

            return (
              <section key={category} className="mb-12 w-full max-w-6xl mx-auto">
                <div className="text-center mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{category}</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-8 mx-auto max-w-[1080px]">
                  {members.map((member, index) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                    >
                      <div className="mx-auto mb-5 h-28 w-28 rounded-full overflow-hidden border-2 border-primary/20 bg-muted">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="text-center">
                        <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                        <p className="text-muted-foreground mt-2">{member.title}</p>
                        {member.bio && (
                          <p className="text-muted-foreground mt-3 text-sm leading-6">{member.bio}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Team;