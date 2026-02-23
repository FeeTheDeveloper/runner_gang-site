import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Manifesto from '@/components/Manifesto';
import EmailCapture from '@/components/EmailCapture';
import { products } from '@/lib/products';

export default function Home() {
  // Featured products (first 3)
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <section className="bg-rg-black py-32 px-6">
        <div className="rg-container">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-rg-bone mb-4">
              Latest Drop
            </h2>
            <p className="text-lg text-rg-sunset">
              Curated pieces for the disciplined runner.
            </p>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Manifesto Section */}
      <Manifesto />

      {/* Email Capture Section */}
      <EmailCapture />
    </>
  );
}
