import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export function PageHero({ title, kicker, crumb }: { title: string; kicker?: string; crumb: string }) {
  return (
    <section className="relative pt-32 pb-16 border-b border-border overflow-hidden slash-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{crumb}</span>
        </motion.div>
        {kicker && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
            className="mt-6 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-primary tracking-[0.3em] text-xs font-semibold uppercase">{kicker}</span>
          </motion.div>
        )}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-4 text-5xl md:text-7xl font-bold uppercase leading-none">
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
