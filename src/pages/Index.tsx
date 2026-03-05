import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import templeHero from "@/assets/temple-hero.jpg";
import menorah from "@/assets/menorah.jpg";
import ark from "@/assets/ark.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${templeHero})` }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-temple-midnight/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-temple-midnight/40 via-transparent to-temple-midnight/90" />

        {/* Content */}
        <div className="relative z-10 container text-center px-4 py-32">
          <p className="font-ui text-temple-gold uppercase tracking-[0.35em] text-xs mb-6 animate-fade-in">
            Documentary · History · Sacred Architecture
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-temple-on-dark leading-tight mb-6 animate-fade-up">
            Solomon's Temple
            <span className="block text-temple-gold mt-2">בֵּית הַמִּקְדָּשׁ</span>
          </h1>
          <p className="font-display text-lg md:text-xl text-temple-on-dark/80 italic mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            "From the Gold of the First Temple to the Light of the Third"
          </p>
          <p className="font-body text-temple-on-dark/70 max-w-xl mx-auto mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: "0.35s" }}>
            Journey into the heart of ancient Jerusalem — into the sacred chambers where heaven and earth were said to meet. This documentary explores Solomon's legendary Temple: its breathtaking architecture, its sacred objects, its catastrophic destruction, and the timeless Jewish hope for its restoration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <a href="#video" className="inline-block px-8 py-3.5 bg-gradient-to-r from-temple-gold to-temple-gold-light text-temple-midnight font-ui font-semibold uppercase tracking-widest text-sm rounded shadow-gold hover:opacity-90 transition-opacity">
              Watch the Film
            </a>
            <Link to="/blog" className="inline-block px-8 py-3.5 border border-temple-gold/50 text-temple-on-dark font-ui font-medium uppercase tracking-widest text-sm rounded hover:border-temple-gold hover:text-temple-gold transition-colors">
              Read the Full Story
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
            <p className="font-ui text-temple-gold uppercase tracking-[0.3em] text-xs mb-3">Watch Now</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-temple-on-dark">The Documentary</h2>
            <div className="gold-divider w-16 mx-auto mt-4" />
          </div>
          <div className="relative rounded overflow-hidden shadow-deep border border-temple-gold/20" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/8DG-mlRiCqs"
              title="Solomon's Temple Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center text-temple-on-dark/50 font-ui text-sm mt-4">
            Approx. 15 minutes · Subtitles available
          </p>
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section className="bg-parchment py-20 border-y border-temple-gold/15">
        <div className="container max-w-3xl text-center px-4">
          <span className="text-temple-gold text-3xl">✦</span>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-temple-midnight mt-4 mb-6">
            A Structure Unlike Any Other
          </h2>
          <p className="font-body text-foreground/80 leading-relaxed text-lg">
            Around 950 BCE, King Solomon erected the Beit HaMikdash on Mount Moriah — the same rock where Abraham was tested and, according to tradition, where creation itself began. For nearly four centuries, this Temple served as the spiritual center of the Jewish people, and its memory has endured for three millennia.
          </p>
          <div className="gold-divider w-24 mx-auto mt-8" />
        </div>
      </section>

      {/* ── FEATURE CARDS ── */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="text-center mb-14">
            <p className="font-ui text-temple-gold uppercase tracking-[0.3em] text-xs mb-3">Explore</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-temple-midnight">Inside the Temple</h2>
            <div className="gold-divider w-16 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group rounded overflow-hidden border border-border hover:border-temple-gold/50 transition-colors shadow-sm bg-card">
              <div className="aspect-video overflow-hidden">
                <img src={templeHero} alt="Solomon's Temple exterior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <p className="text-temple-gold font-ui text-xs uppercase tracking-widest mb-2">Architecture</p>
                <h3 className="font-display text-xl font-semibold text-temple-midnight mb-2">The Sacred Courtyards</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">From the outer courts to the innermost sanctuary — a journey through the tiered holy spaces of the First Temple.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group rounded overflow-hidden border border-border hover:border-temple-gold/50 transition-colors shadow-sm bg-card">
              <div className="aspect-video overflow-hidden">
                <img src={menorah} alt="The Golden Menorah" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <p className="text-temple-gold font-ui text-xs uppercase tracking-widest mb-2">Sacred Objects</p>
                <h3 className="font-display text-xl font-semibold text-temple-midnight mb-2">The Menorah & Holy Vessels</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">Ten golden menorot, the showbread, and the golden incense altar — objects charged with divine purpose.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group rounded overflow-hidden border border-border hover:border-temple-gold/50 transition-colors shadow-sm bg-card">
              <div className="aspect-video overflow-hidden">
                <img src={ark} alt="Ark of the Covenant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <p className="text-temple-gold font-ui text-xs uppercase tracking-widest mb-2">Holy of Holies</p>
                <h3 className="font-display text-xl font-semibold text-temple-midnight mb-2">The Ark of the Covenant</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">In the innermost chamber, behind a curtain of 72 threads, rested the Aron HaBrit — the source of divine presence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE BANNER ── */}
      <section className="bg-temple-midnight py-20">
        <div className="container max-w-3xl text-center px-4">
          <div className="text-temple-gold/40 text-5xl font-display mb-4">"</div>
          <blockquote className="font-display text-xl md:text-2xl text-temple-on-dark italic leading-relaxed mb-6">
            From the Ark, say the sages, emanated the spiritual life of the world.
          </blockquote>
          <div className="gold-divider w-16 mx-auto mb-6" />
          <Link to="/blog" className="inline-block px-8 py-3.5 bg-gradient-to-r from-temple-gold to-temple-gold-light text-temple-midnight font-ui font-semibold uppercase tracking-widest text-sm rounded shadow-gold hover:opacity-90 transition-opacity">
            Read the Full Story
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
