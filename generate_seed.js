const fs = require('fs');

const categories = [
  "Graphics Cards",
  "Motherboards",
  "Processors",
  "RAM",
  "SSDs",
  "Mice",
  "Headsets",
  "Keyboards",
  "Monitors",
  "PSUs",
  "Cases",
  "Coolers",
  "Laptops"
];

// Helper to generate a random rating between 4 and 5
function getRandomRating() {
  return parseFloat((4 + Math.random()).toFixed(1));
}

// 20 items per category
const productsData = {
  "Graphics Cards": [
    { name: "ASUS ROG Strix GeForce RTX 4090 OC Edition", brand: "ASUS", price: 689000, old: 720000, specs: [["GPU", "RTX 4090"], ["VRAM", "24GB GDDR6X"], ["Clock Speed", "2640 MHz"], ["CUDA Cores", "16384"]] },
    { name: "MSI GeForce RTX 4090 Suprim X 24G", brand: "MSI", price: 675000, old: 699000, specs: [["GPU", "RTX 4090"], ["VRAM", "24GB GDDR6X"], ["Interface", "384-bit"], ["Power TDP", "450W"]] },
    { name: "NVIDIA GeForce RTX 4090 Founders Edition", brand: "NVIDIA", price: 620000, old: 650000, specs: [["GPU", "RTX 4090"], ["VRAM", "24GB GDDR6X"], ["Design", "Blow-Through"], ["Power Connection", "16-pin"]] },
    { name: "Zotac Gaming GeForce RTX 4080 Super Trinity Black", brand: "Zotac", price: 349999, old: 379999, specs: [["GPU", "RTX 4080 Super"], ["VRAM", "16GB GDDR6X"], ["Fans", "Triple Fan"], ["Interface", "256-bit"]] },
    { name: "MSI GeForce RTX 4080 Super Gaming X Slim", brand: "MSI", price: 365000, old: 389000, specs: [["GPU", "RTX 4080 Super"], ["VRAM", "16GB GDDR6X"], ["Form Factor", "3-Slot Slim"], ["Boost Clock", "2610 MHz"]] },
    { name: "ASUS TUF Gaming GeForce RTX 4070 Ti Super", brand: "ASUS", price: 289000, old: 310000, specs: [["GPU", "RTX 4070 Ti Super"], ["VRAM", "16GB GDDR6X"], ["Interface", "256-bit"], ["CUDA Cores", "8448"]] },
    { name: "Zotac Gaming GeForce RTX 4070 Ti Super AMP Holo", brand: "Zotac", price: 295000, old: 315000, specs: [["GPU", "RTX 4070 Ti Super"], ["VRAM", "16GB GDDR6X"], ["RGB", "Spectra 2.0"], ["Interface", "256-bit"]] },
    { name: "ASUS Dual GeForce RTX 4070 Super EVO OC", brand: "ASUS", price: 215000, old: 235000, specs: [["GPU", "RTX 4070 Super"], ["VRAM", "12GB GDDR6X"], ["Fans", "Dual Fan"], ["Boost Clock", "2550 MHz"]] },
    { name: "MSI GeForce RTX 4070 Super Ventus 2X OC", brand: "MSI", price: 209000, old: 225000, specs: [["GPU", "RTX 4070 Super"], ["VRAM", "12GB GDDR6X"], ["Fans", "Dual Torx Fan 4.0"], ["TDP", "220W"]] },
    { name: "Zotac Gaming GeForce RTX 4060 Ti Twin Edge 16GB", brand: "Zotac", price: 159999, old: 175000, specs: [["GPU", "RTX 4060 Ti"], ["VRAM", "16GB GDDR6"], ["Interface", "128-bit"], ["Power TDP", "165W"]] },
    { name: "MSI GeForce RTX 4060 Ventus 3X OC 8G", brand: "MSI", price: 135000, old: 145000, specs: [["GPU", "RTX 4060"], ["VRAM", "8GB GDDR6"], ["Fans", "Triple Fan"], ["Interface", "128-bit"]] },
    { name: "ASUS ROG Strix GeForce RTX 4060 Ti 8GB OC", brand: "ASUS", price: 175000, old: 190000, specs: [["GPU", "RTX 4060 Ti"], ["VRAM", "8GB GDDR6"], ["Boost Clock", "2715 MHz"], ["Cooling", "MaxContact"]] },
    { name: "Zotac Gaming GeForce RTX 3060 Twin Edge OC 12GB", brand: "Zotac", price: 119000, old: 129000, specs: [["GPU", "RTX 3060"], ["VRAM", "12GB GDDR6"], ["Interface", "192-bit"], ["CUDA Cores", "3584"]] },
    { name: "MSI GeForce RTX 3050 Ventus 2X 8G OC", brand: "MSI", price: 85000, old: 95000, specs: [["GPU", "RTX 3050"], ["VRAM", "8GB GDDR6"], ["Interface", "128-bit"], ["Clock", "1807 MHz"]] },
    { name: "AMD Radeon RX 7900 XTX 24GB Reference", brand: "AMD", price: 345000, old: 375000, specs: [["GPU", "Radeon RX 7900 XTX"], ["VRAM", "24GB GDDR6"], ["Interface", "384-bit"], ["Compute Units", "96"]] },
    { name: "AMD Radeon RX 7800 XT 16GB Reference", brand: "AMD", price: 185000, old: 200000, specs: [["GPU", "Radeon RX 7800 XT"], ["VRAM", "16GB GDDR6"], ["Interface", "256-bit"], ["Infinity Cache", "64MB"]] },
    { name: "AMD Radeon RX 7700 XT 12GB Reference", brand: "AMD", price: 155000, old: 170000, specs: [["GPU", "Radeon RX 7700 XT"], ["VRAM", "12GB GDDR6"], ["Interface", "192-bit"], ["Stream Processors", "3456"]] },
    { name: "AMD Radeon RX 7600 XT 16GB Reference", brand: "AMD", price: 125000, old: 135000, specs: [["GPU", "Radeon RX 7600 XT"], ["VRAM", "16GB GDDR6"], ["Interface", "128-bit"], ["TDP", "190W"]] },
    { name: "ASUS TUF Gaming Radeon RX 7900 XT 20GB OC", brand: "ASUS", price: 320000, old: 345000, specs: [["GPU", "Radeon RX 7900 XT"], ["VRAM", "20GB GDDR6"], ["Interface", "320-bit"], ["Power Connector", "3x 8-pin"]] },
    { name: "MSI Radeon RX 6650 XT Mech 2X 8G OC", brand: "MSI", price: 92000, old: 105000, specs: [["GPU", "Radeon RX 6650 XT"], ["VRAM", "8GB GDDR6"], ["Interface", "128-bit"], ["Boost Clock", "2669 MHz"]] }
  ],
  "Motherboards": [
    { name: "ASUS ROG Maximus Z790 Hero", brand: "ASUS", price: 165000, old: 180000, specs: [["Socket", "LGA 1700"], ["Chipset", "Intel Z790"], ["Form Factor", "ATX"], ["Memory", "DDR5 up to 192GB"]] },
    { name: "ASUS ROG Strix Z790-E Gaming WiFi II", brand: "ASUS", price: 125000, old: 135000, specs: [["Socket", "LGA 1700"], ["Chipset", "Intel Z790"], ["WiFi", "WiFi 7"], ["M.2 Slots", "5 x M.2"]] },
    { name: "ASUS TUF Gaming Z790-Plus WiFi", brand: "ASUS", price: 79000, old: 85000, specs: [["Socket", "LGA 1700"], ["Chipset", "Intel Z790"], ["Form Factor", "ATX"], ["WiFi", "WiFi 6E"]] },
    { name: "ASUS Prime Z790-A WiFi", brand: "ASUS", price: 69000, old: 75000, specs: [["Socket", "LGA 1700"], ["Chipset", "Intel Z790"], ["PCIe", "PCIe 5.0 x16"], ["Lan", "2.5Gb Ethernet"]] },
    { name: "MSI MEG Z790 ACE", brand: "MSI", price: 175000, old: 190000, specs: [["Socket", "LGA 1700"], ["Chipset", "Intel Z790"], ["Form Factor", "E-ATX"], ["SATA Ports", "6 x SATA"]] },
    { name: "MSI MPG Z790 Edge TI MAX WiFi", brand: "MSI", price: 98000, old: 108000, specs: [["Socket", "LGA 1700"], ["Chipset", "Intel Z790"], ["Form Factor", "ATX"], ["WiFi", "WiFi 7"]] },
    { name: "MSI PRO Z790-A MAX WiFi", brand: "MSI", price: 65000, old: 72000, specs: [["Socket", "LGA 1700"], ["Chipset", "Intel Z790"], ["PCIe", "PCIe 5.0"], ["WiFi", "WiFi 6E"]] },
    { name: "ASUS ROG Strix B760-I Gaming WiFi", brand: "ASUS", price: 58000, old: 65000, specs: [["Socket", "LGA 1700"], ["Chipset", "Intel B760"], ["Form Factor", "Mini-ITX"], ["Memory", "DDR5"]] },
    { name: "ASUS TUF Gaming B760-Plus WiFi", brand: "ASUS", price: 54000, old: 59000, specs: [["Socket", "LGA 1700"], ["Chipset", "Intel B760"], ["Form Factor", "ATX"], ["Power Phases", "12+1 DrMOS"]] },
    { name: "MSI MAG B760 Tomahawk WiFi", brand: "MSI", price: 59000, old: 64000, specs: [["Socket", "LGA 1700"], ["Chipset", "Intel B760"], ["Audio", "Realtek ALC897"], ["USB Ports", "USB 3.2 Gen 2x2"]] },
    { name: "ASUS ROG Crosshair X670E Hero", brand: "ASUS", price: 179000, old: 195000, specs: [["Socket", "AM5"], ["Chipset", "AMD X670E"], ["PCIe", "PCIe 5.0"], ["USB4 Ports", "2 x USB4"]] },
    { name: "ASUS ROG Strix X670E-E Gaming WiFi", brand: "ASUS", price: 139000, old: 149000, specs: [["Socket", "AM5"], ["Chipset", "AMD X670E"], ["M.2 Slots", "4 x M.2"], ["Power Phases", "18+2 VRM"]] },
    { name: "ASUS TUF Gaming X670E-Plus WiFi", brand: "ASUS", price: 88000, old: 95000, specs: [["Socket", "AM5"], ["Chipset", "AMD X670E"], ["Form Factor", "ATX"], ["WiFi", "WiFi 6E"]] },
    { name: "MSI MPG X670E Carbon WiFi", brand: "MSI", price: 129000, old: 139000, specs: [["Socket", "AM5"], ["Chipset", "AMD X670E"], ["LAN", "2.5G LAN"], ["USB", "USB 3.2 Gen 2x2 Type-C"]] },
    { name: "MSI PRO X670-P WiFi", brand: "MSI", price: 72000, old: 79000, specs: [["Socket", "AM5"], ["Chipset", "AMD X670"], ["Form Factor", "ATX"], ["Memory Support", "DDR5"]] },
    { name: "ASUS ROG Strix B650-A Gaming WiFi", brand: "ASUS", price: 68000, old: 75000, specs: [["Socket", "AM5"], ["Chipset", "AMD B650"], ["Color Theme", "White / Silver"], ["Form Factor", "ATX"]] },
    { name: "ASUS TUF Gaming B650-Plus WiFi", brand: "ASUS", price: 62000, old: 68000, specs: [["Socket", "AM5"], ["Chipset", "AMD B650"], ["BIOS Flashback", "Yes"], ["Audio", "Realtek 7.1 HD"]] },
    { name: "MSI MAG B650 Tomahawk WiFi", brand: "MSI", price: 64000, old: 69000, specs: [["Socket", "AM5"], ["Chipset", "AMD B650"], ["Heatsink", "Extended Heatsink Design"], ["LAN", "Realtek 2.5G"]] },
    { name: "MSI PRO B650M-A WiFi", brand: "MSI", price: 48000, old: 53000, specs: [["Socket", "AM5"], ["Chipset", "AMD B650"], ["Form Factor", "Micro-ATX"], ["M.2 Slots", "2 x M.2"]] },
    { name: "ASUS Prime B650M-A WiFi II", brand: "ASUS", price: 46000, old: 51000, specs: [["Socket", "AM5"], ["Chipset", "AMD B650"], ["Display Output", "HDMI / DP / VGA"], ["Aura Sync", "Yes"]] }
  ],
  "Processors": [
    { name: "Intel Core i9-14900K Processor", brand: "Intel", price: 165000, old: 175000, specs: [["Socket", "LGA1700"], ["Total Cores", "24 (8 P-cores + 16 E-cores)"], ["Total Threads", "32"], ["Max Turbo Frequency", "6.0 GHz"]] },
    { name: "Intel Core i7-14700K Processor", brand: "Intel", price: 115000, old: 125000, specs: [["Socket", "LGA1700"], ["Total Cores", "20 (8 P-cores + 12 E-cores)"], ["Total Threads", "28"], ["Max Turbo Frequency", "5.6 GHz"]] },
    { name: "Intel Core i5-14600K Processor", brand: "Intel", price: 88000, old: 95000, specs: [["Socket", "LGA1700"], ["Total Cores", "14 (6 P-cores + 8 E-cores)"], ["Total Threads", "20"], ["Max Turbo Frequency", "5.3 GHz"]] },
    { name: "Intel Core i9-13900K Processor", brand: "Intel", price: 145000, old: 155000, specs: [["Socket", "LGA1700"], ["Total Cores", "24"], ["Total Threads", "32"], ["Max Turbo Frequency", "5.8 GHz"]] },
    { name: "Intel Core i7-13700K Processor", brand: "Intel", price: 98000, old: 108000, specs: [["Socket", "LGA1700"], ["Total Cores", "16"], ["Total Threads", "24"], ["Max Turbo Frequency", "5.4 GHz"]] },
    { name: "Intel Core i5-13600K Processor", brand: "Intel", price: 79000, old: 85000, specs: [["Socket", "LGA1700"], ["Total Cores", "14"], ["Total Threads", "20"], ["Max Turbo Frequency", "5.1 GHz"]] },
    { name: "Intel Core i5-13400F Processor", brand: "Intel", price: 54000, old: 59000, specs: [["Socket", "LGA1700"], ["Total Cores", "10"], ["Total Threads", "16"], ["Base Clock", "2.5 GHz"]] },
    { name: "Intel Core i3-13100F Processor", brand: "Intel", price: 29500, old: 33000, specs: [["Socket", "LGA1700"], ["Total Cores", "4"], ["Total Threads", "8"], ["Base Clock", "3.4 GHz"]] },
    { name: "Intel Core i9-12900K Processor", brand: "Intel", price: 110000, old: 125000, specs: [["Socket", "LGA1700"], ["Total Cores", "16"], ["Total Threads", "24"], ["Max Turbo Frequency", "5.2 GHz"]] },
    { name: "Intel Core i7-12700K Processor", brand: "Intel", price: 82000, old: 90000, specs: [["Socket", "LGA1700"], ["Total Cores", "12"], ["Total Threads", "20"], ["Max Turbo Frequency", "5.0 GHz"]] },
    { name: "Intel Core i5-12400F Processor", brand: "Intel", price: 32999, old: 35999, specs: [["Socket", "LGA1700"], ["Total Cores", "6"], ["Total Threads", "12"], ["L3 Cache", "18MB"]] },
    { name: "AMD Ryzen 9 7950X3D Processor", brand: "AMD", price: 175000, old: 189000, specs: [["Socket", "AM5"], ["Cores / Threads", "16 Cores / 32 Threads"], ["3D V-Cache", "128MB L3 Cache"], ["Boost Clock", "5.7 GHz"]] },
    { name: "AMD Ryzen 9 7900X3D Processor", brand: "AMD", price: 139000, old: 149000, specs: [["Socket", "AM5"], ["Cores / Threads", "12 Cores / 24 Threads"], ["L3 Cache", "128MB"], ["Boost Clock", "5.6 GHz"]] },
    { name: "AMD Ryzen 7 7800X3D Processor", brand: "AMD", price: 128000, old: 139000, specs: [["Socket", "AM5"], ["Cores / Threads", "8 Cores / 16 Threads"], ["3D V-Cache", "96MB L3 Cache"], ["Boost Clock", "5.0 GHz"]] },
    { name: "AMD Ryzen 9 7950X Processor", brand: "AMD", price: 148000, old: 159000, specs: [["Socket", "AM5"], ["Cores / Threads", "16 Cores / 32 Threads"], ["Boost Clock", "5.7 GHz"], ["TDP", "170W"]] },
    { name: "AMD Ryzen 9 7900X Processor", brand: "AMD", price: 109000, old: 119000, specs: [["Socket", "AM5"], ["Cores / Threads", "12 Cores / 24 Threads"], ["Boost Clock", "5.6 GHz"], ["TDP", "170W"]] },
    { name: "AMD Ryzen 7 7700X Processor", brand: "AMD", price: 89000, old: 98000, specs: [["Socket", "AM5"], ["Cores / Threads", "8 Cores / 16 Threads"], ["Boost Clock", "5.4 GHz"], ["TDP", "105W"]] },
    { name: "AMD Ryzen 5 7600X Processor", brand: "AMD", price: 68000, old: 75000, specs: [["Socket", "AM5"], ["Cores / Threads", "6 Cores / 12 Threads"], ["Boost Clock", "5.3 GHz"], ["TDP", "105W"]] },
    { name: "AMD Ryzen 5 7600 Processor", brand: "AMD", price: 58000, old: 64000, specs: [["Socket", "AM5"], ["Cores / Threads", "6 Cores / 12 Threads"], ["Base Clock", "3.8 GHz"], ["TDP", "65W"]] },
    { name: "AMD Ryzen 5 5600X Processor", brand: "AMD", price: 38999, old: 42999, specs: [["Socket", "AM4"], ["Cores / Threads", "6 Cores / 12 Threads"], ["Boost Clock", "4.6 GHz"], ["TDP", "65W"]] }
  ],
  "RAM": [
    { name: "Corsair Dominator Titanium DDR5 64GB (2x32GB) 6000MHz", brand: "Corsair", price: 115000, old: 125000, specs: [["Memory Type", "DDR5"], ["Capacity", "64GB (2x32GB)"], ["Speed", "6000 MHz"], ["Latency", "CL30"]] },
    { name: "Corsair Dominator Titanium DDR5 32GB (2x16GB) 6400MHz", brand: "Corsair", price: 62000, old: 68000, specs: [["Memory Type", "DDR5"], ["Capacity", "32GB (2x16GB)"], ["Speed", "6400 MHz"], ["Latency", "CL32"]] },
    { name: "Corsair Vengeance RGB DDR5 32GB (2x16GB) 6000MHz", brand: "Corsair", price: 34500, old: 38500, specs: [["Memory Type", "DDR5"], ["Capacity", "32GB (2x16GB)"], ["Speed", "6000 MHz"], ["RGB Lighting", "Yes"]] },
    { name: "Corsair Vengeance DDR5 32GB (2x16GB) 5600MHz", brand: "Corsair", price: 29500, old: 33000, specs: [["Memory Type", "DDR5"], ["Capacity", "32GB (2x16GB)"], ["Speed", "5600 MHz"], ["Heatsink", "Anodized Aluminum"]] },
    { name: "Corsair Vengeance RGB DDR5 64GB (2x32GB) 5200MHz", brand: "Corsair", price: 69000, old: 75000, specs: [["Memory Type", "DDR5"], ["Capacity", "64GB (2x32GB)"], ["Speed", "5200 MHz"], ["RGB Lighting", "Yes"]] },
    { name: "Kingston FURY Renegade DDR5 32GB (2x16GB) 6400MHz", brand: "Kingston", price: 39500, old: 44000, specs: [["Memory Type", "DDR5"], ["Capacity", "32GB (2x16GB)"], ["Speed", "6400 MHz"], ["Voltage", "1.4V"]] },
    { name: "Kingston FURY Beast RGB DDR5 32GB (2x16GB) 6000MHz", brand: "Kingston", price: 35900, old: 39900, specs: [["Memory Type", "DDR5"], ["Capacity", "32GB (2x16GB)"], ["Speed", "6000 MHz"], ["RGB Lighting", "Yes"]] },
    { name: "Kingston FURY Beast DDR5 16GB (2x8GB) 5200MHz", brand: "Kingston", price: 16500, old: 18500, specs: [["Memory Type", "DDR5"], ["Capacity", "16GB (2x8GB)"], ["Speed", "5200 MHz"], ["Voltage", "1.25V"]] },
    { name: "Kingston FURY Beast DDR5 32GB (2x16GB) 5600MHz", brand: "Kingston", price: 31000, old: 35000, specs: [["Memory Type", "DDR5"], ["Capacity", "32GB (2x16GB)"], ["Speed", "5600 MHz"], ["Intel XMP 3.0", "Yes"]] },
    { name: "Corsair Dominator Platinum RGB DDR4 32GB (2x16GB) 3600MHz", brand: "Corsair", price: 42000, old: 47000, specs: [["Memory Type", "DDR4"], ["Capacity", "32GB (2x16GB)"], ["Speed", "3600 MHz"], ["RGB Lighting", "Capellix RGB"]] },
    { name: "Corsair Vengeance RGB Pro DDR4 32GB (2x16GB) 3200MHz", brand: "Corsair", price: 26500, old: 29500, specs: [["Memory Type", "DDR4"], ["Capacity", "32GB (2x16GB)"], ["Speed", "3200 MHz"], ["RGB Lighting", "Yes"]] },
    { name: "Corsair Vengeance RGB Pro DDR4 16GB (2x8GB) 3600MHz", brand: "Corsair", price: 18999, old: 21999, specs: [["Memory Type", "DDR4"], ["Capacity", "16GB (2x8GB)"], ["Speed", "3600 MHz"], ["Latency", "CL18"]] },
    { name: "Corsair Vengeance LPX DDR4 16GB (2x8GB) 3200MHz", brand: "Corsair", price: 11500, old: 13000, specs: [["Memory Type", "DDR4"], ["Capacity", "16GB (2x8GB)"], ["Speed", "3200 MHz"], ["Heatsink", "Low Profile Vengeance"]] },
    { name: "Corsair Vengeance LPX DDR4 32GB (2x16GB) 3600MHz", brand: "Corsair", price: 23500, old: 26000, specs: [["Memory Type", "DDR4"], ["Capacity", "32GB (2x16GB)"], ["Speed", "3600 MHz"], ["Voltage", "1.35V"]] },
    { name: "Corsair Vengeance LPX DDR4 8GB (1x8GB) 3200MHz", brand: "Corsair", price: 6200, old: 7200, specs: [["Memory Type", "DDR4"], ["Capacity", "8GB (1x8GB)"], ["Speed", "3200 MHz"], ["Latency", "CL16"]] },
    { name: "Kingston FURY Renegade DDR4 32GB (2x16GB) 3600MHz", brand: "Kingston", price: 28500, old: 31500, specs: [["Memory Type", "DDR4"], ["Capacity", "32GB (2x16GB)"], ["Speed", "3600 MHz"], ["Voltage", "1.35V"]] },
    { name: "Kingston FURY Beast RGB DDR4 16GB (2x8GB) 3200MHz", brand: "Kingston", price: 14500, old: 16500, specs: [["Memory Type", "DDR4"], ["Capacity", "16GB (2x8GB)"], ["Speed", "3200 MHz"], ["RGB Lighting", "Yes"]] },
    { name: "Kingston FURY Beast DDR4 32GB (2x16GB) 3200MHz", brand: "Kingston", price: 24000, old: 27000, specs: [["Memory Type", "DDR4"], ["Capacity", "32GB (2x16GB)"], ["Speed", "3200 MHz"], ["Voltage", "1.35V"]] },
    { name: "Kingston FURY Beast DDR4 8GB (1x8GB) 3200MHz", brand: "Kingston", price: 6900, old: 7900, specs: [["Memory Type", "DDR4"], ["Capacity", "8GB (1x8GB)"], ["Speed", "3200 MHz"], ["Heatsink", "Low Profile Beast"]] },
    { name: "Kingston FURY Impact DDR4 SO-DIMM 16GB (1x16GB) 3200MHz", brand: "Kingston", price: 13500, old: 15500, specs: [["Memory Type", "DDR4 Laptop SO-DIMM"], ["Capacity", "16GB (1x16GB)"], ["Speed", "3200 MHz"], ["Plug and Play", "Yes"]] }
  ],
  "SSDs": [
    { name: "Samsung 990 Pro 2TB NVMe M.2 SSD", brand: "Samsung", price: 48900, old: 53900, specs: [["Capacity", "2TB"], ["Interface", "PCIe Gen 4.0 x4, NVMe 2.0"], ["Seq Read Speed", "Up to 7,450 MB/s"], ["Seq Write Speed", "Up to 6,900 MB/s"]] },
    { name: "Samsung 990 Pro 1TB NVMe M.2 SSD", brand: "Samsung", price: 29500, old: 33000, specs: [["Capacity", "1TB"], ["Interface", "PCIe Gen 4.0 x4, NVMe 2.0"], ["Seq Read Speed", "Up to 7,450 MB/s"], ["Seq Write Speed", "Up to 6,900 MB/s"]] },
    { name: "Samsung 990 Pro 4TB NVMe M.2 SSD", brand: "Samsung", price: 88000, old: 95000, specs: [["Capacity", "4TB"], ["Interface", "PCIe Gen 4.0 x4, NVMe 2.0"], ["Seq Read Speed", "Up to 7,450 MB/s"], ["Seq Write Speed", "Up to 6,900 MB/s"]] },
    { name: "Samsung 980 Pro 2TB NVMe M.2 SSD", brand: "Samsung", price: 39500, old: 44000, specs: [["Capacity", "2TB"], ["Interface", "PCIe Gen 4.0 x4, NVMe 1.3c"], ["Seq Read Speed", "Up to 7,000 MB/s"], ["Seq Write Speed", "Up to 5,000 MB/s"]] },
    { name: "Samsung 980 Pro 1TB NVMe M.2 SSD", brand: "Samsung", price: 24999, old: 27999, specs: [["Capacity", "1TB"], ["Interface", "PCIe Gen 4.0 x4, NVMe 1.3c"], ["Seq Read Speed", "Up to 7,000 MB/s"], ["Seq Write Speed", "Up to 5,000 MB/s"]] },
    { name: "Samsung 980 1TB NVMe M.2 SSD", brand: "Samsung", price: 19500, old: 22000, specs: [["Capacity", "1TB"], ["Interface", "PCIe Gen 3.0 x4, NVMe 1.4"], ["Seq Read Speed", "Up to 3,500 MB/s"], ["Seq Write Speed", "Up to 3,000 MB/s"]] },
    { name: "Samsung 980 500GB NVMe M.2 SSD", brand: "Samsung", price: 13500, old: 15500, specs: [["Capacity", "500GB"], ["Interface", "PCIe Gen 3.0 x4, NVMe 1.4"], ["Seq Read Speed", "Up to 3,100 MB/s"], ["Seq Write Speed", "Up to 2,600 MB/s"]] },
    { name: "Samsung 970 EVO Plus 2TB NVMe M.2 SSD", brand: "Samsung", price: 34500, old: 39500, specs: [["Capacity", "2TB"], ["Interface", "PCIe Gen 3.0 x4, NVMe 1.3"], ["Seq Read Speed", "Up to 3,500 MB/s"], ["Seq Write Speed", "Up to 3,300 MB/s"]] },
    { name: "Samsung 970 EVO Plus 1TB NVMe M.2 SSD", brand: "Samsung", price: 18500, old: 21000, specs: [["Capacity", "1TB"], ["Interface", "PCIe Gen 3.0 x4, NVMe 1.3"], ["Seq Read Speed", "Up to 3,500 MB/s"], ["Seq Write Speed", "Up to 3,300 MB/s"]] },
    { name: "Samsung 870 EVO 1TB SATA III 2.5\" SSD", brand: "Samsung", price: 17500, old: 19900, specs: [["Capacity", "1TB"], ["Interface", "SATA 6 Gb/s Interface"], ["Seq Read Speed", "Up to 560 MB/s"], ["Seq Write Speed", "Up to 530 MB/s"]] },
    { name: "Samsung 870 EVO 2TB SATA III 2.5\" SSD", brand: "Samsung", price: 31000, old: 35000, specs: [["Capacity", "2TB"], ["Interface", "SATA 6 Gb/s Interface"], ["Seq Read Speed", "Up to 560 MB/s"], ["Seq Write Speed", "Up to 530 MB/s"]] },
    { name: "Samsung 870 QVO 2TB SATA III 2.5\" SSD", brand: "Samsung", price: 27500, old: 31000, specs: [["Capacity", "2TB"], ["Interface", "SATA 6 Gb/s Interface"], ["Seq Read Speed", "Up to 560 MB/s"], ["Seq Write Speed", "Up to 530 MB/s"]] },
    { name: "Samsung 870 QVO 4TB SATA III 2.5\" SSD", brand: "Samsung", price: 56000, old: 62000, specs: [["Capacity", "4TB"], ["Interface", "SATA 6 Gb/s Interface"], ["Seq Read Speed", "Up to 560 MB/s"], ["Seq Write Speed", "Up to 530 MB/s"]] },
    { name: "Kingston FURY Renegade 2TB NVMe M.2 SSD", brand: "Kingston", price: 42500, old: 47500, specs: [["Capacity", "2TB"], ["Interface", "PCIe Gen 4.0 x4, NVMe"], ["Seq Read Speed", "Up to 7,300 MB/s"], ["Seq Write Speed", "Up to 7,000 MB/s"]] },
    { name: "Kingston FURY Renegade 1TB NVMe M.2 SSD", brand: "Kingston", price: 26500, old: 29500, specs: [["Capacity", "1TB"], ["Interface", "PCIe Gen 4.0 x4, NVMe"], ["Seq Read Speed", "Up to 7,300 MB/s"], ["Seq Write Speed", "Up to 6,000 MB/s"]] },
    { name: "Kingston KC3000 2TB NVMe M.2 SSD", brand: "Kingston", price: 38500, old: 43000, specs: [["Capacity", "2TB"], ["Interface", "PCIe Gen 4.0 x4, NVMe"], ["Seq Read Speed", "Up to 7,000 MB/s"], ["Seq Write Speed", "Up to 7,000 MB/s"]] },
    { name: "Kingston KC3000 1TB NVMe M.2 SSD", brand: "Kingston", price: 23500, old: 26500, specs: [["Capacity", "1TB"], ["Interface", "PCIe Gen 4.0 x4, NVMe"], ["Seq Read Speed", "Up to 7,000 MB/s"], ["Seq Write Speed", "Up to 6,000 MB/s"]] },
    { name: "Kingston NV2 2TB NVMe M.2 SSD", brand: "Kingston", price: 27500, old: 31000, specs: [["Capacity", "2TB"], ["Interface", "PCIe Gen 4.0 x4, NVMe"], ["Seq Read Speed", "Up to 3,500 MB/s"], ["Seq Write Speed", "Up to 2,800 MB/s"]] },
    { name: "Kingston NV2 1TB NVMe M.2 SSD", brand: "Kingston", price: 14999, old: 16999, specs: [["Capacity", "1TB"], ["Interface", "PCIe Gen 4.0 x4, NVMe"], ["Seq Read Speed", "Up to 3,500 MB/s"], ["Seq Write Speed", "Up to 2,100 MB/s"]] },
    { name: "Kingston NV2 500GB NVMe M.2 SSD", brand: "Kingston", price: 9500, old: 11000, specs: [["Capacity", "500GB"], ["Interface", "PCIe Gen 4.0 x4, NVMe"], ["Seq Read Speed", "Up to 3,000 MB/s"], ["Seq Write Speed", "Up to 1,300 MB/s"]] }
  ],
  "Mice": [
    { name: "Logitech G Pro X Superlight 2 Wireless", brand: "Logitech", price: 34999, old: 38999, specs: [["Sensor", "HERO 2"], ["Resolution", "100 - 32,000 DPI"], ["Weight", "60g"], ["Polling Rate", "2000Hz"]] },
    { name: "Logitech G Pro Wireless Gaming Mouse", brand: "Logitech", price: 24500, old: 27500, specs: [["Sensor", "HERO 25K"], ["Resolution", "100 - 25,600 DPI"], ["Weight", "80g"], ["Ambidextrous", "Yes"]] },
    { name: "Logitech G502 X Plus Wireless Gaming Mouse", brand: "Logitech", price: 39500, old: 44000, specs: [["Sensor", "HERO 25K"], ["Buttons", "13 Programmable"], ["Weight", "106g"], ["RGB Lighting", "Lightsync RGB"]] },
    { name: "Logitech G502 Hero High Performance Wired", brand: "Logitech", price: 13999, old: 15999, specs: [["Sensor", "HERO 25K"], ["Buttons", "11 Programmable"], ["Weight", "121g (Adjustable)"], ["Connection", "Wired"]] },
    { name: "Logitech G305 Lightspeed Wireless Mouse", brand: "Logitech", price: 9800, old: 11500, specs: [["Sensor", "HERO"], ["Resolution", "200 - 12,000 DPI"], ["Battery Life", "250 Hours"], ["Weight", "99g"]] },
    { name: "Logitech G203 Lightsync Wired Gaming Mouse", brand: "Logitech", price: 6200, old: 7200, specs: [["Sensor", "Gaming Grade"], ["Resolution", "200 - 8,000 DPI"], ["RGB Lighting", "Yes"], ["Buttons", "6"]] },
    { name: "Razer DeathAdder V3 Pro Wireless Gaming Mouse", brand: "Razer", price: 37500, old: 41500, specs: [["Sensor", "Focus Pro 30K Optical"], ["Weight", "63g"], ["Polling Rate", "Up to 8000Hz"], ["Battery Life", "90 Hours"]] },
    { name: "Razer DeathAdder Essential Wired Gaming Mouse", brand: "Razer", price: 4999, old: 5999, specs: [["Sensor", "6,400 DPI Optical"], ["Buttons", "5 Programmable"], ["Cable Length", "1.8m"], ["Connection", "Wired"]] },
    { name: "Razer Viper V3 Pro Wireless Gaming Mouse", brand: "Razer", price: 39500, old: 43000, specs: [["Sensor", "Focus Pro 35K Optical Gen-2"], ["Weight", "54g"], ["Polling Rate", "True 8000Hz Wireless"], ["Battery Life", "95 Hours"]] },
    { name: "Razer Viper Mini Wired Gaming Mouse", brand: "Razer", price: 7200, old: 8500, specs: [["Sensor", "8,500 DPI Optical"], ["Weight", "61g"], ["RGB Lighting", "Chroma Underglow"], ["Buttons", "6"]] },
    { name: "Razer Basilisk V3 Ergonomic Wired Gaming Mouse", brand: "Razer", price: 16500, old: 18500, specs: [["Sensor", "Focus+ 26K DPI"], ["Scroll Wheel", "HyperScroll Tilt Wheel"], ["RGB Lighting", "Chroma 11-Zone RGB"], ["Buttons", "11"]] },
    { name: "Razer Basilisk V3 Pro Wireless Gaming Mouse", brand: "Razer", price: 42000, old: 46000, specs: [["Sensor", "Focus Pro 30K Optical"], ["Scroll Wheel", "HyperScroll Tilt Wheel"], ["Connectivity", "HyperSpeed Wireless"], ["Buttons", "11"]] },
    { name: "Redragon M711 Cobra Wired Gaming Mouse", brand: "Redragon", price: 4800, old: 5800, specs: [["Sensor", "Pixart P3325"], ["Resolution", "Up to 10,000 DPI"], ["RGB Lighting", "Yes"], ["Buttons", "7 Programmable"]] },
    { name: "Redragon M908 Impact MMO Wired Mouse", brand: "Redragon", price: 7900, old: 9200, specs: [["Sensor", "Pixart PMW3327"], ["Resolution", "Up to 12,400 DPI"], ["Buttons", "18 Programmable"], ["Weight Tuning", "Yes"]] },
    { name: "Redragon M601 Centrophorus Wired Mouse", brand: "Redragon", price: 2999, old: 3800, specs: [["Sensor", "3200 DPI Optical"], ["Buttons", "6"], ["Weight Tuning", "8x 2.4g weights"], ["Color", "Red & Black"]] },
    { name: "Redragon M910 Ranger Wireless Gaming Mouse", brand: "Redragon", price: 5800, old: 6800, specs: [["Sensor", "Pixart PMW3325"], ["Resolution", "Up to 8,000 DPI"], ["Connectivity", "2.4GHz Wireless / Wired"], ["Buttons", "9"]] },
    { name: "HyperX Pulsefire Haste Wireless Gaming Mouse", brand: "HyperX", price: 16500, old: 18900, specs: [["Sensor", "Pixart PAW3335"], ["Weight", "61g (Hex Shell)"], ["Resolution", "Up to 16,000 DPI"], ["Battery Life", "100 Hours"]] },
    { name: "HyperX Pulsefire Haste Wired Gaming Mouse", brand: "HyperX", price: 10500, old: 12500, specs: [["Sensor", "Pixart PAW3335"], ["Weight", "59g"], ["Resolution", "Up to 16,000 DPI"], ["Cable Type", "HyperFlex Cable"]] },
    { name: "HyperX Pulsefire Dart Wireless Gaming Mouse", brand: "HyperX", price: 19500, old: 22000, specs: [["Sensor", "Pixart PMW3389"], ["Resolution", "Up to 16,000 DPI"], ["Qi Wireless Charging", "Yes Support"], ["Battery Life", "50 Hours"]] },
    { name: "HyperX Pulsefire Core Wired Gaming Mouse", brand: "HyperX", price: 6800, old: 7800, specs: [["Sensor", "Pixart PAW3327"], ["Resolution", "Up to 6,200 DPI"], ["RGB Lighting", "Yes"], ["Buttons", "7 Programmable"]] }
  ],
  "Headsets": [
    { name: "HyperX Cloud Alpha Wireless Gaming Headset", brand: "HyperX", price: 44000, old: 49000, specs: [["Driver Size", "50mm Dual Chamber"], ["Battery Life", "Up to 300 Hours"], ["Audio Type", "DTS Headphone:X Spatial"], ["Connectivity", "2.4GHz Wireless"]] },
    { name: "HyperX Cloud Alpha Wired Gaming Headset", brand: "HyperX", price: 21500, old: 24500, specs: [["Driver Size", "50mm Dual Chamber"], ["Frequency Response", "13Hz - 27kHz"], ["Microphone", "Detachable Noise-Canceling"], ["Connection", "3.5mm"]] },
    { name: "HyperX Cloud II Wired Gaming Headset", brand: "HyperX", price: 15999, old: 17999, specs: [["Driver Size", "53mm Dynamic"], ["Sound", "Virtual 7.1 Surround"], ["Frame", "Aluminum Frame"], ["Connection", "USB Sound Card / 3.5mm"]] },
    { name: "HyperX Cloud III Wireless Gaming Headset", brand: "HyperX", price: 34500, old: 38500, specs: [["Driver Size", "53mm Re-engineered"], ["Battery Life", "Up to 120 Hours"], ["Microphone", "10mm Detachable Microphone"], ["Connection", "USB-C Wireless"]] },
    { name: "HyperX Cloud III Wired Gaming Headset", brand: "HyperX", price: 22500, old: 25000, specs: [["Driver Size", "53mm Re-engineered"], ["Connection", "3.5mm / USB-C / USB-A"], ["Microphone", "10mm Detachable"], ["Compatibility", "PC / Console / Mobile"]] },
    { name: "HyperX Cloud Stinger 2 Wired Headset", brand: "HyperX", price: 9500, old: 11000, specs: [["Driver Size", "50mm Directional"], ["Sound", "DTS Headphone:X 2-Year Code"], ["Design", "Swivel-to-mute Microphone"], ["Weight", "275g"]] },
    { name: "Razer BlackShark V2 Pro Wireless (2023 Edition)", brand: "Razer", price: 48900, old: 53900, specs: [["Driver Size", "50mm TriForce Titanium"], ["Microphone", "Super Wideband Mic"], ["Connectivity", "HyperSpeed Wireless / BT / 3.5mm"], ["Battery", "Up to 70 Hours"]] },
    { name: "Razer BlackShark V2 X Multi-Platform Wired", brand: "Razer", price: 12500, old: 14500, specs: [["Driver Size", "50mm TriForce"], ["Sound", "7.1 Surround Sound"], ["Microphone", "HyperClear Cardioid Mic"], ["Weight", "240g Lightweight"]] },
    { name: "Razer Kraken V3 Wired Gaming Headset", brand: "Razer", price: 21000, old: 24000, specs: [["Driver Size", "50mm TriForce Titanium"], ["Sound", "THX Spatial Audio"], ["RGB Lighting", "Chroma RGB"], ["Microphone", "HyperClear Cardioid"]] },
    { name: "Razer Kraken V3 Pro Wireless Haptic Headset", brand: "Razer", price: 46000, old: 51000, specs: [["Driver Size", "50mm TriForce Titanium"], ["Haptic Feedback", "Razer HyperSense Haptics"], ["Connectivity", "Wireless / Wired"], ["RGB Lighting", "Chroma RGB"]] },
    { name: "Razer Barracuda X Wireless Multi-Platform", brand: "Razer", price: 23500, old: 26500, specs: [["Driver Size", "40mm TriForce"], ["Weight", "250g Ultra-light"], ["Connectivity", "USB-C Wireless / Bluetooth / 3.5mm"], ["Battery", "Up to 50 Hours"]] },
    { name: "Logitech G PRO X 2 LIGHTSPEED Wireless", brand: "Logitech", price: 58000, old: 64000, specs: [["Driver Size", "50mm Graphene Drivers"], ["Connectivity", "Lightspeed Wireless / BT / 3.5mm"], ["Battery Life", "Up to 50 Hours"], ["Microphone", "Detachable Cardioid Mic"]] },
    { name: "Logitech G PRO X Gaming Headset Wired", brand: "Logitech", price: 28500, old: 32000, specs: [["Driver Size", "50mm PRO-G"], ["Mic Technology", "Blue VO!CE Mic Technology"], ["Sound", "DTS Headphone:X 2.0"], ["Earpads", "Memory Foam & Leatherette"]] },
    { name: "Logitech G733 LIGHTSPEED Wireless RGB", brand: "Logitech", price: 36000, old: 41000, specs: [["Driver Size", "40mm PRO-G"], ["Weight", "278g Lightweight"], ["Range", "Up to 20m Wireless"], ["RGB Lighting", "Front-Facing Dual-Zone Lightsync"]] },
    { name: "Logitech G435 LIGHTSPEED Wireless Gaming", brand: "Logitech", price: 16500, old: 19500, specs: [["Drivers", "40mm Drivers"], ["Weight", "165g Ultra-lightweight"], ["Microphones", "Dual Embedded Beamforming Mics"], ["Battery Life", "18 Hours"]] },
    { name: "Logitech G335 Wired Gaming Headset", brand: "Logitech", price: 12900, old: 14900, specs: [["Drivers", "40mm Drivers"], ["Design", "Suspension Headband Design"], ["Weight", "240g"], ["Connection", "3.5mm Audio Jack"]] },
    { name: "Corsair Virtuoso RGB Wireless XT High-Fidelity", brand: "Corsair", price: 62000, old: 68000, specs: [["Driver Size", "50mm Neodymium matched"], ["Frequency Range", "10Hz - 40kHz Hi-Res"], ["Connectivity", "Slipstream Wireless / BT / USB / 3.5mm"], ["Microphone", "Broadcast-Grade Detachable Mic"]] },
    { name: "Corsair HS80 RGB Wireless Gaming Headset", brand: "Corsair", price: 38500, old: 42500, specs: [["Driver Size", "50mm Neodymium"], ["Audio Quality", "24-bit/96kHz via USB / Dolby Atmos"], ["Connectivity", "Slipstream Wireless / Wired USB"], ["Microphone", "Broadcast-Grade Flip-to-Mute Mic"]] },
    { name: "Corsair HS65 Surround Wired Gaming Headset", brand: "Corsair", price: 15500, old: 17500, specs: [["Driver Size", "50mm Neodymium"], ["Audio Calibration", "Sonarworks SoundID"], ["Connection", "3.5mm Jack / USB Adapter 7.1"], ["Weight", "273g"]] },
    { name: "Corsair HS55 Wireless Lightweight Headset", brand: "Corsair", price: 22000, old: 25000, specs: [["Driver Size", "50mm Neodymium"], ["Connectivity", "2.4GHz Wireless / Bluetooth"], ["Battery Life", "Up to 24 Hours"], ["Weight", "266g"]] }
  ],
  "Keyboards": [
    { name: "Razer BlackWidow V4 Pro Mechanical", brand: "Razer", price: 28999, old: 32999, specs: [["Switch Type", "Razer Green Tactile Clicky"], ["Layout", "Full Size Layout"], ["RGB Lighting", "Chroma Per-Key & Underglow"], ["Wrist Rest", "Magnetic Plush Wrist Rest"]] },
    { name: "Razer BlackWidow V4 X Mechanical Keyboard", brand: "Razer", price: 19500, old: 22000, specs: [["Switch Type", "Razer Yellow Linear & Silent"], ["Layout", "Full Size"], ["Media Keys", "Multi-function Roller"], ["RGB Lighting", "Razer Chroma RGB"]] },
    { name: "Razer Huntsman V3 Pro TKL Analog Optical", brand: "Razer", price: 44000, old: 49000, specs: [["Switch Type", "Razer Analog Optical Gen-2"], ["Layout", "TKL (Tenkeyless) Layout"], ["Rapid Trigger", "Yes Adjustable Actuation"], ["Keycaps", "Dual-shot PBT Keycaps"]] },
    { name: "Razer Huntsman Mini 60% Optical Gaming Keyboard", brand: "Razer", price: 17500, old: 19900, specs: [["Switch Type", "Razer Linear Optical Gen-2"], ["Layout", "60% Compact Layout"], ["Memory", "Onboard Profile Storage"], ["Connection", "Detachable USB-C"]] },
    { name: "Razer Ornata V3 Mecha-Membrane Gaming Keyboard", brand: "Razer", price: 11500, old: 13500, specs: [["Switch Type", "Razer Mecha-Membrane"], ["Keycaps", "UV-coated Low-profile Keycaps"], ["Wrist Rest", "Magnetic Wrist Rest"], ["Spill Resistant", "Yes Durable Design"]] },
    { name: "Redragon K552 KUMARA Mechanical Keyboard", brand: "Redragon", price: 8599, old: 9999, specs: [["Switch Type", "Outemu Blue (Clicky) Switches"], ["Layout", "TKL (87 Keys) Layout"], ["Backlight", "Custom Adjustable RGB LED"], ["Build", "Metal & ABS Construction"]] },
    { name: "Redragon K551 MITRA Mechanical Gaming Keyboard", brand: "Redragon", price: 9500, old: 11000, specs: [["Switch Type", "Outemu Red (Linear) Switches"], ["Layout", "Full Size (104 Keys) Layout"], ["Keycaps", "Double-shot Injection Keycaps"], ["Backlight", "RGB LED Backlit"]] },
    { name: "Redragon K530 Draconic 60% Wireless Mechanical", brand: "Redragon", price: 12500, old: 14500, specs: [["Switch Type", "Outemu Brown (Tactile) Switches"], ["Layout", "60% Layout (61 Keys)"], ["Connectivity", "Bluetooth 5.0 / Wired USB-C"], ["Battery", "3000mAh Battery"]] },
    { name: "Redragon K582 SURARA Mechanical Gaming Keyboard", brand: "Redragon", price: 10500, old: 12000, specs: [["Switch Type", "Outemu Red Switches"], ["Layout", "Full Size Layout"], ["RGB Lighting", "Dynamic 18 Backlight Modes"], ["Anti-ghosting", "100% Conflict-free Keys"]] },
    { name: "Redragon K617 Fizz 60% Wired Mechanical Keyboard", brand: "Redragon", price: 7900, old: 8900, specs: [["Switch Type", "Linear Red Switches"], ["Layout", "60% Ultra-compact 61 Keys"], ["Color Theme", "Dual-color Keycaps Grey/White"], ["Connection", "Wired Detachable USB-C"]] },
    { name: "Corsair K100 RGB Flagship Mechanical Keyboard", brand: "Corsair", price: 54000, old: 59000, specs: [["Switch Type", "CHERRY MX Speed Silver"], ["Layout", "Full Size with OPX Optical"], ["Control Wheel", "iCUE Control Wheel"], ["Polling Rate", "8000Hz Hyper-polling"]] },
    { name: "Corsair K70 RGB PRO Mechanical Gaming Keyboard", brand: "Corsair", price: 34500, old: 38900, specs: [["Switch Type", "CHERRY MX Red Linear"], ["Layout", "Full Size Layout"], ["Frame", "Aviation-grade Aluminum Frame"], ["Cable", "Detachable Braided USB-C"]] },
    { name: "Corsair K65 RGB MINI 60% Mechanical Keyboard", brand: "Corsair", price: 19500, old: 22000, specs: [["Switch Type", "CHERRY MX Speed Switches"], ["Layout", "60% Compact Layout"], ["Polling Rate", "8000Hz AXON Hyper-processing"], ["Keycaps", "PBT Double-Shot Keycaps"]] },
    { name: "Corsair K55 RGB PRO Dynamic Membrane Keyboard", brand: "Corsair", price: 11000, old: 12500, specs: [["Switch Type", "Quiet & Responsive Membrane"], ["RGB Lighting", "5-Zone Dynamic RGB Backlighting"], ["Macro Keys", "6 Dedicated Macro Keys"], ["IP Rating", "IP42 Dust & Spill Resistance"]] },
    { name: "Corsair K63 Wireless Mechanical Gaming Keyboard", brand: "Corsair", price: 18500, old: 21000, specs: [["Switch Type", "CHERRY MX Red Switches"], ["Layout", "TKL (Tenkeyless) Layout"], ["Connectivity", "1ms 2.4GHz Wireless / BT / Wired"], ["Backlight", "Blue LED Backlighting"]] },
    { name: "Logitech G915 LIGHTSPEED Wireless Mechanical", brand: "Logitech", price: 46000, old: 51000, specs: [["Switch Type", "Low Profile GL Tactile"], ["Connectivity", "Lightspeed Wireless / Bluetooth"], ["RGB Lighting", "Lightsync RGB Per-Key"], ["Battery Life", "30 Hours (100% Brightness)"]] },
    { name: "Logitech G513 Carbon RGB Mechanical Keyboard", brand: "Logitech", price: 29500, old: 33000, specs: [["Switch Type", "GX Brown Tactile Switches"], ["Layout", "Full Size Layout"], ["Wrist Rest", "Memory Foam Palm Rest"], ["Pass-through", "USB 2.0 Pass-through Port"]] },
    { name: "Logitech G413 SE Mechanical Gaming Keyboard", brand: "Logitech", price: 14500, old: 16500, specs: [["Switch Type", "Tactile Mechanical Switches"], ["Layout", "Full Size with PBT Keycaps"], ["Top Case", "Black Brushed Aluminum Top"], ["Backlight", "White LED Backlighting"]] },
    { name: "Logitech G PRO TKL Mechanical Gaming Keyboard", brand: "Logitech", price: 23500, old: 26500, specs: [["Switch Type", "GX Blue Clicky Switches"], ["Layout", "Tenkeyless (TKL) compact"], ["Cable", "Detachable Micro USB Cable"], ["RGB Lighting", "Lightsync RGB"]] },
    { name: "Logitech G213 Prodigy Gaming Keyboard", brand: "Logitech", price: 10500, old: 12500, specs: [["Switch Type", "Mech-Dome Keys (Membrane)"], ["RGB Lighting", "5 RGB Lighting Zones"], ["Spill Resistant", "Yes 60ml Tested"], ["Wrist Rest", "Integrated Palm Rest"]] }
  ],
  "Monitors": [
    { name: "LG UltraGear 27GP850-B 27\" Nano IPS", brand: "LG", price: 95000, old: 105000, specs: [["Screen Size", "27 inches"], ["Panel Type", "Nano IPS Panel"], ["Resolution", "QHD 2560 x 1440"], ["Refresh Rate", "180Hz (O/C) / 1ms GtG"]] },
    { name: "LG UltraGear 34GP950G-B 34\" Curved QHD", brand: "LG", price: 198000, old: 215000, specs: [["Screen Size", "34 inches Curved"], ["Panel Type", "Nano IPS Curved Display"], ["Resolution", "UW-QHD 3440 x 1440"], ["Refresh Rate", "144Hz (180Hz OC) G-Sync"]] },
    { name: "LG UltraGear 24GN600-B 24\" IPS FHD", brand: "LG", price: 39999, old: 44999, specs: [["Screen Size", "24 inches"], ["Panel Type", "IPS Display Panel"], ["Resolution", "FHD 1920 x 1080"], ["Refresh Rate", "144Hz / 1ms GtG"]] },
    { name: "LG UltraGear 32GQ950-B 32\" 4K UHD Nano IPS", brand: "LG", price: 245000, old: 265000, specs: [["Screen Size", "32 inches"], ["Panel Type", "Nano IPS with ATW Polarizer"], ["Resolution", "4K UHD 3840 x 2160"], ["Refresh Rate", "144Hz (160Hz OC) HDMI 2.1"]] },
    { name: "LG UltraGear 45GR95QE-B 45\" Curved OLED", brand: "LG", price: 385000, old: 420000, specs: [["Screen Size", "45 inches 800R Curved"], ["Panel Type", "OLED Display Panel"], ["Resolution", "WQHD 3440 x 1440"], ["Refresh Rate", "240Hz / 0.03ms GtG"]] },
    { name: "Acer Nitro XV272U V3 27\" QHD IPS", brand: "Acer", price: 58000, old: 65000, specs: [["Screen Size", "27 inches"], ["Panel Type", "IPS Panel"], ["Resolution", "QHD 2560 x 1440"], ["Refresh Rate", "180Hz / 0.5ms GtG"]] },
    { name: "Acer Nitro VG271U 27\" QHD Gaming Monitor", brand: "Acer", price: 54000, old: 60000, specs: [["Screen Size", "27 inches"], ["Panel Type", "IPS Display Panel"], ["Resolution", "QHD 2560 x 1440"], ["Refresh Rate", "144Hz / 1ms VRB"]] },
    { name: "Acer Nitro VG240Y M3 23.8\" FHD 180Hz", brand: "Acer", price: 36500, old: 41000, specs: [["Screen Size", "23.8 inches"], ["Panel Type", "IPS Wide View Panel"], ["Resolution", "FHD 1920 x 1080"], ["Refresh Rate", "180Hz / 1ms GtG"]] },
    { name: "Acer Predator XB273U F 27\" QHD 360Hz", brand: "Acer", price: 165000, old: 185000, specs: [["Screen Size", "27 inches Flat"], ["Panel Type", "Rapid IPS Panel"], ["Resolution", "QHD 2560 x 1440"], ["Refresh Rate", "360Hz / 0.5ms GtG"]] },
    { name: "Acer Predator X34 V 34\" Curved OLED", brand: "Acer", price: 285000, old: 310000, specs: [["Screen Size", "34 inches 1800R Curved"], ["Panel Type", "OLED Panel"], ["Resolution", "UW-QHD 3440 x 1440"], ["Refresh Rate", "175Hz / 0.1ms GtG"]] },
    { name: "ASUS ROG Swift PG27AQDM 27\" OLED QHD", brand: "ASUS", price: 265000, old: 290000, specs: [["Screen Size", "27 inches"], ["Panel Type", "OLED Display Panel"], ["Resolution", "QHD 2560 x 1440"], ["Refresh Rate", "240Hz / 0.03ms GtG"]] },
    { name: "ASUS ROG Strix XG27AQ 27\" Fast IPS QHD", brand: "ASUS", price: 110000, old: 125000, specs: [["Screen Size", "27 inches"], ["Panel Type", "Fast IPS Display"], ["Resolution", "QHD 2560 x 1440"], ["Refresh Rate", "170Hz / 1ms GtG"]] },
    { name: "ASUS TUF Gaming VG27AQ 27\" IPS G-Sync", brand: "ASUS", price: 78000, old: 85000, specs: [["Screen Size", "27 inches IPS"], ["Panel Type", "IPS Panel Display"], ["Resolution", "QHD 2560 x 1440"], ["Refresh Rate", "165Hz / 1ms Extreme Low Motion"]] },
    { name: "ASUS TUF Gaming VG259QM 24.5\" FHD 280Hz", brand: "ASUS", price: 68000, old: 75000, specs: [["Screen Size", "24.5 inches"], ["Panel Type", "Fast IPS technology"], ["Resolution", "FHD 1920 x 1080"], ["Refresh Rate", "280Hz OC / 1ms GtG"]] },
    { name: "ASUS TUF Gaming VG28UQL1A 28\" 4K 144Hz", brand: "ASUS", price: 155000, old: 175000, specs: [["Screen Size", "28 inches IPS"], ["Panel Type", "Fast IPS Display Panel"], ["Resolution", "4K UHD 3840 x 2160"], ["Refresh Rate", "144Hz with HDMI 2.1"]] },
    { name: "MSI G271C E2 27\" Curved FHD 170Hz", brand: "MSI", price: 49000, old: 56000, specs: [["Screen Size", "27 inches 1000R Curved"], ["Panel Type", "VA Panel Display"], ["Resolution", "FHD 1920 x 1080"], ["Refresh Rate", "170Hz / 1ms MPRT"]] },
    { name: "MSI Optix G241 24\" IPS FHD 144Hz", brand: "MSI", price: 38500, old: 43500, specs: [["Screen Size", "23.8 inches"], ["Panel Type", "IPS Grade Panel"], ["Resolution", "FHD 1920 x 1080"], ["Refresh Rate", "144Hz / 1ms response time"]] },
    { name: "MSI MAG274QRF-QD 27\" Rapid IPS QHD", brand: "MSI", price: 98000, old: 110000, specs: [["Screen Size", "27 inches"], ["Panel Type", "Rapid IPS with Quantum Dot"], ["Resolution", "QHD 2560 x 1440"], ["Refresh Rate", "165Hz / 1ms GtG"]] },
    { name: "MSI MPG Artymis 343CQR 34\" Curved QHD", brand: "MSI", price: 145000, old: 160000, specs: [["Screen Size", "34 inches Curved 1000R"], ["Panel Type", "VA Panel Display"], ["Resolution", "UW-QHD 3440 x 1440"], ["Refresh Rate", "165Hz / 1ms Response"]] },
    { name: "MSI G321Q 31.5\" QHD IPS 170Hz Monitor", brand: "MSI", price: 82000, old: 90000, specs: [["Screen Size", "31.5 inches Flat"], ["Panel Type", "IPS Display Panel"], ["Resolution", "QHD 2560 x 1440"], ["Refresh Rate", "170Hz / 1ms response time"]] }
  ],
  "PSUs": [
    { name: "Corsair RM1000x 1000W 80+ Gold Modular", brand: "Corsair", price: 42000, old: 46000, specs: [["Total Wattage", "1000W"], ["Efficiency Rating", "80 Plus Gold Certified"], ["Modular Design", "Fully Modular Cables"], ["Cooling Fan", "135mm Magnetic Levitation Fan"]] },
    { name: "Corsair RM850x 850W 80+ Gold Modular", brand: "Corsair", price: 34500, old: 38500, specs: [["Total Wattage", "850W"], ["Efficiency Rating", "80 Plus Gold Certified"], ["Modular Design", "Fully Modular Cables"], ["Capacitors", "100% Japanese 105°C"]] },
    { name: "Corsair RM750x 750W 80+ Gold Modular", brand: "Corsair", price: 29500, old: 33000, specs: [["Total Wattage", "750W"], ["Efficiency Rating", "80 Plus Gold Certified"], ["Modular Design", "Fully Modular Cables"], ["Zero RPM Mode", "Yes Low Noise"]] },
    { name: "Corsair RM650x 650W 80+ Gold Modular", brand: "Corsair", price: 24500, old: 27500, specs: [["Total Wattage", "650W"], ["Efficiency Rating", "80 Plus Gold Certified"], ["Modular Design", "Fully Modular Cables"], ["Form Factor", "ATX Form Factor"]] },
    { name: "Corsair CX750M 750W 80+ Bronze Modular", brand: "Corsair", price: 18500, old: 21000, specs: [["Total Wattage", "750W"], ["Efficiency Rating", "80 Plus Bronze Certified"], ["Modular Design", "Semi-Modular Layout"], ["Cables", "Low-profile Flat Black Cables"]] },
    { name: "Corsair CX650M 650W 80+ Bronze Modular", brand: "Corsair", price: 16999, old: 19999, specs: [["Total Wattage", "650W"], ["Efficiency Rating", "80 Plus Bronze Certified"], ["Modular Design", "Semi-Modular Layout"], ["Fan Size", "120mm Sleeved Bearing"]] },
    { name: "Corsair CV550 550W 80+ Bronze PSU", brand: "Corsair", price: 12500, old: 14500, specs: [["Total Wattage", "550W"], ["Efficiency Rating", "80 Plus Bronze Certified"], ["Modular Design", "Non-Modular Fixed Cables"], ["Fan Size", "120mm Thermally Controlled"]] },
    { name: "Corsair SF750 750W 80+ Platinum SFX", brand: "Corsair", price: 39500, old: 44000, specs: [["Total Wattage", "750W SFX Size"], ["Efficiency Rating", "80 Plus Platinum Certified"], ["Modular Design", "Fully Modular individually sleeved"], ["Form Factor", "SFX Power Supply"]] },
    { name: "Corsair AX1600i 1600W 80+ Titanium Smart", brand: "Corsair", price: 125000, old: 135000, specs: [["Total Wattage", "1600W Flagship"], ["Efficiency Rating", "80 Plus Titanium Certified"], ["Modular Design", "Fully Modular Digital PSU"], ["Transistors", "Gallium Nitride (GaN)"]] },
    { name: "DeepCool PX1000G 1000W 80+ Gold PCIe 5.0", brand: "DeepCool", price: 38500, old: 42500, specs: [["Total Wattage", "1000W ATX 3.0"], ["Efficiency Rating", "80 Plus Gold Certified"], ["Modular Design", "Fully Modular with 12VHPWR"], ["Capacitors", "Full Japanese Electrolytics"]] },
    { name: "DeepCool PX850G 850W 80+ Gold PCIe 5.0", brand: "DeepCool", price: 32500, old: 36000, specs: [["Total Wattage", "850W ATX 3.0"], ["Efficiency Rating", "80 Plus Gold Certified"], ["Modular Design", "Fully Modular with 12VHPWR"], ["Topology", "Active PFC + SRC Full Bridge"]] },
    { name: "DeepCool PM850D 850W 80+ Gold Non-Modular", brand: "DeepCool", price: 23500, old: 26500, specs: [["Total Wattage", "850W"], ["Efficiency Rating", "80 Plus Gold Certified"], ["Modular Design", "Non-Modular Flat Cables"], ["Topology", "Full-bridge LLC + DC-to-DC"]] },
    { name: "DeepCool PM750D 750W 80+ Gold Non-Modular", brand: "DeepCool", price: 19999, old: 22999, specs: [["Total Wattage", "750W"], ["Efficiency Rating", "80 Plus Gold Certified"], ["Modular Design", "Non-Modular Fixed Flat Cables"], ["Topology", "Full-bridge LLC + DC-to-DC"]] },
    { name: "DeepCool PF650 650W 80+ Power Supply", brand: "DeepCool", price: 13500, old: 15500, specs: [["Total Wattage", "650W"], ["Efficiency Rating", "80 Plus Standard Certified"], ["Modular Design", "Non-Modular Black Flat Cables"], ["Fan Size", "120mm Silent Hydraulic Fan"]] },
    { name: "DeepCool PF500 500W 80+ Power Supply", brand: "DeepCool", price: 11000, old: 12500, specs: [["Total Wattage", "500W"], ["Efficiency Rating", "80 Plus Standard Certified"], ["Modular Design", "Non-Modular Fixed Flat Cables"], ["Protections", "OPP / OVP / SCP / UVP"]] },
    { name: "Cooler Master MWE Gold 850 V2 Modular", brand: "Cooler Master", price: 33000, old: 36500, specs: [["Total Wattage", "850W"], ["Efficiency Rating", "80 Plus Gold Certified"], ["Modular Design", "Fully Modular Cables"], ["Operating Temp", "50°C Full Load Capacity"]] },
    { name: "Cooler Master MWE Gold 750 V2 Modular", brand: "Cooler Master", price: 28500, old: 31500, specs: [["Total Wattage", "750W"], ["Efficiency Rating", "80 Plus Gold Certified"], ["Modular Design", "Fully Modular Cables"], ["Fan Type", "120mm HDB Fan"]] },
    { name: "Cooler Master MWE Bronze 650 V2 Power", brand: "Cooler Master", price: 15500, old: 17500, specs: [["Total Wattage", "650W"], ["Efficiency Rating", "80 Plus Bronze Certified"], ["Modular Design", "Non-Modular Fixed Cables"], ["Technology", "DC-to-DC Technology"]] },
    { name: "Cooler Master MWE Bronze 550 V2 Power", brand: "Cooler Master", price: 13000, old: 15000, specs: [["Total Wattage", "550W"], ["Efficiency Rating", "80 Plus Bronze Certified"], ["Modular Design", "Non-Modular Flat Cables"], ["Cabling", "Discrete Black Flat Cables"]] },
    { name: "Cooler Master V850 SFX Gold Modular", brand: "Cooler Master", price: 36500, old: 41000, specs: [["Total Wattage", "850W SFX Form Factor"], ["Efficiency Rating", "80 Plus Gold Certified"], ["Modular Design", "Fully Modular SFX Cables"], ["Bracket", "SFX-to-ATX Bracket Included"]] }
  ],
  "Cases": [
    { name: "NZXT H9 Flow Mid-Tower Dual-Chamber", brand: "NZXT", price: 44000, old: 49000, specs: [["Motherboard Support", "ATX / Micro-ATX / Mini-ITX"], ["Chamber Design", "Dual-Chamber Layout"], ["GPU Clearance", "Up to 435mm"], ["Fans Pre-installed", "4x F120Q Case Version Fans"]] },
    { name: "NZXT H9 Elite Premium Dual-Chamber Case", brand: "NZXT", price: 58000, old: 64000, specs: [["Motherboard Support", "ATX / Micro-ATX / Mini-ITX"], ["Panels", "Tempered Glass Top / Front / Side"], ["Fans Pre-installed", "3x F120 RGB Duo + 1x F120Q"], ["RGB Controller", "RGB & Fan Controller V2 Included"]] },
    { name: "NZXT H7 Flow Mid-Tower Case", brand: "NZXT", price: 32000, old: 36000, specs: [["Motherboard Support", "ATX / Micro-ATX / Mini-ITX"], ["Perforated Panel", "High-airflow Perforated Top/Front"], ["GPU Clearance", "Up to 400mm"], ["Fans Included", "2x F120Q Quiet Airflow Fans"]] },
    { name: "NZXT H7 Elite Premium Mid-Tower Case", brand: "NZXT", price: 46000, old: 51000, specs: [["Motherboard Support", "ATX / Micro-ATX / Mini-ITX"], ["Tempered Glass", "Tempered Glass Front & Side Panels"], ["Fans Included", "3x F120 RGB Core + 1x F120Q"], ["RGB Control", "Integrated RGB Controller"]] },
    { name: "NZXT H5 Flow Compact Mid-Tower Case", brand: "NZXT", price: 22999, old: 25999, specs: [["Motherboard Support", "ATX / Micro-ATX / Mini-ITX"], ["Airflow GPU", "Dedicated Bottom-intake GPU Fan"], ["GPU Clearance", "Up to 365mm"], ["Fans Included", "2x F120Q (1x Rear, 1x Bottom)"]] },
    { name: "NZXT H5 Elite Compact Mid-Tower Case", brand: "NZXT", price: 32500, old: 36500, specs: [["Motherboard Support", "ATX / Micro-ATX / Mini-ITX"], ["Glass Front Panel", "Tempered Glass Front and Side"], ["Fans Included", "2x F120 RGB + 1x F120Q Bottom"], ["RGB Lighting", "Built-in RGB lighting setup"]] },
    { name: "NZXT H1 V2 Small Form Factor ITX Case", brand: "NZXT", price: 92000, old: 99000, specs: [["Motherboard Support", "Mini-ITX Only"], ["Power Supply", "Built-in 750W SFX-L 80+ Gold"], ["AIO Cooler", "Built-in 140mm Liquid Cooler"], ["PCIe Riser", "PCIe 4.0 Riser Card Included"]] },
    { name: "Corsair 4000D Airflow Mid-Tower ATX", brand: "Corsair", price: 24500, old: 27500, specs: [["Motherboard Support", "ATX / Micro-ATX / Mini-ITX"], ["Front Panel", "High-airflow Perforated Front"], ["GPU Clearance", "Up to 360mm"], ["Fans Included", "2x 120mm AirGuide Fans"]] },
    { name: "Corsair 5000D Airflow Mid-Tower ATX", brand: "Corsair", price: 38500, old: 43000, specs: [["Motherboard Support", "ATX / Micro-ATX / Mini-ITX"], ["Cable Management", "RapidRoute Cable System"], ["GPU Clearance", "Up to 400mm"], ["Fans Included", "2x 120mm AirGuide High Airflow"]] },
    { name: "Corsair iCUE Link 3500X RGB Mid-Tower", brand: "Corsair", price: 36500, old: 41000, specs: [["Motherboard Support", "ATX / mATX / Mini-ITX"], ["Glass Design", "Wrap-around Tempered Glass Front/Side"], ["iCUE Link Support", "Yes Smart Connector Ready"], ["Fans Pre-installed", "3x RX120 RGB iCUE Link Fans"]] },
    { name: "Corsair 7000D AIRFLOW Full-Tower ATX", brand: "Corsair", price: 65000, old: 72000, specs: [["Motherboard Support", "E-ATX / ATX / mATX / ITX"], ["Storage Support", "Up to 6x 3.5\" HDDs + 4x 2.5\" SSDs"], ["Cooling Capacity", "Up to 3x 360mm or 2x 420mm rads"], ["Fans Included", "3x 140mm AirGuide Fans"]] },
    { name: "Corsair 2000D RGB Airflow ITX Case", brand: "Corsair", price: 32000, old: 36000, specs: [["Motherboard Support", "Mini-ITX Only"], ["Form Factor", "Vertical Small Form Factor (SFF)"], ["GPU Clearance", "Up to 365mm (Triple Slot)"], ["Fans Included", "3x SP120 RGB ELITE PWM Fans"]] },
    { name: "MSI MAG FORGE 112R Mid-Tower Case", brand: "MSI", price: 16500, old: 18500, specs: [["Motherboard Support", "ATX / Micro-ATX / Mini-ITX"], ["Tempered Glass", "4mm Tempered Glass Tool-less side"], ["Fans Included", "4x 120mm ARGB Fans Included"], ["ARGB Hub", "1-to-6 ARGB Control Board"]] },
    { name: "MSI MPG GUNGNIR 110R Mid-Tower Case", brand: "MSI", price: 26500, old: 29500, specs: [["Motherboard Support", "ATX / Micro-ATX / Mini-ITX"], ["Front I/O Panel", "USB 3.2 Gen 2 Type-C ready"], ["Fans Included", "4x ARGB Case Fans Pre-installed"], ["Front Glass Panel", "Tempered Glass Split Front Design"]] },
    { name: "MSI MEG TRESPASS 950X Full-Tower Case", brand: "MSI", price: 88000, old: 98000, specs: [["Motherboard Support", "E-ATX / ATX / mATX / ITX"], ["Build Quality", "Heavy-duty Aluminum Panels"], ["GPU Vertical Mount", "Yes Riser Bracket Included"], ["Dust Filters", "Magnetic top / front / bottom"]] },
    { name: "ASUS ROG Strix Helios GX601 Mid-Tower", brand: "ASUS", price: 85000, old: 95000, specs: [["Motherboard Support", "E-ATX / ATX / mATX / Mini-ITX"], ["Carrying Handles", "Woven-fabric Carrying Handles (50kg)"], ["GPU Mount", "Three-way Graphics Card Support"], ["RGB Sync", "Addressable Aura Sync Front Panel RGB"]] },
    { name: "ASUS TUF Gaming GT502 Dual-Chamber Case", brand: "ASUS", price: 42000, old: 47000, specs: [["Motherboard Support", "ATX / Micro-ATX / Mini-ITX"], ["Chamber Design", "Dual-Chamber Thermal Layout"], ["Glass Panels", "Front & Side Tempered Glass Panels"], ["Max Radiator", "Up to 360mm radiator support"]] },
    { name: "ASUS Prime AP201 MicroATX Mesh Case", brand: "ASUS", price: 18500, old: 21000, specs: [["Motherboard Support", "Micro-ATX / Mini-ITX"], ["Mesh Panels", "Quasi-Filter Mesh Panels for Airflow"], ["GPU Clearance", "Up to 338mm"], ["I/O Ports", "USB Type-C 10Gbps Front Port"]] },
    { name: "Cooler Master MasterBox TD500 Mesh V2", brand: "Cooler Master", price: 23500, old: 26500, specs: [["Motherboard Support", "E-ATX / ATX / mATX / ITX"], ["Front Panel", "Fine Mesh Polygonal Panel"], ["Fans Included", "3x 120mm CF120 ARGB Fans"], ["Removable Cover", "Removable PSU Shroud Top"]] },
    { name: "Cooler Master MasterFrame 700 Open-Air", brand: "Cooler Master", price: 68000, old: 75000, specs: [["Motherboard Support", "SSI-EEB / E-ATX / ATX / ITX"], ["Frame Modes", "Test Bench Mode / Open Air Case Mode"], ["Wings Design", "Heavy Duty Variable Friction Wings"], ["Radiator Support", "Up to 3x 360mm or 1x 420mm"]] }
  ],
  "Coolers": [
    { name: "Cooler Master Hyper 212 Halo Black CPU Air Cooler", brand: "Cooler Master", price: 8500, old: 9999, specs: [["Cooler Type", "Air Cooler"], ["Heatpipes", "4 Heatpipes Direct Contact"], ["Fan Size", "120mm Halo ARGB Fan"], ["Socket Support", "LGA1700 / AM5 / AM4"]] },
    { name: "Cooler Master Hyper 212 Spectrum V3", brand: "Cooler Master", price: 6999, old: 7999, specs: [["Cooler Type", "Air Cooler"], ["Fan Speed", "650 - 1750 RPM"], ["RGB Lighting", "Auto-RGB Spectrum Fan"], ["Heatsink Material", "Aluminum Fins / Copper Pipe"]] },
    { name: "Cooler Master MasterLiquid 360L Core AIO", brand: "Cooler Master", price: 23500, old: 26500, specs: [["Cooler Type", "360mm AIO Liquid Cooler"], ["Pump Design", "Dual Chamber Gen-S Pump"], ["Radiator Surface", "Expanded Radiator Surface Area"], ["Fans Included", "3x 120mm ARGB Fans"]] },
    { name: "Cooler Master MasterLiquid 240L Core AIO", brand: "Cooler Master", price: 18500, old: 21500, specs: [["Cooler Type", "240mm AIO Liquid Cooler"], ["Pump Design", "Dual Chamber Gen-S Pump"], ["Radiator Size", "277 x 119.6 x 27.2 mm"], ["Fans Included", "2x 120mm ARGB Fans"]] },
    { name: "Cooler Master MasterLiquid PL360 Flux Premium", brand: "Cooler Master", price: 38500, old: 43000, specs: [["Cooler Type", "360mm Premium AIO"], ["Pump Speed", "High-speed Dual Chamber Pump"], ["Fans Included", "3x 120mm Flux Series ARGB Fans"], ["Fan Airflow", "72.37 CFM High Flow"]] },
    { name: "NZXT Kraken 360 RGB AIO Liquid Cooler LCD", brand: "NZXT", price: 58000, old: 64000, specs: [["Cooler Type", "360mm AIO with LCD Screen"], ["Display Size", "1.54\" Square LCD Display"], ["Pump Manufacturer", "Asetek Pump Gen 7"], ["Fans Included", "3x F120 RGB Core Fans"]] },
    { name: "NZXT Kraken 240 RGB AIO Liquid Cooler LCD", brand: "NZXT", price: 44000, old: 49000, specs: [["Cooler Type", "240mm AIO with LCD Screen"], ["Display Specs", "240x240 Resolution / 300 nits"], ["Pump Speed", "800 - 2,800 RPM"], ["Fans Included", "2x F120 RGB Core Fans"]] },
    { name: "NZXT Kraken Elite 360 RGB Liquid Cooler", brand: "NZXT", price: 78000, old: 85000, specs: [["Cooler Type", "360mm Elite AIO LCD"], ["Display Size", "2.36\" Wide Angle Custom TFT LCD"], ["Display Res", "640x640 Resolution / 60Hz"], ["Fans Included", "3x F120 RGB Core High-Static"]] },
    { name: "NZXT T120 RGB CPU Air Cooler", brand: "NZXT", price: 12500, old: 14500, specs: [["Cooler Type", "Air Cooler"], ["Heatpipes", "4x Direct Contact Copper Pipes"], ["Fan Size", "120mm F120 RGB Fan"], ["Socket Compatibility", "LGA1700 / AM5 / AM4"]] },
    { name: "Corsair iCUE Link H150i RGB 360mm AIO", brand: "Corsair", price: 59000, old: 65000, specs: [["Cooler Type", "360mm Smart AIO Liquid Cooler"], ["Connection Tech", "iCUE Link Smart Cable System"], ["Pump Plate", "Split-flow Copper Cold Plate"], ["Fans Included", "3x QX120 RGB Magnetic Dome Fans"]] },
    { name: "Corsair iCUE H100i Elite Capellix XT 240mm", brand: "Corsair", price: 34500, old: 38500, specs: [["Cooler Type", "240mm Liquid AIO"], ["Pump LEDs", "33 Ultra-bright Capellix RGB LEDs"], ["Fans Included", "2x AF120 RGB ELITE PWM Fans"], ["Radiator Size", "240mm Performance"]] },
    { name: "Corsair iCUE H150i Elite LCD XT 360mm AIO", brand: "Corsair", price: 68000, old: 75000, specs: [["Cooler Type", "360mm LCD AIO Liquid Cooler"], ["LCD Screen", "2.1\" IPS LCD Screen Custom GIF"], ["Fans Included", "3x AF120 RGB ELITE Fans"], ["Fan Controller", "iCUE Commander CORE Included"]] },
    { name: "Corsair A500 Dual Fan CPU Air Cooler", brand: "Corsair", price: 18500, old: 21500, specs: [["Cooler Type", "Dual Fan Tower Air Cooler"], ["Fans", "2x ML120 Magnetic Levitation Fans"], ["Heatpipes", "4x Direct Contact Copper Heat Pipes"], ["Slide-and-Lock", "Adjustable Fan Height Mount"]] },
    { name: "DeepCool AK620 High-Performance Dual-Tower", brand: "DeepCool", price: 17500, old: 19500, specs: [["Cooler Type", "Dual-Tower Air Cooler"], ["Heatpipes", "6x Copper Heatpipes"], ["Fans Included", "2x 120mm PWM Fluid Dynamic Fans"], ["Heat Dissipation", "Up to 260W TDP capacity"]] },
    { name: "DeepCool AK400 Performance CPU Air Cooler", brand: "DeepCool", price: 7900, old: 8900, specs: [["Cooler Type", "Single-Tower Air Cooler"], ["Heatpipes", "4x Direct Touch Copper Heatpipes"], ["Fan Size", "120mm FDB Fan"], ["Max TDP", "220W TDP support"]] },
    { name: "DeepCool AK500 High-Performance Single-Tower", brand: "DeepCool", price: 13500, old: 15500, specs: [["Cooler Type", "Offset Single-Tower Air Cooler"], ["Heatpipes", "5x 6mm Copper Heatpipes"], ["Fan Size", "120mm FK120 FDB Fan"], ["RAM Clearance", "100% RAM Compatibility Design"]] },
    { name: "DeepCool LT720 360mm Premium Liquid AIO", brand: "DeepCool", price: 29500, old: 33000, specs: [["Cooler Type", "360mm Liquid Cooler AIO"], ["Pump Cap", "Infinity Mirror Multidimensional Cap"], ["Pump Gen", "High-performance Gen 4 Pump"], ["Fans Included", "3x FK120 High-speed Fans"]] },
    { name: "DeepCool LT520 240mm Premium Liquid AIO", brand: "DeepCool", price: 23500, old: 26000, specs: [["Cooler Type", "240mm Liquid Cooler AIO"], ["Pump Design", "Gen 4 Pump Infinity Mirror Cap"], ["Fans Included", "2x FK120 FDB High-Static Fans"], ["Radiator Size", "240mm Performance"]] },
    { name: "DeepCool LS720 360mm ARGB AIO Liquid Cooler", brand: "DeepCool", price: 26500, old: 29500, specs: [["Cooler Type", "360mm Liquid AIO"], ["Pump Tech", "Gen 4 Pump Custom Logo Plate"], ["Fans Included", "3x FC120 Daisy-chain ARGB Fans"], ["RGB Control", "5V 3-pin Motherboard Sync"]] },
    { name: "DeepCool Assassin IV Premium Dual-Tower Cooler", brand: "DeepCool", price: 24500, old: 27500, specs: [["Cooler Type", "Premium Dual-Tower Air Cooler"], ["Fans", "1x 140mm FDB + 1x 120mm FDB Fans"], ["TDP Rating", "Up to 280W TDP cooling capacity"], ["Modes", "Silent / Performance Dual Mode Switch"]] }
  ],
  "Laptops": [
    { name: "ASUS ROG Strix G16 RTX 4070 Gaming Laptop", brand: "ASUS", price: 499000, old: 549000, specs: [["CPU", "Intel Core i9-13980HX"], ["GPU", "NVIDIA RTX 4070 8GB"], ["RAM", "32GB DDR5"], ["Storage", "1TB Gen4 NVMe SSD"]] },
    { name: "ASUS ROG Zephyrus G14 OLED RTX 4060", brand: "ASUS", price: 445000, old: 485000, specs: [["CPU", "AMD Ryzen 9 8945HS"], ["GPU", "NVIDIA RTX 4060 8GB"], ["Screen", "14\" 2.8K 120Hz ROG Nebula OLED"], ["Weight", "1.5kg Ultra-portable"]] },
    { name: "ASUS ROG Zephyrus G16 OLED RTX 4080", brand: "ASUS", price: 785000, old: 835000, specs: [["CPU", "Intel Core Ultra 9 185H"], ["GPU", "NVIDIA RTX 4080 12GB"], ["Screen", "16\" 2.5K 240Hz OLED Display"], ["RAM", "32GB LPDDR5X"]] },
    { name: "ASUS TUF Gaming A15 RTX 4050 Laptop", brand: "ASUS", price: 275000, old: 299000, specs: [["CPU", "AMD Ryzen 7 7735HS"], ["GPU", "NVIDIA RTX 4050 6GB"], ["Screen", "15.6\" FHD 144Hz IPS"], ["Battery", "90Wh Battery"]] },
    { name: "ASUS ROG Strix SCAR 18 RTX 4090 Gaming", brand: "ASUS", price: 980000, old: 1050000, specs: [["CPU", "Intel Core i9-14900HX"], ["GPU", "NVIDIA RTX 4090 16GB"], ["Screen", "18\" QHD+ 240Hz Nebula HDR Mini LED"], ["RAM", "64GB DDR5 (2x32GB)"]] },
    { name: "MSI Raider GE78 HX RTX 4080 Gaming Laptop", brand: "MSI", price: 745000, old: 799000, specs: [["CPU", "Intel Core i9-13980HX"], ["GPU", "NVIDIA RTX 4080 12GB"], ["Screen", "17\" QHD+ 240Hz 100% DCI-P3"], ["RAM", "32GB DDR5"]] },
    { name: "MSI Stealth 16 AI Studio RTX 4070 Laptop", brand: "MSI", price: 625000, old: 675000, specs: [["CPU", "Intel Core Ultra 9 185H"], ["GPU", "NVIDIA RTX 4070 8GB Studio"], ["Screen", "16\" UHD+ 120Hz IPS-Level"], ["Body", "Magnesium-Aluminum Alloy"]] },
    { name: "MSI Pulse 15 RTX 4060 Gaming Laptop", brand: "MSI", price: 345000, old: 375000, specs: [["CPU", "Intel Core i7-13700H"], ["GPU", "NVIDIA RTX 4060 8GB"], ["Screen", "15.6\" QHD 240Hz 100% sRGB"], ["Keyboard", "4-Zone RGB Gaming Keyboard"]] },
    { name: "MSI Cyborg 15 RTX 4050 Gaming Laptop", brand: "MSI", price: 235000, old: 259000, specs: [["CPU", "Intel Core i7-12650H"], ["GPU", "NVIDIA RTX 4050 6GB"], ["Screen", "15.6\" FHD 144Hz IPS"], ["Body", "Translucent keyboard & bottom"]] },
    { name: "MSI Titan 18 HX Flagship RTX 4090 Laptop", brand: "MSI", price: 1250000, old: 1350000, specs: [["CPU", "Intel Core i9-14900HX"], ["GPU", "NVIDIA RTX 4090 16GB"], ["Screen", "18\" 4K Mini LED 120Hz"], ["RAM", "128GB DDR5 (4x32GB)"]] },
    { name: "Razer Blade 14 RTX 4070 Gaming Laptop", brand: "Razer", price: 595000, old: 645000, specs: [["CPU", "AMD Ryzen 9 7940HS"], ["GPU", "NVIDIA RTX 4070 8GB"], ["Screen", "14\" QHD+ 240Hz Display"], ["Body", "CNC Aluminum Anodized Black"]] },
    { name: "Razer Blade 16 Dual OLED RTX 4090 Laptop", brand: "Razer", price: 950000, old: 999000, specs: [["CPU", "Intel Core i9-14900HX"], ["GPU", "NVIDIA RTX 4090 16GB"], ["Screen", "16\" Dual-Mode Mini LED / OLED"], ["RAM", "64GB DDR5"]] },
    { name: "Razer Blade 18 4K 200Hz RTX 4080 Laptop", brand: "Razer", price: 890000, old: 950000, specs: [["CPU", "Intel Core i9-14900HX"], ["GPU", "NVIDIA RTX 4080 12GB"], ["Screen", "18\" QHD+ 300Hz / 4K 200Hz"], ["Audio", "6 Speaker Array Spatial"]] },
    { name: "Razer Blade Stealth 13 Ultrabook Gaming", brand: "Razer", price: 195000, old: 220000, specs: [["CPU", "Intel Core i7-1165G7"], ["GPU", "NVIDIA GTX 1650 Ti Max-Q"], ["Screen", "13.3\" FHD 120Hz Matte Matte"], ["Weight", "1.4kg Portable"]] },
    { name: "Acer Predator Helios 16 RTX 4070 Laptop", brand: "Acer", price: 465000, old: 510000, specs: [["CPU", "Intel Core i9-13900HX"], ["GPU", "NVIDIA RTX 4070 8GB"], ["Screen", "16\" WQXGA 240Hz IPS Panel"], ["Cooling", "5th Gen AeroBlade 3D Fans"]] },
    { name: "Acer Predator Triton 17X RTX 4090 Laptop", brand: "Acer", price: 920000, old: 999000, specs: [["CPU", "Intel Core i9-13900HX"], ["GPU", "NVIDIA RTX 4090 16GB"], ["Screen", "17\" WQXGA 250Hz Mini LED"], ["RAM", "64GB DDR5"]] },
    { name: "Acer Nitro 5 RTX 3050 Budget Gaming Laptop", brand: "Acer", price: 175000, old: 195000, specs: [["CPU", "Intel Core i5-12500H"], ["GPU", "NVIDIA RTX 3050 4GB"], ["Screen", "15.6\" FHD 144Hz IPS"], ["Storage", "512GB PCIe NVMe SSD"]] },
    { name: "Acer Nitro 16 RTX 4060 Gaming Laptop", brand: "Acer", price: 310000, old: 345000, specs: [["CPU", "AMD Ryzen 7 7735HS"], ["GPU", "NVIDIA RTX 4060 8GB"], ["Screen", "16\" WQXGA 165Hz IPS"], ["Liquid Metal", "Liquid Metal CPU Thermal Paste"]] },
    { name: "ASUS Zenbook Pro 14 Duo OLED Creator Laptop", brand: "ASUS", price: 495000, old: 535000, specs: [["CPU", "Intel Core i9-13900H"], ["GPU", "NVIDIA RTX 4060 8GB Studio"], ["Dual Screen", "ScreenPad Plus 12.7\" secondary"], ["Main Screen", "14.5\" 2.8K 120Hz OLED Touch"]] },
    { name: "MSI Creator Z17 HX Studio Creator Laptop", brand: "MSI", price: 585000, old: 635000, specs: [["CPU", "Intel Core i9-13980HX"], ["GPU", "NVIDIA RTX 4070 8GB Studio"], ["Screen", "17\" QHD+ 165Hz Pen Touch Screen"], ["Stylus Support", "MSI Pen 2 included"]] }
  ]
};

// Create the seed data list
const finalSeedList = [];

for (const cat of categories) {
  const list = productsData[cat];
  if (!list || list.length < 20) {
    console.error(`Error: Category ${cat} has less than 20 items: ${list ? list.length : 0}`);
    process.exit(1);
  }
  
  for (let i = 0; i < 20; i++) {
    const item = list[i];
    
    // Create random review score & custom specification details
    const rating = getRandomRating();
    const formattedSpecs = item.specs.map(s => ({
      label: s[0],
      value: s[1]
    }));
    
    // Make sure we have category and brand matching specs as well
    formattedSpecs.unshift({ label: "Category", value: cat });
    formattedSpecs.unshift({ label: "Brand", value: item.brand });
    
    // Generate unique description
    const description = `The premium ${item.name} from ${item.brand} is engineered to deliver exceptional performance and unmatched reliability. Designed specifically for advanced ${cat.toLowerCase()}-based setups, it features top-tier engineering, optimized specifications, and the signature durability of ${item.brand}. Ideal for gamers, content creators, and professionals demanding peak system efficiency.`;
    
    finalSeedList.push({
      name: item.name,
      brand: item.brand,
      cat: cat,
      price: item.price,
      old: item.old,
      rating: rating,
      img: "",
      images: [],
      inStock: Math.random() > 0.15, // 85% in stock
      description: description,
      specs: formattedSpecs
    });
  }
}

// Write the JSON array to a file
fs.writeFileSync('products_seed.json', JSON.stringify(finalSeedList, null, 2));
console.log(`Successfully generated ${finalSeedList.length} products to products_seed.json`);
