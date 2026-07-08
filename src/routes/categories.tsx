import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Cpu, MemoryStick, HardDrive, Zap, Fan, Wrench, Cable, Box,
  Snowflake, Droplets, Layers, Sparkles, ChevronRight,
  MousePointer2, Headphones, Keyboard, Monitor, MonitorPlay,
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "PC Components & Categories — Fast Computers" },
      { name: "description", content: "Browse gaming PC components: CPUs, GPUs, motherboards, RAM, storage, PSUs, cases, coolers, fans and more." },
      { property: "og:title", content: "PC Components & Categories — Fast Computers" },
      { property: "og:description", content: "Browse gaming PC components: CPUs, GPUs, motherboards, RAM, storage, PSUs and more." },
    ],
  }),
  component: CategoriesPage,
});

const cats = [
  { icon: Sparkles, name: "Graphics Cards", desc: "NVIDIA GeForce RTX & AMD Radeon cards.", count: 18 },
  { icon: Layers, name: "Motherboards", desc: "Intel & AMD sockets, ATX, mATX, ITX.", count: 15 },
  { icon: Cpu, name: "Processors", desc: "Intel Core & AMD Ryzen processors.", count: 24 },
  { icon: MemoryStick, name: "RAM", desc: "DDR4 & DDR5 gaming memory kits.", count: 21 },
  { icon: HardDrive, name: "SSDs", desc: "Superfast NVMe M.2 & SATA solid state drives.", count: 16 },
  { icon: MousePointer2, name: "Mice", desc: "Gaming mice with high precision sensors.", count: 12 },
  { icon: Headphones, name: "Headsets", desc: "Gaming headsets with surround sound.", count: 8 },
  { icon: Keyboard, name: "Keyboards", desc: "Mechanical and RGB gaming keyboards.", count: 10 },
  { icon: Monitor, name: "Monitors", desc: "High refresh rate gaming monitors.", count: 6 },
  { icon: Zap, name: "PSUs", desc: "80+ Bronze, Gold, Platinum certified power supplies.", count: 12 },
  { icon: Box, name: "Cases", desc: "Mid towers, full towers, ITX cases with tempered glass.", count: 14 },
  { icon: Snowflake, name: "Coolers", desc: "AIO Liquid coolers & high performance air coolers.", count: 10 },
  { icon: MonitorPlay, name: "Laptops", desc: "Gaming laptops with high performance specs.", count: 4 },
];

function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <PageHero crumb="Categories" kicker="Explore the Arsenal" title="PC Components" />
        <section className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-muted-foreground max-w-2xl mb-12">Select a hardware category to view catalog listings and build your ultimate rig, part by part.</p>
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-5">
            {cats.map((c, i) => (
              <motion.div key={c.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
              >
                <Link to="/shop" search={{ category: c.name }}
                  className="group relative block border border-border bg-card/60 p-4 sm:p-6 hover:border-primary transition overflow-hidden">
                  <div className="absolute inset-0 slash-bg opacity-0 group-hover:opacity-100 transition" />
                  <div className="relative flex items-start justify-between">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border border-border bg-background flex items-center justify-center group-hover:border-primary group-hover:text-primary transition">
                      <c.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <Wrench className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-transform" />
                  </div>
                  <h3 className="relative mt-4 sm:mt-6 text-base sm:text-xl font-bold uppercase leading-tight">{c.name}</h3>
                  <p className="relative mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2">{c.desc}</p>
                  <div className="relative mt-4 sm:mt-6 flex items-center justify-between text-[10px] sm:text-xs uppercase tracking-widest">
                    <span className="text-muted-foreground">{c.count} listings</span>
                    <span className="text-primary flex items-center gap-1 group-hover:gap-2 transition-all">Shop <ChevronRight className="w-3 h-3" /></span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
