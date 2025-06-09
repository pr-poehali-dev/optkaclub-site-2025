export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  gender: "мужские" | "женские" | "унисекс";
  season: "весна-лето" | "осень-зима" | "круглогодично";
  type: "солнцезащитные" | "оптические" | "компьютерные";
  image: string;
  images: string[];
  description: string;
  features: string[];
  inStock: boolean;
  minOrder: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Filters {
  brand: string;
  priceRange: [number, number];
  gender: string;
  season: string;
  type: string;
  inStock: boolean;
}
