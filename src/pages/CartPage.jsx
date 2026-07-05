import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShoppingCart, Trash2, Plus, Minus, ArrowRight, Tag,
  ShieldCheck, Truck, RotateCcw, ChevronRight, ShoppingBag
} from 'lucide-react'

function CartPage({ cart = [], setCart, setActivePage }) {

  const [promoCode, setPromoCode] = useState('')
  const [promoApplied, setPromoApplied] = useState(false)
  const [promoError, setPromoError] = useState('')

  const VALID_PROMO = 'FAST10'
  const DISCOUNT_PERCENT = 10

  const formatPrice = (price) => `PKR ${Number(price).toLocaleString()}`

  const updateQuantity = (id, delta) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 100000 ? 0 : 999
  const discount = promoApplied ? Math.round(subtotal * DISCOUNT_PERCENT / 100) : 0
  const total = subtotal + shipping - discount

  const handlePromo = () => {
    if (promoCode.trim().toUpperCase() === VALID_PROMO) {
      setPromoApplied(true)
      setPromoError('')
    } else {
      setPromoError('Invalid promo code. Try FAST10.')
      setPromoApplied(false)
    }
  }

  // ── Empty Cart ──────────────────────────────────────────────────────────────
  if (cart.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-24">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="relative">
            <div className="w-28 h-28 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
              <ShoppingCart className="h-12 w-12 text-gray-300" />
            </div>
            <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#F01B1D] text-white text-sm font-bold flex items-center justify-center">
              0
            </span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 font-heading uppercase tracking-wider mb-2">
              Your Cart is Empty
            </h2>
            <p className="text-gray-500 text-sm max-w-xs">
              Looks like you haven't added anything yet. Explore our store and find something you'll love.
            </p>
          </div>
          <motion.button
            onClick={() => setActivePage('Shop')}
            className="flex items-center gap-2 bg-[#F01B1D] hover:bg-red-700 text-white font-bold px-8 py-3 rounded text-sm uppercase tracking-widest transition-colors shadow-lg shadow-red-900/20 cursor-pointer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <ShoppingBag className="h-4 w-4" />
            Start Shopping
          </motion.button>
        </motion.div>
      </div>
    )
  }

  // ── Cart with Items ─────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#f8f9fa]">

      {/* Page Header */}
      <div className="bg-black text-white py-10 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <button onClick={() => setActivePage('Home')} className="hover:text-[#F01B1D] transition-colors cursor-pointer">Home</button>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">Shopping Cart</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading uppercase tracking-wider">
            <span className="text-[#F01B1D]">My</span> Cart
          </h1>
          <p className="text-gray-400 text-sm mt-1">{cart.length} item{cart.length !== 1 ? 's' : ''} in your cart</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ─── Cart Items ────────────────────────────────────────────── */}
        <div className="lg:col-span-2 flex flex-col gap-4">

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-3 mb-2">
            {[
              { icon: <Truck className="h-4 w-4 text-[#F01B1D]" />, label: 'Free Shipping', sub: 'Orders over PKR 1,00,000' },
              { icon: <ShieldCheck className="h-4 w-4 text-[#F01B1D]" />, label: 'Secure Checkout', sub: 'SSL Encrypted' },
              { icon: <RotateCcw className="h-4 w-4 text-[#F01B1D]" />, label: 'Easy Returns', sub: '7-day return policy' },
            ].map((b, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded p-3 flex flex-col items-center text-center gap-1 shadow-sm">
                {b.icon}
                <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wide">{b.label}</span>
                <span className="text-[9px] text-gray-400">{b.sub}</span>
              </div>
            ))}
          </div>

          {/* Header row */}
          <div className="hidden md:grid grid-cols-12 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-2 px-4">
            <span className="col-span-6">Product</span>
            <span className="col-span-2 text-center">Price</span>
            <span className="col-span-2 text-center">Qty</span>
            <span className="col-span-2 text-right">Total</span>
          </div>

          {/* Items */}
          <AnimatePresence>
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -60, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="bg-white border border-gray-200 rounded shadow-sm hover:shadow-md hover:border-red-200 transition-all"
              >
                <div className="grid grid-cols-12 items-center gap-3 p-4">

                  {/* Image + Name */}
                  <div className="col-span-12 md:col-span-6 flex items-center gap-4">
                    <div
                      className="w-20 h-20 shrink-0 rounded overflow-hidden bg-gray-100 border border-gray-200 cursor-pointer"
                      onClick={() => setActivePage('ProductDetail')}
                    >
                      <img
                        src={item.images?.[0] || 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=200&q=80'}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <span className="text-[10px] font-bold text-[#F01B1D] uppercase tracking-widest">{item.brand || item.category}</span>
                      <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">{item.name}</h3>
                      {item.inStock
                        ? <span className="text-[10px] text-green-600 font-semibold">● In Stock</span>
                        : <span className="text-[10px] text-red-500 font-semibold">● Out of Stock</span>
                      }
                      {/* Mobile price */}
                      <div className="flex items-center justify-between mt-1 md:hidden">
                        <span className="text-xs font-bold text-gray-900">{formatPrice(item.price)}</span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Price (desktop) */}
                  <div className="hidden md:flex col-span-2 justify-center">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-bold text-gray-900">{formatPrice(item.price)}</span>
                      {item.originalPrice && item.originalPrice > item.price && (
                        <span className="text-[10px] text-gray-400 line-through">{formatPrice(item.originalPrice)}</span>
                      )}
                    </div>
                  </div>

                  {/* Qty Controls */}
                  <div className="col-span-7 md:col-span-2 flex justify-center items-center">
                    <div className="flex items-center border border-gray-200 rounded overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-[#F01B1D] hover:text-white transition-colors cursor-pointer"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-10 text-center text-sm font-bold text-gray-900 select-none">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-[#F01B1D] hover:text-white transition-colors cursor-pointer"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>

                  {/* Total + Remove (desktop) */}
                  <div className="hidden md:flex col-span-2 flex-col items-end gap-2">
                    <span className="text-sm font-bold text-gray-900">{formatPrice(item.price * item.quantity)}</span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                      title="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Mobile total */}
                  <div className="col-span-5 flex justify-end md:hidden">
                    <span className="text-sm font-bold text-gray-900">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Continue shopping */}
          <button
            onClick={() => setActivePage('Shop')}
            className="flex items-center gap-2 text-xs font-bold text-[#F01B1D] hover:underline uppercase tracking-widest mt-2 cursor-pointer w-fit"
          >
            <ArrowRight className="h-3.5 w-3.5 rotate-180" />
            Continue Shopping
          </button>
        </div>

        {/* ─── Order Summary ──────────────────────────────────────────── */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded shadow-sm sticky top-24 overflow-hidden">

            {/* Header */}
            <div className="bg-black px-5 py-4">
              <h2 className="text-white font-heading font-bold text-sm uppercase tracking-wider">
                Order Summary
              </h2>
            </div>

            <div className="px-5 py-5 flex flex-col gap-4">

              {/* Line items */}
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cart.reduce((s, i) => s + i.quantity, 0)} items)</span>
                  <span className="font-semibold text-gray-900">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className={`font-semibold ${shipping === 0 ? 'text-green-600' : 'text-gray-900'}`}>
                    {shipping === 0 ? 'FREE' : formatPrice(shipping)}
                  </span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-green-600">
                    <span className="font-semibold">Promo ({DISCOUNT_PERCENT}% off)</span>
                    <span className="font-semibold">- {formatPrice(discount)}</span>
                  </div>
                )}
              </div>

              {/* Promo code */}
              <div className="border-t border-gray-100 pt-4">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Promo Code</label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => { setPromoCode(e.target.value); setPromoError('') }}
                      placeholder="Enter code"
                      className="w-full pl-8 pr-3 py-2.5 border border-gray-200 rounded text-xs focus:outline-none focus:border-[#F01B1D] text-gray-800"
                    />
                  </div>
                  <button
                    onClick={handlePromo}
                    className="bg-black hover:bg-[#F01B1D] text-white text-xs font-bold px-3 rounded transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
                {promoError && <p className="text-red-500 text-[10px] mt-1.5">{promoError}</p>}
                {promoApplied && <p className="text-green-600 text-[10px] mt-1.5 font-semibold">✓ FAST10 applied — 10% off!</p>}
                <p className="text-[10px] text-gray-400 mt-1.5">Try: <span className="font-bold text-gray-600">FAST10</span></p>
              </div>

              {/* Total */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">Total</span>
                  <span className="text-xl font-black text-[#F01B1D]">{formatPrice(total)}</span>
                </div>
                <p className="text-[10px] text-gray-400 mt-1">Inclusive of all taxes</p>
              </div>

              {/* CTA */}
              <motion.button
                className="w-full bg-[#F01B1D] hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest py-3.5 rounded flex items-center justify-center gap-2 transition-colors shadow-lg shadow-red-900/20 cursor-pointer mt-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Proceed to Checkout
                <ArrowRight className="h-4 w-4" />
              </motion.button>

              {/* Payment methods */}
              <div className="border-t border-gray-100 pt-4">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-3 text-center">Accepted Payments</p>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  {['Cash on Delivery', 'Bank Transfer', 'Easy Paisa'].map(m => (
                    <span key={m} className="text-[9px] bg-gray-100 border border-gray-200 text-gray-600 px-2 py-1 rounded font-medium">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Security */}
              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400">
                <ShieldCheck className="h-3.5 w-3.5 text-[#F01B1D]" />
                <span>SSL Secured &amp; Trusted Checkout</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartPage
