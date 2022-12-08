export type Cart = {
  id: number,
  price: number, 
  title: string,
  shipping: number,
  amount: number
}
export type CartInside = Cart[]