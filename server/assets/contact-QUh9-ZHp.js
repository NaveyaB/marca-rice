import { r as reactExports, V as jsxRuntimeExports } from "./worker-entry-DlAMfuhz.js";
import { L as Layout, P as Phone, M as Mail, a as MapPin, b as MessageCircle } from "./Layout-Cd_5ZoAw.js";
import { L as LoaderCircle, C as CircleCheck } from "./loader-circle-BXzm07_n.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-I-vlOUP9.js";
function ContactPage() {
  const [status, setStatus] = reactExports.useState("idle");
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    message: ""
  });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return setStatus("error");
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setForm({
        name: "",
        email: "",
        message: ""
      });
    }, 900);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-12 px-6 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-soft -z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 right-0 h-96 w-96 rounded-full bg-brand-glow/30 blur-3xl animate-float -z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "reveal font-display text-5xl md:text-7xl font-bold", children: [
          "Let's ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "talk" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "reveal mt-5 text-lg text-muted-foreground", children: "Tell us about your brand. We'll reply within one business day." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl grid md:grid-cols-5 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 space-y-6 reveal-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-2xl bg-card border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold mb-4", children: "Reach us directly" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 mt-1 text-primary" }),
              " +91 89255 35344"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 mt-1 text-primary" }),
              " info@marcarise.in"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 mt-1 text-primary" }),
              " Tamil Nadu, India · Remote worldwide"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/918925535344", target: "_blank", rel: "noreferrer", className: "block p-6 rounded-2xl bg-gradient-brand text-primary-foreground hover:scale-[1.02] transition-transform shadow-elegant", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg", children: "Chat on WhatsApp" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-90", children: "Fastest way to reach us — usually instant during work hours." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "md:col-span-3 reveal-right p-8 rounded-2xl bg-card border border-border space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium block mb-2", children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: form.name, onChange: (e) => setForm({
            ...form,
            name: e.target.value
          }), className: "w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium block mb-2", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: form.email, onChange: (e) => setForm({
            ...form,
            email: e.target.value
          }), className: "w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium block mb-2", children: "Tell us about your project" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, value: form.message, onChange: (e) => setForm({
            ...form,
            message: e.target.value
          }), className: "w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: status === "loading", className: "w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-brand text-primary-foreground font-medium hover:scale-[1.02] transition-transform disabled:opacity-60", children: status === "loading" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
          " Sending…"
        ] }) : "Send message" }),
        status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm p-4 rounded-lg bg-primary/10 text-primary animate-[fade-in_0.3s_ease-out]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
          " Thanks! We'll be in touch soon."
        ] }),
        status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm p-4 rounded-lg bg-destructive/10 text-destructive", children: "Please fill in all fields." })
      ] })
    ] }) })
  ] });
}
export {
  ContactPage as component
};
