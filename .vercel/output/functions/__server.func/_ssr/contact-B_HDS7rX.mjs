import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-BV_YdEm6.mjs";
import { P as PageHero } from "./PageHero-WTHEmsdY.mjs";
import "../_libs/seroval.mjs";
import "../_libs/sweetalert2.mjs";
import { h as MapPin, j as Phone, k as Mail, l as Clock, m as MessageSquare, n as Send } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "async_hooks";
import "stream";
import "crypto";
import "../_libs/isbot.mjs";
import "./router-D9dBu_xa.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-Bkb4YrSP.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const infos = [{
  icon: MapPin,
  title: "Physical Store",
  value: "Plaza 45-B, Sector XX, Phase 3, DHA, Lahore, Pakistan."
}, {
  icon: Phone,
  title: "Helpline & WhatsApp",
  value: "+92 (300) 123-4567"
}, {
  icon: Mail,
  title: "General & Support Email",
  value: "support@fastcomputers.pk"
}, {
  icon: Clock,
  title: "Working Business Hours",
  value: "Monday - Saturday: 11:00 AM - 9:00 PM"
}];
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { crumb: "Contact Us", kicker: "We're Listening", title: "Contact Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: -30
        }, whileInView: {
          opacity: 1,
          x: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.6
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary tracking-[0.3em] text-xs font-semibold uppercase", children: "Reach the Team" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl md:text-5xl font-bold uppercase", children: [
            "Get in ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Touch" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-4", children: infos.map((i, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            delay: idx * 0.08
          }, className: "group flex gap-4 border border-border bg-card p-5 hover:border-primary transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 shrink-0 border border-border bg-background flex items-center justify-center group-hover:border-primary group-hover:text-primary transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(i.icon, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: i.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-bold", children: i.value })
            ] })
          ] }, i.title)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 relative aspect-video border border-border overflow-hidden red-border-glow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(oklch(0.62_0.24_25/0.1)_1px,transparent_1px),linear-gradient(90deg,oklch(0.62_0.24_25/0.1)_1px,transparent_1px)] bg-[size:40px_40px]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-center p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-10 h-10 text-primary animate-glow-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-bold uppercase tracking-widest", children: "Lahore Store Location" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground max-w-xs", children: "Visit our physical store to test monitors, keyboards, mice, and check prebuilt rigs before purchase." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-[10px] uppercase tracking-widest text-muted-foreground/60", children: "Google Maps Navigation API (Mock)" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.form, { initial: {
          opacity: 0,
          x: 30
        }, whileInView: {
          opacity: 1,
          x: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.6
        }, onSubmit: (e) => {
          e.preventDefault();
          setSent(true);
        }, className: "relative border border-border bg-card p-8 md:p-10 red-border-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-5 h-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl md:text-3xl font-bold uppercase", children: "Send us a Message" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "We reply within one working day." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-5", children: [
            [{
              name: "name",
              label: "Your Full Name",
              type: "text"
            }, {
              name: "email",
              label: "Email Address",
              type: "email"
            }, {
              name: "subject",
              label: "Subject",
              type: "text"
            }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: f.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: f.type, name: f.name, className: "mt-2 w-full bg-background border border-border px-4 py-3 outline-none focus:border-primary transition" })
            ] }, f.name)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Your Message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 5, name: "message", className: "mt-2 w-full bg-background border border-border px-4 py-3 outline-none focus:border-primary transition resize-none" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition", children: sent ? "Message Sent ✓" : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Send Message ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" })
            ] }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ContactPage as component
};
