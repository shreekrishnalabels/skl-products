import {
  Shirt, Zap, Crown, Heart, Building2, Baby, Globe, Home,
  Dumbbell, Activity, Waves, Users, Mountain, Watch, HardHat,
  GraduationCap, Trophy, Shield, Star, ShoppingBag, Briefcase,
  Footprints, Gift, Tag, Warehouse, Package, Boxes, ClipboardCheck,
  BarChart3, Truck, RefreshCcw, CreditCard, RotateCcw, Scan,
  Scissors, Stamp, Mail, Leaf,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { Application } from '../data/products';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shirt, Zap, Crown, Heart, Building2, Baby, Globe, Home,
  Dumbbell, Activity, Waves, Users, Mountain, Watch, HardHat,
  GraduationCap, Trophy, Shield, Star, ShoppingBag, Briefcase,
  Footprints, Gift, Tag, Warehouse, Package, Boxes, ClipboardCheck,
  BarChart3, Truck, RefreshCcw, CreditCard, RotateCcw, Scan,
  Scissors, Seal: Stamp, Mail, Leaf,
};

interface ApplicationsGridProps {
  applications: Application[];
  productName: string;
}

export default function ApplicationsGrid({ applications, productName }: ApplicationsGridProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 bg-gradient-to-br from-cream via-white to-cream-dark"
      aria-labelledby="apps-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-12 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label mb-3">Applications</div>
          <h2 id="apps-heading" className="font-serif text-[clamp(1.75rem,3.5vw,3rem)] font-normal text-ink mb-3">
            Where {productName} Makes an Impact
          </h2>
          <p className="font-sans text-sm font-light text-gray-500">Trusted across industries worldwide</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
          {applications.map((app, i) => {
            const Icon = iconMap[app.icon] || Shirt;
            return (
              <div
                key={app.title}
                className={`bg-white rounded-2xl p-5 hover:border-gold/40 hover:shadow-gold-sm border border-transparent transition-all duration-300 hover:scale-[1.02] group cursor-default ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center mb-3 group-hover:bg-gold/10 transition-colors">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-sans text-sm font-semibold text-ink mb-1">{app.title}</h3>
                <p className="font-sans text-xs font-light text-gray-500 leading-relaxed">{app.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
