export function WhoWeAre() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal-left">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Who we are</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold">Strategy meets <span className="text-gradient-brand">creativity</span>.</h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Marca Rise was started with a simple vision — helping brands stand out in the digital world.
            We bridge the gap between creative design, marketing strategy and modern technology to help
            you transform ideas into powerful digital brands that attract, build trust and grow.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6">
            {[
              { n: "50+", l: "Brands grown" },
              { n: "100K+", l: "Impressions driven" },
              { n: "100%", l: "Client focus" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-3xl font-display font-bold text-gradient-brand">{s.n}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-right flex justify-center">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 bg-gradient-brand rounded-3xl rotate-6 opacity-20 blur-2xl animate-float" />
            <div className="relative w-full h-full rounded-3xl bg-card border border-border shadow-elegant grid place-items-center overflow-hidden">
              <svg viewBox="0 0 200 200" className="w-2/3 h-2/3">
                <defs>
                  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="oklch(0.55 0.22 265)" />
                    <stop offset="100%" stopColor="oklch(0.62 0.24 295)" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="70" fill="none" stroke="url(#bg)" strokeWidth="2" strokeDasharray="6 6">
                  <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="20s" repeatCount="indefinite" />
                </circle>
                <circle cx="100" cy="100" r="45" fill="url(#bg)" opacity="0.15" />
                <path d="M70 110 L90 130 L135 80" stroke="url(#bg)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"
                  strokeDasharray="100" strokeDashoffset="100"
                  style={{ animation: "draw-line 1.5s ease-out 0.5s forwards" }} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
