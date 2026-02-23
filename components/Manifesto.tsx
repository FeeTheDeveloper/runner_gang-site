export default function Manifesto() {
  return (
    <section className="bg-rg-black py-32 px-6">
      <div className="rg-container max-w-3xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="border-b border-rgCharcoal pb-12">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-rg-bone mb-6">
              The Runner Gang Manifesto
            </h2>
            <p className="text-rg-sunset text-sm uppercase tracking-widest font-medium">
              Our Core Philosophy
            </p>
          </div>

          {/* Manifesto Points */}
          <div className="space-y-12">
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-rg-bone">Strategic Minimalism</h3>
              <p className="text-rg-bone leading-relaxed">
                Every piece serves a purpose. No excess. No noise. Just the essentials elevated to premium.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-medium text-rg-bone">Disciplined Design</h3>
              <p className="text-rg-bone leading-relaxed">
                Inspired by Fear of God's restrained aesthetic. Clean lines, quality materials, timeless silhouettes.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-medium text-rg-bone">Forward Motion</h3>
              <p className="text-rg-bone leading-relaxed">
                Built for those who move. Play runners, hustlers, creators. Clothes that work as hard as you do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
