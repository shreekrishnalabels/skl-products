import { Link } from 'react-router-dom';
import { Star, ChevronRight } from 'lucide-react';
import type { ProductData } from '../data/products';

interface ProductHeroProps {
  product: ProductData;
}

export default function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className="relative min-h-screen pt-20 flex items-center bg-gradient-to-br from-cream via-white to-[#f0ebe0] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-gold/4 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">

          {/* Left column */}
          <div>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="font-sans text-xs text-gold hover:text-gold-dark transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-gray-400" />
              <span className="font-sans text-xs text-gray-400">Products</span>
              <ChevronRight className="w-3 h-3 text-gray-400" />
              <span className="font-sans text-xs text-gray-600">{product.name}</span>
            </nav>

            {/* Category badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/40 bg-cream text-xs font-sans font-medium text-gold-dark mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              {product.hero.badge}
            </div>

            {/* H1 */}
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.05] text-ink mb-3">
              {product.hero.heading}
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-base lg:text-lg font-light text-gray-600 leading-relaxed max-w-md mb-8">
              {product.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="https://wa.me/918879552022?text=Hi%20I%20need%20a%20free%20sample"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                ✦ Get Free Sample
              </a>
              <a
                href="https://wa.me/918879552022?text=Hi%20I%20need%20a%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Request Quote →
              </a>
            </div>

            {/* Trust micro-bar */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                <span className="font-sans text-xs font-medium text-gray-600">4.9 Rating</span>
              </div>
              <span className="w-px h-3 bg-gray-300" />
              <span className="font-sans text-xs font-medium text-gray-600">500+ Global Clients</span>
              <span className="w-px h-3 bg-gray-300" />
              <span className="font-sans text-xs font-medium text-gray-600">25 Yrs Experience</span>
            </div>
          </div>

          {/* Right column — image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden img-zoom shadow-[0_24px_80px_rgba(0,0,0,0.1)] animate-float">
              <img
                src={product.hero.image}
                alt={`${product.name} by Shree Krishna Labels`}
                width={700}
                height={700}
                loading="eager"
                decoding="async"
                className="w-full aspect-square object-cover"
              />
              {/* Cream glow */}
              <div className="absolute inset-0 bg-gradient-to-tl from-gold/5 to-transparent pointer-events-none rounded-3xl" />
            </div>

            {/* Stats callout card */}
            <div className="absolute -bottom-4 -left-4 glass-card p-4 shadow-gold-sm">
              <div className="flex gap-5">
                <div className="text-center">
                  <div className="font-serif text-xl font-medium text-gold">{product.hero.stat1.value}</div>
                  <div className="font-sans text-[10px] font-medium text-gray-500 uppercase tracking-wider mt-0.5">{product.hero.stat1.label}</div>
                </div>
                <div className="w-px bg-gray-200" />
                <div className="text-center">
                  <div className="font-serif text-xl font-medium text-gold">{product.hero.stat2.value}</div>
                  <div className="font-sans text-[10px] font-medium text-gray-500 uppercase tracking-wider mt-0.5">{product.hero.stat2.label}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
