import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-svh flex items-center justify-center overflow-hidden bg-gradient-soft">
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-brand/30 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 h-[28rem] w-[28rem] rounded-full bg-brand-glow/30 blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float" />
        {/* grid */}
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
          style={{
            backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background/60 backdrop-blur text-xs font-medium mb-8 animate-fade-in">
          <span className="h-2 w-2 rounded-full bg-gradient-brand animate-pulse" />
          Creative Digital Marketing & Branding Agency
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
          <span className="block opacity-0 animate-[fade-in_0.8s_ease-out_0.1s_forwards]">
            The Mark of
          </span>
          <span className="block text-gradient-brand opacity-0 animate-[fade-in_0.8s_ease-out_0.35s_forwards]">
            Excellence.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground opacity-0 animate-[fade-in_0.8s_ease-out_0.6s_forwards]">
          We help brands stand out with creative design, smart strategy and modern technology — built to grow.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4 opacity-0 animate-[fade-in_0.8s_ease-out_0.85s_forwards]">
          <Link to="/portfolio"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform shadow-elegant">
            View our work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border bg-background/60 backdrop-blur font-medium hover:bg-accent transition-colors">
            Talk to us
          </Link>
        </div>
      </div>

      {/* Scroll nudge */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground opacity-0 animate-[fade-in_1s_ease-out_1.2s_forwards]">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}
