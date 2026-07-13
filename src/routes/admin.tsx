import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useMemo } from "react";
import {
  Plus, Edit2, Trash2, RefreshCw, X, ShieldAlert,
  ShoppingBag, Layers, AlertTriangle, Check, CheckCircle2,
  Package, Star, Search, Filter, UploadCloud,
  Truck, MapPin, CreditCard, ChevronDown, XCircle, Phone,
  MessageSquare, LogOut, Menu, Home, BarChart2, Image
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import {
  getProductsFn,
  createProductFn,
  updateProductFn,
  deleteProductFn,
  seedProductsFn,
  uploadImageToCloudinaryFn
} from "@/functions/products";
import { getAllOrdersFn, updateOrderStatusFn } from "@/functions/auth";
import { getAllReviewsFn, deleteReviewFn } from "@/functions/auth";
import Swal from "sweetalert2";

export const Route = createFileRoute("/admin")({
  loader: async () => {
    const products = await getProductsFn();
    return { products };
  },
  head: () => ({
    meta: [
      { title: "Admin Portal — Fast Computers" },
      { name: "description", content: "Fast Computers admin interface for product inventory management." },
    ],
  }),
  component: AdminPage,
});

const DEFAULT_CATEGORIES = [
  "Graphics Cards", "Motherboards", "Processors", "RAM", "SSDs",
  "Mice", "Headsets", "Keyboards", "Monitors", "PSUs", "Cases", "Coolers", "Laptops"
];

interface Spec { label: string; value: string; }

/* ─── Sidebar nav items ─── */
const NAV_ITEMS = [
  { id: "products" as const, label: "Products", icon: ShoppingBag },
  { id: "orders"   as const, label: "Orders",   icon: Package },
  { id: "reviews"  as const, label: "Reviews",  icon: MessageSquare },
];

function AdminPage() {
  const loaderData = Route.useLoaderData();
  const { user, logout, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const isAdmin = user && (user.role === "admin" || user.email.toLowerCase().startsWith("admin@"));

  /* ─── Sidebar ─── */
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"products" | "orders" | "reviews">("products");

  /* ─── Products state (live, no page reload) ─── */
  const [products, setProducts] = useState<any[]>(loaderData.products || []);

  /* ─── Orders state ─── */
  const [ordersList, setOrdersList] = useState<any[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [orderStatusFilter, setOrderStatusFilter] = useState<string>('all');

  /* ─── Reviews state ─── */
  const [reviewsList, setReviewsList] = useState<any[]>([]);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [reviewSearch, setReviewSearch] = useState("");

  /* ─── Product filters ─── */
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  /* ─── Product form ─── */
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editProduct, setEditProduct] = useState<any | null>(null);
  const [formName, setFormName] = useState("");
  const [formBrand, setFormBrand] = useState("");
  const [formCat, setFormCat] = useState(DEFAULT_CATEGORIES[0]);
  const [isCustomCat, setIsCustomCat] = useState(false);
  const [customCatName, setCustomCatName] = useState("");
  const [formPrice, setFormPrice] = useState<number>(0);
  const [formOldPrice, setFormOldPrice] = useState<number>(0);
  const [formRating, setFormRating] = useState<number>(5);
  const [formImg, setFormImg] = useState("");
  const [formImages, setFormImages] = useState<string[]>([]);
  const [isUploadingImg, setIsUploadingImg] = useState(false);
  const [isUploadingImages, setIsUploadingImages] = useState(false);
  const [formInStock, setFormInStock] = useState(true);
  const [formDesc, setFormDesc] = useState("");
  const [formSpecs, setFormSpecs] = useState<Spec[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ─── Fetch orders ─── */
  useEffect(() => {
    if (activeTab === "orders" && ordersList.length === 0) {
      setOrdersLoading(true);
      getAllOrdersFn()
        .then(r => setOrdersList(r.orders || []))
        .catch(() => setOrdersList([]))
        .finally(() => setOrdersLoading(false));
    }
  }, [activeTab]);

  /* ─── Fetch reviews ─── */
  useEffect(() => {
    if (activeTab === "reviews" && reviewsList.length === 0) {
      setReviewsLoading(true);
      getAllReviewsFn()
        .then(r => setReviewsList(r.reviews || []))
        .catch(() => setReviewsList([]))
        .finally(() => setReviewsLoading(false));
    }
  }, [activeTab]);

  /* ─── Stats ─── */
  const stats = useMemo(() => {
    const total = products.length;
    const outOfStock = products.filter(p => !p.inStock).length;
    const categoriesCount = new Set(products.map(p => p.cat)).size;
    const avgRating = total ? (products.reduce((s, p) => s + (p.rating || 5), 0) / total).toFixed(1) : "0.0";
    const pendingOrders = ordersList.filter(o => o.status === "pending").length;
    const shippedOrders = ordersList.filter(o => o.status === "shipped").length;
    const deliveredOrders = ordersList.filter(o => o.status === "delivered").length;
    const totalReviews = reviewsList.length;
    const avgReviewRating = totalReviews
      ? (reviewsList.reduce((s, r) => s + r.rating, 0) / totalReviews).toFixed(1) : "0.0";
    return { total, outOfStock, categoriesCount, avgRating, pendingOrders, shippedOrders, deliveredOrders, totalReviews, avgReviewRating };
  }, [products, ordersList, reviewsList]);

  /* ─── Product filter ─── */
  const categoriesList = useMemo(() => ["All", ...Array.from(new Set(products.map(p => p.cat))).sort()], [products]);
  const filteredProducts = useMemo(() => products.filter(p => {
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q);
    const matchCat = selectedCat === "All" || p.cat === selectedCat;
    return matchSearch && matchCat;
  }), [products, searchQuery, selectedCat]);

  /* ─── Open product form ─── */
  const openForm = (product: any | null = null) => {
    if (product) {
      setEditProduct(product);
      setFormName(product.name || "");
      setFormBrand(product.brand || "");
      if (DEFAULT_CATEGORIES.includes(product.cat)) {
        setFormCat(product.cat); setIsCustomCat(false);
      } else {
        setFormCat("Custom"); setIsCustomCat(true); setCustomCatName(product.cat || "");
      }
      setFormPrice(product.price || 0); setFormOldPrice(product.old || 0);
      setFormRating(product.rating || 5); setFormImg(product.img || "");
      setFormImages(product.images || []); setFormInStock(product.inStock !== false);
      setFormDesc(product.description || ""); setFormSpecs(product.specs || []);
    } else {
      setEditProduct(null); setFormName(""); setFormBrand(""); setFormCat(DEFAULT_CATEGORIES[0]);
      setIsCustomCat(false); setCustomCatName(""); setFormPrice(0); setFormOldPrice(0);
      setFormRating(5); setFormImg(""); setFormImages([]); setFormInStock(true); setFormDesc(""); setFormSpecs([]);
    }
    setIsFormOpen(true);
  };

  const addSpecRow = () => setFormSpecs([...formSpecs, { label: "", value: "" }]);
  const updateSpecRow = (i: number, field: "label" | "value", v: string) => {
    const u = [...formSpecs]; u[i][field] = v; setFormSpecs(u);
  };
  const removeSpecRow = (i: number) => setFormSpecs(formSpecs.filter((_, idx) => idx !== i));

  /* ─── Image upload ─── */
  const handleCardImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; if (!file) return;
    if (!file.type.startsWith("image/")) { Swal.fire("Invalid File", "Select an image file.", "error"); return; }
    setIsUploadingImg(true);
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const res = await uploadImageToCloudinaryFn({ data: { base64Data: reader.result as string } });
        setFormImg(res.url);
      } catch (err: any) { Swal.fire("Upload Failed", err.message || "Failed.", "error"); }
      finally { setIsUploadingImg(false); }
    };
    reader.onerror = () => setIsUploadingImg(false);
    reader.readAsDataURL(file);
  };

  const handleDetailImagesUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files; if (!files || files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (!files[i].type.startsWith("image/")) { Swal.fire("Invalid File", `"${files[i].name}" is not an image.`, "error"); return; }
    }
    setIsUploadingImages(true);
    const uploadedUrls: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      await new Promise<void>(resolve => {
        const reader = new FileReader();
        reader.onload = async () => {
          try {
            const res = await uploadImageToCloudinaryFn({ data: { base64Data: reader.result as string } });
            uploadedUrls.push(res.url);
          } catch { Swal.fire("Upload Failed", `Failed to upload "${file.name}".`, "error"); }
          finally { resolve(); }
        };
        reader.onerror = () => resolve();
        reader.readAsDataURL(file);
      });
    }
    if (uploadedUrls.length > 0) setFormImages(prev => [...prev, ...uploadedUrls]);
    setIsUploadingImages(false);
  };

  /* ─── Product CRUD (LIVE — no router.invalidate) ─── */
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formBrand.trim() || !formImg.trim()) {
      Swal.fire("Validation Error", "Name, Brand, and Image are required.", "error"); return;
    }
    const finalCategory = isCustomCat ? customCatName.trim() : formCat;
    if (!finalCategory) { Swal.fire("Validation Error", "Specify a category.", "error"); return; }

    const cleanedSpecs = formSpecs.filter(s => s.label.trim() && s.value.trim());
    const productPayload = {
      name: formName.trim(), brand: formBrand.trim(), cat: finalCategory,
      price: Number(formPrice), old: Number(formOldPrice) || Number(formPrice),
      rating: Number(formRating), img: formImg.trim(),
      images: formImages.map(img => img.trim()).filter(Boolean),
      inStock: formInStock, description: formDesc.trim(), specs: cleanedSpecs
    };

    setIsSubmitting(true);
    try {
      if (editProduct) {
        await updateProductFn({ data: { id: editProduct.id, ...productPayload } });
        // Live update: patch in state
        setProducts(prev => prev.map(p => p.id === editProduct.id ? { ...p, ...productPayload } : p));
        Swal.fire({ title: "Product Updated!", text: `"${formName}" updated.`, icon: "success", background: "#1E1E1E", color: "#FFF", confirmButtonColor: "#EF4444" });
      } else {
        const result = await createProductFn({ data: productPayload });
        // Live update: add to state with returned id
        const newId = result.id || Date.now().toString();
        setProducts(prev => [{ id: newId, _id: newId, ...productPayload }, ...prev]);
        Swal.fire({ title: "Product Created!", text: `"${formName}" added.`, icon: "success", background: "#1E1E1E", color: "#FFF", confirmButtonColor: "#EF4444" });
      }
      setIsFormOpen(false);
    } catch (err: any) {
      Swal.fire("Error Saving Product", err?.message || "Something went wrong.", "error");
    } finally { setIsSubmitting(false); }
  };

  const handleDeleteProduct = async (product: any) => {
    const confirm = await Swal.fire({
      title: "Are you sure?", text: `Delete "${product.name}"? This cannot be undone.`,
      icon: "warning", showCancelButton: true, confirmButtonColor: "#EF4444",
      cancelButtonColor: "#3F3F46", confirmButtonText: "Yes, Delete It", background: "#1E1E1E", color: "#FFF"
    });
    if (confirm.isConfirmed) {
      try {
        await deleteProductFn({ data: { id: product.id } });
        // Live update: remove from state
        setProducts(prev => prev.filter(p => p.id !== product.id));
        Swal.fire({ title: "Deleted!", text: `"${product.name}" removed.`, icon: "success", background: "#1E1E1E", color: "#FFF", confirmButtonColor: "#EF4444" });
      } catch (err: any) { Swal.fire("Error Deleting", err?.message || "Failed.", "error"); }
    }
  };

  const handleResetDatabase = async () => {
    const confirm = await Swal.fire({
      title: "Reset Inventory?", text: "Restores database to 22 default products.",
      icon: "warning", showCancelButton: true, confirmButtonColor: "#EF4444",
      cancelButtonColor: "#3F3F46", confirmButtonText: "Yes, Reset", background: "#1E1E1E", color: "#FFF"
    });
    if (confirm.isConfirmed) {
      try {
        Swal.fire({ title: "Resetting...", allowOutsideClick: false, didOpen: () => Swal.showLoading() });
        await seedProductsFn();
        // Reload products from DB after seed
        const freshProducts = await getProductsFn();
        setProducts(freshProducts);
        Swal.fire({ title: "Done!", text: "Inventory restored.", icon: "success", background: "#1E1E1E", color: "#FFF", confirmButtonColor: "#EF4444" });
      } catch (err: any) { Swal.fire("Error", err?.message || "Failed.", "error"); }
    }
  };

  /* ─── Orders LIVE update ─── */
  const handleUpdateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      await updateOrderStatusFn({ data: { orderId, status: newStatus } });
      // Live update: patch status in state
      setOrdersList(prev => prev.map(o => o._id === orderId ? { ...o, status: newStatus } : o));
      Swal.fire({ title: "Status Updated!", text: `Changed to ${newStatus}.`, icon: "success", background: "#1E1E1E", color: "#FFF", confirmButtonColor: "#EF4444" });
    } catch (err: any) { Swal.fire("Error", err?.message || "Failed.", "error"); }
  };

  const handleCancelOrder = async (order: any) => {
    const confirm = await Swal.fire({
      title: "Cancel Order?", text: `Cancel order ${order.orderNumber}?`,
      icon: "warning", showCancelButton: true, confirmButtonColor: "#EF4444",
      cancelButtonColor: "#3F3F46", confirmButtonText: "Yes, Cancel", background: "#1E1E1E", color: "#FFF"
    });
    if (confirm.isConfirmed) {
      try {
        await updateOrderStatusFn({ data: { orderId: order._id, status: "cancelled" } });
        setOrdersList(prev => prev.map(o => o._id === order._id ? { ...o, status: "cancelled" } : o));
        Swal.fire({ title: "Cancelled", text: `Order ${order.orderNumber} cancelled.`, icon: "success", background: "#1E1E1E", color: "#FFF", confirmButtonColor: "#EF4444" });
      } catch (err: any) { Swal.fire("Error", err?.message || "Failed.", "error"); }
    }
  };

  /* ─── Review delete LIVE ─── */
  const handleDeleteReview = async (review: any) => {
    const confirm = await Swal.fire({
      title: "Delete Review?", text: `Remove review by "${review.userName}"?`,
      icon: "warning", showCancelButton: true, confirmButtonColor: "#EF4444",
      cancelButtonColor: "#3F3F46", confirmButtonText: "Yes, Delete", background: "#1E1E1E", color: "#FFF"
    });
    if (confirm.isConfirmed) {
      try {
        await deleteReviewFn({ data: { reviewId: review._id } });
        setReviewsList(prev => prev.filter(r => r._id !== review._id));
        Swal.fire({ title: "Deleted!", text: "Review removed.", icon: "success", background: "#1E1E1E", color: "#FFF", confirmButtonColor: "#EF4444" });
      } catch (err: any) { Swal.fire("Error", err?.message || "Failed.", "error"); }
    }
  };

  /* ─── Order item mini-component ─── */
  const OrderCard = ({ order, showActions }: { order: any; showActions: "pending" | "shipped" | "completed" | "cancelled" }) => (
    <div className="p-4 sm:p-6 hover:bg-white/[0.02] transition-colors border-b border-white/5 last:border-0">
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {[["Order #", order.orderNumber], ["Date", new Date(order.createdAt).toLocaleDateString()], ["Customer", order.fullName], ["Email", order.email]].map(([k, v]) => (
              <div key={k}><div className="text-[10px] text-white/40 uppercase tracking-widest">{k}</div><div className="text-sm font-semibold text-white/90 truncate">{v}</div></div>
            ))}
          </div>
          <div className="space-y-2 mb-3">
            {order.items.map((item: any, idx: number) => (
              <div key={idx} className="flex items-center gap-3 text-sm">
                <div className="w-9 h-9 bg-white/5 border border-white/10 overflow-hidden shrink-0">
                  {item.img ? <img src={item.img} alt="" className="w-full h-full object-cover" /> : <Package className="w-4 h-4 text-white/30 m-auto mt-2.5" />}
                </div>
                <div className="flex-1 min-w-0"><div className="font-medium truncate text-white/80">{item.name}</div><div className="text-xs text-white/40">Qty: {item.quantity}</div></div>
                <div className="font-bold text-primary shrink-0">PKR {item.price.toLocaleString()}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-white/40">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{order.city}</span>
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{order.phone}</span>
            <span className="flex items-center gap-1"><CreditCard className="w-3 h-3" />{order.paymentMethod === "cod" ? "Cash on Delivery" : order.paymentMethod}</span>
          </div>
        </div>
        <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-3 shrink-0">
          <div className="text-right"><div className="text-[10px] text-white/40 uppercase tracking-widest">Total</div><div className="text-xl font-bold text-primary">PKR {order.total.toLocaleString()}</div></div>
          <div className="flex flex-wrap gap-2">
            {showActions === "pending" && (<>
              <button onClick={() => handleUpdateOrderStatus(order._id, "shipped")} className="flex items-center gap-1.5 bg-blue-500/90 hover:bg-blue-500 text-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition"><Truck className="w-3.5 h-3.5" />Ship</button>
              <button onClick={() => handleCancelOrder(order)} className="flex items-center gap-1.5 bg-primary/90 hover:bg-primary text-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition"><XCircle className="w-3.5 h-3.5" />Cancel</button>
            </>)}
            {showActions === "shipped" && (
              <button onClick={() => handleUpdateOrderStatus(order._id, "delivered")} className="flex items-center gap-1.5 bg-green-500/90 hover:bg-green-500 text-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition"><CheckCircle2 className="w-3.5 h-3.5" />Delivered</button>
            )}
            {showActions === "completed" && <span className="text-xs bg-green-500/10 border border-green-500/30 text-green-400 px-3 py-1.5 font-bold uppercase">Completed</span>}
            {showActions === "cancelled" && <span className="text-xs bg-primary/10 border border-primary/30 text-primary px-3 py-1.5 font-bold uppercase">Cancelled</span>}
          </div>
        </div>
      </div>
    </div>
  );

  /* ─── Auth Loading ─── */
  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <RefreshCw className="w-8 h-8 text-primary animate-spin" />
          <div className="text-xs tracking-widest uppercase text-white/40">Authenticating...</div>
        </div>
      </div>
    );
  }

  /* ─── Access Denied ─── */
  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
        <div className="max-w-md w-full border border-border bg-card p-10 text-center red-border-glow">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto animate-bounce mb-4" />
          <h2 className="text-2xl font-display font-bold uppercase tracking-widest mb-3">Access Denied</h2>
          <p className="text-white/50 text-sm leading-relaxed mb-8">
            This page requires Administrator credentials. Log in with an admin email (e.g. <code className="text-primary font-bold">admin@...</code>).
          </p>
          <div className="flex gap-3 justify-center">
            <Link to="/auth" className="bg-primary text-white px-5 py-2.5 font-bold uppercase tracking-widest text-xs hover:brightness-110 transition red-glow">Log In</Link>
            <Link to="/" className="border border-border hover:border-primary px-5 py-2.5 font-bold uppercase tracking-widest text-xs transition">Back to Site</Link>
          </div>
        </div>
      </div>
    );
  }

  /* ══════════════════════════════════════════════════════════
     MAIN ADMIN DASHBOARD LAYOUT
  ══════════════════════════════════════════════════════════ */
  return (
    <div className="min-h-screen bg-background text-foreground flex">

      {/* ── Mobile Overlay ── */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ════════════════ SIDEBAR ════════════════ */}
      <aside className={`
        fixed top-0 left-0 h-full z-50 w-64 flex flex-col
        bg-[oklch(0.10_0.015_20)] border-r border-white/[0.06]
        transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        {/* Logo */}
        <div className="px-5 py-5 border-b border-white/[0.06] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setSidebarOpen(false)}>
            <span className="text-xl font-display font-bold tracking-widest">
              F<span className="text-primary">/</span>AST
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40 border-l border-white/10 pl-2">
              Admin
            </span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white/40 hover:text-white transition">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Welcome */}
        <div className="px-5 py-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm uppercase shrink-0">
              {user.name?.charAt(0) || "A"}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-bold text-white truncate">{user.name}</div>
              <div className="text-[10px] text-white/40 uppercase tracking-wider">Administrator</div>
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30 px-3 mb-3">Management</div>
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => { setActiveTab(id); setSidebarOpen(false); }}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold uppercase tracking-wider transition-all
                ${activeTab === id
                  ? "bg-primary/15 border-l-2 border-primary text-primary"
                  : "text-white/50 hover:text-white hover:bg-white/[0.04] border-l-2 border-transparent"
                }
              `}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
              {id === "orders" && ordersList.filter(o => o.status === "pending").length > 0 && (
                <span className="ml-auto bg-yellow-500/20 text-yellow-400 text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                  {ordersList.filter(o => o.status === "pending").length}
                </span>
              )}
            </button>
          ))}

          <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30 px-3 mt-5 mb-3">Quick Links</div>
          <Link
            to="/"
            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold uppercase tracking-wider text-white/50 hover:text-white hover:bg-white/[0.04] transition border-l-2 border-transparent"
          >
            <Home className="w-4 h-4 shrink-0" /> View Site
          </Link>
        </nav>

        {/* Stats mini panel */}
        <div className="px-3 py-3 border-t border-white/[0.06] grid grid-cols-3 gap-2">
          {[
            { label: "Products", value: stats.total },
            { label: "Orders", value: ordersList.length || "—" },
            { label: "Reviews", value: stats.totalReviews },
          ].map(s => (
            <div key={s.label} className="text-center bg-white/[0.03] border border-white/[0.06] py-2 px-1">
              <div className="text-base font-display font-bold text-white">{s.value}</div>
              <div className="text-[8px] uppercase tracking-wider text-white/30">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Logout */}
        <div className="px-3 py-3 border-t border-white/[0.06]">
          <button
            onClick={async () => { await logout(); navigate({ to: "/" }); }}
            className="w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white/40 hover:text-primary hover:bg-primary/5 transition border border-transparent hover:border-primary/20"
          >
            <LogOut className="w-3.5 h-3.5" /> Logout
          </button>
        </div>
      </aside>

      {/* ════════════════ MAIN CONTENT ════════════════ */}
      <div className="flex-1 flex flex-col min-w-0 lg:min-h-screen">

        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-[oklch(0.09_0.012_20)]/95 backdrop-blur border-b border-white/[0.06] px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-white/50 hover:text-white transition">
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-white/30">Admin Portal</div>
              <h1 className="text-lg font-display font-bold uppercase tracking-wide text-white leading-none">
                {NAV_ITEMS.find(n => n.id === activeTab)?.label || "Dashboard"}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {activeTab === "products" && (
              <>
                <button
                  onClick={() => openForm(null)}
                  className="flex items-center gap-1.5 bg-primary hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 red-glow transition"
                >
                  <Plus className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Add Product</span>
                </button>
                <button
                  onClick={handleResetDatabase}
                  className="flex items-center gap-1.5 border border-white/10 hover:border-primary/50 text-white/60 hover:text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 transition"
                  title="Reset to seed data"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Reset DB</span>
                </button>
              </>
            )}
            {activeTab === "orders" && (
              <button
                onClick={async () => {
                  setOrdersLoading(true);
                  const r = await getAllOrdersFn().catch(() => ({ orders: [] }));
                  setOrdersList(r.orders || []);
                  setOrdersLoading(false);
                }}
                className="flex items-center gap-1.5 border border-white/10 hover:border-primary/50 text-white/60 hover:text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 transition"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${ordersLoading ? "animate-spin" : ""}`} /> Refresh
              </button>
            )}
            {activeTab === "reviews" && (
              <button
                onClick={async () => {
                  setReviewsLoading(true);
                  const r = await getAllReviewsFn().catch(() => ({ reviews: [] }));
                  setReviewsList(r.reviews || []);
                  setReviewsLoading(false);
                }}
                className="flex items-center gap-1.5 border border-white/10 hover:border-primary/50 text-white/60 hover:text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 transition"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${reviewsLoading ? "animate-spin" : ""}`} /> Refresh
              </button>
            )}
          </div>
        </header>

        {/* Content Scrollable Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">

          {/* ══ STAT CARDS ══ */}
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 mb-6">
            {[
              { label: "Total Products", value: stats.total, sub: "in inventory", icon: ShoppingBag, color: "text-primary" },
              { label: "Out of Stock",   value: stats.outOfStock, sub: "need restock", icon: AlertTriangle, color: stats.outOfStock > 0 ? "text-yellow-400" : "text-white/30" },
              { label: "Categories",     value: stats.categoriesCount, sub: "hardware types", icon: Layers, color: "text-white/70" },
              { label: "Avg Rating",     value: `${stats.avgRating}★`, sub: "product quality", icon: Star, color: "text-primary" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className="bg-white/[0.03] border border-white/[0.08] p-4 hover:border-primary/30 transition group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">{s.label}</div>
                    <div className="text-2xl sm:text-3xl font-display font-bold text-white">{s.value}</div>
                    <div className="text-[10px] text-white/30 mt-1">{s.sub}</div>
                  </div>
                  <div className={`p-2 bg-white/[0.05] border border-white/[0.08] ${s.color} group-hover:border-primary/30 transition`}>
                    <s.icon className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ══════ PRODUCTS TAB ══════ */}
          {activeTab === "products" && (
            <motion.div key="products" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              {/* Filter Bar */}
              <div className="flex flex-col sm:flex-row gap-3 bg-white/[0.03] border border-white/[0.08] p-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
                  <input
                    type="text" placeholder="Search products..."
                    value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/[0.08] pl-9 pr-4 py-2 text-sm text-white placeholder:text-white/30 outline-none focus:border-primary/50 transition"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="w-3.5 h-3.5 text-white/30 hidden sm:block shrink-0" />
                  <select
                    value={selectedCat} onChange={e => setSelectedCat(e.target.value)}
                    className="bg-white/[0.04] border border-white/[0.08] px-3 py-2 text-xs font-bold uppercase tracking-wider text-white/70 outline-none focus:border-primary/50 cursor-pointer w-full sm:w-48"
                  >
                    {categoriesList.map(c => <option key={c} value={c}>{c === "All" ? "All Categories" : c}</option>)}
                  </select>
                </div>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="border border-white/[0.08] bg-white/[0.02] p-16 text-center">
                  <Package className="w-10 h-10 text-white/20 mx-auto mb-3" />
                  <h3 className="text-lg font-bold uppercase text-white/60">No Products Found</h3>
                  <p className="text-sm text-white/30 mt-1">Try adjusting filters or add a new product.</p>
                </div>
              ) : (
                <>
                  {/* Desktop Table */}
                  <div className="hidden md:block bg-white/[0.02] border border-white/[0.08] overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-white/[0.06] text-[10px] uppercase tracking-widest font-bold text-white/40 bg-white/[0.02]">
                            <th className="p-4">Preview</th>
                            <th className="p-4">Product</th>
                            <th className="p-4">Brand</th>
                            <th className="p-4">Category</th>
                            <th className="p-4 text-right">Price</th>
                            <th className="p-4 text-center">Status</th>
                            <th className="p-4 text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredProducts.map(p => (
                            <tr key={p.id} className="border-b border-white/[0.04] hover:bg-white/[0.03] transition">
                              <td className="p-4">
                                <div className="w-12 h-12 bg-white/[0.05] border border-white/[0.08] overflow-hidden">
                                  <img src={p.img} alt="" className="w-full h-full object-cover" />
                                </div>
                              </td>
                              <td className="p-4 max-w-[200px]">
                                <div className="font-semibold text-sm text-white/90 line-clamp-2">{p.name}</div>
                                {p.old > p.price && <span className="text-[9px] bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.5 uppercase font-bold">Sale</span>}
                              </td>
                              <td className="p-4 text-xs font-bold uppercase tracking-wider text-white/50">{p.brand}</td>
                              <td className="p-4 text-xs text-white/60">{p.cat}</td>
                              <td className="p-4 text-right">
                                <div className="font-bold text-primary">PKR {p.price.toLocaleString()}</div>
                                {p.old > p.price && <div className="text-[10px] text-white/30 line-through">PKR {p.old.toLocaleString()}</div>}
                              </td>
                              <td className="p-4 text-center">
                                <span className={`text-[10px] font-bold uppercase px-2.5 py-1 border ${p.inStock ? "bg-green-500/10 border-green-500/20 text-green-400" : "bg-primary/10 border-primary/20 text-primary"}`}>
                                  {p.inStock ? "In Stock" : "Out"}
                                </span>
                              </td>
                              <td className="p-4 text-center">
                                <div className="flex items-center justify-center gap-1.5">
                                  <button onClick={() => openForm(p)} className="w-7 h-7 flex items-center justify-center border border-white/10 hover:border-primary hover:text-primary transition" title="Edit">
                                    <Edit2 className="w-3 h-3" />
                                  </button>
                                  <button onClick={() => handleDeleteProduct(p)} className="w-7 h-7 flex items-center justify-center border border-white/10 hover:border-primary hover:text-primary transition" title="Delete">
                                    <Trash2 className="w-3 h-3" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Mobile Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
                    {filteredProducts.map(p => (
                      <div key={p.id} className="bg-white/[0.02] border border-white/[0.08] p-4 hover:border-primary/30 transition">
                        <div className="flex gap-3 mb-3">
                          <div className="w-16 h-16 bg-white/[0.05] border border-white/[0.08] overflow-hidden shrink-0">
                            <img src={p.img} alt="" className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-sm text-white/90 line-clamp-2">{p.name}</div>
                            <div className="text-[10px] text-white/40 uppercase tracking-wider mt-0.5">{p.brand} · {p.cat}</div>
                            <div className="mt-1 font-bold text-sm text-primary">PKR {p.price.toLocaleString()}</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                          <span className={`text-[9px] font-bold uppercase px-2 py-0.5 border ${p.inStock ? "bg-green-500/10 border-green-500/20 text-green-400" : "bg-primary/10 border-primary/20 text-primary"}`}>
                            {p.inStock ? "In Stock" : "Out of Stock"}
                          </span>
                          <div className="flex gap-2">
                            <button onClick={() => openForm(p)} className="flex items-center gap-1.5 border border-white/10 hover:border-primary hover:text-primary px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider transition"><Edit2 className="w-3 h-3" />Edit</button>
                            <button onClick={() => handleDeleteProduct(p)} className="flex items-center gap-1.5 border border-white/10 hover:border-primary hover:text-primary px-2.5 py-1.5 text-xs font-bold uppercase tracking-wider transition text-primary/80"><Trash2 className="w-3 h-3" />Del</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          )}

          {/* ══════ ORDERS TAB ══════ */}
          {activeTab === "orders" && (
            <motion.div key="orders" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
              {ordersLoading ? (
                <div className="text-center py-20">
                  <RefreshCw className="w-8 h-8 text-primary animate-spin mx-auto mb-3" />
                  <div className="text-sm text-white/40">Loading orders...</div>
                </div>
              ) : (
                <>
                  {/* Order stat chips */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { label: "Pending",   value: stats.pendingOrders,   color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
                      { label: "Shipped",   value: stats.shippedOrders,   color: "text-blue-400",   bg: "bg-blue-500/10 border-blue-500/20" },
                      { label: "Delivered", value: stats.deliveredOrders, color: "text-green-400",  bg: "bg-green-500/10 border-green-500/20" },
                      { label: "Cancelled", value: ordersList.filter(o => o.status === "cancelled").length, color: "text-primary", bg: "bg-primary/10 border-primary/20" },
                    ].map(s => (
                      <div key={s.label} className={`border ${s.bg} p-3 text-center`}>
                        <div className={`text-2xl font-display font-bold ${s.color}`}>{s.value}</div>
                        <div className={`text-[10px] uppercase tracking-widest ${s.color} opacity-70`}>{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Filter buttons */}
                  <div className="flex justify-center space-x-4">
                    {['all', 'pending', 'shipped', 'delivered', 'cancelled'].map((key) => (
                      <button
                        key={key}
                        onClick={() => setOrderStatusFilter(key)}
                        className={`px-4 py-2 rounded ${orderStatusFilter === key ? 'bg-primary text-primary-foreground' : 'bg-white/[0.04] text-white/60 hover:bg-white/[0.08]'}`}
                      >
                        {key === 'all' ? 'All' : key.charAt(0).toUpperCase() + key.slice(1)}
                      </button>
                    ))}
                  </div>

                  {/* Filtered orders */}
                  <div className="bg-white/[0.02] border border-white/[0.08] overflow-hidden">
                    {orderStatusFilter === 'all' && (
                      <>
                        {/* Pending */}
                        <div className="border-b border-white/[0.06]">
                          <div className="bg-yellow-500/10 px-5 py-3 flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-yellow-400" />
                            <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Pending Orders</span>
                            <span className="ml-auto bg-yellow-500/20 text-yellow-400 text-[9px] font-bold px-2 py-0.5 rounded-full">{stats.pendingOrders}</span>
                          </div>
                          {ordersList.filter(o => o.status === "pending").length === 0
                            ? <div className="p-10 text-center text-sm text-white/30">No pending orders</div>
                            : ordersList.filter(o => o.status === "pending").map(o => <OrderCard key={o._id} order={o} showActions="pending" />)
                          }
                        </div>

                        {/* Shipped */}
                        <div className="border-b border-white/[0.06]">
                          <div className="bg-blue-500/10 px-5 py-3 flex items-center gap-2">
                            <Truck className="w-4 h-4 text-blue-400" />
                            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Shipped Orders</span>
                            <span className="ml-auto bg-blue-500/20 text-blue-400 text-[9px] font-bold px-2 py-0.5 rounded-full">{stats.shippedOrders}</span>
                          </div>
                          {ordersList.filter(o => o.status === "shipped").length === 0
                            ? <div className="p-10 text-center text-sm text-white/30">No shipped orders</div>
                            : ordersList.filter(o => o.status === "shipped").map(o => <OrderCard key={o._id} order={o} showActions="shipped" />)
                          }
                        </div>

                        {/* Delivered */}
                        <div className="border-b border-white/[0.06]">
                          <div className="bg-green-500/10 px-5 py-3 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-400" />
                            <span className="text-xs font-bold uppercase tracking-widest text-green-400">Delivered Orders</span>
                            <span className="ml-auto bg-green-500/20 text-green-400 text-[9px] font-bold px-2 py-0.5 rounded-full">{stats.deliveredOrders}</span>
                          </div>
                          {ordersList.filter(o => o.status === "delivered").length === 0
                            ? <div className="p-10 text-center text-sm text-white/30">No delivered orders</div>
                            : ordersList.filter(o => o.status === "delivered").map(o => <OrderCard key={o._id} order={o} showActions="completed" />)
                          }
                        </div>

                        {/* Cancelled */}
                        <div>
                          <div className="bg-primary/10 px-5 py-3 flex items-center gap-2">
                            <XCircle className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">Cancelled Orders</span>
                            <span className="ml-auto bg-primary/20 text-primary text-[9px] font-bold px-2 py-0.5 rounded-full">{ordersList.filter(o => o.status === "cancelled").length}</span>
                          </div>
                          {ordersList.filter(o => o.status === "cancelled").length === 0
                            ? <div className="p-10 text-center text-sm text-white/30">No cancelled orders</div>
                            : ordersList.filter(o => o.status === "cancelled").map(o => <OrderCard key={o._id} order={o} showActions="cancelled" />)
                          }
                        </div>
                      </>
                    )}

                    {orderStatusFilter !== 'all' && (
                      <>
                        <div className={`px-5 py-3 flex items-center gap-2 ${
                          orderStatusFilter === 'pending' ? 'bg-yellow-500/10' :
                          orderStatusFilter === 'shipped' ? 'bg-blue-500/10' :
                          orderStatusFilter === 'delivered' ? 'bg-green-500/10' :
                          'bg-primary/10'
                        }`}>
                          {orderStatusFilter === 'pending' && <AlertTriangle className="w-4 h-4 text-yellow-400" />}
                          {orderStatusFilter === 'shipped' && <Truck className="w-4 h-4 text-blue-400" />}
                          {orderStatusFilter === 'delivered' && <CheckCircle2 className="w-4 h-4 text-green-400" />}
                          {orderStatusFilter === 'cancelled' && <XCircle className="w-4 h-4 text-primary" />}
                          <span className={`text-xs font-bold uppercase tracking-widest ${
                            orderStatusFilter === 'pending' ? 'text-yellow-400' :
                            orderStatusFilter === 'shipped' ? 'text-blue-400' :
                            orderStatusFilter === 'delivered' ? 'text-green-400' :
                            'text-primary'
                          }`}>
                            {orderStatusFilter.charAt(0).toUpperCase() + orderStatusFilter.slice(1)} Orders
                          </span>
                          <span className={`ml-auto text-[9px] font-bold px-2 py-0.5 rounded-full ${
                            orderStatusFilter === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                            orderStatusFilter === 'shipped' ? 'bg-blue-500/20 text-blue-400' :
                            orderStatusFilter === 'delivered' ? 'bg-green-500/20 text-green-400' :
                            'bg-primary/20 text-primary'
                          }`}>
                            {ordersList.filter(o => o.status === orderStatusFilter).length}
                          </span>
                        </div>
                        {ordersList.filter(o => o.status === orderStatusFilter).length === 0
                          ? <div className="p-10 text-center text-sm text-white/30">No {orderStatusFilter} orders</div>
                          : ordersList.filter(o => o.status === orderStatusFilter).map(o => (
                            <OrderCard
                              key={o._id}
                              order={o}
                              showActions={
                                orderStatusFilter === 'pending' ? 'pending' :
                                orderStatusFilter === 'shipped' ? 'shipped' :
                                orderStatusFilter === 'delivered' ? 'completed' :
                                'cancelled'
                              }
                            />
                          ))
                        }
                      </>
                    )}
                  </div>
                </>
              )}
            </motion.div>
          )}

          {/* ══════ REVIEWS TAB ══════ */}
          {activeTab === "reviews" && (
            <motion.div key="reviews" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { label: "Total Reviews", value: stats.totalReviews, icon: MessageSquare },
                  { label: "Avg Rating", value: `${stats.avgReviewRating}★`, icon: Star },
                  { label: "Products Reviewed", value: new Set(reviewsList.map(r => r.productId)).size, icon: Package },
                ].map(s => (
                  <div key={s.label} className="bg-white/[0.03] border border-white/[0.08] p-4 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-white/40">{s.label}</div>
                      <div className="text-2xl font-display font-bold text-white mt-0.5">{s.value}</div>
                    </div>
                    <s.icon className="w-5 h-5 text-primary/60" />
                  </div>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
                <input
                  type="text" placeholder="Search reviews..."
                  value={reviewSearch} onChange={e => setReviewSearch(e.target.value)}
                  className="w-full bg-white/[0.04] border border-white/[0.08] pl-9 pr-4 py-2 text-sm text-white placeholder:text-white/30 outline-none focus:border-primary/50 transition"
                />
              </div>

              {reviewsLoading ? (
                <div className="text-center py-16">
                  <RefreshCw className="w-8 h-8 text-primary animate-spin mx-auto mb-3" />
                  <div className="text-sm text-white/40">Loading reviews...</div>
                </div>
              ) : (() => {
                const filtered = reviewsList.filter(r => {
                  const q = reviewSearch.toLowerCase();
                  return !q || (r.productName || "").toLowerCase().includes(q) || (r.userName || "").toLowerCase().includes(q) || (r.comment || "").toLowerCase().includes(q);
                });
                return filtered.length === 0 ? (
                  <div className="border border-white/[0.08] bg-white/[0.02] p-16 text-center">
                    <MessageSquare className="w-10 h-10 text-white/20 mx-auto mb-3" />
                    <h3 className="text-lg font-bold uppercase text-white/60">{reviewSearch ? "No Matching Reviews" : "No Reviews Yet"}</h3>
                  </div>
                ) : (
                  <>
                    {/* Desktop Table */}
                    <div className="hidden md:block bg-white/[0.02] border border-white/[0.08] overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="border-b border-white/[0.06] text-[10px] uppercase tracking-widest font-bold text-white/40 bg-white/[0.02]">
                              <th className="p-4">Reviewer</th><th className="p-4">Product</th>
                              <th className="p-4 text-center">Rating</th><th className="p-4">Comment</th>
                              <th className="p-4">Date</th><th className="p-4 text-center">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filtered.map(review => (
                              <tr key={review._id} className="border-b border-white/[0.04] hover:bg-white/[0.03] transition">
                                <td className="p-4">
                                  <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-xs uppercase shrink-0">
                                      {review.userName?.charAt(0) || "U"}
                                    </div>
                                    <div>
                                      <div className="text-sm font-semibold text-white/80">{review.userName}</div>
                                      <div className="text-[10px] text-white/30 truncate max-w-[110px]">{review.userEmail}</div>
                                    </div>
                                  </div>
                                </td>
                                <td className="p-4 max-w-[150px]"><div className="text-sm text-white/70 line-clamp-2">{review.productName}</div></td>
                                <td className="p-4 text-center">
                                  <div className="flex items-center justify-center gap-0.5">{[1,2,3,4,5].map(s => <Star key={s} className={`w-3 h-3 ${s <= review.rating ? "text-primary fill-primary" : "text-white/10"}`} />)}</div>
                                  <div className="text-[10px] text-white/30 mt-0.5">{review.rating}/5</div>
                                </td>
                                <td className="p-4 max-w-[200px]"><p className="text-sm text-white/50 line-clamp-2">{review.comment}</p></td>
                                <td className="p-4 text-xs text-white/40 whitespace-nowrap">{new Date(review.createdAt).toLocaleDateString()}</td>
                                <td className="p-4 text-center">
                                  <button onClick={() => handleDeleteReview(review)} className="w-7 h-7 flex items-center justify-center border border-white/10 hover:border-primary hover:text-primary transition mx-auto" title="Delete">
                                    <Trash2 className="w-3 h-3" />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Mobile Cards */}
                    <div className="grid grid-cols-1 gap-3 md:hidden">
                      {filtered.map(review => (
                        <div key={review._id} className="bg-white/[0.02] border border-white/[0.08] p-4">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-xs uppercase shrink-0">{review.userName?.charAt(0) || "U"}</div>
                              <div><div className="font-bold text-sm text-white/80">{review.userName}</div><div className="text-[10px] text-white/30">{new Date(review.createdAt).toLocaleDateString()}</div></div>
                            </div>
                            <button onClick={() => handleDeleteReview(review)} className="w-7 h-7 flex items-center justify-center border border-white/10 hover:border-primary hover:text-primary transition shrink-0"><Trash2 className="w-3 h-3" /></button>
                          </div>
                          <div className="text-[10px] text-white/30 uppercase tracking-wider mb-1">{review.productName}</div>
                          <div className="flex items-center gap-0.5 mb-2">{[1,2,3,4,5].map(s => <Star key={s} className={`w-3.5 h-3.5 ${s <= review.rating ? "text-primary fill-primary" : "text-white/10"}`} />)}</div>
                          <p className="text-sm text-white/50">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </>
                );
              })()}
            </motion.div>
          )}

        </main>
      </div>

      {/* ════════════════ PRODUCT FORM MODAL ════════════════ */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
            onClick={e => { if (e.target === e.currentTarget) setIsFormOpen(false); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="w-full max-w-3xl my-4 bg-[oklch(0.11_0.015_20)] border border-white/[0.1)] overflow-hidden"
              style={{ borderColor: "oklch(0.22 0.02 20)" }}
            >
              {/* Modal Header */}
              <div className="h-0.5 bg-gradient-to-r from-primary via-ember to-transparent" />
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
                <h2 className="text-base font-display font-bold uppercase tracking-widest text-white">
                  {editProduct ? "Edit Product" : "New Product"}
                </h2>
                <button onClick={() => setIsFormOpen(false)} className="w-7 h-7 flex items-center justify-center border border-white/10 hover:border-primary hover:text-primary transition text-white/50">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="p-6 space-y-6">
                {/* Row 1: Name + Brand */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Product Name *", value: formName, set: setFormName, placeholder: "e.g. RTX 4060 Ventus" },
                    { label: "Brand *", value: formBrand, set: setFormBrand, placeholder: "e.g. MSI, ASUS" },
                  ].map(f => (
                    <div key={f.label}>
                      <label className="text-[10px] uppercase tracking-widest text-white/50 block mb-1.5">{f.label}</label>
                      <input type="text" value={f.value} onChange={e => f.set(e.target.value)} placeholder={f.placeholder}
                        className="w-full bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-primary/50 transition" />
                    </div>
                  ))}
                </div>

                {/* Category */}
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/50 block mb-1.5">Category *</label>
                  <div className="flex gap-2">
                    <select value={isCustomCat ? "Custom" : formCat} onChange={e => { if (e.target.value === "Custom") { setIsCustomCat(true); setFormCat("Custom"); } else { setIsCustomCat(false); setFormCat(e.target.value); } }}
                      className="flex-1 bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 text-sm text-white outline-none focus:border-primary/50 cursor-pointer"
                    >
                      {DEFAULT_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                      <option value="Custom">Custom Category...</option>
                    </select>
                    {isCustomCat && (
                      <input type="text" value={customCatName} onChange={e => setCustomCatName(e.target.value)} placeholder="Custom name"
                        className="flex-1 bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-primary/50 transition" />
                    )}
                  </div>
                </div>

                {/* Row 2: Price + Old Price + Rating */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "Price (PKR) *", value: formPrice, set: setFormPrice },
                    { label: "Old Price (PKR)", value: formOldPrice, set: setFormOldPrice },
                    { label: "Rating (1-5)", value: formRating, set: setFormRating, min: 1, max: 5, step: 0.1 },
                  ].map(f => (
                    <div key={f.label}>
                      <label className="text-[10px] uppercase tracking-widest text-white/50 block mb-1.5">{f.label}</label>
                      <input type="number" value={f.value} onChange={e => f.set(Number(e.target.value))} min={f.min} max={f.max} step={f.step || 1}
                        className="w-full bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 text-sm text-white outline-none focus:border-primary/50 transition" />
                    </div>
                  ))}
                </div>

                {/* Card Image Upload */}
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/50 block mb-1.5">Card Image *</label>
                  <div className="flex gap-2">
                    <input type="text" value={formImg} onChange={e => setFormImg(e.target.value)} placeholder="https://... or upload below"
                      className="flex-1 bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-primary/50 transition" />
                    <label className={`flex items-center gap-1.5 border border-white/10 hover:border-primary/50 px-3 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer transition text-white/60 hover:text-white ${isUploadingImg ? "opacity-50 pointer-events-none" : ""}`}>
                      {isUploadingImg ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <UploadCloud className="w-3.5 h-3.5" />}
                      <span className="hidden sm:inline">{isUploadingImg ? "Uploading..." : "Upload"}</span>
                      <input type="file" accept="image/*" className="hidden" onChange={handleCardImageUpload} disabled={isUploadingImg} />
                    </label>
                  </div>
                  {formImg && <img src={formImg} alt="Preview" className="mt-2 h-20 w-20 object-cover border border-white/10" />}
                </div>

                {/* Detail Images */}
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/50 block mb-1.5">Detail Images</label>
                  <label className={`flex items-center gap-2 border border-dashed border-white/10 hover:border-primary/40 px-4 py-3 cursor-pointer transition text-white/40 hover:text-white/60 ${isUploadingImages ? "opacity-50 pointer-events-none" : ""}`}>
                    <Image className="w-4 h-4" />
                    <span className="text-xs">{isUploadingImages ? "Uploading..." : "Click to upload multiple images"}</span>
                    <input type="file" multiple accept="image/*" className="hidden" onChange={handleDetailImagesUpload} disabled={isUploadingImages} />
                  </label>
                  {formImages.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {formImages.map((img, i) => (
                        <div key={i} className="relative group">
                          <img src={img} alt="" className="w-14 h-14 object-cover border border-white/10" />
                          <button type="button" onClick={() => setFormImages(prev => prev.filter((_, idx) => idx !== i))}
                            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                            <X className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Stock toggle */}
                <div className="flex items-center gap-3">
                  <button type="button" onClick={() => setFormInStock(!formInStock)}
                    className={`relative w-11 h-6 rounded-full transition-colors ${formInStock ? "bg-green-500" : "bg-white/10"}`}>
                    <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${formInStock ? "translate-x-5.5" : "translate-x-0.5"}`} style={{ transform: formInStock ? "translateX(22px)" : "translateX(2px)" }} />
                  </button>
                  <label className="text-sm text-white/70 font-medium">{formInStock ? "In Stock" : "Out of Stock"}</label>
                </div>

                {/* Description */}
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-white/50 block mb-1.5">Description</label>
                  <textarea value={formDesc} onChange={e => setFormDesc(e.target.value)} rows={3} placeholder="Product description..."
                    className="w-full bg-white/[0.04] border border-white/[0.08] px-3 py-2.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-primary/50 transition resize-none" />
                </div>

                {/* Specifications */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/50">Specifications</label>
                    <button type="button" onClick={addSpecRow} className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-primary hover:text-ember transition font-bold">
                      <Plus className="w-3 h-3" /> Add Spec
                    </button>
                  </div>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {formSpecs.map((spec, i) => (
                      <div key={i} className="flex gap-2">
                        <input type="text" value={spec.label} onChange={e => updateSpecRow(i, "label", e.target.value)} placeholder="Label"
                          className="flex-1 bg-white/[0.04] border border-white/[0.08] px-2.5 py-2 text-xs text-white placeholder:text-white/20 outline-none focus:border-primary/50 transition" />
                        <input type="text" value={spec.value} onChange={e => updateSpecRow(i, "value", e.target.value)} placeholder="Value"
                          className="flex-1 bg-white/[0.04] border border-white/[0.08] px-2.5 py-2 text-xs text-white placeholder:text-white/20 outline-none focus:border-primary/50 transition" />
                        <button type="button" onClick={() => removeSpecRow(i)} className="w-8 h-8 flex items-center justify-center border border-white/10 hover:border-primary hover:text-primary transition text-white/40 shrink-0">
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-white/[0.06]">
                  <button type="button" onClick={() => setIsFormOpen(false)}
                    className="sm:w-auto border border-white/10 hover:border-primary text-white/60 hover:text-white font-bold text-xs uppercase tracking-widest px-6 py-3 transition text-center">
                    Cancel
                  </button>
                  <button type="submit" disabled={isSubmitting}
                    className="sm:w-auto bg-primary hover:brightness-110 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-widest px-8 py-3 red-glow transition flex items-center justify-center gap-2">
                    {isSubmitting && <RefreshCw className="w-3 h-3 animate-spin" />}
                    {editProduct ? "Update Product" : "Create Product"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
