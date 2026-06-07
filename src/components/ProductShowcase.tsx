import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { ProductData } from '../data/products';

interface ProductShowcaseProps {
  product: ProductData;
}

export default function ProductShowcase({ product }: ProductShowcaseProps) {
  const { showcase } = product;
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="showcase-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <div className={`img-zoom rounded-3xl overflow-hidden shadow-[0_16px_64px_rgba(0,0,0,0.08)] transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <img
              src={showcase.image}
              alt={`${product.name} manufacturing detail`}
              width={700}
              height={700}
              loading="lazy"
              decoding="async"
              className="w-full aspect-square object-cover"
            />
          </div>

          {/* Specs panel */}
          <div className={`transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="section-label mb-3">Specifications</div>
            <h2 id="showcase-heading" className="font-serif text-[clamp(1.75rem,3.5vw,3rem)] font-normal text-ink leading-tight mb-4">
              {showcase.heading}
            </h2>
            <p className="font-sans text-[0.9375rem] font-light text-gray-600 leading-relaxed mb-8">
              {showcase.description}
            </p>

            {/* Spec grid */}
            <div className="grid grid-cols-2 gap-px bg-cream-dark rounded-2xl overflow-hidden border border-cream-dark">
              {showcase.specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`bg-white px-4 py-3.5 hover:bg-cream/50 transition-colors ${i % 2 === 0 ? '' : ''}`}
                >
                  <div className="font-sans text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-1">{spec.label}</div>
                  <div className="font-sans text-sm font-medium text-ink leading-snug">{spec.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="https://wa.me/918879552022?text=Hi%20I%20need%20a%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs"
              >
                Get Quote →
              </a>
              <a
                href="https://wa.me/918879552022?text=Hi%20I%20need%20a%20sample"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-xs"
              >
                Request Sample
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
