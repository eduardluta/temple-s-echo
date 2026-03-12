import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import templeHero from "@/assets/temple-hero.jpg";
import menorah from "@/assets/menorah.jpg";
import ark from "@/assets/ark.jpg";

const sectionKeys = [
  { key: "courtyards", image: templeHero },
  { key: "altar" },
  { key: "pillars" },
  { key: "sanctuary", image: menorah },
  { key: "holies" },
  { key: "ark", image: ark },
  { key: "destruction" },
  { key: "thirdTemple" },
];

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Article Header ── */}
      <header
        className="relative pt-40 pb-20 px-4 text-center bg-temple-midnight overflow-hidden"
        style={{ backgroundImage: `linear-gradient(to bottom, hsl(222 40% 7%), hsl(222 38% 12%))` }}
      >
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${templeHero})` }}
        />
        <div className="absolute inset-0 bg-temple-midnight/80" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-temple-gold/60 hover:text-temple-gold font-ui text-xs uppercase tracking-widest mb-8 transition-colors">
            {t("blog.backHome")}
          </Link>
          <p className="font-ui text-temple-gold uppercase tracking-[0.3em] text-xs mb-4">{t("blog.label")}</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-temple-on-dark leading-tight mb-6">
            {t("blog.title")}
          </h1>
          <div className="gold-divider w-24 mx-auto mb-6" />
          <div className="flex flex-wrap items-center justify-center gap-4 text-temple-on-dark/50 font-ui text-xs uppercase tracking-wider">
            <span>{t("blog.byline")}</span>
            <span className="text-temple-gold/30">·</span>
            <span>{t("blog.date")}</span>
            <span className="text-temple-gold/30">·</span>
            <span>{t("blog.readTime")}</span>
          </div>
        </div>
      </header>

      {/* ── Article Body ── */}
      <article className="container max-w-3xl px-4 py-16">
        {/* Intro */}
        <div className="prose-temple mb-12 pb-10 border-b border-border">
          <p className="text-xl font-body leading-relaxed text-foreground/90 italic">
            {t("blog.intro")}
          </p>
        </div>

        {/* Sections */}
        {sectionKeys.map((sec, i) => {
          const base = `blog.sections.${sec.key}`;
          const list = t(`${base}.list`, { returnObjects: true });
          const quote = t(`${base}.quote`, { defaultValue: "" });
          const imageAlt = t(`${base}.imageAlt`, { defaultValue: "" });

          return (
            <div key={sec.key} id={sec.key} className="mb-16">
              <div className="prose-temple">
                <h2>{t(`${base}.title`)}</h2>
                {sec.image && imageAlt && (
                  <div className={`my-8 rounded overflow-hidden border border-border shadow-sm ${i % 2 === 0 ? "float-right ml-8 mb-4 w-full md:w-80" : "float-left mr-8 mb-4 w-full md:w-80"} clear-both md:clear-none`}>
                    <img src={sec.image} alt={imageAlt} className="w-full object-cover" />
                    <p className="text-xs text-muted-foreground text-center py-2 px-3 bg-muted font-ui">{imageAlt}</p>
                  </div>
                )}
                <p>{t(`${base}.content`)}</p>
                {Array.isArray(list) && (
                  <ul>
                    {list.map((item: string) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                {quote && (
                  <blockquote>{quote}</blockquote>
                )}
              </div>
              <div className="clear-both" />
              {i < sectionKeys.length - 1 && <div className="gold-divider w-12 mt-10 opacity-40" />}
            </div>
          );
        })}

        {/* Closing */}
        <div className="mt-8 p-8 bg-temple-midnight rounded border border-temple-gold/20 text-center">
          <div className="text-temple-gold text-2xl mb-4">✦</div>
          <p className="font-display text-temple-on-dark italic text-lg leading-relaxed mb-4">
            {t("blog.closing")} <em className="text-temple-gold">{t("blog.closingHebrew")}</em> — {t("blog.closingTranslation")}
          </p>
          <div className="gold-divider w-16 mx-auto mt-6" />
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Blog;
