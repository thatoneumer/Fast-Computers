import{u as S,a as P,b as T,r as N,j as e,m as b,L as O,d as M,S as w}from"./index-BP53DPQB.js";import{S as F,U as E,A as $,b as q}from"./SiteFooter-BYDl-bqD.js";import{P as R}from"./PageHero-DNx_1HYU.js";import{M as z}from"./map-pin-Dzzb4s4s.js";import{C as L}from"./credit-card-4l63V5JV.js";import{S as A}from"./shopping-bag-BkSm5wac.js";import{M as D}from"./minus-DH72Nh8B.js";import{P as K}from"./plus-Bz1Zz0Nt.js";import{T as U}from"./trash-2-5DfD6FQT.js";import{S as I}from"./shield-check-DZ5sJV0d.js";import{T as H}from"./truck-C_MhxeAI.js";import"./chevron-right-AL2C42qb.js";async function B(s){const i="https://script.google.com/macros/s/AKfycbyYcP7RYVblm2fGpjW294wTvUt84cXXSGs3G1hnoDSJTfTCMOMUqyjKd4JmHgjGE8z3Xw/exec";console.log("📧 Email Sending Started"),console.log("Script URL:",i),console.log("Email To:",s.to),console.log("Subject:",s.subject);try{console.log("📤 Sending request to Google Apps Script...");const n=await fetch(i,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});return console.log("✅ Request sent successfully (no-cors mode, response not available)"),{success:!0}}catch(n){return console.error("❌ Failed to send email:",n),{success:!1,error:n instanceof Error?n.message:"Unknown error"}}}function G(s,i,n){const g=s.orderNumber||"FC-"+Math.random().toString(36).substr(2,9).toUpperCase(),d=s.items||[],m=s.total||0,r=s.shippingAddress||{},h=s.paymentMethod||"Cash on Delivery",p=new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),x=d.map(t=>`
    <tr style="border-bottom: 1px solid #333;">
      <td style="padding: 16px; vertical-align: top;">
        <img src="${t.img}" alt="${t.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;">
      </td>
      <td style="padding: 16px; vertical-align: top;">
        <div style="font-weight: 600; color: #fff; margin-bottom: 4px;">${t.name}</div>
        <div style="font-size: 12px; color: #888;">${t.brand||""}</div>
      </td>
      <td style="padding: 16px; text-align: center; color: #fff;">${t.qty}</td>
      <td style="padding: 16px; text-align: right; color: #fff;">PKR ${t.price.toLocaleString()}</td>
    </tr>
  `).join("");return`
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
        ${n?"Hello":"Dear "+i},
      </p>
      
      <p style="color: #888; margin-bottom: 25px; line-height: 1.6;">
        Thank you for your order! Your gaming gear is being prepared and will be on its way to you soon. Here are your order details:
      </p>
      
      <div class="order-number">
        <div class="order-number-label">Order Number</div>
        <div class="order-number-value">${g}</div>
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
          ${x}
        </tbody>
      </table>
      
      <div class="section-title">Order Summary</div>
      
      <div class="info-box">
        <div class="summary-row">
          <span class="summary-label">Subtotal</span>
          <span class="summary-value">PKR ${(m*.95).toLocaleString()}</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">Shipping</span>
          <span class="summary-value">PKR ${(m*.05).toLocaleString()}</span>
        </div>
        <div class="summary-row">
          <span class="summary-label">Payment Method</span>
          <span class="summary-value">${h}</span>
        </div>
      </div>
      
      <div class="total-row">
        <div class="summary-row">
          <span class="total-label">Total</span>
          <span class="total-value">PKR ${m.toLocaleString()}</span>
        </div>
      </div>
      
      <div class="section-title" style="margin-top: 30px;">Shipping Address</div>
      
      <div class="info-box">
        <div class="info-value">
          ${r.fullName||i}<br>
          ${r.address||""}<br>
          ${r.city||""}, ${r.phone||""}
        </div>
      </div>
      
      <div class="section-title">Order Information</div>
      
      <div class="info-box">
        <div class="summary-row">
          <span class="summary-label">Order Date</span>
          <span class="summary-value">${p}</span>
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
  `}function te(){const{cart:s,removeFromCart:i,updateCartQty:n,clearCart:g}=S(),{user:d}=P(),m=T(),[r,h]=N.useState({fullName:d?.name||"",email:d?.email||"",phone:"",address:"",city:"",postalCode:"",paymentMethod:"cod"}),[p,x]=N.useState(!1),t=s.reduce((a,c)=>a+c.price*c.qty,0),u=t>5e4?0:2e3,f=t*.05,y=t+u+f,l=a=>{h({...r,[a.target.name]:a.target.value})},k=async a=>{a.preventDefault(),x(!0);try{const c=s.map(o=>({productId:o.id,name:o.name,price:o.price,quantity:o.qty,img:o.img})),v=await M({data:{userId:d?.id,items:c,total:y,shipping:u,tax:f,fullName:r.fullName,email:r.email,phone:r.phone,address:r.address,city:r.city,postalCode:r.postalCode,paymentMethod:r.paymentMethod}});console.log("🔄 Generating email HTML...");const C=G({orderNumber:v.orderNumber,items:s.map(o=>({name:o.name,brand:o.brand,price:o.price,qty:o.qty,img:o.img})),total:y,shippingAddress:{fullName:r.fullName,address:r.address,city:r.city,phone:r.phone},paymentMethod:r.paymentMethod==="cod"?"Cash on Delivery":"Card"},r.fullName,!d);console.log("📧 Calling sendEmail function...");const j=await B({to:r.email,subject:`Order Confirmed - ${v.orderNumber}`,htmlBody:C});console.log("📧 Email result:",j),j.success||console.error("❌ Email failed to send:",j.error),g(),await w.fire({title:"Order Placed Successfully!",text:`Order Number: ${v.orderNumber}
Thank you for your purchase. We'll contact you shortly to confirm your order.`,icon:"success",confirmButtonText:"Continue Shopping",confirmButtonColor:"#dc2626",background:"#1E1E1E",color:"#FFF"}),m({to:"/"})}catch(c){console.error("Order error:",c),w.fire({title:"Order Failed",text:"There was an error placing your order. Please try again.",icon:"error",confirmButtonText:"Try Again",confirmButtonColor:"#dc2626",background:"#1E1E1E",color:"#FFF"})}finally{x(!1)}};return e.jsxs("div",{className:"min-h-screen bg-background text-foreground",children:[e.jsx(F,{}),e.jsxs("main",{children:[e.jsx(R,{crumb:"Checkout",kicker:"Complete Your",title:"Order"}),e.jsx("div",{className:"mx-auto max-w-7xl px-6 py-12",children:e.jsxs("div",{className:"grid lg:grid-cols-3 gap-8",children:[e.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[e.jsxs(b.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"bg-card border border-border p-6",children:[e.jsxs("h2",{className:"text-xl font-bold uppercase flex items-center gap-2 mb-6",children:[e.jsx(E,{className:"w-5 h-5 text-primary"}),"Contact Information"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Full Name"}),e.jsx("input",{type:"text",name:"fullName",value:r.fullName,onChange:l,className:"w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Email"}),e.jsx("input",{type:"email",name:"email",value:r.email,onChange:l,className:"w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition",required:!0})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Phone"}),e.jsx("input",{type:"tel",name:"phone",value:r.phone,onChange:l,className:"w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition",required:!0})]})]})]}),e.jsxs(b.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},className:"bg-card border border-border p-6",children:[e.jsxs("h2",{className:"text-xl font-bold uppercase flex items-center gap-2 mb-6",children:[e.jsx(z,{className:"w-5 h-5 text-primary"}),"Shipping Address"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Street Address"}),e.jsx("input",{type:"text",name:"address",value:r.address,onChange:l,className:"w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition",required:!0})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"City"}),e.jsx("input",{type:"text",name:"city",value:r.city,onChange:l,className:"w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium mb-2",children:"Postal Code"}),e.jsx("input",{type:"text",name:"postalCode",value:r.postalCode,onChange:l,className:"w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition",required:!0})]})]})]})]}),e.jsxs(b.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"bg-card border border-border p-6",children:[e.jsxs("h2",{className:"text-xl font-bold uppercase flex items-center gap-2 mb-6",children:[e.jsx(L,{className:"w-5 h-5 text-primary"}),"Payment Method"]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("label",{className:"flex items-center gap-3 p-4 border border-border cursor-pointer hover:border-primary transition",children:[e.jsx("input",{type:"radio",name:"paymentMethod",value:"cod",checked:r.paymentMethod==="cod",onChange:l,className:"w-4 h-4 accent-primary"}),e.jsx("span",{className:"font-medium",children:"Cash on Delivery"})]}),e.jsxs("label",{className:"flex items-center gap-3 p-4 border border-border cursor-pointer hover:border-primary transition opacity-50",children:[e.jsx("input",{type:"radio",name:"paymentMethod",value:"card",disabled:!0,className:"w-4 h-4 accent-primary"}),e.jsx("span",{className:"font-medium",children:"Credit/Debit Card (Coming Soon)"})]})]})]})]}),e.jsx(b.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.3},className:"lg:col-span-1",children:e.jsxs("div",{className:"bg-card border border-border p-6 sticky top-24",children:[e.jsxs("h2",{className:"text-xl font-bold uppercase flex items-center gap-2 mb-6",children:[e.jsx(A,{className:"w-5 h-5 text-primary"}),"Order Summary"]}),e.jsx("div",{className:"space-y-4 mb-6 max-h-64 overflow-y-auto",children:s.length===0?e.jsx("p",{className:"text-muted-foreground text-center py-8",children:"Your cart is empty"}):s.map(a=>e.jsxs("div",{className:"flex gap-3 border-b border-border pb-4",children:[e.jsx("img",{src:a.img,alt:a.name,className:"w-16 h-16 object-cover"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h3",{className:"font-medium text-sm truncate",children:a.name}),e.jsxs("p",{className:"text-primary font-bold",children:["PKR ",a.price.toLocaleString()]}),e.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[e.jsx("button",{onClick:()=>n(a.id,Math.max(1,a.qty-1)),className:"w-6 h-6 border border-border flex items-center justify-center hover:border-primary transition",children:e.jsx(D,{className:"w-3 h-3"})}),e.jsx("span",{className:"text-sm font-medium",children:a.qty}),e.jsx("button",{onClick:()=>n(a.id,a.qty+1),className:"w-6 h-6 border border-border flex items-center justify-center hover:border-primary transition",children:e.jsx(K,{className:"w-3 h-3"})})]})]}),e.jsx("button",{onClick:()=>i(a.id),className:"text-muted-foreground hover:text-destructive transition",children:e.jsx(U,{className:"w-4 h-4"})})]},a.id))}),e.jsxs("div",{className:"space-y-3 border-t border-border pt-4",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"text-muted-foreground",children:"Subtotal"}),e.jsxs("span",{className:"font-medium",children:["PKR ",t.toLocaleString()]})]}),e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"text-muted-foreground",children:"Shipping"}),e.jsx("span",{className:"font-medium",children:u===0?"Free":`PKR ${u.toLocaleString()}`})]}),e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"text-muted-foreground",children:"Tax (5%)"}),e.jsxs("span",{className:"font-medium",children:["PKR ",f.toLocaleString()]})]}),e.jsxs("div",{className:"flex justify-between text-lg font-bold pt-3 border-t border-border",children:[e.jsx("span",{children:"Total"}),e.jsxs("span",{className:"text-primary",children:["PKR ",y.toLocaleString()]})]})]}),e.jsxs("div",{className:"mt-6 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[e.jsx(I,{className:"w-4 h-4 text-primary"}),e.jsx("span",{children:"Secure Checkout"})]}),e.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[e.jsx(H,{className:"w-4 h-4 text-primary"}),e.jsx("span",{children:"Free Shipping on orders over PKR 50,000"})]})]}),e.jsx("button",{onClick:k,disabled:s.length===0||p,className:"mt-6 w-full bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest text-sm hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",children:p?e.jsx(e.Fragment,{children:"Processing..."}):e.jsxs(e.Fragment,{children:["Place Order ",e.jsx($,{className:"w-4 h-4"})]})}),e.jsx(O,{to:"/shop",search:{category:void 0},className:"block text-center text-sm text-muted-foreground hover:text-primary transition mt-4",children:"Continue Shopping"})]})})]})})]}),e.jsx(q,{})]})}export{te as component};
