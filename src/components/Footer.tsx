import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-temple-midnight border-t border-temple-gold/20 py-10">
      <div className="container px-4">
        {/* Single row: Logo + Copyright + Legal links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/becker-logo-gold.svg" alt="Becker Innovation" className="h-7 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          </Link>
          <p className="text-xs font-ui text-temple-on-dark/40">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <nav className="flex gap-8 text-xs font-ui uppercase tracking-widest">
            <Link to="/impressum" className="text-temple-on-dark/60 hover:text-temple-gold transition-colors">
              {t("footer.impressum")}
            </Link>
            <Link to="/privacy" className="text-temple-on-dark/60 hover:text-temple-gold transition-colors">
              {t("footer.privacy")}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
