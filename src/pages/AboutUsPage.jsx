import { Trophy, Users, Star, Award } from 'lucide-react'

function AboutUsPage({ setActivePage }) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      
      {/* Breadcrumbs */}
      <div className="mb-8">
        <span className="text-xs text-gray-500 font-medium">
          Home / <span className="text-gray-900 font-bold">About Us</span>
        </span>
        <h1 className="text-2xl font-bold uppercase tracking-wider text-black font-heading mt-2">
          About Us
        </h1>
      </div>

      {/* Main Grid */}
      <div className="bg-white border border-gray-200 rounded p-6 md:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
        <div>
          <h2 className="text-xl font-bold uppercase tracking-wide text-gray-900 font-heading mb-4 border-l-4 border-[#F01B1D] pl-3">
            Our Story & Mission
          </h2>
          <div className="space-y-4 text-xs text-gray-600 leading-relaxed">
            <p>
              Founded in 2018, <strong>FAST COMPUTERS</strong> started with a simple vision: to make high-performance gaming hardware accessible to everyone across Pakistan. Over the years, we have grown from a small enthusiast retail outlet into one of the country's most trusted e-commerce stores for computer components and custom rigs.
            </p>
            <p>
              We believe that computing should have no compromises. Whether you are a competitive esports gamer chasing high frame rates, a developer compiling heavy databases, or a 3D modeler rendering animations, we supply the reliable computing power you need to excel.
            </p>
            <p>
              Our mission is to maintain a 100% authentic inventory, provide the fastest delivery setup in the country, and support our community with technical expertise.
            </p>
          </div>
        </div>
        <div className="rounded overflow-hidden border border-gray-100 shadow-sm aspect-[4/3] bg-gray-100">
          <img 
            src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80" 
            alt="Fast Computers Office Setup" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { icon: Trophy, number: '15,000+', title: 'Systems Built' },
          { icon: Users, number: '25,000+', title: 'Happy Customers' },
          { icon: Star, number: '4.8/5.0', title: 'Average Review' },
          { icon: Award, number: '8+ Years', title: 'Industry Expertise' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded p-6 text-center shadow-sm flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-3">
              <stat.icon className="h-5 w-5 text-[#F01B1D]" />
            </div>
            <span className="text-xl font-extrabold text-[#F01B1D] font-mono block mb-1">{stat.number}</span>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider font-heading">{stat.title}</span>
          </div>
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-black text-center py-10 px-6 rounded border border-gray-900">
        <h3 className="text-white font-bold text-lg font-heading uppercase mb-3">Ready to upgrade your system?</h3>
        <p className="text-gray-400 text-xs max-w-md mx-auto mb-6 leading-relaxed">
          Configure a custom prebuilt gaming PC, choose components from our curated parts lists, or message our engineers to plan your dream hardware setup.
        </p>
        <button
          onClick={() => {
            setActivePage('Shop')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="px-6 py-2.5 bg-[#F01B1D] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
        >
          Configure Custom Build
        </button>
      </div>

    </div>
  )
}

export default AboutUsPage
