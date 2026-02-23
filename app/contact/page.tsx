export const metadata = {
  title: 'Contact | Runner Gang Lifestyle',
  description: 'Get in touch with Runner Gang Lifestyle. No noise. Just business.',
};

export default function Contact() {
  return (
    <main>
      <section className="min-h-screen py-24 px-6 bg-rg-black">
        <div className="rg-container max-w-3xl">
          {/* Page Header */}
          <div className="mb-20">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-rg-bone mb-6">
              CONTACT
            </h1>
            <p className="text-lg text-rg-sunset">
              No noise. Just business. Expect a response within 24–48 hours.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-8">
            {/* Email Card */}
            <div className="border border-white/10 bg-rg-charcoal/40 rounded-2xl p-8 backdrop-blur-sm hover:bg-rg-charcoal/60 transition-colors duration-200">
              <h2 className="text-lg font-medium text-rg-bone mb-4">Email</h2>
              <a
                href="mailto:contact@runnergangls.com"
                className="text-rg-sunset hover:text-rg-bone transition-colors duration-200 break-all"
              >
                contact@runnergangls.com
              </a>
              <p className="text-sm text-rg-bone/60 mt-4">
                Send us your inquiry, collaboration proposal, or business opportunity.
              </p>
            </div>

            {/* Instagram Card */}
            <div className="border border-white/10 bg-rg-charcoal/40 rounded-2xl p-8 backdrop-blur-sm hover:bg-rg-charcoal/60 transition-colors duration-200">
              <h2 className="text-lg font-medium text-rg-bone mb-4">Instagram</h2>
              <a
                href="https://instagram.com/runnerganglifestyle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rg-sunset hover:text-rg-bone transition-colors duration-200"
              >
                @runnerganglifestyle
              </a>
              <p className="text-sm text-rg-bone/60 mt-4">
                Follow us for drops, updates, and the Runner Gang lifestyle.
              </p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <p className="text-sm text-rg-bone/60 leading-relaxed">
              We respond to all inquiries. For urgent matters, reach out via email for fastest response. Thank you for supporting the Runner Gang movement.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
