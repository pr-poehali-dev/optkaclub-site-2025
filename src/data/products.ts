import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Aviator Classic",
    brand: "Ray-Ban",
    price: 8500,
    originalPrice: 12000,
    gender: "унисекс",
    season: "круглогодично",
    type: "солнцезащитные",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800",
      "https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=800",
    ],
    description:
      "Классические солнцезащитные очки в стиле авиатор с поляризованными линзами и металлической оправой.",
    features: [
      "Поляризованные линзы",
      "UV400 защита",
      "Металлическая оправа",
      "Регулируемые носоупоры",
    ],
    inStock: true,
    minOrder: 10,
  },
  {
    id: "2",
    name: "Wayfarer Bold",
    brand: "Ray-Ban",
    price: 7200,
    gender: "унисекс",
    season: "весна-лето",
    type: "солнцезащитные",
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400",
    images: [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800",
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800",
    ],
    description:
      "Стильные солнцезащитные очки Wayfarer с классическим дизайном и современными материалами.",
    features: [
      "Ацетатная оправа",
      "UV400 защита",
      "Scratch-resistant покрытие",
      "Легкий вес",
    ],
    inStock: true,
    minOrder: 8,
  },
  {
    id: "3",
    name: "Executive Pro",
    brand: "Oakley",
    price: 15000,
    originalPrice: 18500,
    gender: "мужские",
    season: "круглогодично",
    type: "оптические",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800",
      "https://images.unsplash.com/photo-1592846842584-a0bcfc79a932?w=800",
    ],
    description:
      "Элегантные оптические очки для делового образа с премиальными материалами.",
    features: [
      "Титановая оправа",
      "Антибликовое покрытие",
      "Флекс-петли",
      "Премиум оптика",
    ],
    inStock: true,
    minOrder: 5,
  },
  {
    id: "4",
    name: "Blue Light Shield",
    brand: "Gunnar",
    price: 6800,
    gender: "унисекс",
    season: "круглогодично",
    type: "компьютерные",
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=400",
    images: [
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800",
    ],
    description:
      "Компьютерные очки с защитой от синего света для комфортной работы за экраном.",
    features: [
      "Blue Light блокировка",
      "Антирефлекс покрытие",
      "Эргономичная посадка",
      "Легкая оправа",
    ],
    inStock: true,
    minOrder: 12,
  },
  {
    id: "5",
    name: "Fashion Elite",
    brand: "Prada",
    price: 22000,
    gender: "женские",
    season: "весна-лето",
    type: "солнцезащитные",
    image: "https://images.unsplash.com/photo-1609670508770-e020e815de11?w=400",
    images: [
      "https://images.unsplash.com/photo-1609670508770-e020e815de11?w=800",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800",
    ],
    description:
      "Дизайнерские солнцезащитные очки премиум-класса с уникальным стилем.",
    features: [
      "Дизайнерская оправа",
      "Premium линзы",
      "Кристаллы Swarovski",
      "Итальянская сборка",
    ],
    inStock: false,
    minOrder: 3,
  },
  {
    id: "6",
    name: "Sport Active",
    brand: "Nike",
    price: 9500,
    gender: "унисекс",
    season: "круглогодично",
    type: "солнцезащитные",
    image: "https://images.unsplash.com/photo-1615887546592-5a7bb495074b?w=400",
    images: [
      "https://images.unsplash.com/photo-1615887546592-5a7bb495074b?w=800",
    ],
    description:
      "Спортивные солнцезащитные очки с усиленной защитой и комфортной посадкой.",
    features: [
      "Спортивный дизайн",
      "Противоударные линзы",
      "Нескользящие вставки",
      "Водоотталкивающее покрытие",
    ],
    inStock: true,
    minOrder: 15,
  },
];

export const brands = ["Ray-Ban", "Oakley", "Gunnar", "Prada", "Nike"];
export const genders = ["мужские", "женские", "унисекс"];
export const seasons = ["весна-лето", "осень-зима", "круглогодично"];
export const types = ["солнцезащитные", "оптические", "компьютерные"];
