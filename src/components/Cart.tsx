import { useState } from 'react';
import CartItemInfo from './CartItem';
import { useAppContainer } from './Context';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/material';

const Cart = () => {
  const { insideCart, amountItems, finalPrice } = useAppContainer();
  const [open, setOpen] = useState(false);
  return (
    <div>
      {!open && (
        <div className='closedCartIcon' onClick={() => setOpen(true)}>
          <ShoppingCartIcon
            sx={{ color: '#20ffca', fontSize: 45, margin: 1 }}
          />
          <span className='CartAmountSpan'>{amountItems}</span>
        </div>
      )}
      {open && (
        <div>
          <div className='openCartIcon' onClick={() => setOpen(false)}>
            <ShoppingCartIcon
              sx={{
                color: '#b3ffed',
                fontSize: 45,
                margin: '10px 95% 10px 5%',
              }}
            />
            <span className='CartAmountSpan'>{amountItems}</span>
          </div>
          <div className='CartInside'>
            {insideCart.map(cartProduct => (
              <CartItemInfo
                cartProduct={cartProduct}
                setOpen={setOpen}
                key={cartProduct.id}
              />
            ))}
            <Box className='finalPrice'>
              FinalPrice {Math.round(finalPrice * 100) / 100}€{' '}
            </Box>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
