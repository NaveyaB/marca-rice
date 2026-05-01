import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Mail, Phone, MapPin, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Marca Rise" },
      { name: "description", content: "Get in touch with Marca Rise. Start your project or chat with us on WhatsApp." },
      { property: "og:title", content: "Contact — Marca Rise" },
      { property: "og:description", content: "Let's talk about your brand. Reach us by form, email or WhatsApp." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return setStatus("error");
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 900);
  };

  return (
    <Layout>
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft -z-10" />
        <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-brand-glow/30 blur-3xl animate-float -z-10" />
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="reveal font-display text-5xl md:text-7xl font-bold">Let's <span className="text-gradient-brand">talk</span>.</h1>
          <p className="reveal mt-5 text-lg text-muted-foreground">
            Tell us about your brand. We'll reply within one business day.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6 reveal-left">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="font-display font-bold mb-4">Reach us directly</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3 items-start"><Phone className="h-4 w-4 mt-1 text-primary" /> +91 89255 35344</li>
                <li className="flex gap-3 items-start"><Mail className="h-4 w-4 mt-1 text-primary" /> info@marcarise.in</li>
                <li className="flex gap-3 items-start"><MapPin className="h-4 w-4 mt-1 text-primary" /> Tamil Nadu, India · Remote worldwide</li>
              </ul>
            </div>

            <a href="https://wa.me/918925535344" target="_blank" rel="noreferrer"
              className="block p-6 rounded-2xl bg-gradient-brand text-primary-foreground hover:scale-[1.02] transition-transform shadow-elegant">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="h-6 w-6" />
                <h3 className="font-display font-bold text-lg">Chat on WhatsApp</h3>
              </div>
              <p className="text-sm opacity-90">Fastest way to reach us — usually instant during work hours.</p>
            </a>
          </div>

          <form onSubmit={submit} className="md:col-span-3 reveal-right p-8 rounded-2xl bg-card border border-border space-y-5">
            <div>
              <label className="text-sm font-medium block mb-2">Name</label>
              <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="text-sm font-medium block mb-2">Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="text-sm font-medium block mb-2">Tell us about your project</label>
              <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            </div>

            <button type="submit" disabled={status === "loading"}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-brand text-primary-foreground font-medium hover:scale-[1.02] transition-transform disabled:opacity-60">
              {status === "loading" ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : "Send message"}
            </button>

            {status === "success" && (
              <div className="flex items-center gap-2 text-sm p-4 rounded-lg bg-primary/10 text-primary animate-[fade-in_0.3s_ease-out]">
                <CheckCircle2 className="h-4 w-4" /> Thanks! We'll be in touch soon.
              </div>
            )}
            {status === "error" && (
              <div className="text-sm p-4 rounded-lg bg-destructive/10 text-destructive">
                Please fill in all fields.
              </div>
            )}
          </form>
        </div>
      </section>
    </Layout>
  );
}
