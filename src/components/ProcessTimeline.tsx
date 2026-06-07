import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  { num: '01', title: 'Concept & Consultation', desc: 'Artwork requirements, material selection, and end-use briefing.' },
  { num: '02', title: 'Artwork & Design', desc: 'CorelDRAW precision artwork, digitising, and client approval.' },
  { num: '03', title: 'Digital Sampling', desc: 'Physical sample creation and courier to client for sign-off.' },
  { num: '04', title: 'Production', desc: 'ISO-grade manufacturing with dedicated quality oversight.' },
  { num: '05', title: 'Quality Inspection', desc: '100-point quality check — colour, dimensions, durability.' },
  { num: '06', title: 'Packing & Shipping', desc: 'Global delivery with full tracking. DHL, FedEx, or sea freight.' },
];

export default function ProcessTimeline() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 bg-ink relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-gold mb-3">Our Process</div>
          <h2 id="process-heading" className="font-serif text-[clamp(1.75rem,3.5vw,3rem)] font-normal text-cream leading-tight">
            From Concept to Delivery
          </h2>
          <p className="font-sans text-sm font-light text-gold/70 mt-2">Our precision manufacturing process</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2" />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`relative flex gap-6 lg:gap-0 items-start pb-10 last:pb-0 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Content */}
                <div className={`lg:w-[calc(50%-2.5rem)] pl-14 lg:pl-0 ${i % 2 === 0 ? 'lg:pr-10 lg:text-right' : 'lg:pl-10 lg:text-left'}`}>
                  <div className="font-serif text-4xl font-light text-gold/25 mb-1">{step.num}</div>
                  <h3 className="font-sans text-sm font-semibold text-cream mb-1.5">{step.title}</h3>
                  <p className="font-sans text-xs font-light text-cream/50 leading-relaxed">{step.desc}</p>
                </div>

                {/* Dot */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold border-2 border-ink mt-1 flex-shrink-0" />

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-[calc(50%-2.5rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
