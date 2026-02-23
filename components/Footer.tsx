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

          {/* Contact & Social Links */}
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="mailto:contact@runnergangls.com"
              className="text-sm text-rg-bone/70 hover:text-rg-bone transition-colors duration-200"
            >
              Contact
            </a>
            <a
              href="https://instagram.com/runnerganglifestyle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-rg-bone/70 hover:text-rg-bone transition-colors duration-200"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
