import { Helmet } from 'react-helmet-async';
import type { ProductData } from '../data/products';

interface SEOHeadProps {
  product: ProductData;
}

export default function SEOHead({ product }: SEOHeadProps) {
  return (
    <Helmet>
      <title>{product.seoTitle}</title>
      <meta name="description" content={product.metaDescription} />
      <meta name="keywords" content={product.keywords.join(', ')} />
      <link rel="canonical" href={product.canonicalUrl} />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={product.canonicalUrl} />
      <meta property="og:title" content={product.seoTitle} />
      <meta property="og:description" content={product.metaDescription} />
      <meta property="og:image" content={product.ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={product.seoTitle} />
      <meta name="twitter:description" content={product.metaDescription} />
      <meta name="twitter:image" content={product.ogImage} />
      <script type="application/ld+json">{JSON.stringify(product.schemas.breadcrumb)}</script>
      <script type="application/ld+json">{JSON.stringify(product.schemas.product)}</script>
      <script type="application/ld+json">{JSON.stringify(product.schemas.faq)}</script>
      <script type="application/ld+json">{JSON.stringify(product.schemas.localBusiness)}</script>
      <script type="application/ld+json">{JSON.stringify(product.schemas.organization)}</script>
    </Helmet>
  );
}
