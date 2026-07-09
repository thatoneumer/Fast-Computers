import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-C7ZyX2tA.mjs";
import { P as PageHero } from "./PageHero-WTHEmsdY.mjs";
import { a as useAuth, g as getOrdersFn } from "./router-DuyZ6LZh.mjs";
import "../_libs/seroval.mjs";
import "../_libs/sweetalert2.mjs";
import { P as Package, A as ArrowRight, h as MapPin, i as CreditCard } from "../_libs/lucide-react.mjs";
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
import "./server-B-63VqEF.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
function OrdersPage() {
  const {
    user
  } = useAuth();
  const [orders, setOrders] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;
      try {
        setLoading(true);
        const result = await getOrdersFn({
          data: {
            userId: user.id,
            email: user.email
          }
        });
        setOrders(result.orders || []);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [user]);
  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case "processing":
        return "bg-yellow-500/10 border-yellow-500/30 text-yellow-500";
      case "shipped":
        return "bg-blue-500/10 border-blue-500/30 text-blue-500";
      case "delivered":
        return "bg-green-500/10 border-green-500/30 text-green-500";
      case "cancelled":
        return "bg-red-500/10 border-red-500/30 text-red-500";
      default:
        return "bg-muted/10 border-border text-muted-foreground";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { crumb: "Account", kicker: "My", title: "Orders" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 py-12", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Loading orders..." }) }) : orders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "text-center py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-16 h-16 mx-auto text-muted-foreground mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-2", children: "No Orders Yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "You haven't placed any orders yet." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", search: {
          category: void 0
        }, className: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-bold uppercase tracking-widest text-sm hover:brightness-110 transition", children: [
          "Start Shopping ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: orders.map((order, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: index * 0.1
      }, className: "bg-card border border-border rounded-sm overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/30 px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Order Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: order.orderNumber })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: new Date(order.createdAt).toLocaleDateString() })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `px-3 py-1 text-xs font-bold uppercase tracking-wider border rounded-sm ${getStatusBadge(order.status)}`, children: order.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mb-6", children: order.items.map((item, itemIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-secondary/30 rounded-sm flex items-center justify-center overflow-hidden", children: item.img ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: item.name, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-8 h-8 text-muted-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: item.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground", children: [
                "Qty: ",
                item.quantity
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-primary", children: [
              "PKR ",
              item.price.toLocaleString()
            ] })
          ] }, itemIndex)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4 flex flex-wrap items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: order.city })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-4 h-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: order.paymentMethod === "cod" ? "Cash on Delivery" : order.paymentMethod })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl font-bold text-primary", children: [
                "PKR ",
                order.total.toLocaleString()
              ] })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-secondary/30 px-6 py-4 border-t border-border flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", search: {
          category: void 0
        }, className: "text-sm text-muted-foreground hover:text-primary transition flex items-center gap-2", children: [
          "Continue Shopping ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] }) })
      ] }, order._id || order.orderNumber)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  OrdersPage as component
};
