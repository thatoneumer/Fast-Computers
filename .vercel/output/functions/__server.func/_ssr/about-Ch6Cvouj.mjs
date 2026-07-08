import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-3oA4klVC.mjs";
import { P as PageHero } from "./PageHero-WTHEmsdY.mjs";
import "../_libs/seroval.mjs";
import "../_libs/sweetalert2.mjs";
import { J as Trophy, a7 as Users, S as Star, a8 as Calendar, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "./products-data-DwPORZfO.mjs";
import "./router-BCi7K9yp.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-C43e3As0.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const stats = [{
  icon: Trophy,
  val: "15,000+",
  label: "Systems Built"
}, {
  icon: Users,
  val: "25,000+",
  label: "Happy Customers"
}, {
  icon: Star,
  val: "4.8/5",
  label: "Average Review"
}, {
  icon: Calendar,
  val: "8+ Years",
  label: "Industry Expertise"
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { crumb: "About Us", kicker: "Our Story", title: "About Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: -30
        }, whileInView: {
          opacity: 1,
          x: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.7
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary tracking-[0.3em] text-xs font-semibold uppercase", children: "Since 2018" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl md:text-5xl font-bold uppercase leading-tight", children: [
            "Our Story & ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Mission" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4 text-muted-foreground leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "Founded in 2018, ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-bold", children: "FAST COMPUTERS" }),
              " started with a simple vision: to make high-performance gaming hardware accessible to everyone across Pakistan. Over the years, we have grown from a small enthusiast retail outlet into one of the country's most trusted e-commerce stores for computer components and custom rigs."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We believe that computing should have no compromises. Whether you are a competitive esports gamer chasing high frame rates, a developer compiling heavy databases, or a 3D modeler rendering animations, we supply the reliable computing power you need to excel." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our mission is to maintain a 100% authentic inventory, provide the fastest delivery setup in the country, and support our community with technical expertise." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          scale: 0.95
        }, whileInView: {
          opacity: 1,
          scale: 1
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.7
        }, className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 border border-primary/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=900&q=80", alt: "Fast Computers office", className: "relative w-full aspect-[4/3] object-cover red-border-glow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 max-w-[220px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-display font-bold", children: "08+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest mt-1", children: "Years of Building Dreams" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border slash-bg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-6", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, className: "text-center border border-border bg-card p-8 hover:border-primary transition group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-8 h-8 text-primary mx-auto group-hover:animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-3xl md:text-4xl font-display font-bold", children: s.val }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground", children: s.label })
      ] }, s.label)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h3, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, className: "text-3xl md:text-5xl font-bold uppercase", children: "Ready to upgrade your system?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl mx-auto text-muted-foreground", children: "Configure a custom prebuilt gaming PC, choose components from our curated parts lists, or message our engineers to plan your dream hardware setup." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition", children: [
          "Configure Custom Build ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  AboutPage as component
};
