'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-rgCharcoal">
      <div className="rg-container py-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold tracking-wide text-rg-bone">
          RUNNER GANG
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-12">
          <Link
            href="/"
            className="text-sm text-rg-bone hover:opacity-60 transition-opacity"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-sm text-rg-bone hover:opacity-60 transition-opacity"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="text-sm text-rg-bone hover:opacity-60 transition-opacity"
          >
            About
          </Link>

          {/* CTA Button */}
          <Link
            href="/shop"
            className="btn-primary"
          >
            SHOP
          </Link>
        </nav>
      </div>
    </header>
  );
}
