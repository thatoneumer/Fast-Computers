interface OrderDetails {
  orderNumber?: string;
  items: Array<{
    name: string;
    brand?: string;
    price: number;
    qty: number;
    img: string;
  }>;
  total: number;
  shippingAddress: {
    fullName?: string;
    address?: string;
    city?: string;
    phone?: string;
  };
  paymentMethod?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export function generateOrderEmailHTML(
  orderDetails: OrderDetails,
  customerName: string,
  isGuest: boolean
): string {
  const orderNumber = orderDetails.orderNumber || 'FC-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  const items = orderDetails.items || [];
  const total = orderDetails.total || 0;
  const shippingAddress = orderDetails.shippingAddress || {};
  const paymentMethod = orderDetails.paymentMethod || 'Cash on Delivery';
  const orderDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const itemsHtml = items.map(item => `
    <tr style="border-bottom: 1px solid #333;">
      <td style="padding: 16px; vertical-align: top;">
        <img src="${item.img}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;">
      </td>
      <td style="padding: 16px; vertical-align: top;">
        <div style="font-weight: 600; color: #fff; margin-bottom: 4px;">${item.name}</div>
        <div style="font-size: 12px; color: #888;">${item.brand || ''}</div>
      </td>
      <td style="padding: 16px; text-align: center; color: #fff;">${item.qty}</td>
      <td style="padding: 16px; text-align: right; color: #fff;">PKR ${item.price.toLocaleString()}</td>
    </tr>
  `).join('');

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
        ${isGuest ? 'Hello' : 'Dear ' + customerName},
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
          ${shippingAddress.address || ''}<br>
          ${shippingAddress.city || ''}, ${shippingAddress.phone || ''}
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

export function generateContactEmailHTML(formData: ContactFormData): string {
  const submitDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
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
        ` : ''}
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
