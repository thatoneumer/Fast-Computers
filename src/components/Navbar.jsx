import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, Heart, User, ShoppingBag, Menu, X, ShieldCheck, LogIn } from 'lucide-react'
import logo from '/logo.png'

function Navbar({ activePage, setActivePage, cartCount, wishlistCount = 0, onSearch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchVal, setSearchVal] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['Home', 'Categories', 'Shop', 'About', 'Contact']

  const handleLinkClick = (e, link) => {
    e.preventDefault()
    setIsMenuOpen(false)
    if (link === 'About') setActivePage('AboutUs')
    else if (link === 'Contact') setActivePage('ContactUs')
    else setActivePage(link)
  }

  const isLinkActive = (link) => {
    if (link === 'About' && activePage === 'AboutUs') return true
    if (link === 'Contact' && activePage === 'ContactUs') return true
    return activePage === link
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(searchVal)
    }
    setActivePage('Shop')
  }

  // On Home: start transparent (absolute), become fixed+black after scrolling 50px
  // On other pages: always fixed + black bg
  const isHome = activePage === 'Home'

  const navClass = isHome
    ? isScrolled
      ? 'fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800 transition-all duration-300'
      : 'absolute top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300'
    : 'fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800'

  return (
    <nav className={navClass}>
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Left - Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => setActivePage('Home')}>
          <img src={logo} alt="Logo" className="h-15 w-auto" />
        </div>

        {/* Right - Navlinks, Search, Icons */}
        <div className="flex items-center gap-8">
          {/* Navlinks */}
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link}>
                <motion.a
                  href="#"
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`font-medium cursor-pointer transition-colors ${
                    isLinkActive(link) ? 'text-[#F01B1D]' : 'text-white'
                  }`}
                  whileHover={{ scale: 1.1, color: '#F01B1D' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {link}
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit}>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <input
                type="text"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder="Search for products..."
                className="pl-10 pr-4 py-2 border border-gray-600 bg-gray-900 text-white focus:outline-none focus:border-[#F01B1D] w-60 text-xs rounded"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            </motion.div>
          </form>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => setActivePage('Wishlist')}
              className="text-white hover:text-[#F01B1D] transition-colors cursor-pointer relative"
              whileHover={{ scale: 1.2, rotate: 10, color: '#F01B1D' }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#F01B1D] text-white text-[10px] h-5 w-5 rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </motion.button>
            <motion.button
              onClick={() => setActivePage('Auth')}
              className="text-white hover:text-[#F01B1D] transition-colors cursor-pointer"
              whileHover={{ scale: 1.2, rotate: -10, color: '#F01B1D' }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <User className="h-5 w-5" />
            </motion.button>
            <motion.button
              onClick={() => setActivePage('Cart')}
              className="text-white relative cursor-pointer"
              whileHover={{ scale: 1.2, color: '#F01B1D' }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-[#F01B1D] text-white text-[10px] h-5 w-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        {/* Left - Menu Bar + Logo */}
        <div className="flex items-center gap-4">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white cursor-pointer"
            whileHover={{ scale: 1.2, rotate: 90, color: '#F01B1D' }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Menu className="h-6 w-6" />
          </motion.button>
          <img src={logo} alt="Logo" className="h-8 w-auto cursor-pointer" onClick={() => setActivePage('Home')} />
        </div>

        {/* Right - Search & Cart */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={() => setActivePage('Shop')}
            className="text-white hover:text-[#F01B1D] transition-colors cursor-pointer"
            whileHover={{ scale: 1.2, color: '#F01B1D' }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Search className="h-5 w-5" />
          </motion.button>
          <motion.button
            onClick={() => setActivePage('Cart')}
            className="text-white relative cursor-pointer"
            whileHover={{ scale: 1.2, color: '#F01B1D' }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 bg-[#F01B1D] text-white text-[10px] h-5 w-5 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black/97 z-50 flex flex-col overflow-y-auto">

          {/* Header Row — Logo + Close */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800 shrink-0">
            <img
              src={logo}
              alt="Logo"
              className="h-9 w-auto cursor-pointer"
              onClick={() => { setIsMenuOpen(false); setActivePage('Home') }}
            />
            <motion.button
              onClick={() => setIsMenuOpen(false)}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white cursor-pointer"
              whileHover={{ scale: 1.15, rotate: 90, color: '#F01B1D' }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <X className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Main Nav Links */}
          <ul className="flex flex-col px-5 pt-6 gap-1">
            {[
              { label: 'Home',       page: 'Home' },
              { label: 'Shop',       page: 'Shop' },
              { label: 'Categories', page: 'Categories' },
              { label: 'About Us',   page: 'AboutUs' },
              { label: 'Contact Us', page: 'ContactUs' },
            ].map(({ label, page }) => (
              <li key={page}>
                <motion.a
                  href="#"
                  onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setActivePage(page) }}
                  className={`flex items-center justify-between font-semibold text-base py-3.5 border-b border-gray-800/60 ${
                    activePage === page ? 'text-[#F01B1D]' : 'text-gray-200'
                  }`}
                  whileHover={{ x: 8, color: '#F01B1D' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {label}
                  {activePage === page && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F01B1D]" />
                  )}
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Divider + Extra Links */}
          <div className="px-5 pt-6 pb-4 flex flex-col gap-3">
            <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-1">More</p>

            {/* Privacy Policy */}
            <motion.a
              href="#"
              onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setActivePage('PrivacyPolicy') }}
              className="flex items-center gap-3 text-sm text-gray-400 hover:text-white py-2 border-b border-gray-800/60"
              whileHover={{ x: 8, color: '#ffffff' }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <ShieldCheck className="h-4 w-4 text-[#F01B1D]" />
              Privacy Policy
            </motion.a>
          </div>

          {/* Login Button */}
          <div className="px-5 mt-auto pb-8 pt-4">
            <motion.button
              onClick={() => { setIsMenuOpen(false); setActivePage('Auth') }}
              className="w-full h-12 bg-[#F01B1D] hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-lg shadow-red-900/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <LogIn className="h-4 w-4" />
              Sign In / Sign Up
            </motion.button>

            <p className="text-center text-[10px] text-gray-700 mt-5 tracking-wide">
              © {new Date().getFullYear()} FAST COMPUTERS — All rights reserved.
            </p>
          </div>

        </div>
      )}
    </nav>
  )
}

export default Navbar
