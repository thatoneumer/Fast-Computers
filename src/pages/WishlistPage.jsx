import { motion, AnimatePresence } from 'framer-motion'
import { Heart, ShoppingCart, Trash2, Star, ArrowRight, ChevronRight, ShoppingBag, Sparkles } from 'lucide-react'
import { products } from '../data/products'

function WishlistPage({ wishlist = [], toggleWishlist, addToCart, setActivePage, onSelectProduct }) {

  const formatPrice = (price) => `PKR ${Number(price).toLocaleString()}`

  // Get full product objects from wishlist IDs
  const wishlistProducts = products.filter(p => wishlist.includes(p.id))

  const handleProductClick = (product) => {
    if (onSelectProduct) onSelectProduct(product)
    setActivePage('ProductDetail')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleAddToCart = (e, product) => {
    e.stopPropagation()
    addToCart(product)
  }

  const handleRemove = (e, id) => {
    e.stopPropagation()
    toggleWishlist(id)
  }

  // ── Empty Wishlist ──────────────────────────────────────────────────────────
  if (wishlistProducts.length === 0) {
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
              <Heart className="h-12 w-12 text-gray-300" />
            </div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#F01B1D] flex items-center justify-center"
            >
              <Sparkles className="h-3.5 w-3.5 text-white" />
            </motion.div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 font-heading uppercase tracking-wider mb-2">
              Your Wishlist is Empty
            </h2>
            <p className="text-gray-500 text-sm max-w-xs">
              Save your favourite products here and come back when you're ready to buy.
            </p>
          </div>
          <motion.button
            onClick={() => setActivePage('Shop')}
            className="flex items-center gap-2 bg-[#F01B1D] hover:bg-red-700 text-white font-bold px-8 py-3 rounded text-sm uppercase tracking-widest transition-colors shadow-lg shadow-red-900/20 cursor-pointer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <ShoppingBag className="h-4 w-4" />
            Explore Products
          </motion.button>
        </motion.div>
      </div>
    )
  }

  // ── Wishlist Grid ───────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#f8f9fa]">

      {/* Page Header */}
      <div className="bg-black text-white py-10 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <button onClick={() => setActivePage('Home')} className="hover:text-[#F01B1D] transition-colors cursor-pointer">Home</button>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white">Wishlist</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading uppercase tracking-wider">
            My <span className="text-[#F01B1D]">Wishlist</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            {wishlistProducts.length} saved item{wishlistProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">

        {/* Actions bar */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold font-heading uppercase tracking-wider text-gray-900 border-l-4 border-[#F01B1D] pl-3">
            Saved Products
          </h2>
          <button
            onClick={() => setActivePage('Shop')}
            className="flex items-center gap-1 text-xs font-bold text-[#F01B1D] hover:underline uppercase tracking-wider cursor-pointer"
          >
            Add More <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence>
            {wishlistProducts.map((product, idx) => {
              const discount = product.originalPrice
                ? Math.round((1 - product.price / product.originalPrice) * 100)
                : 0

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  onClick={() => handleProductClick(product)}
                  className="bg-white border border-gray-200 rounded shadow-sm hover:shadow-lg hover:border-red-200 transition-all cursor-pointer group relative overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-50">
                    <img
                      src={product.images?.[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Discount badge */}
                    {discount > 0 && (
                      <span className="absolute top-2 left-2 bg-[#F01B1D] text-white text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wide">
                        -{discount}%
                      </span>
                    )}
                    {/* Remove from wishlist */}
                    <motion.button
                      onClick={(e) => handleRemove(e, product.id)}
                      className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 flex items-center justify-center text-[#F01B1D] hover:bg-[#F01B1D] hover:text-white transition-colors cursor-pointer shadow-sm"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      title="Remove from wishlist"
                    >
                      <Heart className="h-4 w-4 fill-current" />
                    </motion.button>
                  </div>

                  {/* Info */}
                  <div className="p-4 flex flex-col gap-2">
                    <span className="text-[9px] font-bold text-[#F01B1D] uppercase tracking-widest">{product.brand}</span>
                    <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2 group-hover:text-[#F01B1D] transition-colors">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-gray-400">({product.reviewsCount})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-base font-black text-gray-900">{formatPrice(product.price)}</span>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <span className="text-xs text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>

                    {/* Stock */}
                    <span className={`text-[10px] font-semibold ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
                      {product.inStock ? '● In Stock' : '● Out of Stock'}
                    </span>

                    {/* Actions */}
                    <div className="flex gap-2 mt-2">
                      <motion.button
                        onClick={(e) => handleAddToCart(e, product)}
                        disabled={!product.inStock}
                        className="flex-1 flex items-center justify-center gap-1.5 bg-[#F01B1D] hover:bg-red-700 disabled:bg-gray-200 disabled:text-gray-400 text-white text-[10px] font-black uppercase tracking-widest py-2.5 rounded transition-colors cursor-pointer"
                        whileHover={product.inStock ? { scale: 1.03 } : {}}
                        whileTap={product.inStock ? { scale: 0.97 } : {}}
                      >
                        <ShoppingCart className="h-3.5 w-3.5" />
                        Add to Cart
                      </motion.button>
                      <motion.button
                        onClick={(e) => handleRemove(e, product.id)}
                        className="w-9 flex items-center justify-center border border-gray-200 rounded text-gray-400 hover:border-red-300 hover:text-red-500 transition-colors cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="Remove"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-black rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-heading font-bold text-lg uppercase tracking-wider mb-1">
              Ready to Build Your Setup?
            </h3>
            <p className="text-gray-400 text-sm">Move your saved items to cart and complete your purchase.</p>
          </div>
          <motion.button
            onClick={() => setActivePage('Cart')}
            className="flex items-center gap-2 bg-[#F01B1D] hover:bg-red-700 text-white font-black px-8 py-3 rounded text-sm uppercase tracking-widest transition-colors shadow-lg shadow-red-900/30 cursor-pointer shrink-0"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <ShoppingCart className="h-4 w-4" />
            View Cart
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default WishlistPage
