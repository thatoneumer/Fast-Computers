// Mock product database matching the mockup image for Fast Computers

export const products = [
  {
    id: 'msi-rtx-4060',
    name: 'MSI GeForce RTX 4060 Ventus 2X 8GB',
    price: 159999,
    originalPrice: 169999,
    rating: 4.8,
    reviewsCount: 32,
    category: 'PC Components',
    subcategory: 'Graphics Cards',
    brand: 'MSI',
    inStock: true,
    isFeatured: true,
    isBestSeller: false,
    images: [
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80'
    ],
    specs: [
      '8GB GDDR6 Memory',
      'Boost Clock 2460 MHz',
      '128-bit Memory Interface',
      'PCI Express 4.0 Interface',
      'Dual Fan Thermal Design',
      'Ray Tracing & DLSS 3 Support'
    ],
    description: 'The MSI GeForce RTX 4060 Ventus 2X 8GB delivers powerful performance for gamers and creators. Built with the NVIDIA Ada Lovelace architecture, it features advanced thermal design with dual fans to keep performance high and noise low. Supports ultimate ray tracing and AI-accelerated DLSS 3 gaming.'
  },
  {
    id: 'asus-tuf-b550',
    name: 'ASUS TUF B550-PLUS WIFI II',
    price: 49999,
    originalPrice: 54999,
    rating: 4.7,
    reviewsCount: 18,
    category: 'PC Components',
    subcategory: 'Motherboards',
    brand: 'ASUS',
    inStock: true,
    isFeatured: true,
    isBestSeller: false,
    images: [
      'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80'
    ],
    specs: [
      'AMD AM4 Socket',
      'PCIe 4.0 Support',
      'Dual M.2 Slots',
      '10 DrMOS Power Stages',
      'Onboard WiFi 6 & 2.5 Gb Ethernet',
      'AI Noise-Canceling Microphone Support'
    ],
    description: 'ASUS TUF Gaming B550-Plus WiFi II distills essential elements of the latest AMD platform and combines them with game-ready features and proven durability. Engineered with military-grade components, an upgraded power solution, and a comprehensive set of cooling options, this motherboard delivers rock-solid performance.'
  },
  {
    id: 'amd-ryzen-5600x',
    name: 'AMD Ryzen 5 5600X Processor',
    price: 38999,
    originalPrice: 42999,
    rating: 4.9,
    reviewsCount: 45,
    category: 'PC Components',
    subcategory: 'Processors',
    brand: 'AMD',
    inStock: true,
    isFeatured: true,
    isBestSeller: false,
    images: [
      'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
    ],
    specs: [
      '6 Cores & 12 Threads',
      '3.7 GHz Base Clock (4.6 GHz Max Boost)',
      'Socket AM4 Compatibility',
      '32MB L3 Cache',
      '65W TDP',
      'Wraith Stealth Cooler Included'
    ],
    description: 'The AMD Ryzen 5 5600X CPU offers elite performance in gaming, streaming, and content creation. With 6 cores and 12 threads, it can power the most demanding games and multi-threaded tasks with ease. Built on Zen 3 architecture for maximum IPC gains and power efficiency.'
  },
  {
    id: 'corsair-vengeance-16',
    name: 'Corsair Vengeance RGB 16GB (2x8) 3200MHz',
    price: 18999,
    originalPrice: 21999,
    rating: 4.6,
    reviewsCount: 22,
    category: 'PC Components',
    subcategory: 'RAM',
    brand: 'Corsair',
    inStock: true,
    isFeatured: true,
    isBestSeller: false,
    images: [
      'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80'
    ],
    specs: [
      '16GB Kit (2 x 8GB Modules)',
      '3200 MHz Speed',
      'DDR4 Form Factor',
      'CL16 Latency',
      'Dynamic Multi-Zone RGB Lighting',
      'Intel XMP 2.0 Support'
    ],
    description: 'Corsair Vengeance RGB PRO Series DDR4 overclocked memory lights up your PC with mesmerizing dynamic multi-zone RGB lighting, while delivering the best in DDR4 performance. Designed for high compatibility with both AMD and Intel DDR4 motherboards.'
  },
  {
    id: 'samsung-980-1tb',
    name: 'Samsung 980 Pro 1TB NVMe SSD',
    price: 24999,
    originalPrice: 27999,
    rating: 4.9,
    reviewsCount: 61,
    category: 'PC Components',
    subcategory: 'SSDs',
    brand: 'Samsung',
    inStock: true,
    isFeatured: true,
    isBestSeller: false,
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80'
    ],
    specs: [
      '1TB Capacity',
      'PCIe Gen 4.0 x4 Interface',
      'Up to 7,000 MB/s Read Speed',
      'Up to 5,000 MB/s Write Speed',
      'M.2 (2280) Form Factor',
      'Samsung V-NAND Technology'
    ],
    description: 'Unleash the power of the Samsung PCIe 4.0 NVMe SSD 980 PRO for your next-level computing. Leveraging the PCIe 4.0 interface, the 980 PRO delivers double the data transfer rate of PCIe 3.0 while being backward compatible for PCIe 3.0 for added versatility.'
  },
  // Best Sellers
  {
    id: 'logitech-g502',
    name: 'Logitech G502 Hero Gaming Mouse',
    price: 13999,
    originalPrice: 15999,
    rating: 4.8,
    reviewsCount: 112,
    category: 'Peripherals',
    subcategory: 'Mice',
    brand: 'Logitech',
    inStock: true,
    isFeatured: false,
    isBestSeller: true,
    images: [
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80'
    ],
    specs: [
      'HERO 25K Sensor',
      '11 Programmable Buttons',
      'Adjustable Weights (5x 3.6g)',
      'LIGHTSYNC RGB Lighting',
      'Mechanical Switch Button Tensioning',
      'Dual-mode Hyper-Fast Scroll Wheel'
    ],
    description: 'G502 HERO features an advanced optical sensor for maximum tracking accuracy, customizable RGB lighting, custom game profiles, from 200 to 25,600 DPI, and repositionable weights.'
  },
  {
    id: 'hyperx-cloud-2',
    name: 'HyperX Cloud II Gaming Headset',
    price: 15999,
    originalPrice: 17999,
    rating: 4.7,
    reviewsCount: 88,
    category: 'Peripherals',
    subcategory: 'Headsets',
    brand: 'HyperX',
    inStock: true,
    isFeatured: false,
    isBestSeller: true,
    images: [
      'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80'
    ],
    specs: [
      'Virtual 7.1 Surround Sound',
      '53mm Drivers',
      'Detachable Noise-Cancelling Mic',
      'Durable Aluminum Frame',
      'Signature Memory Foam Ear Cushions',
      'Multi-platform Compatibility'
    ],
    description: 'HyperX Cloud II was built to be an ultra-comfortable gaming headset with great sound. We put a lot of thought into the details of our HyperX signature memory foam, the premium leatherette, clamping force, and weight distribution.'
  },
  {
    id: 'redragon-k552',
    name: 'Redragon K552 Mechanical Keyboard',
    price: 8599,
    originalPrice: 9999,
    rating: 4.5,
    reviewsCount: 54,
    category: 'Peripherals',
    subcategory: 'Keyboards',
    brand: 'Redragon',
    inStock: true,
    isFeatured: false,
    isBestSeller: true,
    images: [
      'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?auto=format&fit=crop&w=600&q=80'
    ],
    specs: [
      'Tenkeyless (TKL) 87 Keys Layout',
      'Outemu Red Linear Switches',
      'Custom RGB Backlighting',
      'Double-shot Injection Keycaps',
      'Metal and ABS Construction',
      'Anti-ghosting N-key Rollover'
    ],
    description: 'The Redragon K552 KUMARA Red LED Backlit Version isn\'t your average mechanical gaming keyboard. Not only is it over-engineered and built to take a beating, it has great ergonomics and a space saving design.'
  },
  {
    id: 'acer-nitro-24',
    name: 'Acer Nitro VG240Y 23.8" 165Hz Monitor',
    price: 39999,
    originalPrice: 44999,
    rating: 4.6,
    reviewsCount: 39,
    category: 'Monitors',
    subcategory: 'Monitors',
    brand: 'Acer',
    inStock: true,
    isFeatured: false,
    isBestSeller: true,
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80'
    ],
    specs: [
      '23.8-inch Full HD (1920x1080) IPS Display',
      '165Hz Refresh Rate',
      '0.5ms Response Time (Min)',
      'AMD FreeSync Premium Technology',
      'HDR10 Support & 99% sRGB',
      'ZeroFrame Design'
    ],
    description: 'In competitive gaming, every frame matters. Introducing Acer\'s VG240Y gaming monitor - the Full HD resolution monitor that can keep up with your game play. Through AMD FreeSync Premium technology, the game\'s frame rate is determined by your graphics card.'
  },
  {
    id: 'corsair-cv650',
    name: 'Corsair CV650 650W Power Supply',
    price: 16999,
    originalPrice: 19999,
    rating: 4.6,
    reviewsCount: 26,
    category: 'PC Components',
    subcategory: 'Power Supplies',
    brand: 'Corsair',
    inStock: true,
    isFeatured: false,
    isBestSeller: true,
    images: [
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80'
    ],
    specs: [
      '650 Watts Output Power',
      '80 PLUS Bronze Certified',
      '120mm Thermally Controlled Cooling Fan',
      'Compact 125mm Shell Depth',
      'Black Sleeved Cables & Black Powder-Coated Casing',
      '3-Year Warranty'
    ],
    description: 'Corsair CV series power supplies are ideal for powering your new home or office PC, with 80 PLUS Bronze efficiency guaranteed to continuously deliver full wattage to your system.'
  },
  // Shop Page Extra Products
  {
    id: 'intel-i5-12400f',
    name: 'Intel Core i5 12400F Processor',
    price: 32999,
    originalPrice: 35999,
    rating: 4.7,
    reviewsCount: 41,
    category: 'PC Components',
    subcategory: 'Processors',
    brand: 'Intel',
    inStock: true,
    isFeatured: false,
    isBestSeller: false,
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
    ],
    specs: [
      '6 Cores & 12 Threads',
      '2.5 GHz Base Clock (4.4 GHz Max Turbo)',
      'Intel LGA1700 Socket',
      '18MB Cache',
      '65W Base Power',
      'Intel Stock Cooler Included'
    ],
    description: '12th Gen Intel Core i5-12400F desktop processor, without processor graphics. Featuring PCIe 5.0 & 4.0 support, DDR5 and DDR4 support, 12th Gen Intel Core desktop processors are optimized for gamers and productivity.'
  },
  {
    id: 'zotac-rtx-3060',
    name: 'Zotac RTX 3060 Twin Edge 12GB',
    price: 129999,
    originalPrice: 139999,
    rating: 4.7,
    reviewsCount: 29,
    category: 'PC Components',
    subcategory: 'Graphics Cards',
    brand: 'Zotac',
    inStock: true,
    isFeatured: false,
    isBestSeller: false,
    images: [
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80'
    ],
    specs: [
      '12GB GDDR6 Memory',
      'IceStorm 2.0 Advanced Cooling',
      '192-bit Memory Bus',
      'PCIe 4.0 Compatibility',
      'Active Fan Control with FREEZE Fan Stop',
      'Metal Backplate'
    ],
    description: 'Get Amplified with the ZOTAC GAMING GeForce RTX 3060 Series based on the NVIDIA Ampere architecture. Built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and high-speed GDDR6 memory, the ZOTAC GAMING GeForce RTX 3060 Twin Edge gives rise to amplified gaming.'
  },
  {
    id: 'corsair-rgb-16-shop',
    name: 'Corsair 16GB (2x8) RGB 3200MHz RAM',
    price: 16999,
    originalPrice: 18999,
    rating: 4.6,
    reviewsCount: 15,
    category: 'PC Components',
    subcategory: 'RAM',
    brand: 'Corsair',
    inStock: true,
    isFeatured: false,
    isBestSeller: false,
    images: [
      'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80'
    ],
    specs: [
      '16GB (2 x 8GB) Capacity',
      '3200MHz DDR4 Speeds',
      'Dynamic RGB Lights',
      'Anodized Aluminum Heat Spreader',
      'CL16 Latency'
    ],
    description: 'Corsair Vengeance RGB PRO DDR4 memory modules provide high performance and excellent aesthetics, featuring a custom performance PCB and carefully screened ICs.'
  },
  {
    id: 'msi-b660m',
    name: 'MSI B660M Mortar DDR4 Wifi',
    price: 41999,
    originalPrice: 45999,
    rating: 4.8,
    reviewsCount: 19,
    category: 'PC Components',
    subcategory: 'Motherboards',
    brand: 'MSI',
    inStock: true,
    isFeatured: false,
    isBestSeller: false,
    images: [
      'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&w=600&q=80'
    ],
    specs: [
      'LGA 1700 Socket for Intel Core 12th/13th Gen',
      'Supports DDR4 Memory up to 4800+(OC) MHz',
      'Premium Thermal Solution (Extended Heatsink)',
      'Lightning M.2 Gen4 x4',
      '2.5G LAN and Intel Wi-Fi 6 Solution'
    ],
    description: 'The MAG series fights alongside gamers in pursuit of honor. MAG B660M MORTAR WIFI DDR4 is a micro-ATX form factor motherboard featuring premium materials and advanced cooling features.'
  },
  {
    id: 'kingston-nv2',
    name: 'Kingston NV2 1TB M.2 NVMe SSD',
    price: 14999,
    originalPrice: 16999,
    rating: 4.7,
    reviewsCount: 31,
    category: 'PC Components',
    subcategory: 'SSDs',
    brand: 'Kingston',
    inStock: true,
    isFeatured: false,
    isBestSeller: false,
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80'
    ],
    specs: [
      '1TB Storage Capacity',
      'NVMe PCIe Gen 4.0 x4 Power',
      'Up to 3,500 MB/s Read, 2,100 MB/s Write',
      'Single-sided M.2 2280 Design',
      'Ideal for Thin Laptops & Small PCs'
    ],
    description: 'Kingston\'s NV2 PCIe 4.0 NVMe SSD is a substantial next-gen storage solution powered by a Gen 4x4 NVMe controller. NV2 delivers read/write speeds up to 3500/2100MB/s with lower power requirements.'
  },
  {
    id: 'deepcool-pm750d',
    name: 'DeepCool PM750D 750W 80+ Gold PSU',
    price: 19999,
    originalPrice: 22999,
    rating: 4.5,
    reviewsCount: 12,
    category: 'PC Components',
    subcategory: 'Power Supplies',
    brand: 'DeepCool',
    inStock: false,
    isFeatured: false,
    isBestSeller: false,
    images: [
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80'
    ],
    specs: [
      '750W Continuous Power Output',
      '80 PLUS Gold Certified Efficiency',
      'Active PFC + Full Bridge LLC Resonant Topology',
      '120mm Silent Fan',
      'Flat Black Cables',
      'OPP/OVP/SCP/OTP/OCP Protections'
    ],
    description: 'DeepCool PM750D series non-modular power supplies are certified 80 PLUS Gold for high-efficiency power delivery with great performance and solid reliability.'
  }
];

export const sidebarCategories = [
  { name: 'Gaming PCs', desc: 'Prebuilt, Custom, Mini PCs', icon: 'monitor' },
  { name: 'Laptops', desc: 'Gaming, Office, Student, Business', icon: 'laptop' },
  { name: 'PC Components', desc: 'CPU, GPU, Motherboard, RAM, SSD, HDD, PSU, Cases & More', icon: 'cpu' },
  { name: 'Monitors', desc: 'Gaming, Office, Ultrawide, 4K', icon: 'tv' },
  { name: 'Keyboards', desc: 'Mechanical, Membrane, Wireless', icon: 'keyboard' },
  { name: 'Mice', desc: 'Gaming, Wireless, Office', icon: 'mouse' },
  { name: 'Headsets', desc: 'Gaming, Wireless, Noise Cancelling', icon: 'headphones' },
  { name: 'Speakers', desc: 'Premium Sound Systems', icon: 'speaker' },
  { name: 'Microphones', desc: 'Pro Casting & Gaming Mics', icon: 'mic' },
  { name: 'Webcams', desc: 'Full HD & 4K Streaming Webcams', icon: 'camera' },
  { name: 'Mouse Pads', desc: 'RGB & Desk Mats', icon: 'square' },
  { name: 'Gaming Chairs', desc: 'Ergonomic Racing Chairs', icon: 'award' },
  { name: 'Desks', desc: 'Electric Standing & Gaming Desks', icon: 'layout' },
  { name: 'Networking', desc: 'Routers, Switches, Adapters', icon: 'wifi' },
  { name: 'Storage', desc: 'HDD, SSD, USB, Memory Cards', icon: 'database' },
  { name: 'Accessories', desc: 'Cables, Hubs, Stands & More', icon: 'hard-drive' },
  { name: 'Printers', desc: 'Laser, Inkjet, All-in-one', icon: 'printer' },
  { name: 'UPS', desc: 'Battery Backup & Surge Protectors', icon: 'battery-charging' }
];

export const pcComponentSubcategories = [
  { name: 'Processors (CPUs)', count: 24, icon: 'cpu', desc: 'Intel Core & AMD Ryzen processors.' },
  { name: 'Graphics Cards (GPUs)', count: 18, icon: 'hard-drive', desc: 'NVIDIA GeForce RTX & AMD Radeon cards.' },
  { name: 'Motherboards', count: 15, icon: 'layers', desc: 'Intel & AMD sockets, ATX, mATX, ITX.' },
  { name: 'RAM', count: 21, icon: 'columns', desc: 'DDR4 & DDR5 gaming memory kits.' },
  { name: 'SSDs', count: 16, icon: 'database', desc: 'Superfast NVMe M.2 & SATA solid state drives.' },
  { name: 'HDDs', count: 8, icon: 'disc', desc: 'High capacity mechanical hard disk drives.' },
  { name: 'Power Supplies', count: 12, icon: 'zap', desc: '80+ Bronze, Gold, Platinum certified PSUs.' },
  { name: 'PC Cases', count: 14, icon: 'box', desc: 'Mid towers, full towers, ITX cases with tempered glass.' },
  { name: 'CPU Coolers', count: 10, icon: 'wind', desc: 'AIO Liquid coolers & high performance air coolers.' },
  { name: 'Thermal Paste', count: 6, icon: 'droplet', desc: 'High thermal conductivity compounds.' },
  { name: 'RGB Fans', count: 9, icon: 'sun', desc: '120mm & 140mm ARGB case fans.' },
  { name: 'Accessories', count: 25, icon: 'plus-square', desc: 'Sleeved cables, GPU brackets, LED strips.' }
];

export const customerReviews = [
  {
    name: 'Ali R.',
    rating: 5,
    text: 'Excellent experience! Original products and fast delivery. Highly recommended.'
  },
  {
    name: 'Hamza K.',
    rating: 5,
    text: 'Best prices and amazing customer support. Will shop again!'
  },
  {
    name: 'Usman M.',
    rating: 5,
    text: 'My gaming setup from Fast Computers is absolutely perfect!'
  }
];

export const topBrands = [
  { name: 'ASUS', logoText: 'ASUS' },
  { name: 'MSI', logoText: 'msi' },
  { name: 'GIGABYTE', logoText: 'GIGABYTE' },
  { name: 'CORSAIR', logoText: 'CORSAIR' },
  { name: 'Logitech', logoText: 'logitech' },
  { name: 'HYPERX', logoText: 'HYPERX' },
  { name: 'Razer', logoText: 'RAZER' },
  { name: 'AMD', logoText: 'AMD' },
  { name: 'Intel', logoText: 'intel' },
  { name: 'NVIDIA', logoText: 'NVIDIA' }
];
