export interface Product {
  slug: string;
  name: string;
  price: number;
  image: string;
  status: string;
}

export const products: Product[] = [
  {
    slug: "essential-runner-tee",
    name: "Essential Runner Tee",
    price: 85,
    image: "/images/essential-runner-tee.jpg",
    status: "In Stock",
  },
  {
    slug: "flight-hoodie",
    name: "Flight Hoodie",
    price: 180,
    image: "/images/flight-hoodie.jpg",
    status: "Limited Drop",
  },
  {
    slug: "performance-crew",
    name: "Performance Crew",
    price: 95,
    image: "/images/performance-crew.jpg",
    status: "In Stock",
  },
  {
    slug: "altitude-jacket",
    name: "Altitude Jacket",
    price: 320,
    image: "/images/altitude-jacket.jpg",
    status: "Limited Drop",
  },
  {
    slug: "minimal-tank",
    name: "Minimal Tank",
    price: 65,
    image: "/images/minimal-tank.jpg",
    status: "In Stock",
  },
  {
    slug: "runner-shorts",
    name: "Runner Shorts",
    price: 85,
    image: "/images/runner-shorts.jpg",
    status: "In Stock",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
