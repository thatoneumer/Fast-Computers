import { createServerFn } from '@tanstack/react-start';
import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import crypto from 'crypto';
import seedData from '../../products_seed.json';

const initialProducts = seedData as any[];
// Helper to check if a string is a valid MongoDB ObjectId
function isValidObjectId(id: string) {
  return /^[0-9a-fA-F]{24}$/.test(id);
}

// Full detailed mock data mapper to seed detailed specifications and descriptions
const detailedInfoMap: Record<string, { description: string; specs: { label: string; value: string }[] }> = {
  "1": {
    description: "The MSI GeForce RTX 4060 Ventus 2X is a powerful graphics card designed for gamers and creators. Powered by the NVIDIA Ada Lovelace architecture, it delivers incredible performance with ray tracing and AI-powered graphics. The dual-fan cooling system ensures optimal thermal performance under heavy loads.",
    specs: [
      { label: "GPU Architecture", value: "NVIDIA Ada Lovelace" },
      { label: "CUDA Cores", value: "3072" },
      { label: "Base Clock", value: "1830 MHz" },
      { label: "Boost Clock", value: "2460 MHz" },
      { label: "Memory", value: "8GB GDDR6" },
      { label: "Memory Interface", value: "128-bit" },
      { label: "DisplayPort", value: "3 x DP 1.4a" },
      { label: "HDMI", value: "1 x HDMI 2.1" },
      { label: "Power Consumption", value: "170W" },
      { label: "Recommended PSU", value: "550W" },
    ]
  },
  "2": {
    description: "The ASUS TUF B550-PLUS WIFI II is a durable motherboard built for AMD Ryzen processors. Featuring military-grade components, PCIe 4.0 support, and integrated WiFi 6, it's perfect for building a reliable gaming PC that can handle the latest titles.",
    specs: [
      { label: "Socket", value: "AM4" },
      { label: "Chipset", value: "AMD B550" },
      { label: "Form Factor", value: "ATX" },
      { label: "Memory Support", value: "DDR4 up to 128GB" },
      { label: "Memory Slots", value: "4 x DIMM" },
      { label: "Max Memory Speed", value: "5100+ MHz" },
      { label: "PCIe Slots", value: "1 x PCIe 4.0 x16, 2 x PCIe 3.0 x1" },
      { label: "M.2 Slots", value: "2 x M.2 (PCIe 4.0)" },
      { label: "SATA Ports", value: "6 x SATA 6Gb/s" },
      { label: "WiFi", value: "Intel WiFi 6" },
    ]
  },
  "3": {
    description: "The AMD Ryzen 5 5600X is a high-performance desktop processor with 6 cores and 12 threads, designed for elite gaming and content creation. It delivers exceptional single-core and multi-core performance.",
    specs: [
      { label: "Cores / Threads", value: "6 Cores / 12 Threads" },
      { label: "Base Clock", value: "3.7 GHz" },
      { label: "Boost Clock", value: "4.6 GHz" },
      { label: "Socket", value: "AM4" },
      { label: "L3 Cache", value: "32MB" },
      { label: "TDP", value: "65W" },
      { label: "PCIe Version", value: "PCIe 4.0" },
    ]
  },
  "4": {
    description: "Corsair Vengeance RGB high-performance DDR4 memory lights up your PC with dynamic, individually addressable RGB lighting, while delivering high performance optimized for Intel and AMD DDR4 motherboards.",
    specs: [
      { label: "Memory Type", value: "DDR4" },
      { label: "Capacity", value: "16GB (2 x 8GB)" },
      { label: "Frequency", value: "3200 MHz" },
      { label: "Latency", value: "CL16" },
      { label: "Voltage", value: "1.35V" },
      { label: "RGB Lighting", value: "Yes, Addressable" },
    ]
  },
  "5": {
    description: "Unleash the power of the Samsung 980 PRO PCIe 4.0 NVMe SSD for next-level computing. Delivering read speeds up to 7,000 MB/s, it pushes the limits of what SSDs can do.",
    specs: [
      { label: "Form Factor", value: "M.2 (2280)" },
      { label: "Interface", value: "PCIe Gen 4.0 x4, NVMe 1.3c" },
      { label: "Seq. Read Speed", value: "Up to 7,000 MB/s" },
      { label: "Seq. Write Speed", value: "Up to 5,000 MB/s" },
      { label: "Capacity", value: "1TB" },
      { label: "TBW Rating", value: "600 TBW" },
    ]
  },
  "6": {
    description: "The Logitech G502 Hero features an advanced optical sensor for maximum tracking accuracy, customizable RGB lighting, custom game profiles, and repositionable weights.",
    specs: [
      { label: "Sensor", value: "HERO 25K" },
      { label: "DPI Range", value: "100 - 25,600 DPI" },
      { label: "Buttons", value: "11 Programmable" },
      { label: "Weight", value: "121g (adjustable)" },
      { label: "Connection", value: "Wired USB" },
      { label: "RGB", value: "LIGHTSYNC RGB" },
    ]
  },
  "7": {
    description: "The HyperX Cloud II is a legendary gaming headset featuring 53mm drivers and virtual 7.1 surround sound for immersive audio detail, built with signature memory foam cushions for supreme comfort.",
    specs: [
      { label: "Driver Size", value: "53mm" },
      { label: "Sound Type", value: "Virtual 7.1 Surround" },
      { label: "Frequency Response", value: "15Hz - 25kHz" },
      { label: "Connectivity", value: "3.5mm Jack + USB Control Box" },
      { label: "Microphone", value: "Detachable Noise Cancelling" },
      { label: "Weight", value: "320g" },
    ]
  },
  "8": {
    description: "The Redragon K552 is a compact 87-key mechanical keyboard with dust-proof blue switches, RGB backlighting, and a heavy-duty metal construction built for competitive gaming.",
    specs: [
      { label: "Layout", value: "Tenkeyless (87 Keys)" },
      { label: "Switch Type", value: "Outemu Blue (Clicky)" },
      { label: "Backlight", value: "Rainbow RGB" },
      { label: "Connection", value: "Wired USB" },
      { label: "Anti-Ghosting", value: "100% Anti-Ghosting Keys" },
    ]
  },
  "9": {
    description: "The Acer Nitro VG240Y gaming monitor delivers fast refresh rate and response time, with Full HD resolution and IPS technology, perfect for tear-free gaming sessions.",
    specs: [
      { label: "Screen Size", value: "23.8 inches" },
      { label: "Panel Type", value: "IPS" },
      { label: "Resolution", value: "1920 x 1080 (FHD)" },
      { label: "Refresh Rate", value: "165Hz" },
      { label: "Response Time", value: "1ms (VRB)" },
      { label: "Inputs", value: "2 x HDMI, 1 x DP" },
    ]
  },
  "17": {
    description: "The Razer BlackWidow V4 Pro is a premium mechanical gaming keyboard featuring Razer Chroma RGB lighting, programmable keys, and tactile switches for precise gaming control.",
    specs: [
      { label: "Switch Type", value: "Razer Green Tactile" },
      { label: "Layout", value: "Full Size" },
      { label: "Connectivity", value: "Wired USB" },
      { label: "Key Rollover", value: "N-Key Rollover" },
      { label: "Backlight", value: "Razer Chroma RGB" },
      { label: "Media Keys", value: "Dedicated" },
      { label: "Wrist Rest", value: "Included" },
      { label: "Cable Length", value: "2m Braided" },
      { label: "Dimensions", value: "458 x 166 x 43mm" },
      { label: "Weight", value: "1.32kg" },
    ]
  },
  "18": {
    description: "The LG UltraGear 34\" curved gaming monitor delivers immersive visuals with QHD resolution, 165Hz refresh rate, and 1ms response time for competitive gaming.",
    specs: [
      { label: "Panel Size", value: "34 inches" },
      { label: "Resolution", value: "3440 x 1440 QHD" },
      { label: "Refresh Rate", value: "165Hz" },
      { label: "Response Time", value: "1ms (GtG)" },
      { label: "Panel Type", value: "Nano IPS" },
      { label: "Curvature", value: "1900R" },
      { label: "Brightness", value: "400 nits" },
      { label: "HDR", value: "VESA DisplayHDR 400" },
      { label: "Connectivity", value: "2 x HDMI, 1 x DP" },
      { label: "VESA Mount", value: "100 x 100mm" },
    ]
  },
  "19": {
    description: "The HyperX Cloud III Wireless headset features 53mm drivers, wireless connectivity, and a detachable microphone for crystal clear communication.",
    specs: [
      { label: "Driver Size", value: "53mm" },
      { label: "Frequency Response", value: "10Hz - 21kHz" },
      { label: "Impedance", value: "32 Ohm" },
      { label: "Connectivity", value: "Wireless 2.4GHz + USB-C" },
      { label: "Battery Life", value: "Up to 120 hours" },
      { label: "Microphone", value: "Detachable" },
      { label: "Microphone Type", value: "Noise-cancelling" },
      { label: "Ear Cushions", value: "Memory Foam" },
      { label: "Weight", value: "298g" },
      { label: "Platform", value: "PC, PS5, Switch" },
    ]
  },
  "20": {
    description: "The Logitech G Pro X Superlight 2 is an ultra-lightweight wireless gaming mouse with HERO 2 sensor and 25,600 DPI for precision tracking.",
    specs: [
      { label: "Sensor", value: "HERO 2" },
      { label: "DPI Range", value: "100 - 25,600" },
      { label: "Tracking Speed", value: "400+ IPS" },
      { label: "Weight", value: "60g" },
      { label: "Buttons", value: "5 Programmable" },
      { label: "Switches", value: "Lightforce" },
      { label: "Battery Life", value: "Up to 95 hours" },
      { label: "Connectivity", value: "LIGHTSPEED Wireless" },
      { label: "Polling Rate", value: "2000 Hz" },
      { label: "Ambidextrous", value: "Yes" },
    ]
  },
  "21": {
    description: "The ASUS ROG Strix G16 is a powerful gaming laptop featuring Intel Core i9 processor, NVIDIA RTX 4070 GPU, and a 16\" QHD display for immersive gaming.",
    specs: [
      { label: "Processor", value: "Intel Core i9-13980HX" },
      { label: "Graphics", value: "NVIDIA RTX 4070 8GB" },
      { label: "Display", value: "16\" QHD 240Hz" },
      { label: "RAM", value: "32GB DDR5" },
      { label: "Storage", value: "1TB NVMe SSD" },
      { label: "Operating System", value: "Windows 11" },
      { label: "Keyboard", value: "RGB Backlit" },
      { label: "Battery", value: "90Wh" },
      { label: "Weight", value: "2.5kg" },
      { label: "Wi-Fi", value: "Wi-Fi 6E" },
    ]
  },
  "22": {
    description: "The NVIDIA RTX 4080 Super Founders Edition is a flagship graphics card featuring 16GB GDDR6X memory, DLSS 3, and ray tracing for next-gen gaming.",
    specs: [
      { label: "GPU Architecture", value: "NVIDIA Ada Lovelace" },
      { label: "CUDA Cores", value: "10240" },
      { label: "Base Clock", value: "2290 MHz" },
      { label: "Boost Clock", value: "2550 MHz" },
      { label: "Memory", value: "16GB GDDR6X" },
      { label: "Memory Interface", value: "256-bit" },
      { label: "DisplayPort", value: "3 x DP 1.4a" },
      { label: "HDMI", value: "1 x HDMI 2.1" },
      { label: "Power Consumption", value: "320W" },
      { label: "Recommended PSU", value: "750W" },
    ]
  }
};


// Server Functions

// 1. Get all products from database (seeds if empty)
export const getProductsFn = createServerFn({ method: 'GET' })
  .handler(async () => {
    try {
      const db = await connectToDatabase();

      const items = await db.collection('products').find({}).sort({ createdAt: -1 }).toArray();

      return items.map(item => ({
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
      console.error('getProductsFn error:', error);
      // Fallback to static products list
      return initialProducts;
    }
  });

// 2. Get a single product by ID
export const getProductByIdFn = createServerFn({ method: 'GET' })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();

      let item = null;

      // Try by ObjectId first if valid
      if (isValidObjectId(data.id)) {
        item = await db.collection('products').findOne({ _id: new ObjectId(data.id) });
      }

      // If not found, try customId
      if (!item) {
        item = await db.collection('products').findOne({ customId: data.id });
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

      // Fallback to initial products if matching id
      const staticProduct = initialProducts.find((p: any) => p.id === data.id || p.customId === data.id);
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
      console.error('getProductByIdFn error:', error);
      const staticProduct = initialProducts.find((p: any) => p.id === data.id || p.customId === data.id);
      return staticProduct ? { ...staticProduct, images: [], description: '', specs: [], reviews: 24 } : null;
    }
  });

// Get related products by category (database query with fallback seed)
export const getRelatedProductsFn = createServerFn({ method: 'GET' })
  .validator((data: { category: string; excludeId: string }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();
      const query: any = { cat: data.category };
      
      if (isValidObjectId(data.excludeId)) {
        query._id = { $ne: new ObjectId(data.excludeId) };
      } else {
        query.customId = { $ne: data.excludeId };
      }

      const items = await db.collection('products').find(query).limit(4).toArray();

      const mapped = items.map(item => ({
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
        description: item.description || '',
        specs: item.specs || [],
        reviews: item.reviews || Math.floor(Math.random() * 40) + 10
      }));

      if (mapped.length < 4) {
        // Try category fallbacks first
        let fallbacks = initialProducts
          .filter((p: any) => p.cat === data.category && p.id !== data.excludeId && !mapped.some(m => m.id === p.id));
        
        // If still not enough, try other categories
        if (mapped.length + fallbacks.length < 4) {
          const generalFallbacks = initialProducts
            .filter((p: any) => p.id !== data.excludeId && p.cat !== data.category && !mapped.some(m => m.id === p.id) && !fallbacks.some(f => f.id === p.id));
          fallbacks = [...fallbacks, ...generalFallbacks];
        }

        const mappedFallbacks = fallbacks
          .slice(0, 4 - mapped.length)
          .map((p: any) => ({
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
            description: '',
            specs: [],
            reviews: p.rating * 12
          }));
        
        return [...mapped, ...mappedFallbacks];
      }

      return mapped;
    } catch (error) {
      console.error('getRelatedProductsFn error:', error);
      return initialProducts
        .filter((p: any) => p.cat === data.category && p.id !== data.excludeId)
        .slice(0, 4)
        .map((p: any) => ({
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
          description: '',
          specs: [],
          reviews: p.rating * 12
        }));
    }
  });

// 3. Create a new product
export const createProductFn = createServerFn({ method: 'POST' })
  .validator((data: {
    name: string;
    brand: string;
    cat: string;
    price: number;
    old: number;
    rating: number;
    img: string;
    images?: string[];
    inStock: boolean;
    description: string;
    specs: { label: string; value: string }[];
  }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();
      
      const newId = new ObjectId();
      const product = {
        _id: newId,
        customId: newId.toString(),
        ...data,
        createdAt: new Date()
      };

      await db.collection('products').insertOne(product);

      return { success: true, id: newId.toString() };
    } catch (error) {
      console.error('createProductFn error:', error);
      throw error;
    }
  });

// 4. Update an existing product
export const updateProductFn = createServerFn({ method: 'POST' })
  .validator((data: {
    id: string;
    name: string;
    brand: string;
    cat: string;
    price: number;
    old: number;
    rating: number;
    img: string;
    images?: string[];
    inStock: boolean;
    description: string;
    specs: { label: string; value: string }[];
  }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();
      const { id, ...fieldsToUpdate } = data;

      let result = null;

      // Try update by ObjectId first
      if (isValidObjectId(id)) {
        result = await db.collection('products').updateOne(
          { _id: new ObjectId(id) },
          { $set: fieldsToUpdate }
        );
      }

      // If not updated, try by customId
      if (!result || result.matchedCount === 0) {
        result = await db.collection('products').updateOne(
          { customId: id },
          { $set: fieldsToUpdate }
        );
      }

      if (result && result.matchedCount > 0) {
        return { success: true };
      } else {
        throw new Error('Product not found for update');
      }
    } catch (error) {
      console.error('updateProductFn error:', error);
      throw error;
    }
  });

// 5. Delete a product
export const deleteProductFn = createServerFn({ method: 'POST' })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    try {
      const db = await connectToDatabase();
      let result = null;

      if (isValidObjectId(data.id)) {
        result = await db.collection('products').deleteOne({ _id: new ObjectId(data.id) });
      }

      if (!result || result.deletedCount === 0) {
        result = await db.collection('products').deleteOne({ customId: data.id });
      }

      if (result && result.deletedCount > 0) {
        return { success: true };
      } else {
        throw new Error('Product not found for deletion');
      }
    } catch (error) {
      console.error('deleteProductFn error:', error);
      throw error;
    }
  });

// 6. Reset & force seed products
export const seedProductsFn = createServerFn({ method: 'POST' })
  .handler(async () => {
    try {
      const db = await connectToDatabase();
      // Drop products collection
      await db.collection('products').deleteMany({});
      // Call seeder
      await ensureProductsSeeded(db);
      return { success: true };
    } catch (error) {
      console.error('seedProductsFn error:', error);
      throw error;
    }
  });

// 7. Upload image to Cloudinary using standard REST signed API
export const uploadImageToCloudinaryFn = createServerFn({ method: 'POST' })
  .validator((data: { base64Data: string }) => data)
  .handler(async ({ data }) => {
    try {
      const cloudName = (import.meta.env.CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME || '').trim();
      const apiKey = (import.meta.env.CLOUDINARY_API_KEY || process.env.CLOUDINARY_API_KEY || '').trim();
      const apiSecret = (import.meta.env.CLOUDINARY_API_SECRET || process.env.CLOUDINARY_API_SECRET || '').trim();

      if (!cloudName || !apiKey || !apiSecret) {
        throw new Error("Cloudinary credentials are not fully configured in environment variables (.env file).");
      }

      const timestamp = Math.round(new Date().getTime() / 1000).toString();
      const folder = 'fastcomputers';
      
      // Calculate HMAC-SHA1 signature
      const signatureString = `folder=${folder}&timestamp=${timestamp}${apiSecret}`;
      const signature = crypto.createHash('sha1').update(signatureString).digest('hex');

      // Create FormData content-type payload manually or using standard FormData
      const formData = new FormData();
      formData.append('file', data.base64Data);
      formData.append('api_key', apiKey);
      formData.append('timestamp', timestamp);
      formData.append('folder', folder);
      formData.append('signature', signature);

      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Cloudinary upload failure response:", errorText);
        let message = `Cloudinary API error (status ${response.status})`;
        try {
          const parsed = JSON.parse(errorText);
          if (parsed.error?.message) message = parsed.error.message;
        } catch {}
        throw new Error(message);
      }

      const result = (await response.json()) as { secure_url: string };
      return { url: result.secure_url };
    } catch (error: any) {
      console.error('uploadImageToCloudinaryFn error:', error);
      throw new Error(error.message || 'Image upload failed');
    }
  });

async function ensureProductsSeeded(db: any) {
  const count = await db.collection('products').countDocuments();
  if (count === 0) {
    const productsToInsert = initialProducts.map((p: any) => {
      const { id, _id, ...rest } = p;
      const resolvedCustomId = p.customId || p.id;
      return {
        ...rest,
        ...(resolvedCustomId ? { customId: resolvedCustomId } : {}),
        createdAt: new Date(),
      };
    });
    if (productsToInsert.length > 0) {
      await db.collection('products').insertMany(productsToInsert);
    }
  }
}
