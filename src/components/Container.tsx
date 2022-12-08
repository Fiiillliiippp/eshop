import { useEffect, useState } from 'react';
import { Provider } from './Context';
import { Products } from '../Products';
import { CartInside } from '../types/Cart';

export type AppState = {
  insideCart: CartInside;
  onAddToCartClick: (
    id: number,
    price: number,
    title: string,
    shipping: number,
    amount: number
  ) => void;
  amountItems: number;
  onCartProductPlus: (productId: number, newPrice: number) => void;
  onCartProductMinus: (productId: number, newPrice: number) => void;
  onCartProductDelete: (productId: number) => void;
};

type Props = {
  children: (props: AppState) => JSX.Element;
};
const Container = ({ children }: Props) => {
  const [cart, setCart] = useState<CartInside>([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleAddToCart = (
    id: number,
    price: number,
    title: string,
    shipping: number,
    amount: number
  ) => {
    setCart(prevCart => [
      ...prevCart,
      {
        id,
        price,
        title,
        shipping,
        amount: 1,
      },
    ]);
    setTotalAmount(totalAmount + 1);
  };
  const handleCartProductPlus = (productId: number, newPrice: number) => {
    setCart(prevProduct =>
      prevProduct.map(product => {
        if (product.id === productId) {
          return {
            ...product,
            price: product.price + newPrice,
            amount: product.amount + 1,
          };
        }
        return { ...product };
      })
    );
    setTotalAmount(totalAmount + 1);
  };
  const handleCartProductMinus = (productId: number, newPrice: number) => {
    setCart(prevProduct =>
      prevProduct.map(product => {
        if (product.id === productId) {
          return {
            ...product,
            price: product.price - newPrice,
            amount: product.amount - 1,
          };
        }
        return { ...product };
      })
    );
    setTotalAmount(totalAmount - 1);
  };

  const handleCartProductDelete = (productId: number) => {
    setCart(prevProduct =>
      prevProduct.filter(product => product.id !== productId)
    );
  };

  const appState: AppState = {
    insideCart: cart,
    onAddToCartClick: handleAddToCart,
    onCartProductPlus: handleCartProductPlus,
    onCartProductMinus: handleCartProductMinus,
    amountItems: totalAmount,
    onCartProductDelete: handleCartProductDelete,
  };

  return <Provider value={appState}>{children(appState)}</Provider>;
};

export default Container;
