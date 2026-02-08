export interface Tproducts {
  id: number;
  title: string;
  category: string;
  brand: string;
  price: number;
  discount: number;
  rating: number;
  review: number;
  keySpecifications: {
    [key: string]: string;
  };
  reviews: {
    name: string;
    comment: string;
    date: string;
    rating: number;
  }[];
}
