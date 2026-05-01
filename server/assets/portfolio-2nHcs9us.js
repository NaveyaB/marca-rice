import { V as jsxRuntimeExports } from "./worker-entry-DlAMfuhz.js";
import { L as Layout } from "./Layout-Cd_5ZoAw.js";
import { P as PortfolioMasonry } from "./PortfolioMasonry-DnKqFQJ2.js";
import { p as projects, C as CTABanner } from "./CTABanner-CHH4CKut.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-I-vlOUP9.js";
import "./arrow-up-right-BeB41lRG.js";
function PortfolioPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-8 px-6 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-soft -z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "reveal font-display text-5xl md:text-7xl font-bold", children: [
          "Selected ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "work" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reveal mt-5 text-lg text-muted-foreground max-w-2xl mx-auto", children: "Real brands. Real results. Each project is a story of strategy meeting design." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PortfolioMasonry, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-6 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "reveal text-3xl md:text-4xl font-display font-bold mb-12", children: "Case study highlights" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8", children: projects.slice(0, 3).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal grid md:grid-cols-2 gap-8 p-6 md:p-10 rounded-3xl bg-card border border-border", style: {
        transitionDelay: `${i * 100}ms`
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, loading: "lazy", className: "w-full h-72 object-cover rounded-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-3", children: p.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2.5 py-1 rounded-full bg-muted", children: t }, t)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-2xl mb-4", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: "Problem · " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: p.problem })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: "Solution · " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: p.solution })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: "Results" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-1", children: p.results.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-gradient-brand" }),
                " ",
                r
              ] }, r)) })
            ] })
          ] })
        ] })
      ] }, p.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTABanner, {})
  ] });
}
export {
  PortfolioPage as component
};
