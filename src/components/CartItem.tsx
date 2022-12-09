import { Box, Button, Paper, Typography } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { CartItem } from '../types/Cart';
import { useAppContainer } from './Context';

type Prosp = {
  cartProduct: CartItem;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const CartItemInfo = ({ cartProduct, setOpen }: Prosp) => {
  const {
    insideCart,
    onCartProductPlus,
    onCartProductDelete,
    onCartProductMinus,
  } = useAppContainer();

  return (
    <Box sx={{ marginY: 2 }}>
      <Paper elevation={2} sx={{ width: '90%', margin: 'auto', padding: 1 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 0,
            height: '20px',
          }}
        >
          <Typography
            variant='h5'
            sx={{ textAlign: 'start', padding: '2px, 4px' }}
          >
            {cartProduct.title}
          </Typography>
          <Box
            sx={{
              padding: 0,
              margin: 1,
              color: 'black',
              fontSize: 16,
              cursor: 'pointer',
            }}
            onClick={() => onCartProductDelete(cartProduct.id, cartProduct.totalPrice, cartProduct.amount)}
          >
            X
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            height: '26px',
          }}
        >
          <Typography variant='subtitle2'>
            Amount of Product: {cartProduct.amount}
          </Typography>
          <Box>
            <Button
              variant='outlined'
              disabled={cartProduct.amount === 1}
              sx={{
                padding: 0,
                minWidth: '20px',
                maxHeight: '20px',
                fontSize: '1.4rem',
              }}
              onClick={() =>
                onCartProductMinus(cartProduct.id, cartProduct.price)
              }
            >
              -
            </Button>
            <Button
              variant='outlined'
              sx={{
                padding: 0,
                margin: 1,
                minWidth: '20px',
                maxHeight: '20px',
                fontSize: '1.4rem',
              }}
              onClick={() =>
                onCartProductPlus(cartProduct.id, cartProduct.price)
              }
            >
              +
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            height: '22px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'baseline',
            }}
          >
            <Typography variant='subtitle2' sx={{ marginX: 1 }}>
              Shipping: {cartProduct.shipping}€
            </Typography>
            <Typography variant='body1'>{cartProduct.price}€</Typography>
          </Box>
          <Typography variant='subtitle1' sx={{ marginRight: 1, fontSize: 17 }}>
            Total: {Math.round(cartProduct.shipping + cartProduct.totalPrice *100) /100}€
          </Typography>
        </Box>
      </Paper>
    </Box>
    // }
  );
};
export default CartItemInfo;
