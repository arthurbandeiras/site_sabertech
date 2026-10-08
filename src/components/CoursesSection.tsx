import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

const CoursesSection = () => {
  const displayedCourses = courses.slice(0, 3);

  return (
    <section id="cursos" className="section-padding">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Nossos Minicursos
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conforme os cursos disponíveis e acesso aos materiais gratuitamente.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCourses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium text-sm px-6 py-2 rounded-full shadow-lg">
            <Link to="/cursos">Ver mais</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
