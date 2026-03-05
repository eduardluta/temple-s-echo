import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/blog", label: "The Story" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-temple-midnight/95 backdrop-blur-sm border-b border-temple-gold/20">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-temple-gold text-xl">✦</span>
          <span className="font-display text-lg font-semibold text-temple-on-dark tracking-wide group-hover:text-temple-gold transition-colors">
            Beit HaMikdash
          </span>
        </Link>

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
          <Link
            to="/blog"
            className="ml-4 px-5 py-2 text-sm font-ui uppercase tracking-wider bg-gradient-to-r from-temple-gold to-temple-gold-light text-temple-midnight font-semibold rounded transition-opacity hover:opacity-90 shadow-gold"
          >
            Read the Story
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
