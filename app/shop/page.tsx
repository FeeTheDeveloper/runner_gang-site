import ProductGrid from '@/components/ProductGrid';
import { products } from '@/lib/products';

export const metadata = {
  title: 'Shop | Runner Gang Lifestyle',
  description: 'Explore our premium minimal streetwear collection.',
};

export default function Shop() {
  return (
    <main>
      <section className="min-h-screen py-24 px-6 bg-rg-black">
        <div className="rg-container">
          {/* Page Header */}
          <div className="mb-20">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4 text-rg-bone">
              SHOP
            </h1>
            <p className="text-lg text-rg-sunset">
              Limited drops. Controlled access. No extras.
            </p>
          </div>

          {/* Product Grid */}
          <ProductGrid products={products} />
        </div>
      </section>
    </main>
  );
}
