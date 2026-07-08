import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Fast Computers — Support, Sales & Store Location" },
      { name: "description", content: "Get in touch with Fast Computers Lahore. Call, email, or visit our physical store for gaming hardware, custom builds and expert support." },
      { property: "og:title", content: "Contact Fast Computers" },
      { property: "og:description", content: "Reach our sales, support and custom-build team. Visit our Lahore store." },
    ],
  }),
  component: ContactPage,
});

const infos = [
  { icon: MapPin, title: "Physical Store", value: "Plaza 45-B, Sector XX, Phase 3, DHA, Lahore, Pakistan." },
  { icon: Phone, title: "Helpline & WhatsApp", value: "+92 (300) 123-4567" },
  { icon: Mail, title: "General & Support Email", value: "support@fastcomputers.pk" },
  { icon: Clock, title: "Working Business Hours", value: "Monday - Saturday: 11:00 AM - 9:00 PM" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <PageHero crumb="Contact Us" kicker="We're Listening" title="Contact Us" />

        <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="text-primary tracking-[0.3em] text-xs font-semibold uppercase">Reach the Team</span>
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold uppercase">Get in <span className="text-primary">Touch</span></h2>

            <div className="mt-10 space-y-4">
              {infos.map((i, idx) => (
                <motion.div key={i.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                  className="group flex gap-4 border border-border bg-card p-5 hover:border-primary transition">
                  <div className="w-12 h-12 shrink-0 border border-border bg-background flex items-center justify-center group-hover:border-primary group-hover:text-primary transition">
                    <i.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{i.title}</div>
                    <div className="mt-1 font-bold">{i.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 relative aspect-video border border-border overflow-hidden red-border-glow">
              <div className="absolute inset-0 bg-[linear-gradient(oklch(0.62_0.24_25/0.1)_1px,transparent_1px),linear-gradient(90deg,oklch(0.62_0.24_25/0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <MapPin className="w-10 h-10 text-primary animate-glow-pulse" />
                <div className="mt-3 font-bold uppercase tracking-widest">Lahore Store Location</div>
                <div className="mt-1 text-xs text-muted-foreground max-w-xs">Visit our physical store to test monitors, keyboards, mice, and check prebuilt rigs before purchase.</div>
                <div className="mt-3 text-[10px] uppercase tracking-widest text-muted-foreground/60">Google Maps Navigation API (Mock)</div>
              </div>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="relative border border-border bg-card p-8 md:p-10 red-border-glow">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-primary" />
              <h3 className="text-2xl md:text-3xl font-bold uppercase">Send us a Message</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">We reply within one working day.</p>

            <div className="mt-8 space-y-5">
              {[
                { name: "name", label: "Your Full Name", type: "text" },
                { name: "email", label: "Email Address", type: "email" },
                { name: "subject", label: "Subject", type: "text" },
              ].map((f) => (
                <label key={f.name} className="block">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{f.label}</span>
                  <input required type={f.type} name={f.name}
                    className="mt-2 w-full bg-background border border-border px-4 py-3 outline-none focus:border-primary transition" />
                </label>
              ))}
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Your Message</span>
                <textarea required rows={5} name="message"
                  className="mt-2 w-full bg-background border border-border px-4 py-3 outline-none focus:border-primary transition resize-none" />
              </label>
              <button type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition">
                {sent ? "Message Sent ✓" : (<>Send Message <Send className="w-4 h-4" /></>)}
              </button>
            </div>
          </motion.form>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
