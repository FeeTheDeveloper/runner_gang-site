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
      {/* Base Dark Overlay */}
      <div className="absolute inset-0 bg-rgBlack/60"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-rgBlack/80 via-rgBlack/60 to-rgBlack/90"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex items-center justify-center">
        {/* Text Safe Zone */}
        <div className="w-full max-w-3xl bg-rgBlack/35 backdrop-blur-sm rounded-2xl p-6 md:p-10 text-center space-y-8">
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
            Built For Motion.<br />Designed For Those Who Move With Intent.
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
      </div>
    </section>
  );
}
