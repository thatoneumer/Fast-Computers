import { motion } from 'framer-motion'
import { ArrowRight, Shield, Truck, RotateCcw, CheckCircle } from 'lucide-react'
import heroBg from '/hero-bg.jpg'

function Hero({ onShopClick }) {
  const trustFeatures = [
    {
      icon: CheckCircle,
      title: '100% Original',
      subtitle: 'Products'
    },
    {
      icon: Shield,
      title: '1 Year',
      subtitle: 'Warranty'
    },
    {
      icon: Truck,
      title: 'Fast & Secure',
      subtitle: 'Delivery'
    },
    {
      icon: RotateCcw,
      title: 'Easy Returns',
      subtitle: '7 Days Return'
    }
  ]

  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center py-20">
            
            {/* Tagline */}
            <motion.div 
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-[#F01B1D] text-xs font-bold tracking-widest uppercase">
                BUILD YOUR DREAM
              </span>
              <div className="h-px w-12 bg-[#F01B1D]"></div>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-white block">GAME WITHOUT</span>
              <span className="text-[#F01B1D] block">COMPROMISE</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              High Performance PCs & Accessories<br />
              For Gamers & Creators
            </motion.p>

            {/* CTA Button */}
            <motion.button
              onClick={onShopClick}
              className="bg-[#F01B1D] text-white px-6 py-3 text-base font-bold flex items-center gap-2 w-fit hover:bg-red-700 transition-colors mb-10 cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              SHOP NOW
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            {/* Trust Features */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {trustFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-start gap-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <feature.icon className="w-5 h-5 text-white stroke-2" />
                  <div>
                    <h3 className="text-white font-bold text-xs">{feature.title}</h3>
                    <p className="text-gray-400 text-[10px]">{feature.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* Right Side - Empty (Background image shows PC setup) */}
          <div className="hidden lg:block lg:w-1/2"></div>

        </div>
      </div>
    </section>
  )
}

export default Hero
