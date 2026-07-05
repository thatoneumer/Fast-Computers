import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, ShoppingCart, Heart, RefreshCw, Plus, Minus, Check, ArrowLeft } from 'lucide-react'

function ProductDetailPage({ product, setActivePage, addToCart, toggleWishlist, wishlist }) {
  const [activeImageIdx, setActiveImageIdx] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const [isAdded, setIsAdded] = useState(false)

  // Reset page states when product changes
  useEffect(() => {
    setActiveImageIdx(0)
    setQuantity(1)
    setActiveTab('description')
    setIsAdded(false)
  }, [product])

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 text-center bg-white border border-gray-200 rounded my-10">
        <h2 className="text-xl font-bold font-heading mb-4 text-gray-900">No Product Selected</h2>
        <p className="text-gray-500 text-xs mb-6">Select a product from the home page or catalog to view details.</p>
        <button
          onClick={() => setActivePage('Shop')}
          className="px-6 py-2.5 bg-[#F01B1D] text-white font-bold text-xs uppercase tracking-wider rounded cursor-pointer"
        >
          Browse Catalog
        </button>
      </div>
    )
  }

  const formatPrice = (price) => {
    return `PKR ${price.toLocaleString()}`
  }

  const handleAddToCart = () => {
    if (addToCart) {
      // Add multiple quantities
      for (let i = 0; i < quantity; i++) {
        addToCart(product)
      }
      setIsAdded(true)
      setTimeout(() => setIsAdded(false), 2000)
    }
  }

  const isWishlisted = wishlist.includes(product.id)

  const tabs = [
    { id: 'description', name: 'Description' },
    { id: 'specifications', name: 'Specifications' },
    { id: 'reviews', name: 'Reviews' },
    { id: 'shipping', name: 'Shipping' }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      
      {/* Back to Shop & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <button
          onClick={() => setActivePage('Shop')}
          className="text-xs font-bold text-gray-500 hover:text-[#F01B1D] flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Catalog</span>
        </button>
        <span className="text-xs text-gray-400 font-medium">
          Home / {product.category} / {product.subcategory} / <span className="text-gray-900 font-bold">{product.brand}</span>
        </span>
      </div>

      {/* Main Container */}
      <div className="bg-white border border-gray-200 rounded p-6 md:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        
        {/* Left Column: Image Gallery (5 Columns) */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-4">
          {/* Large Main Display */}
          <div className="w-full aspect-[4/3] bg-gray-100 border border-gray-200 rounded overflow-hidden flex items-center justify-center relative">
            <img 
              src={product.images[activeImageIdx] || product.images[0]} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            {product.originalPrice && (
              <span className="absolute top-4 left-4 bg-[#F01B1D] text-white font-extrabold text-[10px] uppercase px-2 py-0.5 rounded tracking-wide font-mono">
                Sale
              </span>
            )}
          </div>

          {/* Gallery Thumbnails */}
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`aspect-square bg-gray-50 border rounded overflow-hidden cursor-pointer hover:border-red-500/50 transition-colors ${
                    activeImageIdx === idx ? 'border-2 border-[#F01B1D]' : 'border-gray-200'
                  }`}
                >
                  <img src={img} alt={`${product.name} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Product Info & Actions (7 Columns) */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-between">
          <div>
            {/* Brand & Inventory status */}
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-xs bg-gray-100 text-gray-500 font-bold px-2 py-0.5 rounded uppercase font-heading tracking-wide">
                {product.brand}
              </span>
              <span className={`text-xs font-bold flex items-center gap-1 ${
                product.inStock ? 'text-emerald-600' : 'text-[#F01B1D]'
              }`}>
                <span className={`h-2 w-2 rounded-full ${product.inStock ? 'bg-emerald-600' : 'bg-[#F01B1D]'}`} />
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-black font-heading leading-tight mb-4">
              {product.name}
            </h1>

            {/* Stars & Reviews */}
            <div className="flex items-center gap-1 mb-6 border-b border-gray-100 pb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
                ))}
              </div>
              <span className="text-xs text-gray-500 font-medium ml-1">
                {product.rating} Rating ({product.reviewsCount} verified reviews)
              </span>
            </div>

            {/* Price Detail */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-black text-[#F01B1D] font-mono leading-none">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through font-mono">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-gray-400 block mt-1">Prices are inclusive of standard local GST taxes.</span>
            </div>

            {/* Bulleted Specifications */}
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 font-heading mb-3">Key Features:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600 list-disc pl-4">
                {product.specs.slice(0, 6).map((spec, i) => (
                  <li key={i} className="leading-relaxed">{spec}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Row & Quantity Selector */}
          <div className="border-t border-gray-100 pt-6">
            
            {/* Quantity Counter */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-200 rounded h-11 w-32 bg-gray-50 shrink-0">
                <button
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="w-10 h-full flex items-center justify-center hover:text-[#F01B1D] transition-colors cursor-pointer"
                  disabled={!product.inStock}
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="flex-1 text-center text-xs font-bold font-mono">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="w-10 h-full flex items-center justify-center hover:text-[#F01B1D] transition-colors cursor-pointer"
                  disabled={!product.inStock}
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex-1 flex gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 h-11 rounded font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm ${
                    !product.inStock
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300'
                      : isAdded
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      : 'bg-[#F01B1D] hover:bg-red-700 text-white'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span>Added to Cart</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="h-4 w-4" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    handleAddToCart()
                    setActivePage('Shop')
                  }}
                  disabled={!product.inStock}
                  className={`flex-1 h-11 rounded font-bold text-xs uppercase tracking-wider flex items-center justify-center transition-colors cursor-pointer shadow-sm ${
                    product.inStock
                      ? 'bg-black hover:bg-gray-900 text-white border border-black'
                      : 'bg-transparent text-gray-400 border border-gray-200 cursor-not-allowed'
                  }`}
                >
                  Buy Now
                </button>
              </div>
            </div>

            {/* Wishlist & Compare Links */}
            <div className="flex items-center gap-6 text-xs text-gray-500 font-semibold border-t border-gray-100 pt-4">
              <button
                onClick={() => toggleWishlist(product.id)}
                className="flex items-center gap-1.5 hover:text-[#F01B1D] cursor-pointer transition-colors"
              >
                <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                <span>{isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}</span>
              </button>
              <button className="flex items-center gap-1.5 hover:text-[#F01B1D] cursor-pointer transition-colors">
                <RefreshCw className="h-3.5 w-3.5" />
                <span>Compare Specs</span>
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Tabs Section */}
      <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden mb-12">
        {/* Tab Header */}
        <div className="bg-gray-50 border-b border-gray-200 flex flex-wrap">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-bold text-xs uppercase tracking-wider transition-colors border-r border-gray-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white text-[#F01B1D] border-t-2 border-t-[#F01B1D]'
                  : 'text-gray-500 hover:text-black hover:bg-gray-100/50'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content Panel */}
        <div className="p-6 md:p-8 text-xs text-gray-600 leading-relaxed">
          {activeTab === 'description' && (
            <div className="space-y-4">
              <h3 className="font-bold text-sm text-gray-900 uppercase font-heading mb-2">Product Description</h3>
              <p>{product.description}</p>
              <p>Designed for gaming enthusiasts who want performance and quality combined. The advanced cooler shroud and premium materials deliver exceptional lifespan and stability even under peak computing workloads.</p>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div>
              <h3 className="font-bold text-sm text-gray-900 uppercase font-heading mb-4">Detailed Specifications</h3>
              <div className="border border-gray-100 rounded overflow-hidden max-w-2xl">
                {product.specs.map((spec, i) => {
                  const parts = spec.split(/ (.*)/)
                  return (
                    <div key={i} className={`grid grid-cols-3 p-3 text-xs ${i % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'} border-b border-gray-100 last:border-b-0`}>
                      <span className="font-bold text-gray-900 uppercase">{parts[0]}</span>
                      <span className="col-span-2 text-gray-600">{parts[1] || spec}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <h3 className="font-bold text-sm text-gray-900 uppercase font-heading mb-4">Customer Reviews</h3>
              <div className="flex items-center gap-6 mb-6 pb-6 border-b border-gray-100">
                <div className="text-center">
                  <span className="text-3xl font-black text-gray-900 block leading-none">{product.rating}</span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mt-1">Out of 5</span>
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-400 block mt-1">Based on {product.reviewsCount} verified purchases</span>
                </div>
              </div>

              {/* Review List */}
              <div className="space-y-4">
                {[
                  { name: 'Bilal A.', rating: 5, date: '10 June 2026', text: 'Amazing card, runs extremely cool. Playing Cyberpunk 2077 at Ultra with DLSS 3 frame gen enabled. Delivered within 24 hours!' },
                  { name: 'Sarmad S.', rating: 4, date: '28 May 2026', text: 'Very quiet fans and fits perfectly in my micro-ATX build. A solid upgrade from my old GTX 1660.' }
                ].map((rev, idx) => (
                  <div key={idx} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900 text-xs">{rev.name}</span>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-3 w-3 ${i < rev.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
                          ))}
                        </div>
                      </div>
                      <span className="text-[10px] text-gray-400">{rev.date}</span>
                    </div>
                    <p className="text-gray-600">{rev.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div className="space-y-4">
              <h3 className="font-bold text-sm text-gray-900 uppercase font-heading mb-2">Shipping & Returns Information</h3>
              <p>We offer insured delivery services across Pakistan via Leopards Courier or TCS. Orders placed before 4:00 PM are dispatched on the same business day.</p>
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>Lahore:</strong> 1-2 Business Days</li>
                <li><strong>Karachi & Islamabad:</strong> 2-3 Business Days</li>
                <li><strong>Other Cities:</strong> 3-4 Business Days</li>
              </ul>
              <p className="mt-2 text-gray-500">All products are covered under our 7-day hassle-free replacement return policy if found damaged or defective upon unboxing.</p>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default ProductDetailPage
