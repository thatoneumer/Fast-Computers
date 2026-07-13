import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-DcL5ODS7.mjs";
import { a as useAuth, s as sendResetOtpFn, v as verifyOtpFn, c as verifyOtpAndResetPasswordFn } from "./router-Dpz7ddGE.mjs";
import { S as Swal } from "../_libs/sweetalert2.mjs";
import "../_libs/seroval.mjs";
import { A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { m as Mail, n as LoaderCircle, A as ArrowRight, K as KeyRound, o as Lock, p as EyeOff, E as Eye } from "../_libs/lucide-react.mjs";
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
import "./server-CWz37dU3.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "./email-CrmUIKV1.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ForgotPasswordPage() {
  const [step, setStep] = reactExports.useState(1);
  const [email, setEmail] = reactExports.useState("");
  const [otp, setOtp] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [confirmPassword, setConfirmPassword] = reactExports.useState("");
  const [showPw, setShowPw] = reactExports.useState(false);
  const [showConfirmPw, setShowConfirmPw] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const {
    login
  } = useAuth();
  const navigate = useNavigate();
  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      await sendResetOtpFn({
        data: {
          email
        }
      });
      setStep(2);
      Swal.fire({
        title: "Code Sent!",
        text: "We have sent a verification code to your email. Please check your inbox.",
        icon: "success",
        background: "#1E1E1E",
        color: "#FFF",
        confirmButtonColor: "#dc2626"
      });
    } catch (err) {
      setError(err?.message || "Failed to send reset code. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp) return;
    if (otp.length !== 6 || isNaN(Number(otp))) {
      setError("Please enter a valid 6-digit verification code");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await verifyOtpFn({
        data: {
          email,
          otp
        }
      });
      setStep(3);
    } catch (err) {
      setError(err?.message || "Invalid or expired code. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) return;
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await verifyOtpAndResetPasswordFn({
        data: {
          email,
          otp,
          newPassword: password
        }
      });
      await login(email, password);
      await Swal.fire({
        title: "Password Updated!",
        text: "Your password has been reset successfully. You are now logged in.",
        icon: "success",
        background: "#1E1E1E",
        color: "#FFF",
        confirmButtonColor: "#dc2626"
      });
      navigate({
        to: "/"
      });
    } catch (err) {
      setError(err?.message || "Verification failed or code expired. Please restart the process.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[calc(100vh-5rem)] grid lg:grid-cols-2 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative hidden lg:flex flex-col justify-between p-16 border-r border-border overflow-hidden slash-bg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-3xl font-display font-bold tracking-widest", children: [
            "F",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "/" }),
            "AST"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.3em] text-muted-foreground border-l border-border pl-3", children: "COMPUTERS" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary tracking-[0.3em] text-xs font-semibold uppercase", children: "Account Security" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-5xl xl:text-6xl font-bold uppercase leading-none", children: [
            "Recover Your ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Credentials" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground max-w-md", children: "Follow the secure steps to restore access to your account. We will send a verification code using the Google Apps Script email service configured in your environment." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative text-xs text-muted-foreground uppercase tracking-widest", children: "© 2026 Fast Computers · Lahore, Pakistan" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex items-center justify-center p-6 sm:p-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth", className: "inline-flex items-center text-xs text-muted-foreground hover:text-primary transition gap-1.5 mb-8 uppercase tracking-widest font-bold", children: "← Back to Sign In" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
          step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.form, { initial: {
            opacity: 0,
            y: 10
          }, animate: {
            opacity: 1,
            y: 0
          }, exit: {
            opacity: 0,
            y: -10
          }, transition: {
            duration: 0.2
          }, onSubmit: handleSendOtp, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary tracking-[0.3em] text-xs font-semibold uppercase", children: "Stage 1 of 3" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold uppercase leading-tight", children: "Forgot Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Enter your registered email address and we'll send you a 6-digit verification code." }),
            error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 p-3 bg-destructive/10 border border-destructive text-destructive text-sm rounded", children: error }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Email Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center border border-border bg-background focus-within:border-primary transition", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 mx-3 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", placeholder: "you@fastcomputers.pk", value: email, onChange: (e) => setEmail(e.target.value), className: "flex-1 bg-transparent py-3 pr-3 outline-none text-sm" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading, className: "mt-8 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
              "Sending Code..."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Send Reset Code ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ] }) })
          ] }, "step1"),
          step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.form, { initial: {
            opacity: 0,
            y: 10
          }, animate: {
            opacity: 1,
            y: 0
          }, exit: {
            opacity: 0,
            y: -10
          }, transition: {
            duration: 0.2
          }, onSubmit: handleVerifyOtp, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary tracking-[0.3em] text-xs font-semibold uppercase", children: "Stage 2 of 3" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold uppercase leading-tight", children: "Verify Code" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
              "We sent a 6-digit recovery code to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: email }),
              ". Enter the code below."
            ] }),
            error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 p-3 bg-destructive/10 border border-destructive text-destructive text-sm rounded", children: error }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Verification Code" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center border border-border bg-background focus-within:border-primary transition", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { className: "w-4 h-4 mx-3 text-muted-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "text", maxLength: 6, placeholder: "e.g. 123456", value: otp, onChange: (e) => setOtp(e.target.value), className: "flex-1 bg-transparent py-3 pr-3 outline-none text-sm tracking-widest font-mono font-bold" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex justify-between items-center text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
                setStep(1);
                setError("");
              }, className: "text-muted-foreground hover:text-foreground", children: "Change Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: handleSendOtp, className: "text-primary font-bold hover:underline", children: "Resend Code" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading, className: "mt-8 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
              "Verifying..."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Verify Code ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ] }) })
          ] }, "step2"),
          step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.form, { initial: {
            opacity: 0,
            y: 10
          }, animate: {
            opacity: 1,
            y: 0
          }, exit: {
            opacity: 0,
            y: -10
          }, transition: {
            duration: 0.2
          }, onSubmit: handleResetPassword, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary tracking-[0.3em] text-xs font-semibold uppercase", children: "Stage 3 of 3" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold uppercase leading-tight", children: "Reset Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Setup a secure new password for your account." }),
            error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 p-3 bg-destructive/10 border border-destructive text-destructive text-sm rounded", children: error }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "New Password" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center border border-border bg-background focus-within:border-primary transition", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 mx-3 text-muted-foreground" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, minLength: 6, type: showPw ? "text" : "password", placeholder: "••••••••", value: password, onChange: (e) => setPassword(e.target.value), className: "flex-1 bg-transparent py-3 outline-none text-sm" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowPw(!showPw), className: "px-3 text-muted-foreground hover:text-primary", children: showPw ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Confirm New Password" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center border border-border bg-background focus-within:border-primary transition", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 mx-3 text-muted-foreground" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, minLength: 6, type: showConfirmPw ? "text" : "password", placeholder: "••••••••", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), className: "flex-1 bg-transparent py-3 outline-none text-sm" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowConfirmPw(!showConfirmPw), className: "px-3 text-muted-foreground hover:text-primary", children: showConfirmPw ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" }) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading, className: "mt-8 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition disabled:opacity-50", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
              "Resetting Password..."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Reset & Sign In ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ] }) })
          ] }, "step3")
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ForgotPasswordPage as component
};
