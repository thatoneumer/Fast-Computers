import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-Bkb4YrSP.mjs";
import { S as Swal } from "../_libs/sweetalert2.mjs";
import { C as Cpu, Z as Zap } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "async_hooks";
import "stream";
import "crypto";
import "../_libs/isbot.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const appCss = "/assets/styles-B4Gf4e_6.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
    return () => clearInterval(interval);
  }, [onComplete]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-primary/20 blur-3xl rounded-full animate-float-slow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 blur-3xl rounded-full animate-float-slow", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(oklch(0.62_0.24_25/0.05)_1px,transparent_1px),linear-gradient(90deg,oklch(0.62_0.24_25/0.05)_1px,transparent_1px)] bg-[size:60px_60px]" }),
      [...Array(4)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent",
          style: { top: `${20 + i * 20}%`, left: 0, right: 0 },
          initial: { scaleX: 0, opacity: 0 },
          animate: { scaleX: [0, 1, 0], opacity: [0, 0.5, 0] },
          transition: { duration: 3, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }
        },
        i
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.8 },
          className: "mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-4 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                animate: { rotate: 360 },
                transition: { duration: 3, repeat: Infinity, ease: "linear" },
                className: "w-16 h-16 sm:w-20 sm:h-20 border-2 border-primary rounded-full flex items-center justify-center red-border-glow",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "w-8 h-8 sm:w-10 sm:h-10 text-primary" })
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.h1,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.3, duration: 0.6 },
                className: "text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-widest uppercase",
                children: [
                  "F",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary animate-glow-pulse", children: "/" }),
                  "AST"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.5, duration: 0.6 },
                className: "mt-2 text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase",
                children: "Computers"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.7, duration: 0.6 },
          className: "max-w-md mx-auto",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-1 sm:h-2 bg-border overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "absolute inset-y-0 left-0 bg-primary red-glow",
                initial: { width: 0 },
                animate: { width: `${progress}%` },
                transition: { duration: 0.3 }
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between text-xs sm:text-sm uppercase tracking-widest", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Loading" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary font-bold", children: [
                Math.round(progress),
                "%"
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 1, duration: 0.6 },
          className: "mt-8 text-xs sm:text-sm text-muted-foreground tracking-wide",
          children: "Building Your Dream Gaming Rig"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 1.2, duration: 0.6 },
          className: "mt-6 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-primary",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "System Initializing" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-primary/50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-primary/50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-primary/50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-primary/50" })
  ] });
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const loginFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("dffd028f78905c56b70ca9e6a50feea29d2b2ad2308920737aa975126e2e61cd"));
const registerFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("75a2b931b7a4e86dec4cd242ce282bc580171500c6a7c6919550f3b527968087"));
const getCartFn = createServerFn({
  method: "GET"
}).validator((data) => data).handler(createSsrRpc("94e432d3fb260536d4f8ccc2d8db32aa78340dc310391b9c71f521e4180e596a"));
const addToCartFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("db5b86426813f3a2fe756a5674fa507b9ea076bc5928caa7a070e577240bc276"));
const removeFromCartFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("c80f1b27a43499919ee1ae165610147b95a2cd1385279f34cae82531d4d2cc3c"));
const updateCartQuantityFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("0fb8bf0af5955b789c6fec9b8774c9453e8a8a74704b6506827c4d846b5d445b"));
const getWishlistFn = createServerFn({
  method: "GET"
}).validator((data) => data).handler(createSsrRpc("cd1302faf65c9fad19448737d8a1450b4df37cd40a170760866eb196d064df66"));
const addToWishlistFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("cebc58c2c3865fe338883e3b2b21fcc97a4c222ca814ef4feb3c7086c22d794c"));
const removeFromWishlistFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("5b24b6ec026e487b80c190e6ce6bef7e0d718265919f3f77d512cb8740a15bde"));
createServerFn({
  method: "GET"
}).validator((data) => data).handler(createSsrRpc("cacad11326d187e0e439c85f77397e88de42eba8506ff7be999478b6ff3f24e7"));
createServerFn({
  method: "GET"
}).validator((data) => data).handler(createSsrRpc("1318f69560e563dfa76d14788ed27b3d0607d1fb82afee22a09dee4d17c1c1e3"));
const createOrderFn = createServerFn({
  method: "POST"
}).validator((data) => {
  if (!data.items || data.items.length === 0) {
    throw new Error("Cart cannot be empty");
  }
  if (!data.fullName || data.fullName.trim() === "") {
    throw new Error("Full name is required");
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    throw new Error("Valid email is required");
  }
  if (!data.phone || data.phone.trim() === "") {
    throw new Error("Phone number is required");
  }
  if (!data.address || data.address.trim() === "") {
    throw new Error("Address is required");
  }
  if (!data.city || data.city.trim() === "") {
    throw new Error("City is required");
  }
  if (!data.postalCode || data.postalCode.trim() === "") {
    throw new Error("Postal code is required");
  }
  if (!data.paymentMethod || data.paymentMethod.trim() === "") {
    throw new Error("Payment method is required");
  }
  if (data.total <= 0) {
    throw new Error("Invalid total amount");
  }
  return data;
}).handler(createSsrRpc("86401f61f3f84ef9b7da26da5e6bf60401a241fbc4f98ec0d44a448a98c8d2af"));
const getOrdersFn = createServerFn({
  method: "GET"
}).validator((data) => data).handler(createSsrRpc("7b8859a3fe5868584f2f3f2a8a9bb9bf672f344b8d94985dd96c2bc334ba3111"));
const getAllOrdersFn = createServerFn({
  method: "GET"
}).handler(createSsrRpc("a9501e7540f0d9747f2e64b91596e7cb7d88afb8a591ba8b2a3839e188d51bd5"));
const updateOrderStatusFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("d086f05cf68e0ba04e2b2d6306ef3fc247b67ab9ee3c448e969c316d97516de5"));
const AuthContext = reactExports.createContext(void 0);
function AuthProvider({ children }) {
  const [user, setUser] = reactExports.useState(null);
  const [token, setToken] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);
  const login = async (email, password) => {
    try {
      const result = await loginFn({ data: { email, password } });
      setUser(result.user);
      setToken(result.token);
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };
  const register = async (email, password, name) => {
    try {
      const result = await registerFn({ data: { email, password, name } });
      setUser(result.user);
      setToken(result.token);
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));
    } catch (error) {
      console.error("Register error:", error);
      throw error;
    }
  };
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthContext.Provider, { value: { user, token, login, register, logout, loading }, children });
}
function useAuth() {
  const context = reactExports.useContext(AuthContext);
  if (context === void 0) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
const CartWishlistContext = reactExports.createContext(void 0);
function CartWishlistProvider({ children }) {
  const [cart, setCart] = reactExports.useState([]);
  const [wishlist, setWishlist] = reactExports.useState([]);
  const [isLoaded, setIsLoaded] = reactExports.useState(false);
  const { user } = useAuth();
  reactExports.useEffect(() => {
    if (user) {
      loadCartAndWishlist();
    } else {
      try {
        const storedCart = localStorage.getItem("fastcomputers_cart");
        const storedWishlist = localStorage.getItem("fastcomputers_wishlist");
        if (storedCart) setCart(JSON.parse(storedCart));
        if (storedWishlist) setWishlist(JSON.parse(storedWishlist));
      } catch (e) {
        console.error("Failed to load cart/wishlist from localStorage:", e);
      }
      setIsLoaded(true);
    }
  }, [user]);
  const loadCartAndWishlist = async () => {
    if (!user) return;
    try {
      const [cartResult, wishlistResult] = await Promise.all([
        getCartFn({ data: { userId: user.id } }),
        getWishlistFn({ data: { userId: user.id } })
      ]);
      const localCart = cartResult.cart.map((item) => ({
        id: item.productId,
        name: "",
        // Will be populated when product data is loaded
        brand: "",
        price: 0,
        img: "",
        qty: item.quantity
      }));
      setCart(localCart);
      setWishlist(wishlistResult.wishlist.map((id) => ({
        id,
        name: "",
        brand: "",
        cat: "",
        price: 0,
        old: 0,
        rating: 0,
        img: ""
      })));
    } catch (error) {
      console.error("Failed to load cart/wishlist:", error);
    } finally {
      setIsLoaded(true);
    }
  };
  const addToCart = async (product, qty = 1) => {
    const productId = product.id || product._id || product.customId;
    if (!productId) return;
    if (user) {
      try {
        await addToCartFn({ data: { userId: user.id, productId, quantity: qty } });
        await loadCartAndWishlist();
        Swal.fire({
          title: "Added to Cart!",
          text: `"${product.name}" has been added to your cart.`,
          icon: "success",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2e3,
          background: "#1E1E1E",
          color: "#FFF"
        });
      } catch (error) {
        console.error("Failed to add to cart:", error);
        Swal.fire({
          title: "Error",
          text: "Failed to add to cart. Please try again.",
          icon: "error",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2e3,
          background: "#1E1E1E",
          color: "#FFF"
        });
      }
    } else {
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item.id === productId);
        if (existingItem) {
          Swal.fire({
            title: "Added to Cart!",
            text: `Increased quantity of "${product.name}" in your cart.`,
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2e3,
            background: "#1E1E1E",
            color: "#FFF"
          });
          return prevCart.map(
            (item) => item.id === productId ? { ...item, qty: item.qty + qty } : item
          );
        }
        Swal.fire({
          title: "Added to Cart!",
          text: `"${product.name}" has been added to your cart.`,
          icon: "success",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2e3,
          background: "#1E1E1E",
          color: "#FFF"
        });
        return [
          ...prevCart,
          {
            id: productId,
            name: product.name,
            brand: product.brand || "",
            price: Number(product.price),
            img: product.img,
            qty
          }
        ];
      });
    }
  };
  const removeFromCart = async (productId) => {
    if (user) {
      try {
        await removeFromCartFn({ data: { userId: user.id, productId } });
        await loadCartAndWishlist();
      } catch (error) {
        console.error("Failed to remove from cart:", error);
      }
    } else {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    }
  };
  const updateCartQty = async (productId, qty) => {
    if (user) {
      try {
        await updateCartQuantityFn({ data: { userId: user.id, productId, quantity: qty } });
        await loadCartAndWishlist();
      } catch (error) {
        console.error("Failed to update quantity:", error);
      }
    } else {
      setCart(
        (prevCart) => prevCart.map(
          (item) => item.id === productId ? { ...item, qty: Math.max(1, qty) } : item
        )
      );
    }
  };
  const clearCart = () => {
    setCart([]);
  };
  const toggleWishlist = async (product) => {
    const productId = product.id || product._id || product.customId;
    if (!productId) return;
    if (user) {
      const exists = wishlist.some((item) => item.id === productId);
      try {
        if (exists) {
          await removeFromWishlistFn({ data: { userId: user.id, productId } });
          Swal.fire({
            title: "Removed from Wishlist",
            text: `"${product.name}" has been removed from your wishlist.`,
            icon: "info",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2e3,
            background: "#1E1E1E",
            color: "#FFF"
          });
        } else {
          await addToWishlistFn({ data: { userId: user.id, productId } });
          Swal.fire({
            title: "Added to Wishlist!",
            text: `"${product.name}" has been added to your wishlist.`,
            icon: "success",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2e3,
            background: "#1E1E1E",
            color: "#FFF"
          });
        }
        await loadCartAndWishlist();
      } catch (error) {
        console.error("Failed to toggle wishlist:", error);
      }
    } else {
      setWishlist((prevWishlist) => {
        const exists = prevWishlist.some((item) => item.id === productId);
        if (exists) {
          Swal.fire({
            title: "Removed from Wishlist",
            text: `"${product.name}" has been removed from your wishlist.`,
            icon: "info",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2e3,
            background: "#1E1E1E",
            color: "#FFF"
          });
          return prevWishlist.filter((item) => item.id !== productId);
        }
        Swal.fire({
          title: "Added to Wishlist!",
          text: `"${product.name}" has been added to your wishlist.`,
          icon: "success",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2e3,
          background: "#1E1E1E",
          color: "#FFF"
        });
        return [
          ...prevWishlist,
          {
            id: productId,
            name: product.name,
            brand: product.brand || "",
            cat: product.cat || "",
            price: Number(product.price),
            old: Number(product.old || product.price),
            rating: Number(product.rating || 5),
            img: product.img
          }
        ];
      });
    }
  };
  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };
  const moveToCart = (product) => {
    const productId = product.id || product._id || product.customId;
    if (!productId) return;
    addToCart(product, 1);
    removeFromWishlist(productId);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CartWishlistContext.Provider,
    {
      value: {
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateCartQty,
        clearCart,
        toggleWishlist,
        isInWishlist,
        moveToCart
      },
      children
    }
  );
}
function useCartWishlist() {
  const context = reactExports.useContext(CartWishlistContext);
  if (context === void 0) {
    throw new Error("useCartWishlist must be used within a CartWishlistProvider");
  }
  return context;
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$c = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Fast Computers — Build Your Dream Gaming Rig" },
      { name: "description", content: "High performance PCs, gaming components, laptops, monitors, and peripherals for gamers and creators." },
      { name: "author", content: "Fast Computers" },
      { property: "og:title", content: "Fast Computers — Build Your Dream Gaming Rig" },
      { property: "og:description", content: "High performance PCs, gaming components, laptops, monitors, and peripherals for gamers and creators." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Fast Computers — Build Your Dream Gaming Rig" },
      { name: "twitter:description", content: "High performance PCs, gaming components, laptops, monitors, and peripherals for gamers and creators." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/00ce0920-daf4-4ffa-b4cf-a9d63a347b01/id-preview-43f838aa--38242687-96ca-421e-989a-6f034bc70d4d.lovable.app-1783245354548.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/00ce0920-daf4-4ffa-b4cf-a9d63a347b01/id-preview-43f838aa--38242687-96ca-421e-989a-6f034bc70d4d.lovable.app-1783245354548.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Rajdhani:wght@400;500;600;700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$c.useRouteContext();
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [hasLoaded, setHasLoaded] = reactExports.useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("fastcomputers_loaded") === "true";
    }
    return false;
  });
  reactExports.useEffect(() => {
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("fastcomputers_loaded", "true");
    }
  }, [hasLoaded]);
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CartWishlistProvider, { children: isLoading && !hasLoaded ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, { onComplete: handleLoadingComplete }) : (
    /* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
  ) }) }) });
}
const $$splitComponentImporter$b = () => import("./wishlist-DFqJkUXQ.mjs");
const Route$b = createFileRoute("/wishlist")({
  head: () => ({
    meta: [{
      title: "My Wishlist — Fast Computers"
    }, {
      name: "description",
      content: "Save the gaming hardware and components you love. Move items straight to cart when you're ready."
    }, {
      property: "og:title",
      content: "My Wishlist — Fast Computers"
    }, {
      property: "og:description",
      content: "Your curated collection of gaming gear and PC components."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const getProductsFn = createServerFn({
  method: "GET"
}).handler(createSsrRpc("8c9a97a378fcbfdb5c3d841452ba8d14a55e62871650e7063b4f68e67b8cfebb"));
const getProductByIdFn = createServerFn({
  method: "GET"
}).validator((data) => data).handler(createSsrRpc("24c7a133b54ac5045a58146c82e749a196cd2e5730afcdf64763a37203db36d2"));
const createProductFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("5bdadcce831b169e6db1c88c00ee8f00f2889a387879d1710140db42cddbd437"));
const updateProductFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("cdfffacdf7e2a9a94403bc07481a47ae6ce1e0531d5f1cd38bc18fadd3257fbc"));
const deleteProductFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("629300ed5cdc7c9e66cd5663e8878d43e637d51dd65574b979953f1303545b51"));
const seedProductsFn = createServerFn({
  method: "POST"
}).handler(createSsrRpc("7e06a30da09f112c2c1b898e67148ec50d12baca9d3d3ff858fc76c55ccd67c4"));
const uploadImageToCloudinaryFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("dd553e1c36ee85a93c43b2312efcce33642975a68c465f09c7c49dcdb9c4ff09"));
const $$splitComponentImporter$a = () => import("./shop-MyG2EhQS.mjs");
const Route$a = createFileRoute("/shop")({
  validateSearch: (search) => ({
    category: typeof search.category === "string" ? search.category : void 0
  }),
  loader: async () => {
    return await getProductsFn();
  },
  head: () => ({
    meta: [{
      title: "Shop Gaming Hardware & Peripherals — Fast Computers"
    }, {
      name: "description",
      content: "Shop graphics cards, processors, motherboards, RAM, SSDs, monitors, mice, keyboards, headsets and more."
    }, {
      property: "og:title",
      content: "Shop Gaming Hardware — Fast Computers"
    }, {
      property: "og:description",
      content: "GPUs, CPUs, motherboards, storage, peripherals and full builds at the best prices in Pakistan."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./orders-BZI2oRcG.mjs");
const Route$9 = createFileRoute("/orders")({
  head: () => ({
    meta: [{
      title: "My Orders — Fast Computers"
    }, {
      name: "description",
      content: "View your order history and track your purchases."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./contact-B_HDS7rX.mjs");
const Route$8 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Fast Computers — Support, Sales & Store Location"
    }, {
      name: "description",
      content: "Get in touch with Fast Computers Lahore. Call, email, or visit our physical store for gaming hardware, custom builds and expert support."
    }, {
      property: "og:title",
      content: "Contact Fast Computers"
    }, {
      property: "og:description",
      content: "Reach our sales, support and custom-build team. Visit our Lahore store."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./checkout-BhY1p9SK.mjs");
const Route$7 = createFileRoute("/checkout")({
  head: () => ({
    meta: [{
      title: "Checkout — Fast Computers"
    }, {
      name: "description",
      content: "Complete your purchase securely."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./categories-D9tttGr0.mjs");
const Route$6 = createFileRoute("/categories")({
  head: () => ({
    meta: [{
      title: "PC Components & Categories — Fast Computers"
    }, {
      name: "description",
      content: "Browse gaming PC components: CPUs, GPUs, motherboards, RAM, storage, PSUs, cases, coolers, fans and more."
    }, {
      property: "og:title",
      content: "PC Components & Categories — Fast Computers"
    }, {
      property: "og:description",
      content: "Browse gaming PC components: CPUs, GPUs, motherboards, RAM, storage, PSUs and more."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./cart-BVXFYJzT.mjs");
const Route$5 = createFileRoute("/cart")({
  head: () => ({
    meta: [{
      title: "Shopping Cart — Fast Computers"
    }, {
      name: "description",
      content: "Review your gaming hardware order, apply coupons and check out securely with Fast Computers."
    }, {
      property: "og:title",
      content: "Shopping Cart — Fast Computers"
    }, {
      property: "og:description",
      content: "Review your items and check out."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./auth-ChlHcQYg.mjs");
const Route$4 = createFileRoute("/auth")({
  head: () => ({
    meta: [{
      title: "Sign In or Create Account — Fast Computers"
    }, {
      name: "description",
      content: "Access your Fast Computers account to track orders, save wishlists and speed through checkout."
    }, {
      property: "og:title",
      content: "Sign In — Fast Computers"
    }, {
      property: "og:description",
      content: "Sign in or create your Fast Computers account."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./admin-BeWHtp-P.mjs");
const Route$3 = createFileRoute("/admin")({
  loader: async () => {
    const products = await getProductsFn();
    return {
      products
    };
  },
  head: () => ({
    meta: [{
      title: "Admin Portal — Fast Computers"
    }, {
      name: "description",
      content: "Fast Computers admin interface for product inventory management."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./about-CW4zK1UU.mjs");
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Fast Computers — Pakistan's Premier PC Hardware Retailer"
    }, {
      name: "description",
      content: "Founded in 2018, Fast Computers is Pakistan's trusted destination for authentic gaming hardware, custom rigs and expert support."
    }, {
      property: "og:title",
      content: "About Fast Computers"
    }, {
      property: "og:description",
      content: "Pakistan's premier hardware retailer since 2018. 15,000+ systems built. Uncompromising standards."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-BbFsbcG7.mjs");
const Route$1 = createFileRoute("/")({
  loader: async () => {
    return await getProductsFn();
  },
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./product._id-DjwypdI1.mjs");
const Route = createFileRoute("/product/$id")({
  loader: async ({
    params
  }) => {
    return await getProductByIdFn({
      data: {
        id: params.id
      }
    });
  },
  head: () => ({
    meta: [{
      title: "Product Details — Fast Computers"
    }, {
      name: "description",
      content: "View detailed specifications and purchase gaming hardware."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WishlistRoute = Route$b.update({
  id: "/wishlist",
  path: "/wishlist",
  getParentRoute: () => Route$c
});
const ShopRoute = Route$a.update({
  id: "/shop",
  path: "/shop",
  getParentRoute: () => Route$c
});
const OrdersRoute = Route$9.update({
  id: "/orders",
  path: "/orders",
  getParentRoute: () => Route$c
});
const ContactRoute = Route$8.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$c
});
const CheckoutRoute = Route$7.update({
  id: "/checkout",
  path: "/checkout",
  getParentRoute: () => Route$c
});
const CategoriesRoute = Route$6.update({
  id: "/categories",
  path: "/categories",
  getParentRoute: () => Route$c
});
const CartRoute = Route$5.update({
  id: "/cart",
  path: "/cart",
  getParentRoute: () => Route$c
});
const AuthRoute = Route$4.update({
  id: "/auth",
  path: "/auth",
  getParentRoute: () => Route$c
});
const AdminRoute = Route$3.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$c
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$c
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$c
});
const ProductIdRoute = Route.update({
  id: "/product/$id",
  path: "/product/$id",
  getParentRoute: () => Route$c
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AdminRoute,
  AuthRoute,
  CartRoute,
  CategoriesRoute,
  CheckoutRoute,
  ContactRoute,
  OrdersRoute,
  ShopRoute,
  WishlistRoute,
  ProductIdRoute
};
const routeTree = Route$c._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$a as R,
  useAuth as a,
  Route$3 as b,
  createOrderFn as c,
  getAllOrdersFn as d,
  deleteProductFn as e,
  updateOrderStatusFn as f,
  getOrdersFn as g,
  updateProductFn as h,
  createProductFn as i,
  uploadImageToCloudinaryFn as j,
  Route$1 as k,
  Route as l,
  getProductsFn as m,
  router as r,
  seedProductsFn as s,
  useCartWishlist as u
};
