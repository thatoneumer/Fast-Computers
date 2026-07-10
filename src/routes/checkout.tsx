import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import Swal from "sweetalert2";
import {
  ShoppingBag, CreditCard, MapPin, User, Phone, Mail,
  Truck, ShieldCheck, ArrowRight, Check, ChevronRight,
  Trash2, Plus, Minus
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { useCartWishlist } from "@/contexts/CartWishlistContext";
import { useAuth } from "@/contexts/AuthContext";
import { createOrderFn } from "@/functions/auth";
import { sendEmail } from "@/functions/email";
import { generateOrderEmailHTML } from "@/lib/email-templates";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Fast Computers" },
      { name: "description", content: "Complete your purchase securely." },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { cart, removeFromCart, updateCartQty, clearCart } = useCartWishlist();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'cod',
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 50000 ? 0 : 2000;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // --- EMAIL VERIFICATION STEP ---
      const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
      
      const verificationEmailHtml = `<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; text-align: center; padding: 40px 20px;">
        <h2>Verify Your Checkout</h2>
        <p>Please use the following 6-digit code to verify your email address and complete your order:</p>
        <div style="font-size: 32px; font-weight: bold; letter-spacing: 4px; color: #dc2626; margin: 20px 0;">${generatedCode}</div>
        <p>If you didn't request this, you can safely ignore this email.</p>
      </div>`;

      const verificationResult = await sendEmail({
        to: formData.email,
        subject: 'Your Checkout Verification Code',
        htmlBody: verificationEmailHtml,
      });

      if (!verificationResult.success) {
        Swal.fire({
          title: "Verification Error",
          text: "Failed to send verification email. Please check your email address and try again.",
          icon: "error",
          background: "#1E1E1E",
          color: "#FFF",
        });
        setIsProcessing(false);
        return;
      }

      const { value: enteredCode, isDismissed } = await Swal.fire({
        title: 'Email Verification',
        text: `We sent a 6-digit code to ${formData.email}. Please enter it below to complete your order.`,
        input: 'text',
        inputAttributes: {
          maxlength: "6",
          autocapitalize: "off",
          autocorrect: "off",
          style: "text-align: center; letter-spacing: 4px; font-size: 24px;"
        },
        showCancelButton: true,
        confirmButtonText: 'Verify & Place Order',
        background: "#1E1E1E",
        color: "#FFF",
        preConfirm: (code) => {
          if (!code || code !== generatedCode) {
            Swal.showValidationMessage('Incorrect verification code');
          }
          return code;
        },
        allowOutsideClick: () => !Swal.isLoading()
      });

      if (isDismissed || !enteredCode) {
        setIsProcessing(false);
        return;
      }
      // --- END VERIFICATION STEP ---

      const orderItems = cart.map(item => ({
        productId: item.id,
        name: item.name,
        price: item.price,
        quantity: item.qty,
        img: item.img,
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
          paymentMethod: formData.paymentMethod,
        },
      });

      // Send order confirmation email
      console.log('🔄 Generating email HTML...');
      const emailHTML = generateOrderEmailHTML(
        {
          orderNumber: result.orderNumber,
          items: cart.map(item => ({
            name: item.name,
            brand: item.brand,
            price: item.price,
            qty: item.qty,
            img: item.img,
          })),
          total,
          shippingAddress: {
            fullName: formData.fullName,
            address: formData.address,
            city: formData.city,
            phone: formData.phone,
          },
          paymentMethod: formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Card',
        },
        formData.fullName,
        !user
      );

      console.log('📧 Calling sendEmail function...');
      const emailResult = await sendEmail({
        to: formData.email,
        subject: `Order Confirmed - ${result.orderNumber}`,
        htmlBody: emailHTML,
      });

      console.log('📧 Email result:', emailResult);
      if (!emailResult.success) {
        console.error('❌ Email failed to send:', emailResult.error);
      }

      // Clear cart
      clearCart();

      // Show success SweetAlert
      await Swal.fire({
        title: "Order Placed Successfully!",
        text: `Order Number: ${result.orderNumber}\nThank you for your purchase. We'll contact you shortly to confirm your order.`,
        icon: "success",
        confirmButtonText: "Continue Shopping",
        confirmButtonColor: "#dc2626",
        background: "#1E1E1E",
        color: "#FFF",
      });

      // Redirect to home
      navigate({ to: '/' });
    } catch (error) {
      console.error('Order error:', error);
      Swal.fire({
        title: "Order Failed",
        text: "There was an error placing your order. Please try again.",
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#dc2626",
        background: "#1E1E1E",
        color: "#FFF",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <PageHero crumb="Checkout" kicker="Complete Your" title="Order" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card border border-border p-4 sm:p-6"
              >
                <h2 className="text-xl font-bold uppercase flex items-center gap-2 mb-6">
                  <User className="w-5 h-5 text-primary" />
                  Contact Information
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition"
                      required
                    />
                  </div>
                </div>
              </motion.div>

              {/* Shipping Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card border border-border p-4 sm:p-6"
              >
                <h2 className="text-xl font-bold uppercase flex items-center gap-2 mb-6">
                  <MapPin className="w-5 h-5 text-primary" />
                  Shipping Address
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Street Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition"
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Postal Code</label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="w-full bg-background border border-border px-4 py-3 focus:border-primary outline-none transition"
                        required
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Payment Method */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card border border-border p-4 sm:p-6"
              >
                <h2 className="text-xl font-bold uppercase flex items-center gap-2 mb-6">
                  <CreditCard className="w-5 h-5 text-primary" />
                  Payment Method
                </h2>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border border-border cursor-pointer hover:border-primary transition">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                      className="w-4 h-4 accent-primary"
                    />
                    <span className="font-medium">Cash on Delivery</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border border-border cursor-pointer hover:border-primary transition opacity-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      disabled
                      className="w-4 h-4 accent-primary"
                    />
                    <span className="font-medium">Credit/Debit Card (Coming Soon)</span>
                  </label>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="bg-card border border-border p-4 sm:p-6 sticky top-24">
                <h2 className="text-xl font-bold uppercase flex items-center gap-2 mb-6">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                  Order Summary
                </h2>

                {/* Cart Items */}
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {cart.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">Your cart is empty</p>
                  ) : (
                    cart.map((item) => (
                      <div key={item.id} className="flex gap-3 border-b border-border pb-4">
                        <img src={item.img} alt={item.name} className="w-16 h-16 object-cover" />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm truncate">{item.name}</h3>
                          <p className="text-primary font-bold">PKR {item.price.toLocaleString()}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateCartQty(item.id, Math.max(1, item.qty - 1))}
                              className="w-6 h-6 border border-border flex items-center justify-center hover:border-primary transition"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-medium">{item.qty}</span>
                            <button
                              onClick={() => updateCartQty(item.id, item.qty + 1)}
                              className="w-6 h-6 border border-border flex items-center justify-center hover:border-primary transition"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted-foreground hover:text-destructive transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {/* Order Totals */}
                <div className="space-y-3 border-t border-border pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">PKR {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">{shipping === 0 ? 'Free' : `PKR ${shipping.toLocaleString()}`}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax (5%)</span>
                    <span className="font-medium">PKR {tax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-3 border-t border-border">
                    <span>Total</span>
                    <span className="text-primary">PKR {total.toLocaleString()}</span>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Truck className="w-4 h-4 text-primary" />
                    <span>Free Shipping on orders over PKR 50,000</span>
                  </div>
                </div>

                {/* Place Order Button */}
                <button
                  type="submit"
                  disabled={cart.length === 0 || isProcessing}
                  className="mt-6 w-full bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest text-sm hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      Processing...
                    </>
                  ) : (
                    <>
                      Place Order <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <Link to="/shop" search={{ category: undefined }} className="block text-center text-sm text-muted-foreground hover:text-primary transition mt-4">
                  Continue Shopping
                </Link>
              </div>
            </motion.div>
            </div>
          </form>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
