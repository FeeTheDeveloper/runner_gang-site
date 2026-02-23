export interface Product {
  slug: string;
  name: string;
  price: number;
  image: string;
  status: string;
}

export const products: Product[] = [
  {
    slug: "rg-core-tee-black",
    name: "RG Core Tee – Black",
    price: 85,
    image: "/images/products/rg-core-tee-black.jpg",
    status: "In Stock",
  },
  {
    slug: "rg-core-tee-white",
    name: "RG Core Tee – White",
    price: 85,
    image: "/images/products/rg-core-tee-white.jpg",
    status: "In Stock",
  },
  {
    slug: "rg-core-hoodie-black",
    name: "RG Core Hoodie – Black",
    price: 180,
    image: "/images/products/rg-core-hoodie-black.jpg",
    status: "In Stock",
  },
  {
    slug: "rg-core-hoodie-army",
    name: "RG Core Hoodie – Army",
    price: 180,
    image: "/images/products/rg-core-hoodie-army.jpg",
    status: "In Stock",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
