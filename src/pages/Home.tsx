import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Sparkles, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrustBar from '../components/TrustBar';
import { products } from '../data/products';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Shree Krishna Labels — Premium Garment Branding Solutions | Vasai, Mumbai</title>
        <meta name="description" content="India's trusted premium label manufacturer since 1999. Woven labels, satin labels, embroidered badges, hang tags & more. 500+ global brands. Free samples." />
        <link rel="canonical" href="https://www.shreekrishnalabels.in/products" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-cream via-white to-cream-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-white text-xs font-sans font-medium text-gold-dark mb-6">
            <Sparkles className="w-3 h-3" />
            Established 1999 · Vasai, Maharashtra
          </div>
          <h1 className="font-serif text-[clamp(3rem,7vw,6rem)] font-normal text-ink leading-[1.02] mb-5">
            The Signature Every<br />
            <em className="text-gold-gradient not-italic">Garment Deserves</em>
          </h1>
          <p className="font-sans text-lg font-light text-gray-500 max-w-lg mx-auto mb-10">
            Premium garment label manufacturers serving 500+ brands in 40+ countries since 1999.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            <a href="https://wa.me/918879552022?text=Hi%20I%20need%20a%20free%20sample" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Get Free Sample
            </a>
            <Link to="/woven-labels" className="btn-ghost">
              Browse Products →
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {[['1999', 'Established'], ['500+', 'Brands Served'], ['40+', 'Countries'], ['25+', 'Years Experience']].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="font-serif text-3xl font-medium text-gold">{val}</div>
                <div className="font-sans text-xs font-medium text-gray-400 uppercase tracking-wider mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Product grid */}
      <section className="py-24 lg:py-32 bg-white" aria-labelledby="products-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="section-label mb-3">Our Products</div>
            <h2 id="products-heading" className="font-serif text-[clamp(1.75rem,3.5vw,3rem)] font-normal text-ink">
              Complete Label Solutions
            </h2>
            <p className="font-sans text-sm font-light text-gray-500 mt-2">15 product categories, infinite branding possibilities</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map(product => (
              <Link
                key={product.slug}
                to={`/${product.slug}`}
                className="group bg-cream/30 rounded-2xl overflow-hidden border border-cream-dark hover:border-gold/30 hover:shadow-gold-sm transition-all duration-300"
              >
                <div className="img-zoom h-48 overflow-hidden bg-cream">
                  <img
                    src={product.hero.image}
                    alt={product.name}
                    width={400}
                    height={192}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="font-sans text-[10px] font-medium text-gold uppercase tracking-widest mb-1">{product.category}</div>
                  <h3 className="font-sans text-base font-semibold text-ink mb-1.5">{product.name}</h3>
                  <p className="font-sans text-xs font-light text-gray-500 leading-relaxed mb-3 line-clamp-2">{product.hero.subtitle}</p>
                  <span className="inline-flex items-center gap-1 font-sans text-xs font-medium text-gold group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
