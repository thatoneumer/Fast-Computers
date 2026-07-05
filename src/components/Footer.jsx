import { Mail, Phone, MapPin, Clock, CreditCard } from 'lucide-react'

function Footer({ setActivePage }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-gray-400 border-t border-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Column 1: About */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-heading font-bold text-lg tracking-wider mb-2">
            <span className="text-[#F01B1D]">F</span>AST COMPUTERS
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Fast Computers is Pakistan's premier destination for high-end gaming rigs, custom workstation PCs, authentic hardware components, and performance peripherals. Build your dream setup with no compromises.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <a href="#" className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-white hover:border-[#F01B1D] hover:text-[#F01B1D] transition-colors" title="Facebook">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-white hover:border-[#F01B1D] hover:text-[#F01B1D] transition-colors" title="Instagram">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-white hover:border-[#F01B1D] hover:text-[#F01B1D] transition-colors" title="Youtube">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-white hover:border-[#F01B1D] hover:text-[#F01B1D] transition-colors" title="Twitter">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white font-heading font-bold text-sm tracking-wider uppercase mb-6 border-l-2 border-[#F01B1D] pl-3">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li><button onClick={() => setActivePage('Home')} className="hover:text-[#F01B1D] transition-colors text-left">Home</button></li>
            <li><button onClick={() => setActivePage('Shop')} className="hover:text-[#F01B1D] transition-colors text-left">Shop Catalog</button></li>
            <li><button onClick={() => setActivePage('Categories')} className="hover:text-[#F01B1D] transition-colors text-left">PC Components</button></li>
            <li><button onClick={() => setActivePage('Cart')} className="hover:text-[#F01B1D] transition-colors text-left">My Cart</button></li>
            <li><button onClick={() => setActivePage('Wishlist')} className="hover:text-[#F01B1D] transition-colors text-left">My Wishlist</button></li>
            <li><button onClick={() => setActivePage('AboutUs')} className="hover:text-[#F01B1D] transition-colors text-left">About Us</button></li>
            <li><button onClick={() => setActivePage('ContactUs')} className="hover:text-[#F01B1D] transition-colors text-left">Contact Us</button></li>
            <li><button onClick={() => setActivePage('PrivacyPolicy')} className="hover:text-[#F01B1D] transition-colors text-left">Privacy Policy</button></li>
          </ul>
        </div>

        {/* Column 3: Categories */}
        <div>
          <h3 className="text-white font-heading font-bold text-sm tracking-wider uppercase mb-6 border-l-2 border-[#F01B1D] pl-3">
            Shop Categories
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li><button onClick={() => setActivePage('Shop')} className="hover:text-[#F01B1D] transition-colors text-left">Gaming PCs</button></li>
            <li><button onClick={() => setActivePage('Shop')} className="hover:text-[#F01B1D] transition-colors text-left">Laptops</button></li>
            <li><button onClick={() => setActivePage('Categories')} className="hover:text-[#F01B1D] transition-colors text-left">Graphics Cards</button></li>
            <li><button onClick={() => setActivePage('Categories')} className="hover:text-[#F01B1D] transition-colors text-left">Processors (CPUs)</button></li>
            <li><button onClick={() => setActivePage('Shop')} className="hover:text-[#F01B1D] transition-colors text-left">Gaming Keyboards</button></li>
            <li><button onClick={() => setActivePage('Shop')} className="hover:text-[#F01B1D] transition-colors text-left">Gaming Monitors</button></li>
          </ul>
        </div>

        {/* Column 4: Contact info */}
        <div>
          <h3 className="text-white font-heading font-bold text-sm tracking-wider uppercase mb-6 border-l-2 border-[#F01B1D] pl-3">
            Contact Information
          </h3>
          <ul className="flex flex-col gap-4 text-sm text-gray-500">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-[#F01B1D] shrink-0 mt-0.5" />
              <span>Plaza 45-B, Sector XX, Phase 3, DHA, Lahore, Pakistan.</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-[#F01B1D] shrink-0" />
              <span>+92 (300) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[#F01B1D] shrink-0" />
              <span>support@fastcomputers.pk</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-[#F01B1D] shrink-0" />
              <span>Mon - Sat: 11:00 AM - 9:00 PM</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 border-t border-gray-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-600 text-center md:text-left">
          &copy; {currentYear} FAST COMPUTERS. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <button onClick={() => setActivePage('PrivacyPolicy')} className="hover:text-[#F01B1D] transition-colors cursor-pointer">Privacy Policy</button>
          <span className="text-gray-800">·</span>
          <button onClick={() => setActivePage('ContactUs')} className="hover:text-[#F01B1D] transition-colors cursor-pointer">Contact Us</button>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-600">
          <a 
            href="https://thatoneumerpk.web.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#F01B1D] transition-colors cursor-pointer"
          >
            Powered by Thatoneumer
          </a>
          <div className="flex items-center gap-1.5 bg-gray-950 px-2.5 py-1 border border-gray-900 rounded font-medium text-white/70">
            <CreditCard className="h-3 w-3 text-[#F01B1D]" />
            <span>Cash on Delivery (COD)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-gray-950 px-2.5 py-1 border border-gray-900 rounded font-medium text-white/70">
            <CreditCard className="h-3 w-3 text-[#F01B1D]" />
            <span>Bank Transfer</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
