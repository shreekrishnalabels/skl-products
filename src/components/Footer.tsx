import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Sparkles, Instagram, Linkedin, Facebook } from 'lucide-react';
import { products } from '../data/products';

export default function Footer() {
  const col1 = products.slice(0, 8);
  const col2 = products.slice(8);

  return (
    <footer className="bg-ink text-cream/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12 pb-12 border-b border-white/8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-ink" />
              </div>
              <span className="font-serif text-base font-medium text-cream">
                Shree <span className="text-gold">Krishna</span> Labels
              </span>
            </div>
            <p className="font-sans text-xs font-light leading-relaxed mb-1 italic text-cream/50">
              "The Signature Every Garment Deserves"
            </p>
            <p className="font-sans text-xs font-light text-cream/40 mb-5">
              Established 1999 · Vasai, Maharashtra
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/shree-krishna-labels" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.instagram.com/shreekrishnalabels" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.facebook.com/shreekrishnalabels" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="https://wa.me/918879552022" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#25d366]/20 transition-colors text-[#25d366]">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* Products col 1 */}
          <div>
            <h3 className="font-sans text-xs font-semibold text-cream/90 uppercase tracking-widest mb-4">Products</h3>
            <ul className="space-y-2">
              {col1.map(p => (
                <li key={p.slug}>
                  <Link to={`/${p.slug}`} className="font-sans text-xs font-light text-cream/50 hover:text-gold transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products col 2 + quick links */}
          <div>
            <h3 className="font-sans text-xs font-semibold text-cream/90 uppercase tracking-widest mb-4">More Products</h3>
            <ul className="space-y-2 mb-6">
              {col2.map(p => (
                <li key={p.slug}>
                  <Link to={`/${p.slug}`} className="font-sans text-xs font-light text-cream/50 hover:text-gold transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-sans text-xs font-semibold text-cream/90 uppercase tracking-widest mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: 'https://www.shreekrishnalabels.in' },
                { label: 'About Us', href: 'https://www.shreekrishnalabels.in/#about' },
                { label: 'Contact', href: 'https://www.shreekrishnalabels.in/#contact' },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href} className="font-sans text-xs font-light text-cream/50 hover:text-gold transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs font-semibold text-cream/90 uppercase tracking-widest mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                <span className="font-sans text-xs font-light text-cream/50">Vasai East, Maharashtra, India 401208</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <a href="tel:+918879552022" className="font-sans text-xs font-light text-cream/50 hover:text-gold transition-colors">+91 88795 52022</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <a href="mailto:info@shreekrishnalabels.in" className="font-sans text-xs font-light text-cream/50 hover:text-gold transition-colors">info@shreekrishnalabels.in</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <a href="https://www.shreekrishnalabels.in" className="font-sans text-xs font-light text-cream/50 hover:text-gold transition-colors">shreekrishnalabels.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs font-light text-cream/30">
            © 2025 Shree Krishna Labels Co. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.shreekrishnalabels.in/privacy" className="font-sans text-xs font-light text-cream/30 hover:text-gold transition-colors">Privacy Policy</a>
            <span className="text-cream/20">·</span>
            <a href="https://www.shreekrishnalabels.in/terms" className="font-sans text-xs font-light text-cream/30 hover:text-gold transition-colors">Terms</a>
            <span className="text-cream/20">·</span>
            <a href="https://www.shreekrishnalabels.in/sitemap.xml" className="font-sans text-xs font-light text-cream/30 hover:text-gold transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
