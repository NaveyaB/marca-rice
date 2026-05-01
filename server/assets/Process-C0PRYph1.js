import { V as jsxRuntimeExports } from "./worker-entry-DlAMfuhz.js";
import { a as process } from "./CTABanner-CHH4CKut.js";
function Process() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-primary uppercase tracking-widest", children: "Our process" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl md:text-5xl font-display font-bold", children: "How we work" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid gap-6 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "hidden md:block absolute top-12 left-0 w-full h-2 pointer-events-none", preserveAspectRatio: "none", viewBox: "0 0 100 2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "5",
            y1: "1",
            x2: "95",
            y2: "1",
            stroke: "currentColor",
            strokeWidth: "0.4",
            className: "text-border",
            strokeDasharray: "2 2"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "5",
            y1: "1",
            x2: "95",
            y2: "1",
            stroke: "url(#g)",
            strokeWidth: "0.6",
            strokeDasharray: "90",
            strokeDashoffset: "90",
            style: { animation: "draw-line 2.5s ease-out forwards", animationDelay: "0.4s" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "g", x1: "0", y1: "0", x2: "1", y2: "0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.55 0.22 265)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.62 0.24 295)" })
        ] }) })
      ] }),
      process.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal relative", style: { transitionDelay: `${i * 120}ms` }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full bg-background border-2 border-primary grid place-items-center font-display font-bold text-primary mb-5 mx-auto md:mx-0 relative z-10", children: p.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border text-center md:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg mb-2", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: p.desc })
        ] })
      ] }, p.n))
    ] })
  ] }) });
}
export {
  Process as P
};
