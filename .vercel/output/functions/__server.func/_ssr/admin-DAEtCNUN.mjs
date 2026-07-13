import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { h as Route$4, a as useAuth, i as getAllOrdersFn, j as getAllReviewsFn, k as seedProductsFn, l as getProductsFn, m as deleteProductFn, n as deleteReviewFn, o as updateProductFn, p as createProductFn, q as uploadImageToCloudinaryFn, r as updateOrderStatusFn } from "./router-Dpz7ddGE.mjs";
import { S as Swal } from "../_libs/sweetalert2.mjs";
import "../_libs/seroval.mjs";
import { a2 as RefreshCw, a3 as ShieldAlert, X, t as ShoppingBag, P as Package, s as MessageSquare, a4 as House, L as LogOut, M as Menu, v as Plus, a5 as TriangleAlert, z as Layers, S as Star, b as Search, a6 as Filter, a7 as Pen, T as Trash2, x as Truck, j as CircleCheck, a8 as CircleX, a9 as CloudUpload, aa as Image, h as MapPin, q as Phone, i as CreditCard } from "../_libs/lucide-react.mjs";
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
import "./server-CWz37dU3.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "./email-CrmUIKV1.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const DEFAULT_CATEGORIES = ["Graphics Cards", "Motherboards", "Processors", "RAM", "SSDs", "Mice", "Headsets", "Keyboards", "Monitors", "PSUs", "Cases", "Coolers", "Laptops"];
const NAV_ITEMS = [{
  id: "products",
  label: "Products",
  icon: ShoppingBag
}, {
  id: "orders",
  label: "Orders",
  icon: Package
}, {
  id: "reviews",
  label: "Reviews",
  icon: MessageSquare
}];
function AdminPage() {
  const loaderData = Route$4.useLoaderData();
  const {
    user,
    logout,
    loading: authLoading
  } = useAuth();
  const navigate = useNavigate();
  const isAdmin = user && (user.role === "admin" || user.email.toLowerCase().startsWith("admin@"));
  const [sidebarOpen, setSidebarOpen] = reactExports.useState(false);
  const [activeTab, setActiveTab] = reactExports.useState("products");
  const [products, setProducts] = reactExports.useState(loaderData.products || []);
  const [ordersList, setOrdersList] = reactExports.useState([]);
  const [ordersLoading, setOrdersLoading] = reactExports.useState(false);
  const [orderStatusFilter, setOrderStatusFilter] = reactExports.useState("all");
  const [reviewsList, setReviewsList] = reactExports.useState([]);
  const [reviewsLoading, setReviewsLoading] = reactExports.useState(false);
  const [reviewSearch, setReviewSearch] = reactExports.useState("");
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [selectedCat, setSelectedCat] = reactExports.useState("All");
  const [isFormOpen, setIsFormOpen] = reactExports.useState(false);
  const [editProduct, setEditProduct] = reactExports.useState(null);
  const [formName, setFormName] = reactExports.useState("");
  const [formBrand, setFormBrand] = reactExports.useState("");
  const [formCat, setFormCat] = reactExports.useState(DEFAULT_CATEGORIES[0]);
  const [isCustomCat, setIsCustomCat] = reactExports.useState(false);
  const [customCatName, setCustomCatName] = reactExports.useState("");
  const [formPrice, setFormPrice] = reactExports.useState(0);
  const [formOldPrice, setFormOldPrice] = reactExports.useState(0);
  const [formRating, setFormRating] = reactExports.useState(5);
  const [formImg, setFormImg] = reactExports.useState("");
  const [formImages, setFormImages] = reactExports.useState([]);
  const [isUploadingImg, setIsUploadingImg] = reactExports.useState(false);
  const [isUploadingImages, setIsUploadingImages] = reactExports.useState(false);
  const [formInStock, setFormInStock] = reactExports.useState(true);
  const [formDesc, setFormDesc] = reactExports.useState("");
  const [formSpecs, setFormSpecs] = reactExports.useState([]);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (activeTab === "orders" && ordersList.length === 0) {
      setOrdersLoading(true);
      getAllOrdersFn().then((r) => setOrdersList(r.orders || [])).catch(() => setOrdersList([])).finally(() => setOrdersLoading(false));
    }
  }, [activeTab]);
  reactExports.useEffect(() => {
    if (activeTab === "reviews" && reviewsList.length === 0) {
      setReviewsLoading(true);
      getAllReviewsFn().then((r) => setReviewsList(r.reviews || [])).catch(() => setReviewsList([])).finally(() => setReviewsLoading(false));
    }
  }, [activeTab]);
  const stats = reactExports.useMemo(() => {
    const total = products.length;
    const outOfStock = products.filter((p) => !p.inStock).length;
    const categoriesCount = new Set(products.map((p) => p.cat)).size;
    const avgRating = total ? (products.reduce((s, p) => s + (p.rating || 5), 0) / total).toFixed(1) : "0.0";
    const pendingOrders = ordersList.filter((o) => o.status === "pending").length;
    const shippedOrders = ordersList.filter((o) => o.status === "shipped").length;
    const deliveredOrders = ordersList.filter((o) => o.status === "delivered").length;
    const totalReviews = reviewsList.length;
    const avgReviewRating = totalReviews ? (reviewsList.reduce((s, r) => s + r.rating, 0) / totalReviews).toFixed(1) : "0.0";
    return {
      total,
      outOfStock,
      categoriesCount,
      avgRating,
      pendingOrders,
      shippedOrders,
      deliveredOrders,
      totalReviews,
      avgReviewRating
    };
  }, [products, ordersList, reviewsList]);
  const categoriesList = reactExports.useMemo(() => ["All", ...Array.from(new Set(products.map((p) => p.cat))).sort()], [products]);
  const filteredProducts = reactExports.useMemo(() => products.filter((p) => {
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q);
    const matchCat = selectedCat === "All" || p.cat === selectedCat;
    return matchSearch && matchCat;
  }), [products, searchQuery, selectedCat]);
  const openForm = (product = null) => {
    if (product) {
      setEditProduct(product);
      setFormName(product.name || "");
      setFormBrand(product.brand || "");
      if (DEFAULT_CATEGORIES.includes(product.cat)) {
        setFormCat(product.cat);
        setIsCustomCat(false);
      } else {
        setFormCat("Custom");
        setIsCustomCat(true);
        setCustomCatName(product.cat || "");
      }
      setFormPrice(product.price || 0);
      setFormOldPrice(product.old || 0);
      setFormRating(product.rating || 5);
      setFormImg(product.img || "");
      setFormImages(product.images || []);
      setFormInStock(product.inStock !== false);
      setFormDesc(product.description || "");
      setFormSpecs(product.specs || []);
    } else {
      setEditProduct(null);
      setFormName("");
      setFormBrand("");
      setFormCat(DEFAULT_CATEGORIES[0]);
      setIsCustomCat(false);
      setCustomCatName("");
      setFormPrice(0);
      setFormOldPrice(0);
      setFormRating(5);
      setFormImg("");
      setFormImages([]);
      setFormInStock(true);
      setFormDesc("");
      setFormSpecs([]);
    }
    setIsFormOpen(true);
  };
  const addSpecRow = () => setFormSpecs([...formSpecs, {
    label: "",
    value: ""
  }]);
  const updateSpecRow = (i, field, v) => {
    const u = [...formSpecs];
    u[i][field] = v;
    setFormSpecs(u);
  };
  const removeSpecRow = (i) => setFormSpecs(formSpecs.filter((_, idx) => idx !== i));
  const handleCardImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      Swal.fire("Invalid File", "Select an image file.", "error");
      return;
    }
    setIsUploadingImg(true);
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const res = await uploadImageToCloudinaryFn({
          data: {
            base64Data: reader.result
          }
        });
        setFormImg(res.url);
      } catch (err) {
        Swal.fire("Upload Failed", err.message || "Failed.", "error");
      } finally {
        setIsUploadingImg(false);
      }
    };
    reader.onerror = () => setIsUploadingImg(false);
    reader.readAsDataURL(file);
  };
  const handleDetailImagesUpload = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (!files[i].type.startsWith("image/")) {
        Swal.fire("Invalid File", `"${files[i].name}" is not an image.`, "error");
        return;
      }
    }
    setIsUploadingImages(true);
    const uploadedUrls = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = async () => {
          try {
            const res = await uploadImageToCloudinaryFn({
              data: {
                base64Data: reader.result
              }
            });
            uploadedUrls.push(res.url);
          } catch {
            Swal.fire("Upload Failed", `Failed to upload "${file.name}".`, "error");
          } finally {
            resolve();
          }
        };
        reader.onerror = () => resolve();
        reader.readAsDataURL(file);
      });
    }
    if (uploadedUrls.length > 0) setFormImages((prev) => [...prev, ...uploadedUrls]);
    setIsUploadingImages(false);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formName.trim() || !formBrand.trim() || !formImg.trim()) {
      Swal.fire("Validation Error", "Name, Brand, and Image are required.", "error");
      return;
    }
    const finalCategory = isCustomCat ? customCatName.trim() : formCat;
    if (!finalCategory) {
      Swal.fire("Validation Error", "Specify a category.", "error");
      return;
    }
    const cleanedSpecs = formSpecs.filter((s) => s.label.trim() && s.value.trim());
    const productPayload = {
      name: formName.trim(),
      brand: formBrand.trim(),
      cat: finalCategory,
      price: Number(formPrice),
      old: Number(formOldPrice) || Number(formPrice),
      rating: Number(formRating),
      img: formImg.trim(),
      images: formImages.map((img) => img.trim()).filter(Boolean),
      inStock: formInStock,
      description: formDesc.trim(),
      specs: cleanedSpecs
    };
    setIsSubmitting(true);
    try {
      if (editProduct) {
        await updateProductFn({
          data: {
            id: editProduct.id,
            ...productPayload
          }
        });
        setProducts((prev) => prev.map((p) => p.id === editProduct.id ? {
          ...p,
          ...productPayload
        } : p));
        Swal.fire({
          title: "Product Updated!",
          text: `"${formName}" updated.`,
          icon: "success",
          background: "#1E1E1E",
          color: "#FFF",
          confirmButtonColor: "#EF4444"
        });
      } else {
        const result = await createProductFn({
          data: productPayload
        });
        const newId = result.id || Date.now().toString();
        setProducts((prev) => [{
          id: newId,
          _id: newId,
          ...productPayload
        }, ...prev]);
        Swal.fire({
          title: "Product Created!",
          text: `"${formName}" added.`,
          icon: "success",
          background: "#1E1E1E",
          color: "#FFF",
          confirmButtonColor: "#EF4444"
        });
      }
      setIsFormOpen(false);
    } catch (err) {
      Swal.fire("Error Saving Product", err?.message || "Something went wrong.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleDeleteProduct = async (product) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: `Delete "${product.name}"? This cannot be undone.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      cancelButtonColor: "#3F3F46",
      confirmButtonText: "Yes, Delete It",
      background: "#1E1E1E",
      color: "#FFF"
    });
    if (confirm.isConfirmed) {
      try {
        await deleteProductFn({
          data: {
            id: product.id
          }
        });
        setProducts((prev) => prev.filter((p) => p.id !== product.id));
        Swal.fire({
          title: "Deleted!",
          text: `"${product.name}" removed.`,
          icon: "success",
          background: "#1E1E1E",
          color: "#FFF",
          confirmButtonColor: "#EF4444"
        });
      } catch (err) {
        Swal.fire("Error Deleting", err?.message || "Failed.", "error");
      }
    }
  };
  const handleResetDatabase = async () => {
    const confirm = await Swal.fire({
      title: "Reset Inventory?",
      text: "Restores database to 22 default products.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      cancelButtonColor: "#3F3F46",
      confirmButtonText: "Yes, Reset",
      background: "#1E1E1E",
      color: "#FFF"
    });
    if (confirm.isConfirmed) {
      try {
        Swal.fire({
          title: "Resetting...",
          allowOutsideClick: false,
          didOpen: () => Swal.showLoading()
        });
        await seedProductsFn();
        const freshProducts = await getProductsFn();
        setProducts(freshProducts);
        Swal.fire({
          title: "Done!",
          text: "Inventory restored.",
          icon: "success",
          background: "#1E1E1E",
          color: "#FFF",
          confirmButtonColor: "#EF4444"
        });
      } catch (err) {
        Swal.fire("Error", err?.message || "Failed.", "error");
      }
    }
  };
  const handleUpdateOrderStatus = async (orderId, newStatus) => {
    try {
      await updateOrderStatusFn({
        data: {
          orderId,
          status: newStatus
        }
      });
      setOrdersList((prev) => prev.map((o) => o._id === orderId ? {
        ...o,
        status: newStatus
      } : o));
      Swal.fire({
        title: "Status Updated!",
        text: `Changed to ${newStatus}.`,
        icon: "success",
        background: "#1E1E1E",
        color: "#FFF",
        confirmButtonColor: "#EF4444"
      });
    } catch (err) {
      Swal.fire("Error", err?.message || "Failed.", "error");
    }
  };
  const handleCancelOrder = async (order) => {
    const confirm = await Swal.fire({
      title: "Cancel Order?",
      text: `Cancel order ${order.orderNumber}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      cancelButtonColor: "#3F3F46",
      confirmButtonText: "Yes, Cancel",
      background: "#1E1E1E",
      color: "#FFF"
    });
    if (confirm.isConfirmed) {
      try {
        await updateOrderStatusFn({
          data: {
            orderId: order._id,
            status: "cancelled"
          }
        });
        setOrdersList((prev) => prev.map((o) => o._id === order._id ? {
          ...o,
          status: "cancelled"
        } : o));
        Swal.fire({
          title: "Cancelled",
          text: `Order ${order.orderNumber} cancelled.`,
          icon: "success",
          background: "#1E1E1E",
          color: "#FFF",
          confirmButtonColor: "#EF4444"
        });
      } catch (err) {
        Swal.fire("Error", err?.message || "Failed.", "error");
      }
    }
  };
  const handleDeleteReview = async (review) => {
    const confirm = await Swal.fire({
      title: "Delete Review?",
      text: `Remove review by "${review.userName}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      cancelButtonColor: "#3F3F46",
      confirmButtonText: "Yes, Delete",
      background: "#1E1E1E",
      color: "#FFF"
    });
    if (confirm.isConfirmed) {
      try {
        await deleteReviewFn({
          data: {
            reviewId: review._id
          }
        });
        setReviewsList((prev) => prev.filter((r) => r._id !== review._id));
        Swal.fire({
          title: "Deleted!",
          text: "Review removed.",
          icon: "success",
          background: "#1E1E1E",
          color: "#FFF",
          confirmButtonColor: "#EF4444"
        });
      } catch (err) {
        Swal.fire("Error", err?.message || "Failed.", "error");
      }
    }
  };
  const OrderCard = ({
    order,
    showActions
  }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 sm:p-6 hover:bg-white/[0.02] transition-colors border-b border-white/5 last:border-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-start justify-between gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4", children: [["Order #", order.orderNumber], ["Date", new Date(order.createdAt).toLocaleDateString()], ["Customer", order.fullName], ["Email", order.email]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/40 uppercase tracking-widest", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-white/90 truncate", children: v })
      ] }, k)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mb-3", children: order.items.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 bg-white/5 border border-white/10 overflow-hidden shrink-0", children: item.img ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: "", className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4 text-white/30 m-auto mt-2.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium truncate text-white/80", children: item.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-white/40", children: [
            "Qty: ",
            item.quantity
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-primary shrink-0", children: [
          "PKR ",
          item.price.toLocaleString()
        ] })
      ] }, idx)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 text-xs text-white/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3" }),
          order.city
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3 h-3" }),
          order.phone
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-3 h-3" }),
          order.paymentMethod === "cod" ? "Cash on Delivery" : order.paymentMethod
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-3 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/40 uppercase tracking-widest", children: "Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl font-bold text-primary", children: [
          "PKR ",
          order.total.toLocaleString()
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        showActions === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleUpdateOrderStatus(order._id, "shipped"), className: "flex items-center gap-1.5 bg-blue-500/90 hover:bg-blue-500 text-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-3.5 h-3.5" }),
            "Ship"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleCancelOrder(order), className: "flex items-center gap-1.5 bg-primary/90 hover:bg-primary text-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-3.5 h-3.5" }),
            "Cancel"
          ] })
        ] }),
        showActions === "shipped" && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleUpdateOrderStatus(order._id, "delivered"), className: "flex items-center gap-1.5 bg-green-500/90 hover:bg-green-500 text-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
          "Delivered"
        ] }),
        showActions === "completed" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-green-500/10 border border-green-500/30 text-green-400 px-3 py-1.5 font-bold uppercase", children: "Completed" }),
        showActions === "cancelled" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-primary/10 border border-primary/30 text-primary px-3 py-1.5 font-bold uppercase", children: "Cancelled" })
      ] })
    ] })
  ] }) });
  if (authLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-8 h-8 text-primary animate-spin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-widest uppercase text-white/40", children: "Authenticating..." })
    ] }) });
  }
  if (!user || !isAdmin) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background text-foreground flex items-center justify-center p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md w-full border border-border bg-card p-10 text-center red-border-glow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-14 h-14 text-primary mx-auto animate-bounce mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold uppercase tracking-widest mb-3", children: "Access Denied" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/50 text-sm leading-relaxed mb-8", children: [
        "This page requires Administrator credentials. Log in with an admin email (e.g. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-primary font-bold", children: "admin@..." }),
        ")."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth", className: "bg-primary text-white px-5 py-2.5 font-bold uppercase tracking-widest text-xs hover:brightness-110 transition red-glow", children: "Log In" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "border border-border hover:border-primary px-5 py-2.5 font-bold uppercase tracking-widest text-xs transition", children: "Back to Site" })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: sidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, className: "fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden", onClick: () => setSidebarOpen(false) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: `
        fixed top-0 left-0 h-full z-50 w-64 flex flex-col
        bg-[oklch(0.10_0.015_20)] border-r border-white/[0.06]
        transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:z-auto
      `, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-5 border-b border-white/[0.06] flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 group", onClick: () => setSidebarOpen(false), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl font-display font-bold tracking-widest", children: [
            "F",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "/" }),
            "AST"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-[0.3em] text-white/40 border-l border-white/10 pl-2", children: "Admin" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSidebarOpen(false), className: "lg:hidden text-white/40 hover:text-white transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-4 border-b border-white/[0.06]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm uppercase shrink-0", children: user.name?.charAt(0) || "A" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-white truncate", children: user.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/40 uppercase tracking-wider", children: "Administrator" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex-1 px-3 py-4 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold uppercase tracking-[0.25em] text-white/30 px-3 mb-3", children: "Management" }),
        NAV_ITEMS.map(({
          id,
          label,
          icon: Icon
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
          setActiveTab(id);
          setSidebarOpen(false);
        }, className: `
                w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold uppercase tracking-wider transition-all
                ${activeTab === id ? "bg-primary/15 border-l-2 border-primary text-primary" : "text-white/50 hover:text-white hover:bg-white/[0.04] border-l-2 border-transparent"}
              `, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 shrink-0" }),
          label,
          id === "orders" && ordersList.filter((o) => o.status === "pending").length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto bg-yellow-500/20 text-yellow-400 text-[9px] font-bold px-1.5 py-0.5 rounded-full", children: ordersList.filter((o) => o.status === "pending").length })
        ] }, id)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold uppercase tracking-[0.25em] text-white/30 px-3 mt-5 mb-3", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold uppercase tracking-wider text-white/50 hover:text-white hover:bg-white/[0.04] transition border-l-2 border-transparent", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-4 h-4 shrink-0" }),
          " View Site"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-3 border-t border-white/[0.06] grid grid-cols-3 gap-2", children: [{
        label: "Products",
        value: stats.total
      }, {
        label: "Orders",
        value: ordersList.length || "—"
      }, {
        label: "Reviews",
        value: stats.totalReviews
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center bg-white/[0.03] border border-white/[0.06] py-2 px-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-display font-bold text-white", children: s.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] uppercase tracking-wider text-white/30", children: s.label })
      ] }, s.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-3 border-t border-white/[0.06]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: async () => {
        await logout();
        navigate({
          to: "/"
        });
      }, className: "w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white/40 hover:text-primary hover:bg-primary/5 transition border border-transparent hover:border-primary/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-3.5 h-3.5" }),
        " Logout"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0 lg:min-h-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-30 bg-[oklch(0.09_0.012_20)]/95 backdrop-blur border-b border-white/[0.06] px-4 sm:px-6 py-4 flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSidebarOpen(true), className: "lg:hidden text-white/50 hover:text-white transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-white/30", children: "Admin Portal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-lg font-display font-bold uppercase tracking-wide text-white leading-none", children: NAV_ITEMS.find((n) => n.id === activeTab)?.label || "Dashboard" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          activeTab === "products" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => openForm(null), className: "flex items-center gap-1.5 bg-primary hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 red-glow transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3.5 h-3.5" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Add Product" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleResetDatabase, className: "flex items-center gap-1.5 border border-white/10 hover:border-primary/50 text-white/60 hover:text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 transition", title: "Reset to seed data", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Reset DB" })
            ] })
          ] }),
          activeTab === "orders" && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: async () => {
            setOrdersLoading(true);
            const r = await getAllOrdersFn().catch(() => ({
              orders: []
            }));
            setOrdersList(r.orders || []);
            setOrdersLoading(false);
          }, className: "flex items-center gap-1.5 border border-white/10 hover:border-primary/50 text-white/60 hover:text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-3.5 h-3.5 ${ordersLoading ? "animate-spin" : ""}` }),
            " Refresh"
          ] }),
          activeTab === "reviews" && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: async () => {
            setReviewsLoading(true);
            const r = await getAllReviewsFn().catch(() => ({
              reviews: []
            }));
            setReviewsList(r.reviews || []);
            setReviewsLoading(false);
          }, className: "flex items-center gap-1.5 border border-white/10 hover:border-primary/50 text-white/60 hover:text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `w-3.5 h-3.5 ${reviewsLoading ? "animate-spin" : ""}` }),
            " Refresh"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 overflow-y-auto p-4 sm:p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 mb-6", children: [{
          label: "Total Products",
          value: stats.total,
          sub: "in inventory",
          icon: ShoppingBag,
          color: "text-primary"
        }, {
          label: "Out of Stock",
          value: stats.outOfStock,
          sub: "need restock",
          icon: TriangleAlert,
          color: stats.outOfStock > 0 ? "text-yellow-400" : "text-white/30"
        }, {
          label: "Categories",
          value: stats.categoriesCount,
          sub: "hardware types",
          icon: Layers,
          color: "text-white/70"
        }, {
          label: "Avg Rating",
          value: `${stats.avgRating}★`,
          sub: "product quality",
          icon: Star,
          color: "text-primary"
        }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 12
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: i * 0.05
        }, className: "bg-white/[0.03] border border-white/[0.08] p-4 hover:border-primary/30 transition group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-white/40 mb-1", children: s.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl sm:text-3xl font-display font-bold text-white", children: s.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/30 mt-1", children: s.sub })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2 bg-white/[0.05] border border-white/[0.08] ${s.color} group-hover:border-primary/30 transition`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-4 h-4" }) })
        ] }) }, s.label)) }),
        activeTab === "products" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 bg-white/[0.03] border border-white/[0.08] p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Search products...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "w-full bg-white/[0.04] border border-white/[0.08] pl-9 pr-4 py-2 text-sm text-white placeholder:text-white/30 outline-none focus:border-primary/50 transition" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Filter, { className: "w-3.5 h-3.5 text-white/30 hidden sm:block shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: selectedCat, onChange: (e) => setSelectedCat(e.target.value), className: "bg-white/[0.04] border border-white/[0.08] px-3 py-2 text-xs font-bold uppercase tracking-wider text-white/70 outline-none focus:border-primary/50 cursor-pointer w-full sm:w-48", children: categoriesList.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c === "All" ? "All Categories" : c }, c)) })
            ] })
          ] }),
          filteredProducts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-white/[0.08] bg-white/[0.02] p-16 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-10 h-10 text-white/20 mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold uppercase text-white/60", children: "No Products Found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/30 mt-1", children: "Try adjusting filters or add a new product." })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block bg-white/[0.02] border border-white/[0.08] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/[0.06] text-[10px] uppercase tracking-widest font-bold text-white/40 bg-white/[0.02]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4", children: "Preview" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4", children: "Product" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4", children: "Brand" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4", children: "Category" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 text-right", children: "Price" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 text-center", children: "Status" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 text-center", children: "Actions" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filteredProducts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/[0.04] hover:bg-white/[0.03] transition", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-white/[0.05] border border-white/[0.08] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: "", className: "w-full h-full object-cover" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-4 max-w-[200px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm text-white/90 line-clamp-2", children: p.name }),
                  p.old > p.price && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.5 uppercase font-bold", children: "Sale" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-xs font-bold uppercase tracking-wider text-white/50", children: p.brand }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-xs text-white/60", children: p.cat }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-4 text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-primary", children: [
                    "PKR ",
                    p.price.toLocaleString()
                  ] }),
                  p.old > p.price && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-white/30 line-through", children: [
                    "PKR ",
                    p.old.toLocaleString()
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-bold uppercase px-2.5 py-1 border ${p.inStock ? "bg-green-500/10 border-green-500/20 text-green-400" : "bg-primary/10 border-primary/20 text-primary"}`, children: p.inStock ? "In Stock" : "Out" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => openForm(p), className: "w-7 h-7 flex items-center justify-center border border-white/10 hover:border-primary hover:text-primary transition", title: "Edit", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3 h-3" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDeleteProduct(p), className: "w-7 h-7 flex items-center justify-center border border-white/10 hover:border-primary hover:text-primary transition", title: "Delete", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" }) })
                ] }) })
              ] }, p.id)) })
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden", children: filteredProducts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/[0.02] border border-white/[0.08] p-4 hover:border-primary/30 transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-white/[0.05] border border-white/[0.08] overflow-hidden shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: "", className: "w-full h-full object-cover" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm text-white/90 line-clamp-2", children: p.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-white/40 uppercase tracking-wider mt-0.5", children: [
                    p.brand,
                    " · ",
                    p.cat
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 font-bold text-sm text-primary", children: [
                    "PKR ",
                    p.price.toLocaleString()
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-3 border-t border-white/[0.06]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[9px] font-bold uppercase px-2 py-0.5 border ${p.inStock ? "bg-green-500/10 border-green-500/20 text-green-400" : "bg-primary/10 border-primary/20 text-primary"}`, children: p.inStock ? "In Stock" : "Out of Stock" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => openForm(p), className: "flex items-center gap-1.5 border border-white/10 hover:border-primary hover:text-primary px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider transition", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3 h-3" }),
                    "Edit"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleDeleteProduct(p), className: "flex items-center gap-1.5 border border-white/10 hover:border-primary hover:text-primary px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider transition text-primary/80", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" }),
                    "Del"
                  ] })
                ] })
              ] })
            ] }, p.id)) })
          ] })
        ] }, "products"),
        activeTab === "orders" && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, className: "space-y-5", children: ordersLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-8 h-8 text-primary animate-spin mx-auto mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-white/40", children: "Loading orders..." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [{
            label: "Pending",
            value: stats.pendingOrders,
            color: "text-yellow-400",
            bg: "bg-yellow-500/10 border-yellow-500/20"
          }, {
            label: "Shipped",
            value: stats.shippedOrders,
            color: "text-blue-400",
            bg: "bg-blue-500/10 border-blue-500/20"
          }, {
            label: "Delivered",
            value: stats.deliveredOrders,
            color: "text-green-400",
            bg: "bg-green-500/10 border-green-500/20"
          }, {
            label: "Cancelled",
            value: ordersList.filter((o) => o.status === "cancelled").length,
            color: "text-primary",
            bg: "bg-primary/10 border-primary/20"
          }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `border ${s.bg} p-3 text-center`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-2xl font-display font-bold ${s.color}`, children: s.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-[10px] uppercase tracking-widest ${s.color} opacity-70`, children: s.label })
          ] }, s.label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center space-x-4", children: ["all", "pending", "shipped", "delivered", "cancelled"].map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOrderStatusFilter(key), className: `px-4 py-2 rounded ${orderStatusFilter === key ? "bg-primary text-primary-foreground" : "bg-white/[0.04] text-white/60 hover:bg-white/[0.08]"}`, children: key === "all" ? "All" : key.charAt(0).toUpperCase() + key.slice(1) }, key)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/[0.02] border border-white/[0.08] overflow-hidden", children: [
            orderStatusFilter === "all" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-white/[0.06]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-yellow-500/10 px-5 py-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-yellow-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-yellow-400", children: "Pending Orders" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto bg-yellow-500/20 text-yellow-400 text-[9px] font-bold px-2 py-0.5 rounded-full", children: stats.pendingOrders })
                ] }),
                ordersList.filter((o) => o.status === "pending").length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 text-center text-sm text-white/30", children: "No pending orders" }) : ordersList.filter((o) => o.status === "pending").map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(OrderCard, { order: o, showActions: "pending" }, o._id))
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-white/[0.06]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-500/10 px-5 py-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-4 h-4 text-blue-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-blue-400", children: "Shipped Orders" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto bg-blue-500/20 text-blue-400 text-[9px] font-bold px-2 py-0.5 rounded-full", children: stats.shippedOrders })
                ] }),
                ordersList.filter((o) => o.status === "shipped").length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 text-center text-sm text-white/30", children: "No shipped orders" }) : ordersList.filter((o) => o.status === "shipped").map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(OrderCard, { order: o, showActions: "shipped" }, o._id))
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-white/[0.06]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-500/10 px-5 py-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-green-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-green-400", children: "Delivered Orders" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto bg-green-500/20 text-green-400 text-[9px] font-bold px-2 py-0.5 rounded-full", children: stats.deliveredOrders })
                ] }),
                ordersList.filter((o) => o.status === "delivered").length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 text-center text-sm text-white/30", children: "No delivered orders" }) : ordersList.filter((o) => o.status === "delivered").map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(OrderCard, { order: o, showActions: "completed" }, o._id))
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/10 px-5 py-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4 text-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-primary", children: "Cancelled Orders" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto bg-primary/20 text-primary text-[9px] font-bold px-2 py-0.5 rounded-full", children: ordersList.filter((o) => o.status === "cancelled").length })
                ] }),
                ordersList.filter((o) => o.status === "cancelled").length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 text-center text-sm text-white/30", children: "No cancelled orders" }) : ordersList.filter((o) => o.status === "cancelled").map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(OrderCard, { order: o, showActions: "cancelled" }, o._id))
              ] })
            ] }),
            orderStatusFilter !== "all" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `px-5 py-3 flex items-center gap-2 ${orderStatusFilter === "pending" ? "bg-yellow-500/10" : orderStatusFilter === "shipped" ? "bg-blue-500/10" : orderStatusFilter === "delivered" ? "bg-green-500/10" : "bg-primary/10"}`, children: [
                orderStatusFilter === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-yellow-400" }),
                orderStatusFilter === "shipped" && /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-4 h-4 text-blue-400" }),
                orderStatusFilter === "delivered" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-green-400" }),
                orderStatusFilter === "cancelled" && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs font-bold uppercase tracking-widest ${orderStatusFilter === "pending" ? "text-yellow-400" : orderStatusFilter === "shipped" ? "text-blue-400" : orderStatusFilter === "delivered" ? "text-green-400" : "text-primary"}`, children: [
                  orderStatusFilter.charAt(0).toUpperCase() + orderStatusFilter.slice(1),
                  " Orders"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `ml-auto text-[9px] font-bold px-2 py-0.5 rounded-full ${orderStatusFilter === "pending" ? "bg-yellow-500/20 text-yellow-400" : orderStatusFilter === "shipped" ? "bg-blue-500/20 text-blue-400" : orderStatusFilter === "delivered" ? "bg-green-500/20 text-green-400" : "bg-primary/20 text-primary"}`, children: ordersList.filter((o) => o.status === orderStatusFilter).length })
              ] }),
              ordersList.filter((o) => o.status === orderStatusFilter).length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-10 text-center text-sm text-white/30", children: [
                "No ",
                orderStatusFilter,
                " orders"
              ] }) : ordersList.filter((o) => o.status === orderStatusFilter).map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(OrderCard, { order: o, showActions: orderStatusFilter === "pending" ? "pending" : orderStatusFilter === "shipped" ? "shipped" : orderStatusFilter === "delivered" ? "completed" : "cancelled" }, o._id))
            ] })
          ] })
        ] }) }, "orders"),
        activeTab === "reviews" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: [{
            label: "Total Reviews",
            value: stats.totalReviews,
            icon: MessageSquare
          }, {
            label: "Avg Rating",
            value: `${stats.avgReviewRating}★`,
            icon: Star
          }, {
            label: "Products Reviewed",
            value: new Set(reviewsList.map((r) => r.productId)).size,
            icon: Package
          }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/[0.03] border border-white/[0.08] p-4 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-white/40", children: s.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-display font-bold text-white mt-0.5", children: s.value })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-5 h-5 text-primary/60" })
          ] }, s.label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full sm:w-80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Search reviews...", value: reviewSearch, onChange: (e) => setReviewSearch(e.target.value), className: "w-full bg-white/[0.04] border border-white/[0.08] pl-9 pr-4 py-2 text-sm text-white placeholder:text-white/30 outline-none focus:border-primary/50 transition" })
          ] }),
          reviewsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-8 h-8 text-primary animate-spin mx-auto mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-white/40", children: "Loading reviews..." })
          ] }) : (() => {
            const filtered = reviewsList.filter((r) => {
              const q = reviewSearch.toLowerCase();
              return !q || (r.productName || "").toLowerCase().includes(q) || (r.userName || "").toLowerCase().includes(q) || (r.comment || "").toLowerCase().includes(q);
            });
            return filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-white/[0.08] bg-white/[0.02] p-16 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-10 h-10 text-white/20 mx-auto mb-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold uppercase text-white/60", children: reviewSearch ? "No Matching Reviews" : "No Reviews Yet" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block bg-white/[0.02] border border-white/[0.08] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/[0.06] text-[10px] uppercase tracking-widest font-bold text-white/40 bg-white/[0.02]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4", children: "Reviewer" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4", children: "Product" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 text-center", children: "Rating" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4", children: "Comment" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4", children: "Date" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 text-center", children: "Action" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.map((review) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/[0.04] hover:bg-white/[0.03] transition", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-xs uppercase shrink-0", children: review.userName?.charAt(0) || "U" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-white/80", children: review.userName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/30 truncate max-w-[110px]", children: review.userEmail })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 max-w-[150px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-white/70 line-clamp-2", children: review.productName }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-4 text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-0.5", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `w-3 h-3 ${s <= review.rating ? "text-primary fill-primary" : "text-white/10"}` }, s)) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-white/30 mt-0.5", children: [
                      review.rating,
                      "/5"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 max-w-[200px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/50 line-clamp-2", children: review.comment }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-xs text-white/40 whitespace-nowrap", children: new Date(review.createdAt).toLocaleDateString() }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDeleteReview(review), className: "w-7 h-7 flex items-center justify-center border border-white/10 hover:border-primary hover:text-primary transition mx-auto", title: "Delete", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" }) }) })
                ] }, review._id)) })
              ] }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3 md:hidden", children: filtered.map((review) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/[0.02] border border-white/[0.08] p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-xs uppercase shrink-0", children: review.userName?.charAt(0) || "U" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-sm text-white/80", children: review.userName }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/30", children: new Date(review.createdAt).toLocaleDateString() })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDeleteReview(review), className: "w-7 h-7 flex items-center justify-center border border-white/10 hover:border-primary hover:text-primary transition shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3 h-3" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/30 uppercase tracking-wider mb-1", children: review.productName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5 mb-2", children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `w-3.5 h-3.5 ${s <= review.rating ? "text-primary fill-primary" : "text-white/10"}` }, s)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/50", children: review.comment })
              ] }, review._id)) })
            ] });
          })()
        ] }, "reviews")
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isFormOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, className: "fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto", onClick: (e) => {
      if (e.target === e.currentTarget) setIsFormOpen(false);
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      scale: 0.95,
      y: 20
    }, animate: {
      opacity: 1,
      scale: 1,
      y: 0
    }, exit: {
      opacity: 0,
      scale: 0.95,
      y: 20
    }, transition: {
      type: "spring",
      stiffness: 400,
      damping: 30
    }, className: "w-full max-w-3xl my-4 bg-[oklch(0.11_0.015_20)] border border-white/[0.1)] overflow-hidden", style: {
      borderColor: "oklch(0.22 0.02 20)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 bg-gradient-to-r from-primary via-ember to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-white/[0.06]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-display font-bold uppercase tracking-widest text-white", children: editProduct ? "Edit Product" : "New Product" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsFormOpen(false), className: "w-7 h-7 flex items-center justify-center border border-white/10 hover:border-primary hover:text-primary transition text-white/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleFormSubmit, className: "p-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [{
          label: "Product Name *",
          value: formName,
          set: setFormName,
          placeholder: "e.g. RTX 4060 Ventus"
        }, {
          label: "Brand *",
          value: formBrand,
          set: setFormBrand,
          placeholder: "e.g. MSI, ASUS"
        }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-widest text-white/50 block mb-1.5", children: f.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: f.value, onChange: (e) => f.set(e.target.value), placeholder: f.placeholder, className: "w-full bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-primary/50 transition" })
        ] }, f.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-widest text-white/50 block mb-1.5", children: "Category *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: isCustomCat ? "Custom" : formCat, onChange: (e) => {
              if (e.target.value === "Custom") {
                setIsCustomCat(true);
                setFormCat("Custom");
              } else {
                setIsCustomCat(false);
                setFormCat(e.target.value);
              }
            }, className: "flex-1 bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 text-sm text-white outline-none focus:border-primary/50 cursor-pointer", children: [
              DEFAULT_CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c, children: c }, c)),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Custom", children: "Custom Category..." })
            ] }),
            isCustomCat && /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: customCatName, onChange: (e) => setCustomCatName(e.target.value), placeholder: "Custom name", className: "flex-1 bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-primary/50 transition" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [{
          label: "Price (PKR) *",
          value: formPrice,
          set: setFormPrice
        }, {
          label: "Old Price (PKR)",
          value: formOldPrice,
          set: setFormOldPrice
        }, {
          label: "Rating (1-5)",
          value: formRating,
          set: setFormRating,
          min: 1,
          max: 5,
          step: 0.1
        }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-widest text-white/50 block mb-1.5", children: f.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: f.value, onChange: (e) => f.set(Number(e.target.value)), min: f.min, max: f.max, step: f.step || 1, className: "w-full bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 text-sm text-white outline-none focus:border-primary/50 transition" })
        ] }, f.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-widest text-white/50 block mb-1.5", children: "Card Image *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: formImg, onChange: (e) => setFormImg(e.target.value), placeholder: "https://... or upload below", className: "flex-1 bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-primary/50 transition" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `flex items-center gap-1.5 border border-white/10 hover:border-primary/50 px-3 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer transition text-white/60 hover:text-white ${isUploadingImg ? "opacity-50 pointer-events-none" : ""}`, children: [
              isUploadingImg ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CloudUpload, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: isUploadingImg ? "Uploading..." : "Upload" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", className: "hidden", onChange: handleCardImageUpload, disabled: isUploadingImg })
            ] })
          ] }),
          formImg && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: formImg, alt: "Preview", className: "mt-2 h-20 w-20 object-cover border border-white/10" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-widest text-white/50 block mb-1.5", children: "Detail Images" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `flex items-center gap-2 border border-dashed border-white/10 hover:border-primary/40 px-4 py-3 cursor-pointer transition text-white/40 hover:text-white/60 ${isUploadingImages ? "opacity-50 pointer-events-none" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: isUploadingImages ? "Uploading..." : "Click to upload multiple images" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", multiple: true, accept: "image/*", className: "hidden", onChange: handleDetailImagesUpload, disabled: isUploadingImages })
          ] }),
          formImages.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-2", children: formImages.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: "", className: "w-14 h-14 object-cover border border-white/10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setFormImages((prev) => prev.filter((_, idx) => idx !== i)), className: "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 text-white" }) })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setFormInStock(!formInStock), className: `relative w-11 h-6 rounded-full transition-colors ${formInStock ? "bg-green-500" : "bg-white/10"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${formInStock ? "translate-x-5.5" : "translate-x-0.5"}`, style: {
            transform: formInStock ? "translateX(22px)" : "translateX(2px)"
          } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-white/70 font-medium", children: formInStock ? "In Stock" : "Out of Stock" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-widest text-white/50 block mb-1.5", children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: formDesc, onChange: (e) => setFormDesc(e.target.value), rows: 3, placeholder: "Product description...", className: "w-full bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-primary/50 transition resize-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-widest text-white/50", children: "Specifications" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: addSpecRow, className: "flex items-center gap-1 text-[10px] uppercase tracking-widest text-primary hover:text-ember transition font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }),
              " Add Spec"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-48 overflow-y-auto pr-1", children: formSpecs.map((spec, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: spec.label, onChange: (e) => updateSpecRow(i, "label", e.target.value), placeholder: "Label", className: "flex-1 bg-white/[0.04] border border-white/[0.08] px-2.5 py-2 text-xs text-white placeholder:text-white/20 outline-none focus:border-primary/50 transition" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: spec.value, onChange: (e) => updateSpecRow(i, "value", e.target.value), placeholder: "Value", className: "flex-1 bg-white/[0.04] border border-white/[0.08] px-2.5 py-2 text-xs text-white placeholder:text-white/20 outline-none focus:border-primary/50 transition" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => removeSpecRow(i), className: "w-8 h-8 flex items-center justify-center border border-white/10 hover:border-primary hover:text-primary transition text-white/40 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }) })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-white/[0.06]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setIsFormOpen(false), className: "sm:w-auto border border-white/10 hover:border-primary text-white/60 hover:text-white font-bold text-xs uppercase tracking-widest px-6 py-3 transition text-center", children: "Cancel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: isSubmitting, className: "sm:w-auto bg-primary hover:brightness-110 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-widest px-8 py-3 red-glow transition flex items-center justify-center gap-2", children: [
            isSubmitting && /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3 h-3 animate-spin" }),
            editProduct ? "Update Product" : "Create Product"
          ] })
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  AdminPage as component
};
