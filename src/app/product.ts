export interface Product {
  createdAt: string;
  name: string;
  image: string;
  description: string;
  rate: number;
  count: number;
  price: string;
  reviews: Array<string>;
  id: string;
}
