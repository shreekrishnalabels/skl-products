import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { useNavScroll } from '../hooks/useScrollAnimation';
import { products } from '../data/products';

export default function Navbar() {
  const scrolled = useNavScroll(80);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <a href="#main-content" className="skip-nav">Skip to main content</a>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-cream-dark'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/MAINLOGO.png" alt="Shree Krishna Labels" className="h-10 w-auto object-contain" />
             <span className={`font-serif text-lg font-medium transition-colors ${scrolled ? 'text-ink' : 'text-ink'}`}>
              Shree <span className="text-gold-gradient">Krishna</span> Labels
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className={`font-sans text-sm font-medium transition-colors hover:text-gold ${scrolled ? 'text-gray-700' : 'text-gray-700'} ${location.pathname === '/' ? 'text-gold' : ''}`}>
              Home
            </Link>

            {/* Products dropdown */}
            <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
              <button className={`flex items-center gap-1 font-sans text-sm font-medium transition-colors hover:text-gold ${scrolled ? 'text-gray-700' : 'text-gray-700'}`}>
                Products <ChevronDown className={`w-3.5 h-3.5 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] border border-cream-dark p-3 grid grid-cols-2 gap-1">
                  {products.map(p => (
                    <Link
                      key={p.slug}
                      to={`/${p.slug}`}
                      className="px-3 py-2 rounded-xl text-xs font-sans font-medium text-gray-700 hover:bg-cream hover:text-gold transition-colors"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a href="https://www.shreekrishnalabels.in/#about" className={`font-sans text-sm font-medium transition-colors hover:text-gold ${scrolled ? 'text-gray-700' : 'text-gray-700'}`}>
              About
            </a>
            <a href="https://www.shreekrishnalabels.in/#contact" className={`font-sans text-sm font-medium transition-colors hover:text-gold ${scrolled ? 'text-gray-700' : 'text-gray-700'}`}>
              Contact
            </a>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a      
              href="https://wa.me/918879552022?text=Hi%20I%20need%20a%20quote%20for%20labels"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs"
            >
              Get Free Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:text-gold transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-cream-dark">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              <Link to="/" className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-cream hover:text-gold" onClick={() => setMenuOpen(false)}>Home</Link>
              <div className="px-4 py-2 text-xs font-medium text-gold uppercase tracking-widest">Products</div>
              {products.map(p => (
                <Link
                  key={p.slug}
                  to={`/${p.slug}`}
                  className="px-6 py-2 rounded-xl text-sm font-medium text-gray-600 hover:bg-cream hover:text-gold"
                  onClick={() => setMenuOpen(false)}
                >
                  {p.name}
                </Link>
              ))}
              <div className="mt-2 pt-2 border-t border-cream-dark">
                <a
                  href="https://wa.me/918879552022?text=Hi%20I%20need%20a%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-xs"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
