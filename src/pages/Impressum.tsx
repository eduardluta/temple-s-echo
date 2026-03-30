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
            <p className="font-semibold text-temple-midnight">{t("impressum.company")}</p>
            <p>{t("impressum.address")}</p>
            <p>{t("impressum.city")}</p>
            <p>{t("impressum.country")}</p>
            <p className="mt-3">{t("impressum.phone")}</p>
            <p>{t("impressum.email")}</p>
            <p>{t("impressum.website")}</p>
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impressum;
