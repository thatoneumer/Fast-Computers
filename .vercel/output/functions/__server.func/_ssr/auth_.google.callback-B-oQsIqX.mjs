import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { a as useAuth, t as generateWelcomeEmailHTML, r as createSsrRpc } from "./router-Ipyxwf8H.mjs";
import { c as createServerFn } from "./server-CV-TUOqx.mjs";
import { s as sendEmail } from "./email-CrmUIKV1.mjs";
import { S as Swal } from "../_libs/sweetalert2.mjs";
import "../_libs/seroval.mjs";
import { j as LoaderCircle } from "../_libs/lucide-react.mjs";
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
import "../_libs/motion.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const googleLoginFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("f846724138f9143added61f52929b69ba86d76f84522579c79b65c0c4bfffe4b"));
function GoogleCallbackPage() {
  const navigate = useNavigate();
  const {
    loginWithGoogle
  } = useAuth();
  const [error, setError] = reactExports.useState("");
  const processedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (processedRef.current) return;
    processedRef.current = true;
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const errorParam = params.get("error");
    if (errorParam) {
      setError("Google sign-in was cancelled or failed.");
      setTimeout(() => navigate({
        to: "/auth"
      }), 2e3);
      return;
    }
    if (!code) {
      setError("No authorization code received.");
      setTimeout(() => navigate({
        to: "/auth"
      }), 2e3);
      return;
    }
    const handleCallback = async () => {
      try {
        const redirectUri = `${window.location.origin}/auth/google/callback`;
        const result = await googleLoginFn({
          data: {
            code,
            redirectUri
          }
        });
        await loginWithGoogle(result.user, result.token);
        if (result.isNewUser) {
          sendEmail({
            to: result.user.email,
            subject: `Welcome to Fast Computers, ${result.user.name}! 🎮`,
            htmlBody: generateWelcomeEmailHTML(result.user.name, "google")
          }).catch((err) => console.error("Welcome email (Google) error:", err));
        }
        await Swal.fire({
          title: "Welcome!",
          text: `Signed in as ${result.user.name}`,
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
          background: "#1E1E1E",
          color: "#FFF"
        });
        navigate({
          to: "/"
        });
      } catch (err) {
        setError(err?.message || "Google sign-in failed. Please try again.");
        setTimeout(() => navigate({
          to: "/auth"
        }), 3e3);
      }
    };
    handleCallback();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: error ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive font-medium", children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Redirecting back to login..." })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-10 h-10 animate-spin text-primary mx-auto" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-medium uppercase tracking-widest text-sm", children: "Completing Google Sign-In..." })
  ] }) });
}
export {
  GoogleCallbackPage as component
};
