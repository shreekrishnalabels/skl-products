import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { getRelatedProducts } from '../data/products';

interface RelatedProductsProps {
  slugs: string[];
}

export default function RelatedProducts({ slugs }: RelatedProductsProps) {
  const { ref, isVisible } = useScrollAnimation();
  const related = getRelatedProducts(slugs);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 bg-cream/30"
      aria-labelledby="related-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`mb-10 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label mb-3">Explore More</div>
          <h2 id="related-heading" className="font-serif text-[clamp(1.75rem,3.5vw,3rem)] font-normal text-ink">
            Explore Related Products
          </h2>
          <p className="font-sans text-sm font-light text-gray-500 mt-2">Complete your branding with our full range</p>
        </div>

        <div className={`flex gap-4 overflow-x-auto no-scrollbar pb-2 transition-all duration-600 delay-150 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {related.map(product => (
            <Link
              key={product.slug}
              to={`/${product.slug}`}
              className="flex-shrink-0 w-56 bg-white rounded-2xl overflow-hidden border border-cream-dark hover:border-gold/40 hover:shadow-gold-sm transition-all duration-300 group"
            >
              <div className="img-zoom h-36 overflow-hidden bg-cream">
                <img
                  src={product.hero.image}
                  alt={product.name}
                  width={224}
                  height={144}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="font-sans text-[10px] font-medium text-gold uppercase tracking-widest mb-1">{product.category}</div>
                <h3 className="font-sans text-sm font-semibold text-ink mb-1">{product.name}</h3>
                <p className="font-sans text-xs font-light text-gray-500 leading-snug mb-3 line-clamp-2">{product.hero.subtitle}</p>
                <span className="inline-flex items-center gap-1 font-sans text-xs font-medium text-gold group-hover:gap-2 transition-all">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
