import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/story", label: t("nav.theStory") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-temple-midnight/95 backdrop-blur-sm border-b border-temple-gold/20">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href={
            i18n.language === "en"
              ? "https://beckerinnovation.ch/en/projects/#solomon"
              : "https://beckerinnovation.ch/projekte/#solomon"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group"
        >
          <img src={`${import.meta.env.BASE_URL}images/becker-logo-gold.svg`} alt="Becker Innovation" className="h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 font-ui">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm tracking-wider uppercase transition-colors ${
                pathname === l.to
                  ? "text-temple-gold"
                  : "text-temple-on-dark/70 hover:text-temple-gold"
              }`}
            >
              {l.label}
            </Link>
          ))}

          {/* Language switcher */}
          <LanguageSelector />

          <Link
            to="/story"
            className="ms-4 px-5 py-2 text-sm font-ui uppercase tracking-wider bg-gradient-to-r from-temple-gold to-temple-gold-light text-temple-midnight font-semibold rounded transition-opacity hover:opacity-90 shadow-gold"
          >
            {t("nav.readTheStory")}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-temple-on-dark hover:text-temple-gold transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-temple-midnight border-t border-temple-gold/20 px-6 py-5 flex flex-col gap-4 font-ui">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`text-sm uppercase tracking-wider transition-colors ${
                pathname === l.to ? "text-temple-gold" : "text-temple-on-dark/80 hover:text-temple-gold"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <LanguageSelector variant="mobile" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
