export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-rgBlack/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        {/* Tagline */}
        <p className="text-sm uppercase tracking-widest text-rg-sunset font-medium">
          Powered By The Play Runner Mindset
        </p>

        {/* Headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-rg-bone leading-tight">
          RUNNER GANG LIFESTYLE
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-rg-bone font-light leading-relaxed max-w-2xl mx-auto">
          For The Play Runners. Built for hustlers with intent. Strategic. Disciplined. Forward.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-12">
          <a
            href="/shop"
            className="btn-primary whitespace-nowrap"
          >
            SHOP THE DROP
          </a>
          <a
            href="#email"
            className="btn-secondary whitespace-nowrap"
          >
            JOIN THE MOVEMENT
          </a>
        </div>
      </div>
    </section>
  );
}
