export type CartItem = {
  id: number;
  price: number;
  title: string;
  shipping: number;
  amount: number;
  totalPrice: number;
};
export type CartInside = CartItem[];
