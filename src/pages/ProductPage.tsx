import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import TrustBar from '../components/TrustBar';
import ProductHero from '../components/ProductHero';
import ProductShowcase from '../components/ProductShowcase';
import ApplicationsGrid from '../components/ApplicationsGrid';
import WhySKL from '../components/WhySKL';
import ProcessTimeline from '../components/ProcessTimeline';
import GalleryMasonry from '../components/GalleryMasonry';
import FAQAccordion from '../components/FAQAccordion';
import RelatedProducts from '../components/RelatedProducts';
import CTABanner from '../components/CTABanner';
import Footer from '../components/Footer';
import type { ProductData } from '../data/products';

interface ProductPageProps {
  product: ProductData;
}

export default function ProductPage({ product }: ProductPageProps) {
  return (
    <>
      <SEOHead product={product} />
      <Navbar />

      {/* WhatsApp FAB */}
      <a
        href={`https://wa.me/918879552022?text=Hi%20I%20need%20info%20about%20${encodeURIComponent(product.name)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-fab"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>

      <main id="main-content">
        <ProductHero product={product} />
        <TrustBar />
        <ProductShowcase product={product} />
        <ApplicationsGrid applications={product.applications} productName={product.name} />
        <WhySKL />
        <ProcessTimeline />
        <GalleryMasonry images={product.gallery} />
        <FAQAccordion faqs={product.faqs} productName={product.name} />
        <RelatedProducts slugs={product.relatedProducts} />
        <CTABanner />

        {/* Prev / Next navigation */}
        <div className="bg-cream-dark border-t border-gold/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
            {product.prevProduct ? (
              <Link
                to={`/${product.prevProduct}`}
                className="flex items-center gap-2 font-sans text-sm font-medium text-gray-600 hover:text-gold transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Previous Product
              </Link>
            ) : <div />}
            {product.nextProduct ? (
              <Link
                to={`/${product.nextProduct}`}
                className="flex items-center gap-2 font-sans text-sm font-medium text-gray-600 hover:text-gold transition-colors group"
              >
                Next Product
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
