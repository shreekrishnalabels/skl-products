import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { GalleryImage } from '../data/products';

interface GalleryMasonryProps {
  images: GalleryImage[];
}

export default function GalleryMasonry({ images }: GalleryMasonryProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 bg-cream/40"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-12 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label mb-3">Gallery</div>
          <h2 id="gallery-heading" className="font-serif text-[clamp(1.75rem,3.5vw,3rem)] font-normal text-ink mb-3">
            Crafted with Precision
          </h2>
          <p className="font-sans text-sm font-light text-gray-500">Real products. Real quality.</p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <div
              key={img.src}
              className={`break-inside-avoid img-zoom rounded-2xl overflow-hidden group relative shadow-soft transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading="lazy"
                decoding="async"
                className={`w-full object-cover ${img.span === 'tall' ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-sans text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
