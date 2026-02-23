import Link from 'next/link';
import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="group cursor-pointer">
        {/* Image Container with Hover Effects */}
        <div className="bg-rg-charcoal aspect-square mb-6 overflow-hidden border border-rg-charcoal group-hover:border-rg-sunset transition-all duration-300">
          <div className="w-full h-full bg-rg-charcoal flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            {/* Placeholder for image */}
            <span className="text-rg-mauve text-sm">{product.name}</span>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-3">
          {/* Status Badge */}
          {product.status && (
            <div className="inline-block">
              <span className="text-xs uppercase tracking-widest font-medium text-rg-sunset px-3 py-1 border border-rg-sunset">
                {product.status}
              </span>
            </div>
          )}

          {/* Name */}
          <h3 className="text-sm font-medium text-rg-bone group-hover:opacity-70 transition-opacity">
            {product.name}
          </h3>

          {/* Price */}
          <p className="text-sm font-medium text-rg-bone">${product.price}</p>
        </div>
      </div>
    </Link>
  );
}
