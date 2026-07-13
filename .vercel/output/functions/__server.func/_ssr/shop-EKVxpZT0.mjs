import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-C_YLlau3.mjs";
import { P as PageHero } from "./PageHero-GT7BXNsf.mjs";
import { R as Route$c, u as useCartWishlist } from "./router-B3L3dKbz.mjs";
import "../_libs/seroval.mjs";
import "../_libs/sweetalert2.mjs";
import { e as SlidersHorizontal, f as ArrowUpDown, H as Heart, E as Eye, S as Star, R as RotateCcw, X, C as ChevronDown } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "async_hooks";
import "stream";
import "crypto";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-Y9zJBdke.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "./email-CrmUIKV1.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function FilterSection({ title, children }) {
  const [open, setOpen] = reactExports.useState(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border last:border-b-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setOpen(!open),
        className: "w-full flex items-center justify-between py-4 text-[11px] font-display font-bold tracking-[0.15em] uppercase text-foreground hover:text-primary transition-colors",
        children: [
          title,
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              className: `w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: { duration: 0.2, ease: "easeInOut" },
        className: "overflow-hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-4 space-y-0.5", children })
      },
      "section-content"
    ) })
  ] });
}
function FilterCheckbox({
  label,
  checked,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 py-1.5 cursor-pointer group select-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "checkbox",
        checked,
        onChange,
        className: "sr-only"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: `w-4 h-4 flex-shrink-0 border transition-all duration-150 flex items-center justify-center ${checked ? "bg-primary border-primary" : "border-border group-hover:border-primary/50 bg-secondary/40"}`,
        children: checked && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.svg,
          {
            initial: { scale: 0 },
            animate: { scale: 1 },
            className: "w-2.5 h-2.5 text-primary-foreground",
            viewBox: "0 0 10 8",
            fill: "none",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                d: "M1 4L3.5 6.5L9 1",
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: `text-sm transition-colors leading-none ${checked ? "text-foreground font-medium" : "text-muted-foreground group-hover:text-foreground"}`,
        children: label
      }
    )
  ] });
}
function ToggleSwitch({ checked, onChange }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      role: "switch",
      "aria-checked": checked,
      onClick: onChange,
      className: `relative w-10 h-5 transition-colors duration-200 flex-shrink-0 ${checked ? "bg-primary" : "bg-secondary border border-border"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.span,
        {
          layout: true,
          transition: { type: "spring", stiffness: 500, damping: 35 },
          className: "absolute top-0.5 w-4 h-4 bg-foreground",
          style: { left: checked ? "calc(100% - 1.125rem)" : "0.125rem" }
        }
      )
    }
  );
}
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
  mobile = false
}) {
  const pct = (v) => (v - globalMin) / (globalMax - globalMin) * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-border flex-shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "w-3.5 h-3.5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-[11px] tracking-[0.18em] uppercase text-foreground", children: "Filters" }),
        activeCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            initial: { scale: 0 },
            animate: { scale: 1 },
            className: "bg-primary text-primary-foreground text-[9px] font-bold px-1.5 py-0.5 leading-none min-w-[18px] text-center",
            children: activeCount
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        activeCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: onClearAll,
            className: "flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-3 h-3" }),
              "Clear All"
            ]
          }
        ),
        mobile && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "p-1 hover:text-primary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto px-5 scrollbar-thin", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-display font-bold tracking-[0.15em] uppercase text-foreground", children: "In Stock Only" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleSwitch, { checked: inStockOnly, onChange: () => onInStockChange(!inStockOnly) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FilterSection, { title: "Price Range", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-1 bg-secondary mx-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute h-full bg-primary transition-all duration-150",
              style: { left: `${pct(priceMin)}%`, right: `${100 - pct(priceMax)}%` }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary border-2 border-primary-foreground",
              style: { left: `${pct(priceMin)}%`, transform: "translate(-50%, -50%)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary border-2 border-primary-foreground",
              style: { left: `${pct(priceMax)}%`, transform: "translate(-50%, -50%)" }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "PKR ",
            globalMin.toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "PKR ",
            globalMax.toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground uppercase tracking-widest mb-1", children: "Min (PKR)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                value: priceMin,
                onChange: (e) => {
                  const val = Number(e.target.value);
                  if (!isNaN(val) && val >= 0 && val < priceMax)
                    onPriceChange(val, priceMax);
                },
                onBlur: (e) => {
                  const val = Number(e.target.value);
                  onPriceChange(Math.max(globalMin, Math.min(val, priceMax - 1)), priceMax);
                },
                className: "w-full bg-secondary/60 border border-border px-2 py-1.5 text-xs outline-none focus:border-primary transition-colors text-foreground"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs mt-4", children: "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] text-muted-foreground uppercase tracking-widest mb-1", children: "Max (PKR)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                value: priceMax,
                onChange: (e) => {
                  const val = Number(e.target.value);
                  if (!isNaN(val) && val > priceMin)
                    onPriceChange(priceMin, val);
                },
                onBlur: (e) => {
                  const val = Number(e.target.value);
                  onPriceChange(priceMin, Math.min(globalMax, Math.max(val, priceMin + 1)));
                },
                className: "w-full bg-secondary/60 border border-border px-2 py-1.5 text-xs outline-none focus:border-primary transition-colors text-foreground"
              }
            )
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FilterSection, { title: "Category", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        FilterCheckbox,
        {
          label: cat,
          checked: selectedCategories.includes(cat),
          onChange: () => onCategoryToggle(cat)
        },
        cat
      )) })
    ] }),
    mobile && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 p-4 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: onClose,
        className: "w-full bg-primary text-primary-foreground py-3 text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-primary/90 transition-colors",
        children: "Apply Filters"
      }
    ) })
  ] });
}
function ShopFilter(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "hidden lg:flex flex-col w-64 xl:w-72 flex-shrink-0 border-r border-border bg-card/40 sticky top-20 self-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FilterContent, { ...props, mobile: false }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: props.isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.2 },
          className: "fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden",
          onClick: props.onClose
        },
        "backdrop"
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { x: "-100%" },
          animate: { x: 0 },
          exit: { x: "-100%" },
          transition: { type: "spring", damping: 28, stiffness: 280 },
          className: "fixed inset-y-0 left-0 w-80 max-w-[88vw] bg-card border-r border-border z-50 lg:hidden flex flex-col",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(FilterContent, { ...props, mobile: true })
        },
        "drawer"
      )
    ] }) })
  ] });
}
const disc = (p) => Math.round((1 - p.price / p.old) * 100);
function ShopPage() {
  const productsList = Route$c.useLoaderData();
  const {
    toggleWishlist,
    isInWishlist
  } = useCartWishlist();
  const search = Route$c.useSearch();
  const categoryParam = search.category;
  const categoriesParam = search.categories;
  const initialCategories = reactExports.useMemo(() => {
    if (categoriesParam) return categoriesParam.split(",").map((c) => c.trim()).filter(Boolean);
    if (categoryParam) return [categoryParam];
    return [];
  }, [categoriesParam, categoryParam]);
  const ALL_CATEGORIES = reactExports.useMemo(() => [...new Set(productsList.map((p) => p.cat))].sort(), [productsList]);
  const GLOBAL_MIN = reactExports.useMemo(() => productsList.length ? Math.min(...productsList.map((p) => p.price)) : 0, [productsList]);
  const GLOBAL_MAX = reactExports.useMemo(() => productsList.length ? Math.max(...productsList.map((p) => p.price)) : 1e6, [productsList]);
  const [sort, setSort] = reactExports.useState("latest");
  const [selectedCategories, setSelectedCategories] = reactExports.useState(initialCategories);
  const [priceMin, setPriceMin] = reactExports.useState(0);
  const [priceMax, setPriceMax] = reactExports.useState(1e6);
  const [inStockOnly, setInStockOnly] = reactExports.useState(false);
  const [filterOpen, setFilterOpen] = reactExports.useState(false);
  const [displayedCount, setDisplayedCount] = reactExports.useState(30);
  reactExports.useEffect(() => {
    setPriceMin(GLOBAL_MIN);
    setPriceMax(GLOBAL_MAX);
  }, [GLOBAL_MIN, GLOBAL_MAX]);
  reactExports.useEffect(() => {
    if (categoriesParam) {
      const cats = categoriesParam.split(",").map((c) => c.trim()).filter(Boolean);
      setSelectedCategories(cats);
    } else if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
  }, [categoryParam, categoriesParam]);
  const filtered = reactExports.useMemo(() => {
    let list = [...productsList];
    if (selectedCategories.length) list = list.filter((p) => selectedCategories.includes(p.cat));
    list = list.filter((p) => p.price >= priceMin && p.price <= priceMax);
    if (inStockOnly) list = list.filter((p) => p.inStock);
    if (sort === "low") list.sort((a, b) => a.price - b.price);
    if (sort === "high") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list.slice(0, displayedCount);
  }, [productsList, sort, selectedCategories, priceMin, priceMax, inStockOnly, displayedCount]);
  const totalFilteredCount = reactExports.useMemo(() => {
    let list = [...productsList];
    if (selectedCategories.length) list = list.filter((p) => selectedCategories.includes(p.cat));
    list = list.filter((p) => p.price >= priceMin && p.price <= priceMax);
    if (inStockOnly) list = list.filter((p) => p.inStock);
    return list.length;
  }, [productsList, selectedCategories, priceMin, priceMax, inStockOnly]);
  const activeCount = selectedCategories.length + (inStockOnly ? 1 : 0) + (priceMin !== GLOBAL_MIN || priceMax !== GLOBAL_MAX ? 1 : 0);
  const toggleCategory = (cat) => setSelectedCategories((prev) => prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]);
  const clearAll = () => {
    setSelectedCategories([]);
    setPriceMin(GLOBAL_MIN);
    setPriceMax(GLOBAL_MAX);
    setInStockOnly(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { crumb: "Shop", kicker: "Full Catalog", title: "Shop Catalog" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShopFilter, { categories: ALL_CATEGORIES, selectedCategories, priceMin, priceMax, globalMin: GLOBAL_MIN, globalMax: GLOBAL_MAX, inStockOnly, activeCount, isOpen: filterOpen, onClose: () => setFilterOpen(false), onCategoryToggle: toggleCategory, onPriceChange: (min, max) => {
          setPriceMin(min);
          setPriceMax(max);
        }, onInStockChange: setInStockOnly, onClearAll: clearAll }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 px-5 lg:px-8 py-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 mb-8 pb-5 border-b border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { id: "open-filters-btn", onClick: () => setFilterOpen(true), className: "lg:hidden flex items-center gap-2 border border-border bg-card px-4 py-2.5 text-[11px] uppercase tracking-[0.12em] font-semibold hover:border-primary hover:text-primary transition-colors relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "w-3.5 h-3.5" }),
                "Filters",
                activeCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-primary text-primary-foreground text-[9px] font-bold px-1.5 py-0.5 leading-none", children: activeCount })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground uppercase tracking-widest", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-bold text-sm", children: filtered.length }),
                " ",
                "/",
                " ",
                productsList.length,
                " products"
              ] })
            ] }),
            activeCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden flex flex-wrap gap-1.5 w-full", children: [
              selectedCategories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toggleCategory(c), className: "flex items-center gap-1 text-[10px] uppercase tracking-widest bg-primary/15 border border-primary/30 text-primary px-2 py-1 hover:bg-primary/25 transition-colors", children: [
                c,
                " ×"
              ] }, c)),
              inStockOnly && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setInStockOnly(false), className: "flex items-center gap-1 text-[10px] uppercase tracking-widest bg-primary/15 border border-primary/30 text-primary px-2 py-1 hover:bg-primary/25 transition-colors", children: "In Stock ×" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border border-border bg-card px-3 py-2.5 text-[11px] uppercase tracking-[0.12em] hover:border-primary/50 transition-colors ml-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpDown, { className: "w-3.5 h-3.5 text-primary flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "sort-select", value: sort, onChange: (e) => setSort(e.target.value), className: "bg-transparent outline-none cursor-pointer text-foreground font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "latest", className: "bg-background", children: "Latest" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "low", className: "bg-background", children: "Price: Low → High" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "high", className: "bg-background", children: "Price: High → Low" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "rating", className: "bg-background", children: "Top Rated" })
              ] })
            ] })
          ] }),
          activeCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex flex-wrap gap-1.5 mb-6", children: [
            selectedCategories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toggleCategory(c), className: "flex items-center gap-1 text-[10px] uppercase tracking-widest bg-primary/15 border border-primary/30 text-primary px-2.5 py-1 hover:bg-primary/25 transition-colors", children: [
              c,
              " ×"
            ] }, c)),
            inStockOnly && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setInStockOnly(false), className: "flex items-center gap-1 text-[10px] uppercase tracking-widest bg-primary/15 border border-primary/30 text-primary px-2.5 py-1 hover:bg-primary/25 transition-colors", children: "In Stock Only ×" }),
            (priceMin !== GLOBAL_MIN || priceMax !== GLOBAL_MAX) && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
              setPriceMin(GLOBAL_MIN);
              setPriceMax(GLOBAL_MAX);
            }, className: "flex items-center gap-1 text-[10px] uppercase tracking-widest bg-primary/15 border border-primary/30 text-primary px-2.5 py-1 hover:bg-primary/25 transition-colors", children: [
              "PKR ",
              priceMin.toLocaleString(),
              " — ",
              priceMax.toLocaleString(),
              " ×"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 12
          }, animate: {
            opacity: 1,
            y: 0
          }, exit: {
            opacity: 0
          }, className: "flex flex-col items-center justify-center py-28 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-5", children: "🔍" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl tracking-wider text-foreground mb-2", children: "No Products Found" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6 max-w-xs", children: "No products match your current filters. Try adjusting or clearing them." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clearAll, className: "bg-primary text-primary-foreground px-7 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-primary/90 transition-colors", children: "Clear All Filters" })
          ] }, "empty") : /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            opacity: 0
          }, animate: {
            opacity: 1
          }, exit: {
            opacity: 0
          }, className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4", children: filtered.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/product/$id", params: {
            id: p.id
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { layout: true, initial: {
            opacity: 0,
            y: 18
          }, animate: {
            opacity: 1,
            y: 0
          }, exit: {
            opacity: 0,
            scale: 0.97
          }, transition: {
            delay: Math.min(i * 0.04, 0.3),
            duration: 0.25
          }, className: "group relative border border-border bg-card overflow-hidden hover:border-primary transition-colors duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-2 left-2 z-10 bg-primary text-primary-foreground text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-1.5 sm:px-2 py-0.5 sm:py-1 leading-none", children: [
              "-",
              disc(p),
              "%"
            ] }),
            !p.inStock && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 right-2 z-10 bg-background/80 border border-border text-muted-foreground text-[8px] sm:text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 leading-none backdrop-blur", children: "Out of Stock" }),
            p.inStock && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(p);
            }, "aria-label": isInWishlist(p.id) ? "Remove from wishlist" : "Add to wishlist", className: `absolute top-2 right-2 z-10 w-7 h-7 sm:w-8 sm:h-8 border backdrop-blur flex items-center justify-center transition-all ${isInWishlist(p.id) ? "bg-background border-primary text-primary opacity-100" : "border-border bg-background/60 opacity-0 group-hover:opacity-100 hover:text-primary hover:border-primary"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: `w-3.5 h-3.5 sm:w-4 sm:h-4 ${isInWishlist(p.id) ? "fill-primary text-primary" : ""}` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden bg-secondary/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.name, className: `w-full h-full object-cover transition-transform duration-700 ${p.inStock ? "group-hover:scale-110" : "opacity-50 grayscale"}`, loading: "lazy" }),
              p.inStock && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full bg-primary text-primary-foreground py-3 text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" }),
                "View Details"
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-2.5 sm:p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5 sm:gap-1 text-primary", children: [
                Array.from({
                  length: 5
                }).map((_, s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-2.5 h-2.5 sm:w-3 sm:h-3 fill-primary" }, s)),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] sm:text-[11px] text-muted-foreground ml-0.5 sm:ml-1", children: [
                  "(",
                  p.rating,
                  ")"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1.5 sm:mt-2 font-bold leading-snug line-clamp-2 min-h-[2rem] sm:min-h-[2.4rem] text-xs sm:text-sm", children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:block mt-1 text-[10px] text-muted-foreground uppercase tracking-widest", children: [
                p.brand,
                " · ",
                p.cat
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 sm:mt-3 flex items-baseline gap-1 sm:gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-bold text-xs sm:text-sm ${p.inStock ? "text-primary" : "text-muted-foreground"}`, children: [
                  "PKR ",
                  p.price.toLocaleString()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] sm:text-xs text-muted-foreground line-through", children: [
                  "PKR ",
                  p.old.toLocaleString()
                ] })
              ] })
            ] })
          ] }) }, p.id)) }, "grid") }),
          filtered.length < totalFilteredCount && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setDisplayedCount((prev) => prev + 30), className: "inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition", children: "Load More Products" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs text-muted-foreground", children: [
              "Showing ",
              filtered.length,
              " of ",
              totalFilteredCount,
              " products"
            ] })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ShopPage as component
};
