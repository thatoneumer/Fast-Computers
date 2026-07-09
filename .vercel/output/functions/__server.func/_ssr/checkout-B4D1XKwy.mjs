import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { S as Swal } from "../_libs/sweetalert2.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-C7ZyX2tA.mjs";
import { P as PageHero } from "./PageHero-WTHEmsdY.mjs";
import { u as useCartWishlist, a as useAuth, c as createOrderFn } from "./router-DuyZ6LZh.mjs";
import { s as sendEmail } from "./email-CrmUIKV1.mjs";
import "../_libs/seroval.mjs";
import { U as User, h as MapPin, i as CreditCard, r as ShoppingBag, s as Minus, t as Plus, T as Trash2, u as ShieldCheck, v as Truck, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "./server-B-63VqEF.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
function generateOrderEmailHTML(orderDetails, customerName, isGuest) {
  const orderNumber = orderDetails.orderNumber || "FC-" + Math.random().toString(36).substr(2, 9).toUpperCase();
  const items = orderDetails.items || [];
  const total = orderDetails.total || 0;
  const shippingAddress = orderDetails.shippingAddress || {};
  const paymentMethod = orderDetails.paymentMethod || "Cash on Delivery";
  const orderDate = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const itemsHtml = items.map((item) => `
    <tr style="border-bottom: 1px solid #333;">
      <td style="padding: 16px; vertical-align: top;">
        <img src="${item.img}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;">
      </td>
      <td style="padding: 16px; vertical-align: top;">
        <div style="font-weight: 600; color: #fff; margin-bottom: 4px;">${item.name}</div>
        <div style="font-size: 12px; color: #888;">${item.brand || ""}</div>
      </td>
      <td style="padding: 16px; text-align: center; color: #fff;">${item.qty}</td>
      <td style="padding: 16px; text-align: right; color: #fff;">PKR ${item.price.toLocaleString()}</td>
    </tr>
  `).join("");
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Rajdhani:wght@400;500;600;700&display=swap');
    
    body {
      margin: 0;
      padding: 0;
      background-color: #0a0a0a;
      font-family: 'Rajdhani', sans-serif;
      color: #e5e5e5;
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
      border: 1px solid #333;
      border-radius: 8px;
      overflow: hidden;
    }
    
    .header {
      background: linear-gradient(135deg, #c41e3a 0%, #8b0000 100%);
      padding: 40px 30px;
      text-align: center;
      position: relative;
    }
    
    .header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 20px,
        rgba(255,255,255,0.05) 20px,
        rgba(255,255,255,0.05) 21px
      );
    }
    
    .logo {
      font-family: 'Oswald', sans-serif;
      font-size: 32px;
      font-weight: 700;
      color: #fff;
      letter-spacing: 2px;
      text-transform: uppercase;
      position: relative;
      z-index: 1;
      text-shadow: 0 0 20px rgba(196, 30, 58, 0.8);
    }
    
    .content {
      padding: 30px;
    }
    
    .greeting {
      font-size: 18px;
      margin-bottom: 20px;
      color: #fff;
    }
    
    .order-number {
      background: rgba(196, 30, 58, 0.15);
      border: 1px solid #c41e3a;
      padding: 15px;
      border-radius: 4px;
      margin-bottom: 25px;
      text-align: center;
    }
    
    .order-number-label {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #888;
      margin-bottom: 5px;
    }
    
    .order-number-value {
      font-family: 'Oswald', sans-serif;
      font-size: 24px;
      font-weight: 600;
      color: #c41e3a;
      letter-spacing: 1px;
    }
    
    .section-title {
      font-family: 'Oswald', sans-serif;
      font-size: 16px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #c41e3a;
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 2px solid #c41e3a;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 25px;
    }
    
    th {
      background: rgba(196, 30, 58, 0.1);
      padding: 12px;
      text-align: left;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #c41e3a;
      font-weight: 600;
    }
    
    th:last-child {
      text-align: right;
    }
    
    .summary-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #333;
    }
    
    .summary-row:last-child {
      border-bottom: none;
    }
    
    .summary-label {
      color: #888;
    }
    
    .summary-value {
      color: #fff;
      font-weight: 600;
    }
    
    .total-row {
      background: rgba(196, 30, 58, 0.15);
      padding: 20px;
      border-radius: 4px;
      margin-top: 20px;
    }
    
    .total-label {
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #888;
    }
    
    .total-value {
      font-family: 'Oswald', sans-serif;
      font-size: 28px;
      font-weight: 700;
      color: #c41e3a;
    }
    
    .info-box {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid #333;
      padding: 20px;
      border-radius: 4px;
      margin-bottom: 20px;
    }
    
    .info-label {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #888;
      margin-bottom: 8px;
    }
    
    .info-value {
      color: #fff;
      font-size: 14px;
    }
    
    .footer {
      background: #0a0a0a;
      padding: 30px;
      text-align: center;
      border-top: 1px solid #333;
    }
    
    .footer-text {
      font-size: 13px;
      color: #666;
      margin-bottom: 10px;
    }
    
    .footer-link {
      color: #c41e3a;
      text-decoration: none;
      font-weight: 600;
    }
    
    .footer-link:hover {
      text-decoration: underline;
    }
    
    .social-links {
      margin-top: 15px;
    }
    
    .social-links a {
      color: #666;
      text-decoration: none;
      margin: 0 10px;
      font-size: 12px;
    }
    
    .social-links a:hover {
      color: #c41e3a;
    }
    
    .badge {
      display: inline-block;
      background: #c41e3a;
      color: #fff;
      padding: 4px 12px;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 600;
      border-radius: 2px;
      margin-bottom: 15px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">FAST COMPUTERS</div>
    </div>
    
    <div class="content">
      <div class="badge">Order Confirmed</div>
      
      <p class="greeting">
        ${isGuest ? "Hello" : "Dear " + customerName},
      </p>
      
      <p style="color: #888; margin-bottom: 25px; line-height: 1.6;">
        Thank you for your order! Your gaming gear is being prepared and will be on its way to you soon. Here are your order details:
      </p>
      
      <div class="order-number">
        <div class="order-number-label">Order Number</div>
        <div class="order-number-value">${orderNumber}</div>
      </div>
      
      <div class="section-title">Order Items</div>
      
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Details</th>
            <th style="text-align: center;">Qty</th>
            <th style="text-align: right;">Price</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
        </tbody>
      </table>
      
      <div class="section-title">Order Summary</div>
      
      <div class="info-box">
        <div class="summary-row">
          <span class="summary-label">Subtotal</span>
          <span class="summary-value">PKR ${(total * 0.95).toLocaleString()}</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">Shipping</span>
          <span class="summary-value">PKR ${(total * 0.05).toLocaleString()}</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">Payment Method</span>
          <span class="summary-value">${paymentMethod}</span>
        </div>
      </div>
      
      <div class="total-row">
        <div class="summary-row">
          <span class="total-label">Total</span>
          <span class="total-value">PKR ${total.toLocaleString()}</span>
        </div>
      </div>
      
      <div class="section-title" style="margin-top: 30px;">Shipping Address</div>
      
      <div class="info-box">
        <div class="info-value">
          ${shippingAddress.fullName || customerName}<br>
          ${shippingAddress.address || ""}<br>
          ${shippingAddress.city || ""}, ${shippingAddress.phone || ""}
        </div>
      </div>
      
      <div class="section-title">Order Information</div>
      
      <div class="info-box">
        <div class="summary-row">
          <span class="summary-label">Order Date</span>
          <span class="summary-value">${orderDate}</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">Estimated Delivery</span>
          <span class="summary-value">3-5 Business Days</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">Status</span>
          <span class="summary-value" style="color: #c41e3a;">Processing</span>
        </div>
      </div>
      
      <p style="color: #888; margin-top: 25px; line-height: 1.6; font-size: 14px;">
        You'll receive another email when your order ships with tracking information. If you have any questions, feel free to contact us.
      </p>
    </div>
    
    <div class="footer">
      <p class="footer-text">
        Game Without Compromise™
      </p>
      <p class="footer-text">
        <a href="https://fastcomputers.pk" class="footer-link">fastcomputers.pk</a>
      </p>
      <div class="social-links">
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
      </div>
      <p class="footer-text" style="margin-top: 20px; font-size: 11px;">
        © 2024 Fast Computers. All rights reserved.
      </p>
    </div>
  </div>
</body>
</html>
  `;
}
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
