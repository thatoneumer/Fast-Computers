const gpu = "/assets/gpu-CMRpsw1G.jpg";
const mobo = "/assets/mobo-CRNaPkF3.jpg";
const keyboardImg = "/assets/keyboard-BL6ZwiXw.jpg";
const monitor = "/assets/monitor-DdWGgIQI.jpg";
const headset = "/assets/headset-Dj3MB19u.jpg";
const mouse = "/assets/mouse-BpeLMuJu.jpg";
const laptop = "/assets/laptop-65uVUA_c.jpg";
const products = [
  // Original products
  { id: "1", name: "MSI GeForce RTX 4060 Ventus 2X 8GB", brand: "MSI", cat: "Graphics Cards", price: 159999, old: 169999, rating: 32, inStock: true, img: gpu },
  { id: "2", name: "ASUS TUF B550-PLUS WIFI II", brand: "ASUS", cat: "Motherboards", price: 49999, old: 54999, rating: 18, inStock: true, img: mobo },
  { id: "3", name: "AMD Ryzen 5 5600X Processor", brand: "AMD", cat: "Processors", price: 38999, old: 42999, rating: 45, inStock: true, img: "https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=600&q=80" },
  { id: "4", name: "Corsair Vengeance RGB 16GB 3200MHz", brand: "Corsair", cat: "RAM", price: 18999, old: 21999, rating: 22, inStock: true, img: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80" },
  { id: "5", name: "Samsung 980 Pro 1TB NVMe SSD", brand: "Samsung", cat: "SSDs", price: 24999, old: 27999, rating: 61, inStock: true, img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80" },
  { id: "6", name: "Logitech G502 Hero Gaming Mouse", brand: "Logitech", cat: "Mice", price: 13999, old: 15999, rating: 112, inStock: true, img: mouse },
  { id: "7", name: "HyperX Cloud II Gaming Headset", brand: "HyperX", cat: "Headsets", price: 15999, old: 17999, rating: 88, inStock: true, img: headset },
  { id: "8", name: "Redragon K552 Mechanical Keyboard", brand: "Redragon", cat: "Keyboards", price: 8599, old: 9999, rating: 54, inStock: true, img: keyboardImg },
  { id: "9", name: "Acer Nitro VG240Y 165Hz Monitor", brand: "Acer", cat: "Monitors", price: 39999, old: 44999, rating: 39, inStock: true, img: monitor },
  { id: "10", name: "Corsair CV650 650W Power Supply", brand: "Corsair", cat: "PSUs", price: 16999, old: 19999, rating: 26, inStock: true, img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80" },
  { id: "11", name: "NZXT H510 Mid-Tower Case", brand: "NZXT", cat: "Cases", price: 22999, old: 25999, rating: 41, inStock: true, img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=600&q=80" },
  { id: "12", name: "Cooler Master Hyper 212 Cooler", brand: "Cooler Master", cat: "Coolers", price: 6999, old: 7999, rating: 73, inStock: true, img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80" },
  { id: "13", name: "Intel Core i5-12400F Processor", brand: "Intel", cat: "Processors", price: 32999, old: 35999, rating: 41, inStock: true, img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" },
  { id: "14", name: "Zotac RTX 3060 Twin Edge 12GB", brand: "Zotac", cat: "Graphics Cards", price: 129999, old: 139999, rating: 29, inStock: true, img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80" },
  { id: "15", name: "Kingston NV2 1TB M.2 NVMe SSD", brand: "Kingston", cat: "SSDs", price: 14999, old: 16999, rating: 31, inStock: true, img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80" },
  { id: "16", name: "DeepCool PM750D 750W 80+ Gold PSU", brand: "DeepCool", cat: "PSUs", price: 19999, old: 22999, rating: 12, inStock: true, img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80" },
  { id: "17", name: "Razer BlackWidow V4 Pro Mechanical", brand: "Razer", cat: "Keyboards", price: 28999, old: 32999, rating: 48, inStock: true, img: keyboardImg },
  { id: "18", name: 'LG UltraGear 34" QHD 165Hz Curved', brand: "LG", cat: "Monitors", price: 189e3, old: 21e4, rating: 56, inStock: true, img: monitor },
  { id: "19", name: "HyperX Cloud III Wireless Headset", brand: "HyperX", cat: "Headsets", price: 22500, old: 25e3, rating: 67, inStock: true, img: headset },
  { id: "20", name: "Logitech G Pro X Superlight 2", brand: "Logitech", cat: "Mice", price: 34999, old: 38999, rating: 89, inStock: true, img: mouse },
  { id: "21", name: "ASUS ROG Strix G16 RTX 4070", brand: "ASUS", cat: "Laptops", price: 499e3, old: 549e3, rating: 34, inStock: true, img: laptop },
  { id: "22", name: "NVIDIA RTX 4080 Super Founders", brand: "NVIDIA", cat: "Graphics Cards", price: 349999, old: 379999, rating: 28, inStock: true, img: gpu },
  // Supplementary PC Builder Parts (CPUs)
  { id: "pcb_cpu_1", name: "AMD Ryzen 5 5600G with Radeon Graphics", brand: "AMD", cat: "Processors", price: 28999, old: 32999, rating: 42, inStock: true, img: "https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=600&q=80" },
  { id: "pcb_cpu_2", name: "AMD Ryzen 5 7600X Processor", brand: "AMD", cat: "Processors", price: 58999, old: 64999, rating: 47, inStock: true, img: "https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=600&q=80" },
  { id: "pcb_cpu_3", name: "AMD Ryzen 7 7800X3D Gaming Processor", brand: "AMD", cat: "Processors", price: 115e3, old: 125e3, rating: 99, inStock: true, img: "https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=600&q=80" },
  { id: "pcb_cpu_4", name: "Intel Core i7-14700K 20-Core Processor", brand: "Intel", cat: "Processors", price: 125e3, old: 135e3, rating: 78, inStock: true, img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" },
  { id: "pcb_cpu_5", name: "Intel Core i9-14900K 24-Core Processor", brand: "Intel", cat: "Processors", price: 175e3, old: 189999, rating: 92, inStock: true, img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" },
  // Supplementary Motherboards
  { id: "pcb_mobo_1", name: "MSI B550M PRO-VDH WIFI", brand: "MSI", cat: "Motherboards", price: 32999, old: 35999, rating: 44, inStock: true, img: mobo },
  { id: "pcb_mobo_2", name: "MSI MAG B650 TOMAHAWK WIFI AM5", brand: "MSI", cat: "Motherboards", price: 65e3, old: 69999, rating: 81, inStock: true, img: mobo },
  { id: "pcb_mobo_3", name: "ASUS Prime Z790-P WIFI Intel", brand: "ASUS", cat: "Motherboards", price: 72e3, old: 78e3, rating: 39, inStock: true, img: mobo },
  { id: "pcb_mobo_4", name: "ASUS ROG STRIX Z790-E GAMING WIFI", brand: "ASUS", cat: "Motherboards", price: 125e3, old: 135e3, rating: 95, inStock: true, img: mobo },
  // Supplementary Graphics Cards (GPUs)
  { id: "pcb_gpu_1", name: "MSI Radeon RX 6600 Armor 8GB", brand: "MSI", cat: "Graphics Cards", price: 75e3, old: 82e3, rating: 36, inStock: true, img: gpu },
  { id: "pcb_gpu_2", name: "ASUS Dual GeForce RTX 4070 SUPER 12GB", brand: "ASUS", cat: "Graphics Cards", price: 225e3, old: 239999, rating: 88, inStock: true, img: gpu },
  { id: "pcb_gpu_3", name: "MSI GeForce RTX 4070 Ti SUPER 16GB Gaming X Slim", brand: "MSI", cat: "Graphics Cards", price: 295e3, old: 315e3, rating: 91, inStock: true, img: gpu },
  { id: "pcb_gpu_4", name: "ASUS ROG Strix GeForce RTX 4090 OC Edition 24GB", brand: "ASUS", cat: "Graphics Cards", price: 649999, old: 699999, rating: 124, inStock: true, img: gpu },
  // Supplementary RAM
  { id: "pcb_ram_1", name: "Kingston FURY Beast RGB 16GB (2x8GB) DDR4 3200MHz", brand: "Kingston", cat: "RAM", price: 13500, old: 15500, rating: 51, inStock: true, img: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80" },
  { id: "pcb_ram_2", name: "Corsair Vengeance RGB 32GB (2x16GB) DDR5 6000MHz", brand: "Corsair", cat: "RAM", price: 34999, old: 38999, rating: 78, inStock: true, img: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80" },
  { id: "pcb_ram_3", name: "G.Skill Trident Z5 RGB 32GB (2x16GB) DDR5 6400MHz", brand: "G.Skill", cat: "RAM", price: 42e3, old: 46e3, rating: 85, inStock: true, img: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80" },
  // Supplementary SSDs (Storage)
  { id: "pcb_ssd_1", name: "Kingston NV2 500GB PCIe 4.0 NVMe M.2 SSD", brand: "Kingston", cat: "SSDs", price: 9500, old: 11e3, rating: 28, inStock: true, img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80" },
  { id: "pcb_ssd_2", name: "Crucial T500 2TB PCIe Gen4 NVMe M.2 SSD with Heatsink", brand: "Crucial", cat: "SSDs", price: 48e3, old: 52e3, rating: 69, inStock: true, img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80" },
  // Supplementary CPU Coolers
  { id: "pcb_cooler_1", name: "Thermalright Peerless Assassin 120 SE Air Cooler", brand: "Thermalright", cat: "Coolers", price: 12500, old: 14500, rating: 114, inStock: true, img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80" },
  { id: "pcb_cooler_2", name: "DeepCool LS720 360mm AIO Liquid CPU Cooler", brand: "DeepCool", cat: "Coolers", price: 28e3, old: 31e3, rating: 46, inStock: true, img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80" },
  { id: "pcb_cooler_3", name: "NZXT Kraken 360 RGB LCD 360mm Liquid Cooler", brand: "NZXT", cat: "Coolers", price: 58e3, old: 62e3, rating: 89, inStock: true, img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80" },
  // Supplementary PSUs
  { id: "pcb_psu_1", name: "MSI MAG A650BN 650W 80+ Bronze Certified PSU", brand: "MSI", cat: "PSUs", price: 14500, old: 16500, rating: 33, inStock: true, img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80" },
  { id: "pcb_psu_2", name: "Corsair RM750e 750W 80+ Gold Fully Modular PSU", brand: "Corsair", cat: "PSUs", price: 28500, old: 32e3, rating: 77, inStock: true, img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80" },
  { id: "pcb_psu_3", name: "Corsair RM850x 850W 80+ Gold Fully Modular PSU", brand: "Corsair", cat: "PSUs", price: 36e3, old: 39999, rating: 81, inStock: true, img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80" },
  { id: "pcb_psu_4", name: "Seasonic FOCUS GX-1000 1000W 80+ Gold Modular PSU", brand: "Seasonic", cat: "PSUs", price: 52e3, old: 56999, rating: 54, inStock: true, img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80" },
  // Supplementary PC Cases
  { id: "pcb_case_1", name: "Corsair 4000D Airflow Tempered Glass Mid-Tower", brand: "Corsair", cat: "Cases", price: 24500, old: 27999, rating: 65, inStock: true, img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=600&q=80" },
  { id: "pcb_case_2", name: "Lian Li PC-O11 Dynamic EVO Mid-Tower Case", brand: "Lian Li", cat: "Cases", price: 48e3, old: 52e3, rating: 122, inStock: true, img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=600&q=80" },
  { id: "pcb_case_3", name: "NZXT H9 Flow Dual-Chamber Mid-Tower Case", brand: "NZXT", cat: "Cases", price: 44e3, old: 48999, rating: 88, inStock: true, img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=600&q=80" },
  // Case Fans
  { id: "pcb_fan_1", name: "Arctic P12 PWM PST 120mm Pressure-Optimized Fan", brand: "Arctic", cat: "Fans", price: 2500, old: 3e3, rating: 191, inStock: true, img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=600&q=80" },
  { id: "pcb_fan_2", name: "Corsair LL120 RGB 120mm Triple Pack with Node PRO", brand: "Corsair", cat: "Fans", price: 24e3, old: 27500, rating: 59, inStock: true, img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=600&q=80" },
  { id: "pcb_fan_3", name: "Lian Li UNI Fan SL-INF 120 RGB Triple Pack with Controller", brand: "Lian Li", cat: "Fans", price: 29500, old: 33e3, rating: 97, inStock: true, img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=600&q=80" }
];
[...new Set(products.map((p) => p.cat))].sort();
[...new Set(products.map((p) => p.brand))].sort();
Math.min(...products.map((p) => p.price));
Math.max(...products.map((p) => p.price));
const sections = [
  { id: "build", label: "Custom Build", keywords: ["custom", "build", "pc", "rig", "configurator", "gaming pc"] },
  { id: "shop", label: "Shop", keywords: ["shop", "products", "catalog", "store"] },
  { id: "categories", label: "Categories", keywords: ["category", "categories", "browse"] }
];
export {
  mouse as a,
  monitor as b,
  gpu as g,
  headset as h,
  keyboardImg as k,
  laptop as l,
  mobo as m,
  products as p,
  sections as s
};
