import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-temple-midnight border-t border-temple-gold/20 py-12">
    <div className="container text-center">
      <div className="text-temple-gold text-2xl mb-3">✦</div>
      <p className="font-display text-temple-on-dark/80 text-sm italic mb-4">
        "On that day, the Eternal One will be One and His name will be One."
        <span className="block text-temple-gold/60 text-xs mt-1 not-italic font-ui">— Zechariah 14:9</span>
      </p>
      <div className="gold-divider w-24 mx-auto mb-6" />
      <div className="flex justify-center gap-8 text-xs font-ui uppercase tracking-widest mb-6">
        <Link to="/" className="text-temple-on-dark/50 hover:text-temple-gold transition-colors">Home</Link>
        <Link to="/blog" className="text-temple-on-dark/50 hover:text-temple-gold transition-colors">The Story</Link>
        <Link to="/contact" className="text-temple-on-dark/50 hover:text-temple-gold transition-colors">Contact</Link>
      </div>
      <p className="text-temple-on-dark/30 text-xs font-ui">
        © {new Date().getFullYear()} Beit HaMikdash — An Educational Resource
      </p>
    </div>
  </footer>
);

export default Footer;
