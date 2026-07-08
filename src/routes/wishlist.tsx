import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { Heart, ShoppingCart, Trash2, ArrowRight, Star } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { useCartWishlist } from "@/contexts/CartWishlistContext";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "My Wishlist — Fast Computers" },
      { name: "description", content: "Save the gaming hardware and components you love. Move items straight to cart when you're ready." },
      { property: "og:title", content: "My Wishlist — Fast Computers" },
      { property: "og:description", content: "Your curated collection of gaming gear and PC components." },
    ],
  }),
  component: WishlistPage,
});

function WishlistPage() {
  const { wishlist, toggleWishlist, moveToCart } = useCartWishlist();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <PageHero crumb="Wishlist" kicker="Saved for Later" title="My Wishlist" />
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <div className="text-sm uppercase tracking-widest text-muted-foreground">
              <span className="text-foreground font-bold">{wishlist.length}</span> items saved
            </div>
            {wishlist.length > 0 && (
              <button onClick={() => wishlist.forEach(item => toggleWishlist(item))} className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition cursor-pointer">Clear All</button>
            )}
          </div>

          {wishlist.length === 0 ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="border border-border bg-card p-16 text-center">
              <Heart className="w-14 h-14 text-primary mx-auto animate-glow-pulse" />
              <h3 className="mt-6 text-3xl font-bold uppercase">Your wishlist is empty</h3>
              <p className="mt-2 text-muted-foreground">Save items you love to compare and buy later.</p>
              <Link to="/shop" className="mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition">
                Browse Shop <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {wishlist.map((p, i) => (
                <motion.div key={p.id}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i % 4) * 0.05 }}
                  className="group relative border border-border bg-card overflow-hidden hover:border-primary transition">
                  <button
                    onClick={() => toggleWishlist(p)}
                    className="absolute top-3 right-3 z-10 w-8 h-8 border border-border bg-background/70 backdrop-blur flex items-center justify-center hover:text-primary hover:border-primary transition cursor-pointer"
                    aria-label="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="relative aspect-square overflow-hidden bg-background">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, s) => <Star key={s} className="w-3 h-3 fill-primary" />)}
                      <span className="text-xs text-muted-foreground ml-1">({p.rating})</span>
                    </div>
                    <h3 className="mt-2 font-bold leading-tight line-clamp-2 min-h-[2.5rem]">{p.name}</h3>
                    <div className="mt-1 text-xs text-muted-foreground uppercase tracking-widest">{p.brand} · {p.cat}</div>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-primary font-bold">PKR {p.price.toLocaleString()}</span>
                      <span className="text-xs text-muted-foreground line-through">PKR {p.old.toLocaleString()}</span>
                    </div>
                    <button 
                      onClick={() => moveToCart(p)}
                      className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 text-xs font-bold uppercase tracking-widest hover:brightness-110 transition cursor-pointer"
                    >
                      <ShoppingCart className="w-4 h-4" /> Move to Cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
