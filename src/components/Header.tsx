import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-lg bg-gradient-brand grid place-items-center shadow-elegant transition-transform group-hover:scale-110">
            <span className="font-display font-bold text-primary-foreground text-lg">M</span>
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            Marca <span className="text-gradient-brand">Rise</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span
                    className={cn(
                      "absolute left-4 right-4 -bottom-0.5 h-0.5 bg-gradient-brand rounded-full origin-left transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="h-10 w-10 grid place-items-center rounded-full border border-border hover:bg-accent transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:scale-105 transition-transform"
          >
            Talk to us
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="md:hidden h-10 w-10 grid place-items-center rounded-full border border-border"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <nav className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-accent"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
