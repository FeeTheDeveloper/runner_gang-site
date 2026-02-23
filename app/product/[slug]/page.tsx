import Link from 'next/link';
import { getProductBySlug, products } from '@/lib/products';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | Runner Gang Lifestyle`,
    description: `${product.name} - ${product.status}`,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <section className="min-h-screen py-24 px-6 bg-rg-black">
        <div className="rg-container">
          {/* Back Link */}
          <Link
            href="/shop"
            className="inline-block text-sm mb-12 text-rg-bone hover:opacity-60 transition-opacity"
          >
            ← Back to Shop
          </Link>

          {/* Product Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Image */}
            <div>
              <div className="bg-rg-charcoal aspect-square flex items-center justify-center">
                <span className="text-rg-mauve">{product.name}</span>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-start space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-rg-bone">
                  {product.name}
                </h1>
                <p className="text-xl text-rg-sunset font-light">
                  ${product.price}
                </p>
              </div>

              {/* Status */}
              <div>
                <p className="text-sm font-medium mb-2 text-rg-bone">Availability</p>
                <p className="text-lg text-rg-sunset">{product.status}</p>
              </div>

              {/* Description */}
              <div className="space-y-4 text-rg-bone">
                <p>
                  Premium minimal piece from the Runner Gang Lifestyle collection. Designed with attention to detail and crafted from the finest materials.
                </p>
                <p>
                  Built for daily movement and intentional design. This item exemplifies our philosophy of strategic minimalism and timeless style.
                </p>
              </div>

              {/* CTA */}
              <div className="pt-8">
                <button className="w-full btn-primary">
                  Add to Cart
                </button>
              </div>

              {/* Product Details */}
              <div className="border-t border-white/10 pt-8 space-y-6">
                <div>
                  <h3 className="font-medium text-rg-bone mb-4">PRODUCT DETAILS</h3>
                  
                  <div className="space-y-4 text-sm text-rg-bone/80">
                    <div>
                      <p className="font-medium text-rg-bone mb-2">Fit</p>
                      <p className="text-rg-bone/80">Modern athletic structured fit. True to size.</p>
                    </div>

                    <div>
                      <p className="font-medium text-rg-bone mb-2">Fabric</p>
                      {product.name.includes('Tee') ? (
                        <p className="text-rg-bone/80">
                          <span className="text-rg-bone font-medium">220 GSM premium cotton (tee)</span><br />
                          380+ GSM heavyweight cotton blend (hoodie)
                        </p>
                      ) : (
                        <p className="text-rg-bone/80">
                          220 GSM premium cotton (tee)<br />
                          <span className="text-rg-bone font-medium">380+ GSM heavyweight cotton blend (hoodie)</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <p className="font-medium text-rg-bone mb-2">Design</p>
                      <p className="text-rg-bone/80">Bold brush "Runner Gang" logo.<br />Front or back placement depending on piece.</p>
                    </div>

                    <div>
                      <p className="font-medium text-rg-bone mb-2">Purpose</p>
                      <p className="text-rg-bone/80">Built for daily movement. Built to last.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="border-t border-rg-charcoal pt-8 space-y-4 text-sm">
                <div>
                  <p className="font-medium mb-2 text-rg-bone">Product ID</p>
                  <p className="text-rg-mauve">{product.slug}</p>
                </div>
                <div>
                  <p className="font-medium mb-2 text-rg-bone">Care</p>
                  <p className="text-rg-mauve">Machine wash cold. Lay flat to dry.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-32 pt-16 border-t border-rg-charcoal">
            <h2 className="text-3xl font-light tracking-tight mb-12 text-rg-bone">
              Other Items
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {products
                .filter((p) => p.slug !== product.slug)
                .slice(0, 3)
                .map((relatedProduct) => (
                  <Link key={relatedProduct.slug} href={`/product/${relatedProduct.slug}`}>
                    <div className="group">
                      <div className="bg-rg-charcoal aspect-square mb-4 flex items-center justify-center">
                        <span className="text-rg-mauve text-sm">
                          {relatedProduct.name}
                        </span>
                      </div>
                      <h3 className="text-sm font-medium text-rg-bone group-hover:opacity-60 transition-opacity">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm text-rg-sunset">
                        ${relatedProduct.price}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
