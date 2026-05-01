import { V as jsxRuntimeExports } from "./worker-entry-DlAMfuhz.js";
import { L as Link } from "./router-I-vlOUP9.js";
import { p as projects } from "./CTABanner-CHH4CKut.js";
import { A as ArrowUpRight } from "./arrow-up-right-BeB41lRG.js";
function PortfolioMasonry({ limit }) {
  const items = limit ? projects.slice(0, limit) : projects;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6 mb-12 reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-primary uppercase tracking-widest", children: "Selected work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-4xl md:text-5xl font-display font-bold", children: "Brands we've leveled up" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portfolio", className: "text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all", children: [
        "See all ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "columns-1 sm:columns-2 lg:columns-3 gap-5 [[column-fill:balance]]", children: items.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/portfolio",
        className: "reveal-scale group block mb-5 break-inside-avoid relative overflow-hidden rounded-2xl border border-border bg-card",
        style: { transitionDelay: `${i % 3 * 100}ms` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: p.img,
                alt: p.title,
                loading: "lazy",
                className: `w-full object-cover transition-transform duration-700 group-hover:scale-110 ${p.h === "tall" ? "h-96" : "h-72"}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-linear-to-t from-foreground/85 via-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-medium text-background bg-background/15 backdrop-blur px-3 py-1.5 rounded-full border border-background/30", children: [
              "View case study ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap gap-2", children: p.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground", children: t }, t)) })
          ] })
        ]
      },
      p.title
    )) })
  ] }) });
}
export {
  PortfolioMasonry as P
};
