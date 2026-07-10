import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-BHfONx_C.mjs";
import { P as PageHero } from "./PageHero-WTHEmsdY.mjs";
import { u as useCartWishlist } from "./router-BjSOlR78.mjs";
import "../_libs/seroval.mjs";
import "../_libs/sweetalert2.mjs";
import { a as ShoppingCart, A as ArrowRight, r as Minus, s as Plus, T as Trash2, V as Tag, t as ShieldCheck, u as Truck } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence } from "../_libs/framer-motion.mjs";
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
import "./server-CH4m4AXv.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "./email-CrmUIKV1.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function CartPage() {
  const {
    cart,
    updateCartQty,
    removeFromCart
  } = useCartWishlist();
  const [coupon, setCoupon] = reactExports.useState("");
  const [applied, setApplied] = reactExports.useState(0);
  const subtotal = reactExports.useMemo(() => cart.reduce((s, r) => s + r.price * r.qty, 0), [cart]);
  const shipping = subtotal > 0 ? 1500 : 0;
  const discount = Math.round(subtotal * applied);
  const total = Math.max(0, subtotal + shipping - discount);
  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "FAST10") setApplied(0.1);
    else if (coupon.trim().toUpperCase() === "GAMER20") setApplied(0.2);
    else setApplied(0);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { crumb: "Cart", kicker: "Ready to Checkout", title: "Shopping Cart" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-16", children: cart.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "border border-border bg-card p-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-14 h-14 text-primary mx-auto animate-glow-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 text-3xl font-bold uppercase", children: "Your cart is empty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Start shopping to fill it with gaming gear." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition", children: [
          "Browse Shop ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: cart.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { layout: true, initial: {
            opacity: 0,
            x: -20
          }, animate: {
            opacity: 1,
            y: 0
          }, exit: {
            opacity: 0,
            x: 20,
            height: 0
          }, className: "flex gap-4 border border-border bg-card p-4 hover:border-primary transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: r.img, alt: r.name, className: "w-24 h-24 sm:w-32 sm:h-32 object-cover shrink-0", loading: "lazy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-primary", children: r.brand }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-bold leading-tight line-clamp-2", children: r.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-center justify-between flex-wrap gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center border border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateCartQty(r.id, r.qty - 1), className: "w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3 h-3" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 text-center text-sm font-bold", children: r.qty }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateCartQty(r.id, r.qty + 1), className: "w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-primary font-bold", children: [
                    "PKR ",
                    (r.price * r.qty).toLocaleString()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => removeFromCart(r.id), className: "text-muted-foreground hover:text-primary transition", "aria-label": "Remove", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) })
                ] })
              ] })
            ] })
          ] }, r.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-card p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest", children: "Coupon Code" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: coupon, onChange: (e) => setCoupon(e.target.value), placeholder: "Try FAST10 or GAMER20", className: "flex-1 bg-background border border-border px-4 py-3 outline-none focus:border-primary transition text-sm" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: applyCoupon, className: "bg-primary text-primary-foreground px-6 font-bold uppercase tracking-widest text-xs hover:brightness-110 transition", children: "Apply" })
            ] }),
            applied > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-xs text-primary", children: [
              "✓ Coupon applied · ",
              Math.round(applied * 100),
              "% off"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:sticky lg:top-28 h-fit border border-border bg-card p-6 red-border-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-primary font-bold", children: "Order Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Subtotal", value: `PKR ${subtotal.toLocaleString()}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Shipping", value: `PKR ${shipping.toLocaleString()}` }),
            discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Discount", value: `- PKR ${discount.toLocaleString()}`, accent: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-border my-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase tracking-widest text-xs text-muted-foreground", children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-display font-bold text-primary", children: [
                "PKR ",
                total.toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/checkout", className: "mt-6 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition text-center", children: [
            "Proceed to Checkout ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-3 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-primary" }),
              " 1-Year manufacturer warranty on all parts"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-4 h-4 text-primary" }),
              " Insured express delivery across Pakistan"
            ] })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function Row({
  label,
  value,
  accent
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: accent ? "text-primary font-bold" : "font-bold", children: value })
  ] });
}
export {
  CartPage as component
};
