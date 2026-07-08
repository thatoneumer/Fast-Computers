import { writeFileSync, readFileSync } from 'fs';
import { MongoClient } from 'mongodb';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Manually read .env file
const envContent = readFileSync(join(__dirname, '.env'), 'utf-8');
envContent.split('\n').forEach(line => {
  const [key, ...val] = line.split('=');
  if (key && val.length) process.env[key.trim()] = val.join('=').trim();
});

// Helper: random rating between 4.0 - 5.0
function getRandomRating() {
  return parseFloat((4 + Math.random()).toFixed(1));
}

// ─── Unsplash image pools per category (3 per category for variety) ───────────
const categoryImages = {
  "Graphics Cards": [
    "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1649412947350-17c01b3b30fc?auto=format&fit=crop&w=600&q=80",
  ],
  "Motherboards": [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1555617981-dac3772e487c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
  ],
  "Processors": [
    "https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=600&q=80",
  ],
  "RAM": [
    "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1607400201515-c2c41c07d307?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80",
  ],
  "SSDs": [
    "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=600&q=80",
  ],
  "Mice": [
    "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1615750168588-5c1d99f898f6?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
  ],
  "Headsets": [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
  ],
  "Keyboards": [
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1541140134513-85a161dc4a00?auto=format&fit=crop&w=600&q=80",
  ],
  "Monitors": [
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1593640408182-31c228b58f76?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?auto=format&fit=crop&w=600&q=80",
  ],
  "PSUs": [
    "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80",
  ],
  "Cases": [
    "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1562976526-9900f69a2f19?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80",
  ],
  "Coolers": [
    "https://images.unsplash.com/photo-1601445638532-3e6e5b893e1c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1601445638532-3e6e5b893e1c?auto=format&fit=crop&w=600&q=80",
  ],
  "Laptops": [
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=600&q=80",
  ],
};

// ─── Description Generator ────────────────────────────────────────────────────
function generateDescription(item, cat) {
  const specMap = {};
  item.specs.forEach(([label, value]) => {
    specMap[label.toLowerCase()] = value;
  });
  const { name, brand } = item;

  switch (cat) {
    case "Graphics Cards":
      return `The ${name} is a high-performance graphics card built for extreme gaming and content creation. Featuring ${specMap['vram'] || 'generous GDDR6X'} VRAM and advanced GPU architecture, it delivers exceptional performance in 4K gaming, real-time ray tracing, and AI-accelerated workflows. ${brand}'s advanced thermal design keeps temperatures in check even during the most intense sessions.`;
    case "Motherboards":
      return `The ${name} is a premium ${specMap['socket'] || ''} motherboard engineered for builders who demand the best. With ${specMap['chipset'] || 'flagship chipset'} and support for high-speed ${specMap['memory'] || 'DDR5'} memory, it delivers rock-solid stability and serious overclocking headroom. ${brand}'s build quality ensures long-term reliability for both gaming and professional workstations.`;
    case "Processors":
      return `The ${name} is a powerhouse desktop processor delivering ${specMap['total cores'] || specMap['cores / threads'] || 'multi-core'} performance for gaming, streaming, and content creation. With a boost clock of ${specMap['max turbo'] || specMap['boost clock'] || 'ultra-high frequency'} and advanced cache architecture, it crushes demanding workloads. A top choice for any high-performance PC build.`;
    case "RAM":
      return `The ${name} is premium ${specMap['memory type'] || 'DDR5'} memory designed for speed and reliability. Running at ${specMap['speed'] || 'high frequencies'} with tight latency timings, it provides snappy system responsiveness for gaming, video editing, and multitasking. ${brand}'s quality assurance ensures long-term stability and compatibility.`;
    case "SSDs":
      return `The ${name} is a blazing-fast NVMe SSD that transforms your storage performance. With sequential read speeds of ${specMap['seq read'] || 'up to 7,400 MB/s'}, games load instantly and applications launch in the blink of an eye. Built with ${brand}'s proven NAND flash technology for exceptional reliability and endurance.`;
    case "Mice":
      return `The ${name} is a precision gaming mouse engineered for competitive play. Featuring a ${specMap['sensor'] || 'high-precision optical'} sensor with ${specMap['resolution'] || 'adjustable'} DPI, it tracks every movement with pixel-perfect accuracy. ${brand}'s ergonomic design ensures comfort during marathon gaming sessions.`;
    case "Headsets":
      return `The ${name} is a premium gaming headset that puts you right in the middle of the action. Featuring ${specMap['driver'] || 'large-diameter'} drivers and ${specMap['audio'] || specMap['sound'] || '3D spatial'} sound, every footstep and explosion comes through crystal clear. The ${specMap['connectivity'] || 'versatile'} connectivity ensures compatibility across all your devices.`;
    case "Keyboards":
      return `The ${name} is a mechanical gaming keyboard built for speed and precision. Powered by ${specMap['switches'] || 'responsive mechanical'} switches and featuring RGB backlighting, it delivers a satisfying and accurate typing experience. ${brand}'s build quality ensures it will withstand tens of millions of keystrokes without missing a beat.`;
    case "Monitors":
      return `The ${name} delivers stunning visuals with its ${specMap['panel'] || 'high-quality IPS'} panel and ${specMap['resolution'] || 'high-resolution'} display. With ${specMap['refresh rate'] || 'a high refresh rate'} for silky-smooth gameplay and ultra-low response times, it's the perfect display for both competitive gaming and creative work.`;
    case "PSUs":
      return `The ${name} is a reliable ${specMap['wattage'] || 'high-wattage'} power supply with ${specMap['efficiency'] || '80 Plus Gold'} certification for maximum efficiency and minimal waste heat. The ${specMap['modular'] || 'modular'} cabling system keeps your build clean and airflow unrestricted. Built to deliver stable power under the most demanding PC configurations.`;
    case "Cases":
      return `The ${name} is a well-crafted PC chassis that balances aesthetics and airflow performance. Offering ample space for high-end components and support for large radiators, it makes building a clean, powerful system effortless. ${brand}'s attention to cable management and build quality makes it a favorite among PC enthusiasts.`;
    case "Coolers":
      return `The ${name} is a high-performance CPU cooler designed to keep your processor running cool and quiet. With excellent thermal performance and near-silent operation, it's ideal for overclocking and sustained workloads. Compatible with all major Intel and AMD sockets for a wide range of build configurations.`;
    case "Laptops":
      return `The ${name} is a powerful gaming laptop that brings desktop-grade performance to your backpack. Equipped with ${specMap['gpu'] || specMap['chip'] || 'a powerful discrete GPU'} and a ${specMap['display'] || 'high-refresh display'}, it handles the latest AAA titles and creative applications without breaking a sweat. ${brand}'s thermal engineering ensures sustained performance under load.`;
    default:
      return `The ${name} by ${brand} offers premium performance and reliability. Engineered for enthusiasts who demand the very best from their PC components.`;
  }
}

// ─── Product Data: 10 products per category, each from a DIFFERENT brand ──────
const productsData = {

  // ── Graphics Cards ── (10 brands: ASUS, MSI, NVIDIA, Zotac, AMD, Gigabyte, Sapphire, PowerColor, XFX, Palit)
  "Graphics Cards": [
    { name: "ASUS ROG Strix GeForce RTX 4090 OC 24GB",          brand: "ASUS",       price: 689000, old: 720000, specs: [["GPU", "RTX 4090"], ["VRAM", "24GB GDDR6X"], ["Boost Clock", "2640 MHz"], ["CUDA Cores", "16384"], ["Interface", "384-bit"], ["Power TDP", "450W"]] },
    { name: "MSI GeForce RTX 4080 Super Gaming X Trio 16GB",    brand: "MSI",        price: 365000, old: 390000, specs: [["GPU", "RTX 4080 Super"], ["VRAM", "16GB GDDR6X"], ["Boost Clock", "2610 MHz"], ["CUDA Cores", "10240"], ["Interface", "256-bit"], ["Fans", "Triple Torx Fan"]] },
    { name: "NVIDIA GeForce RTX 4070 Ti Super Founders Edition", brand: "NVIDIA",     price: 289000, old: 310000, specs: [["GPU", "RTX 4070 Ti Super"], ["VRAM", "16GB GDDR6X"], ["Boost Clock", "2610 MHz"], ["CUDA Cores", "8448"], ["Interface", "256-bit"], ["Power", "16-pin Connector"]] },
    { name: "Zotac Gaming GeForce RTX 4070 Super AMP Airo",     brand: "Zotac",      price: 215000, old: 235000, specs: [["GPU", "RTX 4070 Super"], ["VRAM", "12GB GDDR6X"], ["Boost Clock", "2550 MHz"], ["CUDA Cores", "7168"], ["RGB", "Spectra 2.0"], ["Interface", "192-bit"]] },
    { name: "AMD Radeon RX 7900 XTX Reference Card 24GB",       brand: "AMD",        price: 345000, old: 375000, specs: [["GPU", "Radeon RX 7900 XTX"], ["VRAM", "24GB GDDR6"], ["Compute Units", "96"], ["Interface", "384-bit"], ["Infinity Cache", "96MB"], ["TDP", "355W"]] },
    { name: "Gigabyte Aorus Master GeForce RTX 4060 Ti 16GB",   brand: "Gigabyte",   price: 175000, old: 195000, specs: [["GPU", "RTX 4060 Ti"], ["VRAM", "16GB GDDR6"], ["Boost Clock", "2640 MHz"], ["CUDA Cores", "4352"], ["Interface", "128-bit"], ["Cooling", "Windforce Stack 3x"]] },
    { name: "Sapphire Nitro+ Radeon RX 7800 XT 16GB",           brand: "Sapphire",   price: 185000, old: 205000, specs: [["GPU", "Radeon RX 7800 XT"], ["VRAM", "16GB GDDR6"], ["Compute Units", "60"], ["Interface", "256-bit"], ["Boost Clock", "2430 MHz"], ["RGB", "ARGB Lighting"]] },
    { name: "PowerColor Red Devil Radeon RX 7700 XT 12GB",      brand: "PowerColor", price: 155000, old: 172000, specs: [["GPU", "Radeon RX 7700 XT"], ["VRAM", "12GB GDDR6"], ["Compute Units", "54"], ["Interface", "192-bit"], ["Boost Clock", "2584 MHz"], ["Fans", "Triple Fan"]] },
    { name: "XFX Speedster MERC 319 Radeon RX 7600 XT 16GB",   brand: "XFX",        price: 128000, old: 140000, specs: [["GPU", "Radeon RX 7600 XT"], ["VRAM", "16GB GDDR6"], ["Compute Units", "32"], ["Interface", "128-bit"], ["Boost Clock", "2755 MHz"], ["TDP", "190W"]] },
    { name: "Palit GeForce RTX 3060 Dual OC 12GB",              brand: "Palit",      price:  99000, old: 110000, specs: [["GPU", "RTX 3060"], ["VRAM", "12GB GDDR6"], ["CUDA Cores", "3584"], ["Interface", "192-bit"], ["Boost Clock", "1807 MHz"], ["Fans", "Dual StormX Fan"]] },
  ],

  // ── Motherboards ── (10 brands: ASUS, MSI, Gigabyte, ASRock, NZXT, Biostar, Colorful, ECS, Maxsun, Jginyue)
  "Motherboards": [
    { name: "ASUS ROG Maximus Z790 Hero ATX",              brand: "ASUS",      price: 165000, old: 180000, specs: [["Socket", "LGA 1700"], ["Chipset", "Intel Z790"], ["Form Factor", "ATX"], ["Memory", "DDR5 up to 192GB"], ["M.2 Slots", "5 x M.2"], ["WiFi", "WiFi 7"]] },
    { name: "MSI MEG X670E ACE E-ATX Motherboard",         brand: "MSI",       price: 155000, old: 170000, specs: [["Socket", "AM5"], ["Chipset", "AMD X670E"], ["Form Factor", "E-ATX"], ["Memory", "DDR5 up to 256GB"], ["PCIe", "PCIe 5.0 x16"], ["WiFi", "WiFi 6E"]] },
    { name: "Gigabyte Z790 Aorus Elite AX ATX",            brand: "Gigabyte",  price:  95000, old: 105000, specs: [["Socket", "LGA 1700"], ["Chipset", "Intel Z790"], ["Form Factor", "ATX"], ["M.2 Slots", "4 x M.2"], ["WiFi", "WiFi 6E"], ["LAN", "2.5G Ethernet"]] },
    { name: "ASRock X670E Taichi Carrara ATX",             brand: "ASRock",    price: 115000, old: 128000, specs: [["Socket", "AM5"], ["Chipset", "AMD X670E"], ["Form Factor", "ATX"], ["PCIe", "PCIe 5.0 x16"], ["USB4", "2 x USB4 Ports"], ["WiFi", "WiFi 6E"]] },
    { name: "NZXT N7 Z790 Clean ATX Motherboard",          brand: "NZXT",      price:  75000, old:  82000, specs: [["Socket", "LGA 1700"], ["Chipset", "Intel Z790"], ["Form Factor", "ATX"], ["M.2 Slots", "3 x M.2"], ["WiFi", "WiFi 6E"], ["Design", "Matte Black Cover"]] },
    { name: "Biostar Z790 Valkyrie Elite ATX",             brand: "Biostar",   price:  65000, old:  72000, specs: [["Socket", "LGA 1700"], ["Chipset", "Intel Z790"], ["Form Factor", "ATX"], ["Memory", "DDR5 up to 128GB"], ["Audio", "Realtek ALC4080"], ["VRM", "20+2 Phase"]] },
    { name: "Colorful CVN X670E Gaming Frozen V14",        brand: "Colorful",  price:  68000, old:  75000, specs: [["Socket", "AM5"], ["Chipset", "AMD X670E"], ["Form Factor", "ATX"], ["PCIe", "PCIe 5.0"], ["LAN", "2.5G + 1G Dual LAN"], ["RGB", "ARGB Headers"]] },
    { name: "ECS Z790H6-A3 Gold ATX Motherboard",          brand: "ECS",       price:  49000, old:  55000, specs: [["Socket", "LGA 1700"], ["Chipset", "Intel Z790"], ["Form Factor", "ATX"], ["SATA", "6 x SATA 6Gb/s"], ["M.2 Slots", "2 x M.2"], ["LAN", "2.5G Intel LAN"]] },
    { name: "Maxsun MS-B760ITX WiFi Challenger Mini-ITX",  brand: "Maxsun",    price:  42000, old:  48000, specs: [["Socket", "LGA 1700"], ["Chipset", "Intel B760"], ["Form Factor", "Mini-ITX"], ["Memory", "DDR4 up to 64GB"], ["WiFi", "WiFi 6"], ["Display", "HDMI + DP"]] },
    { name: "Jginyue Z790I Pro WiFi ATX Motherboard",      brand: "Jginyue",   price:  38000, old:  44000, specs: [["Socket", "LGA 1700"], ["Chipset", "Intel Z790"], ["Form Factor", "ATX"], ["Memory", "DDR5 up to 128GB"], ["WiFi", "WiFi 6E"], ["RGB", "Addressable RGB"]] },
  ],

  // ── Processors ── (Intel x5 + AMD x5 — only 2 CPU brands exist, so both are used)
  "Processors": [
    { name: "Intel Core i9-14900K Desktop Processor",   brand: "Intel", price: 165000, old: 175000, specs: [["Socket", "LGA1700"], ["Total Cores", "24 (8P+16E)"], ["Total Threads", "32"], ["Max Turbo", "6.0 GHz"], ["L3 Cache", "36MB"], ["TDP", "125W"]] },
    { name: "Intel Core i7-14700K Desktop Processor",   brand: "Intel", price: 115000, old: 125000, specs: [["Socket", "LGA1700"], ["Total Cores", "20 (8P+12E)"], ["Total Threads", "28"], ["Max Turbo", "5.6 GHz"], ["L3 Cache", "33MB"], ["TDP", "125W"]] },
    { name: "Intel Core i5-14600K Desktop Processor",   brand: "Intel", price:  88000, old:  95000, specs: [["Socket", "LGA1700"], ["Total Cores", "14 (6P+8E)"], ["Total Threads", "20"], ["Max Turbo", "5.3 GHz"], ["L3 Cache", "24MB"], ["TDP", "125W"]] },
    { name: "Intel Core i5-13400F Desktop Processor",   brand: "Intel", price:  54000, old:  59000, specs: [["Socket", "LGA1700"], ["Total Cores", "10 (6P+4E)"], ["Total Threads", "16"], ["Max Turbo", "4.6 GHz"], ["L3 Cache", "20MB"], ["TDP", "65W"]] },
    { name: "Intel Core i3-13100F Desktop Processor",   brand: "Intel", price:  29500, old:  33000, specs: [["Socket", "LGA1700"], ["Total Cores", "4"], ["Total Threads", "8"], ["Max Turbo", "4.5 GHz"], ["L3 Cache", "12MB"], ["TDP", "58W"]] },
    { name: "AMD Ryzen 9 7950X3D Desktop Processor",    brand: "AMD",   price: 175000, old: 189000, specs: [["Socket", "AM5"], ["Cores / Threads", "16 / 32"], ["3D V-Cache", "128MB L3"], ["Boost Clock", "5.7 GHz"], ["Base Clock", "4.2 GHz"], ["TDP", "120W"]] },
    { name: "AMD Ryzen 7 7800X3D Desktop Processor",    brand: "AMD",   price: 128000, old: 139000, specs: [["Socket", "AM5"], ["Cores / Threads", "8 / 16"], ["3D V-Cache", "96MB L3"], ["Boost Clock", "5.0 GHz"], ["Base Clock", "4.2 GHz"], ["TDP", "120W"]] },
    { name: "AMD Ryzen 9 7900X Desktop Processor",      brand: "AMD",   price: 109000, old: 119000, specs: [["Socket", "AM5"], ["Cores / Threads", "12 / 24"], ["Boost Clock", "5.6 GHz"], ["Base Clock", "4.7 GHz"], ["Total Cache", "76MB"], ["TDP", "170W"]] },
    { name: "AMD Ryzen 5 7600X Desktop Processor",      brand: "AMD",   price:  68000, old:  75000, specs: [["Socket", "AM5"], ["Cores / Threads", "6 / 12"], ["Boost Clock", "5.3 GHz"], ["Base Clock", "4.7 GHz"], ["Total Cache", "38MB"], ["TDP", "105W"]] },
    { name: "AMD Ryzen 5 5600X Desktop Processor",      brand: "AMD",   price:  38999, old:  42999, specs: [["Socket", "AM4"], ["Cores / Threads", "6 / 12"], ["Boost Clock", "4.6 GHz"], ["Base Clock", "3.7 GHz"], ["Total Cache", "35MB"], ["TDP", "65W"]] },
  ],

  // ── RAM ── (10 brands: Corsair, Kingston, G.Skill, Team Group, Crucial, Patriot, ADATA, PNY, Thermaltake, Mushkin)
  "RAM": [
    { name: "Corsair Dominator Titanium DDR5 32GB 6000MHz",    brand: "Corsair",     price: 62000, old: 68000, specs: [["Memory Type", "DDR5"], ["Capacity", "32GB (2x16GB)"], ["Speed", "6000 MHz"], ["Latency", "CL30"], ["Voltage", "1.4V"], ["RGB", "Dominator RGB"]] },
    { name: "Kingston FURY Renegade DDR5 32GB 6400MHz",        brand: "Kingston",    price: 39500, old: 44000, specs: [["Memory Type", "DDR5"], ["Capacity", "32GB (2x16GB)"], ["Speed", "6400 MHz"], ["Latency", "CL32"], ["Voltage", "1.4V"], ["XMP", "Intel XMP 3.0"]] },
    { name: "G.Skill Trident Z5 RGB DDR5 32GB 6000MHz",        brand: "G.Skill",     price: 45000, old: 50000, specs: [["Memory Type", "DDR5"], ["Capacity", "32GB (2x16GB)"], ["Speed", "6000 MHz"], ["Latency", "CL36"], ["RGB", "Per-Key RGB"], ["Heatsink", "Aluminum Alloy"]] },
    { name: "Team Group T-Force Delta RGB DDR5 32GB 5600MHz",  brand: "Team Group",  price: 36000, old: 40000, specs: [["Memory Type", "DDR5"], ["Capacity", "32GB (2x16GB)"], ["Speed", "5600 MHz"], ["Latency", "CL36"], ["RGB", "Mirror RGB"], ["Voltage", "1.25V"]] },
    { name: "Crucial Pro DDR5 32GB 5600MHz Kit",               brand: "Crucial",     price: 31000, old: 35000, specs: [["Memory Type", "DDR5"], ["Capacity", "32GB (2x16GB)"], ["Speed", "5600 MHz"], ["Latency", "CL46"], ["Voltage", "1.1V"], ["Profile", "XMP 3.0 / EXPO"]] },
    { name: "Patriot Viper Venom ARGB DDR5 32GB 6000MHz",      brand: "Patriot",     price: 38000, old: 42000, specs: [["Memory Type", "DDR5"], ["Capacity", "32GB (2x16GB)"], ["Speed", "6000 MHz"], ["Latency", "CL36"], ["RGB", "ARGB Lighting"], ["Heatsink", "Dual-Tone"]] },
    { name: "ADATA XPG Lancer RGB DDR5 32GB 6000MHz",          brand: "ADATA",       price: 35000, old: 39000, specs: [["Memory Type", "DDR5"], ["Capacity", "32GB (2x16GB)"], ["Speed", "6000 MHz"], ["Latency", "CL30"], ["RGB", "ARGB Strip"], ["Profile", "XMP 3.0 / EXPO"]] },
    { name: "PNY XLR8 Gaming EPIC-X DDR5 32GB 5600MHz",        brand: "PNY",         price: 32000, old: 36000, specs: [["Memory Type", "DDR5"], ["Capacity", "32GB (2x16GB)"], ["Speed", "5600 MHz"], ["Latency", "CL36"], ["RGB", "Dual Finned RGB"], ["Profile", "XMP 3.0"]] },
    { name: "Thermaltake TOUGHRAM Z-ONE DDR4 16GB 3600MHz",    brand: "Thermaltake", price: 18500, old: 21000, specs: [["Memory Type", "DDR4"], ["Capacity", "16GB (2x8GB)"], ["Speed", "3600 MHz"], ["Latency", "CL18"], ["Lighting", "White LED"], ["Voltage", "1.35V"]] },
    { name: "Mushkin Redline Lumina ARGB DDR4 32GB 3600MHz",   brand: "Mushkin",     price: 24500, old: 27500, specs: [["Memory Type", "DDR4"], ["Capacity", "32GB (2x16GB)"], ["Speed", "3600 MHz"], ["Latency", "CL16"], ["RGB", "ARGB"], ["Voltage", "1.35V"]] },
  ],

  // ── SSDs ── (10 brands: Samsung, Kingston, WD, Seagate, Crucial, SK Hynix, Sabrent, Corsair, ADATA, Lexar)
  "SSDs": [
    { name: "Samsung 990 Pro 2TB NVMe PCIe 4.0 M.2 SSD",       brand: "Samsung",  price: 48900, old: 53900, specs: [["Capacity", "2TB"], ["Interface", "PCIe Gen4 x4, NVMe 2.0"], ["Seq Read", "7,450 MB/s"], ["Seq Write", "6,900 MB/s"], ["TBW", "1,200 TBW"], ["Form Factor", "M.2 2280"]] },
    { name: "Kingston FURY Renegade 2TB NVMe M.2 SSD",          brand: "Kingston", price: 42500, old: 47500, specs: [["Capacity", "2TB"], ["Interface", "PCIe Gen4 x4, NVMe"], ["Seq Read", "7,300 MB/s"], ["Seq Write", "7,000 MB/s"], ["TBW", "2,000 TBW"], ["Heatsink", "Graphene Heatsink"]] },
    { name: "WD Black SN850X 2TB NVMe M.2 SSD",                 brand: "WD",       price: 46000, old: 51000, specs: [["Capacity", "2TB"], ["Interface", "PCIe Gen4 x4, NVMe 1.4"], ["Seq Read", "7,300 MB/s"], ["Seq Write", "6,600 MB/s"], ["Feature", "Game Mode 2.0"], ["Form Factor", "M.2 2280"]] },
    { name: "Seagate FireCuda 530 2TB NVMe M.2 SSD",            brand: "Seagate",  price: 43000, old: 48000, specs: [["Capacity", "2TB"], ["Interface", "PCIe Gen4 x4, NVMe 1.4"], ["Seq Read", "7,300 MB/s"], ["Seq Write", "6,900 MB/s"], ["TBW", "2,500 TBW"], ["Form Factor", "M.2 2280"]] },
    { name: "Crucial T700 2TB Gen5 NVMe M.2 SSD",               brand: "Crucial",  price: 52000, old: 58000, specs: [["Capacity", "2TB"], ["Interface", "PCIe Gen5 x4, NVMe 2.0"], ["Seq Read", "12,400 MB/s"], ["Seq Write", "11,800 MB/s"], ["TBW", "1,200 TBW"], ["Heatsink", "Included"]] },
    { name: "SK Hynix Platinum P41 1TB NVMe M.2 SSD",           brand: "SK Hynix", price: 27500, old: 31000, specs: [["Capacity", "1TB"], ["Interface", "PCIe Gen4 x4, NVMe 1.4"], ["Seq Read", "7,000 MB/s"], ["Seq Write", "6,500 MB/s"], ["TBW", "750 TBW"], ["Form Factor", "M.2 2280"]] },
    { name: "Sabrent Rocket 4 Plus 2TB NVMe M.2 SSD",           brand: "Sabrent",  price: 39000, old: 44000, specs: [["Capacity", "2TB"], ["Interface", "PCIe Gen4 x4, NVMe 1.4"], ["Seq Read", "7,100 MB/s"], ["Seq Write", "6,600 MB/s"], ["Controller", "Phison E18"], ["Form Factor", "M.2 2280"]] },
    { name: "Corsair MP600 Pro LPX 1TB NVMe M.2 SSD",           brand: "Corsair",  price: 28000, old: 32000, specs: [["Capacity", "1TB"], ["Interface", "PCIe Gen4 x4, NVMe 1.4"], ["Seq Read", "7,100 MB/s"], ["Seq Write", "5,800 MB/s"], ["Design", "Low Profile 2280"], ["Form Factor", "M.2 2280"]] },
    { name: "ADATA XPG Gammix S70 Blade 2TB NVMe SSD",          brand: "ADATA",    price: 38000, old: 43000, specs: [["Capacity", "2TB"], ["Interface", "PCIe Gen4 x4, NVMe 1.4"], ["Seq Read", "7,400 MB/s"], ["Seq Write", "6,700 MB/s"], ["Controller", "InnoGrit IG5236"], ["Heatsink", "Aluminum"]] },
    { name: "Lexar NM790 2TB NVMe PCIe 4.0 M.2 SSD",            brand: "Lexar",    price: 31000, old: 35000, specs: [["Capacity", "2TB"], ["Interface", "PCIe Gen4 x4, NVMe 1.4"], ["Seq Read", "7,400 MB/s"], ["Seq Write", "6,500 MB/s"], ["TBW", "1,500 TBW"], ["Form Factor", "M.2 2280"]] },
  ],

  // ── Mice ── (10 brands: Logitech, Razer, Corsair, SteelSeries, Roccat, HyperX, Redragon, Zowie, Glorious, Pulsar)
  "Mice": [
    { name: "Logitech G Pro X Superlight 2 DEX Wireless",      brand: "Logitech",    price: 34999, old: 38999, specs: [["Sensor", "HERO 2 Optical"], ["DPI", "100-32,000 DPI"], ["Weight", "60g"], ["Polling Rate", "2000Hz"], ["Battery", "95 Hours"], ["Connectivity", "LIGHTSPEED"]] },
    { name: "Razer DeathAdder V3 Pro Wireless Gaming Mouse",    brand: "Razer",       price: 37500, old: 41500, specs: [["Sensor", "Focus Pro 30K Optical"], ["Weight", "63g"], ["Polling Rate", "8000Hz"], ["Battery", "90 Hours"], ["Buttons", "5 Programmable"], ["Connectivity", "HyperSpeed"]] },
    { name: "Corsair M75 Air Wireless Gaming Mouse",            brand: "Corsair",     price: 28000, old: 32000, specs: [["Sensor", "Marksman 26K Optical"], ["Weight", "60g"], ["Battery", "75 Hours"], ["Polling Rate", "2000Hz"], ["Buttons", "7 Programmable"], ["Connectivity", "Slipstream"]] },
    { name: "SteelSeries Prime Wireless Gaming Mouse",          brand: "SteelSeries", price: 22500, old: 26000, specs: [["Sensor", "TrueMove Air Optical"], ["Weight", "80g"], ["Battery", "100 Hours"], ["Polling Rate", "1000Hz"], ["Buttons", "6 Programmable"], ["Shape", "Symmetrical"]] },
    { name: "Roccat Kone Pro Air Wireless Gaming Mouse",        brand: "Roccat",      price: 24000, old: 27500, specs: [["Sensor", "Owl-Eye 19K Optical"], ["Weight", "75g"], ["Battery", "100 Hours"], ["Polling Rate", "1000Hz"], ["RGB", "ARGB Lighting"], ["Connectivity", "2.4GHz / BT"]] },
    { name: "HyperX Pulsefire Haste 2 Wireless Mouse",         brand: "HyperX",      price: 18500, old: 21000, specs: [["Sensor", "Pixart PAW3395"], ["Weight", "61g"], ["Battery", "100 Hours"], ["DPI", "Up to 26,000 DPI"], ["Design", "Ultralight Hex Shell"], ["Connectivity", "2.4GHz"]] },
    { name: "Redragon M711 Cobra Wired Gaming Mouse",           brand: "Redragon",    price:  4800, old:  5800, specs: [["Sensor", "Pixart P3325"], ["DPI", "Up to 10,000 DPI"], ["RGB", "7 Backlit Colors"], ["Buttons", "7 Programmable"], ["Weight", "116g"], ["Connection", "Wired USB"]] },
    { name: "Zowie EC2-C Ergonomic Wired Gaming Mouse",         brand: "Zowie",       price: 16000, old: 18500, specs: [["Sensor", "3610 Optical"], ["DPI", "400-3200 DPI"], ["Weight", "73g"], ["Polling Rate", "1000Hz"], ["Buttons", "5"], ["Design", "Ergonomic Right-hand"]] },
    { name: "Glorious Model O 2 Wireless Gaming Mouse",         brand: "Glorious",    price: 19500, old: 22500, specs: [["Sensor", "Bamf 2.0 26K Optical"], ["Weight", "68g"], ["Battery", "75 Hours"], ["DPI", "Up to 26,000 DPI"], ["Polling Rate", "2000Hz"], ["Connectivity", "2.4GHz"]] },
    { name: "Pulsar X2 Wireless Symmetrical Gaming Mouse",      brand: "Pulsar",      price: 21000, old: 24000, specs: [["Sensor", "PixArt PAW3395"], ["Weight", "55g"], ["Battery", "70 Hours"], ["DPI", "Up to 26,000 DPI"], ["Polling Rate", "1000Hz"], ["Cable", "Ultralight Paracord"]] },
  ],

  // ── Headsets ── (10 brands: HyperX, Razer, Corsair, Logitech, SteelSeries, Astro, JBL, Sony, Turtle Beach, Creative)
  "Headsets": [
    { name: "HyperX Cloud Alpha Wireless Gaming Headset",       brand: "HyperX",     price: 44000, old: 49000, specs: [["Driver", "50mm Dual Chamber"], ["Battery", "300 Hours"], ["Audio", "DTS Headphone:X Spatial"], ["Connectivity", "2.4GHz Wireless"], ["Mic", "Detachable Noise-Cancel"], ["Weight", "335g"]] },
    { name: "Razer BlackShark V2 Pro Wireless 2023 Edition",    brand: "Razer",       price: 48900, old: 53900, specs: [["Driver", "50mm TriForce Titanium"], ["Mic", "Super Wideband Mic"], ["Connectivity", "HyperSpeed / BT / 3.5mm"], ["Battery", "70 Hours"], ["Sound", "THX Spatial Audio"], ["Weight", "320g"]] },
    { name: "Corsair Virtuoso RGB Wireless XT Hi-Fi Headset",   brand: "Corsair",     price: 62000, old: 68000, specs: [["Driver", "50mm Neodymium"], ["Freq Range", "10Hz-40kHz Hi-Res"], ["Connectivity", "Slipstream / BT / USB / 3.5mm"], ["Mic", "Broadcast-Grade Detachable"], ["Battery", "20 Hours"], ["Audio", "Dolby Atmos"]] },
    { name: "Logitech G PRO X 2 Lightspeed Wireless Headset",   brand: "Logitech",    price: 58000, old: 64000, specs: [["Driver", "50mm Graphene Drivers"], ["Connectivity", "Lightspeed / BT / 3.5mm"], ["Battery", "50 Hours"], ["Mic", "Blue VO!CE Detachable"], ["Software", "iCUE Equalizer"], ["Weight", "345g"]] },
    { name: "SteelSeries Arctis Nova Pro Wireless Headset",     brand: "SteelSeries", price: 75000, old: 82000, specs: [["Driver", "40mm High Fidelity"], ["Battery", "Dual Hot-Swap Batteries"], ["Connectivity", "2.4GHz + Bluetooth 5.0"], ["Mic", "Retractable ClearCast Gen2"], ["Audio", "360° Spatial Audio"], ["Weight", "338g"]] },
    { name: "Astro A50 X Wireless Gaming Headset + Base",       brand: "Astro",       price: 95000, old: 105000, specs: [["Driver", "40mm ASTRO Audio V2"], ["Base Station", "Multi-device Dock"], ["Connectivity", "Dolby Wireless + Dock"], ["Mic", "Flip-to-mute Unidirectional"], ["Platform", "PC / PS5 / Xbox"], ["Battery", "18 Hours"]] },
    { name: "JBL Quantum 910 Wireless Gaming Headset",          brand: "JBL",         price: 42000, old: 47000, specs: [["Driver", "40mm JBL Quantum"], ["Spatial", "Quantum Sphere 360 Audio"], ["Connectivity", "2.4GHz / BT / 3.5mm"], ["ANC", "Adaptive ANC"], ["Battery", "40 Hours"], ["Mic", "Detachable Boom"]] },
    { name: "Sony INZONE H9 Wireless Noise Cancelling Headset", brand: "Sony",        price: 68000, old: 75000, specs: [["Driver", "40mm Dynamic"], ["ANC", "Dual Noise Sensor ANC"], ["Connectivity", "2.4GHz / Bluetooth 5.0"], ["Battery", "32 Hours"], ["Spatial", "360 Spatial Sound"], ["Mic", "Built-in Mic Array"]] },
    { name: "Turtle Beach Stealth Pro Wireless Headset",        brand: "Turtle Beach", price: 55000, old: 62000, specs: [["Driver", "50mm Nanoclear Drivers"], ["ANC", "Active Noise Cancellation"], ["Battery", "2 x 12hr Hot-Swap"], ["Connectivity", "2.4GHz / Bluetooth"], ["Platform", "Multi-platform"], ["Weight", "351g"]] },
    { name: "Creative SXFI Air Carbon USB Gaming Headset",      brand: "Creative",    price: 18000, old: 21000, specs: [["Driver", "50mm Full-spectrum"], ["Audio", "Super X-Fi SXFI Tech"], ["Connectivity", "USB / 3.5mm / Bluetooth"], ["Mic", "ClearComms Detachable"], ["Battery", "10 Hours BT"], ["Weight", "275g"]] },
  ],

  // ── Keyboards ── (10 brands: Razer, Corsair, Logitech, SteelSeries, HyperX, Redragon, Ducky, Keychron, Fnatic, Roccat)
  "Keyboards": [
    { name: "Razer BlackWidow V4 Pro Full-Size Mechanical",      brand: "Razer",       price: 28999, old: 32999, specs: [["Switches", "Razer Green Tactile Clicky"], ["Layout", "Full Size 104-key"], ["RGB", "Chroma Per-Key + Underglow"], ["Wrist Rest", "Magnetic Plush"], ["Polling Rate", "8000Hz"], ["Connection", "USB-C Wired"]] },
    { name: "Corsair K100 RGB Flagship Mechanical Keyboard",     brand: "Corsair",     price: 54000, old: 59000, specs: [["Switches", "Cherry MX Speed Silver"], ["Layout", "Full Size + OPX Optical"], ["Control", "iCUE Control Wheel"], ["Polling Rate", "8000Hz AXON"], ["Frame", "Anodized Aluminum"], ["RGB", "Per-Key Lightsync"]] },
    { name: "Logitech G915 TKL Lightspeed Wireless Keyboard",    brand: "Logitech",    price: 46000, old: 51000, specs: [["Switches", "Low Profile GL Tactile"], ["Layout", "TKL (Tenkeyless)"], ["Connectivity", "Lightspeed / Bluetooth"], ["Battery", "40 Hours"], ["RGB", "Lightsync Per-Key"], ["Thickness", "22mm Ultra-thin"]] },
    { name: "SteelSeries Apex Pro TKL Wireless 2023",            brand: "SteelSeries", price: 52000, old: 58000, specs: [["Switches", "OmniPoint 2.0 Adjustable Mag"], ["Layout", "TKL Compact"], ["Actuation", "0.1-4.0mm Adjustable"], ["Connectivity", "2.4GHz / Wired USB-C"], ["Battery", "40 Hours"], ["Display", "OLED Smart Display"]] },
    { name: "HyperX Alloy Origins 65 Compact Mechanical",        brand: "HyperX",      price: 21000, old: 24000, specs: [["Switches", "HyperX Red Linear"], ["Layout", "65% Compact (68 Keys)"], ["Build", "CNC Aluminum Body"], ["RGB", "Per-Key RGB"], ["Polling Rate", "1000Hz"], ["Connection", "Detachable USB-C"]] },
    { name: "Redragon K617 Fizz 60% Wired Mechanical Keyboard",  brand: "Redragon",    price:  7900, old:  8900, specs: [["Switches", "Linear Red Switches"], ["Layout", "60% Ultra-compact (61 Keys)"], ["Keycaps", "Dual-color ABS Double-shot"], ["RGB", "RGB Backlit"], ["Anti-ghost", "Full Anti-ghosting"], ["Connection", "Detachable USB-C"]] },
    { name: "Ducky One 3 TKL Hot-swap Mechanical Keyboard",      brand: "Ducky",       price: 32000, old: 36000, specs: [["Switches", "Cherry MX Red (Hot-Swap PCB)"], ["Layout", "TKL 87 Keys"], ["Keycaps", "PBT Double-shot"], ["Frame", "Aluminum Top Mount"], ["Layer", "Silicone Dampening"], ["RGB", "Per-Key RGB"]] },
    { name: "Keychron Q1 Pro QMK Wireless 75% Mechanical",       brand: "Keychron",    price: 28000, old: 32000, specs: [["Switches", "Gateron G Pro Red (Hot-Swap)"], ["Layout", "75% Layout (81 Keys)"], ["Connectivity", "Bluetooth 5.1 / USB-C"], ["Build", "CNC Aluminum Body"], ["PCB", "QMK / VIA Programmable"], ["Battery", "4000mAh"]] },
    { name: "Fnatic Streak65 LP Compact Wireless Keyboard",      brand: "Fnatic",      price: 24000, old: 28000, specs: [["Switches", "Low Profile Red Linear"], ["Layout", "65% Compact"], ["Connectivity", "2.4GHz / BT / Wired"], ["Battery", "8000mAh"], ["Actuation", "1.5mm Low Profile"], ["Keycaps", "ABS Double-shot"]] },
    { name: "Roccat Vulcan II Max Full-size Optical Keyboard",   brand: "Roccat",      price: 38000, old: 43000, specs: [["Switches", "Titan II Optical Linear"], ["Layout", "Full Size 104-key"], ["RGB", "ARGB Transparent Housing"], ["Actuation", "1.4mm Optical"], ["Polling Rate", "1000Hz"], ["Wrist Rest", "Magnetic Detachable"]] },
  ],

  // ── Monitors ── (10 brands: LG, ASUS, Acer, Samsung, MSI, Dell, BenQ, Gigabyte, Philips, ViewSonic)
  "Monitors": [
    { name: "LG UltraGear 27GP850-B 27\" QHD Nano IPS 180Hz",     brand: "LG",       price:  95000, old: 105000, specs: [["Screen", "27 inches"], ["Panel", "Nano IPS"], ["Resolution", "2560x1440 QHD"], ["Refresh Rate", "180Hz OC / 1ms GtG"], ["HDR", "DisplayHDR 400"], ["Sync", "G-Sync Compatible + FreeSync"]] },
    { name: "ASUS ROG Swift PG27AQDM 27\" OLED QHD 240Hz",         brand: "ASUS",     price: 265000, old: 290000, specs: [["Screen", "27 inches"], ["Panel", "WOLED Panel"], ["Resolution", "2560x1440 QHD"], ["Refresh Rate", "240Hz / 0.03ms GtG"], ["HDR", "DisplayHDR True Black 400"], ["Peak Brightness", "1000 nits"]] },
    { name: "Acer Predator X34 V 34\" Curved OLED UW-QHD",         brand: "Acer",     price: 285000, old: 310000, specs: [["Screen", "34\" 1800R Curved"], ["Panel", "OLED"], ["Resolution", "3440x1440 UW-QHD"], ["Refresh Rate", "175Hz / 0.1ms GtG"], ["HDR", "DisplayHDR True Black 400"], ["Sync", "G-Sync Ultimate"]] },
    { name: "Samsung Odyssey Neo G7 32\" 4K Mini-LED 165Hz",        brand: "Samsung",  price: 185000, old: 205000, specs: [["Screen", "32 inches"], ["Panel", "VA Mini-LED"], ["Resolution", "3840x2160 4K UHD"], ["Refresh Rate", "165Hz / 1ms GtG"], ["HDR", "DisplayHDR 2000"], ["Sync", "FreeSync Premium Pro"]] },
    { name: "MSI MAG274QRF-QD 27\" Rapid IPS QHD 165Hz",           brand: "MSI",      price:  98000, old: 110000, specs: [["Screen", "27 inches"], ["Panel", "Rapid IPS + Quantum Dot"], ["Resolution", "2560x1440 QHD"], ["Refresh Rate", "165Hz / 1ms GtG"], ["Colors", "DCI-P3 98%"], ["Sync", "FreeSync Premium"]] },
    { name: "Dell Alienware AW2724DM 27\" QHD Fast IPS 165Hz",     brand: "Dell",     price: 120000, old: 135000, specs: [["Screen", "27 inches"], ["Panel", "Fast IPS"], ["Resolution", "2560x1440 QHD"], ["Refresh Rate", "165Hz / 1ms GtG"], ["HDR", "DisplayHDR 600"], ["Sync", "G-Sync Compatible"]] },
    { name: "BenQ MOBIUZ EX2710Q 27\" IPS QHD 165Hz",              brand: "BenQ",     price:  85000, old:  95000, specs: [["Screen", "27 inches"], ["Panel", "IPS Panel"], ["Resolution", "2560x1440 QHD"], ["Refresh Rate", "165Hz / 1ms GtG"], ["Sound", "2.1ch treVolo Speakers"], ["Feature", "HDRi Intelligence"]] },
    { name: "Gigabyte M27Q X 27\" IPS QHD 240Hz KVM Monitor",      brand: "Gigabyte", price: 110000, old: 122000, specs: [["Screen", "27 inches"], ["Panel", "SS IPS Panel"], ["Resolution", "2560x1440 QHD"], ["Refresh Rate", "240Hz / 0.5ms GtG"], ["KVM", "Built-in KVM Switch"], ["Sync", "FreeSync Premium + G-Sync"]] },
    { name: "Philips Evnia 27M2C5500W 27\" OLED QHD 240Hz",        brand: "Philips",  price: 175000, old: 195000, specs: [["Screen", "27 inches"], ["Panel", "OLED Panel"], ["Resolution", "2560x1440 QHD"], ["Refresh Rate", "240Hz / 0.03ms GtG"], ["Ambiglow", "Philips Ambiglow RGB"], ["HDR", "DisplayHDR True Black 400"]] },
    { name: "ViewSonic XG2431 24\" Fast IPS FHD 240Hz ESPORTS",    brand: "ViewSonic",price:  68000, old:  75000, specs: [["Screen", "23.8 inches"], ["Panel", "Fast IPS Panel"], ["Resolution", "1920x1080 FHD"], ["Refresh Rate", "240Hz / 0.5ms GtG"], ["Blur Red.", "VESA ClearMR 9000"], ["Sync", "FreeSync Premium"]] },
  ],

  // ── PSUs ── (10 brands: Corsair, Seasonic, DeepCool, Cooler Master, Thermaltake, ASUS, Silverstone, FSP, Super Flower, be quiet!)
  "PSUs": [
    { name: "Corsair RM850x 850W 80+ Gold Fully Modular PSU",    brand: "Corsair",      price: 34500, old: 38500, specs: [["Wattage", "850W"], ["Efficiency", "80 Plus Gold"], ["Modular", "Fully Modular"], ["Capacitors", "Japanese 105°C"], ["Fan", "135mm MagLev Fan"], ["Zero RPM", "Yes"]] },
    { name: "Seasonic Focus GX-850 850W 80+ Gold Modular PSU",   brand: "Seasonic",     price: 38000, old: 42500, specs: [["Wattage", "850W"], ["Efficiency", "80 Plus Gold"], ["Modular", "Fully Modular"], ["Fan", "135mm Fluid Dynamic"], ["Protection", "OPP/OVP/UVP/SCP/OTP"], ["Warranty", "10 Years"]] },
    { name: "DeepCool PX1000G 1000W 80+ Gold PCIe 5.0 ATX 3.0",  brand: "DeepCool",    price: 38500, old: 42500, specs: [["Wattage", "1000W ATX 3.0"], ["Efficiency", "80 Plus Gold"], ["Modular", "Fully Modular + 12VHPWR"], ["Capacitors", "Japanese"], ["Fan", "140mm FDB Fan"], ["Topology", "Full-Bridge LLC"]] },
    { name: "Cooler Master MWE Gold 850 V2 Fully Modular PSU",   brand: "Cooler Master",price: 33000, old: 36500, specs: [["Wattage", "850W"], ["Efficiency", "80 Plus Gold"], ["Modular", "Fully Modular"], ["Temp", "50°C Full Load Rated"], ["Fan", "140mm HDB Fan"], ["Rail", "Single +12V Rail"]] },
    { name: "Thermaltake Toughpower GF3 850W 80+ Gold ATX 3.0",  brand: "Thermaltake", price: 32000, old: 36000, specs: [["Wattage", "850W ATX 3.0"], ["Efficiency", "80 Plus Gold"], ["Modular", "Fully Modular + 12VHPWR"], ["Protection", "OPP/OVP/UVP/OCP/SCP/OTP"], ["Fan", "140mm Hydraulic"], ["Warranty", "10 Years"]] },
    { name: "ASUS Prime AP-850G 850W 80+ Gold Fully Modular",    brand: "ASUS",         price: 35000, old: 39000, specs: [["Wattage", "850W"], ["Efficiency", "80 Plus Gold"], ["Modular", "Fully Modular"], ["Fan", "135mm 0-dB Axial"], ["Conversion", "DC-DC Conversion"], ["Protection", "OPP/OVP/OCP/SCP/UVP"]] },
    { name: "Silverstone SX750-PT 750W 80+ Platinum SFX PSU",    brand: "Silverstone",  price: 42000, old: 47000, specs: [["Wattage", "750W SFX"], ["Efficiency", "80 Plus Platinum"], ["Modular", "Fully Modular"], ["Form Factor", "SFX + ATX Bracket"], ["Fan", "92mm Fluid Dynamic"], ["Protection", "Full Protection Suite"]] },
    { name: "FSP Hydro GT Pro 1000W 80+ Gold ATX 3.0 PSU",       brand: "FSP",          price: 39000, old: 44000, specs: [["Wattage", "1000W ATX 3.0"], ["Efficiency", "80 Plus Gold"], ["Modular", "Fully Modular + 12VHPWR"], ["Fan", "140mm Double Ball Bearing"], ["PCIe", "PCIe 5.0 Ready"], ["Rail", "Single +12V"]] },
    { name: "Super Flower Leadex VII Gold 850W Fully Modular",    brand: "Super Flower", price: 36000, old: 40000, specs: [["Wattage", "850W"], ["Efficiency", "80 Plus Gold"], ["Modular", "Fully Modular"], ["Fan", "135mm Fluid Dynamic"], ["APFC", "Active Power Factor Correction"], ["Warranty", "10 Years"]] },
    { name: "be quiet! Dark Power 13 850W 80+ Titanium PSU",      brand: "be quiet!",    price: 65000, old: 72000, specs: [["Wattage", "850W"], ["Efficiency", "80 Plus Titanium"], ["Modular", "Fully Modular"], ["Fan", "135mm Silent Wings 4"], ["Noise", "Silent at <20% Load"], ["Warranty", "10 Years"]] },
  ],

  // ── Cases ── (10 brands: NZXT, Corsair, Lian Li, Fractal Design, be quiet!, Phanteks, Cooler Master, Thermaltake, Silverstone, InWin)
  "Cases": [
    { name: "NZXT H7 Flow ATX Mid Tower Case",                    brand: "NZXT",          price: 32000, old: 36000, specs: [["Form Factor", "ATX Mid Tower"], ["Tempered Glass", "Front + Side TG"], ["Fan Slots", "7 x 120mm Max"], ["Radiator", "360mm Front Max"], ["Drive Bays", "2x 3.5\" + 4x 2.5\""], ["USB", "2x USB 3.0 + USB-C"]] },
    { name: "Corsair 5000D Airflow ATX Mid Tower Case",           brand: "Corsair",        price: 34000, old: 38000, specs: [["Form Factor", "ATX Mid Tower"], ["Airflow", "High-Airflow Front Panel"], ["Fan Slots", "9 x 120mm Max"], ["Radiator", "360mm Front + Top"], ["GPU Length", "Up to 420mm"], ["Drive Bays", "3x 3.5\" + 2x 2.5\""]] },
    { name: "Lian Li PC-O11 Dynamic EVO XL ATX Tower",           brand: "Lian Li",        price: 38000, old: 42000, specs: [["Form Factor", "ATX / E-ATX Mid Tower"], ["Tempered Glass", "Dual Tempered Glass"], ["Fan Slots", "10 x 120mm Max"], ["Radiator", "2x 360mm Support"], ["Expansion", "7+2 PCIe Slots"], ["Drive Bays", "2x 3.5\" + 4x 2.5\""]] },
    { name: "Fractal Design Torrent Compact ATX Case",            brand: "Fractal Design", price: 42000, old: 47000, specs: [["Form Factor", "ATX Mid Tower"], ["Front Fans", "2x 180mm PWM Fans"], ["Top Fan", "1x 140mm Fan"], ["GPU Length", "Up to 431mm"], ["Radiator", "360mm Bottom"], ["Tempered Glass", "Side TG Panel"]] },
    { name: "be quiet! Pure Base 500DX ARGB ATX Case",           brand: "be quiet!",      price: 28000, old: 32000, specs: [["Form Factor", "ATX Mid Tower"], ["Noise Dampening", "3x Dampening Panels"], ["ARGB Fans", "3x Light Wings ARGB"], ["GPU Length", "Up to 369mm"], ["Radiator", "360mm Front / Top"], ["Drive Bays", "2x 3.5\" + 3x 2.5\""]] },
    { name: "Phanteks Eclipse G500A DRGB High-Airflow ATX",      brand: "Phanteks",       price: 28000, old: 32000, specs: [["Form Factor", "ATX Mid Tower"], ["Front", "High-Airflow Mesh Panel"], ["ARGB Fans", "3x 120mm DRGB Fans"], ["GPU Length", "Up to 435mm"], ["Radiator", "360mm Support"], ["Drive Bays", "2x 3.5\" + 3x 2.5\""]] },
    { name: "Cooler Master HAF 500 Airflow ATX Mid Tower",       brand: "Cooler Master",  price: 25000, old: 28500, specs: [["Form Factor", "ATX Mid Tower"], ["Front Fans", "2x 200mm ARGB Fans"], ["Airflow", "High Air Flow Front"], ["GPU Length", "Up to 410mm"], ["Radiator", "360mm Front"], ["USB", "2x USB 3.0 + USB-C"]] },
    { name: "Thermaltake View 51 Panoramic TG ARGB Case",        brand: "Thermaltake",    price: 35000, old: 40000, specs: [["Form Factor", "Full Tower ATX"], ["Tempered Glass", "4-Side Panoramic TG"], ["ARGB Fans", "3x 200mm ARGB Front"], ["GPU Length", "Up to 400mm"], ["Radiator", "420mm Top Support"], ["Drive Bays", "4x 3.5\" + 3x 2.5\""]] },
    { name: "Silverstone FARA B1 Pro ATX Mid Tower Case",        brand: "Silverstone",    price: 19500, old: 22000, specs: [["Form Factor", "ATX Mid Tower"], ["Front", "Steel Mesh Airflow"], ["Fans Included", "1x 120mm Rear"], ["GPU Length", "Up to 340mm"], ["Radiator", "240mm Top + Front"], ["Drive Bays", "2x 3.5\" + 2x 2.5\""]] },
    { name: "InWin 309 Tempered Glass ATX Mid Tower Case",       brand: "InWin",          price: 22000, old: 25000, specs: [["Form Factor", "ATX Mid Tower"], ["Tempered Glass", "Full-length Side TG"], ["Front", "Panoramic Mesh Panel"], ["GPU Length", "Up to 360mm"], ["Fan Slots", "7x 120mm Max"], ["Drive Bays", "2x 3.5\" + 2x 2.5\""]] },
  ],

  // ── Coolers ── (10 brands: Cooler Master, Noctua, be quiet!, DeepCool, Thermalright, Arctic, ID-Cooling, Corsair, NZXT, Lian Li)
  "Coolers": [
    { name: "Cooler Master Hyper 212 Halo Black ARGB Air Cooler", brand: "Cooler Master", price:  9500, old: 11000, specs: [["Type", "Single Tower Air Cooler"], ["TDP Support", "Up to 250W"], ["Fans", "2x 120mm ARGB Fans"], ["Fan Speed", "650-2000 RPM"], ["Height", "158.8mm"], ["Sockets", "LGA1700/1200 + AM5/AM4"]] },
    { name: "Noctua NH-D15 chromax.black Dual Tower Air Cooler",  brand: "Noctua",        price: 38000, old: 42000, specs: [["Type", "Dual Tower Air Cooler"], ["TDP Support", "250W+"], ["Fans", "2x 140mm NF-A15 PWM"], ["Fan Speed", "300-1500 RPM"], ["Noise", "24.6 dB(A)"], ["Height", "165mm"]] },
    { name: "be quiet! Dark Rock Pro 4 Dual Tower Air Cooler",    brand: "be quiet!",     price: 28000, old: 32000, specs: [["Type", "Dual Tower Air Cooler"], ["TDP Support", "250W"], ["Fans", "1x 135mm + 1x 120mm SilentWings 3"], ["Fan Speed", "Up to 1500 RPM"], ["Noise", "24.3 dB(A)"], ["Height", "162.8mm"]] },
    { name: "DeepCool AK620 ZERO DARK Dual Tower Air Cooler",     brand: "DeepCool",      price: 18000, old: 21000, specs: [["Type", "Dual Tower Air Cooler"], ["TDP Support", "260W"], ["Fans", "2x 120mm FDB Fans"], ["Fan Speed", "500-1850 RPM"], ["Noise", "28 dB(A) Max"], ["Height", "160mm"]] },
    { name: "Thermalright Peerless Assassin 120 SE ARGB Cooler",  brand: "Thermalright",  price: 12000, old: 14000, specs: [["Type", "Dual Tower Air Cooler"], ["TDP Support", "240W"], ["Fans", "2x 120mm ARGB"], ["Fan Speed", "500-1550 RPM"], ["Heatpipes", "6x 6mm Copper"], ["Height", "155mm"]] },
    { name: "Arctic Liquid Freezer III 360 AIO Liquid Cooler",    brand: "Arctic",        price: 28500, old: 32000, specs: [["Type", "360mm AIO Liquid Cooler"], ["Pump Speed", "800-2800 RPM"], ["Fans", "3x 120mm P12 PWM PST"], ["Fan Speed", "200-1800 RPM"], ["Noise", "0.5 Sone Max"], ["Sockets", "LGA1700 + AM5/AM4"]] },
    { name: "ID-Cooling FrostFlow X 360 ARGB AIO Cooler",         brand: "ID-Cooling",    price: 15000, old: 17500, specs: [["Type", "360mm AIO Liquid Cooler"], ["Radiator", "360mm Aluminum"], ["Fans", "3x 120mm ARGB PWM"], ["Fan Speed", "700-1800 RPM"], ["Pump Speed", "3000 RPM"], ["RGB", "ARGB Infinity Mirror"]] },
    { name: "Corsair iCUE H150i Elite LCD XT 360mm AIO",          brand: "Corsair",       price: 55000, old: 62000, specs: [["Type", "360mm AIO Liquid Cooler"], ["Display", "2.1\" IPS LCD Pump Head"], ["Fans", "3x 120mm AF120 Elite"], ["Fan Speed", "Up to 2000 RPM"], ["Software", "iCUE Control"], ["RGB", "Full iCUE RGB Ecosystem"]] },
    { name: "NZXT Kraken 360 RGB AIO Liquid Cooler",               brand: "NZXT",          price: 45000, old: 51000, specs: [["Type", "360mm AIO Liquid Cooler"], ["Display", "1.54\" LCD Infinity Display"], ["Fans", "3x 120mm F120 RGB Core"], ["Fan Speed", "500-2000 RPM"], ["Software", "NZXT CAM"], ["Sockets", "LGA1700 + AM5/AM4"]] },
    { name: "Lian Li Galahad II Trinity 360 ARGB AIO Cooler",     brand: "Lian Li",       price: 38000, old: 43000, specs: [["Type", "360mm AIO Liquid Cooler"], ["Head", "ARGB 60mm Pump Head"], ["Fans", "3x 120mm ARGB PWM"], ["Fan Speed", "800-2200 RPM"], ["Control", "L-Connect 3 Software"], ["Radiator", "28mm Thickness"]] },
  ],

  // ── Laptops ── (10 brands: ASUS, MSI, Acer, Lenovo, Dell, HP, Gigabyte, Razer, Samsung, Apple)
  "Laptops": [
    { name: "ASUS ROG Strix G16 G614 RTX 4070 Gaming Laptop",    brand: "ASUS",    price: 499000, old: 549000, specs: [["CPU", "Intel Core i9-13980HX"], ["GPU", "NVIDIA RTX 4070 8GB"], ["Display", "16\" QHD+ 240Hz"], ["RAM", "32GB DDR5"], ["Storage", "1TB NVMe SSD"], ["Battery", "90Wh"]] },
    { name: "MSI Raider GE78 HX RTX 4090 Gaming Laptop",         brand: "MSI",     price: 785000, old: 850000, specs: [["CPU", "Intel Core i9-13950HX"], ["GPU", "NVIDIA RTX 4090 16GB"], ["Display", "17\" QHD+ 240Hz Mini-LED"], ["RAM", "32GB DDR5"], ["Storage", "2TB NVMe SSD"], ["Battery", "99.9Wh"]] },
    { name: "Acer Predator Helios Neo 16 RTX 4060 Laptop",       brand: "Acer",    price: 299000, old: 329000, specs: [["CPU", "Intel Core i7-13700HX"], ["GPU", "NVIDIA RTX 4060 8GB"], ["Display", "16\" WUXGA 165Hz IPS"], ["RAM", "16GB DDR5"], ["Storage", "512GB NVMe SSD"], ["Battery", "76Wh"]] },
    { name: "Lenovo Legion Pro 7i Gen 8 RTX 4080 Laptop",        brand: "Lenovo",  price: 599000, old: 659000, specs: [["CPU", "Intel Core i9-13900HX"], ["GPU", "NVIDIA RTX 4080 12GB"], ["Display", "16\" WQXGA 240Hz IPS"], ["RAM", "32GB DDR5"], ["Storage", "1TB NVMe SSD"], ["Battery", "99.9Wh"]] },
    { name: "Dell Alienware m18 R2 RTX 4090 Gaming Laptop",      brand: "Dell",    price: 749000, old: 819000, specs: [["CPU", "Intel Core i9-14900HX"], ["GPU", "NVIDIA RTX 4090 16GB"], ["Display", "18\" FHD+ 480Hz QD-OLED"], ["RAM", "32GB DDR5"], ["Storage", "1TB NVMe SSD"], ["Battery", "86Wh"]] },
    { name: "HP Omen 16 RTX 4060 Gaming Laptop 2024",            brand: "HP",      price: 279000, old: 309000, specs: [["CPU", "Intel Core i7-13700HX"], ["GPU", "NVIDIA RTX 4060 8GB"], ["Display", "16.1\" FHD 165Hz IPS"], ["RAM", "16GB DDR5"], ["Storage", "512GB NVMe SSD"], ["Battery", "83Wh"]] },
    { name: "Gigabyte Aorus 16X RTX 4070 Ti Gaming Laptop",      brand: "Gigabyte",price: 385000, old: 425000, specs: [["CPU", "Intel Core i9-13980HX"], ["GPU", "NVIDIA RTX 4070 Ti 8GB"], ["Display", "16\" QHD+ 165Hz"], ["RAM", "16GB DDR5"], ["Storage", "1TB NVMe SSD"], ["Feature", "AI Power Balancer"]] },
    { name: "Razer Blade 16 RTX 4090 Ultra Gaming Laptop",       brand: "Razer",   price: 899000, old: 979000, specs: [["CPU", "Intel Core i9-13950HX"], ["GPU", "NVIDIA RTX 4090 16GB"], ["Display", "16\" Mini-LED QHD+ 240Hz"], ["RAM", "32GB DDR5"], ["Storage", "1TB NVMe SSD"], ["Build", "CNC Aluminum Unibody"]] },
    { name: "Samsung Galaxy Book4 Ultra RTX 4070 Laptop",        brand: "Samsung", price: 499000, old: 549000, specs: [["CPU", "Intel Core Ultra 9 185H"], ["GPU", "NVIDIA RTX 4070 8GB"], ["Display", "16\" 3K 120Hz AMOLED"], ["RAM", "32GB LPDDR5X"], ["Storage", "1TB NVMe SSD"], ["Weight", "1.86kg"]] },
    { name: "Apple MacBook Pro M3 Max 16-inch Laptop",           brand: "Apple",   price: 699000, old: 759000, specs: [["Chip", "Apple M3 Max (14+30 core)"], ["GPU", "40-core GPU"], ["Display", "16.2\" Liquid Retina XDR"], ["RAM", "36GB Unified Memory"], ["Storage", "1TB SSD"], ["Battery", "Up to 22 Hours"]] },
  ],
};

// ─── Build Final Seed List ────────────────────────────────────────────────────
const finalSeedList = [];

for (const [cat, items] of Object.entries(productsData)) {
  const images = categoryImages[cat] || [""];
  items.forEach((item, i) => {
    const img = images[i % images.length];
    const rating = getRandomRating();
    const description = generateDescription(item, cat);
    const formattedSpecs = item.specs.map(([label, value]) => ({ label, value }));

    finalSeedList.push({
      name: item.name,
      brand: item.brand,
      cat,
      price: item.price,
      old: item.old,
      rating,
      img,
      images: [],
      inStock: Math.random() > 0.1,   // 90% in stock
      description,
      specs: formattedSpecs,
      createdAt: new Date(),
    });
  });
}

// ─── Write JSON ───────────────────────────────────────────────────────────────
writeFileSync('products_seed.json', JSON.stringify(finalSeedList, null, 2));
console.log(`✅ ${finalSeedList.length} products generate ho gaye → products_seed.json`);

const categoryBreakdown = {};
finalSeedList.forEach(p => {
  categoryBreakdown[p.cat] = (categoryBreakdown[p.cat] || 0) + 1;
});
console.log('\n📊 Category breakdown:');
Object.entries(categoryBreakdown).forEach(([cat, count]) => {
  console.log(`   ${cat.padEnd(18)} → ${count} products`);
});

// ─── Upload to MongoDB ────────────────────────────────────────────────────────
async function uploadToMongoDB() {
  const uri = process.env.mongoDB_URI;
  if (!uri) {
    console.log('\nℹ️  mongoDB_URI nahi mili, MongoDB upload skip ho raha hai.');
    return;
  }

  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('\n✅ MongoDB se connect ho gaye!');

    const db = client.db('fastcomputers');
    const collection = db.collection('products');

    // Clear existing products first
    const deleted = await collection.deleteMany({});
    console.log(`🗑️  ${deleted.deletedCount} purane products delete ho gaye`);

    // Insert fresh products
    const result = await collection.insertMany(finalSeedList);
    console.log(`✅ ${result.insertedCount} naye products MongoDB mein upload ho gaye!`);

    const finalCount = await collection.countDocuments();
    console.log(`📦 Ab database mein total: ${finalCount} products`);

  } catch (err) {
    console.error('❌ MongoDB error:', err.message);
  } finally {
    await client.close();
    console.log('🔌 MongoDB connection close ho gaya.');
  }
}

uploadToMongoDB();
