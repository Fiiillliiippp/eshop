export type CartItem = {
  id: number;
  price: number;
  title: string;
  shipping: number;
  amount: number;
  totalPrice: number;
  size: string[]
};
export type CartInside = CartItem[];
