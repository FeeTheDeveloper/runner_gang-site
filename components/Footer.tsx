'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-rgCharcoal mt-32">
      <div className="rg-container py-16">
        {/* Main Footer Content */}
        <div className="text-center space-y-8">
          <p className="text-sm text-rg-bone">
            Runner Gang Lifestyle © {currentYear}
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="/shop"
              className="text-rg-bone/70 hover:text-rg-bone transition-colors duration-200"
            >
              Shop
            </a>
            <a
              href="/about"
              className="text-rg-bone/70 hover:text-rg-bone transition-colors duration-200"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-rg-bone/70 hover:text-rg-bone transition-colors duration-200"
            >
              Contact
            </a>
            <a
              href="https://instagram.com/runnerganglifestyle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rg-bone/70 hover:text-rg-bone transition-colors duration-200"
            >
              Instagram
            </a>
            <a
              href="/shipping"
              className="text-rg-bone/70 hover:text-rg-bone transition-colors duration-200"
            >
              Shipping Policy
            </a>
            <a
              href="/returns"
              className="text-rg-bone/70 hover:text-rg-bone transition-colors duration-200"
            >
              Returns Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
