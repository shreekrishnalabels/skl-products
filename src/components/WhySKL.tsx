import { Award, Settings2, Palette, Zap, Globe, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const reasons = [
  { icon: Award, number: '25+', title: '25+ Years of Excellence', desc: 'Serving premium garment brands since 1999 with uncompromising quality.' },
  { icon: Settings2, number: '⚙', title: 'Latest Machinery & Technology', desc: 'Tajima embroidery, jacquard looms, and digital printing for precision output.' },
  { icon: Palette, number: '∞', title: 'Custom Manufacturing End-to-End', desc: 'From artwork digitising to bulk production — all under one roof in Vasai.' },
  { icon: Zap, number: '7', title: 'Fast Sampling', desc: 'Physical samples in 5–7 days. Rush sampling available in 3 days.' },
  { icon: Globe, number: '40+', title: 'Worldwide Delivery', desc: 'Shipping to 40+ countries. DHL, FedEx, and sea freight coordination.' },
  { icon: MessageCircle, number: '24/7', title: 'Dedicated Support Team', desc: 'WhatsApp-first communication. Named account manager for every client.' },
];

export default function WhySKL() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-12 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label mb-3">Why Choose Us</div>
          <h2 id="why-heading" className="font-serif text-[clamp(1.75rem,3.5vw,3rem)] font-normal text-ink mb-3">
            The SKL Difference
          </h2>
          <p className="font-sans text-sm font-light text-gray-500">Why 500+ brands trust us for their garment branding</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className={`rounded-2xl p-6 border border-cream-dark hover:border-gold/30 hover:shadow-soft transition-all duration-300 group bg-cream/30 hover:bg-white ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-cream-dark flex items-center justify-center flex-shrink-0 group-hover:bg-gold/5 transition-colors shadow-sm">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl font-medium text-gold mb-1">{r.number}</div>
                    <h3 className="font-sans text-sm font-semibold text-ink mb-1.5">{r.title}</h3>
                    <p className="font-sans text-xs font-light text-gray-500 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
