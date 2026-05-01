import { V as jsxRuntimeExports } from "./worker-entry-DlAMfuhz.js";
import { L as Layout } from "./Layout-Cd_5ZoAw.js";
import { C as CTABanner } from "./CTABanner-CHH4CKut.js";
import { P as Process } from "./Process-C0PRYph1.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-I-vlOUP9.js";
const team = [{
  name: "Creative Lead",
  role: "Brand & Visual Strategy"
}, {
  name: "Content Lead",
  role: "Reels & Storytelling"
}, {
  name: "Web Lead",
  role: "Design & Development"
}, {
  name: "Growth Lead",
  role: "Marketing & Performance"
}];
const values = [{
  t: "Strategy + Creativity",
  d: "We blend insight with craft so every visual has a job to do."
}, {
  t: "Brand-first thinking",
  d: "We don't ship designs — we build brands people remember."
}, {
  t: "Instagram-native",
  d: "Reels, hooks and aesthetic systems built for how people actually scroll."
}, {
  t: "Startup-friendly",
  d: "Lean processes and senior craft, made for ambitious early teams."
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-16 px-6 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-soft -z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/3 -left-20 h-72 w-72 rounded-full bg-brand/30 blur-3xl animate-float -z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "reveal font-display text-5xl md:text-7xl font-bold", children: [
          "Building brands that ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "rise" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reveal mt-6 text-lg text-muted-foreground", children: "Marca Rise was started with a simple vision — helping brands stand out in the digital world. We combine creative design, marketing strategy and modern technology to turn ideas into powerful digital brands." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl grid md:grid-cols-2 gap-4", children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal p-8 rounded-2xl border border-border bg-card hover:shadow-elegant hover:-translate-y-1 transition-all", style: {
      transitionDelay: `${i * 80}ms`
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-lg bg-gradient-brand mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl mb-2", children: v.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: v.d })
    ] }, v.t)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-primary uppercase tracking-widest", children: "The team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl md:text-5xl font-display font-bold", children: "Small team. Big craft." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: team.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal-scale group relative aspect-square rounded-2xl overflow-hidden bg-gradient-brand", style: {
        transitionDelay: `${i * 80}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-6xl font-bold text-primary-foreground/30 group-hover:scale-110 transition-transform duration-500", children: m.name.charAt(0) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-background p-4 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold", children: m.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-80 mt-1", children: m.role })
        ] })
      ] }, m.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTABanner, {})
  ] });
}
export {
  AboutPage as component
};
