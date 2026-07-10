import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { S as Swal } from "../_libs/sweetalert2.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-DG8dxh7v.mjs";
import { P as PageHero } from "./PageHero-WTHEmsdY.mjs";
import { u as useCartWishlist, a as useAuth, d as createOrderFn, e as generateOrderEmailHTML } from "./router-Ipyxwf8H.mjs";
import { s as sendEmail } from "./email-CrmUIKV1.mjs";
import "../_libs/seroval.mjs";
import { U as User, g as MapPin, h as CreditCard, q as ShoppingBag, r as Minus, s as Plus, T as Trash2, t as ShieldCheck, u as Truck, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "./server-CV-TUOqx.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
function CheckoutPage() {
  const {
    cart,
    removeFromCart,
    updateCartQty,
    clearCart
  } = useCartWishlist();
  const {
    user
  } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = reactExports.useState({
    fullName: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "cod"
  });
  const [isProcessing, setIsProcessing] = reactExports.useState(false);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 5e4 ? 0 : 2e3;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      const generatedCode = Math.floor(1e5 + Math.random() * 9e5).toString();
      const verificationEmailHtml = `<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; text-align: center; padding: 40px 20px;">
        <h2>Verify Your Checkout</h2>
        <p>Please use the following 6-digit code to verify your email address and complete your order:</p>
        <div style="font-size: 32px; font-weight: bold; letter-spacing: 4px; color: #dc2626; margin: 20px 0;">${generatedCode}</div>
        <p>If you didn't request this, you can safely ignore this email.</p>
      </div>`;
      const verificationResult = await sendEmail({
        to: formData.email,
        subject: "Your Checkout Verification Code",
        htmlBody: verificationEmailHtml
      });
      if (!verificationResult.success) {
        Swal.fire({
          title: "Verification Error",
          text: "Failed to send verification email. Please check your email address and try again.",
          icon: "error",
          background: "#1E1E1E",
          color: "#FFF"
        });
        setIsProcessing(false);
        return;
      }
      const {
        value: enteredCode,
        isDismissed
      } = await Swal.fire({
        title: "Email Verification",
        text: `We sent a 6-digit code to ${formData.email}. Please enter it below to complete your order.`,
        input: "text",
        inputAttributes: {
          maxlength: "6",
          autocapitalize: "off",
          autocorrect: "off",
          style: "text-align: center; letter-spacing: 4px; font-size: 24px;"
        },
        showCancelButton: true,
        confirmButtonText: "Verify & Place Order",
        background: "#1E1E1E",
        color: "#FFF",
        preConfirm: (code) => {
          if (!code || code !== generatedCode) {
            Swal.showValidationMessage("Incorrect verification code");
          }
          return code;
        },
        allowOutsideClick: () => !Swal.isLoading()
      });
      if (isDismissed || !enteredCode) {
        setIsProcessing(false);
        return;
      }
      const orderItems = cart.map((item) => ({
        productId: item.id,
        name: item.name,
        price: item.price,
        quantity: item.qty,
        img: item.img
      }));
      const result = await createOrderFn({
        data: {
          userId: user?.id,
          items: orderItems,
          total,
          shipping,
          tax,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          postalCode: formData.postalCode,
          paymentMethod: formData.paymentMethod
        }
      });
      console.log("🔄 Generating email HTML...");
      const emailHTML = generateOrderEmailHTML({
        orderNumber: result.orderNumber,
        items: cart.map((item) => ({
          name: item.name,
          brand: item.brand,
          price: item.price,
          qty: item.qty,
          img: item.img
        })),
        total,
        shippingAddress: {
          fullName: formData.fullName,
          address: formData.address,
          city: formData.city,
          phone: formData.phone
        },
        paymentMethod: formData.paymentMethod === "cod" ? "Cash on Delivery" : "Card"
      }, formData.fullName, !user);
      console.log("📧 Calling sendEmail function...");
      const emailResult = await sendEmail({
        to: formData.email,
        subject: `Order Confirmed - ${result.orderNumber}`,
        htmlBody: emailHTML
      });
      console.log("📧 Email result:", emailResult);
      if (!emailResult.success) {
        console.error("❌ Email failed to send:", emailResult.error);
      }
      clearCart();
      await Swal.fire({
        title: "Order Placed Successfully!",
        text: `Order Number: ${result.orderNumber}
Thank you for your purchase. We'll contact you shortly to confirm your order.`,
        icon: "success",
        confirmButtonText: "Continue Shopping",
        confirmButtonColor: "#dc2626",
        background: "#1E1E1E",
        color: "#FFF"
      });
      navigate({
        to: "/"
      });
    } catch (error) {
      console.error("Order error:", error);
      Swal.fire({
        title: "Order Failed",
        text: "There was an error placing your order. Please try again.",
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#dc2626",
        background: "#1E1E1E",
        color: "#FFF"
      });
    } finally {
      setIsProcessing(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { crumb: "Checkout", kicker: "Complete Your", title: "Order" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, animate: {
            opacity: 1,
            y: 0
          }, className: "bg-card border border-border p-4 sm:p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-bold uppercase flex items-center gap-2 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-5 h-5 text-primary" }),
              "Contact Information"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "Full Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", name: "fullName", value: formData.fullName, onChange: handleInputChange, className: "w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition", required: true })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", name: "email", value: formData.email, onChange: handleInputChange, className: "w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition", required: true })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "Phone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", name: "phone", value: formData.phone, onChange: handleInputChange, className: "w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition", required: true })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            delay: 0.1
          }, className: "bg-card border border-border p-4 sm:p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-bold uppercase flex items-center gap-2 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5 text-primary" }),
              "Shipping Address"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "Street Address" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", name: "address", value: formData.address, onChange: handleInputChange, className: "w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition", required: true })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "City" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", name: "city", value: formData.city, onChange: handleInputChange, className: "w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition", required: true })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "Postal Code" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", name: "postalCode", value: formData.postalCode, onChange: handleInputChange, className: "w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition", required: true })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            delay: 0.2
          }, className: "bg-card border border-border p-4 sm:p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-bold uppercase flex items-center gap-2 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "w-5 h-5 text-primary" }),
              "Payment Method"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 p-4 border border-border cursor-pointer hover:border-primary transition", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", name: "paymentMethod", value: "cod", checked: formData.paymentMethod === "cod", onChange: handleInputChange, className: "w-4 h-4 accent-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Cash on Delivery" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 p-4 border border-border cursor-pointer hover:border-primary transition opacity-50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", name: "paymentMethod", value: "card", disabled: true, className: "w-4 h-4 accent-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Credit/Debit Card (Coming Soon)" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          x: 20
        }, animate: {
          opacity: 1,
          x: 0
        }, transition: {
          delay: 0.3
        }, className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border p-4 sm:p-6 sticky top-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-bold uppercase flex items-center gap-2 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-5 h-5 text-primary" }),
            "Order Summary"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mb-6 max-h-64 overflow-y-auto", children: cart.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-center py-8", children: "Your cart is empty" }) : cart.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 border-b border-border pb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.img, alt: item.name, className: "w-16 h-16 object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-sm truncate", children: item.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-primary font-bold", children: [
                "PKR ",
                item.price.toLocaleString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateCartQty(item.id, Math.max(1, item.qty - 1)), className: "w-6 h-6 border border-border flex items-center justify-center hover:border-primary transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3 h-3" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: item.qty }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => updateCartQty(item.id, item.qty + 1), className: "w-6 h-6 border border-border flex items-center justify-center hover:border-primary transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-3 h-3" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => removeFromCart(item.id), className: "text-muted-foreground hover:text-destructive transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }) })
          ] }, item.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 border-t border-border pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Subtotal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                "PKR ",
                subtotal.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Shipping" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: shipping === 0 ? "Free" : `PKR ${shipping.toLocaleString()}` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Tax (5%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
                "PKR ",
                tax.toLocaleString()
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-lg font-bold pt-3 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary", children: [
                "PKR ",
                total.toLocaleString()
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Secure Checkout" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-4 h-4 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Free Shipping on orders over PKR 50,000" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: cart.length === 0 || isProcessing, className: "mt-6 w-full bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest text-sm hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2", children: isProcessing ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Processing..." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "Place Order ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", search: {
            category: void 0
          }, className: "block text-center text-sm text-muted-foreground hover:text-primary transition mt-4", children: "Continue Shopping" })
        ] }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  CheckoutPage as component
};
