import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-CH4m4AXv.mjs";
import { s as sendEmail } from "./email-CrmUIKV1.mjs";
import { S as Swal } from "../_libs/sweetalert2.mjs";
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
const appCss = "/assets/styles-DA2tTuQM.css";
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
  reactExports.useEffect(() => {
    const duration = 2e3;
    const timer = setTimeout(() => {
      onComplete();
    }, duration);
    return () => clearTimeout(timer);
  }, [onComplete]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/60 backdrop-blur-md overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-40 h-40 flex items-center justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: { rotate: 360 },
        transition: { duration: 1.2, repeat: Infinity, ease: "linear" },
        className: "absolute inset-0 rounded-full border-[3px] border-transparent border-t-primary border-r-primary shadow-[0_0_20px_rgba(196,30,58,0.4)]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-3 rounded-full border border-primary/20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 flex flex-col items-center justify-center text-center mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-3xl tracking-widest uppercase text-white drop-shadow-md", children: [
      "F",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary animate-glow-pulse", children: "/" }),
      "AST"
    ] }) })
  ] }) });
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
const getProductsByIdsFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("0e0c2286f70691c8573f986e3d214b27dedef1b45ad40585455c6d701b868753"));
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
const sendResetOtpFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("38512b3984daaa9bdd0ea4921e83fadc1d1f0d3be574cef6c57836ee141ecc46"));
const verifyOtpFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("b561e8dc6678b1560f1a2a933da6f111d48854b265bd23a8f7fe9dc39ca07f86"));
const verifyOtpAndResetPasswordFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createSsrRpc("6a24a9de82d39d09df7d466a7ba6113ffe178edabef9637d07ce979de0e81580"));
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
function generateContactEmailHTML(formData) {
  const submitDate = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
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
    
    .info-box {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid #333;
      padding: 20px;
      border-radius: 4px;
      margin-bottom: 20px;
    }
    
    .info-row {
      display: flex;
      padding: 10px 0;
      border-bottom: 1px solid #333;
    }
    
    .info-row:last-child {
      border-bottom: none;
    }
    
    .info-label {
      width: 120px;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #888;
      flex-shrink: 0;
    }
    
    .info-value {
      color: #fff;
      font-size: 14px;
      flex: 1;
    }
    
    .message-box {
      background: rgba(196, 30, 58, 0.1);
      border: 1px solid #c41e3a;
      padding: 20px;
      border-radius: 4px;
      margin-bottom: 20px;
    }
    
    .message-content {
      color: #fff;
      font-size: 14px;
      line-height: 1.8;
      white-space: pre-wrap;
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
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">FAST COMPUTERS</div>
    </div>
    
    <div class="content">
      <div class="badge">New Contact Form Submission</div>
      
      <p style="color: #fff; font-size: 18px; margin-bottom: 25px;">
        You have received a new message from the contact form.
      </p>
      
      <div class="section-title">Contact Information</div>
      
      <div class="info-box">
        <div class="info-row">
          <span class="info-label">Name</span>
          <span class="info-value">${formData.name}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Email</span>
          <span class="info-value">${formData.email}</span>
        </div>
        ${formData.phone ? `
        <div class="info-row">
          <span class="info-label">Phone</span>
          <span class="info-value">${formData.phone}</span>
        </div>
        ` : ""}
        <div class="info-row">
          <span class="info-label">Subject</span>
          <span class="info-value">${formData.subject}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Submitted</span>
          <span class="info-value">${submitDate}</span>
        </div>
      </div>
      
      <div class="section-title">Message</div>
      
      <div class="message-box">
        <div class="message-content">${formData.message}</div>
      </div>
      
      <p style="color: #888; margin-top: 25px; line-height: 1.6; font-size: 14px;">
        Please respond to this inquiry as soon as possible.
      </p>
    </div>
    
    <div class="footer">
      <p class="footer-text">
        Game Without Compromise™
      </p>
      <p class="footer-text">
        <a href="https://fastcomputers.pk" class="footer-link">fastcomputers.pk</a>
      </p>
      <p class="footer-text" style="margin-top: 20px; font-size: 11px;">
        © 2024 Fast Computers. All rights reserved.
      </p>
    </div>
  </div>
</body>
</html>
  `;
}
function generateWelcomeEmailHTML(name, loginMethod = "email") {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Rajdhani:wght@400;500;600;700&display=swap');
    body { margin: 0; padding: 0; background-color: #0a0a0a; font-family: 'Rajdhani', sans-serif; color: #e5e5e5; }
    .container { max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%); border: 1px solid #333; overflow: hidden; }
    .header { background: linear-gradient(135deg, #c41e3a 0%, #8b0000 100%); padding: 50px 30px; text-align: center; position: relative; }
    .header::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 21px); }
    .logo { font-family: 'Oswald', sans-serif; font-size: 36px; font-weight: 700; color: #fff; letter-spacing: 4px; text-transform: uppercase; position: relative; z-index: 1; text-shadow: 0 0 30px rgba(196, 30, 58, 0.8); }
    .logo-sub { font-size: 11px; text-transform: uppercase; color: rgba(255,255,255,0.6); letter-spacing: 6px; position: relative; z-index: 1; margin-top: 6px; }
    .tagline { font-size: 13px; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 3px; position: relative; z-index: 1; margin-top: 16px; }
    .content { padding: 40px 30px; }
    .badge { display: inline-block; background: #c41e3a; color: #fff; padding: 4px 14px; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; margin-bottom: 20px; }
    .headline { font-family: 'Oswald', sans-serif; font-size: 30px; font-weight: 700; text-transform: uppercase; color: #fff; line-height: 1.2; margin-bottom: 16px; }
    .body-text { font-size: 15px; line-height: 1.8; color: #a1a1aa; margin-bottom: 30px; }
    .divider { height: 2px; background: linear-gradient(90deg, #c41e3a, transparent); margin: 30px 0; }
    .feature-row { display: flex; align-items: flex-start; padding: 14px 0; border-bottom: 1px solid #1f1f1f; }
    .feature-icon { font-size: 20px; width: 40px; flex-shrink: 0; padding-top: 2px; }
    .feature-title { font-family: 'Oswald', sans-serif; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #fff; margin-bottom: 3px; }
    .feature-desc { font-size: 13px; color: #71717a; }
    .cta-btn { display: block; background: linear-gradient(135deg, #c41e3a, #8b0000); color: #fff; text-decoration: none; text-align: center; padding: 16px 30px; font-family: 'Oswald', sans-serif; font-size: 15px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; margin: 30px 0; }
    .footer { background: #0a0a0a; padding: 30px; text-align: center; border-top: 1px solid #222; }
    .footer-text { font-size: 12px; color: #52525b; margin-bottom: 8px; }
    .footer-link { color: #c41e3a; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">F<span style="color:rgba(255,255,255,0.4)">/</span>AST</div>
      <div class="logo-sub">Computers</div>
      <div class="tagline">Game Without Compromise™</div>
    </div>
    <div class="content">
      <div class="badge">Welcome to the Squad</div>
      <div class="headline" style="color:#fff;">Welcome, <span style="color:#c41e3a;">${name || "Gamer"}</span>.</div>
      <p class="body-text">
        Your account has been created successfully ${loginMethod === "google" ? 'via <strong style="color:#fff;">Google Sign-In</strong>' : 'with your <strong style="color:#fff;">email</strong>'}.
        You are now part of the Fast Computers community — Pakistan's home for high-performance gaming rigs, components, and peripherals.
      </p>
      <div class="divider"></div>
      <div>
        <div class="feature-row">
          <div class="feature-icon">⚡</div>
          <div>
            <div class="feature-title">Early Access</div>
            <div class="feature-desc">Be first in line for new GPU drops, flash sales, and exclusive member deals.</div>
          </div>
        </div>
        <div class="feature-row">
          <div class="feature-icon">🛡️</div>
          <div>
            <div class="feature-title">Warranty Vault</div>
            <div class="feature-desc">All your purchase warranties organized and stored in one place.</div>
          </div>
        </div>
        <div class="feature-row" style="border-bottom:none;">
          <div class="feature-icon">🏆</div>
          <div>
            <div class="feature-title">Loyalty XP</div>
            <div class="feature-desc">Earn XP on every order and redeem for discounts on premium gear.</div>
          </div>
        </div>
      </div>
      <a href="https://fastcomputers.vercel.app/shop" class="cta-btn">Start Shopping →</a>
      <p style="font-size:12px; color:#52525b; margin-bottom:0;">If you did not create this account, you can safely ignore this email.</p>
    </div>
    <div class="footer">
      <p class="footer-text">© 2026 Fast Computers · Lahore, Pakistan</p>
      <p class="footer-text"><a href="https://fastcomputers.vercel.app" class="footer-link">fastcomputers.vercel.app</a></p>
    </div>
  </div>
</body>
</html>
  `;
}
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
      sendEmail({
        to: email,
        subject: `Welcome to Fast Computers, ${name}! 🎮`,
        htmlBody: generateWelcomeEmailHTML(name, "email")
      }).catch((err) => console.error("Welcome email error:", err));
    } catch (error) {
      console.error("Register error:", error);
      throw error;
    }
  };
  const loginWithGoogle = async (googleUser, googleToken) => {
    setUser(googleUser);
    setToken(googleToken);
    localStorage.setItem("token", googleToken);
    localStorage.setItem("user", JSON.stringify(googleUser));
  };
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthContext.Provider, { value: { user, token, login, register, loginWithGoogle, logout, loading }, children });
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
      const cartIds = (cartResult.cart || []).map((item) => item.productId);
      const wishlistIds = wishlistResult.wishlist || [];
      const allIds = [.../* @__PURE__ */ new Set([...cartIds, ...wishlistIds])];
      let productsMap = {};
      if (allIds.length > 0) {
        const { products } = await getProductsByIdsFn({ data: { ids: allIds } });
        products.forEach((p) => {
          const pid = p.id || p.customId || p._id;
          productsMap[pid] = p;
        });
      }
      const localCart = cartResult.cart.map((item) => {
        const p = productsMap[item.productId] || {};
        return {
          id: item.productId,
          name: p.name || "",
          brand: p.brand || "",
          price: Number(p.price) || 0,
          img: p.img || "",
          qty: item.quantity
        };
      });
      const localWishlist = wishlistIds.map((id) => {
        const p = productsMap[id] || {};
        return {
          id,
          name: p.name || "",
          brand: p.brand || "",
          cat: p.cat || "",
          price: Number(p.price) || 0,
          old: Number(p.old || p.price) || 0,
          rating: Number(p.rating) || 5,
          img: p.img || ""
        };
      });
      setCart(localCart);
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
    toggleWishlist(product);
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
const Route$e = createRootRouteWithContext()({
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
  const { queryClient } = Route$e.useRouteContext();
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [hasLoaded, setHasLoaded] = reactExports.useState(false);
  const [checkedLocalStorage, setCheckedLocalStorage] = reactExports.useState(false);
  const [showUpdate, setShowUpdate] = reactExports.useState(false);
  const [waitingWorker, setWaitingWorker] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      setHasLoaded(localStorage.getItem("fastcomputers_loaded") === "true");
    }
    setCheckedLocalStorage(true);
  }, []);
  reactExports.useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js").then((registration) => {
        console.log("Service Worker registered with scope:", registration.scope);
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener("statechange", () => {
              if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                setWaitingWorker(newWorker);
                setShowUpdate(true);
              }
            });
          }
        });
      }).catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        localStorage.removeItem("fastcomputers_loaded");
        window.location.reload();
      });
    }
  }, []);
  const handleUpdateClick = () => {
    if (waitingWorker) {
      waitingWorker.postMessage({ type: "SKIP_WAITING" });
    } else {
      window.location.reload();
    }
  };
  reactExports.useEffect(() => {
    if (hasLoaded) {
      setIsLoading(false);
    }
  }, [hasLoaded]);
  const handleLoadingComplete = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("fastcomputers_loaded", "true");
    }
    setIsLoading(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CartWishlistProvider, { children: [
    checkedLocalStorage && isLoading && !hasLoaded && /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingScreen, { onComplete: handleLoadingComplete }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    showUpdate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-4 right-4 z-50 bg-primary text-primary-foreground px-6 py-4 rounded-lg shadow-lg flex items-center gap-4 animate-in slide-in-from-bottom-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm", children: "New version available!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-90", children: "Click to refresh and get the latest updates." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: handleUpdateClick,
          className: "bg-white text-primary px-4 py-2 rounded font-semibold text-sm hover:bg-white/90 transition",
          children: "Update Now"
        }
      )
    ] })
  ] }) }) });
}
const $$splitComponentImporter$d = () => import("./wishlist-Umh9cVk5.mjs");
const Route$d = createFileRoute("/wishlist")({
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
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const getProductsFn = createServerFn({
  method: "GET"
}).handler(createSsrRpc("8c9a97a378fcbfdb5c3d841452ba8d14a55e62871650e7063b4f68e67b8cfebb"));
const getProductByIdFn = createServerFn({
  method: "GET"
}).validator((data) => data).handler(createSsrRpc("24c7a133b54ac5045a58146c82e749a196cd2e5730afcdf64763a37203db36d2"));
const getRelatedProductsFn = createServerFn({
  method: "GET"
}).validator((data) => data).handler(createSsrRpc("8a1cb0500c28962192ca18eb2eb2cec7e891c3ed61fd0e78e7cad3566271c9b7"));
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
const $$splitComponentImporter$c = () => import("./shop-BeBncd58.mjs");
const Route$c = createFileRoute("/shop")({
  validateSearch: (search) => {
    const result = {};
    if (typeof search.category === "string") result.category = search.category;
    if (typeof search.categories === "string") result.categories = search.categories;
    return result;
  },
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
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./orders-snzsqdRG.mjs");
const Route$b = createFileRoute("/orders")({
  head: () => ({
    meta: [{
      title: "My Orders — Fast Computers"
    }, {
      name: "description",
      content: "View your order history and track your purchases."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./forgot-password-Dw2u0Ru2.mjs");
const Route$a = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [{
      title: "Forgot Password — Fast Computers"
    }, {
      name: "description",
      content: "Recover your Fast Computers account password."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./contact-DsId_FU2.mjs");
const Route$9 = createFileRoute("/contact")({
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
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./checkout-VaNwWHI_.mjs");
const Route$8 = createFileRoute("/checkout")({
  head: () => ({
    meta: [{
      title: "Checkout — Fast Computers"
    }, {
      name: "description",
      content: "Complete your purchase securely."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./categories-Clmetxpp.mjs");
const Route$7 = createFileRoute("/categories")({
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
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./cart-8bQsoeSZ.mjs");
const Route$6 = createFileRoute("/cart")({
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
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./auth-Bw4HEvSQ.mjs");
const Route$5 = createFileRoute("/auth")({
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
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./admin-4HtEP47C.mjs");
const Route$4 = createFileRoute("/admin")({
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
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./about-CliWJhyc.mjs");
const Route$3 = createFileRoute("/about")({
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
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-Cg4iDt_t.mjs");
const Route$2 = createFileRoute("/")({
  loader: async () => {
    return await getProductsFn();
  },
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./product._id-DbxjWXnK.mjs");
const Route$1 = createFileRoute("/product/$id")({
  loader: async ({
    params
  }) => {
    const product = await getProductByIdFn({
      data: {
        id: params.id
      }
    });
    if (!product) return {
      product: null,
      related: []
    };
    const related = await getRelatedProductsFn({
      data: {
        category: product.cat,
        excludeId: product.id
      }
    });
    return {
      product,
      related
    };
  },
  head: () => ({
    meta: [{
      title: "Product Details — Fast Computers"
    }, {
      name: "description",
      content: "View detailed specifications and purchase gaming hardware."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./auth_.google.callback-Yxq7Ehyb.mjs");
const Route = createFileRoute("/auth_/google/callback")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WishlistRoute = Route$d.update({
  id: "/wishlist",
  path: "/wishlist",
  getParentRoute: () => Route$e
});
const ShopRoute = Route$c.update({
  id: "/shop",
  path: "/shop",
  getParentRoute: () => Route$e
});
const OrdersRoute = Route$b.update({
  id: "/orders",
  path: "/orders",
  getParentRoute: () => Route$e
});
const ForgotPasswordRoute = Route$a.update({
  id: "/forgot-password",
  path: "/forgot-password",
  getParentRoute: () => Route$e
});
const ContactRoute = Route$9.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$e
});
const CheckoutRoute = Route$8.update({
  id: "/checkout",
  path: "/checkout",
  getParentRoute: () => Route$e
});
const CategoriesRoute = Route$7.update({
  id: "/categories",
  path: "/categories",
  getParentRoute: () => Route$e
});
const CartRoute = Route$6.update({
  id: "/cart",
  path: "/cart",
  getParentRoute: () => Route$e
});
const AuthRoute = Route$5.update({
  id: "/auth",
  path: "/auth",
  getParentRoute: () => Route$e
});
const AdminRoute = Route$4.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$e
});
const AboutRoute = Route$3.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$e
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$e
});
const ProductIdRoute = Route$1.update({
  id: "/product/$id",
  path: "/product/$id",
  getParentRoute: () => Route$e
});
const AuthGoogleCallbackRoute = Route.update({
  id: "/auth_/google/callback",
  path: "/auth/google/callback",
  getParentRoute: () => Route$e
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
  ForgotPasswordRoute,
  OrdersRoute,
  ShopRoute,
  WishlistRoute,
  ProductIdRoute,
  AuthGoogleCallbackRoute
};
const routeTree = Route$e._addFileChildren(rootRouteChildren)._addFileTypes();
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
  Route$c as R,
  useAuth as a,
  verifyOtpAndResetPasswordFn as b,
  generateContactEmailHTML as c,
  createOrderFn as d,
  generateOrderEmailHTML as e,
  Route$4 as f,
  getOrdersFn as g,
  getAllOrdersFn as h,
  seedProductsFn as i,
  deleteProductFn as j,
  updateOrderStatusFn as k,
  updateProductFn as l,
  createProductFn as m,
  uploadImageToCloudinaryFn as n,
  Route$2 as o,
  Route$1 as p,
  getProductsFn as q,
  createSsrRpc as r,
  sendResetOtpFn as s,
  generateWelcomeEmailHTML as t,
  useCartWishlist as u,
  verifyOtpFn as v,
  router as w
};
