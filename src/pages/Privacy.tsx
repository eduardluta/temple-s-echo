import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { privacyContent } from "@/data/privacy-content";

const Privacy = () => {
  const { i18n } = useTranslation();
  const c =
    i18n.language === "de"
      ? privacyContent.de
      : i18n.language === "he"
      ? privacyContent.he
      : privacyContent.en;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container max-w-3xl px-4">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-temple-midnight mb-10">{c.title}</h1>

          {/* 1. Datenschutz auf einen Blick */}
          <div className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-temple-midnight mb-4">{c.s1_title}</h2>
            <h3 className="font-display text-lg font-semibold text-temple-midnight mb-2">{c.s1_general_title}</h3>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s1_general_text}</p>
            <p className="font-display text-base font-semibold text-temple-midnight mb-2">{c.s1_data_label}</p>
            <h3 className="font-display text-lg font-semibold text-temple-midnight mt-6 mb-2">{c.s1_who_title}</h3>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s1_who_text}</p>
            <h3 className="font-display text-lg font-semibold text-temple-midnight mt-6 mb-2">{c.s1_how_title}</h3>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s1_how_text}</p>
            <h3 className="font-display text-lg font-semibold text-temple-midnight mt-6 mb-2">{c.s1_purpose_title}</h3>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s1_purpose_text}</p>
            <h3 className="font-display text-lg font-semibold text-temple-midnight mt-6 mb-2">{c.s1_rights_title}</h3>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s1_rights_text1}</p>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s1_rights_text2}</p>
          </div>

          <div className="gold-divider w-16 mb-10" />

          {/* 2. Allgemeine Hinweise und Pflichtinformationen */}
          <div className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-temple-midnight mb-4">{c.s2_title}</h2>
            <h3 className="font-display text-lg font-semibold text-temple-midnight mt-6 mb-2">{c.s2_privacy_title}</h3>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s2_privacy_text1}</p>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s2_privacy_text2}</p>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s2_privacy_text3}</p>
            <h3 className="font-display text-lg font-semibold text-temple-midnight mt-6 mb-2">{c.s2_responsible_title}</h3>
            <p className="font-body text-foreground/80 leading-relaxed mb-2">{c.s2_responsible_intro}</p>
            <div className="font-body text-foreground/80 leading-relaxed mb-4 ps-4 border-s-2 border-temple-gold">
              <p>Becker Innovation</p>
              <p>Mutschellenstrasse 163</p>
              <p>8038 Z&uuml;rich</p>
              <p>{c.s2_responsible_country}</p>
              <p>{c.s2_responsible_phone}</p>
              <p>{c.s2_responsible_email}</p>
            </div>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s2_responsible_note}</p>
            <h3 className="font-display text-lg font-semibold text-temple-midnight mt-6 mb-2">{c.s2_revocation_title}</h3>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s2_revocation_text}</p>
            <h3 className="font-display text-lg font-semibold text-temple-midnight mt-6 mb-2">{c.s2_objection_title}</h3>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s2_objection_text1}</p>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s2_objection_text2}</p>
            <h3 className="font-display text-lg font-semibold text-temple-midnight mt-6 mb-2">{c.s2_complaint_title}</h3>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s2_complaint_text}</p>
            <h3 className="font-display text-lg font-semibold text-temple-midnight mt-6 mb-2">{c.s2_portability_title}</h3>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s2_portability_text}</p>
            <h3 className="font-display text-lg font-semibold text-temple-midnight mt-6 mb-2">{c.s2_ssl_title}</h3>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s2_ssl_text1}</p>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s2_ssl_text2}</p>
            <h3 className="font-display text-lg font-semibold text-temple-midnight mt-6 mb-2">{c.s2_access_title}</h3>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s2_access_text}</p>
            <h3 className="font-display text-lg font-semibold text-temple-midnight mt-6 mb-2">{c.s2_restriction_title}</h3>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s2_restriction_intro}</p>
            <ul className="list-disc ps-6 font-body text-foreground/80 leading-relaxed mb-4 space-y-2">
              <li>{c.s2_restriction_li1}</li>
              <li>{c.s2_restriction_li2}</li>
              <li>{c.s2_restriction_li3}</li>
              <li>{c.s2_restriction_li4}</li>
            </ul>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s2_restriction_closing}</p>
          </div>

          <div className="gold-divider w-16 mb-10" />

          {/* 3. Datenerfassung auf unserer Website */}
          <div className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-temple-midnight mb-4">{c.s3_title}</h2>
            <h3 className="font-display text-lg font-semibold text-temple-midnight mt-6 mb-2">{c.s3_cookies_title}</h3>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s3_cookies_text1}</p>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s3_cookies_text2}</p>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s3_cookies_text3}</p>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s3_cookies_text4}</p>
            <h3 className="font-display text-lg font-semibold text-temple-midnight mt-6 mb-2">{c.s3_logs_title}</h3>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s3_logs_intro}</p>
            <ul className="list-disc ps-6 font-body text-foreground/80 leading-relaxed mb-4 space-y-1">
              {c.s3_logs_items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s3_logs_closing}</p>
            <h3 className="font-display text-lg font-semibold text-temple-midnight mt-6 mb-2">{c.s3_contact_title}</h3>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s3_contact_text1}</p>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s3_contact_text2}</p>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">{c.s3_contact_text3}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
