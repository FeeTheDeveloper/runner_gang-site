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

          {/* Social Links Placeholders */}
          <div className="flex justify-center gap-8">
            <a
              href="#"
              className="text-sm text-rg-bone hover:opacity-60 transition-opacity"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-sm text-rg-bone hover:opacity-60 transition-opacity"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-sm text-rg-bone hover:opacity-60 transition-opacity"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
