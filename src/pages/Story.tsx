import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import storyContentDE from "@/data/story-content-de";
import storyContentEN from "@/data/story-content-en";

const base = import.meta.env.BASE_URL;

// Scene ID -> image path(s). Scene 1 has a split image; scene 21 (Bundeslade, new)
// has no dedicated image yet; scene 22 (Destruction) reuses the old szene-21.jpg.
const sceneImages: Record<string, string | string[] | undefined> = {
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
  s21: `${base}images/scenes/bundeslade.jpg`,
  s22: `${base}images/scenes/szene-21.jpg`,
};

const Story = () => {
  const { i18n, t } = useTranslation();
  const content = i18n.language === "de" ? storyContentDE : storyContentEN;

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
            {content.title}
          </h1>
          <div className="font-display text-2xl md:text-3xl text-temple-gold mb-6">{content.hebrew}</div>
          <div className="text-temple-gold/40 tracking-[0.3em] text-sm mb-6">&#10022; &#10022; &#10022;</div>
          <p className="font-body text-temple-on-dark/60 italic max-w-xl mx-auto">
            {content.subtitle}
          </p>
        </div>
      </header>

      {/* ── Scenes ── */}
      <main className="max-w-[860px] mx-auto px-6 pb-24">
        {content.scenes.map((scene, i) => {
          const img = sceneImages[scene.id];

          return (
            <div key={scene.id}>
              <article className="mt-16" id={scene.id}>
                {/* Scene header */}
                <div className="flex flex-wrap items-baseline gap-4 mb-5 pb-3 border-b border-border">
                  <span className="font-ui text-[10px] tracking-[0.3em] text-temple-gold uppercase shrink-0">
                    {scene.num}
                  </span>
                  <h2 className="font-display text-lg md:text-xl font-semibold text-temple-midnight leading-tight">
                    {scene.title}
                  </h2>
                  {scene.subtitle && (
                    <span className="font-display italic text-temple-gold text-sm md:text-base ml-auto whitespace-nowrap">
                      {scene.subtitle}
                    </span>
                  )}
                </div>

                {/* Image */}
                {Array.isArray(img) ? (
                  <div className="flex gap-0 rounded overflow-hidden border border-temple-gold/20 mb-6 aspect-video">
                    {img.map((src, j) => (
                      <img key={j} src={src} alt={scene.title} className="w-1/2 h-full object-cover" style={j > 0 ? { borderLeft: "2px solid rgba(201,168,76,0.3)" } : {}} />
                    ))}
                  </div>
                ) : img ? (
                  <div className="rounded overflow-hidden border border-temple-gold/20 mb-6">
                    <img src={img} alt={scene.title} className="w-full aspect-video object-cover" />
                  </div>
                ) : null}

                {/* Body */}
                <div className="font-body text-foreground/80 leading-relaxed space-y-4">
                  {scene.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </article>

              {/* Divider */}
              {i < content.scenes.length - 1 && (
                <div className="flex items-center gap-4 mt-16 opacity-40">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                  <span className="text-temple-gold text-sm">&#10022;</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>
              )}
            </div>
          );
        })}

        {/* Sources */}
        <div className="mt-20 pt-10 border-t border-border">
          <h2 className="font-display text-2xl font-semibold text-temple-midnight mb-3">{content.sources.title}</h2>
          <p className="font-body text-foreground/70 italic mb-8">{content.sources.intro}</p>
          <div className="grid md:grid-cols-2 gap-8">
            {content.sources.groups.map((group) => (
              <div key={group.heading}>
                <h3 className="font-ui text-xs font-semibold tracking-[0.16em] text-temple-gold uppercase mb-3">
                  {group.heading}
                </h3>
                <ul className="font-body text-foreground/75 text-sm space-y-1">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="font-body text-foreground/60 italic text-sm mt-8">{content.sources.total}</p>
        </div>

        {/* Closing */}
        <div className="mt-20 p-8 rounded border border-border text-center bg-temple-midnight">
          <div className="text-temple-gold text-2xl mb-4">&#10022;</div>
          <p className="font-display text-temple-on-dark italic text-lg leading-relaxed mb-4">
            {content.closing} <em className="text-temple-gold">{content.closingHebrew}</em> &mdash; {content.closingTranslation}
          </p>
          <div className="gold-divider w-16 mx-auto mt-6" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Story;
