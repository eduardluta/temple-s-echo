import { useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <header className="pt-40 pb-16 px-4 text-center bg-temple-midnight border-b border-temple-gold/20">
        <p className="font-ui text-temple-gold uppercase tracking-[0.3em] text-xs mb-3">{t("contact.label")}</p>
        <h1 className="font-display text-3xl md:text-5xl font-bold text-temple-on-dark mb-4">{t("contact.title")}</h1>
        <div className="gold-divider w-16 mx-auto mb-6" />
        <p className="font-body text-temple-on-dark/70 max-w-md mx-auto text-lg">
          {t("contact.subtitle")}
        </p>
      </header>

      {/* Form */}
      <section className="py-20 px-4">
        <div className="container max-w-xl">
          {submitted ? (
            <div className="text-center py-16">
              <div className="text-temple-gold text-4xl mb-4">✦</div>
              <h2 className="font-display text-2xl font-semibold text-temple-midnight mb-3">{t("contact.successTitle")}</h2>
              <p className="font-body text-muted-foreground mb-8">{t("contact.successText")}</p>
              <Link to="/" className="inline-block px-6 py-3 bg-gradient-to-r from-temple-gold to-temple-gold-light text-temple-midnight font-ui font-semibold text-sm uppercase tracking-widest rounded shadow-gold hover:opacity-90 transition-opacity">
                {t("contact.returnHome")}
              </Link>
            </div>
          ) : (
            <form
              action="https://formspree.io/f/xblywkpn"
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="space-y-6"
            >
              <div>
                <label className="block font-ui text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t("contact.namePlaceholder")}
                  className="w-full px-4 py-3 bg-card border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-temple-gold transition-colors"
                />
              </div>

              <div>
                <label className="block font-ui text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t("contact.emailPlaceholder")}
                  className="w-full px-4 py-3 bg-card border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-temple-gold transition-colors"
                />
              </div>

              <div>
                <label className="block font-ui text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  {t("contact.message")}
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder={t("contact.messagePlaceholder")}
                  className="w-full px-4 py-3 bg-card border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-temple-gold transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-temple-gold to-temple-gold-light text-temple-midnight font-ui font-semibold uppercase tracking-widest text-sm rounded shadow-gold hover:opacity-90 transition-opacity"
              >
                {t("contact.send")}
              </button>

              <p className="text-center text-muted-foreground font-ui text-xs">
                {t("contact.privacy")}
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
