import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-Z9rLZ2Aq.mjs";
import { a as useAuth } from "./router-SoUVH66f.mjs";
import "../_libs/seroval.mjs";
import "../_libs/sweetalert2.mjs";
import { Z as Zap, u as ShieldCheck, _ as Trophy, U as User, j as Mail, l as Lock, m as EyeOff, E as Eye, k as LoaderCircle, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "./server-CTzAty7X.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function AuthPage() {
  const [mode, setMode] = reactExports.useState("signin");
  const [showPw, setShowPw] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const navigate = useNavigate();
  const {
    login,
    register
  } = useAuth();
  const handleGoogleLogin = () => {
    const clientId = "673994236271-0uko5ihctft2o22kdob4a3d3h1282805.apps.googleusercontent.com";
    const redirectUri = `${window.location.origin}/auth/google/callback`;
    const scope = "openid email profile";
    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: "code",
      scope,
      access_type: "offline",
      prompt: "select_account"
    });
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");
    try {
      if (mode === "signin") {
        await login(email, password);
      } else {
        await register(email, password, name);
      }
      navigate({
        to: "/"
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Authentication failed");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[calc(100vh-5rem)] grid lg:grid-cols-2 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative hidden lg:flex flex-col justify-between p-16 border-r border-border overflow-hidden slash-bg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full animate-float-slow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: -20
        }, animate: {
          opacity: 1,
          y: 0
        }, className: "relative flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-3xl font-display font-bold tracking-widest", children: [
            "F",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "/" }),
            "AST"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.3em] text-muted-foreground border-l border-border pl-3", children: "COMPUTERS" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            delay: 0.1
          }, className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary tracking-[0.3em] text-xs font-semibold uppercase", children: "Members Only" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h2, { initial: {
            opacity: 0,
            y: 30
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            delay: 0.2,
            duration: 0.6
          }, className: "mt-4 text-5xl xl:text-6xl font-bold uppercase leading-none", children: [
            "Enter the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Fast Zone" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
            opacity: 0
          }, animate: {
            opacity: 1
          }, transition: {
            delay: 0.3
          }, className: "mt-6 text-muted-foreground max-w-md", children: "Join thousands of Pakistani gamers and creators. Track orders, unlock member deals, and pre-order the newest hardware first." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 space-y-4", children: [{
            icon: Zap,
            title: "Early access",
            desc: "Get first dibs on new GPU drops and flash sales."
          }, {
            icon: ShieldCheck,
            title: "Warranty vault",
            desc: "All your purchase warranties stored in one place."
          }, {
            icon: Trophy,
            title: "Loyalty XP",
            desc: "Earn XP on every order and redeem for gear."
          }].map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            x: -20
          }, animate: {
            opacity: 1,
            x: 0
          }, transition: {
            delay: 0.4 + i * 0.1
          }, className: "flex gap-4 border border-border bg-card/50 backdrop-blur p-4 hover:border-primary transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 border border-border bg-background flex items-center justify-center text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-sm uppercase tracking-wider", children: f.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: f.desc })
            ] })
          ] }, f.title)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative text-xs text-muted-foreground uppercase tracking-widest", children: "© 2026 Fast Computers · Lahore, Pakistan" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex items-center justify-center p-6 sm:p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 border border-border bg-card p-1", children: ["signin", "signup"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setMode(m), className: `relative flex-1 py-3 text-xs font-bold uppercase tracking-widest transition ${mode === m ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`, children: [
          mode === m && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { layoutId: "auth-tab", className: "absolute inset-0 bg-primary", transition: {
            type: "spring",
            stiffness: 400,
            damping: 30
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: m === "signin" ? "Sign In" : "Sign Up" })
        ] }, m)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.form, { initial: {
          opacity: 0,
          y: 10
        }, animate: {
          opacity: 1,
          y: 0
        }, exit: {
          opacity: 0,
          y: -10
        }, transition: {
          duration: 0.25
        }, onSubmit: handleSubmit, className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary tracking-[0.3em] text-xs font-semibold uppercase", children: mode === "signin" ? "Welcome Back" : "Create Account" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold uppercase leading-tight", children: mode === "signin" ? "Sign in to your rig" : "Join the community" }),
          error && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            opacity: 0,
            y: -10
          }, animate: {
            opacity: 1,
            y: 0
          }, className: "mt-4 p-3 bg-destructive/10 border border-destructive text-destructive text-sm rounded", children: error }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-4", children: [
            mode === "signup" && /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { icon: User, label: "Full Name", name: "name", type: "text", placeholder: "e.g. Ali Raza" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { icon: Mail, label: "Email Address", name: "email", type: "email", placeholder: "you@fastcomputers.pk" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Password" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center border border-border bg-background focus-within:border-primary transition", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 mx-3 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, minLength: 6, name: "password", type: showPw ? "text" : "password", placeholder: "••••••••", className: "flex-1 bg-transparent py-3 outline-none text-sm" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowPw(!showPw), className: "px-3 text-muted-foreground hover:text-primary", children: showPw ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" }) })
              ] })
            ] }),
            mode === "signin" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "accent-primary" }),
                " Remember me"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/forgot-password", className: "text-primary uppercase tracking-widest hover:brightness-125", children: "Forgot password?" })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-2 text-xs text-muted-foreground cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "checkbox", className: "mt-0.5 accent-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "I agree to the ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-primary hover:underline", children: "Terms of Service" }),
                " and ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-primary hover:underline", children: "Privacy Policy" }),
                "."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading, className: "mt-8 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
            mode === "signin" ? "Signing In..." : "Creating Account..."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            mode === "signin" ? "Sign In" : "Create Account",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "or continue with" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: handleGoogleLogin, className: "w-full flex items-center justify-center gap-3 border border-border bg-card py-3 text-sm font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-4 h-4", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z", fill: "#4285F4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z", fill: "#34A853" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z", fill: "#FBBC05" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z", fill: "#EA4335" })
            ] }),
            "Continue with Google"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-sm text-center text-muted-foreground", children: mode === "signin" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "New to Fast Computers?",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setMode("signup"), className: "text-primary font-bold uppercase tracking-widest text-xs hover:brightness-125", children: "Create account" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Already a member?",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setMode("signin"), className: "text-primary font-bold uppercase tracking-widest text-xs hover:brightness-125", children: "Sign in" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-center text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-primary", children: "← Back to homepage" }) })
        ] }, mode) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function Field({
  icon: Icon,
  label,
  name,
  type,
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center border border-border bg-background focus-within:border-primary transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 mx-3 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, name, type, placeholder, className: "flex-1 bg-transparent py-3 pr-3 outline-none text-sm" })
    ] })
  ] });
}
export {
  AuthPage as component
};
