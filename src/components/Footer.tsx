import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-lg bg-gradient-brand grid place-items-center">
              <span className="font-display font-bold text-primary-foreground">M</span>
            </div>
            <span className="font-display font-bold text-lg">Marca Rise</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The Mark of Excellence. We help brands grow with creative & strategic digital solutions.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground transition-colors inline-block hover:translate-x-1 duration-200">Brand Identity</Link></li>
            <li><Link to="/services" className="hover:text-foreground transition-colors inline-block hover:translate-x-1 duration-200">Social Media</Link></li>
            <li><Link to="/services" className="hover:text-foreground transition-colors inline-block hover:translate-x-1 duration-200">Web Development</Link></li>
            <li><Link to="/services" className="hover:text-foreground transition-colors inline-block hover:translate-x-1 duration-200">Digital Marketing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2 items-start"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> +91 89255 35344</li>
            <li className="flex gap-2 items-start"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> info@marcarise.in</li>
            <li className="flex gap-2 items-start"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Tamil Nadu, India</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm">Follow Us</h4>
          <div className="flex gap-3">
            <a href="https://instagram.com/marcarise" target="_blank" rel="noreferrer"
              className="h-10 w-10 grid place-items-center rounded-full border border-border hover:bg-gradient-brand hover:text-primary-foreground hover:border-transparent transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" target="_blank" rel="noreferrer"
              className="h-10 w-10 grid place-items-center rounded-full border border-border hover:bg-gradient-brand hover:text-primary-foreground hover:border-transparent transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-6">© {new Date().getFullYear()} Marca Rise.</p>
        </div>
      </div>
    </footer>
  );
}
