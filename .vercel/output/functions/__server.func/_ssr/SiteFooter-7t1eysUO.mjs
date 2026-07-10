import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useRouter, L as Link, d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { a as useAuth, u as useCartWishlist, q as getProductsFn } from "./router-DCoJxg4b.mjs";
import { b as Search, X, H as Heart, U as User, C as ChevronDown, P as Package, L as LogOut, a as ShoppingCart, M as Menu, I as Instagram, Y as Youtube, c as Twitter, F as Facebook, A as ArrowRight } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence } from "../_libs/framer-motion.mjs";
const products = [];
const sections = [
  { id: "build", label: "Custom Build", keywords: ["custom", "build", "pc", "rig", "configurator", "gaming pc"] },
  { id: "shop", label: "Shop", keywords: ["shop", "products", "catalog", "store"] },
  { id: "categories", label: "Categories", keywords: ["category", "categories", "browse"] }
];
function SearchResults({ query, onClose, isMobile = false, productsList = [] }) {
  const [results, setResults] = reactExports.useState([]);
  const navigate = useNavigate();
  const containerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const searchLower = query.toLowerCase();
    const found = [];
    sections.forEach((section) => {
      if (section.label.toLowerCase().includes(searchLower) || section.keywords.some((k) => k.includes(searchLower))) {
        found.push({ type: "section", data: section });
      }
    });
    const listToSearch = productsList.length > 0 ? productsList : products;
    listToSearch.forEach((product) => {
      if (product.name.toLowerCase().includes(searchLower) || product.brand.toLowerCase().includes(searchLower) || product.cat.toLowerCase().includes(searchLower) || product.cat.toLowerCase().replace(/\s+/g, "").includes(searchLower.replace(/\s+/g, ""))) {
        found.push({ type: "product", data: product });
      }
    });
    setResults(found.slice(0, 8));
  }, [query, productsList]);
  const handleResultClick = (result) => {
    onClose();
    if (result.type === "section") {
      if (result.data.id === "build") {
        window.location.href = "/#build";
      } else if (result.data.id === "shop") {
        navigate({ to: "/shop", search: { category: void 0 } });
      } else if (result.data.id === "categories") {
        navigate({ to: "/categories" });
      }
    } else if (result.type === "product") {
      navigate({ to: "/product/$id", params: { id: result.data.id } });
    }
  };
  if (!query.trim()) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref: containerRef,
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
      className: `bg-card border border-border rounded-lg shadow-2xl overflow-hidden z-50 red-border-glow ${isMobile ? "w-full" : "absolute top-full left-0 right-0 mt-2"}`,
      style: isMobile ? {} : { width: "224px" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 border-b border-border bg-background/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-3 h-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            results.length,
            ' results for "',
            query,
            '"'
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-h-96 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: results.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            className: "p-8 text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "No results found" })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2", children: results.map((result, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: -10 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -10 },
            transition: { delay: index * 0.03 },
            onClick: () => handleResultClick(result),
            className: "group cursor-pointer",
            children: result.type === "section" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 rounded-md hover:bg-primary/10 transition border border-transparent hover:border-primary/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 flex items-center justify-center bg-primary/20 text-primary rounded", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold uppercase tracking-wide text-foreground group-hover:text-primary transition", children: result.data.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Section" })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 rounded-md hover:bg-primary/10 transition border border-transparent hover:border-primary/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-12 h-12 flex-shrink-0 overflow-hidden rounded bg-background border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: result.data.img,
                  alt: result.data.name,
                  className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground group-hover:text-primary transition truncate", children: result.data.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: result.data.brand }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 bg-muted-foreground rounded-full" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: result.data.cat })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold text-primary mt-1", children: [
                  "PKR ",
                  result.data.price.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 flex items-center justify-center bg-primary/20 text-primary rounded opacity-0 group-hover:opacity-100 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" }) })
            ] })
          },
          result.type === "section" ? result.data.id : result.data.id
        )) }) }) }),
        results.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 border-t border-border bg-background/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/shop",
            search: { category: void 0 },
            onClick: onClose,
            className: "flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary hover:text-primary/80 transition",
            children: [
              "View All Results ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
            ]
          }
        ) })
      ]
    }
  );
}
const links = [
  { label: "Home", to: "/" },
  { label: "Categories", to: "/categories" },
  { label: "Shop", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" }
];
function SiteHeader() {
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [searchOpen, setSearchOpen] = reactExports.useState(false);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [accountDropdownOpen, setAccountDropdownOpen] = reactExports.useState(false);
  const searchRef = reactExports.useRef(null);
  const accountDropdownRef = reactExports.useRef(null);
  const router = useRouter();
  const isHome = router.state.location.pathname === "/";
  const { user, logout } = useAuth();
  const { cart, wishlist } = useCartWishlist();
  const [productsList, setProductsList] = reactExports.useState([]);
  reactExports.useEffect(() => {
    getProductsFn().then((res) => {
      if (res) setProductsList(res);
    }).catch((err) => console.error("Error loading products in header:", err));
  }, []);
  reactExports.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  reactExports.useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
      if (accountDropdownRef.current && !accountDropdownRef.current.contains(event.target)) {
        setAccountDropdownOpen(false);
      }
    };
    const handleEscape = (event) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: `fixed top-0 inset-x-0 z-50 border-b border-border/60 transition-colors duration-300 ${scrolled ? "bg-background" : isHome ? "bg-transparent" : "bg-background"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-1.5 sm:gap-2 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl sm:text-2xl font-display font-bold tracking-widest", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "F" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "AST" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block text-xs tracking-[0.3em] text-muted-foreground border-l border-border pl-2", children: "COMPUTERS" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase", children: [
        links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: l.to,
            className: "relative group text-foreground/80 hover:text-foreground transition",
            activeProps: { className: "text-primary" },
            activeOptions: { exact: true },
            children: [
              l.label,
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" })
            ]
          },
          l.label
        )),
        user && (user.role === "admin" || user.email.toLowerCase().startsWith("admin@")) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/admin",
            className: "relative group text-primary font-bold hover:text-primary transition animate-glow-pulse",
            activeProps: { className: "text-primary font-bold" },
            children: [
              "Admin Panel",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: searchRef, className: "relative hidden md:block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `flex items-center gap-2 border rounded-sm px-3 py-2 w-56 transition-all ${searchOpen ? "bg-card border-primary red-border-glow" : "bg-secondary/60 border-border"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    placeholder: "Search products…",
                    value: searchQuery,
                    onChange: (e) => setSearchQuery(e.target.value),
                    onFocus: () => setSearchOpen(true),
                    className: "bg-transparent outline-none text-sm w-full placeholder:text-muted-foreground"
                  }
                ),
                searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => {
                      setSearchQuery("");
                      setSearchOpen(false);
                    },
                    className: "text-muted-foreground hover:text-foreground transition",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                  }
                )
              ]
            }
          ),
          searchOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(SearchResults, { query: searchQuery, onClose: () => setSearchOpen(false), productsList })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/wishlist", className: "relative p-2 hover:text-primary transition", "aria-label": "Wishlist", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-5 h-5" }),
          wishlist.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[8px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full animate-scale-in", children: wishlist.length })
        ] }),
        user ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: accountDropdownRef, className: "relative hidden md:block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setAccountDropdownOpen(!accountDropdownOpen),
              className: "flex items-center gap-2 p-2 hover:text-primary transition",
              "aria-label": "Account",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-5 h-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `w-4 h-4 transition-transform ${accountDropdownOpen ? "rotate-180" : ""}` })
              ]
            }
          ),
          accountDropdownOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-sm shadow-lg z-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border-b border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Signed in as" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground text-sm truncate", children: user.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground truncate", children: user.email })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/orders",
                  onClick: () => setAccountDropdownOpen(false),
                  className: "flex items-center gap-2 px-3 py-2 text-sm hover:bg-secondary/50 transition rounded-sm",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4" }),
                    "My Orders"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => {
                    logout();
                    setAccountDropdownOpen(false);
                  },
                  className: "w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-secondary/50 transition rounded-sm text-left",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" }),
                    "Logout"
                  ]
                }
              )
            ] })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth", className: "hidden md:block p-2 hover:text-primary transition", "aria-label": "Account", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "md:hidden p-2 hover:text-primary transition",
            "aria-label": "Search",
            onClick: () => setSearchOpen(!searchOpen),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/cart", className: "relative p-2 hover:text-primary transition", "aria-label": "Cart", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-5 h-5" }),
          cart.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[8px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full animate-scale-in", children: cart.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "lg:hidden p-2", onClick: () => setOpen(!open), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5" }) })
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-border bg-background/95", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "px-4 sm:px-6 py-4 flex flex-col gap-3 text-sm uppercase font-semibold tracking-wide", children: [
      links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: l.to,
          onClick: () => setOpen(false),
          className: "py-1 hover:text-primary",
          activeProps: { className: "text-primary" },
          children: l.label
        },
        l.label
      )),
      user && (user.role === "admin" || user.email.toLowerCase().startsWith("admin@")) && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/admin",
          onClick: () => setOpen(false),
          className: "py-1 text-primary font-bold hover:text-primary animate-glow-pulse",
          activeProps: { className: "text-primary font-bold" },
          children: "Admin Panel"
        }
      ),
      user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 pt-4 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-2", children: "Signed in as" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground", children: user.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: user.email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/orders",
            onClick: () => setOpen(false),
            className: "mt-2 inline-flex items-center gap-2 py-3 font-bold uppercase tracking-widest text-sm hover:text-primary transition",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4" }),
              " My Orders"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              logout();
              setOpen(false);
            },
            className: "mt-2 inline-flex items-center justify-center gap-2 border border-border py-3 font-bold uppercase tracking-widest text-sm hover:border-primary hover:text-primary transition",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" }),
              " Logout"
            ]
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/auth",
          onClick: () => setOpen(false),
          className: "mt-2 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 font-bold uppercase tracking-widest text-sm hover:brightness-110 transition",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4" }),
            " Login"
          ]
        }
      )
    ] }) }),
    searchOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-card border border-border rounded-sm px-4 py-3 red-border-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-5 h-5 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            placeholder: "Search products…",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            autoFocus: true,
            className: "bg-transparent outline-none text-sm flex-1 placeholder:text-muted-foreground"
          }
        ),
        searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setSearchQuery(""),
            className: "text-muted-foreground hover:text-foreground transition",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setSearchOpen(false),
            className: "text-muted-foreground hover:text-foreground transition",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchResults, { query: searchQuery, onClose: () => setSearchOpen(false), isMobile: true, productsList }) })
    ] }) })
  ] });
}
function SiteFooter() {
  const cols = [
    { title: "Shop", links: [
      { label: "PC Components", to: "/categories" },
      { label: "Gaming PCs", to: "/shop" },
      { label: "Laptops", to: "/shop" },
      { label: "Monitors", to: "/shop" },
      { label: "Peripherals", to: "/shop" },
      { label: "Accessories", to: "/shop" }
    ] },
    { title: "Support", links: [
      { label: "Contact", to: "/contact" },
      { label: "FAQ" },
      { label: "Warranty" },
      { label: "Returns" },
      { label: "Shipping" },
      { label: "Track Order" }
    ] },
    { title: "Company", links: [
      { label: "About", to: "/about" },
      { label: "Custom Builds" },
      { label: "Careers" },
      { label: "Press" },
      { label: "Blog" },
      { label: "Partners" }
    ] }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border bg-card/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl sm:text-3xl font-display font-bold tracking-widest", children: [
          "F",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "/" }),
          "AST ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.3em] text-muted-foreground ml-2", children: "COMPUTERS" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 sm:mt-4 text-sm text-muted-foreground max-w-xs", children: "High performance PCs, custom builds and gaming gear for those who refuse to compromise." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 sm:mt-6 flex gap-2 sm:gap-3", children: [Instagram, Youtube, Twitter, Facebook].map((I, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "w-9 h-9 sm:w-10 sm:h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(I, { className: "w-4 h-4" }) }, i)) })
      ] }),
      cols.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-primary font-bold", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 sm:mt-4 space-y-1.5 sm:space-y-2", children: c.links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: l.to ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "text-sm text-muted-foreground hover:text-foreground transition", children: l.label }) : /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-sm text-muted-foreground hover:text-foreground transition", children: l.label }) }, l.label)) })
      ] }, c.title))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-4 sm:py-6 flex flex-wrap gap-3 sm:gap-4 items-center justify-between text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "© 2026 Fast Computers. All rights reserved." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "Powered by ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://thatoneumerpk.web.app/", target: "_blank", rel: "noopener noreferrer", className: "text-primary hover:underline", children: "thatoneumer" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 sm:gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Terms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Cookies" })
      ] })
    ] }) })
  ] });
}
export {
  SiteHeader as S,
  SiteFooter as a
};
