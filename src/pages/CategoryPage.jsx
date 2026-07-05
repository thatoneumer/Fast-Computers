import { pcComponentSubcategories } from '../data/products'
import { Cpu, HardDrive, Layers, Database, Disc, Zap, Box, Wind, Droplet, Sun, PlusSquare, Columns } from 'lucide-react'

function CategoryPage({ setActivePage }) {
  
  // Icon mapper helper
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'cpu': return <Cpu className="h-8 w-8 text-[#F01B1D]" />
      case 'hard-drive': return <HardDrive className="h-8 w-8 text-[#F01B1D]" />
      case 'layers': return <Layers className="h-8 w-8 text-[#F01B1D]" />
      case 'columns': return <Columns className="h-8 w-8 text-[#F01B1D]" />
      case 'database': return <Database className="h-8 w-8 text-[#F01B1D]" />
      case 'disc': return <Disc className="h-8 w-8 text-[#F01B1D]" />
      case 'zap': return <Zap className="h-8 w-8 text-[#F01B1D]" />
      case 'box': return <Box className="h-8 w-8 text-[#F01B1D]" />
      case 'wind': return <Wind className="h-8 w-8 text-[#F01B1D]" />
      case 'droplet': return <Droplet className="h-8 w-8 text-[#F01B1D]" />
      case 'sun': return <Sun className="h-8 w-8 text-[#F01B1D]" />
      case 'plus-square': return <PlusSquare className="h-8 w-8 text-[#F01B1D]" />
      default: return <Cpu className="h-8 w-8 text-[#F01B1D]" />
    }
  }

  const handleSubcategoryClick = (subcat) => {
    // Open Shop page when clicked
    setActivePage('Shop')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="w-full bg-[#f8f9fa] pb-20">

      {/* Grid of Subcategories */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-10">

        {/* Page Header — same style as ShopPage / AboutUsPage */}
        <div className="mb-10">
          <span className="text-xs text-gray-500 font-medium">
            Home / <span className="text-gray-900 font-bold">Categories</span>
          </span>
          <h1 className="text-2xl font-bold uppercase tracking-wider text-black font-heading mt-2">
            PC Components
          </h1>
          <p className="text-gray-500 text-xs mt-1">
            Select a hardware category to view catalog listings
          </p>
        </div>

        {/* 12-Card Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pcComponentSubcategories.map((subcat, idx) => (
            <div
              key={idx}
              onClick={() => handleSubcategoryClick(subcat)}
              className="bg-white border border-gray-200 hover:border-red-500/30 p-6 rounded shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-250 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="mb-4">
                  {getIcon(subcat.icon)}
                </div>
                <h3 className="font-bold text-sm text-gray-900 font-heading uppercase leading-tight mb-2">
                  {subcat.name}
                </h3>
                <p className="text-[11px] text-gray-500 leading-normal">
                  {subcat.desc}
                </p>
              </div>

              <div className="border-t border-gray-100 pt-4 mt-4 flex items-center justify-between text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                <span>{subcat.count} listings</span>
                <span className="text-[#F01B1D] font-black group-hover:translate-x-1 transition-transform">
                  Shop &gt;
                </span>
              </div>
            </div>
          ))}
        </div>

      </main>

    </div>
  )
}

export default CategoryPage
