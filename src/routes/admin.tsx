import { createFileRoute, Link, useNavigate, useRouter } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useMemo } from "react";
import {
  Plus, Edit2, Trash2, LayoutDashboard, RefreshCw, X, ShieldAlert,
  ShoppingBag, Layers, AlertTriangle, ArrowLeft, Check, CheckCircle2,
  Package, HelpCircle, Eye, Star, Search, Filter, UploadCloud, Image,
  Truck, MapPin, CreditCard, User, Calendar, ChevronDown, XCircle, Phone
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
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
import Swal from "sweetalert2";

export const Route = createFileRoute("/admin")({
  loader: async () => {
    const products = await getProductsFn();
    // Don't fetch orders in loader to avoid blocking on MongoDB errors
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
  "Graphics Cards",
  "Motherboards",
  "Processors",
  "RAM",
  "SSDs",
  "Mice",
  "Headsets",
  "Keyboards",
  "Monitors",
  "PSUs",
  "Cases",
  "Coolers",
  "Laptops"
];

interface Spec {
  label: string;
  value: string;
}

function AdminPage() {
  const loaderData = Route.useLoaderData();
  const productsList = loaderData.products || [];
  const [ordersList, setOrdersList] = useState<any[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const { user, logout, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const router = useRouter();

  // Authentication check logic (check role, email domain prefix or fallback)
  const isAdmin = user && (user.role === 'admin' || user.email.toLowerCase().startsWith('admin@'));

  // Tab state
  const [activeTab, setActiveTab] = useState<'products' | 'orders'>('products');

  // Fetch orders when switching to orders tab
  useEffect(() => {
    const fetchOrders = async () => {
      if (activeTab === 'orders') {
        setOrdersLoading(true);
        try {
          const result = await getAllOrdersFn();
          setOrdersList(result.orders || []);
        } catch (error) {
          console.error('Error fetching orders:', error);
          setOrdersList([]);
        } finally {
          setOrdersLoading(false);
        }
      }
    };

    fetchOrders();
  }, [activeTab]);

  // Inventory/Table states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editProduct, setEditProduct] = useState<any | null>(null);

  // Form states
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

  // Stats computation
  const stats = useMemo(() => {
    const total = productsList.length;
    const outOfStock = productsList.filter((p: any) => !p.inStock).length;
    const categoriesCount = new Set(productsList.map((p: any) => p.cat)).size;
    const avgRating = total 
      ? (productsList.reduce((sum: number, p: any) => sum + (p.rating || 5), 0) / total).toFixed(1)
      : "0.0";
    const pendingOrders = ordersList.filter((o: any) => o.status === 'pending').length;
    const shippedOrders = ordersList.filter((o: any) => o.status === 'shipped').length;
    const deliveredOrders = ordersList.filter((o: any) => o.status === 'delivered').length;
    return { total, outOfStock, categoriesCount, avgRating, pendingOrders, shippedOrders, deliveredOrders };
  }, [productsList, ordersList]);

  // Categories list computed for filters
  const categoriesList = useMemo(() => {
    const list = [...new Set(productsList.map((p: any) => p.cat))].sort();
    return ["All", ...list];
  }, [productsList]);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return productsList.filter((p: any) => {
      const matchesSearch = 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.cat.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCat === "All" || p.cat === selectedCat;

      return matchesSearch && matchesCategory;
    });
  }, [productsList, searchQuery, selectedCat]);

  // Fill form for edit or reset for new
  const openForm = (product: any | null = null) => {
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

  // Add a spec row
  const addSpecRow = () => {
    setFormSpecs([...formSpecs, { label: "", value: "" }]);
  };

  // Update a spec row field
  const updateSpecRow = (index: number, field: "label" | "value", val: string) => {
    const updated = [...formSpecs];
    updated[index][field] = val;
    setFormSpecs(updated);
  };

  // Remove a spec row
  const removeSpecRow = (index: number) => {
    setFormSpecs(formSpecs.filter((_, i) => i !== index));
  };

  // Handle uploading card image
  const handleCardImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      Swal.fire("Invalid File", "Please select an image file.", "error");
      return;
    }

    setIsUploadingImg(true);
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const base64Data = reader.result as string;
        const res = await uploadImageToCloudinaryFn({ data: { base64Data } });
        setFormImg(res.url);
      } catch (err: any) {
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

  // Handle uploading detail images
  const handleDetailImagesUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
      if (!files[i].type.startsWith('image/')) {
        Swal.fire("Invalid File", `"${files[i].name}" is not an image file.`, "error");
        return;
      }
    }

    setIsUploadingImages(true);
    const uploadedUrls: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      await new Promise<void>((resolve) => {
        const reader = new FileReader();
        reader.onload = async () => {
          try {
            const base64Data = reader.result as string;
            const res = await uploadImageToCloudinaryFn({ data: { base64Data } });
            uploadedUrls.push(res.url);
          } catch (err: any) {
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
      setFormImages(prev => [...prev, ...uploadedUrls]);
    }
    setIsUploadingImages(false);
  };

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent) => {
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

    // Clean specifications to ignore blank inputs
    const cleanedSpecs = formSpecs.filter(s => s.label.trim() && s.value.trim());

    const productPayload = {
      name: formName.trim(),
      brand: formBrand.trim(),
      cat: finalCategory,
      price: Number(formPrice),
      old: Number(formOldPrice) || Number(formPrice),
      rating: Number(formRating),
      img: formImg.trim(),
      images: formImages.map(img => img.trim()).filter(Boolean),
      inStock: formInStock,
      description: formDesc.trim(),
      specs: cleanedSpecs
    };

    setIsSubmitting(true);
    try {
      if (editProduct) {
        // Edit flow
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
        // Create flow
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
      router.invalidate(); // Reload routing data
    } catch (err: any) {
      console.error(err);
      Swal.fire("Error Saving Product", err?.message || "Something went wrong.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete product logic
  const handleDeleteProduct = async (product: any) => {
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
        await deleteProductFn({ data: { id: product.id } });
        Swal.fire({
          title: "Deleted!",
          text: `"${product.name}" has been removed from inventory.`,
          icon: "success",
          background: "#1E1E1E",
          color: "#FFF",
          confirmButtonColor: "#EF4444"
        });
        router.invalidate();
      } catch (err: any) {
        console.error(err);
        Swal.fire("Error Deleting Product", err?.message || "Failed to remove product.", "error");
      }
    }
  };

  // Database Seed reset utility
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
      } catch (err: any) {
        console.error(err);
        Swal.fire("Error Resetting Database", err?.message || "Failed to reset.", "error");
      }
    }
  };

  // Update order status
  const handleUpdateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      await updateOrderStatusFn({ data: { orderId, status: newStatus } });
      Swal.fire({
        title: "Status Updated!",
        text: `Order status changed to ${newStatus}.`,
        icon: "success",
        background: "#1E1E1E",
        color: "#FFF",
        confirmButtonColor: "#EF4444"
      });
      router.invalidate();
    } catch (err: any) {
      console.error(err);
      Swal.fire("Error Updating Status", err?.message || "Failed to update order status.", "error");
    }
  };

  // Cancel order
  const handleCancelOrder = async (order: any) => {
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
        await updateOrderStatusFn({ data: { orderId: order._id, status: 'cancelled' } });
        Swal.fire({
          title: "Order Cancelled",
          text: `Order ${order.orderNumber} has been cancelled.`,
          icon: "success",
          background: "#1E1E1E",
          color: "#FFF",
          confirmButtonColor: "#EF4444"
        });
        router.invalidate();
      } catch (err: any) {
        console.error(err);
        Swal.fire("Error Cancelling Order", err?.message || "Failed to cancel order.", "error");
      }
    }
  };

  // Render Loading state
  if (authLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <RefreshCw className="w-10 h-10 text-primary animate-spin" />
          <div className="text-sm tracking-widest uppercase text-muted-foreground">Authenticating Access...</div>
        </div>
      </div>
    );
  }

  // Render Access Denied layout if not Admin
  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main className="pt-32 pb-24 text-center">
          <div className="max-w-md mx-auto px-6 border border-border bg-card p-12 red-border-glow">
            <ShieldAlert className="w-16 h-16 text-primary mx-auto animate-bounce" />
            <h2 className="text-3xl font-bold uppercase tracking-widest mt-6">Access Denied</h2>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              This page requires Administrator credentials. Please log in with an administrative email (e.g. starting with <code className="text-primary font-bold">admin@</code>).
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Link to="/auth" className="bg-primary text-primary-foreground px-6 py-3 font-bold uppercase tracking-widest text-xs hover:brightness-110 transition red-glow">
                Log In / Switch Account
              </Link>
              <Link to="/" className="border border-border hover:border-primary px-6 py-3 font-bold uppercase tracking-widest text-xs transition">
                Back to Home
              </Link>
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      
      <main>
        <PageHero crumb="Admin" kicker="Inventory Portal" title="Control Dashboard" />

        <section className="mx-auto max-w-7xl px-6 py-12">
          {/* Dashboard Header Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-wide">
                Welcome back, <span className="text-primary">{user.name}</span>
              </h2>
              <p className="text-sm text-muted-foreground mt-1">Manage fastcomputers inventory, adjust specs, and configure products.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {activeTab === 'products' && (
                <>
                  <button 
                    onClick={() => openForm(null)}
                    className="bg-primary hover:brightness-110 text-primary-foreground font-bold text-xs uppercase tracking-widest px-6 py-3.5 flex items-center gap-2 red-glow transition"
                  >
                    <Plus className="w-4 h-4" /> Add New Product
                  </button>
                  <button 
                    onClick={handleResetDatabase}
                    className="border border-border bg-card/60 hover:border-primary text-foreground font-bold text-xs uppercase tracking-widest px-6 py-3.5 flex items-center gap-2 transition"
                    title="Reset database to default seed values"
                  >
                    <RefreshCw className="w-4 h-4" /> Reset Database
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-6 py-3 font-bold text-xs uppercase tracking-widest transition ${
                activeTab === 'products'
                  ? 'bg-primary text-primary-foreground red-glow'
                  : 'bg-card/60 border border-border text-foreground hover:border-primary'
              }`}
            >
              <ShoppingBag className="w-4 h-4 inline mr-2" />
              Products
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`px-6 py-3 font-bold text-xs uppercase tracking-widest transition ${
                activeTab === 'orders'
                  ? 'bg-primary text-primary-foreground red-glow'
                  : 'bg-card/60 border border-border text-foreground hover:border-primary'
              }`}
            >
              <Package className="w-4 h-4 inline mr-2" />
              Orders
            </button>
          </div>

          {/* Metrics Panel */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Total Products", value: stats.total, desc: "Seeded & custom products", icon: ShoppingBag, color: "text-primary" },
              { label: "Out of Stock", value: stats.outOfStock, desc: "Awaiting restock", icon: AlertTriangle, color: stats.outOfStock > 0 ? "text-primary" : "text-muted-foreground" },
              { label: "Categories", value: stats.categoriesCount, desc: "Hardware segments", icon: Layers, color: "text-foreground" },
              { label: "Avg Rating", value: `${stats.avgRating} ★`, desc: "Customer satisfaction", icon: Star, color: "text-primary" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border border-border bg-card/50 p-5 backdrop-blur flex items-start justify-between hover:border-primary/50 transition duration-300"
              >
                <div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                  <div className="text-3xl font-display font-bold mt-2 text-foreground">{stat.value}</div>
                  <div className="text-[10px] text-muted-foreground mt-1">{stat.desc}</div>
                </div>
                <div className={`p-2.5 bg-background border border-border shrink-0 ${stat.color}`}>
                  <stat.icon className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Filtering Bar */}
          <div className="border border-border bg-card/40 p-4 mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name, brand, cat..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-background border border-border pl-10 pr-4 py-2.5 text-sm outline-none focus:border-primary transition"
              />
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <Filter className="w-4 h-4 text-muted-foreground hidden sm:block" />
              <select
                value={selectedCat}
                onChange={(e) => setSelectedCat(e.target.value)}
                className="bg-background border border-border px-4 py-2.5 text-xs uppercase font-bold tracking-wider outline-none focus:border-primary cursor-pointer w-full md:w-56"
              >
                {categoriesList.map(cat => (
                  <option key={cat} value={cat}>{cat === "All" ? "ALL CATEGORIES" : cat.toUpperCase()}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Products CRUD Table Grid */}
          {activeTab === 'products' && (
            <div className="border border-border bg-card overflow-hidden">
              {filteredProducts.length === 0 ? (
                <div className="p-16 text-center">
                  <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-bold uppercase">No Products Found</h3>
                  <p className="text-muted-foreground text-sm mt-1">Adjust your search parameters or add a new product.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border bg-background/50 text-[10px] sm:text-xs uppercase tracking-widest font-bold text-muted-foreground">
                        <th className="p-4 sm:p-5">Preview</th>
                        <th className="p-4 sm:p-5">Product Name</th>
                        <th className="p-4 sm:p-5">Brand</th>
                        <th className="p-4 sm:p-5">Category</th>
                        <th className="p-4 sm:p-5 text-right">Price</th>
                        <th className="p-4 sm:p-5 text-center">Status</th>
                        <th className="p-4 sm:p-5 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      {filteredProducts.map((p: any) => (
                        <tr key={p.id} className="hover:bg-card/30 transition duration-150">
                          {/* Image */}
                          <td className="p-4 sm:p-5">
                            <div className="w-14 h-14 bg-background border border-border overflow-hidden shrink-0">
                              <img src={p.img} alt="" className="w-full h-full object-cover" />
                            </div>
                          </td>
                          {/* Name */}
                          <td className="p-4 sm:p-5 max-w-[200px] sm:max-w-xs font-semibold text-xs sm:text-sm">
                            <div className="line-clamp-2">{p.name}</div>
                            {p.old > p.price && (
                              <span className="inline-block bg-primary/10 text-primary border border-primary/20 text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 mt-1">
                                Sale
                              </span>
                            )}
                          </td>
                          {/* Brand */}
                          <td className="p-4 sm:p-5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                            {p.brand}
                          </td>
                          {/* Category */}
                          <td className="p-4 sm:p-5 text-xs sm:text-sm text-foreground/80">
                            {p.cat}
                          </td>
                          {/* Price */}
                          <td className="p-4 sm:p-5 text-right font-display font-bold text-sm sm:text-base text-primary">
                            PKR {p.price.toLocaleString()}
                            {p.old > p.price && (
                              <div className="text-[10px] sm:text-xs text-muted-foreground line-through font-normal mt-0.5">
                                PKR {p.old.toLocaleString()}
                              </div>
                            )}
                          </td>
                          {/* Stock status */}
                          <td className="p-4 sm:p-5 text-center">
                            <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border ${
                              p.inStock 
                                ? "bg-green-500/10 border-green-500/30 text-green-500" 
                                : "bg-primary/10 border-primary/20 text-primary"
                            }`}>
                              {p.inStock ? "In Stock" : "Out of Stock"}
                            </span>
                          </td>
                          {/* CRUD Actions */}
                          <td className="p-4 sm:p-5 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <button
                                onClick={() => openForm(p)}
                                className="w-8 h-8 flex items-center justify-center border border-border bg-background hover:border-primary hover:text-primary transition"
                                title="Edit product"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteProduct(p)}
                                className="w-8 h-8 flex items-center justify-center border border-border bg-background hover:border-primary hover:text-primary transition"
                                title="Delete product"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Orders Management */}
          {activeTab === 'orders' && (
            <div className="space-y-8">
              {ordersLoading ? (
                <div className="text-center py-20">
                  <RefreshCw className="w-10 h-10 text-primary animate-spin mx-auto mb-4" />
                  <div className="text-muted-foreground">Loading orders...</div>
                </div>
              ) : (
                <>
                  {/* Pending Orders */}
                  <div className="border border-border bg-card overflow-hidden">
                    <div className="bg-yellow-500/10 border-b border-border px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-500" />
                        <h3 className="text-lg font-bold uppercase tracking-wider text-yellow-500">Pending Orders</h3>
                        <span className="bg-yellow-500/20 text-yellow-500 text-xs font-bold px-2 py-1 rounded">
                          {ordersList.filter((o: any) => o.status === 'pending').length}
                        </span>
                      </div>
                    </div>
                    {ordersList.filter((o: any) => o.status === 'pending').length === 0 ? (
                      <div className="p-12 text-center text-muted-foreground">No pending orders</div>
                    ) : (
                      <div className="divide-y divide-border/60">
                        {ordersList.filter((o: any) => o.status === 'pending').map((order: any) => (
                          <div key={order._id} className="p-6 hover:bg-card/30 transition">
                            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                              <div className="flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                  <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Order Number</div>
                                    <div className="font-bold text-foreground">{order.orderNumber}</div>
                                  </div>
                                  <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Date</div>
                                    <div className="text-foreground">{new Date(order.createdAt).toLocaleDateString()}</div>
                                  </div>
                                  <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Customer</div>
                                    <div className="text-foreground">{order.fullName}</div>
                                  </div>
                                  <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
                                    <div className="text-foreground text-sm">{order.email}</div>
                                  </div>
                                </div>
                                <div className="space-y-2 mb-4">
                                  {order.items.map((item: any, idx: number) => (
                                    <div key={idx} className="flex items-center gap-3 text-sm">
                                      <div className="w-10 h-10 bg-background border border-border overflow-hidden shrink-0">
                                        {item.img ? <img src={item.img} alt="" className="w-full h-full object-cover" /> : <Package className="w-5 h-5 text-muted-foreground m-auto" />}
                                      </div>
                                      <div className="flex-1">
                                        <div className="font-semibold">{item.name}</div>
                                        <div className="text-xs text-muted-foreground">Qty: {item.quantity}</div>
                                      </div>
                                      <div className="font-bold text-primary">PKR {item.price.toLocaleString()}</div>
                                    </div>
                                  ))}
                                </div>
                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>{order.city}, {order.address}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    <span>{order.phone}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <CreditCard className="w-4 h-4" />
                                    <span>{order.paymentMethod === 'cod' ? 'Cash on Delivery' : order.paymentMethod}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-3">
                                <div className="text-right">
                                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Total</div>
                                  <div className="text-2xl font-bold text-primary">PKR {order.total.toLocaleString()}</div>
                                </div>
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => handleUpdateOrderStatus(order._id, 'shipped')}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider transition flex items-center gap-2"
                                  >
                                    <Truck className="w-4 h-4" /> Mark Shipped
                                  </button>
                                  <button
                                    onClick={() => handleCancelOrder(order)}
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider transition flex items-center gap-2"
                                  >
                                    <XCircle className="w-4 h-4" /> Cancel
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Shipped Orders */}
                  <div className="border border-border bg-card overflow-hidden">
                    <div className="bg-blue-500/10 border-b border-border px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Truck className="w-5 h-5 text-blue-500" />
                        <h3 className="text-lg font-bold uppercase tracking-wider text-blue-500">Shipped Orders</h3>
                        <span className="bg-blue-500/20 text-blue-500 text-xs font-bold px-2 py-1 rounded">
                          {ordersList.filter((o: any) => o.status === 'shipped').length}
                        </span>
                      </div>
                    </div>
                    {ordersList.filter((o: any) => o.status === 'shipped').length === 0 ? (
                      <div className="p-12 text-center text-muted-foreground">No shipped orders</div>
                    ) : (
                      <div className="divide-y divide-border/60">
                        {ordersList.filter((o: any) => o.status === 'shipped').map((order: any) => (
                          <div key={order._id} className="p-6 hover:bg-card/30 transition">
                            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                              <div className="flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                  <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Order Number</div>
                                    <div className="font-bold text-foreground">{order.orderNumber}</div>
                                  </div>
                                  <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Date</div>
                                    <div className="text-foreground">{new Date(order.createdAt).toLocaleDateString()}</div>
                                  </div>
                                  <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Customer</div>
                                    <div className="text-foreground">{order.fullName}</div>
                                  </div>
                                </div>
                                <div className="space-y-2 mb-4">
                                  {order.items.map((item: any, idx: number) => (
                                    <div key={idx} className="flex items-center gap-3 text-sm">
                                      <div className="w-10 h-10 bg-background border border-border overflow-hidden shrink-0">
                                        {item.img ? <img src={item.img} alt="" className="w-full h-full object-cover" /> : <Package className="w-5 h-5 text-muted-foreground m-auto" />}
                                      </div>
                                      <div className="flex-1">
                                        <div className="font-semibold">{item.name}</div>
                                        <div className="text-xs text-muted-foreground">Qty: {item.quantity}</div>
                                      </div>
                                      <div className="font-bold text-primary">PKR {item.price.toLocaleString()}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-3">
                                <div className="text-right">
                                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Total</div>
                                  <div className="text-2xl font-bold text-primary">PKR {order.total.toLocaleString()}</div>
                                </div>
                                <button
                                  onClick={() => handleUpdateOrderStatus(order._id, 'delivered')}
                                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider transition flex items-center gap-2"
                                >
                                  <CheckCircle2 className="w-4 h-4" /> Mark Delivered
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Delivered Orders */}
                  <div className="border border-border bg-card overflow-hidden">
                    <div className="bg-green-500/10 border-b border-border px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <h3 className="text-lg font-bold uppercase tracking-wider text-green-500">Delivered Orders</h3>
                        <span className="bg-green-500/20 text-green-500 text-xs font-bold px-2 py-1 rounded">
                          {ordersList.filter((o: any) => o.status === 'delivered').length}
                        </span>
                      </div>
                    </div>
                    {ordersList.filter((o: any) => o.status === 'delivered').length === 0 ? (
                      <div className="p-12 text-center text-muted-foreground">No delivered orders</div>
                    ) : (
                      <div className="divide-y divide-border/60">
                        {ordersList.filter((o: any) => o.status === 'delivered').map((order: any) => (
                          <div key={order._id} className="p-6 hover:bg-card/30 transition">
                            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                              <div className="flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                  <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Order Number</div>
                                    <div className="font-bold text-foreground">{order.orderNumber}</div>
                                  </div>
                                  <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Date</div>
                                    <div className="text-foreground">{new Date(order.createdAt).toLocaleDateString()}</div>
                                  </div>
                                  <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Customer</div>
                                    <div className="text-foreground">{order.fullName}</div>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  {order.items.map((item: any, idx: number) => (
                                    <div key={idx} className="flex items-center gap-3 text-sm">
                                      <div className="w-10 h-10 bg-background border border-border overflow-hidden shrink-0">
                                        {item.img ? <img src={item.img} alt="" className="w-full h-full object-cover" /> : <Package className="w-5 h-5 text-muted-foreground m-auto" />}
                                      </div>
                                      <div className="flex-1">
                                        <div className="font-semibold">{item.name}</div>
                                        <div className="text-xs text-muted-foreground">Qty: {item.quantity}</div>
                                      </div>
                                      <div className="font-bold text-primary">PKR {item.price.toLocaleString()}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-3">
                                <div className="text-right">
                                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Total</div>
                                  <div className="text-2xl font-bold text-primary">PKR {order.total.toLocaleString()}</div>
                                </div>
                                <div className="bg-green-500/10 border border-green-500/30 text-green-500 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                                  Completed
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Cancelled Orders */}
                  <div className="border border-border bg-card overflow-hidden">
                    <div className="bg-red-500/10 border-b border-border px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <XCircle className="w-5 h-5 text-red-500" />
                        <h3 className="text-lg font-bold uppercase tracking-wider text-red-500">Cancelled Orders</h3>
                        <span className="bg-red-500/20 text-red-500 text-xs font-bold px-2 py-1 rounded">
                          {ordersList.filter((o: any) => o.status === 'cancelled').length}
                        </span>
                      </div>
                    </div>
                    {ordersList.filter((o: any) => o.status === 'cancelled').length === 0 ? (
                      <div className="p-12 text-center text-muted-foreground">No cancelled orders</div>
                    ) : (
                      <div className="divide-y divide-border/60">
                        {ordersList.filter((o: any) => o.status === 'cancelled').map((order: any) => (
                          <div key={order._id} className="p-6 hover:bg-card/30 transition opacity-60">
                            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                              <div className="flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                  <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Order Number</div>
                                    <div className="font-bold text-foreground">{order.orderNumber}</div>
                                  </div>
                                  <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Date</div>
                                    <div className="text-foreground">{new Date(order.createdAt).toLocaleDateString()}</div>
                                  </div>
                                  <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Customer</div>
                                    <div className="text-foreground">{order.fullName}</div>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  {order.items.map((item: any, idx: number) => (
                                    <div key={idx} className="flex items-center gap-3 text-sm">
                                      <div className="w-10 h-10 bg-background border border-border overflow-hidden shrink-0">
                                        {item.img ? <img src={item.img} alt="" className="w-full h-full object-cover" /> : <Package className="w-5 h-5 text-muted-foreground m-auto" />}
                                      </div>
                                      <div className="flex-1">
                                        <div className="font-semibold">{item.name}</div>
                                        <div className="text-xs text-muted-foreground">Qty: {item.quantity}</div>
                                      </div>
                                      <div className="font-bold text-primary">PKR {item.price.toLocaleString()}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-3">
                                <div className="text-right">
                                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Total</div>
                                  <div className="text-2xl font-bold text-primary">PKR {order.total.toLocaleString()}</div>
                                </div>
                                <div className="bg-red-500/10 border border-red-500/30 text-red-500 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                                  Cancelled
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          )}
        </section>
      </main>

      <SiteFooter />

      {/* CRUD Overlay Add/Edit Dialog Form */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto">
            {/* Modal glass backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="fixed inset-0 bg-background/90 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal main box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl bg-card border border-border p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl z-10 red-border-glow"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition p-2"
                aria-label="Close form"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-primary" />
                <span className="text-primary tracking-[0.2em] text-[10px] sm:text-xs font-semibold uppercase">
                  {editProduct ? "Inventory Action: Update" : "Inventory Action: Insert"}
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold uppercase leading-tight mb-8">
                {editProduct ? "Edit Product Details" : "Create New Inventory Listing"}
              </h2>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left segment */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Product Name *</label>
                      <input 
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Gigabyte NVIDIA GeForce RTX 4070 Super"
                        className="w-full bg-background border border-border px-4 py-3 text-sm outline-none focus:border-primary transition"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Brand *</label>
                        <input 
                          type="text"
                          required
                          value={formBrand}
                          onChange={(e) => setFormBrand(e.target.value)}
                          placeholder="e.g. Gigabyte, ASUS, Intel"
                          className="w-full bg-background border border-border px-4 py-3 text-sm outline-none focus:border-primary transition"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Category *</label>
                        <div className="flex gap-2">
                          {!isCustomCat ? (
                            <select
                              value={formCat}
                              onChange={(e) => {
                                if (e.target.value === "Custom") {
                                  setIsCustomCat(true);
                                } else {
                                  setFormCat(e.target.value);
                                }
                              }}
                              className="w-full bg-background border border-border px-4 py-3 text-sm outline-none focus:border-primary transition cursor-pointer"
                            >
                              {DEFAULT_CATEGORIES.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                              ))}
                              <option value="Custom">+ Custom Category</option>
                            </select>
                          ) : (
                            <div className="flex items-center gap-1.5 w-full">
                              <input 
                                type="text"
                                value={customCatName}
                                onChange={(e) => setCustomCatName(e.target.value)}
                                placeholder="Custom category name..."
                                className="flex-1 bg-background border border-border px-3 py-3 text-sm outline-none focus:border-primary transition"
                              />
                              <button
                                type="button"
                                onClick={() => setIsCustomCat(false)}
                                className="p-3 border border-border hover:border-primary text-muted-foreground hover:text-foreground text-xs font-bold transition"
                                title="Use dropdown selection"
                              >
                                Cancel
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Price (PKR) *</label>
                        <input 
                          type="number"
                          required
                          min="0"
                          value={formPrice}
                          onChange={(e) => setFormPrice(Number(e.target.value))}
                          className="w-full bg-background border border-border px-4 py-3 text-sm outline-none focus:border-primary transition"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Old Price (PKR)</label>
                        <input 
                          type="number"
                          min="0"
                          value={formOldPrice}
                          onChange={(e) => setFormOldPrice(Number(e.target.value))}
                          placeholder="Same as price if none"
                          className="w-full bg-background border border-border px-4 py-3 text-sm outline-none focus:border-primary transition"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Rating (1-5)</label>
                        <select
                          value={formRating}
                          onChange={(e) => setFormRating(Number(e.target.value))}
                          className="w-full bg-background border border-border px-4 py-3 text-sm outline-none focus:border-primary transition cursor-pointer"
                        >
                          {[5, 4, 3, 2, 1].map(num => (
                            <option key={num} value={num}>{num} Star{num > 1 ? "s" : ""}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Cloudinary Media Upload Section */}
                    <div className="space-y-4 border border-border bg-background/20 p-4 rounded red-border-glow">
                      <div className="border-b border-border pb-2 mb-2">
                        <h4 className="text-[10px] uppercase tracking-widest text-primary font-bold">Product Media Options</h4>
                      </div>

                      {/* Card Image (Main) */}
                      <div className="space-y-2">
                        <label className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                          Product Card Image (Main) *
                        </label>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {/* Image preview */}
                          <div className="aspect-square border border-border bg-background/50 relative flex flex-col items-center justify-center overflow-hidden group rounded">
                            {formImg ? (
                              <>
                                <img src={formImg} alt="Card preview" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                                  <button
                                    type="button"
                                    onClick={() => setFormImg("")}
                                    className="px-3 py-1.5 bg-primary text-primary-foreground font-bold text-[9px] uppercase tracking-widest hover:brightness-110 transition cursor-pointer"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </>
                            ) : (
                              <div className="flex flex-col items-center justify-center text-center p-3">
                                <Image className="w-6 h-6 text-muted-foreground mb-1" />
                                <span className="text-[9px] uppercase tracking-widest text-muted-foreground">No Image</span>
                              </div>
                            )}
                          </div>

                          {/* Controls */}
                          <div className="sm:col-span-2 flex flex-col justify-center space-y-2.5">
                            <label className="inline-flex items-center justify-center gap-2 border border-border bg-background hover:border-primary hover:text-primary font-bold text-[9px] uppercase tracking-widest px-3 py-2.5 cursor-pointer transition w-full rounded">
                              {isUploadingImg ? (
                                <>
                                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                                  Uploading...
                                </>
                              ) : (
                                <>
                                  <UploadCloud className="w-3.5 h-3.5" />
                                  Upload Main Image
                                </>
                              )}
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleCardImageUpload}
                                disabled={isUploadingImg}
                              />
                            </label>

                            <div className="relative">
                              <input 
                                type="url"
                                required
                                value={formImg}
                                onChange={(e) => setFormImg(e.target.value)}
                                placeholder="Or enter direct image URL..."
                                className="w-full bg-background border border-border px-3 py-2 text-xs outline-none focus:border-primary transition rounded"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Detail Images */}
                      <div className="space-y-2 pt-2 border-t border-border/50">
                        <label className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                          Product Detail Images
                        </label>

                        <div className="space-y-3">
                          <label className="inline-flex items-center justify-center gap-2 border border-border bg-background hover:border-primary hover:text-primary font-bold text-[9px] uppercase tracking-widest px-3 py-2.5 cursor-pointer transition w-full rounded">
                            {isUploadingImages ? (
                              <>
                                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                                Uploading details...
                              </>
                            ) : (
                              <>
                                <UploadCloud className="w-3.5 h-3.5" />
                                Upload Details Images (Multi)
                              </>
                            )}
                            <input
                              type="file"
                              accept="image/*"
                              multiple
                              className="hidden"
                              onChange={handleDetailImagesUpload}
                              disabled={isUploadingImages}
                            />
                          </label>

                          {/* Previews */}
                          {formImages.length > 0 ? (
                            <div className="grid grid-cols-4 gap-2 border border-border/50 bg-background/40 p-2 rounded">
                              {formImages.map((url, i) => (
                                <div key={i} className="aspect-square relative border border-border/80 bg-background overflow-hidden group rounded">
                                  <img src={url} alt={`Detail ${i}`} className="w-full h-full object-cover" />
                                  <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                                    <button
                                      type="button"
                                      onClick={() => setFormImages(prev => prev.filter((_, idx) => idx !== i))}
                                      className="p-1 bg-primary text-primary-foreground hover:brightness-110 transition rounded"
                                      title="Remove image"
                                    >
                                      <X className="w-3 h-3" />
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="border border-dashed border-border py-4 text-center text-[9px] uppercase tracking-widest text-muted-foreground rounded">
                              No details images uploaded yet.
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 border border-border p-3 mt-4 bg-background/40">
                        <input 
                          type="checkbox"
                          id="formInStock"
                          checked={formInStock}
                          onChange={(e) => setFormInStock(e.target.checked)}
                          className="w-4 h-4 text-primary bg-background border-border border rounded focus:ring-primary focus:ring-2 accent-primary"
                        />
                        <label htmlFor="formInStock" className="text-xs uppercase tracking-wider font-bold text-foreground cursor-pointer">
                          Product in Stock / Available
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Right segment (description and specs) */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Product Description</label>
                      <textarea 
                        rows={4}
                        value={formDesc}
                        onChange={(e) => setFormDesc(e.target.value)}
                        placeholder="Enter description specs, product overview features..."
                        className="w-full bg-background border border-border px-4 py-3 text-sm outline-none focus:border-primary transition resize-none"
                      />
                    </div>

                    {/* Specifications */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Hardware Specifications</label>
                        <button 
                          type="button" 
                          onClick={addSpecRow}
                          className="text-[9px] uppercase font-bold tracking-widest text-primary flex items-center gap-1 border border-primary/20 hover:border-primary px-2 py-1 bg-primary/5 transition"
                        >
                          + Add Row
                        </button>
                      </div>

                      <div className="border border-border bg-background/50 p-3 max-h-[220px] overflow-y-auto space-y-2">
                        {formSpecs.length === 0 ? (
                          <div className="text-center py-6 text-xs text-muted-foreground uppercase tracking-wider">
                            No specifications added yet.
                          </div>
                        ) : (
                          formSpecs.map((spec, index) => (
                            <div key={index} className="flex gap-2 items-center">
                              <input 
                                type="text"
                                required
                                value={spec.label}
                                onChange={(e) => updateSpecRow(index, "label", e.target.value)}
                                placeholder="e.g. Memory Size"
                                className="flex-1 bg-background border border-border px-2 py-1.5 text-xs outline-none focus:border-primary transition"
                              />
                              <input 
                                type="text"
                                required
                                value={spec.value}
                                onChange={(e) => updateSpecRow(index, "value", e.target.value)}
                                placeholder="e.g. 16GB GDDR6X"
                                className="flex-1 bg-background border border-border px-2 py-1.5 text-xs outline-none focus:border-primary transition"
                              />
                              <button
                                type="button"
                                onClick={() => removeSpecRow(index)}
                                className="p-2 border border-border hover:border-primary text-muted-foreground hover:text-primary transition shrink-0"
                                title="Remove spec"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-6 flex justify-end gap-3">
                  <button 
                    type="button" 
                    onClick={() => setIsFormOpen(false)}
                    className="border border-border bg-background hover:border-primary hover:text-primary font-bold text-xs uppercase tracking-widest px-6 py-3.5 transition"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-primary hover:brightness-110 disabled:opacity-50 text-primary-foreground font-bold text-xs uppercase tracking-widest px-8 py-3.5 red-glow transition flex items-center gap-2"
                  >
                    {isSubmitting && <RefreshCw className="w-3 h-3 animate-spin" />}
                    {editProduct ? "Update Product" : "Create Product"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
