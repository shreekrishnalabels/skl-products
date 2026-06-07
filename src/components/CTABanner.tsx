import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CTABanner() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 lg:py-32 bg-gradient-to-br from-gold to-gold-dark overflow-hidden grain-overlay"
      aria-label="Contact call to action"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className={`relative max-w-3xl mx-auto px-6 lg:px-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal text-white leading-tight mb-4">
          Ready to Elevate Your <br className="hidden lg:block" />Brand Identity?
        </h2>
        <p className="font-sans text-base font-light text-white/80 mb-10 max-w-xl mx-auto">
          Partner with India's most trusted label manufacturer. Free samples, fast turnaround, global delivery.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/918879552022?text=Hi%20I%20need%20a%20free%20sample"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-ink font-sans font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-cream transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get Free Sample
          </a>
          <a
            href="https://wa.me/918879552022?text=Hi%20I%20need%20a%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-white"
          >
            Request Quote →
          </a>
        </div>
        <p className="mt-6 font-sans text-xs text-white/50">
          Shree Krishna Labels Co. · Vasai, Maharashtra · Est. 1999 · ISO 9001
        </p>
      </div>
    </section>
  );
}
