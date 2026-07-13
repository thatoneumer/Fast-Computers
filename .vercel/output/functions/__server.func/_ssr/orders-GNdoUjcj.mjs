import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-DcL5ODS7.mjs";
import { P as PageHero } from "./PageHero-GT7BXNsf.mjs";
import { R as ReviewModal } from "./ReviewModal-C6TXiNzw.mjs";
import { a as useAuth, g as getOrdersFn, b as getUserReviewedProductsFn } from "./router-Dpz7ddGE.mjs";
import "../_libs/seroval.mjs";
import "../_libs/sweetalert2.mjs";
import { P as Package, A as ArrowRight, g as CircleCheckBig, S as Star, h as MapPin, i as CreditCard } from "../_libs/lucide-react.mjs";
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
import "./server-CWz37dU3.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "./email-CrmUIKV1.mjs";
function OrdersPage() {
  const {
    user
  } = useAuth();
  const [orders, setOrders] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [reviewedProductIds, setReviewedProductIds] = reactExports.useState([]);
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [reviewModal, setReviewModal] = reactExports.useState({
    isOpen: false,
    product: null
  });
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
  reactExports.useEffect(() => {
    const fetchReviewedProducts = async () => {
      if (!user) return;
      try {
        const result = await getUserReviewedProductsFn({
          data: {
            userId: user.id
          }
        });
        setReviewedProductIds(result.reviewedProductIds || []);
      } catch {
        setReviewedProductIds([]);
      }
    };
    fetchReviewedProducts();
  }, [user]);
  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
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
  const filteredOrders = statusFilter === "all" ? orders : orders.filter((o) => o.status === statusFilter);
  const openReviewModal = (item, orderId) => {
    setReviewModal({
      isOpen: true,
      product: {
        id: item.productId,
        name: item.name,
        img: item.img,
        brand: item.brand
      },
      orderId
    });
  };
  const handleReviewSubmitted = (productId) => {
    setReviewedProductIds((prev) => [...prev, productId]);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { crumb: "Account", kicker: "My", title: "Orders" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center space-x-4 mb-8", children: ["all", "pending", "shipped", "delivered"].map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStatusFilter(key), className: `px-4 py-2 rounded ${statusFilter === key ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`, children: key === "all" ? "All" : key.charAt(0).toUpperCase() + key.slice(1) }, key)) }),
        loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-sm uppercase tracking-widest", children: "Loading orders..." })
        ] }) : orders.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
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
          }, className: "inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-bold uppercase tracking-widest text-sm hover:brightness-110 transition red-glow", children: [
            "Start Shopping ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: filteredOrders.map((order, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: index * 0.08
        }, className: "bg-card border border-border overflow-hidden hover:border-border/80 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/30 px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 sm:gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Order Number" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: order.orderNumber })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground text-sm", children: new Date(order.createdAt).toLocaleDateString("en-PK", {
                  day: "numeric",
                  month: "short",
                  year: "numeric"
                }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `px-3 py-1 text-xs font-bold uppercase tracking-wider border ${getStatusBadge(order.status)}`, children: order.status })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mb-6", children: order.items.map((item, itemIndex) => {
              const isDelivered = order.status === "delivered";
              const alreadyReviewed = reviewedProductIds.includes(item.productId);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 ${itemIndex !== order.items.length - 1 ? "pb-4 border-b border-border/40" : ""}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 sm:w-16 sm:h-16 bg-secondary/30 border border-border shrink-0 overflow-hidden", children: item.img ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: item.name, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-7 h-7 text-muted-foreground m-auto mt-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm text-foreground line-clamp-2", children: item.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-0.5", children: [
                      "Qty: ",
                      item.quantity
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between sm:justify-end gap-4 sm:gap-6 pl-[68px] sm:pl-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-primary text-sm sm:text-base", children: [
                    "PKR ",
                    item.price.toLocaleString()
                  ] }),
                  isDelivered && (alreadyReviewed ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-green-500 font-bold uppercase tracking-wide shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3.5 h-3.5" }),
                    "Reviewed"
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => openReviewModal(item, order._id), className: "flex items-center gap-1.5 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary text-primary px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-primary" }),
                    "Review"
                  ] }))
                ] })
              ] }, itemIndex);
            }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-4 flex flex-wrap items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: order.city })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-4 h-4 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: order.paymentMethod === "cod" ? "Cash on Delivery" : order.paymentMethod })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl font-bold text-primary", children: [
                  "PKR ",
                  order.total.toLocaleString()
                ] })
              ] })
            ] })
          ] }),
          order.status === "delivered" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-500/5 border-t border-green-500/20 px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-green-500 text-xs font-bold uppercase tracking-wider", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4" }),
              "Order Delivered — Share your experience!"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", search: {
              category: void 0
            }, className: "text-xs text-muted-foreground hover:text-primary transition flex items-center gap-1.5", children: [
              "Shop More ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
            ] })
          ] }),
          order.status !== "delivered" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-secondary/30 px-4 sm:px-6 py-3 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", search: {
            category: void 0
          }, className: "text-sm text-muted-foreground hover:text-primary transition flex items-center gap-2", children: [
            "Continue Shopping ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] }) })
        ] }, order._id || order.orderNumber)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    reviewModal.product && /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewModal, { isOpen: reviewModal.isOpen, onClose: () => setReviewModal((prev) => ({
      ...prev,
      isOpen: false
    })), product: reviewModal.product, orderId: reviewModal.orderId, onReviewSubmitted: () => handleReviewSubmitted(reviewModal.product.id) })
  ] });
}
export {
  OrdersPage as component
};
