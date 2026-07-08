import { Link, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Search, X, ArrowRight, Package, Monitor, Keyboard, Headphones, MousePointer2, Cpu } from "lucide-react";
import { products, sections, type Product } from "@/lib/products-data";
import { useState, useEffect, useRef } from "react";

interface SearchResult {
  type: "section" | "product";
  data: any;
}

export function SearchResults({ query, onClose, isMobile = false, productsList = [] }: { query: string; onClose: () => void; isMobile?: boolean; productsList?: any[] }) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchLower = query.toLowerCase();
    const found: SearchResult[] = [];

    // Search sections
    sections.forEach(section => {
      if (section.label.toLowerCase().includes(searchLower) || 
          section.keywords.some(k => k.includes(searchLower))) {
        found.push({ type: "section", data: section });
      }
    });

    // Search products
    const listToSearch = productsList.length > 0 ? productsList : products;
    listToSearch.forEach(product => {
      if (product.name.toLowerCase().includes(searchLower) ||
          product.brand.toLowerCase().includes(searchLower) ||
          product.cat.toLowerCase().includes(searchLower) ||
          product.cat.toLowerCase().replace(/\s+/g, "").includes(searchLower.replace(/\s+/g, ""))) {
        found.push({ type: "product", data: product });
      }
    });

    // Limit results
    setResults(found.slice(0, 8));
  }, [query, productsList]);

  const handleResultClick = (result: SearchResult) => {
    onClose();
    if (result.type === "section") {
      if (result.data.id === "build") {
        window.location.href = "/#build";
      } else if (result.data.id === "shop") {
        navigate({ to: "/shop", search: { category: undefined } });
      } else if (result.data.id === "categories") {
        navigate({ to: "/categories" });
      }
    } else if (result.type === "product") {
      navigate({ to: "/product/$id", params: { id: result.data.id } });
    }
  };

  const getCategoryIcon = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("monitor")) return Monitor;
    if (cat.includes("keyboard")) return Keyboard;
    if (cat.includes("headset") || cat.includes("headphone")) return Headphones;
    if (cat.includes("mouse")) return MousePointer2;
    if (cat.includes("processor") || cat.includes("cpu")) return Cpu;
    return Package;
  };

  if (!query.trim()) return null;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`bg-card border border-border rounded-lg shadow-2xl overflow-hidden z-50 red-border-glow ${
        isMobile ? "w-full" : "absolute top-full left-0 right-0 mt-2"
      }`}
      style={isMobile ? {} : { width: "224px" }}
    >
      <div className="p-3 border-b border-border bg-background/50">
        <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest">
          <Search className="w-3 h-3" />
          <span>{results.length} results for "{query}"</span>
        </div>
      </div>

      <div className="max-h-96 overflow-y-auto">
        <AnimatePresence mode="wait">
          {results.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-8 text-center"
            >
              <Package className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
              <div className="text-sm text-muted-foreground">No results found</div>
            </motion.div>
          ) : (
            <div className="p-2">
              {results.map((result, index) => (
                <motion.div
                  key={result.type === "section" ? result.data.id : result.data.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ delay: index * 0.03 }}
                  onClick={() => handleResultClick(result)}
                  className="group cursor-pointer"
                >
                  {result.type === "section" ? (
                    <div className="flex items-center gap-3 p-3 rounded-md hover:bg-primary/10 transition border border-transparent hover:border-primary/30">
                      <div className="w-8 h-8 flex items-center justify-center bg-primary/20 text-primary rounded">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold uppercase tracking-wide text-foreground group-hover:text-primary transition">
                          {result.data.label}
                        </div>
                        <div className="text-xs text-muted-foreground">Section</div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 p-3 rounded-md hover:bg-primary/10 transition border border-transparent hover:border-primary/30">
                      <div className="relative w-12 h-12 flex-shrink-0 overflow-hidden rounded bg-background border border-border">
                        <img 
                          src={result.data.img} 
                          alt={result.data.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-foreground group-hover:text-primary transition truncate">
                          {result.data.name}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-muted-foreground">{result.data.brand}</span>
                          <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                          <span className="text-xs text-muted-foreground">{result.data.cat}</span>
                        </div>
                        <div className="text-xs font-bold text-primary mt-1">
                          PKR {result.data.price.toLocaleString()}
                        </div>
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center bg-primary/20 text-primary rounded opacity-0 group-hover:opacity-100 transition">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>

      {results.length > 0 && (
        <div className="p-3 border-t border-border bg-background/50">
          <Link
            to="/shop"
            search={{ category: undefined }}
            onClick={onClose}
            className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary hover:text-primary/80 transition"
          >
            View All Results <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      )}
    </motion.div>
  );
}
