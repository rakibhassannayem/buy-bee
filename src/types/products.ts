import { LucideIcon } from "lucide-react";

export interface Tproducts {
  icon?: LucideIcon;
  id: number;
  title: string;
  image: string;
  category: string;
  brand: string;
  price: number;
  discount: number;
  description: string;
  rating: number;
  review: number;
  keySpecifications: string[];
  reviews: {
    name: string;
    comment: string;
    date: string;
    rating: number;
  }[];
}
