export interface Product {
  id: string;
  name: string;
  category: string;
  type: string;
  price: number;
  salePrice?: number;
  description: string;
  shortDescription: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  sizes: {
    twin: number;
    twinXL: number;
    full: number;
    queen: number;
    king: number;
    calKing: number;
  };
  firmness: number; // 1-10 scale
  materials: string[];
  warranty: string;
  trialPeriod: number; // in days
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  image?: string;
  productPurchased?: string;
}

export interface BannerItem {
  id: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}
