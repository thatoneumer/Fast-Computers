import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-Z9rLZ2Aq.mjs";
import { P as PageHero } from "./PageHero-WTHEmsdY.mjs";
import "../_libs/seroval.mjs";
import "../_libs/sweetalert2.mjs";
import { w as Sparkles, x as Layers, C as Cpu, y as MemoryStick, z as HardDrive, B as MousePointer2, D as Headphones, G as Keyboard, J as Monitor, Z as Zap, N as Box, O as Snowflake, Q as MonitorPlay, W as Wrench, e as ChevronRight } from "../_libs/lucide-react.mjs";
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
import "./router-SoUVH66f.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-CTzAty7X.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const cats = [{
  icon: Sparkles,
  name: "Graphics Cards",
  desc: "NVIDIA GeForce RTX & AMD Radeon cards.",
  count: 18
}, {
  icon: Layers,
  name: "Motherboards",
  desc: "Intel & AMD sockets, ATX, mATX, ITX.",
  count: 15
}, {
  icon: Cpu,
  name: "Processors",
  desc: "Intel Core & AMD Ryzen processors.",
  count: 24
}, {
  icon: MemoryStick,
  name: "RAM",
  desc: "DDR4 & DDR5 gaming memory kits.",
  count: 21
}, {
  icon: HardDrive,
  name: "SSDs",
  desc: "Superfast NVMe M.2 & SATA solid state drives.",
  count: 16
}, {
  icon: MousePointer2,
  name: "Mice",
  desc: "Gaming mice with high precision sensors.",
  count: 12
}, {
  icon: Headphones,
  name: "Headsets",
  desc: "Gaming headsets with surround sound.",
  count: 8
}, {
  icon: Keyboard,
  name: "Keyboards",
  desc: "Mechanical and RGB gaming keyboards.",
  count: 10
}, {
  icon: Monitor,
  name: "Monitors",
  desc: "High refresh rate gaming monitors.",
  count: 6
}, {
  icon: Zap,
  name: "PSUs",
  desc: "80+ Bronze, Gold, Platinum certified power supplies.",
  count: 12
}, {
  icon: Box,
  name: "Cases",
  desc: "Mid towers, full towers, ITX cases with tempered glass.",
  count: 14
}, {
  icon: Snowflake,
  name: "Coolers",
  desc: "AIO Liquid coolers & high performance air coolers.",
  count: 10
}, {
  icon: MonitorPlay,
  name: "Laptops",
  desc: "Gaming laptops with high performance specs.",
  count: 4
}];
function CategoriesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { crumb: "Categories", kicker: "Explore the Arsenal", title: "PC Components" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mb-12", children: "Select a hardware category to view catalog listings and build your ultimate rig, part by part." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 xl:grid-cols-3 gap-5", children: cats.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          margin: "-60px"
        }, transition: {
          delay: i * 0.04,
          duration: 0.5
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", search: {
          category: c.name
        }, className: "group relative block border border-border bg-card/60 p-4 sm:p-6 hover:border-primary transition overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 slash-bg opacity-0 group-hover:opacity-100 transition" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-start justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 sm:w-12 sm:h-12 border border-border bg-background flex items-center justify-center group-hover:border-primary group-hover:text-primary transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "w-4 h-4 sm:w-5 sm:h-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-transform" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "relative mt-4 sm:mt-6 text-base sm:text-xl font-bold uppercase leading-tight", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2", children: c.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-4 sm:mt-6 flex items-center justify-between text-[10px] sm:text-xs uppercase tracking-widest", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              c.count,
              " listings"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary flex items-center gap-1 group-hover:gap-2 transition-all", children: [
              "Shop ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" })
            ] })
          ] })
        ] }) }, c.name)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  CategoriesPage as component
};
