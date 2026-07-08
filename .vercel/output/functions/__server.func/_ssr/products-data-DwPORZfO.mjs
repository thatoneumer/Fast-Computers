const gpu = "/assets/gpu-CMRpsw1G.jpg";
const mobo = "/assets/mobo-CRNaPkF3.jpg";
const keyboardImg = "/assets/keyboard-BL6ZwiXw.jpg";
const monitor = "/assets/monitor-DdWGgIQI.jpg";
const headset = "/assets/headset-Dj3MB19u.jpg";
const mouse = "/assets/mouse-BpeLMuJu.jpg";
const laptop = "/assets/laptop-65uVUA_c.jpg";
const products = [
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
  { id: "12", name: "Cooler Master Hyper 212 Cooler", brand: "Cooler Master", cat: "Coolers", price: 6999, old: 7999, rating: 73, inStock: false, img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80" },
  { id: "13", name: "Intel Core i5-12400F Processor", brand: "Intel", cat: "Processors", price: 32999, old: 35999, rating: 41, inStock: true, img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" },
  { id: "14", name: "Zotac RTX 3060 Twin Edge 12GB", brand: "Zotac", cat: "Graphics Cards", price: 129999, old: 139999, rating: 29, inStock: true, img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80" },
  { id: "15", name: "Kingston NV2 1TB M.2 NVMe SSD", brand: "Kingston", cat: "SSDs", price: 14999, old: 16999, rating: 31, inStock: true, img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80" },
  { id: "16", name: "DeepCool PM750D 750W 80+ Gold PSU", brand: "DeepCool", cat: "PSUs", price: 19999, old: 22999, rating: 12, inStock: false, img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80" },
  { id: "17", name: "Razer BlackWidow V4 Pro Mechanical", brand: "Razer", cat: "Keyboards", price: 28999, old: 32999, rating: 48, inStock: true, img: keyboardImg },
  { id: "18", name: 'LG UltraGear 34" QHD 165Hz Curved', brand: "LG", cat: "Monitors", price: 189e3, old: 21e4, rating: 56, inStock: true, img: monitor },
  { id: "19", name: "HyperX Cloud III Wireless Headset", brand: "HyperX", cat: "Headsets", price: 22500, old: 25e3, rating: 67, inStock: true, img: headset },
  { id: "20", name: "Logitech G Pro X Superlight 2", brand: "Logitech", cat: "Mice", price: 34999, old: 38999, rating: 89, inStock: true, img: mouse },
  { id: "21", name: "ASUS ROG Strix G16 RTX 4070", brand: "ASUS", cat: "Laptops", price: 499e3, old: 549e3, rating: 34, inStock: true, img: laptop },
  { id: "22", name: "NVIDIA RTX 4080 Super Founders", brand: "NVIDIA", cat: "Graphics Cards", price: 349999, old: 379999, rating: 28, inStock: true, img: gpu }
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
