export default function Manifesto() {
  return (
    <section className="bg-rg-black py-32 px-6">
      <div className="rg-container max-w-3xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="border-b border-rgCharcoal pb-12">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-rg-bone mb-6">
              THE RUNNER GANG CODE
            </h2>
            <p className="text-rg-sunset text-sm uppercase tracking-widest font-medium">
              How We Operate
            </p>
          </div>

          {/* Manifesto Points */}
          <div className="space-y-8">
            <div>
              <p className="text-lg text-rg-bone font-light leading-relaxed">
                Move With Intent.
              </p>
            </div>

            <div>
              <p className="text-lg text-rg-bone font-light leading-relaxed">
                Execute With Discipline.
              </p>
            </div>

            <div>
              <p className="text-lg text-rg-bone font-light leading-relaxed">
                Efficiency Over Noise.
              </p>
            </div>

            <div>
              <p className="text-lg text-rg-bone font-light leading-relaxed">
                Forward Over Comfort.
              </p>
            </div>

            <div>
              <p className="text-lg text-rg-bone font-light leading-relaxed">
                Growth Is The Standard.
              </p>
            </div>
          </div>

          {/* Closing Paragraph */}
          <div className="border-t border-rgCharcoal pt-12 mt-12">
            <p className="text-rg-bone leading-relaxed text-base">
              Runner Gang is uniform for individuals who operate with strategy.<br />
              Not hype. Not randomness. Motion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
