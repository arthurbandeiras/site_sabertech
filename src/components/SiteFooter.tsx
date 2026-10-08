import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="bg-foreground text-background/80 section-padding py-12">
      <div className="container-content">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-display font-bold text-background text-lg mb-3">
              UFES + SECRI
            </h4>
            <p className="text-sm leading-relaxed">
              De mãos dadas para o futuro
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-background text-lg mb-3">
              Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/cursos" className="hover:text-background transition-colors">Cursos</Link></li>
              <li><Link to="/galeria" className="hover:text-background transition-colors">Galeria</Link></li>
              <li><Link to="/acoes" className="hover:text-background transition-colors">Ações</Link></li>
              <li><Link to="/equipe" className="hover:text-background transition-colors">Equipe</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-background text-lg mb-3">
              Redes Sociais
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.youtube.com/@SaberTechUFES" className="hover:text-background transition-colors">YouTube do SaberTech</a></li>
              <li><a href="https://www.instagram.com/ong_secri/" className="hover:text-background transition-colors">Instagram do SECRI</a></li>
              <li><a href="https://www.instagram.com/colegiado.eletrica.ufes/" className="hover:text-background transition-colors">Instagram do Colegiado</a></li>
              <li><a href="https://www.instagram.com/ufesoficial/" className="hover:text-background transition-colors">Instagram da UFES</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-6 text-center text-sm flex items-center justify-center gap-1">
          Da universidade para a comunidade
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
