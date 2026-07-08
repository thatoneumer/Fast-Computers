import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight, ShieldCheck, Truck, RotateCcw, BadgeCheck,
  Cpu, MonitorSmartphone, Keyboard, Mouse as MouseIcon, Headphones,
  Star, Zap, Flame, ShoppingCart, Heart, Instagram,
  ChevronRight, Mail, Phone, MapPin,
  Trophy, Wrench, HeadsetIcon, CreditCard, PackageCheck, Sparkles,
  Layers, MemoryStick, HardDrive, MousePointer2, Monitor, Box, Snowflake,
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import Swal from "sweetalert2";
import { useCartWishlist } from "@/contexts/CartWishlistContext";

import hero from "@/assets/hero.jpg";
import gpu from "@/assets/gpu.jpg";
import mobo from "@/assets/mobo.jpg";
import keyboardImg from "@/assets/keyboard.jpg";
import monitor from "@/assets/monitor.jpg";
import headset from "@/assets/headset.jpg";
import mouse from "@/assets/mouse.jpg";
import laptop from "@/assets/laptop.jpg";

import { getProductsFn } from "@/functions/products";

export const Route = createFileRoute("/")({
  loader: async () => {
    return await getProductsFn();
  },
  component: Home,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function SectionKicker({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-10 bg-primary" />
      <span className="text-primary tracking-[0.3em] text-xs font-semibold uppercase">{label}</span>
    </div>
  );
}

/* Nav moved to SiteHeader */

/* ————————————————— HERO ————————————————— */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden pt-20">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Fallback Image */}
        <img
          src={hero}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>

      {/* animated red streaks */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          style={{ top: `${15 + i * 12}%`, left: 0, right: 0, transformOrigin: "left" }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: [0, 1, 0], opacity: [0, 0.7, 0] }}
          transition={{ duration: 4, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32 min-h-[calc(100vh-5rem)] flex items-center">
        <div className="max-w-2xl w-full">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <SectionKicker label="Build Your Dream" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-4 sm:mt-6 text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-bold leading-[0.9] uppercase"
          >
            Game Without
            <br />
            <span className="text-primary animate-glow-pulse inline-block">Compromise</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 sm:mt-8 text-sm sm:text-lg text-muted-foreground max-w-md"
          >
            High performance PCs & accessories engineered for gamers and creators who refuse to settle.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
            className="mt-6 sm:mt-10 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 xs:gap-4"
          >
            <Link to="/shop" search={{ category: undefined }} className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-5 sm:px-8 py-3 sm:py-4 font-bold uppercase tracking-widest text-xs sm:text-sm red-glow hover:brightness-110 transition">
              Shop Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button onClick={() => Swal.fire({ title: "Coming Soon", text: "Custom build feature is coming soon!", icon: "info" })} className="inline-flex items-center justify-center gap-2 border border-border px-5 sm:px-8 py-3 sm:py-4 font-bold uppercase tracking-widest text-xs sm:text-sm hover:border-primary hover:text-primary transition">
              Custom Build
            </button>
          </motion.div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 sm:mt-16 grid grid-cols-3 gap-2 xs:gap-4 sm:gap-8 max-w-lg border-t border-border pt-5 sm:pt-8"
          >
            {[["15K+", "Builds Shipped"], ["4.9★", "Customer Rating"], ["24/7", "Support"]].map(([n, l]) => (
              <div key={l}>
                <div className="text-lg xs:text-2xl sm:text-3xl font-display font-bold text-primary">{n}</div>
                <div className="text-[9px] xs:text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-1 leading-snug">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-muted-foreground uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="w-px h-8 bg-primary" />
      </motion.div>
    </section>
  );
}

/* ————————————————— FEATURE STRIP ————————————————— */
function FeatureStrip() {
  const items = [
    { icon: BadgeCheck, title: "100% Original", desc: "Authentic Products" },
    { icon: ShieldCheck, title: "1 Year Warranty", desc: "Full Coverage" },
    { icon: Truck, title: "Fast & Secure", desc: "Nationwide Delivery" },
    { icon: RotateCcw, title: "Easy Returns", desc: "7 Days Return" },
  ];
  return (
    <section className="border-y border-border bg-card/40 slash-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-10 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2 sm:gap-4 group min-w-0"
          >
            <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center border border-primary/40 text-primary group-hover:red-border-glow transition">
              <it.icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <div className="font-display font-bold uppercase text-[10px] xs:text-xs sm:text-sm tracking-wide truncate">{it.title}</div>
              <div className="text-[9px] xs:text-[10px] sm:text-xs text-muted-foreground truncate">{it.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ————————————————— CATEGORIES ————————————————— */
function Categories() {
  const cats = [
    { name: "Graphics Cards", count: "18", img: gpu, icon: Sparkles },
    { name: "Motherboards", count: "15", img: mobo, icon: Layers },
    { name: "Processors", count: "24", img: gpu, icon: Cpu },
    { name: "RAM", count: "21", img: gpu, icon: MemoryStick },
    { name: "SSDs", count: "16", img: gpu, icon: HardDrive },
    { name: "Mice", count: "12", img: mouse, icon: MousePointer2 },
    { name: "Headsets", count: "8", img: headset, icon: Headphones },
    { name: "Keyboards", count: "10", img: keyboardImg, icon: Keyboard },
    { name: "Monitors", count: "6", img: monitor, icon: Monitor },
    { name: "PSUs", count: "12", img: gpu, icon: Zap },
    { name: "Cases", count: "14", img: gpu, icon: Box },
    { name: "Coolers", count: "10", img: gpu, icon: Snowflake },
  ];
  return (
    <section id="shop" className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-24">
      <motion.div {...fadeUp} className="flex items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6 flex-wrap">
        <div>
          <SectionKicker label="Explore" />
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold uppercase">Shop by <span className="text-primary">Category</span></h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground max-w-md">Browse high-end computing components and gear built for peak performance.</p>
        </div>
        <Link to="/categories" className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest text-primary hover:gap-3 transition-all">
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
        {cats.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden border border-border bg-card aspect-square"
          >
            <Link to="/shop" search={{ category: c.name }} className="absolute inset-0">
            <img src={c.img} alt={c.name} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
              <c.icon className="w-6 h-6 text-primary" />
              <div>
                <div className="font-display font-bold uppercase text-sm">{c.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.count} Products</div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-500" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ————————————————— PRODUCT CARD ————————————————— */
function ProductCard({ img, name, price, oldPrice, rating, badge, i, id, product }: {
  img: string; name: string; price: string; oldPrice?: string; rating: number; badge?: string; i: number; id: string; product?: any;
}) {
  const { addToCart, toggleWishlist, isInWishlist } = useCartWishlist();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product || { id, name, price: parseFloat(price.replace(/[^0-9.-]+/g, "")), img }, 1);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product || { id, name, price: parseFloat(price.replace(/[^0-9.-]+/g, "")), img });
  };

  return (
    <Link to="/product/$id" params={{ id }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
        whileHover={{ y: -8 }}
        className="group relative bg-card border border-border overflow-hidden flex flex-col cursor-pointer"
      >
        {badge && (
          <div className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-1.5 sm:px-2 py-0.5 sm:py-1 leading-none">
            {badge}
          </div>
        )}
        <button 
          onClick={handleToggleWishlist}
          className="absolute top-2 right-2 z-10 w-7 h-7 sm:w-8 sm:h-8 border border-border bg-background/60 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition hover:text-primary hover:border-primary"
        >
          <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isInWishlist(id) ? "fill-primary text-primary" : ""}`} />
        </button>
        <div className="relative aspect-square overflow-hidden bg-background">
          <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button 
              onClick={handleAddToCart}
              className="w-full bg-primary text-primary-foreground py-2 sm:py-3 text-[10px] sm:text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 sm:gap-2"
            >
              <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Add to Cart
            </button>
          </div>
        </div>
        <div className="p-2.5 sm:p-4 flex flex-col gap-1.5 sm:gap-2">
          <div className="flex items-center gap-0.5 sm:gap-1 text-primary">
            {[...Array(5)].map((_, x) => (
              <Star key={x} className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${x < rating ? "fill-primary" : "opacity-30"}`} />
            ))}
            <span className="text-[10px] sm:text-xs text-muted-foreground ml-0.5 sm:ml-1">({Math.floor(Math.random() * 40) + 10})</span>
          </div>
          <h3 className="font-semibold text-xs sm:text-sm leading-snug min-h-[2rem] sm:min-h-[2.5rem]">{name}</h3>
          <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap mt-auto">
            <span className="font-display text-sm sm:text-lg font-bold text-primary">{price}</span>
            {oldPrice && <span className="text-[10px] sm:text-xs text-muted-foreground line-through">{oldPrice}</span>}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

/* ————————————————— FEATURED ————————————————— */
function Featured({ productsList = [] }: { productsList?: any[] }) {
  // Group products by category and take the first (latest) from each
  const categoryMap = new Map();
  productsList.forEach(p => {
    if (!categoryMap.has(p.cat)) {
      categoryMap.set(p.cat, p);
    }
  });
  
  const products = Array.from(categoryMap.values()).map(p => ({
    id: p.id,
    img: p.img,
    name: p.name,
    price: `PKR ${p.price.toLocaleString()}`,
    oldPrice: p.old ? `PKR ${p.old.toLocaleString()}` : undefined,
    rating: p.rating || 5,
    badge: p.old && p.old > p.price ? `-${Math.round((1 - p.price / p.old) * 100)}%` : undefined,
    product: p
  }));

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-24">
      <motion.div {...fadeUp} className="flex items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6 flex-wrap">
        <div>
          <SectionKicker label="Handpicked" />
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold uppercase">Featured <span className="text-primary">Products</span></h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground max-w-md">Our recommended gaming gear and hardware, tested and approved.</p>
        </div>
        <Link to="/shop" search={{ category: undefined }} className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest text-primary hover:gap-3 transition-all">
          View All Products <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
        {products.map((p, i) => <ProductCard key={p.name} {...p} i={i} />)}
      </div>
    </section>
  );
}

/* ————————————————— CUSTOM BUILDER CTA ————————————————— */
function CustomBuilder() {
  return (
    <section id="build" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="" className="w-full h-full object-cover opacity-40" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-24 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <motion.div {...fadeUp}>
          <SectionKicker label="Configurator" />
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-6xl font-bold uppercase leading-tight">
            Build Your <span className="text-primary">Perfect</span><br />Gaming Rig
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-muted-foreground max-w-md">
            Pick every component. From CPU to case lighting. Our engineers assemble, stress test, and ship your dream machine.
          </p>
          <div className="mt-5 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4 max-w-md">
            {[
              [Wrench, "Expert Assembly"],
              [Zap, "72h Stress Test"],
              [ShieldCheck, "2 Yr Warranty"],
              [Trophy, "Award Winning"],
            ].map(([Icon, label], i) => (
              <div key={i} className="flex items-center gap-2 text-xs sm:text-sm">
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <span className="uppercase tracking-wider text-foreground/80">{label as string}</span>
              </div>
            ))}
          </div>
          <button onClick={() => Swal.fire({ title: "Coming Soon", text: "Custom build feature is coming soon!", icon: "info" })} className="mt-6 sm:mt-10 inline-flex items-center gap-3 bg-primary text-primary-foreground px-5 sm:px-8 py-3 sm:py-4 font-bold uppercase tracking-widest text-xs sm:text-sm red-glow hover:brightness-110 transition">
            Start Building <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative overflow-hidden"
        >
          <div className="animate-float-slow">
            <img src={gpu} alt="Custom Rig" className="w-full h-auto red-glow" loading="lazy" />
          </div>
          <div className="absolute top-0 right-0 border border-primary bg-background p-3 sm:p-4">
            <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">Starting at</div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-primary">PKR 149K</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ————————————————— FLASH SALE ————————————————— */
function FlashSale({ productsList = [] }: { productsList?: any[] }) {
  const [time, setTime] = useState({ h: 12, m: 34, s: 56 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const saleProducts = productsList.slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-24">
      <motion.div {...fadeUp} className="relative border border-primary/50 bg-gradient-to-br from-primary/10 via-card to-card p-5 xs:p-8 md:p-14 red-border-glow overflow-hidden">
        <Flame className="absolute -top-8 -right-8 w-48 h-48 text-primary/10" />
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center relative">
          <div>
            <SectionKicker label="Limited Offer" />
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold uppercase">Flash <span className="text-primary">Sale</span></h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground max-w-md">Up to 40% off on selected gaming rigs, peripherals and monitors. Ends soon.</p>
            <div className="mt-5 sm:mt-8 flex gap-2 sm:gap-3">
              {[["Hours", time.h], ["Mins", time.m], ["Secs", time.s]].map(([l, v]) => (
                <div key={l as string} className="bg-background border border-border p-2 xs:p-3 sm:p-4 min-w-[56px] xs:min-w-[70px] sm:min-w-[80px] text-center flex-1">
                  <motion.div
                    key={v}
                    initial={{ scale: 0.8, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-xl xs:text-2xl sm:text-3xl font-display font-bold text-primary"
                  >
                    {String(v).padStart(2, "0")}
                  </motion.div>
                  <div className="text-[9px] xs:text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
            <Link to="/shop" search={{ category: undefined }} className="mt-5 sm:mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-5 sm:px-8 py-3 sm:py-4 font-bold uppercase tracking-widest text-xs sm:text-sm hover:brightness-110 transition">
              Shop the Sale <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {saleProducts.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="relative aspect-square bg-background border border-border overflow-hidden group">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition" loading="lazy" />
                <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1">
                  {p.old && p.old > p.price ? `-${Math.round((1 - p.price / p.old) * 100)}%` : `-${20 + i * 5}%`}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ————————————————— BRAND MARQUEE ————————————————— */
function Brands() {
  const brands = ["NVIDIA", "AMD", "INTEL", "ASUS", "MSI", "CORSAIR", "RAZER", "LOGITECH", "HYPERX", "GIGABYTE", "COOLER MASTER", "SAMSUNG"];
  return (
    <section className="border-y border-border py-10 bg-card/30 overflow-hidden">
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {[...brands, ...brands].map((b, i) => (
          <span key={i} className="font-display font-bold text-2xl tracking-widest text-muted-foreground hover:text-primary transition">
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ————————————————— GAMING PC SHOWCASE ————————————————— */
function GamingPCs() {
  const pcs = [
    { name: "Rig / Nova", spec: "RTX 4060 · i5-13400F · 32GB", price: "PKR 249,000", tier: "Entry Beast" },
    { name: "Rig / Vortex", spec: "RTX 4070 Super · i7-14700K · 32GB", price: "PKR 449,000", tier: "Enthusiast" },
    { name: "Rig / Apex", spec: "RTX 4080 Super · i9-14900K · 64GB", price: "PKR 749,000", tier: "Flagship" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-24">
      <motion.div {...fadeUp} className="text-center mb-8 sm:mb-16">
        <div className="inline-flex"><SectionKicker label="Prebuilt" /></div>
        <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold uppercase">Gaming PCs <span className="text-primary">/</span> Signature Builds</h2>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">Three tiers. Zero compromise. Ships in 48 hours.</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
        {pcs.map((pc, i) => (
          <motion.div
            key={pc.name}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className={`relative border p-8 group ${i === 1 ? "border-primary bg-card red-border-glow" : "border-border bg-card"}`}
          >
            {i === 1 && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1">Most Popular</div>}
            <div className="text-xs uppercase tracking-widest text-primary">{pc.tier}</div>
            <h3 className="mt-2 text-3xl font-bold uppercase">{pc.name}</h3>
            <div className="aspect-video my-6 bg-background overflow-hidden relative">
              <img src={hero} alt="" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" loading="lazy" />
            </div>
            <div className="text-sm text-muted-foreground">{pc.spec}</div>
            <div className="mt-4 text-3xl font-display font-bold text-primary">{pc.price}</div>
            <button onClick={() => Swal.fire({ title: "Coming Soon", text: "Configure feature is coming soon!", icon: "info" })} className="mt-6 w-full border border-border py-3 font-bold uppercase tracking-widest text-xs hover:border-primary hover:text-primary transition flex items-center justify-center gap-2">
              Configure <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ————————————————— DEAL BANNER SPLIT ————————————————— */
function DealBanners() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-12 sm:pb-24 grid md:grid-cols-2 gap-4 sm:gap-6">
      {[
        { title: "Peripherals", sub: "Keyboards · Mice · Headsets", img: keyboardImg, tag: "New Collection", categories: ["Keyboards", "Mice", "Headsets"] },
        { title: "Displays", sub: "144Hz · 240Hz · Ultrawide", img: monitor, tag: "Up to 25% Off", categories: ["Monitors"] },
      ].map((d, i) => (
        <motion.div
          key={d.title}
          initial={{ opacity: 0, x: i === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="group relative overflow-hidden border border-border aspect-[16/9] flex items-end p-4 sm:p-8"
        >
          <Link to="/shop" search={{ category: d.categories[0] }} className="absolute inset-0">
          <img src={d.img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="relative">
            <div className="text-xs uppercase tracking-widest text-primary">{d.tag}</div>
            <div className="mt-2 text-4xl font-bold uppercase">{d.title}</div>
            <div className="text-sm text-muted-foreground">{d.sub}</div>
            <div className="mt-4 inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold group-hover:text-primary transition">
              Shop Now <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Link>
        </motion.div>
      ))}
    </section>
  );
}

/* ————————————————— BEST SELLERS ————————————————— */
function BestSellers() {
  const items = [
    { id: "bs1", img: mouse, name: "Razer DeathAdder V3 Pro Wireless", price: "PKR 39,999", rating: 5, badge: "#1" },
    { id: "bs2", img: keyboardImg, name: "Keychron Q1 Pro QMK/VIA", price: "PKR 45,000", rating: 5, badge: "#2" },
    { id: "bs3", img: headset, name: "SteelSeries Arctis Nova Pro", price: "PKR 52,999", rating: 5, badge: "#3" },
    { id: "bs4", img: monitor, name: "Samsung Odyssey G7 32\" 1440p", price: "PKR 165,000", rating: 5, badge: "#4" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-24">
      <motion.div {...fadeUp} className="flex items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6 flex-wrap">
        <div>
          <SectionKicker label="This Week" />
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold uppercase">Best <span className="text-primary">Sellers</span></h2>
        </div>
        <a href="#" className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest text-primary hover:gap-3 transition-all">
          View All <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
        {items.map((p, i) => <ProductCard key={p.name} {...p} i={i} product={p} />)}
      </div>
    </section>
  );
}

/* ————————————————— WHY US ————————————————— */
function WhyUs() {
  const perks = [
    { icon: Wrench, title: "Expert Assembly", desc: "Every rig built and cable-managed by certified technicians." },
    { icon: Zap, title: "72h Burn-in", desc: "Stress-tested for stability across CPU, GPU and memory." },
    { icon: PackageCheck, title: "Insured Shipping", desc: "Foam-armored, tracked and insured, nationwide." },
    { icon: HeadsetIcon, title: "Lifetime Support", desc: "Real humans, real answers — for as long as you own it." },
    { icon: CreditCard, title: "Flexible Payment", desc: "Card, bank transfer, and 0% installment plans available." },
    { icon: Sparkles, title: "Custom Aesthetics", desc: "Choose lighting, cables, tempered glass — make it yours." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-24">
      <motion.div {...fadeUp} className="text-center mb-8 sm:mb-16">
        <div className="inline-flex"><SectionKicker label="Why Fast" /></div>
        <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold uppercase">Engineered <span className="text-primary">Difference</span></h2>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {perks.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="bg-background p-8 group hover:bg-card transition"
          >
            <div className="w-14 h-14 border border-primary/40 flex items-center justify-center text-primary group-hover:red-border-glow transition">
              <p.icon className="w-6 h-6" />
            </div>
            <h3 className="mt-6 text-xl font-bold uppercase">{p.title}</h3>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ————————————————— TESTIMONIALS ————————————————— */
function Testimonials() {
  const reviews = [
    { name: "Ahmed R.", role: "Streamer @ahmedplays", text: "Best build I've ever owned. Cable management is art. Runs everything at 4K max.", rating: 5 },
    { name: "Sara K.", role: "3D Artist", text: "Blender renders that used to take an hour finish in ten minutes. The Apex is a beast.", rating: 5 },
    { name: "Bilal M.", role: "Esports Pro", text: "144fps rock solid in every title. Support helped me tune it perfectly.", rating: 5 },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-24">
      <motion.div {...fadeUp} className="text-center mb-8 sm:mb-16">
        <div className="inline-flex"><SectionKicker label="Verified Reviews" /></div>
        <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold uppercase">Trusted by <span className="text-primary">Gamers</span></h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.12 }}
            className="border border-border bg-card p-8 hover:border-primary transition"
          >
            <div className="flex gap-1 text-primary mb-4">
              {[...Array(r.rating)].map((_, x) => <Star key={x} className="w-4 h-4 fill-primary" />)}
            </div>
            <p className="text-foreground/90 leading-relaxed">"{r.text}"</p>
            <div className="mt-6 pt-6 border-t border-border">
              <div className="font-bold uppercase tracking-wide">{r.name}</div>
              <div className="text-xs text-muted-foreground">{r.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ————————————————— BLOG ————————————————— */
function Blog() {
  const posts = [
    { title: "RTX 5090 vs 4090: Real-World Benchmarks", cat: "Guides", date: "Jul 04", img: gpu },
    { title: "Building a Silent Water-Cooled Rig", cat: "Builds", date: "Jun 28", img: hero },
    { title: "Best Monitors for Competitive FPS in 2026", cat: "Reviews", date: "Jun 20", img: monitor },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-24">
      <motion.div {...fadeUp} className="flex items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6 flex-wrap">
        <div>
          <SectionKicker label="From The Lab" />
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold uppercase">Latest <span className="text-primary">Insights</span></h2>
        </div>
        <a href="#" className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest text-primary">All Articles <ArrowRight className="w-4 h-4" /></a>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
        {posts.map((p, i) => (
          <motion.a href="#" key={p.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="group border border-border bg-card overflow-hidden"
          >
            <div className="aspect-video overflow-hidden">
              <img src={p.img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" loading="lazy" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest">
                <span className="text-primary">{p.cat}</span>
                <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                <span className="text-muted-foreground">{p.date}</span>
              </div>
              <h3 className="mt-3 text-xl font-bold leading-snug group-hover:text-primary transition">{p.title}</h3>
              <div className="mt-4 text-xs uppercase tracking-widest inline-flex items-center gap-2 group-hover:gap-3 transition-all">Read More <ArrowRight className="w-3 h-3" /></div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

/* ————————————————— FAQ ————————————————— */
function FAQ() {
  const [open, setOpen] = useState(0);
  const faqs = [
    { q: "How long does a custom build take?", a: "Typical builds ship within 48–72 hours after order confirmation, including our full 72-hour stress test." },
    { q: "What warranty do you offer?", a: "All custom rigs come with a 2-year parts and labor warranty. Individual components carry their manufacturer warranty (1–3 years)." },
    { q: "Do you deliver nationwide?", a: "Yes — insured, foam-armored shipping across Pakistan with full tracking. Delivery in 2–5 business days depending on city." },
    { q: "Can I finance my purchase?", a: "We support all major cards and offer 0% installment plans up to 12 months through partner banks." },
    { q: "Do you offer post-purchase support?", a: "Absolutely — lifetime tech support via WhatsApp, email and phone for anything you buy from us." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-24 grid lg:grid-cols-2 gap-8 sm:gap-12">
      <motion.div {...fadeUp}>
        <SectionKicker label="Answers" />
        <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold uppercase">Frequently<br />Asked <span className="text-primary">Questions</span></h2>
        <p className="mt-4 sm:mt-6 text-sm sm:text-base text-muted-foreground max-w-md">Can't find what you're looking for? Reach out — real humans, fast responses.</p>
        <a href="#contact" className="mt-4 sm:mt-6 inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest text-primary">Contact Support <ArrowRight className="w-4 h-4" /></a>
      </motion.div>
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.06 }}
            className="border border-border bg-card"
          >
            <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between p-5 text-left font-bold uppercase tracking-wide text-sm hover:text-primary transition">
              {f.q}
              <ChevronRight className={`w-4 h-4 transition-transform ${open === i ? "rotate-90 text-primary" : ""}`} />
            </button>
            <motion.div
              initial={false}
              animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ————————————————— NEWSLETTER ————————————————— */
function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-12 sm:pb-24">
      <motion.div {...fadeUp} className="relative border border-primary/40 red-border-glow p-6 xs:p-10 md:p-16 text-center overflow-hidden">
        <div className="absolute inset-0 slash-bg opacity-40" />
        <div className="relative">
          <SectionKicker label="Insider" />
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold uppercase max-w-2xl mx-auto">Get Early Access <span className="text-primary">& Deals</span></h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground max-w-md mx-auto">Drop your email — new drops, restocks, and members-only pricing straight to your inbox.</p>
          <form className="mt-5 sm:mt-8 flex flex-col gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="you@yourdomain.com" className="w-full bg-background border border-border px-4 py-3 sm:py-4 text-sm outline-none focus:border-primary transition" />
            <button className="w-full bg-primary text-primary-foreground px-8 py-3 sm:py-4 font-bold uppercase tracking-widest text-sm hover:brightness-110 red-glow transition">Subscribe</button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

/* ————————————————— COMMUNITY GALLERY ————————————————— */
function Gallery() {
  const shots = [hero, gpu, mobo, keyboardImg, monitor, headset, mouse, laptop];
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-24">
      <motion.div {...fadeUp} className="text-center mb-8 sm:mb-12">
        <div className="inline-flex"><SectionKicker label="#FastRigs" /></div>
        <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-bold uppercase">Community <span className="text-primary">Builds</span></h2>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground">Tag your setup with #FastRigs to be featured.</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-2">
        {shots.map((s, i) => (
          <motion.a key={i} href="#"
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="group relative aspect-square overflow-hidden border border-border"
          >
            <img src={s} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-500" loading="lazy" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition flex items-center justify-center">
              <Instagram className="w-6 h-6 opacity-0 group-hover:opacity-100 transition" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

/* ————————————————— CONTACT CTA ————————————————— */
function ContactCTA() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 pb-12 sm:pb-24 grid md:grid-cols-3 gap-3 sm:gap-4">
      {[
        { icon: Phone, title: "Call Us", val: "+92 300 1234567", sub: "Mon–Sat 10AM–9PM" },
        { icon: Mail, title: "Email", val: "hello@fastcomputers.pk", sub: "24h response time" },
        { icon: MapPin, title: "Visit Showroom", val: "Karachi · Lahore · Islamabad", sub: "See rigs in person" },
      ].map((c, i) => (
        <motion.div key={c.title}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: i * 0.1 }}
          className="border border-border bg-card p-8 hover:border-primary transition group"
        >
          <c.icon className="w-6 h-6 text-primary group-hover:animate-pulse" />
          <h3 className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{c.title}</h3>
          <div className="mt-1 font-bold text-lg">{c.val}</div>
          <div className="text-sm text-muted-foreground">{c.sub}</div>
        </motion.div>
      ))}
    </section>
  );
}

/* Footer moved to SiteFooter */

/* ————————————————— PAGE ————————————————— */
function Home() {
  const productsList = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <FeatureStrip />
        <Categories />
        <Featured productsList={productsList} />
        <CustomBuilder />
        <FlashSale productsList={productsList} />
        <Brands />
        <GamingPCs />
        <DealBanners />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <Newsletter />
        <Gallery />
        <ContactCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
