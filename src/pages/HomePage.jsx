import { motion } from 'framer-motion'
import { ArrowRight, ShoppingCart, Star, Shield, Truck, RotateCcw, CheckCircle, Headphones, Award, Tag, Heart, Mail } from 'lucide-react'
import { products, customerReviews, topBrands } from '../data/products'
import Hero from '../components/Hero'

function HomePage({ setActivePage, onSelectProduct, addToCart, toggleWishlist, wishlist }) {
  const featured = products.filter(p => p.isFeatured)
  const bestSellers = products.filter(p => p.isBestSeller)

  const categories = [
    { name: 'PC Components', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=300&q=80', count: '120+ Products' },
    { name: 'Gaming PCs', image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=300&q=80', count: '45+ Products' },
    { name: 'Laptops', image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=300&q=80', count: '30+ Products' },
    { name: 'Monitors', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=300&q=80', count: '15+ Products' },
    { name: 'Peripherals', image: 'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?auto=format&fit=crop&w=300&q=80', count: '80+ Products' },
    { name: 'Accessories', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=300&q=80', count: '50+ Products' }
  ]

  const formatPrice = (price) => {
    return `PKR ${price.toLocaleString()}`
  }

  const handleProductClick = (product) => {
    if (onSelectProduct) {
      onSelectProduct(product)
    }
    setActivePage('ProductDetail')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="w-full bg-[#f8f9fa] overflow-hidden">
      
      <Hero onShopClick={() => { setActivePage('Shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />

      {/* 3. SHOP BY CATEGORY */}
      <section id="shop-by-category" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-b border-gray-200">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-wider text-black border-l-4 border-[#F01B1D] pl-3 font-heading">
              Shop by Category
            </h2>
            <p className="text-gray-500 text-xs mt-1">Browse high-end computing components and gear</p>
          </div>
          <button 
            onClick={() => {
              setActivePage('Shop')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="text-xs font-bold text-[#F01B1D] hover:underline uppercase tracking-wider flex items-center gap-1 cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              onClick={() => {
                if (cat.name === 'PC Components') {
                  setActivePage('Categories')
                } else {
                  setActivePage('Shop')
                }
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="bg-white border border-gray-200 hover:border-red-500/30 p-3 rounded shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center group"
            >
              <div className="w-full h-24 overflow-hidden rounded mb-3 bg-gray-100">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="text-xs font-bold text-gray-900 group-hover:text-[#F01B1D] transition-colors leading-tight uppercase font-heading min-h-[30px] flex items-center justify-center">
                {cat.name}
              </h4>
              <span className="text-[10px] text-gray-400 mt-1 font-medium">{cat.count}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS */}
      <section id="featured-products" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-b border-gray-200">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-wider text-black border-l-4 border-[#F01B1D] pl-3 font-heading">
              Featured Products
            </h2>
            <p className="text-gray-500 text-xs mt-1">Our recommended gaming gear and hardware</p>
          </div>
          <button 
            onClick={() => {
              setActivePage('Shop')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="text-xs font-bold text-[#F01B1D] hover:underline uppercase tracking-wider flex items-center gap-1 cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {featured.map((prod) => {
            const isWishlisted = wishlist.includes(prod.id)
            return (
              <div 
                key={prod.id}
                className="bg-white border border-gray-200 rounded p-3 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative group"
              >
                {/* Wishlist Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleWishlist(prod.id)
                  }}
                  className="absolute top-3.5 right-3.5 z-10 p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-400 hover:text-red-500 shadow-sm border border-gray-100 transition-colors"
                >
                  <Heart className={`h-3.5 w-3.5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                </button>

                <div className="cursor-pointer" onClick={() => handleProductClick(prod)}>
                  <div className="w-full h-36 bg-gray-100 rounded overflow-hidden mb-3 relative flex items-center justify-center">
                    <img 
                      src={prod.images[0]} 
                      alt={prod.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-3 w-3 ${i < Math.floor(prod.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
                    ))}
                    <span className="text-[9px] text-gray-400 ml-1">({prod.reviewsCount})</span>
                  </div>

                  <h3 className="text-xs font-bold text-gray-900 line-clamp-2 uppercase min-h-[32px] hover:text-[#F01B1D] transition-colors leading-tight">
                    {prod.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-xs font-extrabold text-[#F01B1D] font-mono leading-none">
                      {formatPrice(prod.price)}
                    </span>
                    {prod.originalPrice && (
                      <span className="text-[9px] text-gray-400 line-through mt-0.5">
                        {formatPrice(prod.originalPrice)}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => addToCart(prod)}
                    className="p-2 bg-[#F01B1D] hover:bg-red-700 text-white rounded transition-colors cursor-pointer shadow-sm hover:shadow"
                    title="Add to Cart"
                  >
                    <ShoppingCart className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 5. GAMING SETUP PROMO BANNER */}
      <section 
        id="gaming-setup-banner"
        className="relative bg-black py-20 px-6 md:px-12 bg-cover bg-center text-center overflow-hidden border-b border-gray-900"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <motion.h3 
            className="text-xs font-extrabold text-[#F01B1D] tracking-widest uppercase mb-3 font-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Create . Play . Win.
          </motion.h3>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight uppercase font-heading mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Ultimate Gaming Setups
          </motion.h2>
          <motion.p 
            className="text-sm text-gray-300 max-w-lg mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Explore our curated setups or consult with our experts to custom build your personal monster gaming workstation. 
          </motion.p>
          <motion.button
            onClick={() => {
              setActivePage('Shop')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="px-8 py-3 bg-[#F01B1D] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Setups
          </motion.button>
        </div>
      </section>

      {/* 6. BEST SELLERS */}
      <section id="best-sellers" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-b border-gray-200">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-wider text-black border-l-4 border-[#F01B1D] pl-3 font-heading">
              Best Sellers
            </h2>
            <p className="text-gray-500 text-xs mt-1">Our most popular hardware & accessories</p>
          </div>
          <button 
            onClick={() => {
              setActivePage('Shop')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="text-xs font-bold text-[#F01B1D] hover:underline uppercase tracking-wider flex items-center gap-1 cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {bestSellers.map((prod) => {
            const isWishlisted = wishlist.includes(prod.id)
            return (
              <div 
                key={prod.id}
                className="bg-white border border-gray-200 rounded p-3 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative group"
              >
                {/* Wishlist Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleWishlist(prod.id)
                  }}
                  className="absolute top-3.5 right-3.5 z-10 p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-400 hover:text-red-500 shadow-sm border border-gray-100 transition-colors"
                >
                  <Heart className={`h-3.5 w-3.5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                </button>

                <div className="cursor-pointer" onClick={() => handleProductClick(prod)}>
                  <div className="w-full h-36 bg-gray-100 rounded overflow-hidden mb-3 relative flex items-center justify-center">
                    <img 
                      src={prod.images[0]} 
                      alt={prod.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-3 w-3 ${i < Math.floor(prod.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
                    ))}
                    <span className="text-[9px] text-gray-400 ml-1">({prod.reviewsCount})</span>
                  </div>

                  <h3 className="text-xs font-bold text-gray-900 line-clamp-2 uppercase min-h-[32px] hover:text-[#F01B1D] transition-colors leading-tight">
                    {prod.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-xs font-extrabold text-[#F01B1D] font-mono leading-none">
                      {formatPrice(prod.price)}
                    </span>
                    {prod.originalPrice && (
                      <span className="text-[9px] text-gray-400 line-through mt-0.5">
                        {formatPrice(prod.originalPrice)}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => addToCart(prod)}
                    className="p-2 bg-[#F01B1D] hover:bg-red-700 text-white rounded transition-colors cursor-pointer shadow-sm hover:shadow"
                    title="Add to Cart"
                  >
                    <ShoppingCart className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 7. TOP BRANDS */}
      <section id="brands-section" className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-extrabold text-black tracking-widest uppercase font-heading">Top Brands</span>
            <div className="h-[1px] flex-1 bg-gray-200"></div>
          </div>
          
          {/* Grid Layout of Brands */}
          <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-6 items-center">
            {topBrands.map((brand, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-3 grayscale hover:grayscale-0 border border-gray-100 hover:border-gray-200 rounded shadow-sm hover:shadow transition-all bg-gray-50/50"
              >
                <span className="font-heading font-black text-sm text-gray-500 hover:text-black italic tracking-tighter uppercase select-none">
                  {brand.logoText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE FAST COMPUTERS */}
      <section id="why-choose-us" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-b border-gray-200">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-2xl font-bold uppercase tracking-wider text-black font-heading mb-3">
            Why Choose Fast Computers?
          </h2>
          <p className="text-gray-500 text-xs">Pakistan's premier hardware retailer with uncompromising standards.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: CheckCircle, title: 'Original Products', desc: '100% Original & Authentic products directly from brands with standard official warranties.' },
            { icon: Tag, title: 'Best Prices', desc: 'Extremely competitive and transparent pricing across Pakistan on all parts and accessories.' },
            { icon: Truck, title: 'Fast Delivery', desc: 'Insured and express delivery setup at your doorstep, packaging with ultimate safety protocols.' },
            { icon: Headphones, title: 'Customer Support', desc: 'Technical team and experts readily available to solve your builds or queries instantly.' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-white border border-gray-200 rounded shadow-sm">
              <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-[#F01B1D] stroke-[2]" />
              </div>
              <h3 className="font-bold text-sm text-gray-900 uppercase font-heading mb-2">{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. WHAT OUR CUSTOMERS SAY */}
      <section id="customer-reviews" className="py-20 px-4 md:px-8 max-w-7xl mx-auto border-b border-gray-200">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-2xl font-bold uppercase tracking-wider text-black font-heading mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 text-xs">Hear testimonials from gamers, professionals, and PC builders.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customerReviews.map((rev, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded p-6 shadow-sm flex flex-col justify-between">
              <div>
                {/* Rating */}
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-xs font-heading">
                  {rev.name[0]}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">{rev.name}</h4>
                  <span className="text-[9px] text-gray-400">Verified Purchaser</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. JOIN OUR COMMUNITY (NEWSLETTER) */}
      <section id="newsletter" className="bg-black py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Text Info */}
          <div>
            <h3 className="text-white font-bold text-lg font-heading uppercase tracking-wider leading-tight mb-2">
              Join Our Community
            </h3>
            <p className="text-gray-500 text-xs leading-normal">
              Subscribe for exclusive deals, new arrivals, and system tuning guides.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 max-w-md w-full">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-gray-950 text-white border border-gray-800 placeholder-gray-600 text-xs px-4 py-3 rounded focus:outline-none focus:border-[#F01B1D]"
              required
            />
            <button 
              type="submit" 
              className="px-6 py-3 bg-[#F01B1D] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer shrink-0"
            >
              Subscribe
            </button>
          </form>

          {/* Envelope Icon / Badge */}
          <div className="flex justify-start lg:justify-end items-center gap-4">
            <div className="relative p-3 bg-gray-950 border border-gray-800 rounded">
              <Mail className="h-6 w-6 text-[#F01B1D]" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#F01B1D] text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center animate-bounce">
                1
              </span>
            </div>
            <div className="text-left">
              <span className="text-[10px] text-gray-500 block uppercase">Exclusive Content</span>
              <span className="text-xs text-white font-bold font-mono">1 New Promo Code</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default HomePage
