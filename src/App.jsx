import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CategoryPage from './pages/CategoryPage'
import AboutUsPage from './pages/AboutUsPage'
import ContactUsPage from './pages/ContactUsPage'
import AuthPage from './pages/AuthPage'
import CartPage from './pages/CartPage'
import WishlistPage from './pages/WishlistPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import { products } from './data/products'

// ─── History API navigation (clean URLs, no #) ───────────────────────────────
// Page key  ↔  URL path mapping
const PAGE_TO_PATH = {
  Home:          '/',
  Shop:          '/shop',
  Categories:    '/categories',
  AboutUs:       '/about',
  ContactUs:     '/contact',
  ProductDetail: '/product',
  Auth:          '/auth',
  Cart:          '/cart',
  Wishlist:      '/wishlist',
  PrivacyPolicy: '/privacy-policy',
}
const PATH_TO_PAGE = Object.fromEntries(
  Object.entries(PAGE_TO_PATH).map(([page, path]) => [path, page])
)

const getPageFromPath = () =>
  PATH_TO_PAGE[window.location.pathname] ?? 'Home'

function App() {
  const [activePage, setActivePageState] = useState(getPageFromPath)
  const [activeProduct, setActiveProduct] = useState(products[0])
  const [searchQuery, setSearchQuery] = useState('')
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])

  // Push a clean URL and update state
  const setActivePage = (page) => {
    const path = PAGE_TO_PATH[page] ?? '/'
    window.history.pushState({ page }, '', path)
    setActivePageState(page)
  }

  // Sync state on browser Back / Forward
  useEffect(() => {
    const onPopState = () => setActivePageState(getPageFromPath())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activePage])

  // Cart Add helper
  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id)
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  // Wishlist Toggle helper
  const toggleWishlist = (productId) => {
    setWishlist(prevList =>
      prevList.includes(productId)
        ? prevList.filter(id => id !== productId)
        : [...prevList, productId]
    )
  }

  // Search callbacks
  const handleSearch = (query) => setSearchQuery(query)
  const handleClearSearch = () => setSearchQuery('')

  // Derived counts
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const wishlistCount = wishlist.length

  // Remove item from cart entirely
  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id))


  // Auth page renders full-screen without Navbar / Footer
  if (activePage === 'Auth') {
    return <AuthPage setActivePage={setActivePage} />
  }

  return (
    <div className="min-h-screen bg-black flex flex-col justify-between text-gray-300">
      
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        onSearch={handleSearch}
      />

      {/* Main Site Body Container */}
      <main className={`flex-1 bg-[#f8f9fa] text-gray-900 ${activePage !== 'Home' ? 'pt-[72px]' : ''}`}>
        {activePage === 'Home' && (
          <HomePage 
            setActivePage={setActivePage} 
            onSelectProduct={setActiveProduct}
            addToCart={addToCart}
            toggleWishlist={toggleWishlist}
            wishlist={wishlist}
          />
        )}
        
        {activePage === 'Shop' && (
          <ShopPage 
            setActivePage={setActivePage} 
            onSelectProduct={setActiveProduct}
            addToCart={addToCart}
            searchQuery={searchQuery}
            onClearSearch={handleClearSearch}
            toggleWishlist={toggleWishlist}
            wishlist={wishlist}
          />
        )}

        {activePage === 'ProductDetail' && (
          <ProductDetailPage 
            product={activeProduct}
            setActivePage={setActivePage}
            addToCart={addToCart}
            toggleWishlist={toggleWishlist}
            wishlist={wishlist}
          />
        )}

        {activePage === 'Categories' && (
          <CategoryPage 
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'AboutUs' && (
          <AboutUsPage 
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'ContactUs' && (
          <ContactUsPage />
        )}

        {activePage === 'Cart' && (
          <CartPage
            cart={cart}
            setCart={setCart}
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'Wishlist' && (
          <WishlistPage
            wishlist={wishlist}
            toggleWishlist={toggleWishlist}
            addToCart={addToCart}
            setActivePage={setActivePage}
            onSelectProduct={setActiveProduct}
          />
        )}

        {activePage === 'PrivacyPolicy' && (
          <PrivacyPolicyPage
            setActivePage={setActivePage}
          />
        )}
      </main>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />

    </div>
  )
}

export default App
