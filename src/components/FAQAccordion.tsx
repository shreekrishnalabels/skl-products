import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { FAQ } from '../data/products';

interface FAQAccordionProps {
  faqs: FAQ[];
  productName: string;
}

export default function FAQAccordion({ faqs, productName }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-12 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label mb-3">FAQ</div>
          <h2 id="faq-heading" className="font-serif text-[clamp(1.75rem,3.5vw,3rem)] font-normal text-ink mb-3">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-sm font-light text-gray-500">Everything you need to know about {productName}</p>
        </div>

        <div className={`flex flex-col divide-y divide-cream-dark transition-all duration-600 delay-150 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <button
                  className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span
                    className={`font-sans text-sm font-medium leading-snug transition-colors ${isOpen ? 'text-gold-dark' : 'text-ink group-hover:text-gold-dark'}`}
                    itemProp="name"
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 mt-0.5 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p
                    className="font-sans text-sm font-light text-gray-600 leading-relaxed border-l-2 border-gold/30 pl-4"
                    itemProp="text"
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
