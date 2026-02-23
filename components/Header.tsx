'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full h-16 md:h-20 bg-rgBlack/70 backdrop-blur-md border-b border-white/10 z-50">
      <div className="rg-container h-full px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold tracking-wide text-rg-bone hover:text-rg-bone transition-opacity">
          RUNNER GANG
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 md:gap-12">
          <Link
            href="/"
            className="text-sm text-rg-bone/80 hover:text-rg-bone transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-sm text-rg-bone/80 hover:text-rg-bone transition-colors duration-200"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="text-sm text-rg-bone/80 hover:text-rg-bone transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm text-rg-bone/80 hover:text-rg-bone transition-colors duration-200"
          >
            Contact
          </Link>

          {/* CTA Button */}
          <Link
            href="/shop"
            className="bg-rg-bone text-rg-black px-4 md:px-6 py-2 text-sm font-medium hover:bg-rg-bone/90 transition-colors duration-200 ml-2 md:ml-4"
          >
            SHOP
          </Link>
        </nav>
      </div>
    </header>
  );
}
