export const metadata = {
  title: 'About | Runner Gang Lifestyle',
  description: 'Learn about Runner Gang Lifestyle and our design philosophy.',
};

export default function About() {
  return (
    <main>
      <section className="min-h-screen py-24 px-6 bg-rg-black">
        <div className="max-w-3xl mx-auto">
          {/* Page Header */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8 text-rg-bone">
              About Runner Gang
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-12 text-lg leading-relaxed">
            <p className="text-rg-bone">
              Runner Gang Lifestyle is a premium minimal streetwear brand inspired by the design discipline of Fear of God. We create pieces for those who move with purpose—individuals who understand that style and substance aren't mutually exclusive.
            </p>

            <p className="text-rg-bone">
              Every piece in our collection is carefully considered. We focus on clean lines, premium materials, and timeless silhouettes that transcend seasonal trends. Our approach is rooted in functionality and aesthetic restraint.
            </p>

            <p className="text-rg-bone">
              The Runner Gang philosophy is simple: dress with intention. Whether you're on the track, in the city, or anywhere in between, our collection serves as a foundation for personal expression through refined minimalism.
            </p>

            <div className="pt-12 border-t border-rg-charcoal space-y-8">
              <h2 className="text-2xl font-light tracking-tight text-rg-bone">Our Values</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2 text-rg-sunset">Quality</h3>
                  <p className="text-rg-bone">
                    We prioritize premium materials and impeccable construction in every piece.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-2 text-rg-sunset">Minimalism</h3>
                  <p className="text-rg-bone">
                    Design focused on essentials—no excess, only purpose.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-2 text-rg-sunset">Intentionality</h3>
                  <p className="text-rg-bone">
                    Every decision we make is deliberate and considered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
