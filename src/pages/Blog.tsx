import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const base = import.meta.env.BASE_URL;

const sceneImages: Record<string, string | string[]> = {
  s1: [`${base}images/scenes/1a.-szene.jpg`, `${base}images/scenes/1b.-szene.jpg`],
  s2: `${base}images/scenes/szene-2.jpg`,
  s3: `${base}images/scenes/szene-3.jpg`,
  s4: `${base}images/scenes/szene-4.jpg`,
  s5: `${base}images/scenes/szene-5.jpg`,
  s6: `${base}images/scenes/szene-6.jpg`,
  s7: `${base}images/scenes/szene-7.jpg`,
  s8: `${base}images/scenes/szene-8.jpg`,
  s9: `${base}images/scenes/szene-9.jpg`,
  s10: `${base}images/scenes/szene-10.jpg`,
  s11: `${base}images/scenes/szene-11.jpg`,
  s12: `${base}images/scenes/szene-12.jpg`,
  s13: `${base}images/scenes/szene-13.jpg`,
  s14: `${base}images/scenes/szene-14.jpg`,
  s15: `${base}images/scenes/szene-15.jpg`,
  s16: `${base}images/scenes/szene-16.jpg`,
  s17: `${base}images/scenes/szene-17.jpg`,
  s18: `${base}images/scenes/szene-18.jpg`,
  s19: `${base}images/scenes/szene-19.jpg`,
  s20: `${base}images/scenes/szene-20.jpg`,
  s21: `${base}images/scenes/szene-21.jpg`,
};

const sceneKeys = Array.from({ length: 21 }, (_, i) => `s${i + 1}`);

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Header ── */}
      <header className="relative pt-40 pb-20 px-4 text-center overflow-hidden bg-gradient-to-b from-[hsl(222,40%,7%)] to-[hsl(222,38%,12%)]">
        <div className="relative z-10 max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-temple-gold/60 hover:text-temple-gold font-ui text-xs uppercase tracking-widest mb-8 transition-colors">
            {t("blog.backHome")}
          </Link>
          <p className="font-ui text-temple-gold uppercase tracking-[0.35em] text-xs mb-4">{t("blog.label")}</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-temple-on-dark leading-tight mb-4">
            {t("blog.title")}
          </h1>
          <div className="font-display text-2xl md:text-3xl text-temple-gold mb-6">{t("blog.hebrew")}</div>
          <div className="text-temple-gold/40 tracking-[0.3em] text-sm mb-6">&#10022; &#10022; &#10022;</div>
          <p className="font-body text-temple-on-dark/60 italic max-w-xl mx-auto">
            {t("blog.subtitle")}
          </p>
        </div>
      </header>

      {/* ── Scenes ── */}
      <main className="max-w-[860px] mx-auto px-6 pb-24">
        {sceneKeys.map((key, i) => {
          const s = `blog.scenes.${key}`;
          const body = t(`${s}.body`, { returnObjects: true }) as string[];
          const measurements = t(`${s}.measurements`, { returnObjects: true, defaultValue: "" });
          const quote = t(`${s}.quote`, { defaultValue: "" });
          const quoteCite = t(`${s}.quoteCite`, { defaultValue: "" });
          const img = sceneImages[key];

          return (
            <div key={key}>
              <article className="mt-16" id={key}>
                {/* Scene header */}
                <div className="flex flex-wrap items-baseline gap-4 mb-5 pb-3 border-b border-border">
                  <span className="font-ui text-[10px] tracking-[0.3em] text-temple-gold uppercase shrink-0">
                    {t(`${s}.num`)}
                  </span>
                  <h2 className="font-display text-lg md:text-xl font-semibold text-temple-midnight leading-tight">
                    {t(`${s}.title`)}
                  </h2>
                  <span className="font-display italic text-temple-gold text-sm md:text-base ml-auto whitespace-nowrap">
                    {t(`${s}.subtitle`)}
                  </span>
                </div>

                {/* Image */}
                {Array.isArray(img) ? (
                  <div className="flex gap-0 rounded overflow-hidden border border-temple-gold/20 mb-6 aspect-video">
                    {img.map((src, j) => (
                      <img key={j} src={src} alt={t(`${s}.title`)} className="w-1/2 h-full object-cover" style={j > 0 ? { borderLeft: "2px solid rgba(201,168,76,0.3)" } : {}} />
                    ))}
                  </div>
                ) : img ? (
                  <div className="rounded overflow-hidden border border-temple-gold/20 mb-6">
                    <img src={img} alt={t(`${s}.title`)} className="w-full aspect-video object-cover" />
                  </div>
                ) : null}

                {/* Source tag */}
                <div className="mb-4">
                  <span className="inline-block font-ui text-[10px] tracking-[0.16em] text-temple-gold/50 bg-temple-gold/5 border border-temple-gold/15 rounded-sm px-2 py-0.5 uppercase">
                    {t(`${s}.source`)}
                  </span>
                </div>

                {/* Body */}
                <div className="font-body text-foreground/80 leading-relaxed space-y-4">
                  {Array.isArray(body) && body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>

                {/* Measurements */}
                {Array.isArray(measurements) && measurements.length > 0 && (
                  <div className="my-5 py-3 px-5 bg-temple-gold/[0.06] border-l-2 border-temple-gold text-sm text-temple-midnight/70 leading-loose">
                    {measurements.map((m: string, j: number) => (
                      <div key={j}>{m}</div>
                    ))}
                  </div>
                )}

                {/* Pull quote */}
                {quote && (
                  <div className="my-5 py-5 px-6 border-t border-b border-border font-display italic text-temple-midnight/70 leading-relaxed">
                    {quote}
                    {quoteCite && (
                      <cite className="block mt-2 text-[11px] font-ui not-italic tracking-[0.12em] text-temple-gold uppercase">
                        {quoteCite}
                      </cite>
                    )}
                  </div>
                )}
              </article>

              {/* Divider */}
              {i < sceneKeys.length - 1 && (
                <div className="flex items-center gap-4 mt-16 opacity-40">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                  <span className="text-temple-gold text-sm">&#10022;</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>
              )}
            </div>
          );
        })}

        {/* Closing */}
        <div className="mt-20 p-8 rounded border border-border text-center bg-temple-midnight">
          <div className="text-temple-gold text-2xl mb-4">&#10022;</div>
          <p className="font-display text-temple-on-dark italic text-lg leading-relaxed mb-4">
            {t("blog.closing")} <em className="text-temple-gold">{t("blog.closingHebrew")}</em> — {t("blog.closingTranslation")}
          </p>
          <div className="gold-divider w-16 mx-auto mt-6" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
