import { useState } from 'react';
import CartItemInfo from './CartItem';
import { useAppContainer } from './Context';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cart = () => {
  const { insideCart, amountItems, finalPrice } = useAppContainer();
  const [open, setOpen] = useState(false);
  return (
    <div>
      {!open && (
        <div onClick={() => setOpen(true)}>
          <ShoppingCartIcon
            sx={{ color: '#20ffca', fontSize: 45, margin: 1 }}
          />
          <span className='CartAmountSpan'>{amountItems}</span>
        </div>
      )}
      {open && (
        <div className='CartInside'>
          <div onClick={() => setOpen(false)}>
            <ShoppingCartIcon
              sx={{
                color: '#b3ffed',
                fontSize: 45,
                margin: '10px 95% 10px 5%',
              }}
            />
            <span className='CartAmountSpan'>{amountItems}</span>
          </div>

          {insideCart.map(cartProduct => (
            <CartItemInfo
              cartProduct={cartProduct}
              setOpen={setOpen}
              key={cartProduct.id}
            />
          ))}
          <div>FinalPrice {Math.round(finalPrice * 100) / 100}€ </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
