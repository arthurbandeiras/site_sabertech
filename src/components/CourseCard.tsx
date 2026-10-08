import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface CourseMaterialItem {
  name: string;
  size?: string;
  slides?: number;
  url?: string;
}

export interface CourseMaterialsData {
  pdfs: CourseMaterialItem[];
  slides: CourseMaterialItem[];
  links: Array<{ name: string; url: string }>;
}

export interface CourseData {
  id: string;
  title: string;
  description: string;
  workload: string;
  icon: string;
  materials?: CourseMaterialsData;
}

interface CourseCardProps {
  course: CourseData;
  index: number;
}

const CourseCard = ({ course, index }: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
  className="bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow overflow-hidden group h-full flex flex-col"
    >
      <div className="h-2 bg-primary" />
      <div className="p-6 flex flex-col flex-1">
        <div className="text-3xl mb-4">{course.icon}</div>
        <h3 className="text-xl font-bold text-foreground mb-2 font-display">
          {course.title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
          {course.description}
        </p>
        <div className="mt-auto">
          <div className="flex items-center text-sm text-muted-foreground mb-5">
            <Clock className="w-4 h-4 mr-1.5" />
            {course.workload}
          </div>
          <Link to={`/curso/${course.id}`}>
            <Button
              variant="outline"
              className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors font-display font-semibold rounded-full"
            >
              Ver materiais
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
