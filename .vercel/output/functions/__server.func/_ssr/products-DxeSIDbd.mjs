import { c as createServerRpc, a as connectToDatabase } from "./mongodb-BSkqG-vF.mjs";
import { c as createServerFn } from "./server-Y9zJBdke.mjs";
import { l as libExports } from "../_libs/mongodb.mjs";
import require$$1 from "crypto";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "timers/promises";
import "timers";
import "fs";
import "http";
import "process";
import "events";
import "dns";
import "url";
import "zlib";
import "net";
import "fs/promises";
import "tls";
import "child_process";
import "../_libs/bson.mjs";
import "../_libs/mongodb-connection-string-url.mjs";
import "../_libs/whatwg-url.mjs";
import "../_libs/webidl-conversions.mjs";
import "../_libs/tr46.mjs";
import "../_libs/punycode.mjs";
import "../_libs/mongodb-js__saslprep.mjs";
import "../_libs/sparse-bitfield.mjs";
import "../_libs/memory-pager.mjs";
const seedData = /* @__PURE__ */ JSON.parse(`[{"name":"ASUS ROG Strix GeForce RTX 4090 OC 24GB","brand":"ASUS","cat":"Graphics Cards","price":689000,"old":720000,"rating":4.7,"img":"https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The ASUS ROG Strix GeForce RTX 4090 OC 24GB is a high-performance graphics card built for extreme gaming and content creation. Featuring 24GB GDDR6X VRAM and advanced GPU architecture, it delivers exceptional performance in 4K gaming, real-time ray tracing, and AI-accelerated workflows. ASUS's advanced thermal design keeps temperatures in check even during the most intense sessions.","specs":[{"label":"GPU","value":"RTX 4090"},{"label":"VRAM","value":"24GB GDDR6X"},{"label":"Boost Clock","value":"2640 MHz"},{"label":"CUDA Cores","value":"16384"},{"label":"Interface","value":"384-bit"},{"label":"Power TDP","value":"450W"}],"createdAt":"2026-07-08T19:14:32.722Z"},{"name":"MSI GeForce RTX 4080 Super Gaming X Trio 16GB","brand":"MSI","cat":"Graphics Cards","price":365000,"old":390000,"rating":5,"img":"https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The MSI GeForce RTX 4080 Super Gaming X Trio 16GB is a high-performance graphics card built for extreme gaming and content creation. Featuring 16GB GDDR6X VRAM and advanced GPU architecture, it delivers exceptional performance in 4K gaming, real-time ray tracing, and AI-accelerated workflows. MSI's advanced thermal design keeps temperatures in check even during the most intense sessions.","specs":[{"label":"GPU","value":"RTX 4080 Super"},{"label":"VRAM","value":"16GB GDDR6X"},{"label":"Boost Clock","value":"2610 MHz"},{"label":"CUDA Cores","value":"10240"},{"label":"Interface","value":"256-bit"},{"label":"Fans","value":"Triple Torx Fan"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"NVIDIA GeForce RTX 4070 Ti Super Founders Edition","brand":"NVIDIA","cat":"Graphics Cards","price":289000,"old":310000,"rating":4.8,"img":"https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The NVIDIA GeForce RTX 4070 Ti Super Founders Edition is a high-performance graphics card built for extreme gaming and content creation. Featuring 16GB GDDR6X VRAM and advanced GPU architecture, it delivers exceptional performance in 4K gaming, real-time ray tracing, and AI-accelerated workflows. NVIDIA's advanced thermal design keeps temperatures in check even during the most intense sessions.","specs":[{"label":"GPU","value":"RTX 4070 Ti Super"},{"label":"VRAM","value":"16GB GDDR6X"},{"label":"Boost Clock","value":"2610 MHz"},{"label":"CUDA Cores","value":"8448"},{"label":"Interface","value":"256-bit"},{"label":"Power","value":"16-pin Connector"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Zotac Gaming GeForce RTX 4070 Super AMP Airo","brand":"Zotac","cat":"Graphics Cards","price":215000,"old":235000,"rating":4.2,"img":"https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Zotac Gaming GeForce RTX 4070 Super AMP Airo is a high-performance graphics card built for extreme gaming and content creation. Featuring 12GB GDDR6X VRAM and advanced GPU architecture, it delivers exceptional performance in 4K gaming, real-time ray tracing, and AI-accelerated workflows. Zotac's advanced thermal design keeps temperatures in check even during the most intense sessions.","specs":[{"label":"GPU","value":"RTX 4070 Super"},{"label":"VRAM","value":"12GB GDDR6X"},{"label":"Boost Clock","value":"2550 MHz"},{"label":"CUDA Cores","value":"7168"},{"label":"RGB","value":"Spectra 2.0"},{"label":"Interface","value":"192-bit"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"AMD Radeon RX 7900 XTX Reference Card 24GB","brand":"AMD","cat":"Graphics Cards","price":345000,"old":375000,"rating":4,"img":"https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The AMD Radeon RX 7900 XTX Reference Card 24GB is a high-performance graphics card built for extreme gaming and content creation. Featuring 24GB GDDR6 VRAM and advanced GPU architecture, it delivers exceptional performance in 4K gaming, real-time ray tracing, and AI-accelerated workflows. AMD's advanced thermal design keeps temperatures in check even during the most intense sessions.","specs":[{"label":"GPU","value":"Radeon RX 7900 XTX"},{"label":"VRAM","value":"24GB GDDR6"},{"label":"Compute Units","value":"96"},{"label":"Interface","value":"384-bit"},{"label":"Infinity Cache","value":"96MB"},{"label":"TDP","value":"355W"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Gigabyte Aorus Master GeForce RTX 4060 Ti 16GB","brand":"Gigabyte","cat":"Graphics Cards","price":175000,"old":195000,"rating":4.9,"img":"https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Gigabyte Aorus Master GeForce RTX 4060 Ti 16GB is a high-performance graphics card built for extreme gaming and content creation. Featuring 16GB GDDR6 VRAM and advanced GPU architecture, it delivers exceptional performance in 4K gaming, real-time ray tracing, and AI-accelerated workflows. Gigabyte's advanced thermal design keeps temperatures in check even during the most intense sessions.","specs":[{"label":"GPU","value":"RTX 4060 Ti"},{"label":"VRAM","value":"16GB GDDR6"},{"label":"Boost Clock","value":"2640 MHz"},{"label":"CUDA Cores","value":"4352"},{"label":"Interface","value":"128-bit"},{"label":"Cooling","value":"Windforce Stack 3x"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Sapphire Nitro+ Radeon RX 7800 XT 16GB","brand":"Sapphire","cat":"Graphics Cards","price":185000,"old":205000,"rating":4.6,"img":"https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Sapphire Nitro+ Radeon RX 7800 XT 16GB is a high-performance graphics card built for extreme gaming and content creation. Featuring 16GB GDDR6 VRAM and advanced GPU architecture, it delivers exceptional performance in 4K gaming, real-time ray tracing, and AI-accelerated workflows. Sapphire's advanced thermal design keeps temperatures in check even during the most intense sessions.","specs":[{"label":"GPU","value":"Radeon RX 7800 XT"},{"label":"VRAM","value":"16GB GDDR6"},{"label":"Compute Units","value":"60"},{"label":"Interface","value":"256-bit"},{"label":"Boost Clock","value":"2430 MHz"},{"label":"RGB","value":"ARGB Lighting"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"PowerColor Red Devil Radeon RX 7700 XT 12GB","brand":"PowerColor","cat":"Graphics Cards","price":155000,"old":172000,"rating":4.4,"img":"https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The PowerColor Red Devil Radeon RX 7700 XT 12GB is a high-performance graphics card built for extreme gaming and content creation. Featuring 12GB GDDR6 VRAM and advanced GPU architecture, it delivers exceptional performance in 4K gaming, real-time ray tracing, and AI-accelerated workflows. PowerColor's advanced thermal design keeps temperatures in check even during the most intense sessions.","specs":[{"label":"GPU","value":"Radeon RX 7700 XT"},{"label":"VRAM","value":"12GB GDDR6"},{"label":"Compute Units","value":"54"},{"label":"Interface","value":"192-bit"},{"label":"Boost Clock","value":"2584 MHz"},{"label":"Fans","value":"Triple Fan"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"XFX Speedster MERC 319 Radeon RX 7600 XT 16GB","brand":"XFX","cat":"Graphics Cards","price":128000,"old":140000,"rating":4.1,"img":"https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The XFX Speedster MERC 319 Radeon RX 7600 XT 16GB is a high-performance graphics card built for extreme gaming and content creation. Featuring 16GB GDDR6 VRAM and advanced GPU architecture, it delivers exceptional performance in 4K gaming, real-time ray tracing, and AI-accelerated workflows. XFX's advanced thermal design keeps temperatures in check even during the most intense sessions.","specs":[{"label":"GPU","value":"Radeon RX 7600 XT"},{"label":"VRAM","value":"16GB GDDR6"},{"label":"Compute Units","value":"32"},{"label":"Interface","value":"128-bit"},{"label":"Boost Clock","value":"2755 MHz"},{"label":"TDP","value":"190W"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Palit GeForce RTX 3060 Dual OC 12GB","brand":"Palit","cat":"Graphics Cards","price":99000,"old":110000,"rating":4.5,"img":"https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Palit GeForce RTX 3060 Dual OC 12GB is a high-performance graphics card built for extreme gaming and content creation. Featuring 12GB GDDR6 VRAM and advanced GPU architecture, it delivers exceptional performance in 4K gaming, real-time ray tracing, and AI-accelerated workflows. Palit's advanced thermal design keeps temperatures in check even during the most intense sessions.","specs":[{"label":"GPU","value":"RTX 3060"},{"label":"VRAM","value":"12GB GDDR6"},{"label":"CUDA Cores","value":"3584"},{"label":"Interface","value":"192-bit"},{"label":"Boost Clock","value":"1807 MHz"},{"label":"Fans","value":"Dual StormX Fan"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"ASUS ROG Maximus Z790 Hero ATX","brand":"ASUS","cat":"Motherboards","price":165000,"old":180000,"rating":4.9,"img":"https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The ASUS ROG Maximus Z790 Hero ATX is a premium LGA 1700 motherboard engineered for builders who demand the best. With Intel Z790 and support for high-speed DDR5 up to 192GB memory, it delivers rock-solid stability and serious overclocking headroom. ASUS's build quality ensures long-term reliability for both gaming and professional workstations.","specs":[{"label":"Socket","value":"LGA 1700"},{"label":"Chipset","value":"Intel Z790"},{"label":"Form Factor","value":"ATX"},{"label":"Memory","value":"DDR5 up to 192GB"},{"label":"M.2 Slots","value":"5 x M.2"},{"label":"WiFi","value":"WiFi 7"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"MSI MEG X670E ACE E-ATX Motherboard","brand":"MSI","cat":"Motherboards","price":155000,"old":170000,"rating":4.7,"img":"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The MSI MEG X670E ACE E-ATX Motherboard is a premium AM5 motherboard engineered for builders who demand the best. With AMD X670E and support for high-speed DDR5 up to 256GB memory, it delivers rock-solid stability and serious overclocking headroom. MSI's build quality ensures long-term reliability for both gaming and professional workstations.","specs":[{"label":"Socket","value":"AM5"},{"label":"Chipset","value":"AMD X670E"},{"label":"Form Factor","value":"E-ATX"},{"label":"Memory","value":"DDR5 up to 256GB"},{"label":"PCIe","value":"PCIe 5.0 x16"},{"label":"WiFi","value":"WiFi 6E"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Gigabyte Z790 Aorus Elite AX ATX","brand":"Gigabyte","cat":"Motherboards","price":95000,"old":105000,"rating":4.9,"img":"https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Gigabyte Z790 Aorus Elite AX ATX is a premium LGA 1700 motherboard engineered for builders who demand the best. With Intel Z790 and support for high-speed DDR5 memory, it delivers rock-solid stability and serious overclocking headroom. Gigabyte's build quality ensures long-term reliability for both gaming and professional workstations.","specs":[{"label":"Socket","value":"LGA 1700"},{"label":"Chipset","value":"Intel Z790"},{"label":"Form Factor","value":"ATX"},{"label":"M.2 Slots","value":"4 x M.2"},{"label":"WiFi","value":"WiFi 6E"},{"label":"LAN","value":"2.5G Ethernet"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"ASRock X670E Taichi Carrara ATX","brand":"ASRock","cat":"Motherboards","price":115000,"old":128000,"rating":4.8,"img":"https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80","images":[],"inStock":false,"description":"The ASRock X670E Taichi Carrara ATX is a premium AM5 motherboard engineered for builders who demand the best. With AMD X670E and support for high-speed DDR5 memory, it delivers rock-solid stability and serious overclocking headroom. ASRock's build quality ensures long-term reliability for both gaming and professional workstations.","specs":[{"label":"Socket","value":"AM5"},{"label":"Chipset","value":"AMD X670E"},{"label":"Form Factor","value":"ATX"},{"label":"PCIe","value":"PCIe 5.0 x16"},{"label":"USB4","value":"2 x USB4 Ports"},{"label":"WiFi","value":"WiFi 6E"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"NZXT N7 Z790 Clean ATX Motherboard","brand":"NZXT","cat":"Motherboards","price":75000,"old":82000,"rating":4.1,"img":"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The NZXT N7 Z790 Clean ATX Motherboard is a premium LGA 1700 motherboard engineered for builders who demand the best. With Intel Z790 and support for high-speed DDR5 memory, it delivers rock-solid stability and serious overclocking headroom. NZXT's build quality ensures long-term reliability for both gaming and professional workstations.","specs":[{"label":"Socket","value":"LGA 1700"},{"label":"Chipset","value":"Intel Z790"},{"label":"Form Factor","value":"ATX"},{"label":"M.2 Slots","value":"3 x M.2"},{"label":"WiFi","value":"WiFi 6E"},{"label":"Design","value":"Matte Black Cover"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"ASUS ROG Strix Z790-F Gaming WiFi II ATX","brand":"ASUS","cat":"Motherboards","price":110000,"old":120000,"rating":4.2,"img":"https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The ASUS ROG Strix Z790-F Gaming WiFi II ATX is a premium LGA 1700 motherboard engineered for builders who demand the best. With Intel Z790 and support for high-speed DDR5 up to 192GB memory, it delivers rock-solid stability and serious overclocking headroom. ASUS's build quality ensures long-term reliability for both gaming and professional workstations.","specs":[{"label":"Socket","value":"LGA 1700"},{"label":"Chipset","value":"Intel Z790"},{"label":"Form Factor","value":"ATX"},{"label":"Memory","value":"DDR5 up to 192GB"},{"label":"M.2 Slots","value":"5 x M.2"},{"label":"WiFi","value":"WiFi 7"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"MSI MPG Z790 Carbon WiFi ATX","brand":"MSI","cat":"Motherboards","price":125000,"old":135000,"rating":4.4,"img":"https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The MSI MPG Z790 Carbon WiFi ATX is a premium LGA 1700 motherboard engineered for builders who demand the best. With Intel Z790 and support for high-speed DDR5 up to 192GB memory, it delivers rock-solid stability and serious overclocking headroom. MSI's build quality ensures long-term reliability for both gaming and professional workstations.","specs":[{"label":"Socket","value":"LGA 1700"},{"label":"Chipset","value":"Intel Z790"},{"label":"Form Factor","value":"ATX"},{"label":"Memory","value":"DDR5 up to 192GB"},{"label":"WiFi","value":"WiFi 6E"},{"label":"M.2 Slots","value":"5 x M.2"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Gigabyte B650 Aorus Elite AX ATX","brand":"Gigabyte","cat":"Motherboards","price":68000,"old":75000,"rating":4.5,"img":"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Gigabyte B650 Aorus Elite AX ATX is a premium AM5 motherboard engineered for builders who demand the best. With AMD B650 and support for high-speed DDR5 up to 192GB memory, it delivers rock-solid stability and serious overclocking headroom. Gigabyte's build quality ensures long-term reliability for both gaming and professional workstations.","specs":[{"label":"Socket","value":"AM5"},{"label":"Chipset","value":"AMD B650"},{"label":"Form Factor","value":"ATX"},{"label":"Memory","value":"DDR5 up to 192GB"},{"label":"WiFi","value":"WiFi 6E"},{"label":"PCIe","value":"PCIe 5.0 M.2 Support"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"ASRock B650 Pro RS ATX Motherboard","brand":"ASRock","cat":"Motherboards","price":49000,"old":55000,"rating":4.8,"img":"https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The ASRock B650 Pro RS ATX Motherboard is a premium AM5 motherboard engineered for builders who demand the best. With AMD B650 and support for high-speed DDR5 up to 192GB memory, it delivers rock-solid stability and serious overclocking headroom. ASRock's build quality ensures long-term reliability for both gaming and professional workstations.","specs":[{"label":"Socket","value":"AM5"},{"label":"Chipset","value":"AMD B650"},{"label":"Form Factor","value":"ATX"},{"label":"Memory","value":"DDR5 up to 192GB"},{"label":"M.2 Slots","value":"3 x M.2"},{"label":"LAN","value":"2.5G LAN"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"ASUS TUF Gaming B760-PLUS WIFI ATX","brand":"ASUS","cat":"Motherboards","price":58000,"old":65000,"rating":4.4,"img":"https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The ASUS TUF Gaming B760-PLUS WIFI ATX is a premium LGA 1700 motherboard engineered for builders who demand the best. With Intel B760 and support for high-speed DDR5 up to 192GB memory, it delivers rock-solid stability and serious overclocking headroom. ASUS's build quality ensures long-term reliability for both gaming and professional workstations.","specs":[{"label":"Socket","value":"LGA 1700"},{"label":"Chipset","value":"Intel B760"},{"label":"Form Factor","value":"ATX"},{"label":"Memory","value":"DDR5 up to 192GB"},{"label":"WiFi","value":"WiFi 6"},{"label":"PCIe","value":"PCIe 5.0 x16"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Intel Core i9-14900K Desktop Processor","brand":"Intel","cat":"Processors","price":165000,"old":175000,"rating":4.3,"img":"https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Intel Core i9-14900K Desktop Processor is a powerhouse desktop processor delivering 24 (8P+16E) performance for gaming, streaming, and content creation. With a boost clock of 6.0 GHz and advanced cache architecture, it crushes demanding workloads. A top choice for any high-performance PC build.","specs":[{"label":"Socket","value":"LGA1700"},{"label":"Total Cores","value":"24 (8P+16E)"},{"label":"Total Threads","value":"32"},{"label":"Max Turbo","value":"6.0 GHz"},{"label":"L3 Cache","value":"36MB"},{"label":"TDP","value":"125W"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Intel Core i7-14700K Desktop Processor","brand":"Intel","cat":"Processors","price":115000,"old":125000,"rating":4.3,"img":"https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Intel Core i7-14700K Desktop Processor is a powerhouse desktop processor delivering 20 (8P+12E) performance for gaming, streaming, and content creation. With a boost clock of 5.6 GHz and advanced cache architecture, it crushes demanding workloads. A top choice for any high-performance PC build.","specs":[{"label":"Socket","value":"LGA1700"},{"label":"Total Cores","value":"20 (8P+12E)"},{"label":"Total Threads","value":"28"},{"label":"Max Turbo","value":"5.6 GHz"},{"label":"L3 Cache","value":"33MB"},{"label":"TDP","value":"125W"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Intel Core i5-14600K Desktop Processor","brand":"Intel","cat":"Processors","price":88000,"old":95000,"rating":4.5,"img":"https://images.unsplash.com/photo-1555617981-dac3772e487c?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Intel Core i5-14600K Desktop Processor is a powerhouse desktop processor delivering 14 (6P+8E) performance for gaming, streaming, and content creation. With a boost clock of 5.3 GHz and advanced cache architecture, it crushes demanding workloads. A top choice for any high-performance PC build.","specs":[{"label":"Socket","value":"LGA1700"},{"label":"Total Cores","value":"14 (6P+8E)"},{"label":"Total Threads","value":"20"},{"label":"Max Turbo","value":"5.3 GHz"},{"label":"L3 Cache","value":"24MB"},{"label":"TDP","value":"125W"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Intel Core i5-13400F Desktop Processor","brand":"Intel","cat":"Processors","price":54000,"old":59000,"rating":4.7,"img":"https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=600&q=80","images":[],"inStock":false,"description":"The Intel Core i5-13400F Desktop Processor is a powerhouse desktop processor delivering 10 (6P+4E) performance for gaming, streaming, and content creation. With a boost clock of 4.6 GHz and advanced cache architecture, it crushes demanding workloads. A top choice for any high-performance PC build.","specs":[{"label":"Socket","value":"LGA1700"},{"label":"Total Cores","value":"10 (6P+4E)"},{"label":"Total Threads","value":"16"},{"label":"Max Turbo","value":"4.6 GHz"},{"label":"L3 Cache","value":"20MB"},{"label":"TDP","value":"65W"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Intel Core i3-13100F Desktop Processor","brand":"Intel","cat":"Processors","price":29500,"old":33000,"rating":4.1,"img":"https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Intel Core i3-13100F Desktop Processor is a powerhouse desktop processor delivering 4 performance for gaming, streaming, and content creation. With a boost clock of 4.5 GHz and advanced cache architecture, it crushes demanding workloads. A top choice for any high-performance PC build.","specs":[{"label":"Socket","value":"LGA1700"},{"label":"Total Cores","value":"4"},{"label":"Total Threads","value":"8"},{"label":"Max Turbo","value":"4.5 GHz"},{"label":"L3 Cache","value":"12MB"},{"label":"TDP","value":"58W"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"AMD Ryzen 9 7950X3D Desktop Processor","brand":"AMD","cat":"Processors","price":175000,"old":189000,"rating":4.4,"img":"https://images.unsplash.com/photo-1555617981-dac3772e487c?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The AMD Ryzen 9 7950X3D Desktop Processor is a powerhouse desktop processor delivering 16 / 32 performance for gaming, streaming, and content creation. With a boost clock of 5.7 GHz and advanced cache architecture, it crushes demanding workloads. A top choice for any high-performance PC build.","specs":[{"label":"Socket","value":"AM5"},{"label":"Cores / Threads","value":"16 / 32"},{"label":"3D V-Cache","value":"128MB L3"},{"label":"Boost Clock","value":"5.7 GHz"},{"label":"Base Clock","value":"4.2 GHz"},{"label":"TDP","value":"120W"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"AMD Ryzen 7 7800X3D Desktop Processor","brand":"AMD","cat":"Processors","price":128000,"old":139000,"rating":4.5,"img":"https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The AMD Ryzen 7 7800X3D Desktop Processor is a powerhouse desktop processor delivering 8 / 16 performance for gaming, streaming, and content creation. With a boost clock of 5.0 GHz and advanced cache architecture, it crushes demanding workloads. A top choice for any high-performance PC build.","specs":[{"label":"Socket","value":"AM5"},{"label":"Cores / Threads","value":"8 / 16"},{"label":"3D V-Cache","value":"96MB L3"},{"label":"Boost Clock","value":"5.0 GHz"},{"label":"Base Clock","value":"4.2 GHz"},{"label":"TDP","value":"120W"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"AMD Ryzen 9 7900X Desktop Processor","brand":"AMD","cat":"Processors","price":109000,"old":119000,"rating":4,"img":"https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The AMD Ryzen 9 7900X Desktop Processor is a powerhouse desktop processor delivering 12 / 24 performance for gaming, streaming, and content creation. With a boost clock of 5.6 GHz and advanced cache architecture, it crushes demanding workloads. A top choice for any high-performance PC build.","specs":[{"label":"Socket","value":"AM5"},{"label":"Cores / Threads","value":"12 / 24"},{"label":"Boost Clock","value":"5.6 GHz"},{"label":"Base Clock","value":"4.7 GHz"},{"label":"Total Cache","value":"76MB"},{"label":"TDP","value":"170W"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"AMD Ryzen 5 7600X Desktop Processor","brand":"AMD","cat":"Processors","price":68000,"old":75000,"rating":4.1,"img":"https://images.unsplash.com/photo-1555617981-dac3772e487c?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The AMD Ryzen 5 7600X Desktop Processor is a powerhouse desktop processor delivering 6 / 12 performance for gaming, streaming, and content creation. With a boost clock of 5.3 GHz and advanced cache architecture, it crushes demanding workloads. A top choice for any high-performance PC build.","specs":[{"label":"Socket","value":"AM5"},{"label":"Cores / Threads","value":"6 / 12"},{"label":"Boost Clock","value":"5.3 GHz"},{"label":"Base Clock","value":"4.7 GHz"},{"label":"Total Cache","value":"38MB"},{"label":"TDP","value":"105W"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"AMD Ryzen 5 5600X Desktop Processor","brand":"AMD","cat":"Processors","price":38999,"old":42999,"rating":4.4,"img":"https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The AMD Ryzen 5 5600X Desktop Processor is a powerhouse desktop processor delivering 6 / 12 performance for gaming, streaming, and content creation. With a boost clock of 4.6 GHz and advanced cache architecture, it crushes demanding workloads. A top choice for any high-performance PC build.","specs":[{"label":"Socket","value":"AM4"},{"label":"Cores / Threads","value":"6 / 12"},{"label":"Boost Clock","value":"4.6 GHz"},{"label":"Base Clock","value":"3.7 GHz"},{"label":"Total Cache","value":"35MB"},{"label":"TDP","value":"65W"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Corsair Dominator Titanium DDR5 32GB 6000MHz","brand":"Corsair","cat":"RAM","price":62000,"old":68000,"rating":4.1,"img":"https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Corsair Dominator Titanium DDR5 32GB 6000MHz is premium DDR5 memory designed for speed and reliability. Running at 6000 MHz with tight latency timings, it provides snappy system responsiveness for gaming, video editing, and multitasking. Corsair's quality assurance ensures long-term stability and compatibility.","specs":[{"label":"Memory Type","value":"DDR5"},{"label":"Capacity","value":"32GB (2x16GB)"},{"label":"Speed","value":"6000 MHz"},{"label":"Latency","value":"CL30"},{"label":"Voltage","value":"1.4V"},{"label":"RGB","value":"Dominator RGB"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Kingston FURY Renegade DDR5 32GB 6400MHz","brand":"Kingston","cat":"RAM","price":39500,"old":44000,"rating":4.9,"img":"https://images.unsplash.com/photo-1607400201515-c2c41c07d307?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Kingston FURY Renegade DDR5 32GB 6400MHz is premium DDR5 memory designed for speed and reliability. Running at 6400 MHz with tight latency timings, it provides snappy system responsiveness for gaming, video editing, and multitasking. Kingston's quality assurance ensures long-term stability and compatibility.","specs":[{"label":"Memory Type","value":"DDR5"},{"label":"Capacity","value":"32GB (2x16GB)"},{"label":"Speed","value":"6400 MHz"},{"label":"Latency","value":"CL32"},{"label":"Voltage","value":"1.4V"},{"label":"XMP","value":"Intel XMP 3.0"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"G.Skill Trident Z5 RGB DDR5 32GB 6000MHz","brand":"G.Skill","cat":"RAM","price":45000,"old":50000,"rating":4.9,"img":"https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The G.Skill Trident Z5 RGB DDR5 32GB 6000MHz is premium DDR5 memory designed for speed and reliability. Running at 6000 MHz with tight latency timings, it provides snappy system responsiveness for gaming, video editing, and multitasking. G.Skill's quality assurance ensures long-term stability and compatibility.","specs":[{"label":"Memory Type","value":"DDR5"},{"label":"Capacity","value":"32GB (2x16GB)"},{"label":"Speed","value":"6000 MHz"},{"label":"Latency","value":"CL36"},{"label":"RGB","value":"Per-Key RGB"},{"label":"Heatsink","value":"Aluminum Alloy"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Team Group T-Force Delta RGB DDR5 32GB 5600MHz","brand":"Team Group","cat":"RAM","price":36000,"old":40000,"rating":4.9,"img":"https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Team Group T-Force Delta RGB DDR5 32GB 5600MHz is premium DDR5 memory designed for speed and reliability. Running at 5600 MHz with tight latency timings, it provides snappy system responsiveness for gaming, video editing, and multitasking. Team Group's quality assurance ensures long-term stability and compatibility.","specs":[{"label":"Memory Type","value":"DDR5"},{"label":"Capacity","value":"32GB (2x16GB)"},{"label":"Speed","value":"5600 MHz"},{"label":"Latency","value":"CL36"},{"label":"RGB","value":"Mirror RGB"},{"label":"Voltage","value":"1.25V"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Crucial Pro DDR5 32GB 5600MHz Kit","brand":"Crucial","cat":"RAM","price":31000,"old":35000,"rating":4.9,"img":"https://images.unsplash.com/photo-1607400201515-c2c41c07d307?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Crucial Pro DDR5 32GB 5600MHz Kit is premium DDR5 memory designed for speed and reliability. Running at 5600 MHz with tight latency timings, it provides snappy system responsiveness for gaming, video editing, and multitasking. Crucial's quality assurance ensures long-term stability and compatibility.","specs":[{"label":"Memory Type","value":"DDR5"},{"label":"Capacity","value":"32GB (2x16GB)"},{"label":"Speed","value":"5600 MHz"},{"label":"Latency","value":"CL46"},{"label":"Voltage","value":"1.1V"},{"label":"Profile","value":"XMP 3.0 / EXPO"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Patriot Viper Venom ARGB DDR5 32GB 6000MHz","brand":"Patriot","cat":"RAM","price":38000,"old":42000,"rating":4.9,"img":"https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Patriot Viper Venom ARGB DDR5 32GB 6000MHz is premium DDR5 memory designed for speed and reliability. Running at 6000 MHz with tight latency timings, it provides snappy system responsiveness for gaming, video editing, and multitasking. Patriot's quality assurance ensures long-term stability and compatibility.","specs":[{"label":"Memory Type","value":"DDR5"},{"label":"Capacity","value":"32GB (2x16GB)"},{"label":"Speed","value":"6000 MHz"},{"label":"Latency","value":"CL36"},{"label":"RGB","value":"ARGB Lighting"},{"label":"Heatsink","value":"Dual-Tone"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"ADATA XPG Lancer RGB DDR5 32GB 6000MHz","brand":"ADATA","cat":"RAM","price":35000,"old":39000,"rating":4.6,"img":"https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80","images":[],"inStock":false,"description":"The ADATA XPG Lancer RGB DDR5 32GB 6000MHz is premium DDR5 memory designed for speed and reliability. Running at 6000 MHz with tight latency timings, it provides snappy system responsiveness for gaming, video editing, and multitasking. ADATA's quality assurance ensures long-term stability and compatibility.","specs":[{"label":"Memory Type","value":"DDR5"},{"label":"Capacity","value":"32GB (2x16GB)"},{"label":"Speed","value":"6000 MHz"},{"label":"Latency","value":"CL30"},{"label":"RGB","value":"ARGB Strip"},{"label":"Profile","value":"XMP 3.0 / EXPO"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"PNY XLR8 Gaming EPIC-X DDR5 32GB 5600MHz","brand":"PNY","cat":"RAM","price":32000,"old":36000,"rating":4.4,"img":"https://images.unsplash.com/photo-1607400201515-c2c41c07d307?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The PNY XLR8 Gaming EPIC-X DDR5 32GB 5600MHz is premium DDR5 memory designed for speed and reliability. Running at 5600 MHz with tight latency timings, it provides snappy system responsiveness for gaming, video editing, and multitasking. PNY's quality assurance ensures long-term stability and compatibility.","specs":[{"label":"Memory Type","value":"DDR5"},{"label":"Capacity","value":"32GB (2x16GB)"},{"label":"Speed","value":"5600 MHz"},{"label":"Latency","value":"CL36"},{"label":"RGB","value":"Dual Finned RGB"},{"label":"Profile","value":"XMP 3.0"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Thermaltake TOUGHRAM Z-ONE DDR4 16GB 3600MHz","brand":"Thermaltake","cat":"RAM","price":18500,"old":21000,"rating":4.7,"img":"https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Thermaltake TOUGHRAM Z-ONE DDR4 16GB 3600MHz is premium DDR4 memory designed for speed and reliability. Running at 3600 MHz with tight latency timings, it provides snappy system responsiveness for gaming, video editing, and multitasking. Thermaltake's quality assurance ensures long-term stability and compatibility.","specs":[{"label":"Memory Type","value":"DDR4"},{"label":"Capacity","value":"16GB (2x8GB)"},{"label":"Speed","value":"3600 MHz"},{"label":"Latency","value":"CL18"},{"label":"Lighting","value":"White LED"},{"label":"Voltage","value":"1.35V"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Mushkin Redline Lumina ARGB DDR4 32GB 3600MHz","brand":"Mushkin","cat":"RAM","price":24500,"old":27500,"rating":4.2,"img":"https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Mushkin Redline Lumina ARGB DDR4 32GB 3600MHz is premium DDR4 memory designed for speed and reliability. Running at 3600 MHz with tight latency timings, it provides snappy system responsiveness for gaming, video editing, and multitasking. Mushkin's quality assurance ensures long-term stability and compatibility.","specs":[{"label":"Memory Type","value":"DDR4"},{"label":"Capacity","value":"32GB (2x16GB)"},{"label":"Speed","value":"3600 MHz"},{"label":"Latency","value":"CL16"},{"label":"RGB","value":"ARGB"},{"label":"Voltage","value":"1.35V"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Samsung 990 Pro 2TB NVMe PCIe 4.0 M.2 SSD","brand":"Samsung","cat":"SSDs","price":48900,"old":53900,"rating":4,"img":"https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Samsung 990 Pro 2TB NVMe PCIe 4.0 M.2 SSD is a blazing-fast NVMe SSD that transforms your storage performance. With sequential read speeds of 7,450 MB/s, games load instantly and applications launch in the blink of an eye. Built with Samsung's proven NAND flash technology for exceptional reliability and endurance.","specs":[{"label":"Capacity","value":"2TB"},{"label":"Interface","value":"PCIe Gen4 x4, NVMe 2.0"},{"label":"Seq Read","value":"7,450 MB/s"},{"label":"Seq Write","value":"6,900 MB/s"},{"label":"TBW","value":"1,200 TBW"},{"label":"Form Factor","value":"M.2 2280"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Kingston FURY Renegade 2TB NVMe M.2 SSD","brand":"Kingston","cat":"SSDs","price":42500,"old":47500,"rating":4.9,"img":"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Kingston FURY Renegade 2TB NVMe M.2 SSD is a blazing-fast NVMe SSD that transforms your storage performance. With sequential read speeds of 7,300 MB/s, games load instantly and applications launch in the blink of an eye. Built with Kingston's proven NAND flash technology for exceptional reliability and endurance.","specs":[{"label":"Capacity","value":"2TB"},{"label":"Interface","value":"PCIe Gen4 x4, NVMe"},{"label":"Seq Read","value":"7,300 MB/s"},{"label":"Seq Write","value":"7,000 MB/s"},{"label":"TBW","value":"2,000 TBW"},{"label":"Heatsink","value":"Graphene Heatsink"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"WD Black SN850X 2TB NVMe M.2 SSD","brand":"WD","cat":"SSDs","price":46000,"old":51000,"rating":4.7,"img":"https://images.unsplash.com/photo-1628546716223-1d02c74d6438?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The WD Black SN850X 2TB NVMe M.2 SSD is a blazing-fast NVMe SSD that transforms your storage performance. With sequential read speeds of 7,300 MB/s, games load instantly and applications launch in the blink of an eye. Built with WD's proven NAND flash technology for exceptional reliability and endurance.","specs":[{"label":"Capacity","value":"2TB"},{"label":"Interface","value":"PCIe Gen4 x4, NVMe 1.4"},{"label":"Seq Read","value":"7,300 MB/s"},{"label":"Seq Write","value":"6,600 MB/s"},{"label":"Feature","value":"Game Mode 2.0"},{"label":"Form Factor","value":"M.2 2280"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Seagate FireCuda 530 2TB NVMe M.2 SSD","brand":"Seagate","cat":"SSDs","price":43000,"old":48000,"rating":4.8,"img":"https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80","images":[],"inStock":false,"description":"The Seagate FireCuda 530 2TB NVMe M.2 SSD is a blazing-fast NVMe SSD that transforms your storage performance. With sequential read speeds of 7,300 MB/s, games load instantly and applications launch in the blink of an eye. Built with Seagate's proven NAND flash technology for exceptional reliability and endurance.","specs":[{"label":"Capacity","value":"2TB"},{"label":"Interface","value":"PCIe Gen4 x4, NVMe 1.4"},{"label":"Seq Read","value":"7,300 MB/s"},{"label":"Seq Write","value":"6,900 MB/s"},{"label":"TBW","value":"2,500 TBW"},{"label":"Form Factor","value":"M.2 2280"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Crucial T700 2TB Gen5 NVMe M.2 SSD","brand":"Crucial","cat":"SSDs","price":52000,"old":58000,"rating":4.8,"img":"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Crucial T700 2TB Gen5 NVMe M.2 SSD is a blazing-fast NVMe SSD that transforms your storage performance. With sequential read speeds of 12,400 MB/s, games load instantly and applications launch in the blink of an eye. Built with Crucial's proven NAND flash technology for exceptional reliability and endurance.","specs":[{"label":"Capacity","value":"2TB"},{"label":"Interface","value":"PCIe Gen5 x4, NVMe 2.0"},{"label":"Seq Read","value":"12,400 MB/s"},{"label":"Seq Write","value":"11,800 MB/s"},{"label":"TBW","value":"1,200 TBW"},{"label":"Heatsink","value":"Included"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"SK Hynix Platinum P41 1TB NVMe M.2 SSD","brand":"SK Hynix","cat":"SSDs","price":27500,"old":31000,"rating":4.9,"img":"https://images.unsplash.com/photo-1628546716223-1d02c74d6438?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The SK Hynix Platinum P41 1TB NVMe M.2 SSD is a blazing-fast NVMe SSD that transforms your storage performance. With sequential read speeds of 7,000 MB/s, games load instantly and applications launch in the blink of an eye. Built with SK Hynix's proven NAND flash technology for exceptional reliability and endurance.","specs":[{"label":"Capacity","value":"1TB"},{"label":"Interface","value":"PCIe Gen4 x4, NVMe 1.4"},{"label":"Seq Read","value":"7,000 MB/s"},{"label":"Seq Write","value":"6,500 MB/s"},{"label":"TBW","value":"750 TBW"},{"label":"Form Factor","value":"M.2 2280"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Sabrent Rocket 4 Plus 2TB NVMe M.2 SSD","brand":"Sabrent","cat":"SSDs","price":39000,"old":44000,"rating":5,"img":"https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Sabrent Rocket 4 Plus 2TB NVMe M.2 SSD is a blazing-fast NVMe SSD that transforms your storage performance. With sequential read speeds of 7,100 MB/s, games load instantly and applications launch in the blink of an eye. Built with Sabrent's proven NAND flash technology for exceptional reliability and endurance.","specs":[{"label":"Capacity","value":"2TB"},{"label":"Interface","value":"PCIe Gen4 x4, NVMe 1.4"},{"label":"Seq Read","value":"7,100 MB/s"},{"label":"Seq Write","value":"6,600 MB/s"},{"label":"Controller","value":"Phison E18"},{"label":"Form Factor","value":"M.2 2280"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Corsair MP600 Pro LPX 1TB NVMe M.2 SSD","brand":"Corsair","cat":"SSDs","price":28000,"old":32000,"rating":4.2,"img":"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Corsair MP600 Pro LPX 1TB NVMe M.2 SSD is a blazing-fast NVMe SSD that transforms your storage performance. With sequential read speeds of 7,100 MB/s, games load instantly and applications launch in the blink of an eye. Built with Corsair's proven NAND flash technology for exceptional reliability and endurance.","specs":[{"label":"Capacity","value":"1TB"},{"label":"Interface","value":"PCIe Gen4 x4, NVMe 1.4"},{"label":"Seq Read","value":"7,100 MB/s"},{"label":"Seq Write","value":"5,800 MB/s"},{"label":"Design","value":"Low Profile 2280"},{"label":"Form Factor","value":"M.2 2280"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"ADATA XPG Gammix S70 Blade 2TB NVMe SSD","brand":"ADATA","cat":"SSDs","price":38000,"old":43000,"rating":4.9,"img":"https://images.unsplash.com/photo-1628546716223-1d02c74d6438?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The ADATA XPG Gammix S70 Blade 2TB NVMe SSD is a blazing-fast NVMe SSD that transforms your storage performance. With sequential read speeds of 7,400 MB/s, games load instantly and applications launch in the blink of an eye. Built with ADATA's proven NAND flash technology for exceptional reliability and endurance.","specs":[{"label":"Capacity","value":"2TB"},{"label":"Interface","value":"PCIe Gen4 x4, NVMe 1.4"},{"label":"Seq Read","value":"7,400 MB/s"},{"label":"Seq Write","value":"6,700 MB/s"},{"label":"Controller","value":"InnoGrit IG5236"},{"label":"Heatsink","value":"Aluminum"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Lexar NM790 2TB NVMe PCIe 4.0 M.2 SSD","brand":"Lexar","cat":"SSDs","price":31000,"old":35000,"rating":4.9,"img":"https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Lexar NM790 2TB NVMe PCIe 4.0 M.2 SSD is a blazing-fast NVMe SSD that transforms your storage performance. With sequential read speeds of 7,400 MB/s, games load instantly and applications launch in the blink of an eye. Built with Lexar's proven NAND flash technology for exceptional reliability and endurance.","specs":[{"label":"Capacity","value":"2TB"},{"label":"Interface","value":"PCIe Gen4 x4, NVMe 1.4"},{"label":"Seq Read","value":"7,400 MB/s"},{"label":"Seq Write","value":"6,500 MB/s"},{"label":"TBW","value":"1,500 TBW"},{"label":"Form Factor","value":"M.2 2280"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Logitech G Pro X Superlight 2 DEX Wireless","brand":"Logitech","cat":"Mice","price":34999,"old":38999,"rating":4.8,"img":"https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80","images":[],"inStock":false,"description":"The Logitech G Pro X Superlight 2 DEX Wireless is a precision gaming mouse engineered for competitive play. Featuring a HERO 2 Optical sensor with adjustable DPI, it tracks every movement with pixel-perfect accuracy. Logitech's ergonomic design ensures comfort during marathon gaming sessions.","specs":[{"label":"Sensor","value":"HERO 2 Optical"},{"label":"DPI","value":"100-32,000 DPI"},{"label":"Weight","value":"60g"},{"label":"Polling Rate","value":"2000Hz"},{"label":"Battery","value":"95 Hours"},{"label":"Connectivity","value":"LIGHTSPEED"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Razer DeathAdder V3 Pro Wireless Gaming Mouse","brand":"Razer","cat":"Mice","price":37500,"old":41500,"rating":5,"img":"https://images.unsplash.com/photo-1615750168588-5c1d99f898f6?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Razer DeathAdder V3 Pro Wireless Gaming Mouse is a precision gaming mouse engineered for competitive play. Featuring a Focus Pro 30K Optical sensor with adjustable DPI, it tracks every movement with pixel-perfect accuracy. Razer's ergonomic design ensures comfort during marathon gaming sessions.","specs":[{"label":"Sensor","value":"Focus Pro 30K Optical"},{"label":"Weight","value":"63g"},{"label":"Polling Rate","value":"8000Hz"},{"label":"Battery","value":"90 Hours"},{"label":"Buttons","value":"5 Programmable"},{"label":"Connectivity","value":"HyperSpeed"}],"createdAt":"2026-07-08T19:14:32.723Z"},{"name":"Corsair M75 Air Wireless Gaming Mouse","brand":"Corsair","cat":"Mice","price":28000,"old":32000,"rating":4.7,"img":"https://images.unsplash.com/photo-1625842268584-8f3290404019?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Corsair M75 Air Wireless Gaming Mouse is a precision gaming mouse engineered for competitive play. Featuring a Marksman 26K Optical sensor with adjustable DPI, it tracks every movement with pixel-perfect accuracy. Corsair's ergonomic design ensures comfort during marathon gaming sessions.","specs":[{"label":"Sensor","value":"Marksman 26K Optical"},{"label":"Weight","value":"60g"},{"label":"Battery","value":"75 Hours"},{"label":"Polling Rate","value":"2000Hz"},{"label":"Buttons","value":"7 Programmable"},{"label":"Connectivity","value":"Slipstream"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"SteelSeries Prime Wireless Gaming Mouse","brand":"SteelSeries","cat":"Mice","price":22500,"old":26000,"rating":4.8,"img":"https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The SteelSeries Prime Wireless Gaming Mouse is a precision gaming mouse engineered for competitive play. Featuring a TrueMove Air Optical sensor with adjustable DPI, it tracks every movement with pixel-perfect accuracy. SteelSeries's ergonomic design ensures comfort during marathon gaming sessions.","specs":[{"label":"Sensor","value":"TrueMove Air Optical"},{"label":"Weight","value":"80g"},{"label":"Battery","value":"100 Hours"},{"label":"Polling Rate","value":"1000Hz"},{"label":"Buttons","value":"6 Programmable"},{"label":"Shape","value":"Symmetrical"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Roccat Kone Pro Air Wireless Gaming Mouse","brand":"Roccat","cat":"Mice","price":24000,"old":27500,"rating":4.9,"img":"https://images.unsplash.com/photo-1615750168588-5c1d99f898f6?auto=format&fit=crop&w=600&q=80","images":[],"inStock":false,"description":"The Roccat Kone Pro Air Wireless Gaming Mouse is a precision gaming mouse engineered for competitive play. Featuring a Owl-Eye 19K Optical sensor with adjustable DPI, it tracks every movement with pixel-perfect accuracy. Roccat's ergonomic design ensures comfort during marathon gaming sessions.","specs":[{"label":"Sensor","value":"Owl-Eye 19K Optical"},{"label":"Weight","value":"75g"},{"label":"Battery","value":"100 Hours"},{"label":"Polling Rate","value":"1000Hz"},{"label":"RGB","value":"ARGB Lighting"},{"label":"Connectivity","value":"2.4GHz / BT"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"HyperX Pulsefire Haste 2 Wireless Mouse","brand":"HyperX","cat":"Mice","price":18500,"old":21000,"rating":4.7,"img":"https://images.unsplash.com/photo-1625842268584-8f3290404019?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The HyperX Pulsefire Haste 2 Wireless Mouse is a precision gaming mouse engineered for competitive play. Featuring a Pixart PAW3395 sensor with adjustable DPI, it tracks every movement with pixel-perfect accuracy. HyperX's ergonomic design ensures comfort during marathon gaming sessions.","specs":[{"label":"Sensor","value":"Pixart PAW3395"},{"label":"Weight","value":"61g"},{"label":"Battery","value":"100 Hours"},{"label":"DPI","value":"Up to 26,000 DPI"},{"label":"Design","value":"Ultralight Hex Shell"},{"label":"Connectivity","value":"2.4GHz"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Finalmouse UltralightX Wireless Gaming Mouse","brand":"Finalmouse","cat":"Mice","price":55000,"old":60000,"rating":4.8,"img":"https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Finalmouse UltralightX Wireless Gaming Mouse is a precision gaming mouse engineered for competitive play. Featuring a Pixart PAW3395 sensor with adjustable DPI, it tracks every movement with pixel-perfect accuracy. Finalmouse's ergonomic design ensures comfort during marathon gaming sessions.","specs":[{"label":"Sensor","value":"Pixart PAW3395"},{"label":"Weight","value":"29g Carbon Fiber"},{"label":"DPI","value":"Up to 26,000 DPI"},{"label":"Polling Rate","value":"8000Hz Wireless"},{"label":"Battery","value":"40 Hours"},{"label":"Connection","value":"2.4GHz / Wired"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Zowie EC2-C Ergonomic Wired Gaming Mouse","brand":"Zowie","cat":"Mice","price":16000,"old":18500,"rating":4.9,"img":"https://images.unsplash.com/photo-1615750168588-5c1d99f898f6?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Zowie EC2-C Ergonomic Wired Gaming Mouse is a precision gaming mouse engineered for competitive play. Featuring a 3610 Optical sensor with adjustable DPI, it tracks every movement with pixel-perfect accuracy. Zowie's ergonomic design ensures comfort during marathon gaming sessions.","specs":[{"label":"Sensor","value":"3610 Optical"},{"label":"DPI","value":"400-3200 DPI"},{"label":"Weight","value":"73g"},{"label":"Polling Rate","value":"1000Hz"},{"label":"Buttons","value":"5"},{"label":"Design","value":"Ergonomic Right-hand"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Glorious Model O 2 Wireless Gaming Mouse","brand":"Glorious","cat":"Mice","price":19500,"old":22500,"rating":4.5,"img":"https://images.unsplash.com/photo-1625842268584-8f3290404019?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Glorious Model O 2 Wireless Gaming Mouse is a precision gaming mouse engineered for competitive play. Featuring a Bamf 2.0 26K Optical sensor with adjustable DPI, it tracks every movement with pixel-perfect accuracy. Glorious's ergonomic design ensures comfort during marathon gaming sessions.","specs":[{"label":"Sensor","value":"Bamf 2.0 26K Optical"},{"label":"Weight","value":"68g"},{"label":"Battery","value":"75 Hours"},{"label":"DPI","value":"Up to 26,000 DPI"},{"label":"Polling Rate","value":"2000Hz"},{"label":"Connectivity","value":"2.4GHz"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Pulsar X2 Wireless Symmetrical Gaming Mouse","brand":"Pulsar","cat":"Mice","price":21000,"old":24000,"rating":4.3,"img":"https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Pulsar X2 Wireless Symmetrical Gaming Mouse is a precision gaming mouse engineered for competitive play. Featuring a PixArt PAW3395 sensor with adjustable DPI, it tracks every movement with pixel-perfect accuracy. Pulsar's ergonomic design ensures comfort during marathon gaming sessions.","specs":[{"label":"Sensor","value":"PixArt PAW3395"},{"label":"Weight","value":"55g"},{"label":"Battery","value":"70 Hours"},{"label":"DPI","value":"Up to 26,000 DPI"},{"label":"Polling Rate","value":"1000Hz"},{"label":"Cable","value":"Ultralight Paracord"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"HyperX Cloud Alpha Wireless Gaming Headset","brand":"HyperX","cat":"Headsets","price":44000,"old":49000,"rating":4.4,"img":"https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80","images":[],"inStock":false,"description":"The HyperX Cloud Alpha Wireless Gaming Headset is a premium gaming headset that puts you right in the middle of the action. Featuring 50mm Dual Chamber drivers and DTS Headphone:X Spatial sound, every footstep and explosion comes through crystal clear. The 2.4GHz Wireless connectivity ensures compatibility across all your devices.","specs":[{"label":"Driver","value":"50mm Dual Chamber"},{"label":"Battery","value":"300 Hours"},{"label":"Audio","value":"DTS Headphone:X Spatial"},{"label":"Connectivity","value":"2.4GHz Wireless"},{"label":"Mic","value":"Detachable Noise-Cancel"},{"label":"Weight","value":"335g"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Razer BlackShark V2 Pro Wireless 2023 Edition","brand":"Razer","cat":"Headsets","price":48900,"old":53900,"rating":4.3,"img":"https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Razer BlackShark V2 Pro Wireless 2023 Edition is a premium gaming headset that puts you right in the middle of the action. Featuring 50mm TriForce Titanium drivers and THX Spatial Audio sound, every footstep and explosion comes through crystal clear. The HyperSpeed / BT / 3.5mm connectivity ensures compatibility across all your devices.","specs":[{"label":"Driver","value":"50mm TriForce Titanium"},{"label":"Mic","value":"Super Wideband Mic"},{"label":"Connectivity","value":"HyperSpeed / BT / 3.5mm"},{"label":"Battery","value":"70 Hours"},{"label":"Sound","value":"THX Spatial Audio"},{"label":"Weight","value":"320g"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Corsair Virtuoso RGB Wireless XT Hi-Fi Headset","brand":"Corsair","cat":"Headsets","price":62000,"old":68000,"rating":4.6,"img":"https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Corsair Virtuoso RGB Wireless XT Hi-Fi Headset is a premium gaming headset that puts you right in the middle of the action. Featuring 50mm Neodymium drivers and Dolby Atmos sound, every footstep and explosion comes through crystal clear. The Slipstream / BT / USB / 3.5mm connectivity ensures compatibility across all your devices.","specs":[{"label":"Driver","value":"50mm Neodymium"},{"label":"Freq Range","value":"10Hz-40kHz Hi-Res"},{"label":"Connectivity","value":"Slipstream / BT / USB / 3.5mm"},{"label":"Mic","value":"Broadcast-Grade Detachable"},{"label":"Battery","value":"20 Hours"},{"label":"Audio","value":"Dolby Atmos"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Logitech G PRO X 2 Lightspeed Wireless Headset","brand":"Logitech","cat":"Headsets","price":58000,"old":64000,"rating":4.5,"img":"https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Logitech G PRO X 2 Lightspeed Wireless Headset is a premium gaming headset that puts you right in the middle of the action. Featuring 50mm Graphene Drivers drivers and 3D spatial sound, every footstep and explosion comes through crystal clear. The Lightspeed / BT / 3.5mm connectivity ensures compatibility across all your devices.","specs":[{"label":"Driver","value":"50mm Graphene Drivers"},{"label":"Connectivity","value":"Lightspeed / BT / 3.5mm"},{"label":"Battery","value":"50 Hours"},{"label":"Mic","value":"Blue VO!CE Detachable"},{"label":"Software","value":"iCUE Equalizer"},{"label":"Weight","value":"345g"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"SteelSeries Arctis Nova Pro Wireless Headset","brand":"SteelSeries","cat":"Headsets","price":75000,"old":82000,"rating":4.2,"img":"https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The SteelSeries Arctis Nova Pro Wireless Headset is a premium gaming headset that puts you right in the middle of the action. Featuring 40mm High Fidelity drivers and 360° Spatial Audio sound, every footstep and explosion comes through crystal clear. The 2.4GHz + Bluetooth 5.0 connectivity ensures compatibility across all your devices.","specs":[{"label":"Driver","value":"40mm High Fidelity"},{"label":"Battery","value":"Dual Hot-Swap Batteries"},{"label":"Connectivity","value":"2.4GHz + Bluetooth 5.0"},{"label":"Mic","value":"Retractable ClearCast Gen2"},{"label":"Audio","value":"360° Spatial Audio"},{"label":"Weight","value":"338g"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Astro A50 X Wireless Gaming Headset + Base","brand":"Astro","cat":"Headsets","price":95000,"old":105000,"rating":5,"img":"https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Astro A50 X Wireless Gaming Headset + Base is a premium gaming headset that puts you right in the middle of the action. Featuring 40mm ASTRO Audio V2 drivers and 3D spatial sound, every footstep and explosion comes through crystal clear. The Dolby Wireless + Dock connectivity ensures compatibility across all your devices.","specs":[{"label":"Driver","value":"40mm ASTRO Audio V2"},{"label":"Base Station","value":"Multi-device Dock"},{"label":"Connectivity","value":"Dolby Wireless + Dock"},{"label":"Mic","value":"Flip-to-mute Unidirectional"},{"label":"Platform","value":"PC / PS5 / Xbox"},{"label":"Battery","value":"18 Hours"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"JBL Quantum 910 Wireless Gaming Headset","brand":"JBL","cat":"Headsets","price":42000,"old":47000,"rating":4.3,"img":"https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80","images":[],"inStock":false,"description":"The JBL Quantum 910 Wireless Gaming Headset is a premium gaming headset that puts you right in the middle of the action. Featuring 40mm JBL Quantum drivers and 3D spatial sound, every footstep and explosion comes through crystal clear. The 2.4GHz / BT / 3.5mm connectivity ensures compatibility across all your devices.","specs":[{"label":"Driver","value":"40mm JBL Quantum"},{"label":"Spatial","value":"Quantum Sphere 360 Audio"},{"label":"Connectivity","value":"2.4GHz / BT / 3.5mm"},{"label":"ANC","value":"Adaptive ANC"},{"label":"Battery","value":"40 Hours"},{"label":"Mic","value":"Detachable Boom"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Sony INZONE H9 Wireless Noise Cancelling Headset","brand":"Sony","cat":"Headsets","price":68000,"old":75000,"rating":4.1,"img":"https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Sony INZONE H9 Wireless Noise Cancelling Headset is a premium gaming headset that puts you right in the middle of the action. Featuring 40mm Dynamic drivers and 3D spatial sound, every footstep and explosion comes through crystal clear. The 2.4GHz / Bluetooth 5.0 connectivity ensures compatibility across all your devices.","specs":[{"label":"Driver","value":"40mm Dynamic"},{"label":"ANC","value":"Dual Noise Sensor ANC"},{"label":"Connectivity","value":"2.4GHz / Bluetooth 5.0"},{"label":"Battery","value":"32 Hours"},{"label":"Spatial","value":"360 Spatial Sound"},{"label":"Mic","value":"Built-in Mic Array"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Turtle Beach Stealth Pro Wireless Headset","brand":"Turtle Beach","cat":"Headsets","price":55000,"old":62000,"rating":4.8,"img":"https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Turtle Beach Stealth Pro Wireless Headset is a premium gaming headset that puts you right in the middle of the action. Featuring 50mm Nanoclear Drivers drivers and 3D spatial sound, every footstep and explosion comes through crystal clear. The 2.4GHz / Bluetooth connectivity ensures compatibility across all your devices.","specs":[{"label":"Driver","value":"50mm Nanoclear Drivers"},{"label":"ANC","value":"Active Noise Cancellation"},{"label":"Battery","value":"2 x 12hr Hot-Swap"},{"label":"Connectivity","value":"2.4GHz / Bluetooth"},{"label":"Platform","value":"Multi-platform"},{"label":"Weight","value":"351g"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Creative SXFI Air Carbon USB Gaming Headset","brand":"Creative","cat":"Headsets","price":18000,"old":21000,"rating":4,"img":"https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Creative SXFI Air Carbon USB Gaming Headset is a premium gaming headset that puts you right in the middle of the action. Featuring 50mm Full-spectrum drivers and Super X-Fi SXFI Tech sound, every footstep and explosion comes through crystal clear. The USB / 3.5mm / Bluetooth connectivity ensures compatibility across all your devices.","specs":[{"label":"Driver","value":"50mm Full-spectrum"},{"label":"Audio","value":"Super X-Fi SXFI Tech"},{"label":"Connectivity","value":"USB / 3.5mm / Bluetooth"},{"label":"Mic","value":"ClearComms Detachable"},{"label":"Battery","value":"10 Hours BT"},{"label":"Weight","value":"275g"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Razer BlackWidow V4 Pro Full-Size Mechanical","brand":"Razer","cat":"Keyboards","price":28999,"old":32999,"rating":4.4,"img":"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Razer BlackWidow V4 Pro Full-Size Mechanical is a mechanical gaming keyboard built for speed and precision. Powered by Razer Green Tactile Clicky switches and featuring RGB backlighting, it delivers a satisfying and accurate typing experience. Razer's build quality ensures it will withstand tens of millions of keystrokes without missing a beat.","specs":[{"label":"Switches","value":"Razer Green Tactile Clicky"},{"label":"Layout","value":"Full Size 104-key"},{"label":"RGB","value":"Chroma Per-Key + Underglow"},{"label":"Wrist Rest","value":"Magnetic Plush"},{"label":"Polling Rate","value":"8000Hz"},{"label":"Connection","value":"USB-C Wired"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Corsair K100 RGB Flagship Mechanical Keyboard","brand":"Corsair","cat":"Keyboards","price":54000,"old":59000,"rating":5,"img":"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Corsair K100 RGB Flagship Mechanical Keyboard is a mechanical gaming keyboard built for speed and precision. Powered by Cherry MX Speed Silver switches and featuring RGB backlighting, it delivers a satisfying and accurate typing experience. Corsair's build quality ensures it will withstand tens of millions of keystrokes without missing a beat.","specs":[{"label":"Switches","value":"Cherry MX Speed Silver"},{"label":"Layout","value":"Full Size + OPX Optical"},{"label":"Control","value":"iCUE Control Wheel"},{"label":"Polling Rate","value":"8000Hz AXON"},{"label":"Frame","value":"Anodized Aluminum"},{"label":"RGB","value":"Per-Key Lightsync"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Logitech G915 TKL Lightspeed Wireless Keyboard","brand":"Logitech","cat":"Keyboards","price":46000,"old":51000,"rating":4.4,"img":"https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Logitech G915 TKL Lightspeed Wireless Keyboard is a mechanical gaming keyboard built for speed and precision. Powered by Low Profile GL Tactile switches and featuring RGB backlighting, it delivers a satisfying and accurate typing experience. Logitech's build quality ensures it will withstand tens of millions of keystrokes without missing a beat.","specs":[{"label":"Switches","value":"Low Profile GL Tactile"},{"label":"Layout","value":"TKL (Tenkeyless)"},{"label":"Connectivity","value":"Lightspeed / Bluetooth"},{"label":"Battery","value":"40 Hours"},{"label":"RGB","value":"Lightsync Per-Key"},{"label":"Thickness","value":"22mm Ultra-thin"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"SteelSeries Apex Pro TKL Wireless 2023","brand":"SteelSeries","cat":"Keyboards","price":52000,"old":58000,"rating":4.2,"img":"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80","images":[],"inStock":false,"description":"The SteelSeries Apex Pro TKL Wireless 2023 is a mechanical gaming keyboard built for speed and precision. Powered by OmniPoint 2.0 Adjustable Mag switches and featuring RGB backlighting, it delivers a satisfying and accurate typing experience. SteelSeries's build quality ensures it will withstand tens of millions of keystrokes without missing a beat.","specs":[{"label":"Switches","value":"OmniPoint 2.0 Adjustable Mag"},{"label":"Layout","value":"TKL Compact"},{"label":"Actuation","value":"0.1-4.0mm Adjustable"},{"label":"Connectivity","value":"2.4GHz / Wired USB-C"},{"label":"Battery","value":"40 Hours"},{"label":"Display","value":"OLED Smart Display"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"HyperX Alloy Origins 65 Compact Mechanical","brand":"HyperX","cat":"Keyboards","price":21000,"old":24000,"rating":4.1,"img":"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The HyperX Alloy Origins 65 Compact Mechanical is a mechanical gaming keyboard built for speed and precision. Powered by HyperX Red Linear switches and featuring RGB backlighting, it delivers a satisfying and accurate typing experience. HyperX's build quality ensures it will withstand tens of millions of keystrokes without missing a beat.","specs":[{"label":"Switches","value":"HyperX Red Linear"},{"label":"Layout","value":"65% Compact (68 Keys)"},{"label":"Build","value":"CNC Aluminum Body"},{"label":"RGB","value":"Per-Key RGB"},{"label":"Polling Rate","value":"1000Hz"},{"label":"Connection","value":"Detachable USB-C"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Wooting 60HE+ Hall Effect Gaming Keyboard","brand":"Wooting","cat":"Keyboards","price":58000,"old":65000,"rating":4.1,"img":"https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Wooting 60HE+ Hall Effect Gaming Keyboard is a mechanical gaming keyboard built for speed and precision. Powered by Lekker Linear Hall Effect switches and featuring RGB backlighting, it delivers a satisfying and accurate typing experience. Wooting's build quality ensures it will withstand tens of millions of keystrokes without missing a beat.","specs":[{"label":"Switches","value":"Lekker Linear Hall Effect"},{"label":"Layout","value":"60% Compact Layout"},{"label":"Actuation","value":"0.1-4.0mm Adjustable"},{"label":"Polling Rate","value":"1000Hz"},{"label":"Build","value":"Steel Plate + ABS Case"},{"label":"RGB","value":"Per-Key RGB"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Ducky One 3 TKL Hot-swap Mechanical Keyboard","brand":"Ducky","cat":"Keyboards","price":32000,"old":36000,"rating":4.5,"img":"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Ducky One 3 TKL Hot-swap Mechanical Keyboard is a mechanical gaming keyboard built for speed and precision. Powered by Cherry MX Red (Hot-Swap PCB) switches and featuring RGB backlighting, it delivers a satisfying and accurate typing experience. Ducky's build quality ensures it will withstand tens of millions of keystrokes without missing a beat.","specs":[{"label":"Switches","value":"Cherry MX Red (Hot-Swap PCB)"},{"label":"Layout","value":"TKL 87 Keys"},{"label":"Keycaps","value":"PBT Double-shot"},{"label":"Frame","value":"Aluminum Top Mount"},{"label":"Layer","value":"Silicone Dampening"},{"label":"RGB","value":"Per-Key RGB"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Keychron Q1 Pro QMK Wireless 75% Mechanical","brand":"Keychron","cat":"Keyboards","price":28000,"old":32000,"rating":4.5,"img":"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Keychron Q1 Pro QMK Wireless 75% Mechanical is a mechanical gaming keyboard built for speed and precision. Powered by Gateron G Pro Red (Hot-Swap) switches and featuring RGB backlighting, it delivers a satisfying and accurate typing experience. Keychron's build quality ensures it will withstand tens of millions of keystrokes without missing a beat.","specs":[{"label":"Switches","value":"Gateron G Pro Red (Hot-Swap)"},{"label":"Layout","value":"75% Layout (81 Keys)"},{"label":"Connectivity","value":"Bluetooth 5.1 / USB-C"},{"label":"Build","value":"CNC Aluminum Body"},{"label":"PCB","value":"QMK / VIA Programmable"},{"label":"Battery","value":"4000mAh"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Fnatic Streak65 LP Compact Wireless Keyboard","brand":"Fnatic","cat":"Keyboards","price":24000,"old":28000,"rating":4.6,"img":"https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Fnatic Streak65 LP Compact Wireless Keyboard is a mechanical gaming keyboard built for speed and precision. Powered by Low Profile Red Linear switches and featuring RGB backlighting, it delivers a satisfying and accurate typing experience. Fnatic's build quality ensures it will withstand tens of millions of keystrokes without missing a beat.","specs":[{"label":"Switches","value":"Low Profile Red Linear"},{"label":"Layout","value":"65% Compact"},{"label":"Connectivity","value":"2.4GHz / BT / Wired"},{"label":"Battery","value":"8000mAh"},{"label":"Actuation","value":"1.5mm Low Profile"},{"label":"Keycaps","value":"ABS Double-shot"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Roccat Vulcan II Max Full-size Optical Keyboard","brand":"Roccat","cat":"Keyboards","price":38000,"old":43000,"rating":4.3,"img":"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Roccat Vulcan II Max Full-size Optical Keyboard is a mechanical gaming keyboard built for speed and precision. Powered by Titan II Optical Linear switches and featuring RGB backlighting, it delivers a satisfying and accurate typing experience. Roccat's build quality ensures it will withstand tens of millions of keystrokes without missing a beat.","specs":[{"label":"Switches","value":"Titan II Optical Linear"},{"label":"Layout","value":"Full Size 104-key"},{"label":"RGB","value":"ARGB Transparent Housing"},{"label":"Actuation","value":"1.4mm Optical"},{"label":"Polling Rate","value":"1000Hz"},{"label":"Wrist Rest","value":"Magnetic Detachable"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"LG UltraGear 27GP850-B 27\\" QHD Nano IPS 180Hz","brand":"LG","cat":"Monitors","price":95000,"old":105000,"rating":5,"img":"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The LG UltraGear 27GP850-B 27\\" QHD Nano IPS 180Hz delivers stunning visuals with its Nano IPS panel and 2560x1440 QHD display. With 180Hz OC / 1ms GtG for silky-smooth gameplay and ultra-low response times, it's the perfect display for both competitive gaming and creative work.","specs":[{"label":"Screen","value":"27 inches"},{"label":"Panel","value":"Nano IPS"},{"label":"Resolution","value":"2560x1440 QHD"},{"label":"Refresh Rate","value":"180Hz OC / 1ms GtG"},{"label":"HDR","value":"DisplayHDR 400"},{"label":"Sync","value":"G-Sync Compatible + FreeSync"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"ASUS ROG Swift PG27AQDM 27\\" OLED QHD 240Hz","brand":"ASUS","cat":"Monitors","price":265000,"old":290000,"rating":4.5,"img":"https://images.unsplash.com/photo-1585796856573-005f653457a4?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The ASUS ROG Swift PG27AQDM 27\\" OLED QHD 240Hz delivers stunning visuals with its WOLED Panel panel and 2560x1440 QHD display. With 240Hz / 0.03ms GtG for silky-smooth gameplay and ultra-low response times, it's the perfect display for both competitive gaming and creative work.","specs":[{"label":"Screen","value":"27 inches"},{"label":"Panel","value":"WOLED Panel"},{"label":"Resolution","value":"2560x1440 QHD"},{"label":"Refresh Rate","value":"240Hz / 0.03ms GtG"},{"label":"HDR","value":"DisplayHDR True Black 400"},{"label":"Peak Brightness","value":"1000 nits"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Acer Predator X34 V 34\\" Curved OLED UW-QHD","brand":"Acer","cat":"Monitors","price":285000,"old":310000,"rating":4.6,"img":"https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Acer Predator X34 V 34\\" Curved OLED UW-QHD delivers stunning visuals with its OLED panel and 3440x1440 UW-QHD display. With 175Hz / 0.1ms GtG for silky-smooth gameplay and ultra-low response times, it's the perfect display for both competitive gaming and creative work.","specs":[{"label":"Screen","value":"34\\" 1800R Curved"},{"label":"Panel","value":"OLED"},{"label":"Resolution","value":"3440x1440 UW-QHD"},{"label":"Refresh Rate","value":"175Hz / 0.1ms GtG"},{"label":"HDR","value":"DisplayHDR True Black 400"},{"label":"Sync","value":"G-Sync Ultimate"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Samsung Odyssey Neo G7 32\\" 4K Mini-LED 165Hz","brand":"Samsung","cat":"Monitors","price":185000,"old":205000,"rating":4.1,"img":"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Samsung Odyssey Neo G7 32\\" 4K Mini-LED 165Hz delivers stunning visuals with its VA Mini-LED panel and 3840x2160 4K UHD display. With 165Hz / 1ms GtG for silky-smooth gameplay and ultra-low response times, it's the perfect display for both competitive gaming and creative work.","specs":[{"label":"Screen","value":"32 inches"},{"label":"Panel","value":"VA Mini-LED"},{"label":"Resolution","value":"3840x2160 4K UHD"},{"label":"Refresh Rate","value":"165Hz / 1ms GtG"},{"label":"HDR","value":"DisplayHDR 2000"},{"label":"Sync","value":"FreeSync Premium Pro"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"MSI MAG274QRF-QD 27\\" Rapid IPS QHD 165Hz","brand":"MSI","cat":"Monitors","price":98000,"old":110000,"rating":4.9,"img":"https://images.unsplash.com/photo-1585796856573-005f653457a4?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The MSI MAG274QRF-QD 27\\" Rapid IPS QHD 165Hz delivers stunning visuals with its Rapid IPS + Quantum Dot panel and 2560x1440 QHD display. With 165Hz / 1ms GtG for silky-smooth gameplay and ultra-low response times, it's the perfect display for both competitive gaming and creative work.","specs":[{"label":"Screen","value":"27 inches"},{"label":"Panel","value":"Rapid IPS + Quantum Dot"},{"label":"Resolution","value":"2560x1440 QHD"},{"label":"Refresh Rate","value":"165Hz / 1ms GtG"},{"label":"Colors","value":"DCI-P3 98%"},{"label":"Sync","value":"FreeSync Premium"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Dell Alienware AW2724DM 27\\" QHD Fast IPS 165Hz","brand":"Dell","cat":"Monitors","price":120000,"old":135000,"rating":4.5,"img":"https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80","images":[],"inStock":false,"description":"The Dell Alienware AW2724DM 27\\" QHD Fast IPS 165Hz delivers stunning visuals with its Fast IPS panel and 2560x1440 QHD display. With 165Hz / 1ms GtG for silky-smooth gameplay and ultra-low response times, it's the perfect display for both competitive gaming and creative work.","specs":[{"label":"Screen","value":"27 inches"},{"label":"Panel","value":"Fast IPS"},{"label":"Resolution","value":"2560x1440 QHD"},{"label":"Refresh Rate","value":"165Hz / 1ms GtG"},{"label":"HDR","value":"DisplayHDR 600"},{"label":"Sync","value":"G-Sync Compatible"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"BenQ MOBIUZ EX2710Q 27\\" IPS QHD 165Hz","brand":"BenQ","cat":"Monitors","price":85000,"old":95000,"rating":4.4,"img":"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80","images":[],"inStock":false,"description":"The BenQ MOBIUZ EX2710Q 27\\" IPS QHD 165Hz delivers stunning visuals with its IPS Panel panel and 2560x1440 QHD display. With 165Hz / 1ms GtG for silky-smooth gameplay and ultra-low response times, it's the perfect display for both competitive gaming and creative work.","specs":[{"label":"Screen","value":"27 inches"},{"label":"Panel","value":"IPS Panel"},{"label":"Resolution","value":"2560x1440 QHD"},{"label":"Refresh Rate","value":"165Hz / 1ms GtG"},{"label":"Sound","value":"2.1ch treVolo Speakers"},{"label":"Feature","value":"HDRi Intelligence"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Gigabyte M27Q X 27\\" IPS QHD 240Hz KVM Monitor","brand":"Gigabyte","cat":"Monitors","price":110000,"old":122000,"rating":4.8,"img":"https://images.unsplash.com/photo-1585796856573-005f653457a4?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Gigabyte M27Q X 27\\" IPS QHD 240Hz KVM Monitor delivers stunning visuals with its SS IPS Panel panel and 2560x1440 QHD display. With 240Hz / 0.5ms GtG for silky-smooth gameplay and ultra-low response times, it's the perfect display for both competitive gaming and creative work.","specs":[{"label":"Screen","value":"27 inches"},{"label":"Panel","value":"SS IPS Panel"},{"label":"Resolution","value":"2560x1440 QHD"},{"label":"Refresh Rate","value":"240Hz / 0.5ms GtG"},{"label":"KVM","value":"Built-in KVM Switch"},{"label":"Sync","value":"FreeSync Premium + G-Sync"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Philips Evnia 27M2C5500W 27\\" OLED QHD 240Hz","brand":"Philips","cat":"Monitors","price":175000,"old":195000,"rating":4.9,"img":"https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80","images":[],"inStock":false,"description":"The Philips Evnia 27M2C5500W 27\\" OLED QHD 240Hz delivers stunning visuals with its OLED Panel panel and 2560x1440 QHD display. With 240Hz / 0.03ms GtG for silky-smooth gameplay and ultra-low response times, it's the perfect display for both competitive gaming and creative work.","specs":[{"label":"Screen","value":"27 inches"},{"label":"Panel","value":"OLED Panel"},{"label":"Resolution","value":"2560x1440 QHD"},{"label":"Refresh Rate","value":"240Hz / 0.03ms GtG"},{"label":"Ambiglow","value":"Philips Ambiglow RGB"},{"label":"HDR","value":"DisplayHDR True Black 400"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"ViewSonic XG2431 24\\" Fast IPS FHD 240Hz ESPORTS","brand":"ViewSonic","cat":"Monitors","price":68000,"old":75000,"rating":4.5,"img":"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80","images":[],"inStock":false,"description":"The ViewSonic XG2431 24\\" Fast IPS FHD 240Hz ESPORTS delivers stunning visuals with its Fast IPS Panel panel and 1920x1080 FHD display. With 240Hz / 0.5ms GtG for silky-smooth gameplay and ultra-low response times, it's the perfect display for both competitive gaming and creative work.","specs":[{"label":"Screen","value":"23.8 inches"},{"label":"Panel","value":"Fast IPS Panel"},{"label":"Resolution","value":"1920x1080 FHD"},{"label":"Refresh Rate","value":"240Hz / 0.5ms GtG"},{"label":"Blur Red.","value":"VESA ClearMR 9000"},{"label":"Sync","value":"FreeSync Premium"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Corsair RM850x 850W 80+ Gold Fully Modular PSU","brand":"Corsair","cat":"PSUs","price":34500,"old":38500,"rating":4.5,"img":"https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Corsair RM850x 850W 80+ Gold Fully Modular PSU is a reliable 850W power supply with 80 Plus Gold certification for maximum efficiency and minimal waste heat. The Fully Modular cabling system keeps your build clean and airflow unrestricted. Built to deliver stable power under the most demanding PC configurations.","specs":[{"label":"Wattage","value":"850W"},{"label":"Efficiency","value":"80 Plus Gold"},{"label":"Modular","value":"Fully Modular"},{"label":"Capacitors","value":"Japanese 105°C"},{"label":"Fan","value":"135mm MagLev Fan"},{"label":"Zero RPM","value":"Yes"}],"createdAt":"2026-07-08T19:14:32.724Z"},{"name":"Seasonic Focus GX-850 850W 80+ Gold Modular PSU","brand":"Seasonic","cat":"PSUs","price":38000,"old":42500,"rating":4.3,"img":"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Seasonic Focus GX-850 850W 80+ Gold Modular PSU is a reliable 850W power supply with 80 Plus Gold certification for maximum efficiency and minimal waste heat. The Fully Modular cabling system keeps your build clean and airflow unrestricted. Built to deliver stable power under the most demanding PC configurations.","specs":[{"label":"Wattage","value":"850W"},{"label":"Efficiency","value":"80 Plus Gold"},{"label":"Modular","value":"Fully Modular"},{"label":"Fan","value":"135mm Fluid Dynamic"},{"label":"Protection","value":"OPP/OVP/UVP/SCP/OTP"},{"label":"Warranty","value":"10 Years"}],"createdAt":"2026-07-08T19:14:32.725Z"},{"name":"DeepCool PX1000G 1000W 80+ Gold PCIe 5.0 ATX 3.0","brand":"DeepCool","cat":"PSUs","price":38500,"old":42500,"rating":4.7,"img":"https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The DeepCool PX1000G 1000W 80+ Gold PCIe 5.0 ATX 3.0 is a reliable 1000W ATX 3.0 power supply with 80 Plus Gold certification for maximum efficiency and minimal waste heat. The Fully Modular + 12VHPWR cabling system keeps your build clean and airflow unrestricted. Built to deliver stable power under the most demanding PC configurations.","specs":[{"label":"Wattage","value":"1000W ATX 3.0"},{"label":"Efficiency","value":"80 Plus Gold"},{"label":"Modular","value":"Fully Modular + 12VHPWR"},{"label":"Capacitors","value":"Japanese"},{"label":"Fan","value":"140mm FDB Fan"},{"label":"Topology","value":"Full-Bridge LLC"}],"createdAt":"2026-07-08T19:14:32.725Z"},{"name":"Cooler Master MWE Gold 850 V2 Fully Modular PSU","brand":"Cooler Master","cat":"PSUs","price":33000,"old":36500,"rating":4.2,"img":"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Cooler Master MWE Gold 850 V2 Fully Modular PSU is a reliable 850W power supply with 80 Plus Gold certification for maximum efficiency and minimal waste heat. The Fully Modular cabling system keeps your build clean and airflow unrestricted. Built to deliver stable power under the most demanding PC configurations.","specs":[{"label":"Wattage","value":"850W"},{"label":"Efficiency","value":"80 Plus Gold"},{"label":"Modular","value":"Fully Modular"},{"label":"Temp","value":"50°C Full Load Rated"},{"label":"Fan","value":"140mm HDB Fan"},{"label":"Rail","value":"Single +12V Rail"}],"createdAt":"2026-07-08T19:14:32.725Z"},{"name":"Thermaltake Toughpower GF3 850W 80+ Gold ATX 3.0","brand":"Thermaltake","cat":"PSUs","price":32000,"old":36000,"rating":4.9,"img":"https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Thermaltake Toughpower GF3 850W 80+ Gold ATX 3.0 is a reliable 850W ATX 3.0 power supply with 80 Plus Gold certification for maximum efficiency and minimal waste heat. The Fully Modular + 12VHPWR cabling system keeps your build clean and airflow unrestricted. Built to deliver stable power under the most demanding PC configurations.","specs":[{"label":"Wattage","value":"850W ATX 3.0"},{"label":"Efficiency","value":"80 Plus Gold"},{"label":"Modular","value":"Fully Modular + 12VHPWR"},{"label":"Protection","value":"OPP/OVP/UVP/OCP/SCP/OTP"},{"label":"Fan","value":"140mm Hydraulic"},{"label":"Warranty","value":"10 Years"}],"createdAt":"2026-07-08T19:14:32.725Z"},{"name":"ASUS Prime AP-850G 850W 80+ Gold Fully Modular","brand":"ASUS","cat":"PSUs","price":35000,"old":39000,"rating":4.1,"img":"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The ASUS Prime AP-850G 850W 80+ Gold Fully Modular is a reliable 850W power supply with 80 Plus Gold certification for maximum efficiency and minimal waste heat. The Fully Modular cabling system keeps your build clean and airflow unrestricted. Built to deliver stable power under the most demanding PC configurations.","specs":[{"label":"Wattage","value":"850W"},{"label":"Efficiency","value":"80 Plus Gold"},{"label":"Modular","value":"Fully Modular"},{"label":"Fan","value":"135mm 0-dB Axial"},{"label":"Conversion","value":"DC-DC Conversion"},{"label":"Protection","value":"OPP/OVP/OCP/SCP/UVP"}],"createdAt":"2026-07-08T19:14:32.725Z"},{"name":"Silverstone SX750-PT 750W 80+ Platinum SFX PSU","brand":"Silverstone","cat":"PSUs","price":42000,"old":47000,"rating":4.1,"img":"https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Silverstone SX750-PT 750W 80+ Platinum SFX PSU is a reliable 750W SFX power supply with 80 Plus Platinum certification for maximum efficiency and minimal waste heat. The Fully Modular cabling system keeps your build clean and airflow unrestricted. Built to deliver stable power under the most demanding PC configurations.","specs":[{"label":"Wattage","value":"750W SFX"},{"label":"Efficiency","value":"80 Plus Platinum"},{"label":"Modular","value":"Fully Modular"},{"label":"Form Factor","value":"SFX + ATX Bracket"},{"label":"Fan","value":"92mm Fluid Dynamic"},{"label":"Protection","value":"Full Protection Suite"}],"createdAt":"2026-07-08T19:14:32.725Z"},{"name":"FSP Hydro GT Pro 1000W 80+ Gold ATX 3.0 PSU","brand":"FSP","cat":"PSUs","price":39000,"old":44000,"rating":4.1,"img":"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The FSP Hydro GT Pro 1000W 80+ Gold ATX 3.0 PSU is a reliable 1000W ATX 3.0 power supply with 80 Plus Gold certification for maximum efficiency and minimal waste heat. The Fully Modular + 12VHPWR cabling system keeps your build clean and airflow unrestricted. Built to deliver stable power under the most demanding PC configurations.","specs":[{"label":"Wattage","value":"1000W ATX 3.0"},{"label":"Efficiency","value":"80 Plus Gold"},{"label":"Modular","value":"Fully Modular + 12VHPWR"},{"label":"Fan","value":"140mm Double Ball Bearing"},{"label":"PCIe","value":"PCIe 5.0 Ready"},{"label":"Rail","value":"Single +12V"}],"createdAt":"2026-07-08T19:14:32.725Z"},{"name":"Super Flower Leadex VII Gold 850W Fully Modular","brand":"Super Flower","cat":"PSUs","price":36000,"old":40000,"rating":4.9,"img":"https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Super Flower Leadex VII Gold 850W Fully Modular is a reliable 850W power supply with 80 Plus Gold certification for maximum efficiency and minimal waste heat. The Fully Modular cabling system keeps your build clean and airflow unrestricted. Built to deliver stable power under the most demanding PC configurations.","specs":[{"label":"Wattage","value":"850W"},{"label":"Efficiency","value":"80 Plus Gold"},{"label":"Modular","value":"Fully Modular"},{"label":"Fan","value":"135mm Fluid Dynamic"},{"label":"APFC","value":"Active Power Factor Correction"},{"label":"Warranty","value":"10 Years"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"be quiet! Dark Power 13 850W 80+ Titanium PSU","brand":"be quiet!","cat":"PSUs","price":65000,"old":72000,"rating":4.6,"img":"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The be quiet! Dark Power 13 850W 80+ Titanium PSU is a reliable 850W power supply with 80 Plus Titanium certification for maximum efficiency and minimal waste heat. The Fully Modular cabling system keeps your build clean and airflow unrestricted. Built to deliver stable power under the most demanding PC configurations.","specs":[{"label":"Wattage","value":"850W"},{"label":"Efficiency","value":"80 Plus Titanium"},{"label":"Modular","value":"Fully Modular"},{"label":"Fan","value":"135mm Silent Wings 4"},{"label":"Noise","value":"Silent at <20% Load"},{"label":"Warranty","value":"10 Years"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"NZXT H7 Flow ATX Mid Tower Case","brand":"NZXT","cat":"Cases","price":32000,"old":36000,"rating":4.4,"img":"https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The NZXT H7 Flow ATX Mid Tower Case is a well-crafted PC chassis that balances aesthetics and airflow performance. Offering ample space for high-end components and support for large radiators, it makes building a clean, powerful system effortless. NZXT's attention to cable management and build quality makes it a favorite among PC enthusiasts.","specs":[{"label":"Form Factor","value":"ATX Mid Tower"},{"label":"Tempered Glass","value":"Front + Side TG"},{"label":"Fan Slots","value":"7 x 120mm Max"},{"label":"Radiator","value":"360mm Front Max"},{"label":"Drive Bays","value":"2x 3.5\\" + 4x 2.5\\""},{"label":"USB","value":"2x USB 3.0 + USB-C"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"Corsair 5000D Airflow ATX Mid Tower Case","brand":"Corsair","cat":"Cases","price":34000,"old":38000,"rating":4.9,"img":"https://images.unsplash.com/photo-1562976526-9900f69a2f19?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Corsair 5000D Airflow ATX Mid Tower Case is a well-crafted PC chassis that balances aesthetics and airflow performance. Offering ample space for high-end components and support for large radiators, it makes building a clean, powerful system effortless. Corsair's attention to cable management and build quality makes it a favorite among PC enthusiasts.","specs":[{"label":"Form Factor","value":"ATX Mid Tower"},{"label":"Airflow","value":"High-Airflow Front Panel"},{"label":"Fan Slots","value":"9 x 120mm Max"},{"label":"Radiator","value":"360mm Front + Top"},{"label":"GPU Length","value":"Up to 420mm"},{"label":"Drive Bays","value":"3x 3.5\\" + 2x 2.5\\""}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"Lian Li PC-O11 Dynamic EVO XL ATX Tower","brand":"Lian Li","cat":"Cases","price":38000,"old":42000,"rating":4.6,"img":"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80","images":[],"inStock":false,"description":"The Lian Li PC-O11 Dynamic EVO XL ATX Tower is a well-crafted PC chassis that balances aesthetics and airflow performance. Offering ample space for high-end components and support for large radiators, it makes building a clean, powerful system effortless. Lian Li's attention to cable management and build quality makes it a favorite among PC enthusiasts.","specs":[{"label":"Form Factor","value":"ATX / E-ATX Mid Tower"},{"label":"Tempered Glass","value":"Dual Tempered Glass"},{"label":"Fan Slots","value":"10 x 120mm Max"},{"label":"Radiator","value":"2x 360mm Support"},{"label":"Expansion","value":"7+2 PCIe Slots"},{"label":"Drive Bays","value":"2x 3.5\\" + 4x 2.5\\""}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"Fractal Design Torrent Compact ATX Case","brand":"Fractal Design","cat":"Cases","price":42000,"old":47000,"rating":4.3,"img":"https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Fractal Design Torrent Compact ATX Case is a well-crafted PC chassis that balances aesthetics and airflow performance. Offering ample space for high-end components and support for large radiators, it makes building a clean, powerful system effortless. Fractal Design's attention to cable management and build quality makes it a favorite among PC enthusiasts.","specs":[{"label":"Form Factor","value":"ATX Mid Tower"},{"label":"Front Fans","value":"2x 180mm PWM Fans"},{"label":"Top Fan","value":"1x 140mm Fan"},{"label":"GPU Length","value":"Up to 431mm"},{"label":"Radiator","value":"360mm Bottom"},{"label":"Tempered Glass","value":"Side TG Panel"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"be quiet! Pure Base 500DX ARGB ATX Case","brand":"be quiet!","cat":"Cases","price":28000,"old":32000,"rating":4.9,"img":"https://images.unsplash.com/photo-1562976526-9900f69a2f19?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The be quiet! Pure Base 500DX ARGB ATX Case is a well-crafted PC chassis that balances aesthetics and airflow performance. Offering ample space for high-end components and support for large radiators, it makes building a clean, powerful system effortless. be quiet!'s attention to cable management and build quality makes it a favorite among PC enthusiasts.","specs":[{"label":"Form Factor","value":"ATX Mid Tower"},{"label":"Noise Dampening","value":"3x Dampening Panels"},{"label":"ARGB Fans","value":"3x Light Wings ARGB"},{"label":"GPU Length","value":"Up to 369mm"},{"label":"Radiator","value":"360mm Front / Top"},{"label":"Drive Bays","value":"2x 3.5\\" + 3x 2.5\\""}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"Phanteks Eclipse G500A DRGB High-Airflow ATX","brand":"Phanteks","cat":"Cases","price":28000,"old":32000,"rating":4.1,"img":"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Phanteks Eclipse G500A DRGB High-Airflow ATX is a well-crafted PC chassis that balances aesthetics and airflow performance. Offering ample space for high-end components and support for large radiators, it makes building a clean, powerful system effortless. Phanteks's attention to cable management and build quality makes it a favorite among PC enthusiasts.","specs":[{"label":"Form Factor","value":"ATX Mid Tower"},{"label":"Front","value":"High-Airflow Mesh Panel"},{"label":"ARGB Fans","value":"3x 120mm DRGB Fans"},{"label":"GPU Length","value":"Up to 435mm"},{"label":"Radiator","value":"360mm Support"},{"label":"Drive Bays","value":"2x 3.5\\" + 3x 2.5\\""}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"Cooler Master HAF 500 Airflow ATX Mid Tower","brand":"Cooler Master","cat":"Cases","price":25000,"old":28500,"rating":4.3,"img":"https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=600&q=80","images":[],"inStock":false,"description":"The Cooler Master HAF 500 Airflow ATX Mid Tower is a well-crafted PC chassis that balances aesthetics and airflow performance. Offering ample space for high-end components and support for large radiators, it makes building a clean, powerful system effortless. Cooler Master's attention to cable management and build quality makes it a favorite among PC enthusiasts.","specs":[{"label":"Form Factor","value":"ATX Mid Tower"},{"label":"Front Fans","value":"2x 200mm ARGB Fans"},{"label":"Airflow","value":"High Air Flow Front"},{"label":"GPU Length","value":"Up to 410mm"},{"label":"Radiator","value":"360mm Front"},{"label":"USB","value":"2x USB 3.0 + USB-C"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"Thermaltake View 51 Panoramic TG ARGB Case","brand":"Thermaltake","cat":"Cases","price":35000,"old":40000,"rating":4.4,"img":"https://images.unsplash.com/photo-1562976526-9900f69a2f19?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Thermaltake View 51 Panoramic TG ARGB Case is a well-crafted PC chassis that balances aesthetics and airflow performance. Offering ample space for high-end components and support for large radiators, it makes building a clean, powerful system effortless. Thermaltake's attention to cable management and build quality makes it a favorite among PC enthusiasts.","specs":[{"label":"Form Factor","value":"Full Tower ATX"},{"label":"Tempered Glass","value":"4-Side Panoramic TG"},{"label":"ARGB Fans","value":"3x 200mm ARGB Front"},{"label":"GPU Length","value":"Up to 400mm"},{"label":"Radiator","value":"420mm Top Support"},{"label":"Drive Bays","value":"4x 3.5\\" + 3x 2.5\\""}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"Silverstone FARA B1 Pro ATX Mid Tower Case","brand":"Silverstone","cat":"Cases","price":19500,"old":22000,"rating":4.1,"img":"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Silverstone FARA B1 Pro ATX Mid Tower Case is a well-crafted PC chassis that balances aesthetics and airflow performance. Offering ample space for high-end components and support for large radiators, it makes building a clean, powerful system effortless. Silverstone's attention to cable management and build quality makes it a favorite among PC enthusiasts.","specs":[{"label":"Form Factor","value":"ATX Mid Tower"},{"label":"Front","value":"Steel Mesh Airflow"},{"label":"Fans Included","value":"1x 120mm Rear"},{"label":"GPU Length","value":"Up to 340mm"},{"label":"Radiator","value":"240mm Top + Front"},{"label":"Drive Bays","value":"2x 3.5\\" + 2x 2.5\\""}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"InWin 309 Tempered Glass ATX Mid Tower Case","brand":"InWin","cat":"Cases","price":22000,"old":25000,"rating":4.1,"img":"https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The InWin 309 Tempered Glass ATX Mid Tower Case is a well-crafted PC chassis that balances aesthetics and airflow performance. Offering ample space for high-end components and support for large radiators, it makes building a clean, powerful system effortless. InWin's attention to cable management and build quality makes it a favorite among PC enthusiasts.","specs":[{"label":"Form Factor","value":"ATX Mid Tower"},{"label":"Tempered Glass","value":"Full-length Side TG"},{"label":"Front","value":"Panoramic Mesh Panel"},{"label":"GPU Length","value":"Up to 360mm"},{"label":"Fan Slots","value":"7x 120mm Max"},{"label":"Drive Bays","value":"2x 3.5\\" + 2x 2.5\\""}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"Cooler Master Hyper 212 Halo Black ARGB Air Cooler","brand":"Cooler Master","cat":"Coolers","price":9500,"old":11000,"rating":4.7,"img":"https://images.unsplash.com/photo-1601445638532-3e6e5b893e1c?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Cooler Master Hyper 212 Halo Black ARGB Air Cooler is a high-performance CPU cooler designed to keep your processor running cool and quiet. With excellent thermal performance and near-silent operation, it's ideal for overclocking and sustained workloads. Compatible with all major Intel and AMD sockets for a wide range of build configurations.","specs":[{"label":"Type","value":"Single Tower Air Cooler"},{"label":"TDP Support","value":"Up to 250W"},{"label":"Fans","value":"2x 120mm ARGB Fans"},{"label":"Fan Speed","value":"650-2000 RPM"},{"label":"Height","value":"158.8mm"},{"label":"Sockets","value":"LGA1700/1200 + AM5/AM4"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"Noctua NH-D15 chromax.black Dual Tower Air Cooler","brand":"Noctua","cat":"Coolers","price":38000,"old":42000,"rating":4.7,"img":"https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Noctua NH-D15 chromax.black Dual Tower Air Cooler is a high-performance CPU cooler designed to keep your processor running cool and quiet. With excellent thermal performance and near-silent operation, it's ideal for overclocking and sustained workloads. Compatible with all major Intel and AMD sockets for a wide range of build configurations.","specs":[{"label":"Type","value":"Dual Tower Air Cooler"},{"label":"TDP Support","value":"250W+"},{"label":"Fans","value":"2x 140mm NF-A15 PWM"},{"label":"Fan Speed","value":"300-1500 RPM"},{"label":"Noise","value":"24.6 dB(A)"},{"label":"Height","value":"165mm"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"be quiet! Dark Rock Pro 4 Dual Tower Air Cooler","brand":"be quiet!","cat":"Coolers","price":28000,"old":32000,"rating":4.7,"img":"https://images.unsplash.com/photo-1601445638532-3e6e5b893e1c?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The be quiet! Dark Rock Pro 4 Dual Tower Air Cooler is a high-performance CPU cooler designed to keep your processor running cool and quiet. With excellent thermal performance and near-silent operation, it's ideal for overclocking and sustained workloads. Compatible with all major Intel and AMD sockets for a wide range of build configurations.","specs":[{"label":"Type","value":"Dual Tower Air Cooler"},{"label":"TDP Support","value":"250W"},{"label":"Fans","value":"1x 135mm + 1x 120mm SilentWings 3"},{"label":"Fan Speed","value":"Up to 1500 RPM"},{"label":"Noise","value":"24.3 dB(A)"},{"label":"Height","value":"162.8mm"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"DeepCool AK620 ZERO DARK Dual Tower Air Cooler","brand":"DeepCool","cat":"Coolers","price":18000,"old":21000,"rating":4.3,"img":"https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The DeepCool AK620 ZERO DARK Dual Tower Air Cooler is a high-performance CPU cooler designed to keep your processor running cool and quiet. With excellent thermal performance and near-silent operation, it's ideal for overclocking and sustained workloads. Compatible with all major Intel and AMD sockets for a wide range of build configurations.","specs":[{"label":"Type","value":"Dual Tower Air Cooler"},{"label":"TDP Support","value":"260W"},{"label":"Fans","value":"2x 120mm FDB Fans"},{"label":"Fan Speed","value":"500-1850 RPM"},{"label":"Noise","value":"28 dB(A) Max"},{"label":"Height","value":"160mm"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"Thermalright Peerless Assassin 120 SE ARGB Cooler","brand":"Thermalright","cat":"Coolers","price":12000,"old":14000,"rating":4.5,"img":"https://images.unsplash.com/photo-1601445638532-3e6e5b893e1c?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Thermalright Peerless Assassin 120 SE ARGB Cooler is a high-performance CPU cooler designed to keep your processor running cool and quiet. With excellent thermal performance and near-silent operation, it's ideal for overclocking and sustained workloads. Compatible with all major Intel and AMD sockets for a wide range of build configurations.","specs":[{"label":"Type","value":"Dual Tower Air Cooler"},{"label":"TDP Support","value":"240W"},{"label":"Fans","value":"2x 120mm ARGB"},{"label":"Fan Speed","value":"500-1550 RPM"},{"label":"Heatpipes","value":"6x 6mm Copper"},{"label":"Height","value":"155mm"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"Arctic Liquid Freezer III 360 AIO Liquid Cooler","brand":"Arctic","cat":"Coolers","price":28500,"old":32000,"rating":4.8,"img":"https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Arctic Liquid Freezer III 360 AIO Liquid Cooler is a high-performance CPU cooler designed to keep your processor running cool and quiet. With excellent thermal performance and near-silent operation, it's ideal for overclocking and sustained workloads. Compatible with all major Intel and AMD sockets for a wide range of build configurations.","specs":[{"label":"Type","value":"360mm AIO Liquid Cooler"},{"label":"Pump Speed","value":"800-2800 RPM"},{"label":"Fans","value":"3x 120mm P12 PWM PST"},{"label":"Fan Speed","value":"200-1800 RPM"},{"label":"Noise","value":"0.5 Sone Max"},{"label":"Sockets","value":"LGA1700 + AM5/AM4"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"ID-Cooling FrostFlow X 360 ARGB AIO Cooler","brand":"ID-Cooling","cat":"Coolers","price":15000,"old":17500,"rating":4.5,"img":"https://images.unsplash.com/photo-1601445638532-3e6e5b893e1c?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The ID-Cooling FrostFlow X 360 ARGB AIO Cooler is a high-performance CPU cooler designed to keep your processor running cool and quiet. With excellent thermal performance and near-silent operation, it's ideal for overclocking and sustained workloads. Compatible with all major Intel and AMD sockets for a wide range of build configurations.","specs":[{"label":"Type","value":"360mm AIO Liquid Cooler"},{"label":"Radiator","value":"360mm Aluminum"},{"label":"Fans","value":"3x 120mm ARGB PWM"},{"label":"Fan Speed","value":"700-1800 RPM"},{"label":"Pump Speed","value":"3000 RPM"},{"label":"RGB","value":"ARGB Infinity Mirror"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"Corsair iCUE H150i Elite LCD XT 360mm AIO","brand":"Corsair","cat":"Coolers","price":55000,"old":62000,"rating":4.1,"img":"https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Corsair iCUE H150i Elite LCD XT 360mm AIO is a high-performance CPU cooler designed to keep your processor running cool and quiet. With excellent thermal performance and near-silent operation, it's ideal for overclocking and sustained workloads. Compatible with all major Intel and AMD sockets for a wide range of build configurations.","specs":[{"label":"Type","value":"360mm AIO Liquid Cooler"},{"label":"Display","value":"2.1\\" IPS LCD Pump Head"},{"label":"Fans","value":"3x 120mm AF120 Elite"},{"label":"Fan Speed","value":"Up to 2000 RPM"},{"label":"Software","value":"iCUE Control"},{"label":"RGB","value":"Full iCUE RGB Ecosystem"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"NZXT Kraken 360 RGB AIO Liquid Cooler","brand":"NZXT","cat":"Coolers","price":45000,"old":51000,"rating":4.8,"img":"https://images.unsplash.com/photo-1601445638532-3e6e5b893e1c?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The NZXT Kraken 360 RGB AIO Liquid Cooler is a high-performance CPU cooler designed to keep your processor running cool and quiet. With excellent thermal performance and near-silent operation, it's ideal for overclocking and sustained workloads. Compatible with all major Intel and AMD sockets for a wide range of build configurations.","specs":[{"label":"Type","value":"360mm AIO Liquid Cooler"},{"label":"Display","value":"1.54\\" LCD Infinity Display"},{"label":"Fans","value":"3x 120mm F120 RGB Core"},{"label":"Fan Speed","value":"500-2000 RPM"},{"label":"Software","value":"NZXT CAM"},{"label":"Sockets","value":"LGA1700 + AM5/AM4"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"Lian Li Galahad II Trinity 360 ARGB AIO Cooler","brand":"Lian Li","cat":"Coolers","price":38000,"old":43000,"rating":4.2,"img":"https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Lian Li Galahad II Trinity 360 ARGB AIO Cooler is a high-performance CPU cooler designed to keep your processor running cool and quiet. With excellent thermal performance and near-silent operation, it's ideal for overclocking and sustained workloads. Compatible with all major Intel and AMD sockets for a wide range of build configurations.","specs":[{"label":"Type","value":"360mm AIO Liquid Cooler"},{"label":"Head","value":"ARGB 60mm Pump Head"},{"label":"Fans","value":"3x 120mm ARGB PWM"},{"label":"Fan Speed","value":"800-2200 RPM"},{"label":"Control","value":"L-Connect 3 Software"},{"label":"Radiator","value":"28mm Thickness"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"ASUS ROG Strix G16 G614 RTX 4070 Gaming Laptop","brand":"ASUS","cat":"Laptops","price":499000,"old":549000,"rating":5,"img":"https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The ASUS ROG Strix G16 G614 RTX 4070 Gaming Laptop is a powerful gaming laptop that brings desktop-grade performance to your backpack. Equipped with NVIDIA RTX 4070 8GB and a 16\\" QHD+ 240Hz, it handles the latest AAA titles and creative applications without breaking a sweat. ASUS's thermal engineering ensures sustained performance under load.","specs":[{"label":"CPU","value":"Intel Core i9-13980HX"},{"label":"GPU","value":"NVIDIA RTX 4070 8GB"},{"label":"Display","value":"16\\" QHD+ 240Hz"},{"label":"RAM","value":"32GB DDR5"},{"label":"Storage","value":"1TB NVMe SSD"},{"label":"Battery","value":"90Wh"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"MSI Raider GE78 HX RTX 4090 Gaming Laptop","brand":"MSI","cat":"Laptops","price":785000,"old":850000,"rating":5,"img":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=600&q=80","images":[],"inStock":false,"description":"The MSI Raider GE78 HX RTX 4090 Gaming Laptop is a powerful gaming laptop that brings desktop-grade performance to your backpack. Equipped with NVIDIA RTX 4090 16GB and a 17\\" QHD+ 240Hz Mini-LED, it handles the latest AAA titles and creative applications without breaking a sweat. MSI's thermal engineering ensures sustained performance under load.","specs":[{"label":"CPU","value":"Intel Core i9-13950HX"},{"label":"GPU","value":"NVIDIA RTX 4090 16GB"},{"label":"Display","value":"17\\" QHD+ 240Hz Mini-LED"},{"label":"RAM","value":"32GB DDR5"},{"label":"Storage","value":"2TB NVMe SSD"},{"label":"Battery","value":"99.9Wh"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"Acer Predator Helios Neo 16 RTX 4060 Laptop","brand":"Acer","cat":"Laptops","price":299000,"old":329000,"rating":4.9,"img":"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Acer Predator Helios Neo 16 RTX 4060 Laptop is a powerful gaming laptop that brings desktop-grade performance to your backpack. Equipped with NVIDIA RTX 4060 8GB and a 16\\" WUXGA 165Hz IPS, it handles the latest AAA titles and creative applications without breaking a sweat. Acer's thermal engineering ensures sustained performance under load.","specs":[{"label":"CPU","value":"Intel Core i7-13700HX"},{"label":"GPU","value":"NVIDIA RTX 4060 8GB"},{"label":"Display","value":"16\\" WUXGA 165Hz IPS"},{"label":"RAM","value":"16GB DDR5"},{"label":"Storage","value":"512GB NVMe SSD"},{"label":"Battery","value":"76Wh"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"Lenovo Legion Pro 7i Gen 8 RTX 4080 Laptop","brand":"Lenovo","cat":"Laptops","price":599000,"old":659000,"rating":4.9,"img":"https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80","images":[],"inStock":false,"description":"The Lenovo Legion Pro 7i Gen 8 RTX 4080 Laptop is a powerful gaming laptop that brings desktop-grade performance to your backpack. Equipped with NVIDIA RTX 4080 12GB and a 16\\" WQXGA 240Hz IPS, it handles the latest AAA titles and creative applications without breaking a sweat. Lenovo's thermal engineering ensures sustained performance under load.","specs":[{"label":"CPU","value":"Intel Core i9-13900HX"},{"label":"GPU","value":"NVIDIA RTX 4080 12GB"},{"label":"Display","value":"16\\" WQXGA 240Hz IPS"},{"label":"RAM","value":"32GB DDR5"},{"label":"Storage","value":"1TB NVMe SSD"},{"label":"Battery","value":"99.9Wh"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"Dell Alienware m18 R2 RTX 4090 Gaming Laptop","brand":"Dell","cat":"Laptops","price":749000,"old":819000,"rating":4.5,"img":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=600&q=80","images":[],"inStock":false,"description":"The Dell Alienware m18 R2 RTX 4090 Gaming Laptop is a powerful gaming laptop that brings desktop-grade performance to your backpack. Equipped with NVIDIA RTX 4090 16GB and a 18\\" FHD+ 480Hz QD-OLED, it handles the latest AAA titles and creative applications without breaking a sweat. Dell's thermal engineering ensures sustained performance under load.","specs":[{"label":"CPU","value":"Intel Core i9-14900HX"},{"label":"GPU","value":"NVIDIA RTX 4090 16GB"},{"label":"Display","value":"18\\" FHD+ 480Hz QD-OLED"},{"label":"RAM","value":"32GB DDR5"},{"label":"Storage","value":"1TB NVMe SSD"},{"label":"Battery","value":"86Wh"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"HP Omen 16 RTX 4060 Gaming Laptop 2024","brand":"HP","cat":"Laptops","price":279000,"old":309000,"rating":4.3,"img":"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The HP Omen 16 RTX 4060 Gaming Laptop 2024 is a powerful gaming laptop that brings desktop-grade performance to your backpack. Equipped with NVIDIA RTX 4060 8GB and a 16.1\\" FHD 165Hz IPS, it handles the latest AAA titles and creative applications without breaking a sweat. HP's thermal engineering ensures sustained performance under load.","specs":[{"label":"CPU","value":"Intel Core i7-13700HX"},{"label":"GPU","value":"NVIDIA RTX 4060 8GB"},{"label":"Display","value":"16.1\\" FHD 165Hz IPS"},{"label":"RAM","value":"16GB DDR5"},{"label":"Storage","value":"512GB NVMe SSD"},{"label":"Battery","value":"83Wh"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"Gigabyte Aorus 16X RTX 4070 Ti Gaming Laptop","brand":"Gigabyte","cat":"Laptops","price":385000,"old":425000,"rating":5,"img":"https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Gigabyte Aorus 16X RTX 4070 Ti Gaming Laptop is a powerful gaming laptop that brings desktop-grade performance to your backpack. Equipped with NVIDIA RTX 4070 Ti 8GB and a 16\\" QHD+ 165Hz, it handles the latest AAA titles and creative applications without breaking a sweat. Gigabyte's thermal engineering ensures sustained performance under load.","specs":[{"label":"CPU","value":"Intel Core i9-13980HX"},{"label":"GPU","value":"NVIDIA RTX 4070 Ti 8GB"},{"label":"Display","value":"16\\" QHD+ 165Hz"},{"label":"RAM","value":"16GB DDR5"},{"label":"Storage","value":"1TB NVMe SSD"},{"label":"Feature","value":"AI Power Balancer"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"Razer Blade 16 RTX 4090 Ultra Gaming Laptop","brand":"Razer","cat":"Laptops","price":899000,"old":979000,"rating":4.6,"img":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Razer Blade 16 RTX 4090 Ultra Gaming Laptop is a powerful gaming laptop that brings desktop-grade performance to your backpack. Equipped with NVIDIA RTX 4090 16GB and a 16\\" Mini-LED QHD+ 240Hz, it handles the latest AAA titles and creative applications without breaking a sweat. Razer's thermal engineering ensures sustained performance under load.","specs":[{"label":"CPU","value":"Intel Core i9-13950HX"},{"label":"GPU","value":"NVIDIA RTX 4090 16GB"},{"label":"Display","value":"16\\" Mini-LED QHD+ 240Hz"},{"label":"RAM","value":"32GB DDR5"},{"label":"Storage","value":"1TB NVMe SSD"},{"label":"Build","value":"CNC Aluminum Unibody"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"Samsung Galaxy Book4 Ultra RTX 4070 Laptop","brand":"Samsung","cat":"Laptops","price":499000,"old":549000,"rating":4.7,"img":"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80","images":[],"inStock":true,"description":"The Samsung Galaxy Book4 Ultra RTX 4070 Laptop is a powerful gaming laptop that brings desktop-grade performance to your backpack. Equipped with NVIDIA RTX 4070 8GB and a 16\\" 3K 120Hz AMOLED, it handles the latest AAA titles and creative applications without breaking a sweat. Samsung's thermal engineering ensures sustained performance under load.","specs":[{"label":"CPU","value":"Intel Core Ultra 9 185H"},{"label":"GPU","value":"NVIDIA RTX 4070 8GB"},{"label":"Display","value":"16\\" 3K 120Hz AMOLED"},{"label":"RAM","value":"32GB LPDDR5X"},{"label":"Storage","value":"1TB NVMe SSD"},{"label":"Weight","value":"1.86kg"}],"createdAt":"2026-07-08T19:14:32.726Z"},{"name":"Apple MacBook Pro M3 Max 16-inch Laptop","brand":"Apple","cat":"Laptops","price":699000,"old":759000,"rating":4.8,"img":"https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80","images":[],"inStock":false,"description":"The Apple MacBook Pro M3 Max 16-inch Laptop is a powerful gaming laptop that brings desktop-grade performance to your backpack. Equipped with 40-core GPU and a 16.2\\" Liquid Retina XDR, it handles the latest AAA titles and creative applications without breaking a sweat. Apple's thermal engineering ensures sustained performance under load.","specs":[{"label":"Chip","value":"Apple M3 Max (14+30 core)"},{"label":"GPU","value":"40-core GPU"},{"label":"Display","value":"16.2\\" Liquid Retina XDR"},{"label":"RAM","value":"36GB Unified Memory"},{"label":"Storage","value":"1TB SSD"},{"label":"Battery","value":"Up to 22 Hours"}],"createdAt":"2026-07-08T19:14:32.726Z"}]`);
const initialProducts = seedData;
function isValidObjectId(id) {
  return /^[0-9a-fA-F]{24}$/.test(id);
}
const detailedInfoMap = {
  "1": {
    description: "The MSI GeForce RTX 4060 Ventus 2X is a powerful graphics card designed for gamers and creators. Powered by the NVIDIA Ada Lovelace architecture, it delivers incredible performance with ray tracing and AI-powered graphics. The dual-fan cooling system ensures optimal thermal performance under heavy loads.",
    specs: [{
      label: "GPU Architecture",
      value: "NVIDIA Ada Lovelace"
    }, {
      label: "CUDA Cores",
      value: "3072"
    }, {
      label: "Base Clock",
      value: "1830 MHz"
    }, {
      label: "Boost Clock",
      value: "2460 MHz"
    }, {
      label: "Memory",
      value: "8GB GDDR6"
    }, {
      label: "Memory Interface",
      value: "128-bit"
    }, {
      label: "DisplayPort",
      value: "3 x DP 1.4a"
    }, {
      label: "HDMI",
      value: "1 x HDMI 2.1"
    }, {
      label: "Power Consumption",
      value: "170W"
    }, {
      label: "Recommended PSU",
      value: "550W"
    }]
  },
  "2": {
    description: "The ASUS TUF B550-PLUS WIFI II is a durable motherboard built for AMD Ryzen processors. Featuring military-grade components, PCIe 4.0 support, and integrated WiFi 6, it's perfect for building a reliable gaming PC that can handle the latest titles.",
    specs: [{
      label: "Socket",
      value: "AM4"
    }, {
      label: "Chipset",
      value: "AMD B550"
    }, {
      label: "Form Factor",
      value: "ATX"
    }, {
      label: "Memory Support",
      value: "DDR4 up to 128GB"
    }, {
      label: "Memory Slots",
      value: "4 x DIMM"
    }, {
      label: "Max Memory Speed",
      value: "5100+ MHz"
    }, {
      label: "PCIe Slots",
      value: "1 x PCIe 4.0 x16, 2 x PCIe 3.0 x1"
    }, {
      label: "M.2 Slots",
      value: "2 x M.2 (PCIe 4.0)"
    }, {
      label: "SATA Ports",
      value: "6 x SATA 6Gb/s"
    }, {
      label: "WiFi",
      value: "Intel WiFi 6"
    }]
  },
  "3": {
    description: "The AMD Ryzen 5 5600X is a high-performance desktop processor with 6 cores and 12 threads, designed for elite gaming and content creation. It delivers exceptional single-core and multi-core performance.",
    specs: [{
      label: "Cores / Threads",
      value: "6 Cores / 12 Threads"
    }, {
      label: "Base Clock",
      value: "3.7 GHz"
    }, {
      label: "Boost Clock",
      value: "4.6 GHz"
    }, {
      label: "Socket",
      value: "AM4"
    }, {
      label: "L3 Cache",
      value: "32MB"
    }, {
      label: "TDP",
      value: "65W"
    }, {
      label: "PCIe Version",
      value: "PCIe 4.0"
    }]
  },
  "4": {
    description: "Corsair Vengeance RGB high-performance DDR4 memory lights up your PC with dynamic, individually addressable RGB lighting, while delivering high performance optimized for Intel and AMD DDR4 motherboards.",
    specs: [{
      label: "Memory Type",
      value: "DDR4"
    }, {
      label: "Capacity",
      value: "16GB (2 x 8GB)"
    }, {
      label: "Frequency",
      value: "3200 MHz"
    }, {
      label: "Latency",
      value: "CL16"
    }, {
      label: "Voltage",
      value: "1.35V"
    }, {
      label: "RGB Lighting",
      value: "Yes, Addressable"
    }]
  },
  "5": {
    description: "Unleash the power of the Samsung 980 PRO PCIe 4.0 NVMe SSD for next-level computing. Delivering read speeds up to 7,000 MB/s, it pushes the limits of what SSDs can do.",
    specs: [{
      label: "Form Factor",
      value: "M.2 (2280)"
    }, {
      label: "Interface",
      value: "PCIe Gen 4.0 x4, NVMe 1.3c"
    }, {
      label: "Seq. Read Speed",
      value: "Up to 7,000 MB/s"
    }, {
      label: "Seq. Write Speed",
      value: "Up to 5,000 MB/s"
    }, {
      label: "Capacity",
      value: "1TB"
    }, {
      label: "TBW Rating",
      value: "600 TBW"
    }]
  },
  "6": {
    description: "The Logitech G502 Hero features an advanced optical sensor for maximum tracking accuracy, customizable RGB lighting, custom game profiles, and repositionable weights.",
    specs: [{
      label: "Sensor",
      value: "HERO 25K"
    }, {
      label: "DPI Range",
      value: "100 - 25,600 DPI"
    }, {
      label: "Buttons",
      value: "11 Programmable"
    }, {
      label: "Weight",
      value: "121g (adjustable)"
    }, {
      label: "Connection",
      value: "Wired USB"
    }, {
      label: "RGB",
      value: "LIGHTSYNC RGB"
    }]
  },
  "7": {
    description: "The HyperX Cloud II is a legendary gaming headset featuring 53mm drivers and virtual 7.1 surround sound for immersive audio detail, built with signature memory foam cushions for supreme comfort.",
    specs: [{
      label: "Driver Size",
      value: "53mm"
    }, {
      label: "Sound Type",
      value: "Virtual 7.1 Surround"
    }, {
      label: "Frequency Response",
      value: "15Hz - 25kHz"
    }, {
      label: "Connectivity",
      value: "3.5mm Jack + USB Control Box"
    }, {
      label: "Microphone",
      value: "Detachable Noise Cancelling"
    }, {
      label: "Weight",
      value: "320g"
    }]
  },
  "8": {
    description: "The Redragon K552 is a compact 87-key mechanical keyboard with dust-proof blue switches, RGB backlighting, and a heavy-duty metal construction built for competitive gaming.",
    specs: [{
      label: "Layout",
      value: "Tenkeyless (87 Keys)"
    }, {
      label: "Switch Type",
      value: "Outemu Blue (Clicky)"
    }, {
      label: "Backlight",
      value: "Rainbow RGB"
    }, {
      label: "Connection",
      value: "Wired USB"
    }, {
      label: "Anti-Ghosting",
      value: "100% Anti-Ghosting Keys"
    }]
  },
  "9": {
    description: "The Acer Nitro VG240Y gaming monitor delivers fast refresh rate and response time, with Full HD resolution and IPS technology, perfect for tear-free gaming sessions.",
    specs: [{
      label: "Screen Size",
      value: "23.8 inches"
    }, {
      label: "Panel Type",
      value: "IPS"
    }, {
      label: "Resolution",
      value: "1920 x 1080 (FHD)"
    }, {
      label: "Refresh Rate",
      value: "165Hz"
    }, {
      label: "Response Time",
      value: "1ms (VRB)"
    }, {
      label: "Inputs",
      value: "2 x HDMI, 1 x DP"
    }]
  },
  "17": {
    description: "The Razer BlackWidow V4 Pro is a premium mechanical gaming keyboard featuring Razer Chroma RGB lighting, programmable keys, and tactile switches for precise gaming control.",
    specs: [{
      label: "Switch Type",
      value: "Razer Green Tactile"
    }, {
      label: "Layout",
      value: "Full Size"
    }, {
      label: "Connectivity",
      value: "Wired USB"
    }, {
      label: "Key Rollover",
      value: "N-Key Rollover"
    }, {
      label: "Backlight",
      value: "Razer Chroma RGB"
    }, {
      label: "Media Keys",
      value: "Dedicated"
    }, {
      label: "Wrist Rest",
      value: "Included"
    }, {
      label: "Cable Length",
      value: "2m Braided"
    }, {
      label: "Dimensions",
      value: "458 x 166 x 43mm"
    }, {
      label: "Weight",
      value: "1.32kg"
    }]
  },
  "18": {
    description: 'The LG UltraGear 34" curved gaming monitor delivers immersive visuals with QHD resolution, 165Hz refresh rate, and 1ms response time for competitive gaming.',
    specs: [{
      label: "Panel Size",
      value: "34 inches"
    }, {
      label: "Resolution",
      value: "3440 x 1440 QHD"
    }, {
      label: "Refresh Rate",
      value: "165Hz"
    }, {
      label: "Response Time",
      value: "1ms (GtG)"
    }, {
      label: "Panel Type",
      value: "Nano IPS"
    }, {
      label: "Curvature",
      value: "1900R"
    }, {
      label: "Brightness",
      value: "400 nits"
    }, {
      label: "HDR",
      value: "VESA DisplayHDR 400"
    }, {
      label: "Connectivity",
      value: "2 x HDMI, 1 x DP"
    }, {
      label: "VESA Mount",
      value: "100 x 100mm"
    }]
  },
  "19": {
    description: "The HyperX Cloud III Wireless headset features 53mm drivers, wireless connectivity, and a detachable microphone for crystal clear communication.",
    specs: [{
      label: "Driver Size",
      value: "53mm"
    }, {
      label: "Frequency Response",
      value: "10Hz - 21kHz"
    }, {
      label: "Impedance",
      value: "32 Ohm"
    }, {
      label: "Connectivity",
      value: "Wireless 2.4GHz + USB-C"
    }, {
      label: "Battery Life",
      value: "Up to 120 hours"
    }, {
      label: "Microphone",
      value: "Detachable"
    }, {
      label: "Microphone Type",
      value: "Noise-cancelling"
    }, {
      label: "Ear Cushions",
      value: "Memory Foam"
    }, {
      label: "Weight",
      value: "298g"
    }, {
      label: "Platform",
      value: "PC, PS5, Switch"
    }]
  },
  "20": {
    description: "The Logitech G Pro X Superlight 2 is an ultra-lightweight wireless gaming mouse with HERO 2 sensor and 25,600 DPI for precision tracking.",
    specs: [{
      label: "Sensor",
      value: "HERO 2"
    }, {
      label: "DPI Range",
      value: "100 - 25,600"
    }, {
      label: "Tracking Speed",
      value: "400+ IPS"
    }, {
      label: "Weight",
      value: "60g"
    }, {
      label: "Buttons",
      value: "5 Programmable"
    }, {
      label: "Switches",
      value: "Lightforce"
    }, {
      label: "Battery Life",
      value: "Up to 95 hours"
    }, {
      label: "Connectivity",
      value: "LIGHTSPEED Wireless"
    }, {
      label: "Polling Rate",
      value: "2000 Hz"
    }, {
      label: "Ambidextrous",
      value: "Yes"
    }]
  },
  "21": {
    description: 'The ASUS ROG Strix G16 is a powerful gaming laptop featuring Intel Core i9 processor, NVIDIA RTX 4070 GPU, and a 16" QHD display for immersive gaming.',
    specs: [{
      label: "Processor",
      value: "Intel Core i9-13980HX"
    }, {
      label: "Graphics",
      value: "NVIDIA RTX 4070 8GB"
    }, {
      label: "Display",
      value: '16" QHD 240Hz'
    }, {
      label: "RAM",
      value: "32GB DDR5"
    }, {
      label: "Storage",
      value: "1TB NVMe SSD"
    }, {
      label: "Operating System",
      value: "Windows 11"
    }, {
      label: "Keyboard",
      value: "RGB Backlit"
    }, {
      label: "Battery",
      value: "90Wh"
    }, {
      label: "Weight",
      value: "2.5kg"
    }, {
      label: "Wi-Fi",
      value: "Wi-Fi 6E"
    }]
  },
  "22": {
    description: "The NVIDIA RTX 4080 Super Founders Edition is a flagship graphics card featuring 16GB GDDR6X memory, DLSS 3, and ray tracing for next-gen gaming.",
    specs: [{
      label: "GPU Architecture",
      value: "NVIDIA Ada Lovelace"
    }, {
      label: "CUDA Cores",
      value: "10240"
    }, {
      label: "Base Clock",
      value: "2290 MHz"
    }, {
      label: "Boost Clock",
      value: "2550 MHz"
    }, {
      label: "Memory",
      value: "16GB GDDR6X"
    }, {
      label: "Memory Interface",
      value: "256-bit"
    }, {
      label: "DisplayPort",
      value: "3 x DP 1.4a"
    }, {
      label: "HDMI",
      value: "1 x HDMI 2.1"
    }, {
      label: "Power Consumption",
      value: "320W"
    }, {
      label: "Recommended PSU",
      value: "750W"
    }]
  }
};
const getProductsFn_createServerFn_handler = createServerRpc({
  id: "8c9a97a378fcbfdb5c3d841452ba8d14a55e62871650e7063b4f68e67b8cfebb",
  name: "getProductsFn",
  filename: "src/functions/products.ts"
}, (opts) => getProductsFn.__executeServer(opts));
const getProductsFn = createServerFn({
  method: "GET"
}).handler(getProductsFn_createServerFn_handler, async () => {
  try {
    const db = await connectToDatabase();
    const items = await db.collection("products").find({}).sort({
      createdAt: -1
    }).toArray();
    return items.map((item) => ({
      id: item.customId || item._id.toString(),
      _id: item._id.toString(),
      name: item.name,
      brand: item.brand,
      cat: item.cat,
      price: item.price,
      old: item.old,
      rating: item.rating,
      img: item.img,
      images: item.images || [],
      inStock: item.inStock,
      description: item.description,
      specs: item.specs,
      reviews: item.reviews || Math.floor(Math.random() * 40) + 10
    }));
  } catch (error) {
    console.error("getProductsFn error:", error);
    return initialProducts;
  }
});
const getProductByIdFn_createServerFn_handler = createServerRpc({
  id: "24c7a133b54ac5045a58146c82e749a196cd2e5730afcdf64763a37203db36d2",
  name: "getProductByIdFn",
  filename: "src/functions/products.ts"
}, (opts) => getProductByIdFn.__executeServer(opts));
const getProductByIdFn = createServerFn({
  method: "GET"
}).validator((data) => data).handler(getProductByIdFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    let item = null;
    if (isValidObjectId(data.id)) {
      item = await db.collection("products").findOne({
        _id: new libExports.ObjectId(data.id)
      });
    }
    if (!item) {
      item = await db.collection("products").findOne({
        customId: data.id
      });
    }
    if (item) {
      return {
        id: item.customId || item._id.toString(),
        _id: item._id.toString(),
        name: item.name,
        brand: item.brand,
        cat: item.cat,
        price: item.price,
        old: item.old,
        rating: item.rating,
        img: item.img,
        images: item.images || [],
        inStock: item.inStock,
        description: item.description || `This high quality product from ${item.brand} is built for peak efficiency.`,
        specs: item.specs || [],
        reviews: item.reviews || Math.floor(Math.random() * 40) + 10
      };
    }
    const staticProduct = initialProducts.find((p) => p.id === data.id || p.customId === data.id);
    if (staticProduct) {
      const details = detailedInfoMap[staticProduct.id] || {
        description: `This high quality product from ${staticProduct.brand} is built for peak efficiency.`,
        specs: []
      };
      return {
        ...staticProduct,
        images: [],
        description: details.description,
        specs: details.specs,
        reviews: staticProduct.rating * 12
      };
    }
    return null;
  } catch (error) {
    console.error("getProductByIdFn error:", error);
    const staticProduct = initialProducts.find((p) => p.id === data.id || p.customId === data.id);
    return staticProduct ? {
      ...staticProduct,
      images: [],
      description: "",
      specs: [],
      reviews: 24
    } : null;
  }
});
const getRelatedProductsFn_createServerFn_handler = createServerRpc({
  id: "8a1cb0500c28962192ca18eb2eb2cec7e891c3ed61fd0e78e7cad3566271c9b7",
  name: "getRelatedProductsFn",
  filename: "src/functions/products.ts"
}, (opts) => getRelatedProductsFn.__executeServer(opts));
const getRelatedProductsFn = createServerFn({
  method: "GET"
}).validator((data) => data).handler(getRelatedProductsFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const query = {
      cat: data.category
    };
    if (isValidObjectId(data.excludeId)) {
      query._id = {
        $ne: new libExports.ObjectId(data.excludeId)
      };
    } else {
      query.customId = {
        $ne: data.excludeId
      };
    }
    const items = await db.collection("products").find(query).limit(4).toArray();
    const mapped = items.map((item) => ({
      id: item.customId || item._id.toString(),
      _id: item._id.toString(),
      name: item.name,
      brand: item.brand,
      cat: item.cat,
      price: item.price,
      old: item.old || item.price * 1.1,
      rating: item.rating,
      img: item.img,
      images: item.images || [],
      inStock: item.inStock,
      description: item.description || "",
      specs: item.specs || [],
      reviews: item.reviews || Math.floor(Math.random() * 40) + 10
    }));
    if (mapped.length < 4) {
      let fallbacks = initialProducts.filter((p) => p.cat === data.category && p.id !== data.excludeId && !mapped.some((m) => m.id === p.id));
      if (mapped.length + fallbacks.length < 4) {
        const generalFallbacks = initialProducts.filter((p) => p.id !== data.excludeId && p.cat !== data.category && !mapped.some((m) => m.id === p.id) && !fallbacks.some((f) => f.id === p.id));
        fallbacks = [...fallbacks, ...generalFallbacks];
      }
      const mappedFallbacks = fallbacks.slice(0, 4 - mapped.length).map((p) => ({
        id: p.id,
        name: p.name,
        brand: p.brand,
        cat: p.cat,
        price: p.price,
        old: p.old || p.price * 1.1,
        rating: p.rating,
        img: p.img,
        images: [],
        inStock: p.inStock,
        description: "",
        specs: [],
        reviews: p.rating * 12
      }));
      return [...mapped, ...mappedFallbacks];
    }
    return mapped;
  } catch (error) {
    console.error("getRelatedProductsFn error:", error);
    return initialProducts.filter((p) => p.cat === data.category && p.id !== data.excludeId).slice(0, 4).map((p) => ({
      id: p.id,
      name: p.name,
      brand: p.brand,
      cat: p.cat,
      price: p.price,
      old: p.old || p.price * 1.1,
      rating: p.rating,
      img: p.img,
      images: [],
      inStock: p.inStock,
      description: "",
      specs: [],
      reviews: p.rating * 12
    }));
  }
});
const createProductFn_createServerFn_handler = createServerRpc({
  id: "5bdadcce831b169e6db1c88c00ee8f00f2889a387879d1710140db42cddbd437",
  name: "createProductFn",
  filename: "src/functions/products.ts"
}, (opts) => createProductFn.__executeServer(opts));
const createProductFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(createProductFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const newId = new libExports.ObjectId();
    const product = {
      _id: newId,
      customId: newId.toString(),
      ...data,
      createdAt: /* @__PURE__ */ new Date()
    };
    await db.collection("products").insertOne(product);
    return {
      success: true,
      id: newId.toString()
    };
  } catch (error) {
    console.error("createProductFn error:", error);
    throw error;
  }
});
const updateProductFn_createServerFn_handler = createServerRpc({
  id: "cdfffacdf7e2a9a94403bc07481a47ae6ce1e0531d5f1cd38bc18fadd3257fbc",
  name: "updateProductFn",
  filename: "src/functions/products.ts"
}, (opts) => updateProductFn.__executeServer(opts));
const updateProductFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(updateProductFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    const {
      id,
      ...fieldsToUpdate
    } = data;
    let result = null;
    if (isValidObjectId(id)) {
      result = await db.collection("products").updateOne({
        _id: new libExports.ObjectId(id)
      }, {
        $set: fieldsToUpdate
      });
    }
    if (!result || result.matchedCount === 0) {
      result = await db.collection("products").updateOne({
        customId: id
      }, {
        $set: fieldsToUpdate
      });
    }
    if (result && result.matchedCount > 0) {
      return {
        success: true
      };
    } else {
      throw new Error("Product not found for update");
    }
  } catch (error) {
    console.error("updateProductFn error:", error);
    throw error;
  }
});
const deleteProductFn_createServerFn_handler = createServerRpc({
  id: "629300ed5cdc7c9e66cd5663e8878d43e637d51dd65574b979953f1303545b51",
  name: "deleteProductFn",
  filename: "src/functions/products.ts"
}, (opts) => deleteProductFn.__executeServer(opts));
const deleteProductFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(deleteProductFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const db = await connectToDatabase();
    let result = null;
    if (isValidObjectId(data.id)) {
      result = await db.collection("products").deleteOne({
        _id: new libExports.ObjectId(data.id)
      });
    }
    if (!result || result.deletedCount === 0) {
      result = await db.collection("products").deleteOne({
        customId: data.id
      });
    }
    if (result && result.deletedCount > 0) {
      return {
        success: true
      };
    } else {
      throw new Error("Product not found for deletion");
    }
  } catch (error) {
    console.error("deleteProductFn error:", error);
    throw error;
  }
});
const seedProductsFn_createServerFn_handler = createServerRpc({
  id: "7e06a30da09f112c2c1b898e67148ec50d12baca9d3d3ff858fc76c55ccd67c4",
  name: "seedProductsFn",
  filename: "src/functions/products.ts"
}, (opts) => seedProductsFn.__executeServer(opts));
const seedProductsFn = createServerFn({
  method: "POST"
}).handler(seedProductsFn_createServerFn_handler, async () => {
  try {
    const db = await connectToDatabase();
    await db.collection("products").deleteMany({});
    await ensureProductsSeeded(db);
    return {
      success: true
    };
  } catch (error) {
    console.error("seedProductsFn error:", error);
    throw error;
  }
});
const uploadImageToCloudinaryFn_createServerFn_handler = createServerRpc({
  id: "dd553e1c36ee85a93c43b2312efcce33642975a68c465f09c7c49dcdb9c4ff09",
  name: "uploadImageToCloudinaryFn",
  filename: "src/functions/products.ts"
}, (opts) => uploadImageToCloudinaryFn.__executeServer(opts));
const uploadImageToCloudinaryFn = createServerFn({
  method: "POST"
}).validator((data) => data).handler(uploadImageToCloudinaryFn_createServerFn_handler, async ({
  data
}) => {
  try {
    const cloudName = (process.env.CLOUDINARY_CLOUD_NAME || "").trim();
    const apiKey = (process.env.CLOUDINARY_API_KEY || "").trim();
    const apiSecret = (process.env.CLOUDINARY_API_SECRET || "").trim();
    if (!cloudName || !apiKey || !apiSecret) {
      throw new Error("Cloudinary credentials are not fully configured in environment variables (.env file).");
    }
    const timestamp = Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3).toString();
    const folder = "fastcomputers";
    const signatureString = `folder=${folder}&timestamp=${timestamp}${apiSecret}`;
    const signature = require$$1.createHash("sha1").update(signatureString).digest("hex");
    const formData = new FormData();
    formData.append("file", data.base64Data);
    formData.append("api_key", apiKey);
    formData.append("timestamp", timestamp);
    formData.append("folder", folder);
    formData.append("signature", signature);
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: "POST",
      body: formData
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Cloudinary upload failure response:", errorText);
      let message = `Cloudinary API error (status ${response.status})`;
      try {
        const parsed = JSON.parse(errorText);
        if (parsed.error?.message) message = parsed.error.message;
      } catch {
      }
      throw new Error(message);
    }
    const result = await response.json();
    return {
      url: result.secure_url
    };
  } catch (error) {
    console.error("uploadImageToCloudinaryFn error:", error);
    throw new Error(error.message || "Image upload failed");
  }
});
async function ensureProductsSeeded(db) {
  const count = await db.collection("products").countDocuments();
  if (count === 0) {
    const productsToInsert = initialProducts.map((p) => {
      const {
        id,
        _id,
        ...rest
      } = p;
      const resolvedCustomId = p.customId || p.id;
      return {
        ...rest,
        ...resolvedCustomId ? {
          customId: resolvedCustomId
        } : {},
        createdAt: /* @__PURE__ */ new Date()
      };
    });
    if (productsToInsert.length > 0) {
      await db.collection("products").insertMany(productsToInsert);
    }
  }
}
export {
  createProductFn_createServerFn_handler,
  deleteProductFn_createServerFn_handler,
  getProductByIdFn_createServerFn_handler,
  getProductsFn_createServerFn_handler,
  getRelatedProductsFn_createServerFn_handler,
  seedProductsFn_createServerFn_handler,
  updateProductFn_createServerFn_handler,
  uploadImageToCloudinaryFn_createServerFn_handler
};
