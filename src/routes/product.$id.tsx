import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Star, Heart, ShoppingCart, ArrowRight, ShieldCheck, Truck,
  RotateCcw, Check, Minus, Plus, ChevronRight, Package,
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";

import gpu from "@/assets/gpu.jpg";
import mobo from "@/assets/mobo.jpg";
import keyboardImg from "@/assets/keyboard.jpg";
import monitor from "@/assets/monitor.jpg";
import headset from "@/assets/headset.jpg";
import mouse from "@/assets/mouse.jpg";
import laptop from "@/assets/laptop.jpg";

import { getProductByIdFn, getRelatedProductsFn } from "@/functions/products";
import { useCartWishlist } from "@/contexts/CartWishlistContext";

export const Route = createFileRoute("/product/$id")({
  loader: async ({ params }) => {
    const product = await getProductByIdFn({ data: { id: params.id } });
    if (!product) return { product: null, related: [] };
    
    const related = await getRelatedProductsFn({
      data: { category: product.cat, excludeId: product.id }
    });
    
    return { product, related };
  },
  head: () => ({
    meta: [
      { title: "Product Details — Fast Computers" },
      { name: "description", content: "View detailed specifications and purchase gaming hardware." },
    ],
  }),
  component: ProductDetailPage,
});

// Mock product data - in production this would come from an API
const getProductById = (id: string) => {
  const products: Record<string, {
    name: string;
    brand: string;
    cat: string;
    price: number;
    old: number;
    rating: number;
    reviews: number;
    img: string;
    images?: string[];
    inStock: boolean;
    description: string;
    specs: { label: string; value: string }[];
  }> = {
    "1": {
      name: "MSI GeForce RTX 4060 Ventus 2X 8GB",
      brand: "MSI",
      cat: "Graphics Cards",
      price: 159999,
      old: 169999,
      rating: 5,
      reviews: 32,
      inStock: true,
      img: gpu,
      description: "The MSI GeForce RTX 4060 Ventus 2X is a powerful graphics card designed for gamers and creators. Powered by the NVIDIA Ada Lovelace architecture, it delivers incredible performance with ray tracing and AI-powered graphics. The dual-fan cooling system ensures optimal thermal performance under heavy loads.",
      specs: [
        { label: "GPU Architecture", value: "NVIDIA Ada Lovelace" },
        { label: "CUDA Cores", value: "3072" },
        { label: "Base Clock", value: "1830 MHz" },
        { label: "Boost Clock", value: "2460 MHz" },
        { label: "Memory", value: "8GB GDDR6" },
        { label: "Memory Interface", value: "128-bit" },
        { label: "DisplayPort", value: "3 x DP 1.4a" },
        { label: "HDMI", value: "1 x HDMI 2.1" },
        { label: "Power Consumption", value: "170W" },
        { label: "Recommended PSU", value: "550W" },
      ],
    },
    "2": {
      name: "ASUS TUF B550-PLUS WIFI II",
      brand: "ASUS",
      cat: "Motherboards",
      price: 49999,
      old: 54999,
      rating: 4,
      reviews: 18,
      inStock: true,
      img: mobo,
      description: "The ASUS TUF B550-PLUS WIFI II is a durable motherboard built for AMD Ryzen processors. Featuring military-grade components, PCIe 4.0 support, and integrated WiFi 6, it's perfect for building a reliable gaming PC that can handle the latest titles.",
      specs: [
        { label: "Socket", value: "AM4" },
        { label: "Chipset", value: "AMD B550" },
        { label: "Form Factor", value: "ATX" },
        { label: "Memory Support", value: "DDR4 up to 128GB" },
        { label: "Memory Slots", value: "4 x DIMM" },
        { label: "Max Memory Speed", value: "5100+ MHz" },
        { label: "PCIe Slots", value: "1 x PCIe 4.0 x16, 2 x PCIe 3.0 x1" },
        { label: "M.2 Slots", value: "2 x M.2 (PCIe 4.0)" },
        { label: "SATA Ports", value: "6 x SATA 6Gb/s" },
        { label: "WiFi", value: "Intel WiFi 6" },
      ],
    },
    "17": {
      name: "Razer BlackWidow V4 Pro Mechanical",
      brand: "Razer",
      cat: "Keyboards",
      price: 28999,
      old: 32999,
      rating: 5,
      reviews: 48,
      inStock: true,
      img: keyboardImg,
      description: "The Razer BlackWidow V4 Pro is a premium mechanical gaming keyboard featuring Razer Chroma RGB lighting, programmable keys, and tactile switches for precise gaming control.",
      specs: [
        { label: "Switch Type", value: "Razer Green Tactile" },
        { label: "Layout", value: "Full Size" },
        { label: "Connectivity", value: "Wired USB" },
        { label: "Key Rollover", value: "N-Key Rollover" },
        { label: "Backlight", value: "Razer Chroma RGB" },
        { label: "Media Keys", value: "Dedicated" },
        { label: "Wrist Rest", value: "Included" },
        { label: "Cable Length", value: "2m Braided" },
        { label: "Dimensions", value: "458 x 166 x 43mm" },
        { label: "Weight", value: "1.32kg" },
      ],
    },
    "18": {
      name: "LG UltraGear 34\" QHD 165Hz Curved",
      brand: "LG",
      cat: "Monitors",
      price: 189000,
      old: 210000,
      rating: 5,
      reviews: 56,
      inStock: true,
      img: monitor,
      description: "The LG UltraGear 34\" curved gaming monitor delivers immersive visuals with QHD resolution, 165Hz refresh rate, and 1ms response time for competitive gaming.",
      specs: [
        { label: "Panel Size", value: "34 inches" },
        { label: "Resolution", value: "3440 x 1440 QHD" },
        { label: "Refresh Rate", value: "165Hz" },
        { label: "Response Time", value: "1ms (GtG)" },
        { label: "Panel Type", value: "Nano IPS" },
        { label: "Curvature", value: "1900R" },
        { label: "Brightness", value: "400 nits" },
        { label: "HDR", value: "VESA DisplayHDR 400" },
        { label: "Connectivity", value: "2 x HDMI, 1 x DP" },
        { label: "VESA Mount", value: "100 x 100mm" },
      ],
    },
    "19": {
      name: "HyperX Cloud III Wireless Headset",
      brand: "HyperX",
      cat: "Headsets",
      price: 22500,
      old: 25000,
      rating: 5,
      reviews: 67,
      inStock: true,
      img: headset,
      description: "The HyperX Cloud III Wireless headset features 53mm drivers, wireless connectivity, and a detachable microphone for crystal clear communication.",
      specs: [
        { label: "Driver Size", value: "53mm" },
        { label: "Frequency Response", value: "10Hz - 21kHz" },
        { label: "Impedance", value: "32 Ohm" },
        { label: "Connectivity", value: "Wireless 2.4GHz + USB-C" },
        { label: "Battery Life", value: "Up to 120 hours" },
        { label: "Microphone", value: "Detachable" },
        { label: "Microphone Type", value: "Noise-cancelling" },
        { label: "Ear Cushions", value: "Memory Foam" },
        { label: "Weight", value: "298g" },
        { label: "Platform", value: "PC, PS5, Switch" },
      ],
    },
    "20": {
      name: "Logitech G Pro X Superlight 2",
      brand: "Logitech",
      cat: "Mice",
      price: 34999,
      old: 38999,
      rating: 5,
      reviews: 89,
      inStock: true,
      img: mouse,
      description: "The Logitech G Pro X Superlight 2 is an ultra-lightweight wireless gaming mouse with HERO 2 sensor and 25,600 DPI for precision tracking.",
      specs: [
        { label: "Sensor", value: "HERO 2" },
        { label: "DPI Range", value: "100 - 25,600" },
        { label: "Tracking Speed", value: "400+ IPS" },
        { label: "Weight", value: "60g" },
        { label: "Buttons", value: "5 Programmable" },
        { label: "Switches", value: "Lightforce" },
        { label: "Battery Life", value: "Up to 95 hours" },
        { label: "Connectivity", value: "LIGHTSPEED Wireless" },
        { label: "Polling Rate", value: "2000 Hz" },
        { label: "Ambidextrous", value: "Yes" },
      ],
    },
    "21": {
      name: "ASUS ROG Strix G16 RTX 4070",
      brand: "ASUS",
      cat: "Laptops",
      price: 499000,
      old: 549000,
      rating: 5,
      reviews: 34,
      inStock: true,
      img: laptop,
      description: "The ASUS ROG Strix G16 is a powerful gaming laptop featuring Intel Core i9 processor, NVIDIA RTX 4070 GPU, and a 16\" QHD display for immersive gaming.",
      specs: [
        { label: "Processor", value: "Intel Core i9-13980HX" },
        { label: "Graphics", value: "NVIDIA RTX 4070 8GB" },
        { label: "Display", value: "16\" QHD 240Hz" },
        { label: "RAM", value: "32GB DDR5" },
        { label: "Storage", value: "1TB NVMe SSD" },
        { label: "Operating System", value: "Windows 11" },
        { label: "Keyboard", value: "RGB Backlit" },
        { label: "Battery", value: "90Wh" },
        { label: "Weight", value: "2.5kg" },
        { label: "Wi-Fi", value: "Wi-Fi 6E" },
      ],
    },
    "22": {
      name: "NVIDIA RTX 4080 Super Founders",
      brand: "NVIDIA",
      cat: "Graphics Cards",
      price: 349999,
      old: 379999,
      rating: 5,
      reviews: 28,
      inStock: true,
      img: gpu,
      description: "The NVIDIA RTX 4080 Super Founders Edition is a flagship graphics card featuring 16GB GDDR6X memory, DLSS 3, and ray tracing for next-gen gaming.",
      specs: [
        { label: "GPU Architecture", value: "NVIDIA Ada Lovelace" },
        { label: "CUDA Cores", value: "10240" },
        { label: "Base Clock", value: "2290 MHz" },
        { label: "Boost Clock", value: "2550 MHz" },
        { label: "Memory", value: "16GB GDDR6X" },
        { label: "Memory Interface", value: "256-bit" },
        { label: "DisplayPort", value: "3 x DP 1.4a" },
        { label: "HDMI", value: "1 x HDMI 2.1" },
        { label: "Power Consumption", value: "320W" },
        { label: "Recommended PSU", value: "750W" },
      ],
    },
  };
  return products[id] || products["1"];
};

function ProductDetailPage() {
  const { product, related } = Route.useLoaderData();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<"specs" | "reviews">("specs");
  const { addToCart, toggleWishlist, isInWishlist } = useCartWishlist();

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main className="pt-32 text-center pb-24">
          <div className="max-w-md mx-auto px-6">
            <h2 className="text-3xl font-bold uppercase text-primary animate-glow-pulse">Product Not Found</h2>
            <p className="text-muted-foreground mt-4">The product you are looking for does not exist or has been removed.</p>
            <div className="mt-8">
              <Link to="/shop" search={{ category: undefined }} className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition">
                Back to Shop
              </Link>
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const discount = Math.round((1 - product.price / product.old) * 100);
  const productImages = [product.img, ...(product.images || [])].filter(Boolean);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <PageHero crumb="Shop" kicker="Product Details" title={product.name} />

        <section className="mx-auto max-w-7xl px-6 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-8">
            <Link to="/shop" className="hover:text-primary transition" search={{ category: undefined }}>Shop</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/shop" className="hover:text-primary transition" search={{ category: product.cat }}>{product.cat}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="relative aspect-square overflow-hidden border border-border bg-card red-border-glow">
                <img
                  src={productImages[selectedImage] || product.img}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold uppercase tracking-widest">Out of Stock</div>
                    </div>
                  </div>
                )}
              </div>
              {productImages.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {productImages.map((imgUrl, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`aspect-square overflow-hidden border transition ${
                        selectedImage === i ? "border-primary" : "border-border hover:border-primary/50"
                      }`}
                    >
                      <img src={imgUrl} alt="" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs uppercase tracking-widest text-primary">{product.brand}</span>
                  <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{product.cat}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold uppercase leading-tight">{product.name}</h1>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center gap-1 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < product.rating ? "fill-primary" : "opacity-30"}`} />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-display font-bold text-primary">PKR {product.price.toLocaleString()}</span>
                <span className="text-xl text-muted-foreground line-through">PKR {product.old.toLocaleString()}</span>
                <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-2 py-1">-{discount}%</span>
              </div>

              <p className="text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: ShieldCheck, text: "1 Year Warranty" },
                  { icon: Truck, text: "Free Shipping" },
                  { icon: RotateCcw, text: "7 Days Return" },
                  { icon: Check, text: "100% Original" },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <f.icon className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{f.text}</span>
                  </div>
                ))}
              </div>

              {/* Quantity & Add to Cart */}
              {product.inStock ? (
                <div className="space-y-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-border">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-12 h-12 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-16 text-center font-bold">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-12 h-12 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button 
                      onClick={() => addToCart(product, quantity)}
                      className="flex-1 inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition cursor-pointer"
                    >
                      <ShoppingCart className="w-5 h-5" /> Add to Cart
                    </button>
                  </div>
                  <button 
                    onClick={() => toggleWishlist(product)}
                    className="w-full inline-flex items-center justify-center gap-2 border border-border py-3 font-bold uppercase tracking-widest text-xs hover:border-primary hover:text-primary transition cursor-pointer"
                  >
                    <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? "fill-primary text-primary" : ""}`} /> 
                    {isInWishlist(product.id) ? "In Wishlist" : "Add to Wishlist"}
                  </button>
                </div>
              ) : (
                <div className="pt-4 border-t border-border">
                  <button
                    disabled
                    className="w-full inline-flex items-center justify-center gap-2 bg-muted text-muted-foreground py-4 font-bold uppercase tracking-widest text-sm cursor-not-allowed"
                  >
                    Out of Stock
                  </button>
                  <button 
                    onClick={() => toggleWishlist(product)}
                    className="mt-3 w-full inline-flex items-center justify-center gap-2 border border-border py-3 font-bold uppercase tracking-widest text-xs hover:border-primary hover:text-primary transition cursor-pointer"
                  >
                    <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? "fill-primary text-primary" : ""}`} /> 
                    {isInWishlist(product.id) ? "In Wishlist" : "Add to Wishlist"}
                  </button>
                </div>
              )}
            </motion.div>
          </div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16"
          >
            <div className="flex border-b border-border">
              {[
                { id: "specs" as const, label: "Specifications" },
                { id: "reviews" as const, label: "Reviews" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-4 text-sm font-bold uppercase tracking-widest transition ${
                    activeTab === tab.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="product-tab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="py-8">
              {activeTab === "specs" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border border-border bg-card"
                >
                  {product.specs.map((spec, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between p-4 ${
                        i !== product.specs.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      <span className="text-sm text-muted-foreground uppercase tracking-wider">{spec.label}</span>
                      <span className="font-bold">{spec.value}</span>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "reviews" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <div className="text-center py-12 border border-border bg-card">
                    <Star className="w-12 h-12 text-primary mx-auto fill-primary" />
                    <div className="mt-4 text-4xl font-display font-bold">{product.rating}.0</div>
                    <div className="mt-2 text-sm text-muted-foreground">Based on {product.reviews} reviews</div>
                  </div>
                  <div className="text-center text-muted-foreground">
                    Reviews coming soon. Be the first to review this product!
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Related Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold uppercase">Related <span className="text-primary">Products</span></h2>
              <Link to="/shop" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-primary hover:gap-3 transition-all" search={{ category: undefined }}>
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((p) => (
                <Link key={p.id} to="/product/$id" params={{ id: p.id }} className="group">
                  <div className="relative aspect-square overflow-hidden border border-border bg-card mb-3">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="font-bold text-sm line-clamp-2">{p.name}</div>
                  <div className="mt-1 text-primary font-bold">PKR {p.price.toLocaleString()}</div>
                </Link>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
