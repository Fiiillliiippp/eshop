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
    amount: number,
    size: string[]
  ) => void;
  amountItems: number;
  onCartProductPlus: (productId: number, totalPrice: number) => void;
  onCartProductMinus: (productId: number, totalPrice: number) => void;
  onCartProductDelete: (
    productId: number,
    totalPrice: number,
    productAmount: number
  ) => void;
  finalPrice: number;
  onSizeChange: (productId: number, sizeCost: number) => void;
};

type Props = {
  children: (props: AppState) => JSX.Element;
};
const Container = ({ children }: Props) => {
  const [cart, setCart] = useState<CartInside>([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalCartPrice, setTotalCartPrice] = useState<number>(0);

  const handleAddToCart = (
    id: number,
    price: number,
    title: string,
    shipping: number,
    amount: number,
    size: string[]
  ) => {
    setCart(prevItems => {
      const updatedItems = prevItems.map(item => {
        if (item.id === id) {
          return {
            ...item,
            totalPrice: item.totalPrice + price,
            amount: item.amount + 1,
          };
        } else {
          return item;
        }
      });
      const itemExists = updatedItems.find(item => item.id === id);
      if (!itemExists)
        return [
          ...prevItems,
          {
            id,
            price,
            title,
            shipping,
            amount,
            totalPrice: price,
            size,
          },
        ];
      return updatedItems;
    });

    setTotalAmount(totalAmount + 1);
    setTotalCartPrice(totalCartPrice + price + shipping);
  };
  const handleCartProductPlus = (productId: number, totalPrice: number) => {
    setCart(prevProduct =>
      prevProduct.map(product => {
        if (product.id === productId) {
          return {
            ...product,
            totalPrice: product.totalPrice + product.price,
            amount: product.amount + 1,
          };
        }
        return { ...product };
      })
    );
    setTotalCartPrice(totalCartPrice + totalPrice);
    setTotalAmount(totalAmount + 1);
  };

  const handleCartProductMinus = (productId: number, totalPrice: number) => {
    setCart(prevProduct =>
      prevProduct.map(product => {
        if (product.id === productId) {
          return {
            ...product,
            totalPrice: product.totalPrice - product.price,
            amount: product.amount - 1,
          };
        }
        return { ...product };
      })
    );
    setTotalCartPrice(totalCartPrice - totalPrice);
    setTotalAmount(totalAmount - 1);
  };

  const handleSizeChanging = (productId: number, sizeCost: number) => {
    setCart(prevItems =>
      prevItems.map(item => {
        if (item.id === productId) {
          return {
            ...item,
            totalPrice: sizeCost * item.amount,
          };
        }

        return item;
      })
    );
    cart.map(item => 
      setTotalCartPrice(totalCartPrice - item.totalPrice + (item.amount * sizeCost))
      )
  };

  const handleCartProductDelete = (
    productId: number,
    totalPrice: number,
    productAmount: number
  ) => {
    setCart(prevProduct =>
      prevProduct.filter(product => product.id !== productId)
    );
    setTotalCartPrice(totalCartPrice - totalPrice);
    setTotalAmount(totalAmount - productAmount);
  };

  const appState: AppState = {
    insideCart: cart,
    onAddToCartClick: handleAddToCart,
    onCartProductPlus: handleCartProductPlus,
    onCartProductMinus: handleCartProductMinus,
    amountItems: totalAmount,
    onCartProductDelete: handleCartProductDelete,
    finalPrice: totalCartPrice,
    onSizeChange: handleSizeChanging,
  };

  return <Provider value={appState}>{children(appState)}</Provider>;
};

export default Container;
