import { useParams, Link } from "react-router-dom";
import { ArrowLeft, FileText, Presentation, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { motion } from "framer-motion";

const CourseMaterials = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((c) => c.id === id);
  const materials = course?.materials ?? { pdfs: [], slides: [], links: [] };


  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Curso não encontrado</h2>
          <Link to="/">
            <Button>Voltar ao início</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="pt-20 section-padding">
        <div className="container-content">
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
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-2">
              <span className="text-4xl">{course.icon}</span>
              <h1 className="text-3xl sm:text-4xl font-bold">{course.title}</h1>
            </div>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
              {course.description} — Carga horária: {course.workload}
            </p>
          </motion.div>

          {/* Slides */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10"
          >
            <h2 className="text-xl font-bold font-display mb-4 flex items-center gap-2">
              <Presentation className="w-5 h-5 text-accent" />
              Slides das Aulas
            </h2>
            <div className="space-y-3">
              {materials.slides.map((slide, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-card border border-border rounded-xl p-4"
                >
                  <div>
                    <div className="font-semibold text-foreground">{slide.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {slide.slides} slides
                    </div>
                  </div>
                  <a
                    href={slide.url}
                    download
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-display font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/10"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Baixar
                  </a>
                </div>
              ))}
            </div>
          </motion.section>

          {/* PDFs */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10"
          >
            <h2 className="text-xl font-bold font-display mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Material Complementar
            </h2>
            <div className="space-y-3">
              {materials.pdfs.map((pdf, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-card border border-border rounded-xl p-4"
                >
                  <div>
                    <div className="font-semibold text-foreground">{pdf.name}</div>
                    <div className="text-sm text-muted-foreground">{pdf.size}</div>
                  </div>
                  <a
                    href={pdf.url}
                    download
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-display font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/10"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Baixar
                  </a>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Links */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10"
          >
            <h2 className="text-xl font-bold font-display mb-4 flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-terracotta" />
              Links Úteis
            </h2>
            <div className="space-y-3">
              {materials.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className="flex items-center justify-between bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors"
                >
                  <span className="font-semibold text-foreground">{link.name}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default CourseMaterials;
