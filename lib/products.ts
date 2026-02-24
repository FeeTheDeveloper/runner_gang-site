export interface Product {
  slug: string;
  name: string;
  price: number;
  image: string;
  status: string;
  link: string;
}

export const products: Product[] = [
  {
    slug: "rg-core-tee-black",
    name: "RG Core Tee – Black",
    price: 85,
    image: "/images/products/rg-core-tee-black.jpg",
    status: "In Stock",
    link: "",
  },
  {
    slug: "rg-core-tee-white",
    name: "RG Core Tee – White",
    price: 85,
    image: "/images/products/rg-core-tee-white.jpg",
    status: "In Stock",
    link: "",
  },
  {
    slug: "rg-core-hoodie-black",
    name: "RG Core Hoodie – Black",
    price: 180,
    image: "/images/products/rg-core-hoodie-black.jpg",
    status: "In Stock",
    link: "",
  },
  {
    slug: "rg-core-hoodie-army",
    name: "RG Core Hoodie – Army",
    price: 180,
    image: "/images/products/rg-core-hoodie-army.jpg",
    status: "In Stock",
    link: "",
  },
  {
    slug: "play-runner-core-hoodie",
    name: "Play Runner Core Hoodie – Black",
    price: 180,
    image: "/images/products/play-runner-core-hoodie.jpg",
    status: "Limited Drop",
    link: "https://your-printify-link.com/play-runner-core-hoodie",
  },
  {
    slug: "code-tee-bone",
    name: "The Code Tee – Bone",
    price: 85,
    image: "/images/products/code-tee-bone.jpg",
    status: "Limited Drop",
    link: "https://your-printify-link.com/code-tee-bone",
  },
  {
    slug: "silent-execution-crewneck",
    name: "Silent Execution Crewneck – Charcoal",
    price: 100,
    image: "/images/products/silent-execution-crewneck.jpg",
    status: "Limited Drop",
    link: "https://your-printify-link.com/silent-execution-crewneck",
  },
  {
    slug: "strategic-motion-hoodie",
    name: "Strategic Motion Hoodie – Mauve Dust",
    price: 180,
    image: "/images/products/strategic-motion-hoodie.jpg",
    status: "Limited Drop",
    link: "https://your-printify-link.com/strategic-motion-hoodie",
  },
  {
    slug: "forward-only-long-sleeve",
    name: "Forward Only Long Sleeve – Black",
    price: 90,
    image: "/images/products/forward-only-long-sleeve.jpg",
    status: "Limited Drop",
    link: "https://your-printify-link.com/forward-only-long-sleeve",
  },
  {
    slug: "controlled-drop-cap",
    name: "Controlled Drop Cap",
    price: 40,
    image: "/images/products/controlled-drop-cap.jpg",
    status: "Limited Drop",
    link: "https://your-printify-link.com/controlled-drop-cap",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
