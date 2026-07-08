import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Trophy, Users, Star, Calendar } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Fast Computers — Pakistan's Premier PC Hardware Retailer" },
      { name: "description", content: "Founded in 2018, Fast Computers is Pakistan's trusted destination for authentic gaming hardware, custom rigs and expert support." },
      { property: "og:title", content: "About Fast Computers" },
      { property: "og:description", content: "Pakistan's premier hardware retailer since 2018. 15,000+ systems built. Uncompromising standards." },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { icon: Trophy, val: "15,000+", label: "Systems Built" },
  { icon: Users, val: "25,000+", label: "Happy Customers" },
  { icon: Star, val: "4.8/5", label: "Average Review" },
  { icon: Calendar, val: "8+ Years", label: "Industry Expertise" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <PageHero crumb="About Us" kicker="Our Story" title="About Us" />

        <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="text-primary tracking-[0.3em] text-xs font-semibold uppercase">Since 2018</span>
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold uppercase leading-tight">Our Story & <span className="text-primary">Mission</span></h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>Founded in 2018, <span className="text-foreground font-bold">FAST COMPUTERS</span> started with a simple vision: to make high-performance gaming hardware accessible to everyone across Pakistan. Over the years, we have grown from a small enthusiast retail outlet into one of the country's most trusted e-commerce stores for computer components and custom rigs.</p>
              <p>We believe that computing should have no compromises. Whether you are a competitive esports gamer chasing high frame rates, a developer compiling heavy databases, or a 3D modeler rendering animations, we supply the reliable computing power you need to excel.</p>
              <p>Our mission is to maintain a 100% authentic inventory, provide the fastest delivery setup in the country, and support our community with technical expertise.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative">
            <div className="absolute -inset-4 border border-primary/40" />
            <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=900&q=80"
              alt="Fast Computers office" className="relative w-full aspect-[4/3] object-cover red-border-glow" />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 max-w-[220px]">
              <div className="text-4xl font-display font-bold">08+</div>
              <div className="text-xs uppercase tracking-widest mt-1">Years of Building Dreams</div>
            </div>
          </motion.div>
        </section>

        <section className="border-y border-border slash-bg">
          <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center border border-border bg-card p-8 hover:border-primary transition group">
                <s.icon className="w-8 h-8 text-primary mx-auto group-hover:animate-pulse" />
                <div className="mt-4 text-3xl md:text-4xl font-display font-bold">{s.val}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 text-center">
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold uppercase">Ready to upgrade your system?</motion.h3>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">Configure a custom prebuilt gaming PC, choose components from our curated parts lists, or message our engineers to plan your dream hardware setup.</p>
          <Link to="/shop" className="mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition">
            Configure Custom Build <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
