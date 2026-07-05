import { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, ShoppingCart, Filter, X, Grid, List, Heart } from 'lucide-react'
import { products } from '../data/products'

function ShopPage({ setActivePage, onSelectProduct, addToCart, searchQuery, onClearSearch, toggleWishlist, wishlist }) {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [priceRange, setPriceRange] = useState(500000)
  const [stockStatus, setStockStatus] = useState({ inStock: false, outOfStock: false })
  const [sortBy, setSortBy] = useState('latest')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Extract unique brands for the filter checkbox
  const availableBrands = useMemo(() => {
    const brands = products.map(p => p.brand)
    return [...new Set(brands)]
  }, [])

  // Extract unique categories for the filter checkbox
  const availableCategories = useMemo(() => {
    const cats = products.map(p => p.category)
    return [...new Set(cats)]
  }, [])

  // Apply filters
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // 1. Search Query
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchName = product.name.toLowerCase().includes(query)
        const matchCategory = product.category.toLowerCase().includes(query)
        const matchBrand = product.brand.toLowerCase().includes(query)
        if (!matchName && !matchCategory && !matchBrand) return false
      }

      // 2. Categories
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false
      }

      // 3. Brands
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false
      }

      // 4. Price
      if (product.price > priceRange) {
        return false
      }

      // 5. Stock status
      const { inStock, outOfStock } = stockStatus
      if (inStock || outOfStock) {
        if (inStock && !product.inStock) return false
        if (outOfStock && product.inStock) return false
      }

      return true
    })
  }, [selectedCategories, selectedBrands, priceRange, stockStatus, searchQuery])

  // Apply Sorting
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts]
    if (sortBy === 'price-low') {
      return list.sort((a, b) => a.price - b.price)
    }
    if (sortBy === 'price-high') {
      return list.sort((a, b) => b.price - a.price)
    }
    if (sortBy === 'rating') {
      return list.sort((a, b) => b.rating - a.rating)
    }
    // Default or 'latest'
    return list
  }, [filteredProducts, sortBy])

  // Handle Category check toggle
  const toggleCategory = (cat) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  // Handle Brand check toggle
  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    )
  }

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

  // Clear all filters
  const resetFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
    setPriceRange(500000)
    setStockStatus({ inStock: false, outOfStock: false })
    if (onClearSearch) onClearSearch()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      
      {/* Page Title & Breadcrumbs */}
      <div className="mb-8">
        <span className="text-xs text-gray-500 font-medium">
          Home / <span className="text-gray-900 font-bold">Shop</span>
        </span>
        <h1 className="text-2xl font-bold uppercase tracking-wider text-black font-heading mt-2">
          Shop Catalog
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Column: Filter Sidebar (Desktop) */}
        <aside className="hidden lg:block w-64 shrink-0 bg-white border border-gray-200 rounded p-6 shadow-sm h-fit">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
            <h2 className="font-heading font-black text-sm uppercase text-gray-900">Filter By</h2>
            <button 
              onClick={resetFilters} 
              className="text-[10px] text-gray-400 hover:text-[#F01B1D] font-bold uppercase tracking-wider cursor-pointer"
            >
              Reset All
            </button>
          </div>

          {/* Search Indicator */}
          {searchQuery && (
            <div className="mb-6 bg-red-50 border border-red-100 rounded p-3 relative">
              <span className="text-[10px] font-bold text-gray-400 block uppercase">Search Term:</span>
              <span className="text-xs font-bold text-[#F01B1D] mt-0.5 block truncate pr-4">"{searchQuery}"</span>
              <button 
                onClick={onClearSearch}
                className="absolute top-2 right-2 text-gray-400 hover:text-[#F01B1D]"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          )}

          {/* Category Filter */}
          <div className="mb-6 pb-6 border-b border-gray-100">
            <h3 className="font-bold text-xs uppercase tracking-wide text-gray-900 mb-4 font-heading">Category</h3>
            <div className="flex flex-col gap-2.5">
              {availableCategories.map((cat, idx) => (
                <label key={idx} className="flex items-center gap-2.5 text-xs text-gray-600 hover:text-black cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    className="accent-[#F01B1D] rounded border-gray-300"
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Brand Filter */}
          <div className="mb-6 pb-6 border-b border-gray-100">
            <h3 className="font-bold text-xs uppercase tracking-wide text-gray-900 mb-4 font-heading">Brand</h3>
            <div className="flex flex-col gap-2.5">
              {availableBrands.map((brand, idx) => (
                <label key={idx} className="flex items-center gap-2.5 text-xs text-gray-600 hover:text-black cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="accent-[#F01B1D] rounded border-gray-300"
                  />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mb-6 pb-6 border-b border-gray-100">
            <h3 className="font-bold text-xs uppercase tracking-wide text-gray-900 mb-4 font-heading">Price Range</h3>
            <div className="flex flex-col gap-2">
              <input
                type="range"
                min="0"
                max="500000"
                step="5000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-[#F01B1D] cursor-pointer"
              />
              <div className="flex items-center justify-between text-[11px] font-mono text-gray-500 mt-1">
                <span>PKR 0</span>
                <span className="font-bold text-black">{formatPrice(priceRange)}</span>
              </div>
            </div>
          </div>

          {/* Availability Filter */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-wide text-gray-900 mb-4 font-heading">Availability</h3>
            <div className="flex flex-col gap-2.5">
              <label className="flex items-center gap-2.5 text-xs text-gray-600 hover:text-black cursor-pointer">
                <input
                  type="checkbox"
                  checked={stockStatus.inStock}
                  onChange={(e) => setStockStatus(prev => ({ ...prev, inStock: e.target.checked }))}
                  className="accent-[#F01B1D] rounded border-gray-300"
                />
                <span>In Stock</span>
              </label>
              <label className="flex items-center gap-2.5 text-xs text-gray-600 hover:text-black cursor-pointer">
                <input
                  type="checkbox"
                  checked={stockStatus.outOfStock}
                  onChange={(e) => setStockStatus(prev => ({ ...prev, outOfStock: e.target.checked }))}
                  className="accent-[#F01B1D] rounded border-gray-300"
                />
                <span>Out of Stock</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Right Column: Products Content */}
        <main className="flex-1">
          
          {/* Main Content Header */}
          <div className="bg-white border border-gray-200 rounded p-4 flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 shadow-sm">
            <span className="text-xs text-gray-500 font-medium">
              Showing <span className="text-gray-900 font-bold">{sortedProducts.length}</span> of <span className="font-bold text-gray-900">{products.length}</span> results
            </span>
            
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
              
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded text-gray-700 hover:border-black cursor-pointer bg-gray-50"
              >
                <Filter className="h-3.5 w-3.5" />
                <span>Filters</span>
              </button>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider whitespace-nowrap">Sort by</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-50 text-xs px-3 py-1.5 border border-gray-200 rounded text-gray-800 focus:outline-none focus:border-[#F01B1D]"
                >
                  <option value="latest">Latest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>
          </div>

          {/* Active Filter Badges */}
          {(selectedCategories.length > 0 || selectedBrands.length > 0 || stockStatus.inStock || stockStatus.outOfStock) && (
            <div className="flex flex-wrap gap-2 mb-6 items-center">
              <span className="text-[10px] font-bold text-gray-400 uppercase mr-1">Active:</span>
              
              {selectedCategories.map(cat => (
                <span key={cat} className="inline-flex items-center gap-1 bg-red-50 text-[#F01B1D] text-[10px] font-bold px-2 py-0.5 border border-red-100 rounded">
                  <span>{cat}</span>
                  <button onClick={() => toggleCategory(cat)} className="hover:text-red-700"><X className="h-2.5 w-2.5" /></button>
                </span>
              ))}

              {selectedBrands.map(brand => (
                <span key={brand} className="inline-flex items-center gap-1 bg-red-50 text-[#F01B1D] text-[10px] font-bold px-2 py-0.5 border border-red-100 rounded">
                  <span>{brand}</span>
                  <button onClick={() => toggleBrand(brand)} className="hover:text-red-700"><X className="h-2.5 w-2.5" /></button>
                </span>
              ))}

              {stockStatus.inStock && (
                <span className="inline-flex items-center gap-1 bg-red-50 text-[#F01B1D] text-[10px] font-bold px-2 py-0.5 border border-red-100 rounded">
                  <span>In Stock</span>
                  <button onClick={() => setStockStatus(prev => ({ ...prev, inStock: false }))} className="hover:text-red-700"><X className="h-2.5 w-2.5" /></button>
                </span>
              )}

              {stockStatus.outOfStock && (
                <span className="inline-flex items-center gap-1 bg-red-50 text-[#F01B1D] text-[10px] font-bold px-2 py-0.5 border border-red-100 rounded">
                  <span>Out of Stock</span>
                  <button onClick={() => setStockStatus(prev => ({ ...prev, outOfStock: false }))} className="hover:text-red-700"><X className="h-2.5 w-2.5" /></button>
                </span>
              )}

              <button 
                onClick={resetFilters} 
                className="text-[10px] font-bold text-gray-400 hover:text-[#F01B1D] uppercase ml-1 underline cursor-pointer"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Products Grid */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {sortedProducts.map((prod) => {
                const isWishlisted = wishlist.includes(prod.id)
                return (
                  <div 
                    key={prod.id}
                    className="bg-white border border-gray-200 rounded p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative group"
                  >
                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleWishlist(prod.id)
                      }}
                      className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-400 hover:text-red-500 shadow-sm border border-gray-100 transition-colors"
                    >
                      <Heart className={`h-3.5 w-3.5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                    </button>

                    <div className="cursor-pointer" onClick={() => handleProductClick(prod)}>
                      <div className="w-full h-44 bg-gray-100 rounded overflow-hidden mb-3.5 flex items-center justify-center">
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
                        <span className="text-[10px] text-gray-400 ml-1">({prod.reviewsCount})</span>
                      </div>

                      <h3 className="text-xs font-bold text-gray-900 line-clamp-2 uppercase min-h-[32px] hover:text-[#F01B1D] transition-colors leading-tight">
                        {prod.name}
                      </h3>
                      
                      {/* Subcategory & Brand Label */}
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-[9px] bg-gray-100 text-gray-500 font-semibold px-1.5 py-0.5 rounded">
                          {prod.brand}
                        </span>
                        <span className="text-[9px] bg-gray-100 text-gray-500 font-semibold px-1.5 py-0.5 rounded">
                          {prod.subcategory}
                        </span>
                        {!prod.inStock && (
                          <span className="text-[9px] bg-red-50 text-[#F01B1D] font-bold px-1.5 py-0.5 rounded">
                            Out of Stock
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
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
                        disabled={!prod.inStock}
                        className={`p-2 rounded transition-colors cursor-pointer shadow-sm hover:shadow ${
                          prod.inStock ? 'bg-[#F01B1D] hover:bg-red-700 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                        title={prod.inStock ? "Add to Cart" : "Out of Stock"}
                      >
                        <ShoppingCart className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded p-12 text-center shadow-sm">
              <span className="text-lg font-bold text-gray-400 block font-heading mb-2">No Products Found</span>
              <p className="text-gray-500 text-xs mb-6">Try refining your filter conditions or clear filters to view all products.</p>
              <button
                onClick={resetFilters}
                className="px-6 py-2.5 bg-[#F01B1D] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
              >
                Clear All Filters
              </button>
            </div>
          )}

        </main>
      </div>

      {/* Mobile Filter Drawer Overlay & Side Panel */}
      {isFilterOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div onClick={() => setIsFilterOpen(false)} className="fixed inset-0 bg-black/60" />
          
          {/* Filter Panel Content */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="relative w-80 max-w-[85vw] h-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
          >
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                <h2 className="font-heading font-black text-sm uppercase text-gray-900">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)} className="text-gray-500 hover:text-black">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <h3 className="font-bold text-xs uppercase tracking-wide text-gray-900 mb-4 font-heading">Category</h3>
                <div className="flex flex-col gap-2.5">
                  {availableCategories.map((cat, idx) => (
                    <label key={idx} className="flex items-center gap-2.5 text-xs text-gray-600 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="accent-[#F01B1D] rounded"
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <h3 className="font-bold text-xs uppercase tracking-wide text-gray-900 mb-4 font-heading">Brand</h3>
                <div className="flex flex-col gap-2.5">
                  {availableBrands.map((brand, idx) => (
                    <label key={idx} className="flex items-center gap-2.5 text-xs text-gray-600 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="accent-[#F01B1D] rounded"
                      />
                      <span>{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <h3 className="font-bold text-xs uppercase tracking-wide text-gray-900 mb-4 font-heading">Price Range</h3>
                <div className="flex flex-col gap-2">
                  <input
                    type="range"
                    min="0"
                    max="500000"
                    step="5000"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full accent-[#F01B1D] cursor-pointer"
                  />
                  <div className="flex items-center justify-between text-[11px] font-mono text-gray-500 mt-1">
                    <span>PKR 0</span>
                    <span className="font-bold text-black">{formatPrice(priceRange)}</span>
                  </div>
                </div>
              </div>

              {/* Availability Filter */}
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wide text-gray-900 mb-4 font-heading">Availability</h3>
                <div className="flex flex-col gap-2.5">
                  <label className="flex items-center gap-2.5 text-xs text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={stockStatus.inStock}
                      onChange={(e) => setStockStatus(prev => ({ ...prev, inStock: e.target.checked }))}
                      className="accent-[#F01B1D] rounded"
                    />
                    <span>In Stock</span>
                  </label>
                  <label className="flex items-center gap-2.5 text-xs text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={stockStatus.outOfStock}
                      onChange={(e) => setStockStatus(prev => ({ ...prev, outOfStock: e.target.checked }))}
                      className="accent-[#F01B1D] rounded"
                    />
                    <span>Out of Stock</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6 mt-6 flex gap-4">
              <button
                onClick={resetFilters}
                className="flex-1 py-2.5 border border-gray-200 hover:border-black text-gray-700 font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
              >
                Reset
              </button>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="flex-1 py-2.5 bg-[#F01B1D] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
              >
                Apply
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  )
}

export default ShopPage
