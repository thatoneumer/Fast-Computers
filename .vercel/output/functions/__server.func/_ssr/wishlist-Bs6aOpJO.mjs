import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-cDDb4Gxc.mjs";
import { P as PageHero } from "./PageHero-WTHEmsdY.mjs";
import { u as useCartWishlist } from "./router-CQJSMlrt.mjs";
import "../_libs/seroval.mjs";
import "../_libs/sweetalert2.mjs";
import { H as Heart, A as ArrowRight, T as Trash2, S as Star, a as ShoppingCart } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-9ydn9VDS.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
function WishlistPage() {
  const {
    wishlist,
    toggleWishlist,
    moveToCart
  } = useCartWishlist();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { crumb: "Wishlist", kicker: "Saved for Later", title: "My Wishlist" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm uppercase tracking-widest text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-bold", children: wishlist.length }),
            " items saved"
          ] }),
          wishlist.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => wishlist.forEach((item) => toggleWishlist(item)), className: "text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition cursor-pointer", children: "Clear All" })
        ] }),
        wishlist.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, className: "border border-border bg-card p-16 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-14 h-14 text-primary mx-auto animate-glow-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 text-3xl font-bold uppercase", children: "Your wishlist is empty" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Save items you love to compare and buy later." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition", children: [
            "Browse Shop ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: wishlist.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: i % 4 * 0.05
        }, className: "group relative border border-border bg-card overflow-hidden hover:border-primary transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggleWishlist(p), className: "absolute top-3 right-3 z-10 w-8 h-8 border border-border bg-background/70 backdrop-blur flex items-center justify-center hover:text-primary hover:border-primary transition cursor-pointer", "aria-label": "Remove", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-square overflow-hidden bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.name, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700", loading: "lazy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-primary", children: [
              Array.from({
                length: 5
              }).map((_, s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 fill-primary" }, s)),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground ml-1", children: [
                "(",
                p.rating,
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-bold leading-tight line-clamp-2 min-h-[2.5rem]", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-muted-foreground uppercase tracking-widest", children: [
              p.brand,
              " · ",
              p.cat
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-baseline gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary font-bold", children: [
                "PKR ",
                p.price.toLocaleString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground line-through", children: [
                "PKR ",
                p.old.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => moveToCart(p), className: "mt-4 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 text-xs font-bold uppercase tracking-widest hover:brightness-110 transition cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-4 h-4" }),
              " Move to Cart"
            ] })
          ] })
        ] }, p.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  WishlistPage as component
};
