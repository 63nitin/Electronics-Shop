export interface Review {
  id: string;
  author: string;
  rating: number; // 1-5
  comment: string;
  date: string;
}

export interface Specification {
  key: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  price: number;
  category: string;
  images: string[]; // URLs
  specifications?: Specification[];
  reviews?: Review[];
  stock: number;
  sku: string;
  tags?: string[];
}

export interface Guide {
  id:string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // Markdown or HTML
  imageUrl?: string;
  relatedProductIds?: string[];
  category: string;
  lastUpdated: string;
  author?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  icon?: React.ElementType;
}
