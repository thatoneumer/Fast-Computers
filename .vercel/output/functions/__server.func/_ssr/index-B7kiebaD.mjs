import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-cDDb4Gxc.mjs";
import { S as Swal } from "../_libs/sweetalert2.mjs";
import { k as Route$1, u as useCartWishlist } from "./router-CQJSMlrt.mjs";
import "../_libs/seroval.mjs";
import { u as useScroll, a as useTransform } from "../_libs/framer-motion.mjs";
import { A as ArrowRight, a9 as BadgeCheck, r as ShieldCheck, s as Truck, R as RotateCcw, t as Sparkles, u as Layers, C as Cpu, v as MemoryStick, w as HardDrive, x as MousePointer2, y as Headphones, K as Keyboard, z as Monitor, Z as Zap, B as Box, D as Snowflake, W as Wrench, J as Trophy, aa as Flame, e as ChevronRight, ab as PackageCheck, ac as Headset, i as CreditCard, S as Star, I as Instagram, j as Phone, k as Mail, h as MapPin, H as Heart, a as ShoppingCart } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-9ydn9VDS.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const hero = "/assets/hero-BZxpnRGE.jpg";
const gpu = "/assets/gpu-CMRpsw1G.jpg";
const keyboardImg = "/assets/keyboard-BL6ZwiXw.jpg";
const monitor = "/assets/monitor-DdWGgIQI.jpg";
const headset = "/assets/headset-Dj3MB19u.jpg";
const mouse = "/assets/mouse-BpeLMuJu.jpg";
const mobo = "/assets/mobo-CRNaPkF3.jpg";
const laptop = "/assets/laptop-65uVUA_c.jpg";
const fadeUp = {
  initial: {
    opacity: 0,
    y: 30
  },
  whileInView: {
    opacity: 1,
    y: 0
  },
  viewport: {
    once: true,
    margin: "-80px"
  },
  transition: {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1]
  }
};
function SectionKicker({
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-primary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary tracking-[0.3em] text-xs font-semibold uppercase", children: label })
  ] });
}
function Hero() {
  const ref = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [videoLoaded, setVideoLoaded] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref, className: "relative min-h-screen overflow-hidden pt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
      y,
      opacity
    }, className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("video", { autoPlay: true, muted: true, loop: true, playsInline: true, className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-0"}`, onLoadedData: () => setVideoLoaded(true), children: /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: "/hero-bg.mp4", type: "video/mp4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hero, alt: "", className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-0" : "opacity-100"}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" })
    ] }),
    [...Array(6)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent", style: {
      top: `${15 + i * 12}%`,
      left: 0,
      right: 0,
      transformOrigin: "left"
    }, initial: {
      scaleX: 0,
      opacity: 0
    }, animate: {
      scaleX: [0, 1, 0],
      opacity: [0, 0.7, 0]
    }, transition: {
      duration: 4,
      delay: i * 0.5,
      repeat: Infinity,
      ease: "easeInOut"
    } }, i)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-6 py-24 lg:py-32 min-h-[calc(100vh-5rem)] flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        x: -20
      }, animate: {
        opacity: 1,
        x: 0
      }, transition: {
        duration: 0.6
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionKicker, { label: "Build Your Dream" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8,
        delay: 0.15
      }, className: "mt-6 text-6xl md:text-8xl font-bold leading-[0.9] uppercase", children: [
        "Game Without",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary animate-glow-pulse inline-block", children: "Compromise" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 0.4,
        duration: 0.6
      }, className: "mt-8 text-lg text-muted-foreground max-w-md", children: "High performance PCs & accessories engineered for gamers and creators who refuse to settle." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.55
      }, className: "mt-10 flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", search: {
          category: void 0
        }, className: "group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition", children: [
          "Shop Now ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 transition-transform group-hover:translate-x-1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => Swal.fire({
          title: "Coming Soon",
          text: "Custom build feature is coming soon!",
          icon: "info"
        }), className: "inline-flex items-center gap-2 border border-border px-8 py-4 font-bold uppercase tracking-widest text-sm hover:border-primary hover:text-primary transition", children: "Custom Build" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 0.8,
        duration: 0.6
      }, className: "mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg border-t border-border pt-8", children: [["15K+", "Builds Shipped"], ["4.9★", "Customer Rating"], ["24/7", "Support"]].map(([n, l]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl sm:text-3xl font-display font-bold text-primary", children: n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-1 leading-snug", children: l })
      ] }, l)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, transition: {
      delay: 1.2
    }, className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-widest text-muted-foreground uppercase", children: "Scroll" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
        y: [0, 8, 0]
      }, transition: {
        duration: 1.8,
        repeat: Infinity
      }, className: "w-px h-8 bg-primary" })
    ] })
  ] });
}
function FeatureStrip() {
  const items = [{
    icon: BadgeCheck,
    title: "100% Original",
    desc: "Authentic Products"
  }, {
    icon: ShieldCheck,
    title: "1 Year Warranty",
    desc: "Full Coverage"
  }, {
    icon: Truck,
    title: "Fast & Secure",
    desc: "Nationwide Delivery"
  }, {
    icon: RotateCcw,
    title: "Easy Returns",
    desc: "7 Days Return"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-card/40 slash-bg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 20
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true
  }, transition: {
    delay: i * 0.1
  }, className: "flex items-center gap-2 sm:gap-4 group min-w-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center border border-primary/40 text-primary group-hover:red-border-glow transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { className: "w-5 h-5 sm:w-6 sm:h-6" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold uppercase text-xs sm:text-sm tracking-wide truncate", children: it.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] sm:text-xs text-muted-foreground truncate", children: it.desc })
    ] })
  ] }, it.title)) }) });
}
function Categories() {
  const cats = [{
    name: "Graphics Cards",
    count: "18",
    img: gpu,
    icon: Sparkles
  }, {
    name: "Motherboards",
    count: "15",
    img: mobo,
    icon: Layers
  }, {
    name: "Processors",
    count: "24",
    img: gpu,
    icon: Cpu
  }, {
    name: "RAM",
    count: "21",
    img: gpu,
    icon: MemoryStick
  }, {
    name: "SSDs",
    count: "16",
    img: gpu,
    icon: HardDrive
  }, {
    name: "Mice",
    count: "12",
    img: mouse,
    icon: MousePointer2
  }, {
    name: "Headsets",
    count: "8",
    img: headset,
    icon: Headphones
  }, {
    name: "Keyboards",
    count: "10",
    img: keyboardImg,
    icon: Keyboard
  }, {
    name: "Monitors",
    count: "6",
    img: monitor,
    icon: Monitor
  }, {
    name: "PSUs",
    count: "12",
    img: gpu,
    icon: Zap
  }, {
    name: "Cases",
    count: "14",
    img: gpu,
    icon: Box
  }, {
    name: "Coolers",
    count: "10",
    img: gpu,
    icon: Snowflake
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "shop", className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "flex items-end justify-between mb-12 gap-6 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionKicker, { label: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl md:text-5xl font-bold uppercase", children: [
          "Shop by ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Category" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-md", children: "Browse high-end computing components and gear built for peak performance." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/categories", className: "inline-flex items-center gap-2 text-sm uppercase tracking-widest text-primary hover:gap-3 transition-all", children: [
        "View All ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4", children: cats.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.06,
      duration: 0.5
    }, whileHover: {
      y: -6
    }, className: "group relative overflow-hidden border border-border bg-card aspect-square", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", search: {
      category: c.name
    }, className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.img, alt: c.name, className: "absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700", loading: "lazy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 p-4 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "w-6 h-6 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold uppercase text-sm", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-1", children: [
            c.count,
            " Products"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-500" })
    ] }) }, c.name)) })
  ] });
}
function ProductCard({
  img,
  name,
  price,
  oldPrice,
  rating,
  badge,
  i,
  id,
  product
}) {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist
  } = useCartWishlist();
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product || {
      id,
      name,
      price: parseFloat(price.replace(/[^0-9.-]+/g, "")),
      img
    }, 1);
  };
  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product || {
      id,
      name,
      price: parseFloat(price.replace(/[^0-9.-]+/g, "")),
      img
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/product/$id", params: {
    id
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 30
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true
  }, transition: {
    delay: i * 0.08,
    duration: 0.5
  }, whileHover: {
    y: -8
  }, className: "group relative bg-card border border-border overflow-hidden flex flex-col cursor-pointer", children: [
    badge && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2 z-10 bg-primary text-primary-foreground text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-1.5 sm:px-2 py-0.5 sm:py-1 leading-none", children: badge }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleToggleWishlist, className: "absolute top-2 right-2 z-10 w-7 h-7 sm:w-8 sm:h-8 border border-border bg-background/60 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition hover:text-primary hover:border-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: `w-3.5 h-3.5 sm:w-4 sm:h-4 ${isInWishlist(id) ? "fill-primary text-primary" : ""}` }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: name, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700", loading: "lazy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleAddToCart, className: "w-full bg-primary text-primary-foreground py-2 sm:py-3 text-[10px] sm:text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 sm:gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4" }),
        " Add to Cart"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 sm:p-4 flex flex-col gap-1.5 sm:gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5 sm:gap-1 text-primary", children: [
        [...Array(5)].map((_, x) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `w-2.5 h-2.5 sm:w-3 sm:h-3 ${x < rating ? "fill-primary" : "opacity-30"}` }, x)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] sm:text-xs text-muted-foreground ml-0.5 sm:ml-1", children: [
          "(",
          Math.floor(Math.random() * 40) + 10,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-xs sm:text-sm leading-snug min-h-[2rem] sm:min-h-[2.5rem]", children: name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1 sm:gap-2 flex-wrap mt-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm sm:text-lg font-bold text-primary", children: price }),
        oldPrice && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] sm:text-xs text-muted-foreground line-through", children: oldPrice })
      ] })
    ] })
  ] }) });
}
function Featured({
  productsList = []
}) {
  const categoryMap = /* @__PURE__ */ new Map();
  productsList.forEach((p) => {
    if (!categoryMap.has(p.cat)) {
      categoryMap.set(p.cat, p);
    }
  });
  const products = Array.from(categoryMap.values()).map((p) => ({
    id: p.id,
    img: p.img,
    name: p.name,
    price: `PKR ${p.price.toLocaleString()}`,
    oldPrice: p.old ? `PKR ${p.old.toLocaleString()}` : void 0,
    rating: p.rating || 5,
    badge: p.old && p.old > p.price ? `-${Math.round((1 - p.price / p.old) * 100)}%` : void 0,
    product: p
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "flex items-end justify-between mb-12 gap-6 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionKicker, { label: "Handpicked" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl md:text-5xl font-bold uppercase", children: [
          "Featured ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Products" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-md", children: "Our recommended gaming gear and hardware, tested and approved." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", search: {
        category: void 0
      }, className: "inline-flex items-center gap-2 text-sm uppercase tracking-widest text-primary hover:gap-3 transition-all", children: [
        "View All Products ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: products.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { ...p, i }, p.name)) })
  ] });
}
function CustomBuilder() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "build", className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hero, alt: "", className: "w-full h-full object-cover opacity-40", loading: "lazy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionKicker, { label: "Configurator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl md:text-6xl font-bold uppercase leading-tight", children: [
          "Build Your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Perfect" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Gaming Rig"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground max-w-md text-lg", children: "Pick every component. From CPU to case lighting. Our engineers assemble, stress test, and ship your dream machine." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 gap-4 max-w-md", children: [[Wrench, "Expert Assembly"], [Zap, "72h Stress Test"], [ShieldCheck, "2 Yr Warranty"], [Trophy, "Award Winning"]].map(([Icon, label], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase tracking-wider text-foreground/80", children: label })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => Swal.fire({
          title: "Coming Soon",
          text: "Custom build feature is coming soon!",
          icon: "info"
        }), className: "mt-10 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition", children: [
          "Start Building ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.9
      }, whileInView: {
        opacity: 1,
        scale: 1
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.8
      }, className: "relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-float-slow", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: gpu, alt: "Custom Rig", className: "w-full h-auto red-glow", loading: "lazy" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 right-0 border border-primary bg-background p-3 sm:p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground", children: "Starting at" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl sm:text-3xl font-display font-bold text-primary", children: "PKR 149K" })
        ] })
      ] })
    ] })
  ] });
}
function FlashSale({
  productsList = []
}) {
  const [time, setTime] = reactExports.useState({
    h: 12,
    m: 34,
    s: 56
  });
  reactExports.useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let {
          h,
          m,
          s
        } = prev;
        s--;
        if (s < 0) {
          s = 59;
          m--;
        }
        if (m < 0) {
          m = 59;
          h--;
        }
        if (h < 0) {
          h = 23;
          m = 59;
          s = 59;
        }
        return {
          h,
          m,
          s
        };
      });
    }, 1e3);
    return () => clearInterval(timer);
  }, []);
  const saleProducts = productsList.slice(0, 4);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "relative border border-primary/50 bg-gradient-to-br from-primary/10 via-card to-card p-8 md:p-14 red-border-glow overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "absolute -top-8 -right-8 w-48 h-48 text-primary/10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8 items-center relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionKicker, { label: "Limited Offer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl md:text-5xl font-bold uppercase", children: [
          "Flash ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Sale" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-md", children: "Up to 40% off on selected gaming rigs, peripherals and monitors. Ends soon." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex gap-3", children: [["Hours", time.h], ["Mins", time.m], ["Secs", time.s]].map(([l, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background border border-border p-4 min-w-[80px] text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            scale: 0.8,
            opacity: 0.5
          }, animate: {
            scale: 1,
            opacity: 1
          }, className: "text-3xl font-display font-bold text-primary", children: String(v).padStart(2, "0") }, v),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground mt-1", children: l })
        ] }, l)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", search: {
          category: void 0
        }, className: "mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm hover:brightness-110 transition", children: [
          "Shop the Sale ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: saleProducts.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: i * 0.1
      }, viewport: {
        once: true
      }, className: "relative aspect-square bg-background border border-border overflow-hidden group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.name, className: "w-full h-full object-cover group-hover:scale-110 transition", loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1", children: p.old && p.old > p.price ? `-${Math.round((1 - p.price / p.old) * 100)}%` : `-${20 + i * 5}%` })
      ] }, p.id)) })
    ] })
  ] }) });
}
function Brands() {
  const brands = ["NVIDIA", "AMD", "INTEL", "ASUS", "MSI", "CORSAIR", "RAZER", "LOGITECH", "HYPERX", "GIGABYTE", "COOLER MASTER", "SAMSUNG"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border py-10 bg-card/30 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-16 animate-marquee whitespace-nowrap", children: [...brands, ...brands].map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-2xl tracking-widest text-muted-foreground hover:text-primary transition", children: b }, i)) }) });
}
function GamingPCs() {
  const pcs = [{
    name: "Rig / Nova",
    spec: "RTX 4060 · i5-13400F · 32GB",
    price: "PKR 249,000",
    tier: "Entry Beast"
  }, {
    name: "Rig / Vortex",
    spec: "RTX 4070 Super · i7-14700K · 32GB",
    price: "PKR 449,000",
    tier: "Enthusiast"
  }, {
    name: "Rig / Apex",
    spec: "RTX 4080 Super · i9-14900K · 64GB",
    price: "PKR 749,000",
    tier: "Flagship"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionKicker, { label: "Prebuilt" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl md:text-5xl font-bold uppercase", children: [
        "Gaming PCs ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "/" }),
        " Signature Builds"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-xl mx-auto", children: "Three tiers. Zero compromise. Ships in 48 hours." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: pcs.map((pc, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 40
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.15,
      duration: 0.6
    }, whileHover: {
      y: -10
    }, className: `relative border p-8 group ${i === 1 ? "border-primary bg-card red-border-glow" : "border-border bg-card"}`, children: [
      i === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1", children: "Most Popular" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-primary", children: pc.tier }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-3xl font-bold uppercase", children: pc.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video my-6 bg-background overflow-hidden relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hero, alt: "", className: "w-full h-full object-cover group-hover:scale-110 transition duration-700", loading: "lazy" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: pc.spec }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-3xl font-display font-bold text-primary", children: pc.price }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => Swal.fire({
        title: "Coming Soon",
        text: "Configure feature is coming soon!",
        icon: "info"
      }), className: "mt-6 w-full border border-border py-3 font-bold uppercase tracking-widest text-xs hover:border-primary hover:text-primary transition flex items-center justify-center gap-2", children: [
        "Configure ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
      ] })
    ] }, pc.name)) })
  ] });
}
function DealBanners() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 pb-24 grid md:grid-cols-2 gap-6", children: [{
    title: "Peripherals",
    sub: "Keyboards · Mice · Headsets",
    img: keyboardImg,
    tag: "New Collection",
    categories: ["Keyboards", "Mice", "Headsets"]
  }, {
    title: "Displays",
    sub: "144Hz · 240Hz · Ultrawide",
    img: monitor,
    tag: "Up to 25% Off",
    categories: ["Monitors"]
  }].map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
    opacity: 0,
    x: i === 0 ? -40 : 40
  }, whileInView: {
    opacity: 1,
    x: 0
  }, viewport: {
    once: true
  }, transition: {
    duration: 0.6
  }, className: "group relative overflow-hidden border border-border aspect-[16/9] flex items-end p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", search: {
    category: d.categories[0]
  }, className: "absolute inset-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: d.img, alt: "", className: "absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition duration-700", loading: "lazy" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-primary", children: d.tag }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-4xl font-bold uppercase", children: d.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: d.sub }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold group-hover:text-primary transition", children: [
        "Shop Now ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] })
  ] }) }, d.title)) });
}
function WhyUs() {
  const perks = [{
    icon: Wrench,
    title: "Expert Assembly",
    desc: "Every rig built and cable-managed by certified technicians."
  }, {
    icon: Zap,
    title: "72h Burn-in",
    desc: "Stress-tested for stability across CPU, GPU and memory."
  }, {
    icon: PackageCheck,
    title: "Insured Shipping",
    desc: "Foam-armored, tracked and insured, nationwide."
  }, {
    icon: Headset,
    title: "Lifetime Support",
    desc: "Real humans, real answers — for as long as you own it."
  }, {
    icon: CreditCard,
    title: "Flexible Payment",
    desc: "Card, bank transfer, and 0% installment plans available."
  }, {
    icon: Sparkles,
    title: "Custom Aesthetics",
    desc: "Choose lighting, cables, tempered glass — make it yours."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionKicker, { label: "Why Fast" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl md:text-5xl font-bold uppercase", children: [
        "Engineered ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Difference" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border", children: perks.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0
    }, whileInView: {
      opacity: 1
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.08
    }, className: "bg-background p-8 group hover:bg-card transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 border border-primary/40 flex items-center justify-center text-primary group-hover:red-border-glow transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "w-6 h-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 text-xl font-bold uppercase", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground text-sm leading-relaxed", children: p.desc })
    ] }, p.title)) })
  ] });
}
function Testimonials() {
  const reviews = [{
    name: "Ahmed R.",
    role: "Streamer @ahmedplays",
    text: "Best build I've ever owned. Cable management is art. Runs everything at 4K max.",
    rating: 5
  }, {
    name: "Sara K.",
    role: "3D Artist",
    text: "Blender renders that used to take an hour finish in ten minutes. The Apex is a beast.",
    rating: 5
  }, {
    name: "Bilal M.",
    role: "Esports Pro",
    text: "144fps rock solid in every title. Support helped me tune it perfectly.",
    rating: 5
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionKicker, { label: "Verified Reviews" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl md:text-5xl font-bold uppercase", children: [
        "Trusted by ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Gamers" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: reviews.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.12
    }, className: "border border-border bg-card p-8 hover:border-primary transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-primary mb-4", children: [...Array(r.rating)].map((_, x) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-primary" }, x)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground/90 leading-relaxed", children: [
        '"',
        r.text,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-6 border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold uppercase tracking-wide", children: r.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: r.role })
      ] })
    ] }, r.name)) })
  ] });
}
function FAQ() {
  const [open, setOpen] = reactExports.useState(0);
  const faqs = [{
    q: "How long does a custom build take?",
    a: "Typical builds ship within 48–72 hours after order confirmation, including our full 72-hour stress test."
  }, {
    q: "What warranty do you offer?",
    a: "All custom rigs come with a 2-year parts and labor warranty. Individual components carry their manufacturer warranty (1–3 years)."
  }, {
    q: "Do you deliver nationwide?",
    a: "Yes — insured, foam-armored shipping across Pakistan with full tracking. Delivery in 2–5 business days depending on city."
  }, {
    q: "Can I finance my purchase?",
    a: "We support all major cards and offer 0% installment plans up to 12 months through partner banks."
  }, {
    q: "Do you offer post-purchase support?",
    a: "Absolutely — lifetime tech support via WhatsApp, email and phone for anything you buy from us."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionKicker, { label: "Answers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl md:text-5xl font-bold uppercase", children: [
        "Frequently",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Asked ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Questions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground max-w-md", children: "Can't find what you're looking for? Reach out — real humans, fast responses." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-primary", children: [
        "Contact Support ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.06
    }, className: "border border-border bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(open === i ? -1 : i), className: "w-full flex items-center justify-between p-5 text-left font-bold uppercase tracking-wide text-sm hover:text-primary transition", children: [
        f.q,
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: `w-4 h-4 transition-transform ${open === i ? "rotate-90 text-primary" : ""}` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: false, animate: {
        height: open === i ? "auto" : 0,
        opacity: open === i ? 1 : 0
      }, transition: {
        duration: 0.3
      }, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-5 pb-5 text-sm text-muted-foreground leading-relaxed", children: f.a }) })
    ] }, i)) })
  ] });
}
function Newsletter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "relative border border-primary/40 red-border-glow p-10 md:p-16 text-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 slash-bg opacity-40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionKicker, { label: "Insider" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl md:text-5xl font-bold uppercase max-w-2xl mx-auto", children: [
        "Get Early Access ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "& Deals" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-md mx-auto", children: "Drop your email — new drops, restocks, and members-only pricing straight to your inbox." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto", onSubmit: (e) => e.preventDefault(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", placeholder: "you@yourdomain.com", className: "flex-1 bg-background border border-border px-4 py-4 text-sm outline-none focus:border-primary transition" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm hover:brightness-110 red-glow transition", children: "Subscribe" })
      ] })
    ] })
  ] }) });
}
function Gallery() {
  const shots = [hero, gpu, mobo, keyboardImg, monitor, headset, mouse, laptop];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionKicker, { label: "#FastRigs" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl md:text-5xl font-bold uppercase", children: [
        "Community ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Builds" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Tag your setup with #FastRigs to be featured." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-2", children: shots.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { href: "#", initial: {
      opacity: 0,
      scale: 0.9
    }, whileInView: {
      opacity: 1,
      scale: 1
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.05
    }, className: "group relative aspect-square overflow-hidden border border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s, alt: "", className: "w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-500", loading: "lazy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-6 h-6 opacity-0 group-hover:opacity-100 transition" }) })
    ] }, i)) })
  ] });
}
function ContactCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "mx-auto max-w-7xl px-6 pb-24 grid md:grid-cols-3 gap-4", children: [{
    icon: Phone,
    title: "Call Us",
    val: "+92 300 1234567",
    sub: "Mon–Sat 10AM–9PM"
  }, {
    icon: Mail,
    title: "Email",
    val: "hello@fastcomputers.pk",
    sub: "24h response time"
  }, {
    icon: MapPin,
    title: "Visit Showroom",
    val: "Karachi · Lahore · Islamabad",
    sub: "See rigs in person"
  }].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 20
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true
  }, transition: {
    delay: i * 0.1
  }, className: "border border-border bg-card p-8 hover:border-primary transition group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "w-6 h-6 text-primary group-hover:animate-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xs uppercase tracking-widest text-muted-foreground", children: c.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-bold text-lg", children: c.val }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: c.sub })
  ] }, c.title)) });
}
function Home() {
  const productsList = Route$1.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureStrip, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Categories, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Featured, { productsList }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CustomBuilder, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FlashSale, { productsList }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Brands, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GamingPCs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DealBanners, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Newsletter, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCTA, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Home as component
};
