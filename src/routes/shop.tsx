import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useMemo, useState, useEffect } from "react";
import { Star, Heart, ShoppingCart, ArrowUpDown, SlidersHorizontal } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { ShopFilter } from "@/components/site/ShopFilter";
import { type Product } from "@/lib/products-data";
import { getProductsFn } from "@/functions/products";

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search.category === "string" ? search.category : undefined,
  }),
  loader: async () => {
    return await getProductsFn();
  },
  head: () => ({
    meta: [
      { title: "Shop Gaming Hardware & Peripherals — Fast Computers" },
      { name: "description", content: "Shop graphics cards, processors, motherboards, RAM, SSDs, monitors, mice, keyboards, headsets and more." },
      { property: "og:title", content: "Shop Gaming Hardware — Fast Computers" },
      { property: "og:description", content: "GPUs, CPUs, motherboards, storage, peripherals and full builds at the best prices in Pakistan." },
    ],
  }),
  component: ShopPage,
});

/* ── Discount badge helper ───────────────────────────────────────── */
const disc = (p: Product) => Math.round((1 - p.price / p.old) * 100);

/* ── Page component ──────────────────────────────────────────────── */
function ShopPage() {
  const productsList = Route.useLoaderData();
  
  /* Get category from URL search params */
  const search = Route.useSearch();
  const categoryParam = search.category as string | undefined;

  /* Compute categories, brands, price bounds dynamically from the loaded products list */
  const ALL_CATEGORIES = useMemo(() => [...new Set(productsList.map((p: any) => p.cat as string))].sort(), [productsList]);
  const ALL_BRANDS = useMemo(() => [...new Set(productsList.map((p: any) => p.brand as string))].sort(), [productsList]);
  const GLOBAL_MIN = useMemo(() => productsList.length ? Math.min(...productsList.map((p: any) => p.price)) : 0, [productsList]);
  const GLOBAL_MAX = useMemo(() => productsList.length ? Math.max(...productsList.map((p: any) => p.price)) : 1000000, [productsList]);

  /* Filter state */
  const [sort,               setSort]               = useState("latest");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(categoryParam ? [categoryParam] : []);
  const [selectedBrands,     setSelectedBrands]     = useState<string[]>([]);
  const [priceMin,           setPriceMin]           = useState(0);
  const [priceMax,           setPriceMax]           = useState(1000000);
  const [inStockOnly,        setInStockOnly]        = useState(false);
  const [filterOpen,         setFilterOpen]         = useState(false);
  const [displayedCount,    setDisplayedCount]     = useState(30);

  /* Synchronize price filters with new bounds when product list updates */
  useEffect(() => {
    setPriceMin(GLOBAL_MIN);
    setPriceMax(GLOBAL_MAX);
  }, [GLOBAL_MIN, GLOBAL_MAX]);

  /* Update selected categories when URL param changes */
  useEffect(() => {
    if (categoryParam && !selectedCategories.includes(categoryParam)) {
      setSelectedCategories([categoryParam]);
    }
  }, [categoryParam]);

  /* Filtered + sorted list */
  const filtered = useMemo(() => {
    let list = [...productsList];
    if (selectedCategories.length) list = list.filter((p) => selectedCategories.includes(p.cat));
    if (selectedBrands.length)     list = list.filter((p) => selectedBrands.includes(p.brand));
    list = list.filter((p) => p.price >= priceMin && p.price <= priceMax);
    if (inStockOnly) list = list.filter((p) => p.inStock);
    if (sort === "low")    list.sort((a, b) => a.price - b.price);
    if (sort === "high")   list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list.slice(0, displayedCount);
  }, [productsList, sort, selectedCategories, selectedBrands, priceMin, priceMax, inStockOnly, displayedCount]);

  /* Total filtered count (before slicing) */
  const totalFilteredCount = useMemo(() => {
    let list = [...productsList];
    if (selectedCategories.length) list = list.filter((p) => selectedCategories.includes(p.cat));
    if (selectedBrands.length)     list = list.filter((p) => selectedBrands.includes(p.brand));
    list = list.filter((p) => p.price >= priceMin && p.price <= priceMax);
    if (inStockOnly) list = list.filter((p) => p.inStock);
    return list.length;
  }, [productsList, selectedCategories, selectedBrands, priceMin, priceMax, inStockOnly]);

  /* How many filter sections are active */
  const activeCount =
    selectedCategories.length +
    selectedBrands.length +
    (inStockOnly ? 1 : 0) +
    (priceMin !== GLOBAL_MIN || priceMax !== GLOBAL_MAX ? 1 : 0);

  /* Helpers */
  const toggleCategory = (cat: string) =>
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );

  const toggleBrand = (brand: string) =>
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceMin(GLOBAL_MIN);
    setPriceMax(GLOBAL_MAX);
    setInStockOnly(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        <PageHero crumb="Shop" kicker="Full Catalog" title="Shop Catalog" />

        {/* ── Main layout: sidebar + products ──────────────────── */}
        <div className="mx-auto max-w-7xl">
          <div className="flex items-start">

            {/* Filter sidebar (desktop sticky / mobile drawer) */}
            <ShopFilter
              categories={ALL_CATEGORIES}
              brands={ALL_BRANDS}
              selectedCategories={selectedCategories}
              selectedBrands={selectedBrands}
              priceMin={priceMin}
              priceMax={priceMax}
              globalMin={GLOBAL_MIN}
              globalMax={GLOBAL_MAX}
              inStockOnly={inStockOnly}
              activeCount={activeCount}
              isOpen={filterOpen}
              onClose={() => setFilterOpen(false)}
              onCategoryToggle={toggleCategory}
              onBrandToggle={toggleBrand}
              onPriceChange={(min, max) => { setPriceMin(min); setPriceMax(max); }}
              onInStockChange={setInStockOnly}
              onClearAll={clearAll}
            />

            {/* ── Products area ─────────────────────────────────── */}
            <div className="flex-1 min-w-0 px-5 lg:px-8 py-10">

              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-5 border-b border-border">

                <div className="flex items-center gap-3 flex-wrap">
                  {/* Mobile filter trigger */}
                  <button
                    id="open-filters-btn"
                    onClick={() => setFilterOpen(true)}
                    className="lg:hidden flex items-center gap-2 border border-border bg-card px-4 py-2.5 text-[11px] uppercase tracking-[0.12em] font-semibold hover:border-primary hover:text-primary transition-colors relative"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    Filters
                    {activeCount > 0 && (
                      <span className="bg-primary text-primary-foreground text-[9px] font-bold px-1.5 py-0.5 leading-none">
                        {activeCount}
                      </span>
                    )}
                  </button>

                  {/* Results count */}
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">
                    <span className="text-foreground font-bold text-sm">{filtered.length}</span>
                    {" "}/{" "}
                    {productsList.length} products
                  </p>
                </div>

                {/* Active filter chips (mobile) */}
                {activeCount > 0 && (
                  <div className="lg:hidden flex flex-wrap gap-1.5 w-full">
                    {selectedCategories.map((c) => (
                      <button
                        key={c}
                        onClick={() => toggleCategory(c)}
                        className="flex items-center gap-1 text-[10px] uppercase tracking-widest bg-primary/15 border border-primary/30 text-primary px-2 py-1 hover:bg-primary/25 transition-colors"
                      >
                        {c} ×
                      </button>
                    ))}
                    {selectedBrands.map((b) => (
                      <button
                        key={b}
                        onClick={() => toggleBrand(b)}
                        className="flex items-center gap-1 text-[10px] uppercase tracking-widest bg-primary/15 border border-primary/30 text-primary px-2 py-1 hover:bg-primary/25 transition-colors"
                      >
                        {b} ×
                      </button>
                    ))}
                    {inStockOnly && (
                      <button
                        onClick={() => setInStockOnly(false)}
                        className="flex items-center gap-1 text-[10px] uppercase tracking-widest bg-primary/15 border border-primary/30 text-primary px-2 py-1 hover:bg-primary/25 transition-colors"
                      >
                        In Stock ×
                      </button>
                    )}
                  </div>
                )}

                {/* Sort dropdown */}
                <div className="flex items-center gap-2 border border-border bg-card px-3 py-2.5 text-[11px] uppercase tracking-[0.12em] hover:border-primary/50 transition-colors ml-auto">
                  <ArrowUpDown className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <select
                    id="sort-select"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="bg-transparent outline-none cursor-pointer text-foreground font-semibold"
                  >
                    <option value="latest"  className="bg-background">Latest</option>
                    <option value="low"     className="bg-background">Price: Low → High</option>
                    <option value="high"    className="bg-background">Price: High → Low</option>
                    <option value="rating"  className="bg-background">Top Rated</option>
                  </select>
                </div>
              </div>

              {/* Active filter chips (desktop) */}
              {activeCount > 0 && (
                <div className="hidden lg:flex flex-wrap gap-1.5 mb-6">
                  {selectedCategories.map((c) => (
                    <button
                      key={c}
                      onClick={() => toggleCategory(c)}
                      className="flex items-center gap-1 text-[10px] uppercase tracking-widest bg-primary/15 border border-primary/30 text-primary px-2.5 py-1 hover:bg-primary/25 transition-colors"
                    >
                      {c} ×
                    </button>
                  ))}
                  {selectedBrands.map((b) => (
                    <button
                      key={b}
                      onClick={() => toggleBrand(b)}
                      className="flex items-center gap-1 text-[10px] uppercase tracking-widest bg-primary/15 border border-primary/30 text-primary px-2.5 py-1 hover:bg-primary/25 transition-colors"
                    >
                      {b} ×
                    </button>
                  ))}
                  {inStockOnly && (
                    <button
                      onClick={() => setInStockOnly(false)}
                      className="flex items-center gap-1 text-[10px] uppercase tracking-widest bg-primary/15 border border-primary/30 text-primary px-2.5 py-1 hover:bg-primary/25 transition-colors"
                    >
                      In Stock Only ×
                    </button>
                  )}
                  {(priceMin !== GLOBAL_MIN || priceMax !== GLOBAL_MAX) && (
                    <button
                      onClick={() => { setPriceMin(GLOBAL_MIN); setPriceMax(GLOBAL_MAX); }}
                      className="flex items-center gap-1 text-[10px] uppercase tracking-widest bg-primary/15 border border-primary/30 text-primary px-2.5 py-1 hover:bg-primary/25 transition-colors"
                    >
                      PKR {priceMin.toLocaleString()} — {priceMax.toLocaleString()} ×
                    </button>
                  )}
                </div>
              )}

              {/* ── Product grid ───────────────────────────────────── */}
              <AnimatePresence mode="wait">
                {filtered.length === 0 ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-28 text-center"
                  >
                    <div className="text-5xl mb-5">🔍</div>
                    <h3 className="font-display font-bold text-xl tracking-wider text-foreground mb-2">
                      No Products Found
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 max-w-xs">
                      No products match your current filters. Try adjusting or clearing them.
                    </p>
                    <button
                      onClick={clearAll}
                      className="bg-primary text-primary-foreground px-7 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-primary/90 transition-colors"
                    >
                      Clear All Filters
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4"
                  >
                    {filtered.map((p, i) => (
                      <Link key={p.id} to="/product/$id" params={{ id: p.id }}>
                        <motion.div
                          layout
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.97 }}
                          transition={{ delay: Math.min(i * 0.04, 0.3), duration: 0.25 }}
                          className="group relative border border-border bg-card overflow-hidden hover:border-primary transition-colors duration-300"
                        >
                        {/* Discount badge */}
                        <div className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-1.5 sm:px-2 py-0.5 sm:py-1 leading-none">
                          -{disc(p)}%
                        </div>

                        {/* Out of stock badge */}
                        {!p.inStock && (
                          <div className="absolute top-2 right-2 z-10 bg-background/80 border border-border text-muted-foreground text-[8px] sm:text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 leading-none backdrop-blur">
                            Out of Stock
                          </div>
                        )}

                        {/* Wishlist btn */}
                        {p.inStock && (
                          <button
                            aria-label="Add to wishlist"
                            className="absolute top-2 right-2 z-10 w-7 h-7 sm:w-8 sm:h-8 border border-border bg-background/60 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:text-primary hover:border-primary"
                          >
                            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </button>
                        )}

                        {/* Image */}
                        <div className="relative aspect-square overflow-hidden bg-secondary/30">
                          <img
                            src={p.img}
                            alt={p.name}
                            className={`w-full h-full object-cover transition-transform duration-700 ${
                              p.inStock ? "group-hover:scale-110" : "opacity-50 grayscale"
                            }`}
                            loading="lazy"
                          />
                          {/* Add to cart overlay */}
                          {p.inStock && (
                            <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                              <button className="w-full bg-primary text-primary-foreground py-3 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                                <ShoppingCart className="w-4 h-4" />
                                Add to Cart
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Info */}
                        <div className="p-2.5 sm:p-4">
                          <div className="flex items-center gap-0.5 sm:gap-1 text-primary">
                            {Array.from({ length: 5 }).map((_, s) => (
                              <Star key={s} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-primary" />
                            ))}
                            <span className="text-[10px] sm:text-[11px] text-muted-foreground ml-0.5 sm:ml-1">({p.rating})</span>
                          </div>
                          <h3 className="mt-1.5 sm:mt-2 font-bold leading-snug line-clamp-2 min-h-[2rem] sm:min-h-[2.4rem] text-xs sm:text-sm">
                            {p.name}
                          </h3>
                          <div className="hidden sm:block mt-1 text-[10px] text-muted-foreground uppercase tracking-widest">
                            {p.brand} · {p.cat}
                          </div>
                          <div className="mt-2 sm:mt-3 flex items-baseline gap-1 sm:gap-2 flex-wrap">
                            <span className={`font-bold text-xs sm:text-sm ${p.inStock ? "text-primary" : "text-muted-foreground"}`}>
                              PKR {p.price.toLocaleString()}
                            </span>
                            <span className="text-[10px] sm:text-xs text-muted-foreground line-through">
                              PKR {p.old.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Load More Button */}
              {filtered.length < totalFilteredCount && (
                <div className="mt-12 text-center">
                  <button
                    onClick={() => setDisplayedCount(prev => prev + 30)}
                    className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition"
                  >
                    Load More Products
                  </button>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Showing {filtered.length} of {totalFilteredCount} products
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
