import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, u as useRouter, L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-3oA4klVC.mjs";
import { P as PageHero } from "./PageHero-WTHEmsdY.mjs";
import { b as Route$3, a as useAuth, d as getAllOrdersFn, s as seedProductsFn, e as deleteProductFn, f as updateOrderStatusFn, h as updateProductFn, i as createProductFn, j as uploadImageToCloudinaryFn } from "./router-BCi7K9yp.mjs";
import { S as Swal } from "../_libs/sweetalert2.mjs";
import "../_libs/seroval.mjs";
import { _ as RefreshCw, $ as ShieldAlert, q as Plus, o as ShoppingBag, P as Package, a0 as TriangleAlert, u as Layers, S as Star, b as Search, a1 as Filter, a2 as Pen, T as Trash2, h as MapPin, j as Phone, i as CreditCard, s as Truck, a3 as CircleX, a4 as CircleCheck, X, a5 as Image, a6 as CloudUpload } from "../_libs/lucide-react.mjs";
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
import "./products-data-DwPORZfO.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-C43e3As0.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const DEFAULT_CATEGORIES = ["Graphics Cards", "Motherboards", "Processors", "RAM", "SSDs", "Mice", "Headsets", "Keyboards", "Monitors", "PSUs", "Cases", "Coolers", "Laptops"];
function AdminPage() {
  const loaderData = Route$3.useLoaderData();
  const productsList = loaderData.products || [];
  const [ordersList, setOrdersList] = reactExports.useState([]);
  const [ordersLoading, setOrdersLoading] = reactExports.useState(false);
  const {
    user,
    logout,
    loading: authLoading
  } = useAuth();
  useNavigate();
  const router = useRouter();
  const isAdmin = user && (user.role === "admin" || user.email.toLowerCase().startsWith("admin@"));
  const [activeTab, setActiveTab] = reactExports.useState("products");
  reactExports.useEffect(() => {
    const fetchOrders = async () => {
      if (activeTab === "orders") {
        setOrdersLoading(true);
        try {
          const result = await getAllOrdersFn();
          setOrdersList(result.orders || []);
        } catch (error) {
          console.error("Error fetching orders:", error);
          setOrdersList([]);
        } finally {
          setOrdersLoading(false);
        }
      }
    };
    fetchOrders();
  }, [activeTab]);
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
  const stats = reactExports.useMemo(() => {
    const total = productsList.length;
    const outOfStock = productsList.filter((p) => !p.inStock).length;
    const categoriesCount = new Set(productsList.map((p) => p.cat)).size;
    const avgRating = total ? (productsList.reduce((sum, p) => sum + (p.rating || 5), 0) / total).toFixed(1) : "0.0";
    const pendingOrders = ordersList.filter((o) => o.status === "pending").length;
    const shippedOrders = ordersList.filter((o) => o.status === "shipped").length;
    const deliveredOrders = ordersList.filter((o) => o.status === "delivered").length;
    return {
      total,
      outOfStock,
      categoriesCount,
      avgRating,
      pendingOrders,
      shippedOrders,
      deliveredOrders
    };
  }, [productsList, ordersList]);
  const categoriesList = reactExports.useMemo(() => {
    const list = [...new Set(productsList.map((p) => p.cat))].sort();
    return ["All", ...list];
  }, [productsList]);
  const filteredProducts = reactExports.useMemo(() => {
    return productsList.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase()) || p.cat.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCat === "All" || p.cat === selectedCat;
      return matchesSearch && matchesCategory;
    });
  }, [productsList, searchQuery, selectedCat]);
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
  const addSpecRow = () => {
    setFormSpecs([...formSpecs, {
      label: "",
      value: ""
    }]);
  };
  const updateSpecRow = (index, field, val) => {
    const updated = [...formSpecs];
    updated[index][field] = val;
    setFormSpecs(updated);
  };
  const removeSpecRow = (index) => {
    setFormSpecs(formSpecs.filter((_, i) => i !== index));
  };
  const handleCardImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      Swal.fire("Invalid File", "Please select an image file.", "error");
      return;
    }
    setIsUploadingImg(true);
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const base64Data = reader.result;
        const res = await uploadImageToCloudinaryFn({
          data: {
            base64Data
          }
        });
        setFormImg(res.url);
      } catch (err) {
        console.error(err);
        Swal.fire("Upload Failed", err.message || "Failed to upload image to Cloudinary.", "error");
      } finally {
        setIsUploadingImg(false);
      }
    };
    reader.onerror = () => {
      Swal.fire("Error Reading File", "Could not read file data.", "error");
      setIsUploadingImg(false);
    };
    reader.readAsDataURL(file);
  };
  const handleDetailImagesUpload = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (!files[i].type.startsWith("image/")) {
        Swal.fire("Invalid File", `"${files[i].name}" is not an image file.`, "error");
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
            const base64Data = reader.result;
            const res = await uploadImageToCloudinaryFn({
              data: {
                base64Data
              }
            });
            uploadedUrls.push(res.url);
          } catch (err) {
            console.error(err);
            Swal.fire("Upload Failed", `Failed to upload "${file.name}".`, "error");
          } finally {
            resolve();
          }
        };
        reader.onerror = () => {
          resolve();
        };
        reader.readAsDataURL(file);
      });
    }
    if (uploadedUrls.length > 0) {
      setFormImages((prev) => [...prev, ...uploadedUrls]);
    }
    setIsUploadingImages(false);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formName.trim() || !formBrand.trim() || !formImg.trim()) {
      Swal.fire("Validation Error", "Name, Brand, and Image URL are required fields.", "error");
      return;
    }
    const finalCategory = isCustomCat ? customCatName.trim() : formCat;
    if (!finalCategory) {
      Swal.fire("Validation Error", "Please specify a category name.", "error");
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
        Swal.fire({
          title: "Product Updated!",
          text: `"${formName}" has been successfully updated.`,
          icon: "success",
          background: "#1E1E1E",
          color: "#FFF",
          confirmButtonColor: "#EF4444"
        });
      } else {
        await createProductFn({
          data: productPayload
        });
        Swal.fire({
          title: "Product Created!",
          text: `"${formName}" has been added to the inventory.`,
          icon: "success",
          background: "#1E1E1E",
          color: "#FFF",
          confirmButtonColor: "#EF4444"
        });
      }
      setIsFormOpen(false);
      router.invalidate();
    } catch (err) {
      console.error(err);
      Swal.fire("Error Saving Product", err?.message || "Something went wrong.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleDeleteProduct = async (product) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete "${product.name}"? This action cannot be undone.`,
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
        Swal.fire({
          title: "Deleted!",
          text: `"${product.name}" has been removed from inventory.`,
          icon: "success",
          background: "#1E1E1E",
          color: "#FFF",
          confirmButtonColor: "#EF4444"
        });
        router.invalidate();
      } catch (err) {
        console.error(err);
        Swal.fire("Error Deleting Product", err?.message || "Failed to remove product.", "error");
      }
    }
  };
  const handleResetDatabase = async () => {
    const confirm = await Swal.fire({
      title: "Reset Inventory Database?",
      text: "This will wipe out all changes and restore the database to the 22 default seeded products.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      cancelButtonColor: "#3F3F46",
      confirmButtonText: "Yes, Reset Database",
      background: "#1E1E1E",
      color: "#FFF"
    });
    if (confirm.isConfirmed) {
      try {
        Swal.fire({
          title: "Resetting...",
          text: "Please wait while we reseed the database.",
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          }
        });
        await seedProductsFn();
        Swal.fire({
          title: "Database Reset Complete",
          text: "Inventory restored successfully to defaults.",
          icon: "success",
          background: "#1E1E1E",
          color: "#FFF",
          confirmButtonColor: "#EF4444"
        });
        router.invalidate();
      } catch (err) {
        console.error(err);
        Swal.fire("Error Resetting Database", err?.message || "Failed to reset.", "error");
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
      Swal.fire({
        title: "Status Updated!",
        text: `Order status changed to ${newStatus}.`,
        icon: "success",
        background: "#1E1E1E",
        color: "#FFF",
        confirmButtonColor: "#EF4444"
      });
      router.invalidate();
    } catch (err) {
      console.error(err);
      Swal.fire("Error Updating Status", err?.message || "Failed to update order status.", "error");
    }
  };
  const handleCancelOrder = async (order) => {
    const confirm = await Swal.fire({
      title: "Cancel Order?",
      text: `Are you sure you want to cancel order ${order.orderNumber}? This action cannot be undone.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      cancelButtonColor: "#3F3F46",
      confirmButtonText: "Yes, Cancel Order",
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
        Swal.fire({
          title: "Order Cancelled",
          text: `Order ${order.orderNumber} has been cancelled.`,
          icon: "success",
          background: "#1E1E1E",
          color: "#FFF",
          confirmButtonColor: "#EF4444"
        });
        router.invalidate();
      } catch (err) {
        console.error(err);
        Swal.fire("Error Cancelling Order", err?.message || "Failed to cancel order.", "error");
      }
    }
  };
  if (authLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background text-foreground flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-10 h-10 text-primary animate-spin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm tracking-widest uppercase text-muted-foreground", children: "Authenticating Access..." })
    ] }) });
  }
  if (!user || !isAdmin) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-32 pb-24 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto px-6 border border-border bg-card p-12 red-border-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-16 h-16 text-primary mx-auto animate-bounce" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold uppercase tracking-widest mt-6", children: "Access Denied" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-4 text-sm leading-relaxed", children: [
          "This page requires Administrator credentials. Please log in with an administrative email (e.g. starting with ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-primary font-bold", children: "admin@" }),
          ")."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth", className: "bg-primary text-primary-foreground px-6 py-3 font-bold uppercase tracking-widest text-xs hover:brightness-110 transition red-glow", children: "Log In / Switch Account" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "border border-border hover:border-primary px-6 py-3 font-bold uppercase tracking-widest text-xs transition", children: "Back to Home" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { crumb: "Admin", kicker: "Inventory Portal", title: "Control Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold uppercase tracking-wide", children: [
              "Welcome back, ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: user.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Manage fastcomputers inventory, adjust specs, and configure products." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: activeTab === "products" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => openForm(null), className: "bg-primary hover:brightness-110 text-primary-foreground font-bold text-xs uppercase tracking-widest px-6 py-3.5 flex items-center gap-2 red-glow transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
              " Add New Product"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleResetDatabase, className: "border border-border bg-card/60 hover:border-primary text-foreground font-bold text-xs uppercase tracking-widest px-6 py-3.5 flex items-center gap-2 transition", title: "Reset database to default seed values", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" }),
              " Reset Database"
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("products"), className: `px-6 py-3 font-bold text-xs uppercase tracking-widest transition ${activeTab === "products" ? "bg-primary text-primary-foreground red-glow" : "bg-card/60 border border-border text-foreground hover:border-primary"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4 inline mr-2" }),
            "Products"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab("orders"), className: `px-6 py-3 font-bold text-xs uppercase tracking-widest transition ${activeTab === "orders" ? "bg-primary text-primary-foreground red-glow" : "bg-card/60 border border-border text-foreground hover:border-primary"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4 inline mr-2" }),
            "Orders"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12", children: [{
          label: "Total Products",
          value: stats.total,
          desc: "Seeded & custom products",
          icon: ShoppingBag,
          color: "text-primary"
        }, {
          label: "Out of Stock",
          value: stats.outOfStock,
          desc: "Awaiting restock",
          icon: TriangleAlert,
          color: stats.outOfStock > 0 ? "text-primary" : "text-muted-foreground"
        }, {
          label: "Categories",
          value: stats.categoriesCount,
          desc: "Hardware segments",
          icon: Layers,
          color: "text-foreground"
        }, {
          label: "Avg Rating",
          value: `${stats.avgRating} ★`,
          desc: "Customer satisfaction",
          icon: Star,
          color: "text-primary"
        }].map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 15
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: i * 0.05
        }, className: "border border-border bg-card/50 p-5 backdrop-blur flex items-start justify-between hover:border-primary/50 transition duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground", children: stat.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-display font-bold mt-2 text-foreground", children: stat.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-1", children: stat.desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2.5 bg-background border border-border shrink-0 ${stat.color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { className: "w-4 h-4" }) })
        ] }, stat.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-card/40 p-4 mb-6 flex flex-col md:flex-row justify-between items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full md:w-80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Search by name, brand, cat...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "w-full bg-background border border-border pl-10 pr-4 py-2.5 text-sm outline-none focus:border-primary transition" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 w-full md:w-auto justify-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Filter, { className: "w-4 h-4 text-muted-foreground hidden sm:block" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: selectedCat, onChange: (e) => setSelectedCat(e.target.value), className: "bg-background border border-border px-4 py-2.5 text-xs uppercase font-bold tracking-wider outline-none focus:border-primary cursor-pointer w-full md:w-56", children: categoriesList.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: cat, children: cat === "All" ? "ALL CATEGORIES" : cat.toUpperCase() }, cat)) })
          ] })
        ] }),
        activeTab === "products" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border bg-card overflow-hidden", children: filteredProducts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-16 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold uppercase", children: "No Products Found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Adjust your search parameters or add a new product." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left border-collapse", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-background/50 text-[10px] sm:text-xs uppercase tracking-widest font-bold text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 sm:p-5", children: "Preview" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 sm:p-5", children: "Product Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 sm:p-5", children: "Brand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 sm:p-5", children: "Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 sm:p-5 text-right", children: "Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 sm:p-5 text-center", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 sm:p-5 text-center", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/60", children: filteredProducts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-card/30 transition duration-150", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 sm:p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 bg-background border border-border overflow-hidden shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: "", className: "w-full h-full object-cover" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-4 sm:p-5 max-w-[200px] sm:max-w-xs font-semibold text-xs sm:text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "line-clamp-2", children: p.name }),
              p.old > p.price && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block bg-primary/10 text-primary border border-primary/20 text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 mt-1", children: "Sale" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 sm:p-5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground", children: p.brand }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 sm:p-5 text-xs sm:text-sm text-foreground/80", children: p.cat }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-4 sm:p-5 text-right font-display font-bold text-sm sm:text-base text-primary", children: [
              "PKR ",
              p.price.toLocaleString(),
              p.old > p.price && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] sm:text-xs text-muted-foreground line-through font-normal mt-0.5", children: [
                "PKR ",
                p.old.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 sm:p-5 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border ${p.inStock ? "bg-green-500/10 border-green-500/30 text-green-500" : "bg-primary/10 border-primary/20 text-primary"}`, children: p.inStock ? "In Stock" : "Out of Stock" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 sm:p-5 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => openForm(p), className: "w-8 h-8 flex items-center justify-center border border-border bg-background hover:border-primary hover:text-primary transition", title: "Edit product", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3.5 h-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDeleteProduct(p), className: "w-8 h-8 flex items-center justify-center border border-border bg-background hover:border-primary hover:text-primary transition", title: "Delete product", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-3.5 h-3.5" }) })
            ] }) })
          ] }, p.id)) })
        ] }) }) }),
        activeTab === "orders" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: ordersLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-10 h-10 text-primary animate-spin mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Loading orders..." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-card overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-yellow-500/10 border-b border-border px-6 py-4 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5 text-yellow-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold uppercase tracking-wider text-yellow-500", children: "Pending Orders" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-yellow-500/20 text-yellow-500 text-xs font-bold px-2 py-1 rounded", children: ordersList.filter((o) => o.status === "pending").length })
            ] }) }),
            ordersList.filter((o) => o.status === "pending").length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-12 text-center text-muted-foreground", children: "No pending orders" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border/60", children: ordersList.filter((o) => o.status === "pending").map((order) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 hover:bg-card/30 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-start justify-between gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Order Number" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: order.orderNumber })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Date" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: new Date(order.createdAt).toLocaleDateString() })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Customer" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: order.fullName })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Email" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground text-sm", children: order.email })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mb-4", children: order.items.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-background border border-border overflow-hidden shrink-0", children: item.img ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: "", className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-5 h-5 text-muted-foreground m-auto" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: item.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                      "Qty: ",
                      item.quantity
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-primary", children: [
                    "PKR ",
                    item.price.toLocaleString()
                  ] })
                ] }, idx)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                      order.city,
                      ", ",
                      order.address
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: order.phone })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-4 h-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: order.paymentMethod === "cod" ? "Cash on Delivery" : order.paymentMethod })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Total" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-primary", children: [
                    "PKR ",
                    order.total.toLocaleString()
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleUpdateOrderStatus(order._id, "shipped"), className: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider transition flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-4 h-4" }),
                    " Mark Shipped"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleCancelOrder(order), className: "bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider transition flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4" }),
                    " Cancel"
                  ] })
                ] })
              ] })
            ] }) }, order._id)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-card overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-500/10 border-b border-border px-6 py-4 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-5 h-5 text-blue-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold uppercase tracking-wider text-blue-500", children: "Shipped Orders" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-blue-500/20 text-blue-500 text-xs font-bold px-2 py-1 rounded", children: ordersList.filter((o) => o.status === "shipped").length })
            ] }) }),
            ordersList.filter((o) => o.status === "shipped").length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-12 text-center text-muted-foreground", children: "No shipped orders" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border/60", children: ordersList.filter((o) => o.status === "shipped").map((order) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 hover:bg-card/30 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-start justify-between gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Order Number" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: order.orderNumber })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Date" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: new Date(order.createdAt).toLocaleDateString() })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Customer" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: order.fullName })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mb-4", children: order.items.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-background border border-border overflow-hidden shrink-0", children: item.img ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: "", className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-5 h-5 text-muted-foreground m-auto" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: item.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                      "Qty: ",
                      item.quantity
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-primary", children: [
                    "PKR ",
                    item.price.toLocaleString()
                  ] })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Total" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-primary", children: [
                    "PKR ",
                    order.total.toLocaleString()
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => handleUpdateOrderStatus(order._id, "delivered"), className: "bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider transition flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4" }),
                  " Mark Delivered"
                ] })
              ] })
            ] }) }, order._id)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-card overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-500/10 border-b border-border px-6 py-4 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-green-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold uppercase tracking-wider text-green-500", children: "Delivered Orders" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-green-500/20 text-green-500 text-xs font-bold px-2 py-1 rounded", children: ordersList.filter((o) => o.status === "delivered").length })
            ] }) }),
            ordersList.filter((o) => o.status === "delivered").length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-12 text-center text-muted-foreground", children: "No delivered orders" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border/60", children: ordersList.filter((o) => o.status === "delivered").map((order) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 hover:bg-card/30 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-start justify-between gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Order Number" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: order.orderNumber })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Date" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: new Date(order.createdAt).toLocaleDateString() })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Customer" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: order.fullName })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: order.items.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-background border border-border overflow-hidden shrink-0", children: item.img ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: "", className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-5 h-5 text-muted-foreground m-auto" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: item.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                      "Qty: ",
                      item.quantity
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-primary", children: [
                    "PKR ",
                    item.price.toLocaleString()
                  ] })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Total" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-primary", children: [
                    "PKR ",
                    order.total.toLocaleString()
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-500/10 border border-green-500/30 text-green-500 px-3 py-1 text-xs font-bold uppercase tracking-wider", children: "Completed" })
              ] })
            ] }) }, order._id)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-card overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-500/10 border-b border-border px-6 py-4 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-5 h-5 text-red-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold uppercase tracking-wider text-red-500", children: "Cancelled Orders" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-red-500/20 text-red-500 text-xs font-bold px-2 py-1 rounded", children: ordersList.filter((o) => o.status === "cancelled").length })
            ] }) }),
            ordersList.filter((o) => o.status === "cancelled").length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-12 text-center text-muted-foreground", children: "No cancelled orders" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border/60", children: ordersList.filter((o) => o.status === "cancelled").map((order) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 hover:bg-card/30 transition opacity-60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-start justify-between gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Order Number" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: order.orderNumber })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Date" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: new Date(order.createdAt).toLocaleDateString() })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Customer" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: order.fullName })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: order.items.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-background border border-border overflow-hidden shrink-0", children: item.img ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: "", className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-5 h-5 text-muted-foreground m-auto" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: item.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
                      "Qty: ",
                      item.quantity
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-primary", children: [
                    "PKR ",
                    item.price.toLocaleString()
                  ] })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: "Total" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-primary", children: [
                    "PKR ",
                    order.total.toLocaleString()
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-500/10 border border-red-500/30 text-red-500 px-3 py-1 text-xs font-bold uppercase tracking-wider", children: "Cancelled" })
              ] })
            ] }) }, order._id)) })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isFormOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, onClick: () => setIsFormOpen(false), className: "fixed inset-0 bg-background/90 backdrop-blur-sm cursor-pointer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.95,
        y: 15
      }, animate: {
        opacity: 1,
        scale: 1,
        y: 0
      }, exit: {
        opacity: 0,
        scale: 0.95,
        y: 15
      }, className: "relative w-full max-w-4xl bg-card border border-border p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl z-10 red-border-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsFormOpen(false), className: "absolute top-4 right-4 text-muted-foreground hover:text-primary transition p-2", "aria-label": "Close form", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary tracking-[0.2em] text-[10px] sm:text-xs font-semibold uppercase", children: editProduct ? "Inventory Action: Update" : "Inventory Action: Insert" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold uppercase leading-tight mb-8", children: editProduct ? "Edit Product Details" : "Create New Inventory Listing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleFormSubmit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2", children: "Product Name *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: formName, onChange: (e) => setFormName(e.target.value), placeholder: "e.g. Gigabyte NVIDIA GeForce RTX 4070 Super", className: "w-full bg-background border border-border px-4 py-3 text-sm outline-none focus:border-primary transition" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2", children: "Brand *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: formBrand, onChange: (e) => setFormBrand(e.target.value), placeholder: "e.g. Gigabyte, ASUS, Intel", className: "w-full bg-background border border-border px-4 py-3 text-sm outline-none focus:border-primary transition" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2", children: "Category *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: !isCustomCat ? /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: formCat, onChange: (e) => {
                    if (e.target.value === "Custom") {
                      setIsCustomCat(true);
                    } else {
                      setFormCat(e.target.value);
                    }
                  }, className: "w-full bg-background border border-border px-4 py-3 text-sm outline-none focus:border-primary transition cursor-pointer", children: [
                    DEFAULT_CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: cat, children: cat }, cat)),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Custom", children: "+ Custom Category" })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 w-full", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: customCatName, onChange: (e) => setCustomCatName(e.target.value), placeholder: "Custom category name...", className: "flex-1 bg-background border border-border px-3 py-3 text-sm outline-none focus:border-primary transition" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setIsCustomCat(false), className: "p-3 border border-border hover:border-primary text-muted-foreground hover:text-foreground text-xs font-bold transition", title: "Use dropdown selection", children: "Cancel" })
                  ] }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2", children: "Price (PKR) *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", required: true, min: "0", value: formPrice, onChange: (e) => setFormPrice(Number(e.target.value)), className: "w-full bg-background border border-border px-4 py-3 text-sm outline-none focus:border-primary transition" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2", children: "Old Price (PKR)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", min: "0", value: formOldPrice, onChange: (e) => setFormOldPrice(Number(e.target.value)), placeholder: "Same as price if none", className: "w-full bg-background border border-border px-4 py-3 text-sm outline-none focus:border-primary transition" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2", children: "Rating (1-5)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: formRating, onChange: (e) => setFormRating(Number(e.target.value)), className: "w-full bg-background border border-border px-4 py-3 text-sm outline-none focus:border-primary transition cursor-pointer", children: [5, 4, 3, 2, 1].map((num) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: num, children: [
                    num,
                    " Star",
                    num > 1 ? "s" : ""
                  ] }, num)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 border border-border bg-background/20 p-4 rounded red-border-glow", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border pb-2 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-[10px] uppercase tracking-widest text-primary font-bold", children: "Product Media Options" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase tracking-widest text-muted-foreground font-bold", children: "Product Card Image (Main) *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square border border-border bg-background/50 relative flex flex-col items-center justify-center overflow-hidden group rounded", children: formImg ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: formImg, alt: "Card preview", className: "w-full h-full object-cover" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setFormImg(""), className: "px-3 py-1.5 bg-primary text-primary-foreground font-bold text-[9px] uppercase tracking-widest hover:brightness-110 transition cursor-pointer", children: "Remove" }) })
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center text-center p-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-6 h-6 text-muted-foreground mb-1" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase tracking-widest text-muted-foreground", children: "No Image" })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 flex flex-col justify-center space-y-2.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex items-center justify-center gap-2 border border-border bg-background hover:border-primary hover:text-primary font-bold text-[9px] uppercase tracking-widest px-3 py-2.5 cursor-pointer transition w-full rounded", children: [
                        isUploadingImg ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5 animate-spin" }),
                          "Uploading..."
                        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CloudUpload, { className: "w-3.5 h-3.5" }),
                          "Upload Main Image"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", className: "hidden", onChange: handleCardImageUpload, disabled: isUploadingImg })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "url", required: true, value: formImg, onChange: (e) => setFormImg(e.target.value), placeholder: "Or enter direct image URL...", className: "w-full bg-background border border-border px-3 py-2 text-xs outline-none focus:border-primary transition rounded" }) })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-2 border-t border-border/50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase tracking-widest text-muted-foreground font-bold", children: "Product Detail Images" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex items-center justify-center gap-2 border border-border bg-background hover:border-primary hover:text-primary font-bold text-[9px] uppercase tracking-widest px-3 py-2.5 cursor-pointer transition w-full rounded", children: [
                      isUploadingImages ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5 animate-spin" }),
                        "Uploading details..."
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CloudUpload, { className: "w-3.5 h-3.5" }),
                        "Upload Details Images (Multi)"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", multiple: true, className: "hidden", onChange: handleDetailImagesUpload, disabled: isUploadingImages })
                    ] }),
                    formImages.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2 border border-border/50 bg-background/40 p-2 rounded", children: formImages.map((url, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-square relative border border-border/80 bg-background overflow-hidden group rounded", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: url, alt: `Detail ${i}`, className: "w-full h-full object-cover" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setFormImages((prev) => prev.filter((_, idx) => idx !== i)), className: "p-1 bg-primary text-primary-foreground hover:brightness-110 transition rounded", title: "Remove image", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" }) }) })
                    ] }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-dashed border-border py-4 text-center text-[9px] uppercase tracking-widest text-muted-foreground rounded", children: "No details images uploaded yet." })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border border-border p-3 mt-4 bg-background/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", id: "formInStock", checked: formInStock, onChange: (e) => setFormInStock(e.target.checked), className: "w-4 h-4 text-primary bg-background border-border border rounded focus:ring-primary focus:ring-2 accent-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "formInStock", className: "text-xs uppercase tracking-wider font-bold text-foreground cursor-pointer", children: "Product in Stock / Available" })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2", children: "Product Description" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, value: formDesc, onChange: (e) => setFormDesc(e.target.value), placeholder: "Enter description specs, product overview features...", className: "w-full bg-background border border-border px-4 py-3 text-sm outline-none focus:border-primary transition resize-none" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase tracking-widest text-muted-foreground font-bold", children: "Hardware Specifications" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: addSpecRow, className: "text-[9px] uppercase font-bold tracking-widest text-primary flex items-center gap-1 border border-primary/20 hover:border-primary px-2 py-1 bg-primary/5 transition", children: "+ Add Row" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border bg-background/50 p-3 max-h-[220px] overflow-y-auto space-y-2", children: formSpecs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-6 text-xs text-muted-foreground uppercase tracking-wider", children: "No specifications added yet." }) : formSpecs.map((spec, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: spec.label, onChange: (e) => updateSpecRow(index, "label", e.target.value), placeholder: "e.g. Memory Size", className: "flex-1 bg-background border border-border px-2 py-1.5 text-xs outline-none focus:border-primary transition" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: spec.value, onChange: (e) => updateSpecRow(index, "value", e.target.value), placeholder: "e.g. 16GB GDDR6X", className: "flex-1 bg-background border border-border px-2 py-1.5 text-xs outline-none focus:border-primary transition" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => removeSpecRow(index), className: "p-2 border border-border hover:border-primary text-muted-foreground hover:text-primary transition shrink-0", title: "Remove spec", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" }) })
                ] }, index)) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-6 flex justify-end gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setIsFormOpen(false), className: "border border-border bg-background hover:border-primary hover:text-primary font-bold text-xs uppercase tracking-widest px-6 py-3.5 transition", children: "Cancel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: isSubmitting, className: "bg-primary hover:brightness-110 disabled:opacity-50 text-primary-foreground font-bold text-xs uppercase tracking-widest px-8 py-3.5 red-glow transition flex items-center gap-2", children: [
              isSubmitting && /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3 h-3 animate-spin" }),
              editProduct ? "Update Product" : "Create Product"
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  AdminPage as component
};
