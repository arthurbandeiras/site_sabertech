import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Cursos", type: "route", href: "/cursos" },
  { label: "Galeria", type: "route", href: "/galeria" },
  { label: "Ações", type: "route", href: "/acoes" },
  { label: "Publicações", type: "route", href: "/publicacoes" },
  { label: "Equipe", type: "route", href: "/equipe" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const renderItem = (item: (typeof navItems)[number], mobile = false) => {
    const baseClass =
      "text-sm font-semibold text-foreground/70 hover:text-primary transition-colors font-display";

    if (item.type === "route") {
      return (
        <Link
          key={item.label}
          to={item.href}
          onClick={() => mobile && setOpen(false)}
          className={mobile ? "block w-full text-left py-3 font-semibold" : baseClass}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <button
        key={item.label}
        onClick={() => scrollTo(item.href)}
        className={mobile ? "block w-full text-left py-3 font-semibold" : baseClass}
      >
        {item.label}
      </button>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-content flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-display font-bold text-xl text-primary">
          SaberTech
        </Link>

        {/* DESKTOP */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => renderItem(item))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          {navItems.map((item) => renderItem(item, true))}
        </div>
      )}
    </header>
  );
};

export default SiteHeader;