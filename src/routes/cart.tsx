import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useMemo, useState } from "react";
import { Minus, Plus, Trash2, ShoppingCart, ArrowRight, Tag, ShieldCheck, Truck } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { useCartWishlist } from "@/contexts/CartWishlistContext";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Shopping Cart — Fast Computers" },
      { name: "description", content: "Review your gaming hardware order, apply coupons and check out securely with Fast Computers." },
      { property: "og:title", content: "Shopping Cart — Fast Computers" },
      { property: "og:description", content: "Review your items and check out." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { cart, updateCartQty, removeFromCart } = useCartWishlist();
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(0);

  const subtotal = useMemo(() => cart.reduce((s, r) => s + r.price * r.qty, 0), [cart]);
  const shipping = subtotal > 0 ? 1500 : 0;
  const discount = Math.round(subtotal * applied);
  const total = Math.max(0, subtotal + shipping - discount);

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "FAST10") setApplied(0.1);
    else if (coupon.trim().toUpperCase() === "GAMER20") setApplied(0.2);
    else setApplied(0);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <PageHero crumb="Cart" kicker="Ready to Checkout" title="Shopping Cart" />
        <section className="mx-auto max-w-7xl px-6 py-16">
          {cart.length === 0 ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="border border-border bg-card p-16 text-center">
              <ShoppingCart className="w-14 h-14 text-primary mx-auto animate-glow-pulse" />
              <h3 className="mt-6 text-3xl font-bold uppercase">Your cart is empty</h3>
              <p className="mt-2 text-muted-foreground">Start shopping to fill it with gaming gear.</p>
              <Link to="/shop" className="mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition">
                Browse Shop <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <AnimatePresence>
                  {cart.map((r) => (
                    <motion.div key={r.id}
                      layout initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 20, height: 0 }}
                      className="flex gap-4 border border-border bg-card p-4 hover:border-primary transition">
                      <img src={r.img} alt={r.name} className="w-24 h-24 sm:w-32 sm:h-32 object-cover shrink-0" loading="lazy" />
                      <div className="flex-1 flex flex-col">
                        <div className="text-xs uppercase tracking-widest text-primary">{r.brand}</div>
                        <div className="mt-1 font-bold leading-tight line-clamp-2">{r.name}</div>
                        <div className="mt-auto flex items-center justify-between flex-wrap gap-3">
                          <div className="inline-flex items-center border border-border">
                            <button onClick={() => updateCartQty(r.id, r.qty - 1)} className="w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"><Minus className="w-3 h-3" /></button>
                            <span className="w-10 text-center text-sm font-bold">{r.qty}</span>
                            <button onClick={() => updateCartQty(r.id, r.qty + 1)} className="w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"><Plus className="w-3 h-3" /></button>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-primary font-bold">PKR {(r.price * r.qty).toLocaleString()}</div>
                            <button onClick={() => removeFromCart(r.id)} className="text-muted-foreground hover:text-primary transition" aria-label="Remove">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                <div className="border border-border bg-card p-5">
                  <div className="flex items-center gap-3">
                    <Tag className="w-4 h-4 text-primary" />
                    <div className="text-xs uppercase tracking-widest">Coupon Code</div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <input value={coupon} onChange={e => setCoupon(e.target.value)} placeholder="Try FAST10 or GAMER20"
                      className="flex-1 bg-background border border-border px-4 py-3 outline-none focus:border-primary transition text-sm" />
                    <button onClick={applyCoupon} className="bg-primary text-primary-foreground px-6 font-bold uppercase tracking-widest text-xs hover:brightness-110 transition">Apply</button>
                  </div>
                  {applied > 0 && <div className="mt-2 text-xs text-primary">✓ Coupon applied · {Math.round(applied * 100)}% off</div>}
                </div>
              </div>

              <aside className="lg:sticky lg:top-28 h-fit border border-border bg-card p-6 red-border-glow">
                <div className="text-xs uppercase tracking-widest text-primary font-bold">Order Summary</div>
                <div className="mt-6 space-y-3 text-sm">
                  <Row label="Subtotal" value={`PKR ${subtotal.toLocaleString()}`} />
                  <Row label="Shipping" value={`PKR ${shipping.toLocaleString()}`} />
                  {discount > 0 && <Row label="Discount" value={`- PKR ${discount.toLocaleString()}`} accent />}
                  <div className="h-px bg-border my-3" />
                  <div className="flex items-center justify-between">
                    <span className="uppercase tracking-widest text-xs text-muted-foreground">Total</span>
                    <span className="text-2xl font-display font-bold text-primary">PKR {total.toLocaleString()}</span>
                  </div>
                </div>
                <Link to="/checkout" className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition text-center">
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="mt-6 space-y-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> 1-Year manufacturer warranty on all parts</div>
                  <div className="flex items-center gap-2"><Truck className="w-4 h-4 text-primary" /> Insured express delivery across Pakistan</div>
                </div>
              </aside>
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className={accent ? "text-primary font-bold" : "font-bold"}>{value}</span>
    </div>
  );
}
