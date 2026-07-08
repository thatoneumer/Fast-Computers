import { Link, useRouter } from "@tanstack/react-router";
import { Search, Heart, User, ShoppingCart, Menu, X, LogOut, Package, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { SearchResults } from "./SearchResults";
import { useAuth } from "@/contexts/AuthContext";
import { getProductsFn } from "@/functions/products";
import { useCartWishlist } from "@/contexts/CartWishlistContext";

const links = [
  { label: "Home", to: "/" as const },
  { label: "Categories", to: "/categories" as const },
  { label: "Shop", to: "/shop" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const accountDropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const isHome = router.state.location.pathname === "/";
  const { user, logout } = useAuth();
  const { cart, wishlist } = useCartWishlist();
  const [productsList, setProductsList] = useState<any[]>([]);

  useEffect(() => {
    getProductsFn().then((res) => {
      if (res) setProductsList(res);
    }).catch(err => console.error("Error loading products in header:", err));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
      if (accountDropdownRef.current && !accountDropdownRef.current.contains(event.target as Node)) {
        setAccountDropdownOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setAccountDropdownOpen(false);
      }
    };

    if (searchOpen || accountDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [searchOpen, accountDropdownOpen]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 border-b border-border/60 transition-colors duration-300 ${
      scrolled ? "bg-background" : (isHome ? "bg-transparent" : "bg-background")
    }`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
      }`}>
        <Link to="/" className="flex items-center gap-1.5 sm:gap-2 group">
          <span className="text-xl sm:text-2xl font-display font-bold tracking-widest">
            <span className="text-foreground">F</span>
            <span className="text-primary">/</span>
            <span className="text-foreground">AST</span>
          </span>
          <span className="hidden sm:block text-xs tracking-[0.3em] text-muted-foreground border-l border-border pl-2">COMPUTERS</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase">
          {links.map((l) => (
            <Link
              key={l.label} to={l.to}
              className="relative group text-foreground/80 hover:text-foreground transition"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
          {user && (user.role === 'admin' || user.email.toLowerCase().startsWith('admin@')) && (
            <Link
              to="/admin"
              className="relative group text-primary font-bold hover:text-primary transition animate-glow-pulse"
              activeProps={{ className: "text-primary font-bold" }}
            >
              Admin Panel
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
            </Link>
          )}
        </nav>
        <div className="flex items-center gap-2">
          <div ref={searchRef} className="relative hidden md:block">
            <div 
              className={`flex items-center gap-2 border rounded-sm px-3 py-2 w-56 transition-all ${
                searchOpen 
                  ? "bg-card border-primary red-border-glow" 
                  : "bg-secondary/60 border-border"
              }`}
            >
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                placeholder="Search products…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchOpen(true)}
                className="bg-transparent outline-none text-sm w-full placeholder:text-muted-foreground"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSearchOpen(false);
                  }}
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            {searchOpen && (
              <SearchResults query={searchQuery} onClose={() => setSearchOpen(false)} productsList={productsList} />
            )}
          </div>
          <Link to="/wishlist" className="relative p-2 hover:text-primary transition" aria-label="Wishlist">
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[8px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full animate-scale-in">
                {wishlist.length}
              </span>
            )}
          </Link>
          {user ? (
            <div ref={accountDropdownRef} className="relative hidden md:block">
              <button
                onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
                className="flex items-center gap-2 p-2 hover:text-primary transition"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
                <ChevronDown className={`w-4 h-4 transition-transform ${accountDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {accountDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-sm shadow-lg z-50">
                  <div className="p-3 border-b border-border">
                    <div className="text-xs text-muted-foreground">Signed in as</div>
                    <div className="font-bold text-foreground text-sm truncate">{user.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{user.email}</div>
                  </div>
                  <div className="p-1">
                    <Link
                      to="/orders"
                      onClick={() => setAccountDropdownOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-secondary/50 transition rounded-sm"
                    >
                      <Package className="w-4 h-4" />
                      My Orders
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setAccountDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-secondary/50 transition rounded-sm text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/auth" className="hidden md:block p-2 hover:text-primary transition" aria-label="Account"><User className="w-5 h-5" /></Link>
          )}
          <button 
            className="md:hidden p-2 hover:text-primary transition" 
            aria-label="Search"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="w-5 h-5" />
          </button>
          <Link to="/cart" className="relative p-2 hover:text-primary transition" aria-label="Cart">
            <ShoppingCart className="w-5 h-5" />
            {cart.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[8px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full animate-scale-in">
                {cart.length}
              </span>
            )}
          </Link>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)}><Menu className="w-5 h-5" /></button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95">
          <nav className="px-4 sm:px-6 py-4 flex flex-col gap-3 text-sm uppercase font-semibold tracking-wide">
            {links.map((l) => (
              <Link key={l.label} to={l.to} onClick={() => setOpen(false)}
                className="py-1 hover:text-primary" activeProps={{ className: "text-primary" }}>
                {l.label}
              </Link>
            ))}
            {user && (user.role === 'admin' || user.email.toLowerCase().startsWith('admin@')) && (
              <Link to="/admin" onClick={() => setOpen(false)}
                className="py-1 text-primary font-bold hover:text-primary animate-glow-pulse" activeProps={{ className: "text-primary font-bold" }}>
                Admin Panel
              </Link>
            )}
            {user ? (
              <>
                <div className="mt-2 pt-4 border-t border-border">
                  <div className="text-xs text-muted-foreground mb-2">Signed in as</div>
                  <div className="font-bold text-foreground">{user.name}</div>
                  <div className="text-xs text-muted-foreground">{user.email}</div>
                </div>
                <Link
                  to="/orders"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center gap-2 py-3 font-bold uppercase tracking-widest text-sm hover:text-primary transition"
                >
                  <Package className="w-4 h-4" /> My Orders
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="mt-2 inline-flex items-center justify-center gap-2 border border-border py-3 font-bold uppercase tracking-widest text-sm hover:border-primary hover:text-primary transition"
                >
                  <LogOut className="w-4 h-4" /> Logout
                </button>
              </>
            ) : (
              <Link 
                to="/auth" 
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 font-bold uppercase tracking-widest text-sm hover:brightness-110 transition"
              >
                <User className="w-4 h-4" /> Login
              </Link>
            )}
          </nav>
        </div>
      )}

      {/* Mobile Search Modal */}
      {searchOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
          <div className="px-6 py-4">
            <div className="flex items-center gap-3 bg-card border border-border rounded-sm px-4 py-3 red-border-glow">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                placeholder="Search products…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="bg-transparent outline-none text-sm flex-1 placeholder:text-muted-foreground"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-muted-foreground hover:text-foreground transition"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
              <button
                onClick={() => setSearchOpen(false)}
                className="text-muted-foreground hover:text-foreground transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4">
              <SearchResults query={searchQuery} onClose={() => setSearchOpen(false)} isMobile={true} productsList={productsList} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
