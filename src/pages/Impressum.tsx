import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Impressum = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container max-w-3xl px-4">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-temple-midnight mb-10">
            {t("impressum.title")}
          </h1>

          {/* Company Info */}
          <div className="mb-10 font-body text-foreground/80 leading-relaxed">
            <p>{t("impressum.companyLabel")} <span className="font-semibold text-temple-midnight">{t("impressum.company")}</span></p>
            <p>{t("impressum.address")}</p>
            <p>{t("impressum.city")}</p>
            <p>{t("impressum.country")}</p>
            <p className="mt-3">Tel <a href={`tel:${t("impressum.phone").replace(/\s/g, "")}`} className="hover:text-temple-gold transition-colors">{t("impressum.phone")}</a></p>
            <p><a href={`mailto:${t("impressum.email")}`} className="hover:text-temple-gold transition-colors">{t("impressum.email")}</a></p>
            <p><a href={`https://${t("impressum.website")}`} target="_blank" rel="noopener noreferrer" className="hover:text-temple-gold transition-colors">{t("impressum.website")}</a></p>
          </div>

          <div className="gold-divider w-16 mb-10" />

          {/* Liability */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-semibold text-temple-midnight mb-3">
              {t("impressum.liability.title")}
            </h2>
            <p className="font-body text-foreground/80 leading-relaxed">
              {t("impressum.liability.text")}
            </p>
          </div>

          {/* Copyright */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-semibold text-temple-midnight mb-3">
              {t("impressum.copyright.title")}
            </h2>
            <p className="font-body text-foreground/80 leading-relaxed">
              {t("impressum.copyright.text")}
            </p>
          </div>

          {/* Email Communication */}
          <div className="mb-10">
            <h2 className="font-display text-xl font-semibold text-temple-midnight mb-3">
              {t("impressum.email_comm.title")}
            </h2>
            <p className="font-body text-foreground/80 leading-relaxed">
              {t("impressum.email_comm.text")}
            </p>
          </div>

          <div className="gold-divider w-16 mb-10" />

          {/* Footer info */}
          <div className="font-body text-foreground/70 leading-relaxed text-sm">
            <p>Copyright &copy; {new Date().getFullYear()} {t("impressum.company")}</p>
            <p>{t("impressum.address")}, {t("impressum.city")}, {t("impressum.country")}</p>
            <p>Telefon <a href={`tel:${t("impressum.phone").replace(/\s/g, "")}`} className="underline hover:text-temple-gold transition-colors">{t("impressum.phone")}</a>, <a href={`mailto:${t("impressum.email")}`} className="underline hover:text-temple-gold transition-colors">{t("impressum.email")}</a></p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impressum;
