import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-temple-midnight border-t border-temple-gold/20 py-12">
      <div className="container text-center">
        <div className="text-temple-gold text-2xl mb-3">✦</div>
        <p className="font-display text-temple-on-dark/80 text-sm italic mb-4">
          {t("footer.quote")}
          <span className="block text-temple-gold/60 text-xs mt-1 not-italic font-ui">{t("footer.attribution")}</span>
        </p>
        <div className="gold-divider w-24 mx-auto mb-6" />
        <div className="flex justify-center gap-8 text-xs font-ui uppercase tracking-widest mb-6">
          <Link to="/" className="text-temple-on-dark/50 hover:text-temple-gold transition-colors">{t("nav.home")}</Link>
          <Link to="/blog" className="text-temple-on-dark/50 hover:text-temple-gold transition-colors">{t("nav.theStory")}</Link>
          <Link to="/contact" className="text-temple-on-dark/50 hover:text-temple-gold transition-colors">{t("nav.contact")}</Link>
        </div>
        <p className="text-temple-on-dark/30 text-xs font-ui">
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
