import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import { products, getProductBySlug } from './data/products';

function ProductRoute({ slug }: { slug: string }) {
  const product = getProductBySlug(slug);
  if (!product) return <Navigate to="/" replace />;
  return <ProductPage product={product} />;
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-gold border-t-transparent animate-spin" />
        <span className="font-sans text-sm text-gray-500">Loading…</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          {products.map(p => (
            <Route
              key={p.slug}
              path={`/${p.slug}`}
              element={<ProductRoute slug={p.slug} />}
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
