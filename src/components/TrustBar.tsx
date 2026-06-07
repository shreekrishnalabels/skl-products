import { CheckCircle2 } from 'lucide-react';

const trustItems = [
  '25+ Years Experience',
  'Global Shipping',
  'OEM Manufacturer',
  'Low MOQ',
  'Fast Delivery',
];

export default function TrustBar() {
  return (
    <div className="bg-cream-dark border-y border-gold/15 py-3">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center lg:justify-between gap-4 lg:gap-0 flex-wrap">
          {trustItems.map((item, i) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span className="font-sans text-xs font-medium text-gray-700 whitespace-nowrap">{item}</span>
              {i < trustItems.length - 1 && (
                <span className="hidden lg:block w-px h-4 bg-gold/20 ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
