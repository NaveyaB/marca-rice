import { V as jsxRuntimeExports } from "./worker-entry-DlAMfuhz.js";
import { L as Layout } from "./Layout-Cd_5ZoAw.js";
import { S as ServicesGrid } from "./ServicesGrid-B6hCelB0.js";
import { P as Process } from "./Process-C0PRYph1.js";
import { C as CTABanner } from "./CTABanner-CHH4CKut.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-I-vlOUP9.js";
import "./arrow-up-right-BeB41lRG.js";
import "./loader-circle-BXzm07_n.js";
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-12 px-6 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-soft -z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-20 h-96 w-96 rounded-full bg-brand-glow/30 blur-3xl animate-float -z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "reveal font-display text-5xl md:text-7xl font-bold", children: [
          "Our ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "services" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reveal mt-5 text-lg text-muted-foreground max-w-2xl mx-auto", children: "A full-stack creative team — branding, social, content, web and marketing." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesGrid, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTABanner, {})
  ] });
}
export {
  ServicesPage as component
};
