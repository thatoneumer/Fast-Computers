import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-CHo3IP9P.mjs";
import { S as Swal } from "../_libs/sweetalert2.mjs";
import { C as Cpu, Z as Zap, a as Check, X, R as RefreshCcw, F as Flame, L as Layers, M as Monitor, I as Info, A as ArrowLeft, T as TriangleAlert, S as Snowflake, b as CircleAlert, c as Shield, d as ArrowRight, e as ShoppingCart, K as Keyboard, f as Mouse, H as Headphones } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence } from "../_libs/framer-motion.mjs";
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
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-O7M5fkQt.css";
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
const CartWishlistContext = reactExports.createContext(void 0);
function CartWishlistProvider({ children }) {
  const [cart, setCart] = reactExports.useState([]);
  const [wishlist, setWishlist] = reactExports.useState([]);
  const [isLoaded, setIsLoaded] = reactExports.useState(false);
  const [isPCBuilderOpen, setIsPCBuilderOpen] = reactExports.useState(false);
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
  reactExports.useEffect(() => {
    if (!user && isLoaded) {
      localStorage.setItem("fastcomputers_cart", JSON.stringify(cart));
    }
  }, [cart, user, isLoaded]);
  reactExports.useEffect(() => {
    if (!user && isLoaded) {
      localStorage.setItem("fastcomputers_wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist, user, isLoaded]);
  const loadCartAndWishlist = async () => {
    if (!user) return;
    try {
      const [cartResult, wishlistResult, productsList] = await Promise.all([
        getCartFn({ data: { userId: user.id } }),
        getWishlistFn({ data: { userId: user.id } }),
        getProductsFn().catch((err) => {
          console.error("Error loading products in cart context:", err);
          return [];
        })
      ]);
      const localCart = cartResult.cart.map((item) => {
        const product = productsList.find((p) => p.id === item.productId);
        return {
          id: item.productId,
          name: product ? product.name : "Component " + item.productId,
          brand: product ? product.brand : "",
          price: product ? product.price : 0,
          img: product ? product.img : "",
          qty: item.quantity
        };
      });
      setCart(localCart);
      const localWishlist = wishlistResult.wishlist.map((id) => {
        const product = productsList.find((p) => p.id === id);
        return {
          id,
          name: product ? product.name : "Product " + id,
          brand: product ? product.brand : "",
          cat: product ? product.cat : "",
          price: product ? product.price : 0,
          old: product ? product.old || product.price : 0,
          rating: product ? product.rating : 5,
          img: product ? product.img : ""
        };
      });
      setWishlist(localWishlist);
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
  const addMultipleToCart = async (items) => {
    if (items.length === 0) return;
    if (user) {
      try {
        for (const item of items) {
          const productId = item.product.id || item.product._id || item.product.customId;
          if (productId) {
            await addToCartFn({ data: { userId: user.id, productId, quantity: item.qty } });
          }
        }
        await loadCartAndWishlist();
        Swal.fire({
          title: "PC Added to Cart!",
          text: "Your custom PC has been added to the cart.",
          icon: "success",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3e3,
          background: "#1E1E1E",
          color: "#FFF"
        });
      } catch (error) {
        console.error("Failed to add multiple items to server cart:", error);
        Swal.fire({
          title: "Error",
          text: "Failed to add build to cart. Please try again.",
          icon: "error",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3e3,
          background: "#1E1E1E",
          color: "#FFF"
        });
      }
    } else {
      setCart((prevCart) => {
        let updatedCart = [...prevCart];
        for (const item of items) {
          const productId = item.product.id || item.product._id || item.product.customId;
          if (!productId) continue;
          const existingIndex = updatedCart.findIndex((c) => c.id === productId);
          if (existingIndex !== -1) {
            updatedCart[existingIndex] = {
              ...updatedCart[existingIndex],
              qty: updatedCart[existingIndex].qty + item.qty
            };
          } else {
            updatedCart.push({
              id: productId,
              name: item.product.name,
              brand: item.product.brand || "",
              price: Number(item.product.price),
              img: item.product.img,
              qty: item.qty
            });
          }
        }
        return updatedCart;
      });
      Swal.fire({
        title: "PC Added to Cart!",
        text: "Your custom PC has been added to the cart.",
        icon: "success",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3e3,
        background: "#1E1E1E",
        color: "#FFF"
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
  const removeFromWishlist = async (productId) => {
    if (user) {
      try {
        await removeFromWishlistFn({ data: { userId: user.id, productId } });
        await loadCartAndWishlist();
      } catch (error) {
        console.error("Failed to remove from wishlist:", error);
      }
    } else {
      setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== productId));
    }
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
        moveToCart,
        isPCBuilderOpen,
        setIsPCBuilderOpen,
        addMultipleToCart
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
function PCBuilderModal() {
  const { isPCBuilderOpen, setIsPCBuilderOpen, addMultipleToCart } = useCartWishlist();
  const [currentStep, setCurrentStep] = reactExports.useState(1);
  const [purpose, setPurpose] = reactExports.useState("gaming");
  const [budget, setBudget] = reactExports.useState(25e4);
  const [chipType, setChipType] = reactExports.useState("all");
  const [activeSlot, setActiveSlot] = reactExports.useState(null);
  const [parts, setParts] = reactExports.useState({
    processor: null,
    motherboard: null,
    gpu: null,
    ram: null,
    storage: null,
    cooler: null,
    psu: null,
    case: null,
    fans: null,
    monitor: null,
    keyboard: null,
    mouse: null,
    headset: null
  });
  const [rgbToggle, setRgbToggle] = reactExports.useState("rainbow");
  const [caseColor, setCaseColor] = reactExports.useState("black");
  const [glassType, setGlassType] = reactExports.useState("clear");
  const [extraFans, setExtraFans] = reactExports.useState("none");
  const [productsList, setProductsList] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (isPCBuilderOpen) {
      setLoading(true);
      getProductsFn().then((data) => {
        setProductsList(data || []);
        setLoading(false);
      }).catch((err) => {
        console.error("Error loading products in builder:", err);
        setLoading(false);
      });
    }
  }, [isPCBuilderOpen]);
  reactExports.useEffect(() => {
    if (purpose === "office") {
      setBudget(8e4);
      setChipType("budget");
    } else if (purpose === "gaming") {
      setBudget(25e4);
      setChipType("all");
    } else if (purpose === "streaming") {
      setBudget(32e4);
      setChipType("high-end");
    } else if (purpose === "editing") {
      setBudget(3e5);
      setChipType("high-end");
    } else if (purpose === "programming") {
      setBudget(18e4);
      setChipType("all");
    }
  }, [purpose]);
  const slotToCategory = (slot) => {
    switch (slot) {
      case "processor":
        return "Processors";
      case "motherboard":
        return "Motherboards";
      case "gpu":
        return "Graphics Cards";
      case "ram":
        return "RAM";
      case "storage":
        return "SSDs";
      case "cooler":
        return "Coolers";
      case "psu":
        return "PSUs";
      case "case":
        return "Cases";
      case "fans":
        return "Fans";
      case "monitor":
        return "Monitors";
      case "keyboard":
        return "Keyboards";
      case "mouse":
        return "Mice";
      case "headset":
        return "Headsets";
      default:
        return "";
    }
  };
  const filteredOptions = reactExports.useMemo(() => {
    if (!activeSlot) return [];
    const catName = slotToCategory(activeSlot);
    let list = productsList.filter((p) => p.cat === catName && p.inStock);
    if (activeSlot === "processor" || activeSlot === "gpu") {
      if (chipType === "budget") {
        list = list.filter((p) => p.price < 6e4);
      } else if (chipType === "high-end") {
        list = list.filter((p) => p.price >= 6e4);
      }
    }
    return list.sort((a, b) => a.price - b.price);
  }, [activeSlot, productsList, chipType]);
  const selectItem = (slot, item) => {
    setParts((prev) => ({ ...prev, [slot]: item }));
    setActiveSlot(null);
  };
  const autoFillBuild = () => {
    const newParts = { ...parts };
    let gpuTarget = budget * 0.38;
    let cpuTarget = budget * 0.22;
    let moboTarget = budget * 0.12;
    let ramTarget = budget * 0.08;
    let ssdTarget = budget * 0.08;
    let psuTarget = budget * 0.07;
    let coolerTarget = budget * 0.06;
    let caseTarget = budget * 0.06;
    let fanTarget = budget * 0.03;
    if (purpose === "office") {
      gpuTarget = 0;
      cpuTarget = budget * 0.35;
      moboTarget = budget * 0.22;
      ramTarget = budget * 0.12;
      ssdTarget = budget * 0.15;
      psuTarget = budget * 0.1;
      coolerTarget = budget * 0.06;
      caseTarget = budget * 0.08;
      fanTarget = budget * 0.02;
    }
    const findOptimal = (cat, targetPrice) => {
      const items = productsList.filter((p) => p.cat === cat && p.inStock);
      if (items.length === 0) return null;
      let best = items[0];
      let minDiff = Math.abs(items[0].price - targetPrice);
      for (const item of items) {
        const diff = Math.abs(item.price - targetPrice);
        if (diff < minDiff) {
          minDiff = diff;
          best = item;
        }
      }
      return best;
    };
    newParts.processor = findOptimal("Processors", cpuTarget);
    newParts.motherboard = findOptimal("Motherboards", moboTarget);
    newParts.gpu = gpuTarget > 0 ? findOptimal("Graphics Cards", gpuTarget) : null;
    newParts.ram = findOptimal("RAM", ramTarget);
    newParts.storage = findOptimal("SSDs", ssdTarget);
    newParts.cooler = findOptimal("Coolers", coolerTarget);
    newParts.psu = findOptimal("PSUs", psuTarget);
    newParts.case = findOptimal("Cases", caseTarget);
    newParts.fans = findOptimal("Fans", fanTarget);
    setParts(newParts);
  };
  const extrasPrices = reactExports.useMemo(() => {
    let total = 0;
    if (rgbToggle === "rainbow") total += 2500;
    else if (rgbToggle === "static") total += 4e3;
    if (glassType === "tinted") total += 1500;
    else if (glassType === "panoramic") total += 6e3;
    if (extraFans === "3x") total += 8e3;
    else if (extraFans === "6x") total += 15e3;
    return total;
  }, [rgbToggle, glassType, extraFans]);
  const componentsPriceSum = reactExports.useMemo(() => {
    return Object.values(parts).reduce((sum, item) => sum + (item ? item.price : 0), 0);
  }, [parts]);
  const totalPrice = reactExports.useMemo(() => {
    return componentsPriceSum + extrasPrices;
  }, [componentsPriceSum, extrasPrices]);
  const compatibilityInfo = reactExports.useMemo(() => {
    let status = "compatible";
    let message = "System fully compatible & power safe.";
    const cpu = parts.processor;
    const moboItem = parts.motherboard;
    const gpuItem = parts.gpu;
    const psuItem = parts.psu;
    if (cpu && moboItem) {
      const cpuSocket = cpu.name.toLowerCase().includes("ryzen") ? cpu.name.toLowerCase().includes("7600") || cpu.name.toLowerCase().includes("7800") ? "am5" : "am4" : "lga1700";
      const moboSocket = moboItem.name.toLowerCase().includes("b550") ? "am4" : moboItem.name.toLowerCase().includes("b650") ? "am5" : "lga1700";
      if (cpuSocket !== moboSocket) {
        status = "error";
        message = `Socket Mismatch: ${cpu.brand} CPU (${cpuSocket.toUpperCase()}) is incompatible with ${moboItem.brand} Motherboard (${moboSocket.toUpperCase()}).`;
        return { status, message };
      }
    }
    if (gpuItem && psuItem) {
      let requiredWattage = 300;
      if (gpuItem.name.toLowerCase().includes("4090")) requiredWattage += 450;
      else if (gpuItem.name.toLowerCase().includes("4080")) requiredWattage += 320;
      else if (gpuItem.name.toLowerCase().includes("4070")) requiredWattage += 240;
      else if (gpuItem.name.toLowerCase().includes("4060") || gpuItem.name.toLowerCase().includes("3060")) requiredWattage += 170;
      else if (gpuItem.name.toLowerCase().includes("6600")) requiredWattage += 140;
      if (cpu) {
        if (cpu.name.toLowerCase().includes("i9")) requiredWattage += 250;
        else if (cpu.name.toLowerCase().includes("i7") || cpu.name.toLowerCase().includes("7800")) requiredWattage += 125;
        else requiredWattage += 65;
      }
      const match = psuItem.name.match(/(\d+)W/);
      const psuWattage = match ? parseInt(match[1]) : 650;
      if (psuWattage < requiredWattage) {
        status = "warning";
        message = `Low PSU Wattage: Calculated power draw is ~${requiredWattage}W. Selected ${psuWattage}W PSU is highly discouraged.`;
        return { status, message };
      }
    }
    const requiredSlots = ["processor", "motherboard", "ram", "storage", "psu", "case"];
    const missing = requiredSlots.filter((slot) => !parts[slot]);
    if (missing.length > 0) {
      status = "incomplete";
      message = `Please select critical components: ${missing.map((m) => m.charAt(0).toUpperCase() + m.slice(1)).join(", ")}.`;
    }
    return { status, message };
  }, [parts]);
  const estBuildTime = reactExports.useMemo(() => {
    if (totalPrice < 15e4) return "2-3 business days";
    if (totalPrice < 35e4) return "3-4 business days";
    return "4-5 business days (Stress testing & custom cable combing)";
  }, [totalPrice]);
  const addCompleteBuildToCart = async () => {
    const itemsToAdd = [];
    Object.values(parts).forEach((item) => {
      if (item) {
        itemsToAdd.push({ product: item, qty: 1 });
      }
    });
    if (rgbToggle !== "off") {
      itemsToAdd.push({
        product: {
          id: "pcb_extra_rgb_" + rgbToggle,
          name: `Custom PC Lighting - ${rgbToggle === "rainbow" ? "Rainbow Addressable RGB" : "Static Color RGB"}`,
          brand: "Fast Computers",
          price: rgbToggle === "rainbow" ? 2500 : 4e3,
          img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=600&q=80"
        },
        qty: 1
      });
    }
    if (glassType !== "clear") {
      itemsToAdd.push({
        product: {
          id: "pcb_extra_glass_" + glassType,
          name: `PC Case Panel Upgrade - ${glassType === "tinted" ? "Tinted Tempered Glass" : "Dual-Chamber Panoramic Glass"}`,
          brand: "Fast Computers",
          price: glassType === "tinted" ? 1500 : 6e3,
          img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=600&q=80"
        },
        qty: 1
      });
    }
    if (extraFans !== "none") {
      itemsToAdd.push({
        product: {
          id: "pcb_extra_fans_" + extraFans,
          name: `Extra Case Fans - ${extraFans === "3x" ? "3-Pack 120mm RGB Fans" : "6-Pack 120mm RGB Fans"}`,
          brand: "Fast Computers",
          price: extraFans === "3x" ? 8e3 : 15e3,
          img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=600&q=80"
        },
        qty: 1
      });
    }
    if (itemsToAdd.length === 0) return;
    await addMultipleToCart(itemsToAdd);
    setIsPCBuilderOpen(false);
  };
  const renderSlotSelector = (slot, label, icon, isOptional = false) => {
    const selectedItem = parts[slot];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        onClick: () => setActiveSlot(slot),
        className: `flex items-center justify-between p-4 border rounded-sm cursor-pointer transition-all duration-300 ${activeSlot === slot ? "border-primary/80 bg-primary/5" : selectedItem ? "border-white/20 bg-white/5 hover:bg-white/10" : "border-white/5 bg-transparent hover:border-white/20"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2 rounded-sm ${selectedItem ? "text-primary" : "text-muted-foreground"}`, children: icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: [
                label,
                " ",
                isOptional && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-primary/70", children: "(Optional)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: selectedItem ? selectedItem.name : "Select component..." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: selectedItem ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-primary font-bold text-sm", children: [
              "PKR ",
              selectedItem.price.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: (e) => {
                  e.stopPropagation();
                  setParts((prev) => ({ ...prev, [slot]: null }));
                },
                className: "text-[10px] text-red-400 hover:text-red-300 font-semibold",
                children: "Clear"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground group-hover:text-primary transition font-semibold uppercase tracking-wider", children: "Select" }) })
        ]
      },
      slot
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isPCBuilderOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setIsPCBuilderOpen(false),
        className: "absolute inset-0 bg-[#06080C]/80 backdrop-blur-md"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: 20 },
        transition: { type: "spring", duration: 0.5 },
        className: "relative w-full max-w-7xl h-[90vh] bg-[#0A0D14]/90 border border-white/10 rounded-lg shadow-2xl flex flex-col overflow-hidden text-foreground glow-shadow-blue",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1E3A8A]/10 rounded-full blur-[100px] pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-white/10 flex items-center justify-between z-10 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-sm bg-primary/20 flex items-center justify-center border border-primary/50 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "w-5 h-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold uppercase tracking-wider", children: "Custom PC Builder" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Fast Computers Configurator v2.5" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex items-center gap-2", children: [1, 2, 3, 4].map((step) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => currentStep > step && setCurrentStep(step),
                  disabled: currentStep < step,
                  className: `w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all border ${currentStep === step ? "bg-primary border-primary text-primary-foreground font-extrabold shadow-glow-sm" : currentStep > step ? "bg-primary/20 border-primary text-primary hover:bg-primary/30 cursor-pointer" : "bg-white/5 border-white/10 text-muted-foreground cursor-not-allowed"}`,
                  children: currentStep > step ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5" }) : step
                }
              ),
              step < 4 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-8 h-[2px] mx-1 transition-all ${currentStep > step ? "bg-primary" : "bg-white/10"}` })
            ] }, step)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setIsPCBuilderOpen(false),
                className: "p-2 hover:bg-white/5 border border-white/0 hover:border-white/10 rounded-sm text-muted-foreground hover:text-foreground transition duration-300",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col lg:flex-row overflow-hidden z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 p-6 overflow-y-auto border-r border-white/10 scrollbar-thin", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCcw, { className: "w-10 h-10 text-primary animate-spin" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground uppercase tracking-widest", children: "Loading component catalog..." })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
              currentStep === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: 20 },
                  className: "space-y-6",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold uppercase text-gradient-red inline-block mb-1", children: "1. Choose PC Purpose" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Select your primary use case. We will optimize parts recommendation based on this purpose." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: [
                      { id: "gaming", label: "Gaming", desc: "Maximize frame rate and gaming visual fidelity in AAA titles.", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-6 h-6" }), tag: "High-FPS Ready" },
                      { id: "streaming", label: "Streaming", desc: "Encode and broadcast seamless game streams to Twitch/YouTube.", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-6 h-6" }), tag: "Dual-Encoder Support" },
                      { id: "editing", label: "Video Editing", desc: "Accelerate rendering and software preview in Premiere & DaVinci.", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-6 h-6" }), tag: "AV1 & CUDA Accelerated" },
                      { id: "programming", label: "Programming", desc: "Ultra-fast compile times, virtual machine operations, and containers.", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "w-6 h-6" }), tag: "Multi-Thread Heavy" },
                      { id: "office", label: "Office / Productivity", desc: "Lightweight spreadsheets, browser-heavy suites, and reliable storage.", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { className: "w-6 h-6" }), tag: "Silent & Efficient" }
                    ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        onClick: () => setPurpose(item.id),
                        className: `p-5 border rounded-sm cursor-pointer transition-all duration-300 hover:border-primary/50 relative overflow-hidden group ${purpose === item.id ? "border-primary bg-primary/5 red-border-glow" : "border-white/10 bg-white/5"}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-3 w-12 h-12 rounded-sm mb-4 flex items-center justify-center ${purpose === item.id ? "bg-primary/20 text-primary" : "bg-white/5 text-muted-foreground"}`, children: item.icon }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-lg", children: item.label }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2 leading-relaxed", children: item.desc }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 right-2 text-[9px] uppercase tracking-wider font-semibold border border-primary/20 px-1.5 py-0.5 rounded-xs bg-primary/10 text-primary/90 opacity-80", children: item.tag })
                        ]
                      },
                      item.id
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 p-4 bg-primary/5 border border-primary/20 rounded-sm flex items-start gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs leading-relaxed text-muted-foreground", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold", children: "Smart Guide:" }),
                        " Choosing a purpose automatically selects optimal configurations and recommends appropriate price thresholds. You are free to customize any component individually in the later steps."
                      ] })
                    ] })
                  ]
                },
                "step1"
              ),
              currentStep === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: 20 },
                  className: "space-y-6",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold uppercase text-gradient-red inline-block mb-1", children: "2. Choose Budget" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Select your ideal budget. We will filter components and recommended chips to match this budget." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 p-6 rounded-sm space-y-6", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Target Budget" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-display font-bold text-primary", children: [
                          "PKR ",
                          budget.toLocaleString()
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "range",
                            min: "50000",
                            max: "500000",
                            step: "5000",
                            value: budget,
                            onChange: (e) => setBudget(Number(e.target.value)),
                            className: "w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-muted-foreground mt-2 uppercase tracking-widest", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Rs. 50,000" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Rs. 275,000" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Rs. 500,000" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/5 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Estimated Tier Recommendation:" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 font-semibold uppercase tracking-wider text-xs border border-primary/30 rounded-xs bg-primary/10 text-primary shadow-glow-sm self-start", children: budget < 12e4 ? "Entry Level Build" : budget < 25e4 ? "Mid-Tier Rig" : budget < 38e4 ? "High-Performance Weapon" : "Ultimate God-Tier Station" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Processor & Chip Preference" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-3", children: [
                        { id: "all", label: "All Hardware", desc: "Display all available components regardless of price." },
                        { id: "budget", label: "Budget Chips", desc: "Limit processor options to affordable chips under Rs. 60,000." },
                        { id: "high-end", label: "High-End Hardware", desc: "Limit components to high performance, overclockable hardware." }
                      ].map((chip) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          onClick: () => setChipType(chip.id),
                          className: `p-4 border rounded-sm cursor-pointer transition-all duration-300 hover:border-primary/45 ${chipType === chip.id ? "border-primary bg-primary/5" : "border-white/10 bg-white/5"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1.5", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-3.5 h-3.5 rounded-full border flex items-center justify-center ${chipType === chip.id ? "border-primary text-primary" : "border-white/20"}`, children: chipType === chip.id && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 bg-primary rounded-full" }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm", children: chip.label })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground leading-relaxed", children: chip.desc })
                          ]
                        },
                        chip.id
                      )) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: autoFillBuild,
                        className: "inline-flex items-center gap-2 border border-primary/50 hover:bg-primary hover:text-primary-foreground font-semibold px-6 py-3 text-xs uppercase tracking-widest text-primary transition duration-300 shadow-glow-sm",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCcw, { className: "w-4 h-4" }),
                          " Auto-Fill Recommended Parts"
                        ]
                      }
                    ) })
                  ]
                },
                "step2"
              ),
              currentStep === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: 20 },
                  className: "space-y-6",
                  children: activeSlot ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-white/10 pb-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            onClick: () => setActiveSlot(null),
                            className: "text-muted-foreground hover:text-foreground transition flex items-center gap-1 text-xs uppercase tracking-wider font-semibold",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                              " Back to Slots"
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/20", children: "|" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm uppercase tracking-wider font-bold", children: [
                          "Select ",
                          slotToCategory(activeSlot)
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                        filteredOptions.length,
                        " available"
                      ] })
                    ] }),
                    filteredOptions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-white/5 p-12 text-center text-muted-foreground", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-8 h-8 mx-auto text-primary/70 mb-3" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-white", children: "No Components Found" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs mt-1", children: [
                        "No in-stock ",
                        slotToCategory(activeSlot),
                        " match your selected filter preference."
                      ] })
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: filteredOptions.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: `border border-white/10 bg-white/5 p-4 rounded-sm flex gap-4 hover:border-primary/50 transition-all duration-300 relative group`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: item.name, className: "w-20 h-20 object-cover shrink-0 rounded-xs border border-white/5" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col justify-between", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase tracking-widest text-primary font-bold", children: item.brand }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-xs mt-0.5 leading-snug line-clamp-2", children: item.name })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mt-2", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-primary font-bold text-xs", children: [
                                "PKR ",
                                item.price.toLocaleString()
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  onClick: () => selectItem(activeSlot, item),
                                  className: "bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xs hover:brightness-110 transition shrink-0",
                                  children: "Choose"
                                }
                              )
                            ] })
                          ] }),
                          item.specs && item.specs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 right-2 opacity-50 group-hover:opacity-100 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group/tooltip", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-4 h-4 cursor-pointer text-muted-foreground" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 bottom-full mb-2 w-52 p-3 bg-[#0C0F15] border border-white/10 rounded-xs text-[10px] leading-relaxed shadow-lg hidden group-hover/tooltip:block z-20", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold border-b border-white/10 pb-1 mb-1.5 uppercase text-primary", children: "Specs:" }),
                              item.specs.slice(0, 5).map((spec, sIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-0.5 border-b border-white/5", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                                  spec.label,
                                  ":"
                                ] }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-right", children: spec.value })
                              ] }, sIdx))
                            ] })
                          ] }) })
                        ]
                      },
                      item.id
                    )) })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold uppercase text-gradient-red inline-block mb-1", children: "3. Select Components" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Click on each hardware slot to pick compatible options for your custom build." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-widest text-primary font-bold", children: "Required Components" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
                        renderSlotSelector("processor", "Processor (CPU)", /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "w-5 h-5" })),
                        renderSlotSelector("motherboard", "Motherboard", /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-5 h-5" })),
                        renderSlotSelector("gpu", "Graphics Card (GPU)", /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-5 h-5" })),
                        renderSlotSelector("ram", "Memory (RAM)", /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5" })),
                        renderSlotSelector("storage", "Storage (M.2 SSD)", /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "w-5 h-5" })),
                        renderSlotSelector("cooler", "CPU Cooler", /* @__PURE__ */ jsxRuntimeExports.jsx(Snowflake, { className: "w-5 h-5" })),
                        renderSlotSelector("psu", "Power Supply (PSU)", /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5" })),
                        renderSlotSelector("case", "PC Case", /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-5 h-5" })),
                        renderSlotSelector("fans", "Case Fans", /* @__PURE__ */ jsxRuntimeExports.jsx(Snowflake, { className: "w-5 h-5" }))
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-widest text-primary font-bold", children: "Optional Peripherals" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
                        renderSlotSelector("monitor", "Gaming Monitor", /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { className: "w-5 h-5" }), true),
                        renderSlotSelector("keyboard", "Mechanical Keyboard", /* @__PURE__ */ jsxRuntimeExports.jsx(Keyboard, { className: "w-5 h-5" }), true),
                        renderSlotSelector("mouse", "Gaming Mouse", /* @__PURE__ */ jsxRuntimeExports.jsx(Mouse, { className: "w-5 h-5" }), true),
                        renderSlotSelector("headset", "Gaming Headset", /* @__PURE__ */ jsxRuntimeExports.jsx(Headphones, { className: "w-5 h-5" }), true)
                      ] })
                    ] })
                  ] })
                },
                "step3"
              ),
              currentStep === 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: 20 },
                  className: "space-y-6",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold uppercase text-gradient-red inline-block mb-1", children: "4. Appearance & Extras" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Perfect the aesthetic design of your rig with case color configurations and custom lighting choices." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 p-5 rounded-sm space-y-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs uppercase tracking-widest font-bold text-primary flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4" }),
                          " PC Case Color Selection"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: [
                          { id: "black", label: "Matte Black", hex: "#111827", border: "border-white/10" },
                          { id: "white", label: "Matte White", hex: "#F9FAFB", border: "border-white/30" },
                          { id: "red", label: "Cyber Red", hex: "#EF4444", border: "border-red-500/20" }
                        ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            onClick: () => setCaseColor(c.id),
                            className: `flex-1 p-3 border rounded-sm flex flex-col items-center gap-2 hover:bg-white/5 transition ${caseColor === c.id ? "border-primary bg-primary/5" : "border-white/10"}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-8 h-8 rounded-full border ${c.border}`, style: { backgroundColor: c.hex } }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold", children: c.label })
                            ]
                          },
                          c.id
                        )) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 p-5 rounded-sm space-y-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs uppercase tracking-widest font-bold text-primary flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4" }),
                          " RGB LED Kit Upgrade"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: [
                          { id: "off", label: "Off / Stealth", price: 0 },
                          { id: "rainbow", label: "Rainbow RGB", price: 2500 },
                          { id: "static", label: "Custom Static", price: 4e3 }
                        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            onClick: () => setRgbToggle(item.id),
                            className: `p-3 border rounded-sm text-center flex flex-col justify-between gap-1 hover:bg-white/5 transition ${rgbToggle === item.id ? "border-primary bg-primary/5" : "border-white/10"}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold block", children: item.label }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground block", children: item.price === 0 ? "Free" : `+ Rs. ${item.price.toLocaleString()}` })
                            ]
                          },
                          item.id
                        )) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 p-5 rounded-sm space-y-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs uppercase tracking-widest font-bold text-primary flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-4 h-4" }),
                          " Side Panel Material"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: [
                          { id: "clear", label: "Clear Glass", price: 0 },
                          { id: "tinted", label: "Dark Tinted", price: 1500 },
                          { id: "panoramic", label: "Panoramic Dual", price: 6e3 }
                        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            onClick: () => setGlassType(item.id),
                            className: `p-3 border rounded-sm text-center flex flex-col justify-between gap-1 hover:bg-white/5 transition ${glassType === item.id ? "border-primary bg-primary/5" : "border-white/10"}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold block leading-tight", children: item.label }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground block", children: item.price === 0 ? "Free" : `+ Rs. ${item.price.toLocaleString()}` })
                            ]
                          },
                          item.id
                        )) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 p-5 rounded-sm space-y-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs uppercase tracking-widest font-bold text-primary flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Snowflake, { className: "w-4 h-4" }),
                          " Extra RGB Fans Upgrade"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: [
                          { id: "none", label: "None", price: 0 },
                          { id: "3x", label: "3x 120mm fans", price: 8e3 },
                          { id: "6x", label: "6x 120mm fans", price: 15e3 }
                        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            onClick: () => setExtraFans(item.id),
                            className: `p-3 border rounded-sm text-center flex flex-col justify-between gap-1 hover:bg-white/5 transition ${extraFans === item.id ? "border-primary bg-primary/5" : "border-white/10"}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-bold block leading-tight", children: item.label }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground block", children: item.price === 0 ? "None" : `+ Rs. ${item.price.toLocaleString()}` })
                            ]
                          },
                          item.id
                        )) })
                      ] })
                    ] })
                  ]
                },
                "step4"
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full lg:w-96 p-6 bg-[#0E1119] flex flex-col justify-between shrink-0 overflow-y-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-white/10 pb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs uppercase tracking-widest font-bold text-primary", children: "Summary Panel" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] uppercase tracking-wider font-semibold border border-primary/20 px-2 py-0.5 rounded-xs bg-primary/5 text-primary", children: [
                    purpose,
                    " Config"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 max-h-[25vh] lg:max-h-[35vh] overflow-y-auto pr-1 scrollbar-thin", children: [
                  Object.entries(parts).map(([slot, item]) => {
                    if (!item) return null;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs border-b border-white/5 pb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 pr-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase text-muted-foreground block", children: slot }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold block truncate text-foreground", children: item.name })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-primary shrink-0", children: [
                        "Rs. ",
                        item.price.toLocaleString()
                      ] })
                    ] }, slot);
                  }),
                  rgbToggle !== "off" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs border-b border-white/5 pb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase text-muted-foreground block", children: "LED RGB Upgrade" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold block truncate text-foreground", children: rgbToggle === "rainbow" ? "Rainbow RGB Kit" : "Static RGB Kit" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-primary shrink-0", children: [
                      "Rs. ",
                      (rgbToggle === "rainbow" ? 2500 : 4e3).toLocaleString()
                    ] })
                  ] }),
                  glassType !== "clear" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs border-b border-white/5 pb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase text-muted-foreground block", children: "Side Panel" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold block truncate text-foreground", children: glassType === "tinted" ? "Dark Tinted Glass" : "Panoramic Glass Panel" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-primary shrink-0", children: [
                      "Rs. ",
                      (glassType === "tinted" ? 1500 : 6e3).toLocaleString()
                    ] })
                  ] }),
                  extraFans !== "none" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-xs border-b border-white/5 pb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase text-muted-foreground block", children: "Extra Fans" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold block truncate text-foreground", children: extraFans === "3x" ? "3x 120mm RGB Fans" : "6x 120mm RGB Fans" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-primary shrink-0", children: [
                      "Rs. ",
                      (extraFans === "3x" ? 8e3 : 15e3).toLocaleString()
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 border-t border-white/10 pt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Total Price" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-display font-bold text-primary", children: [
                        "PKR ",
                        totalPrice.toLocaleString()
                      ] }),
                      totalPrice > budget && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9.5px] text-primary/80 block", children: [
                        "⚠️ Over target by Rs. ",
                        (totalPrice - budget).toLocaleString()
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-3 border rounded-sm flex items-start gap-2.5 ${compatibilityInfo.status === "compatible" ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-400" : compatibilityInfo.status === "warning" ? "border-amber-500/20 bg-amber-500/5 text-amber-400" : "border-red-500/20 bg-red-500/5 text-red-400"}`, children: [
                    compatibilityInfo.status === "compatible" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 shrink-0 mt-0.5" }) : compatibilityInfo.status === "warning" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 shrink-0 mt-0.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 shrink-0 mt-0.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] leading-relaxed", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold uppercase tracking-wider", children: [
                        compatibilityInfo.status === "compatible" && "Compatible",
                        compatibilityInfo.status === "warning" && "Compatibility Warning",
                        compatibilityInfo.status === "incomplete" && "Selection Incomplete",
                        compatibilityInfo.status === "error" && "Hardware Incompatible"
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-muted-foreground", children: compatibilityInfo.message })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 text-[10px] text-muted-foreground pt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-2 border border-white/5 rounded-xs", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[8px] uppercase tracking-widest", children: "Est. Build Time" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold block mt-0.5 text-foreground leading-tight", children: estBuildTime })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 p-2 border border-white/5 rounded-xs", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[8px] uppercase tracking-widest", children: "Warranty Protection" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold block mt-0.5 text-foreground leading-tight flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-3 h-3 text-primary" }),
                        " 1-Year Fast Protection"
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-6 border-t border-white/10 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  currentStep > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => setCurrentStep((prev) => prev - 1),
                      className: "flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-widest py-3 flex items-center justify-center gap-1.5 transition duration-300",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-3.5 h-3.5" }),
                        " Prev"
                      ]
                    }
                  ),
                  currentStep < 4 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => setCurrentStep((prev) => prev + 1),
                      className: "flex-1 bg-primary hover:brightness-110 text-primary-foreground text-xs font-bold uppercase tracking-widest py-3 flex items-center justify-center gap-1.5 transition duration-300 shadow-glow-sm",
                      children: [
                        "Next ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                      ]
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: addCompleteBuildToCart,
                      disabled: compatibilityInfo.status === "error" || compatibilityInfo.status === "incomplete",
                      className: `flex-1 bg-primary hover:brightness-110 text-primary-foreground text-xs font-bold uppercase tracking-widest py-3 flex items-center justify-center gap-2 transition duration-300 shadow-glow-sm ${compatibilityInfo.status === "error" || compatibilityInfo.status === "incomplete" ? "opacity-50 cursor-not-allowed" : ""}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-4 h-4" }),
                        " Add PC to Cart"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setIsPCBuilderOpen(false),
                    className: "w-full bg-transparent hover:bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground text-xs uppercase tracking-widest py-2 transition duration-300 font-semibold",
                    children: "Cancel Build"
                  }
                )
              ] })
            ] })
          ] })
        ]
      }
    )
  ] }) });
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CartWishlistProvider, { children: isLoading && !hasLoaded ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, { onComplete: handleLoadingComplete }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PCBuilderModal, {})
  ] }) }) }) });
}
const $$splitComponentImporter$b = () => import("./wishlist-miqoKKqo.mjs");
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
const $$splitComponentImporter$a = () => import("./shop-CTWJzcdh.mjs");
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
const $$splitComponentImporter$9 = () => import("./orders-w5HLqsss.mjs");
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
const $$splitComponentImporter$8 = () => import("./contact-3DbBqlwF.mjs");
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
const $$splitComponentImporter$7 = () => import("./checkout-h3-uRXpu.mjs");
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
const $$splitComponentImporter$6 = () => import("./categories-s6u2OipX.mjs");
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
const $$splitComponentImporter$5 = () => import("./cart-BMrT7B-W.mjs");
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
const $$splitComponentImporter$4 = () => import("./auth-DxfzdwIe.mjs");
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
const $$splitComponentImporter$3 = () => import("./admin-DesXEFS_.mjs");
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
const $$splitComponentImporter$2 = () => import("./about-CIdkihsP.mjs");
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
const $$splitComponentImporter$1 = () => import("./index-CdSX9trX.mjs");
const Route$1 = createFileRoute("/")({
  loader: async () => {
    return await getProductsFn();
  },
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./product._id-BUV_0Anh.mjs");
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
