import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-Cho16jbK.mjs";
import { P as PageHero } from "./PageHero-GT7BXNsf.mjs";
import { T as Tilt3D } from "./Tilt3D-BKhZYuCs.mjs";
import { s as sendEmail } from "./email-CrmUIKV1.mjs";
import { c as generateContactEmailHTML } from "./router-BIJoEszr.mjs";
import "../_libs/seroval.mjs";
import "../_libs/sweetalert2.mjs";
import { g as MapPin, m as Phone, i as Mail, n as Clock, o as MessageSquare, j as LoaderCircle, p as Send } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "./server-Cff5kpYe.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const infos = [{
  icon: MapPin,
  title: "Physical Store",
  value: "Plaza 45-B, Sector XX, Phase 3, DHA, Lahore, Pakistan."
}, {
  icon: Phone,
  title: "Helpline & WhatsApp",
  value: "+92 (300) 123-4567"
}, {
  icon: Mail,
  title: "General & Support Email",
  value: "support@fastcomputers.pk"
}, {
  icon: Clock,
  title: "Working Business Hours",
  value: "Monday - Saturday: 11:00 AM - 9:00 PM"
}];
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  const [isSending, setIsSending] = reactExports.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message")
    };
    try {
      await sendEmail({
        to: "deanbusiness007@gmail.com",
        subject: `New Contact Message: ${data.subject}`,
        htmlBody: generateContactEmailHTML(data)
      });
      setSent(true);
      e.currentTarget.reset();
      setTimeout(() => setSent(false), 5e3);
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setIsSending(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { crumb: "Contact Us", kicker: "We're Listening", title: "Contact Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12", style: {
        perspective: "1200px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          x: -50,
          rotateY: 12,
          transformPerspective: 1200
        }, whileInView: {
          opacity: 1,
          x: 0,
          rotateY: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.8,
          ease: "easeOut"
        }, style: {
          transformStyle: "preserve-3d"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary tracking-[0.3em] text-xs font-semibold uppercase", children: "Reach the Team" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl md:text-5xl font-bold uppercase", children: [
            "Get in ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Touch" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-4", children: infos.map((info, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            opacity: 0,
            x: -30,
            rotateY: 8,
            transformPerspective: 800
          }, whileInView: {
            opacity: 1,
            x: 0,
            rotateY: 0
          }, viewport: {
            once: true
          }, transition: {
            delay: idx * 0.1,
            duration: 0.6
          }, style: {
            transformStyle: "preserve-3d"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tilt3D, { maxTilt: 6, scale: 1.02, className: "group flex gap-4 border border-border bg-card p-5 hover:border-primary transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 shrink-0 border border-border bg-background flex items-center justify-center group-hover:border-primary group-hover:text-primary transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(info.icon, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: info.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-bold", children: info.value })
            ] })
          ] }) }, info.title)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            opacity: 0,
            rotateX: 14,
            scale: 0.95,
            transformPerspective: 1e3
          }, whileInView: {
            opacity: 1,
            rotateX: 0,
            scale: 1
          }, viewport: {
            once: true
          }, transition: {
            delay: 0.4,
            duration: 0.7
          }, style: {
            transformStyle: "preserve-3d"
          }, className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tilt3D, { maxTilt: 6, scale: 1.02, className: "relative aspect-video border border-border overflow-hidden red-border-glow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(oklch(0.62_0.24_25/0.1)_1px,transparent_1px),linear-gradient(90deg,oklch(0.62_0.24_25/0.1)_1px,transparent_1px)] bg-[size:40px_40px]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-center p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-10 h-10 text-primary animate-glow-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-bold uppercase tracking-widest", children: "Lahore Store Location" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground max-w-xs", children: "Visit our physical store to test monitors, keyboards, mice, and check prebuilt rigs before purchase." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-[10px] uppercase tracking-widest text-muted-foreground/60", children: "Google Maps Navigation API (Mock)" })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          x: 50,
          rotateY: -14,
          transformPerspective: 1200
        }, whileInView: {
          opacity: 1,
          x: 0,
          rotateY: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.8,
          ease: "easeOut"
        }, style: {
          transformStyle: "preserve-3d"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tilt3D, { maxTilt: 4, scale: 1.01, className: "relative border border-border bg-card p-8 md:p-10 red-border-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-5 h-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl md:text-3xl font-bold uppercase", children: "Send us a Message" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "We reply within one working day." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-5", children: [
            [{
              name: "name",
              label: "Your Full Name",
              type: "text"
            }, {
              name: "email",
              label: "Email Address",
              type: "email"
            }, {
              name: "subject",
              label: "Subject",
              type: "text"
            }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: f.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: f.type, name: f.name, className: "mt-2 w-full bg-background border border-border px-4 py-3 outline-none focus:border-primary transition" })
            ] }, f.name)),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Your Message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 5, name: "message", className: "mt-2 w-full bg-background border border-border px-4 py-3 outline-none focus:border-primary transition resize-none" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: isSending || sent, className: "w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed", children: isSending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Sending ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" })
            ] }) : sent ? "Message Sent ✓" : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Send Message ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" })
            ] }) })
          ] })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ContactPage as component
};
