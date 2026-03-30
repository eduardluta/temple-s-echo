import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const heroImg = "/images/hero.png";
const azaraImg = "/images/azara.png";
const heichalImg = "/images/heichal.png";
const kodeshImg = "/images/kodesh.png";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-temple-midnight/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-temple-midnight/40 via-transparent to-temple-midnight/90" />

        {/* Content */}
        <div className="relative z-10 container text-center px-4 py-32">
          <p className="font-ui text-temple-gold uppercase tracking-[0.35em] text-xs mb-6 animate-fade-in">
            {t("hero.tagline")}
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-temple-on-dark leading-tight mb-6 animate-fade-up">
            {t("hero.title")}
            <span className="block text-temple-gold mt-2">{t("hero.hebrew")}</span>
          </h1>
          <p className="font-display text-lg md:text-xl text-temple-on-dark/80 italic mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {t("hero.subtitle")}
          </p>
          <p className="font-body text-temple-on-dark/70 max-w-xl mx-auto mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: "0.35s" }}>
            {t("hero.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <a href="#video" className="inline-block px-8 py-3.5 bg-gradient-to-r from-temple-gold to-temple-gold-light text-temple-midnight font-ui font-semibold uppercase tracking-widest text-sm rounded shadow-gold hover:opacity-90 transition-opacity">
              {t("hero.watchFilm")}
            </a>
            <Link to="/blog" className="inline-block px-8 py-3.5 border border-temple-gold/50 text-temple-on-dark font-ui font-medium uppercase tracking-widest text-sm rounded hover:border-temple-gold hover:text-temple-gold transition-colors">
              {t("hero.readFullStory")}
            </Link>
          </div>
        </div>

        {/* Scroll arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-temple-gold/50 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section id="video" className="bg-temple-midnight py-24">
        <div className="container max-w-4xl px-4">
          <div className="text-center mb-10">
            <p className="font-ui text-temple-gold uppercase tracking-[0.3em] text-xs mb-3">{t("video.label")}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-temple-on-dark">{t("video.title")}</h2>
            <div className="gold-divider w-16 mx-auto mt-4" />
          </div>
          <div className="relative rounded overflow-hidden shadow-deep border border-temple-gold/20" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/8DG-mlRiCqs"
              title={t("video.iframeTitle")}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center text-temple-on-dark/50 font-ui text-sm mt-4">
            {t("video.caption")}
          </p>
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section className="bg-parchment py-20 border-y border-temple-gold/15">
        <div className="container max-w-3xl text-center px-4">
          <span className="text-temple-gold text-3xl">✦</span>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-temple-midnight mt-4 mb-6">
            {t("intro.title")}
          </h2>
          <p className="font-body text-foreground/80 leading-relaxed text-lg">
            {t("intro.text")}
          </p>
          <div className="gold-divider w-24 mx-auto mt-8" />
        </div>
      </section>

      {/* ── INSIDE THE TEMPLE — 3 AREAS ── */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="text-center mb-14">
            <p className="font-ui text-temple-gold uppercase tracking-[0.3em] text-xs mb-3">{t("features.label")}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-temple-midnight">{t("features.title")}</h2>
            <div className="gold-divider w-16 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group rounded overflow-hidden border border-border hover:border-temple-gold/50 transition-colors shadow-sm bg-card">
              <div className="aspect-video overflow-hidden">
                <img src={azaraImg} alt={t("features.card1.title")} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <p className="text-temple-gold font-ui text-xs uppercase tracking-widest mb-2">{t("features.card1.category")}</p>
                <h3 className="font-display text-xl font-semibold text-temple-midnight mb-2">{t("features.card1.title")}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{t("features.card1.text")}</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group rounded overflow-hidden border border-border hover:border-temple-gold/50 transition-colors shadow-sm bg-card">
              <div className="aspect-video overflow-hidden">
                <img src={heichalImg} alt={t("features.card2.title")} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <p className="text-temple-gold font-ui text-xs uppercase tracking-widest mb-2">{t("features.card2.category")}</p>
                <h3 className="font-display text-xl font-semibold text-temple-midnight mb-2">{t("features.card2.title")}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{t("features.card2.text")}</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group rounded overflow-hidden border border-border hover:border-temple-gold/50 transition-colors shadow-sm bg-card">
              <div className="aspect-video overflow-hidden">
                <img src={kodeshImg} alt={t("features.card3.title")} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <p className="text-temple-gold font-ui text-xs uppercase tracking-widest mb-2">{t("features.card3.category")}</p>
                <h3 className="font-display text-xl font-semibold text-temple-midnight mb-2">{t("features.card3.title")}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{t("features.card3.text")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 21 SCENES GALLERY ── */}
      <section className="py-24 bg-temple-midnight">
        <div className="container px-4">
          <div className="text-center mb-14">
            <p className="font-ui text-temple-gold uppercase tracking-[0.3em] text-xs mb-3">{t("scenes.label")}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-temple-on-dark">{t("scenes.title")}</h2>
            <div className="gold-divider w-16 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: "/images/scenes/1a.-szene.png", label: "1a" },
              { src: "/images/scenes/1b.-szene.png", label: "1b" },
              ...Array.from({ length: 20 }, (_, i) => ({
                src: `/images/scenes/szene-${i + 2}.png`,
                label: `${i + 2}`,
              })),
            ].map((scene) => (
              <div
                key={scene.label}
                className="group relative aspect-video overflow-hidden rounded border border-temple-gold/20 hover:border-temple-gold/60 transition-colors cursor-pointer"
              >
                <img
                  src={scene.src}
                  alt={`${t("scenes.sceneLabel")} ${scene.label}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-temple-midnight/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-2 left-3 text-temple-gold font-ui text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {t("scenes.sceneLabel")} {scene.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PDF DOWNLOAD ── */}
      <section className="bg-parchment py-20 border-y border-temple-gold/15">
        <div className="container max-w-2xl text-center px-4">
          <p className="font-ui text-temple-gold uppercase tracking-[0.3em] text-xs mb-3">{t("download.label")}</p>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-temple-midnight mb-4">
            {t("download.title")}
          </h2>
          <p className="font-body text-foreground/80 leading-relaxed mb-10">
            {t("download.text")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/temple-s-echo/Solomon_Temple_EN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-temple-gold to-temple-gold-light text-temple-midnight font-ui font-semibold uppercase tracking-widest text-sm rounded shadow-gold hover:opacity-90 transition-opacity"
            >
              <Download size={16} />
              {t("download.english")}
            </a>
            <a
              href="/temple-s-echo/Salomon_Tempel_DE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-temple-gold/50 text-temple-midnight font-ui font-medium uppercase tracking-widest text-sm rounded hover:border-temple-gold transition-colors"
            >
              <Download size={16} />
              {t("download.german")}
            </a>
          </div>
        </div>
      </section>

      {/* ── QUOTE BANNER ── */}
      <section className="bg-temple-midnight py-20">
        <div className="container max-w-3xl text-center px-4">
          <div className="text-temple-gold/40 text-5xl font-display mb-4">"</div>
          <blockquote className="font-display text-xl md:text-2xl text-temple-on-dark italic leading-relaxed mb-6">
            {t("quoteBanner.quote")}
          </blockquote>
          <div className="gold-divider w-16 mx-auto mb-6" />
          <Link to="/blog" className="inline-block px-8 py-3.5 bg-gradient-to-r from-temple-gold to-temple-gold-light text-temple-midnight font-ui font-semibold uppercase tracking-widest text-sm rounded shadow-gold hover:opacity-90 transition-opacity">
            {t("quoteBanner.cta")}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
