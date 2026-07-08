import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-B-wuuYc_.mjs";
import { P as PageHero } from "./PageHero-WTHEmsdY.mjs";
import { l as Route, u as useCartWishlist } from "./router-fsufY5hA.mjs";
import "../_libs/seroval.mjs";
import "../_libs/sweetalert2.mjs";
import { q as ChevronRight, i as Star, J as ShieldCheck, N as Truck, t as RotateCcw, a as Check, E as Minus, G as Plus, e as ShoppingCart, g as Heart, d as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "./products-data-LRMOsjPP.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-CHo3IP9P.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
function ProductDetailPage() {
  const product = Route.useLoaderData();
  const [quantity, setQuantity] = reactExports.useState(1);
  const [selectedImage, setSelectedImage] = reactExports.useState(0);
  const [activeTab, setActiveTab] = reactExports.useState("specs");
  const {
    addToCart,
    toggleWishlist,
    isInWishlist
  } = useCartWishlist();
  if (!product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-32 text-center pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold uppercase text-primary animate-glow-pulse", children: "Product Not Found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4", children: "The product you are looking for does not exist or has been removed." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", search: {
          category: void 0
        }, className: "inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition", children: "Back to Shop" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
    ] });
  }
  const discount = Math.round((1 - product.price / product.old) * 100);
  const productImages = [product.img, ...product.images || []].filter(Boolean);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { crumb: "Shop", kicker: "Product Details", title: product.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "hover:text-primary transition", search: {
            category: void 0
          }, children: "Shop" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "hover:text-primary transition", search: {
            category: product.cat
          }, children: product.cat }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: product.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            x: -30
          }, animate: {
            opacity: 1,
            x: 0
          }, transition: {
            duration: 0.6
          }, className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden border border-border bg-card red-border-glow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: productImages[selectedImage] || product.img, alt: product.name, className: "w-full h-full object-cover" }),
              !product.inStock && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/80 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold uppercase tracking-widest", children: "Out of Stock" }) }) })
            ] }),
            productImages.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-3", children: productImages.map((imgUrl, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedImage(i), className: `aspect-square overflow-hidden border transition ${selectedImage === i ? "border-primary" : "border-border hover:border-primary/50"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imgUrl, alt: "", className: "w-full h-full object-cover opacity-80 hover:opacity-100 transition" }) }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            x: 30
          }, animate: {
            opacity: 1,
            x: 0
          }, transition: {
            duration: 0.6
          }, className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-primary", children: product.brand }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 bg-muted-foreground rounded-full" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: product.cat })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl font-bold uppercase leading-tight", children: product.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 text-primary", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `w-4 h-4 ${i < product.rating ? "fill-primary" : "opacity-30"}` }, i)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
                  "(",
                  product.reviews,
                  " reviews)"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-4xl font-display font-bold text-primary", children: [
                "PKR ",
                product.price.toLocaleString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl text-muted-foreground line-through", children: [
                "PKR ",
                product.old.toLocaleString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-2 py-1", children: [
                "-",
                discount,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: product.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: [{
              icon: ShieldCheck,
              text: "1 Year Warranty"
            }, {
              icon: Truck,
              text: "Free Shipping"
            }, {
              icon: RotateCcw,
              text: "7 Days Return"
            }, {
              icon: Check,
              text: "100% Original"
            }].map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "w-4 h-4 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: f.text })
            ] }, i)) }),
            product.inStock ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-4 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQuantity(Math.max(1, quantity - 1)), className: "w-12 h-12 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-4 h-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-16 text-center font-bold", children: quantity }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQuantity(quantity + 1), className: "w-12 h-12 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => addToCart(product, quantity), className: "flex-1 inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition cursor-pointer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-5 h-5" }),
                  " Add to Cart"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toggleWishlist(product), className: "w-full inline-flex items-center justify-center gap-2 border border-border py-3 font-bold uppercase tracking-widest text-xs hover:border-primary hover:text-primary transition cursor-pointer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: `w-4 h-4 ${isInWishlist(product.id) ? "fill-primary text-primary" : ""}` }),
                isInWishlist(product.id) ? "In Wishlist" : "Add to Wishlist"
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { disabled: true, className: "w-full inline-flex items-center justify-center gap-2 bg-muted text-muted-foreground py-4 font-bold uppercase tracking-widest text-sm cursor-not-allowed", children: "Out of Stock" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toggleWishlist(product), className: "mt-3 w-full inline-flex items-center justify-center gap-2 border border-border py-3 font-bold uppercase tracking-widest text-xs hover:border-primary hover:text-primary transition cursor-pointer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: `w-4 h-4 ${isInWishlist(product.id) ? "fill-primary text-primary" : ""}` }),
                isInWishlist(product.id) ? "In Wishlist" : "Add to Wishlist"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6,
          delay: 0.2
        }, className: "mt-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex border-b border-border", children: [{
            id: "specs",
            label: "Specifications"
          }, {
            id: "reviews",
            label: "Reviews"
          }].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab(tab.id), className: `relative px-6 py-4 text-sm font-bold uppercase tracking-widest transition ${activeTab === tab.id ? "text-primary" : "text-muted-foreground hover:text-foreground"}`, children: [
            activeTab === tab.id && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layoutId: "product-tab", className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary", transition: {
              type: "spring",
              stiffness: 400,
              damping: 30
            } }),
            tab.label
          ] }, tab.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8", children: [
            activeTab === "specs" && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
              opacity: 0
            }, animate: {
              opacity: 1
            }, className: "border border-border bg-card", children: product.specs.map((spec, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between p-4 ${i !== product.specs.length - 1 ? "border-b border-border" : ""}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground uppercase tracking-wider", children: spec.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: spec.value })
            ] }, i)) }),
            activeTab === "reviews" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
              opacity: 0
            }, animate: {
              opacity: 1
            }, className: "space-y-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 border border-border bg-card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-12 h-12 text-primary mx-auto fill-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 text-4xl font-display font-bold", children: [
                  product.rating,
                  ".0"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-sm text-muted-foreground", children: [
                  "Based on ",
                  product.reviews,
                  " reviews"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-muted-foreground", children: "Reviews coming soon. Be the first to review this product!" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6,
          delay: 0.3
        }, className: "mt-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold uppercase", children: [
              "Related ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Products" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "inline-flex items-center gap-2 text-sm uppercase tracking-widest text-primary hover:gap-3 transition-all", search: {
              category: void 0
            }, children: [
              "View All ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/product/$id", params: {
            id: String(i)
          }, className: "group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-square overflow-hidden border border-border bg-card mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.img, alt: "", className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-sm line-clamp-2", children: [
              "Related Product ",
              i
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-primary font-bold", children: [
              "PKR ",
              (product.price + i * 1e4).toLocaleString()
            ] })
          ] }, i)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ProductDetailPage as component
};
