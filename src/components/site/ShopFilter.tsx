import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, RotateCcw, SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

interface ShopFilterProps {
  categories: string[];
  selectedCategories: string[];
  priceMin: number;
  priceMax: number;
  globalMin: number;
  globalMax: number;
  inStockOnly: boolean;
  activeCount: number;
  isOpen: boolean;
  onClose: () => void;
  onCategoryToggle: (cat: string) => void;
  onPriceChange: (min: number, max: number) => void;
  onInStockChange: (val: boolean) => void;
  onClearAll: () => void;
}

/* ── Collapsible section ─────────────────────────────────────────── */
function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-[11px] font-display font-bold tracking-[0.15em] uppercase text-foreground hover:text-primary transition-colors"
      >
        {title}
        <ChevronDown
          className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="section-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 space-y-0.5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Styled checkbox row ─────────────────────────────────────────── */
function FilterCheckbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  // Input is nested inside label — browser associates them natively.
  // No id/htmlFor needed → no SSR hydration mismatch.
  return (
    <label className="flex items-center gap-3 py-1.5 cursor-pointer group select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      {/* Custom visual checkbox */}
      <span
        className={`w-4 h-4 flex-shrink-0 border transition-all duration-150 flex items-center justify-center ${
          checked
            ? "bg-primary border-primary"
            : "border-border group-hover:border-primary/50 bg-secondary/40"
        }`}
      >
        {checked && (
          <motion.svg
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-2.5 h-2.5 text-primary-foreground"
            viewBox="0 0 10 8"
            fill="none"
          >
            <path
              d="M1 4L3.5 6.5L9 1"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        )}
      </span>
      <span
        className={`text-sm transition-colors leading-none ${
          checked ? "text-foreground font-medium" : "text-muted-foreground group-hover:text-foreground"
        }`}
      >
        {label}
      </span>
    </label>
  );
}

/* ── Toggle switch ───────────────────────────────────────────────── */
function ToggleSwitch({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={`relative w-10 h-5 transition-colors duration-200 flex-shrink-0 ${
        checked ? "bg-primary" : "bg-secondary border border-border"
      }`}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className="absolute top-0.5 w-4 h-4 bg-foreground"
        style={{ left: checked ? "calc(100% - 1.125rem)" : "0.125rem" }}
      />
    </button>
  );
}

/* ── Filter sidebar content ──────────────────────────────────────── */
function FilterContent({
  categories,
  selectedCategories,
  priceMin,
  priceMax,
  globalMin,
  globalMax,
  inStockOnly,
  activeCount,
  onClose,
  onCategoryToggle,
  onPriceChange,
  onInStockChange,
  onClearAll,
  mobile = false,
}: ShopFilterProps & { mobile?: boolean }) {
  const pct = (v: number) => ((v - globalMin) / (globalMax - globalMin)) * 100;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border flex-shrink-0">
        <div className="flex items-center gap-2.5">
          <SlidersHorizontal className="w-3.5 h-3.5 text-primary" />
          <span className="font-display font-bold text-[11px] tracking-[0.18em] uppercase text-foreground">
            Filters
          </span>
          {activeCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-primary text-primary-foreground text-[9px] font-bold px-1.5 py-0.5 leading-none min-w-[18px] text-center"
            >
              {activeCount}
            </motion.span>
          )}
        </div>
        <div className="flex items-center gap-3">
          {activeCount > 0 && (
            <button
              onClick={onClearAll}
              className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              Clear All
            </button>
          )}
          {mobile && (
            <button onClick={onClose} className="p-1 hover:text-primary transition-colors">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto px-5 scrollbar-thin">
        {/* In-Stock toggle */}
        <div className="border-b border-border py-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-display font-bold tracking-[0.15em] uppercase text-foreground">
              In Stock Only
            </span>
            <ToggleSwitch checked={inStockOnly} onChange={() => onInStockChange(!inStockOnly)} />
          </div>
        </div>

        {/* Price Range */}
        <FilterSection title="Price Range">
          <div className="space-y-3 pt-1">
            {/* Visual bar */}
            <div className="relative h-1 bg-secondary mx-0.5">
              <div
                className="absolute h-full bg-primary transition-all duration-150"
                style={{ left: `${pct(priceMin)}%`, right: `${100 - pct(priceMax)}%` }}
              />
              {/* Thumb markers */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary border-2 border-primary-foreground"
                style={{ left: `${pct(priceMin)}%`, transform: "translate(-50%, -50%)" }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary border-2 border-primary-foreground"
                style={{ left: `${pct(priceMax)}%`, transform: "translate(-50%, -50%)" }}
              />
            </div>
            {/* Labels */}
            <div className="flex justify-between text-[10px] text-muted-foreground">
              <span>PKR {globalMin.toLocaleString()}</span>
              <span>PKR {globalMax.toLocaleString()}</span>
            </div>
            {/* Inputs */}
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <p className="text-[9px] text-muted-foreground uppercase tracking-widest mb-1">Min (PKR)</p>
                <input
                  type="number"
                  value={priceMin}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    if (!isNaN(val) && val >= 0 && val < priceMax)
                      onPriceChange(val, priceMax);
                  }}
                  onBlur={(e) => {
                    const val = Number(e.target.value);
                    onPriceChange(Math.max(globalMin, Math.min(val, priceMax - 1)), priceMax);
                  }}
                  className="w-full bg-secondary/60 border border-border px-2 py-1.5 text-xs outline-none focus:border-primary transition-colors text-foreground"
                />
              </div>
              <span className="text-muted-foreground text-xs mt-4">—</span>
              <div className="flex-1">
                <p className="text-[9px] text-muted-foreground uppercase tracking-widest mb-1">Max (PKR)</p>
                <input
                  type="number"
                  value={priceMax}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    if (!isNaN(val) && val > priceMin)
                      onPriceChange(priceMin, val);
                  }}
                  onBlur={(e) => {
                    const val = Number(e.target.value);
                    onPriceChange(priceMin, Math.min(globalMax, Math.max(val, priceMin + 1)));
                  }}
                  className="w-full bg-secondary/60 border border-border px-2 py-1.5 text-xs outline-none focus:border-primary transition-colors text-foreground"
                />
              </div>
            </div>
          </div>
        </FilterSection>

        {/* Category */}
        <FilterSection title="Category">
          {categories.map((cat) => (
            <FilterCheckbox
              key={cat}
              label={cat}
              checked={selectedCategories.includes(cat)}
              onChange={() => onCategoryToggle(cat)}
            />
          ))}
        </FilterSection>
      </div>

      {/* Mobile apply button */}
      {mobile && (
        <div className="flex-shrink-0 p-4 border-t border-border">
          <button
            onClick={onClose}
            className="w-full bg-primary text-primary-foreground py-3 text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-primary/90 transition-colors"
          >
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
}

/* ── Main export ─────────────────────────────────────────────────── */
export function ShopFilter(props: ShopFilterProps) {
  return (
    <>
      {/* ── Desktop: sticky sidebar ─────────────────────────────── */}
      <aside className="hidden lg:flex flex-col w-64 xl:w-72 flex-shrink-0 border-r border-border bg-card/40 sticky top-20 self-start">
        <FilterContent {...props} mobile={false} />
      </aside>

      {/* ── Mobile: overlay + slide-in drawer ───────────────────── */}
      <AnimatePresence>
        {props.isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={props.onClose}
            />
            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed inset-y-0 left-0 w-80 max-w-[88vw] bg-card border-r border-border z-50 lg:hidden flex flex-col"
            >
              <FilterContent {...props} mobile={true} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
