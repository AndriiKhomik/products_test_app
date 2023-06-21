export interface Product {
  id: string;
  name: string;
  model: string;
  price: number;
  imageUrl: string;
  isAvailable: boolean;
  description: string;
}

export interface Review {
  id?: string;
  author: string;
  date: string;
  rate: number;
  comment: string;
  email: string;
  phone: string;
  saveInfo?: boolean;
}
