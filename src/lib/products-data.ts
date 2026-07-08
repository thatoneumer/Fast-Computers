
export type Product = {
  id: string;
  name: string;
  brand: string;
  cat: string;
  price: number;
  old: number;
  rating: number;
  img: string;
  inStock: boolean;
};

export const products: Product[] = [];

export const ALL_CATEGORIES: string[] = [];
export const ALL_BRANDS: string[] = [];
export const GLOBAL_MIN = 0;
export const GLOBAL_MAX = 0;


export const sections = [
  { id: "build", label: "Custom Build", keywords: ["custom", "build", "pc", "rig", "configurator", "gaming pc"] },
  { id: "shop", label: "Shop", keywords: ["shop", "products", "catalog", "store"] },
  { id: "categories", label: "Categories", keywords: ["category", "categories", "browse"] },
];
