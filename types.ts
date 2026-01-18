export type Category = 'spice' | 'honey' | 'set';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  weight: string;
  category: Category;
  grade?: string;
  features: string[];
  nutrition?: Record<string, string | number>;
  image: string;
  tags: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}