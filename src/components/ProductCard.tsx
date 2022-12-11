import { Box, Button, Typography } from '@mui/material';
import { useAppContainer } from './Context';

type Props = {
  product: {
    id: number;
    title: string;
    price: number;
    imageFront: string;
    sizes: string[];
    shipping: string;
  };
};

const ProductCard = ({ product }: Props) => {
  const { onAddToCartClick } = useAppContainer();
  const IMG = (imgName: any) => {
    return require(`../imgs/pizza-${imgName}.jpg`);
  };
  const handleAddToCartClick = () => {
    if (product.shipping === 'free') {
      const shippingPrice = 0;
      onAddToCartClick(
        product.id,
        product.price,
        product.title,
        shippingPrice,
        1,
        product.sizes
      );
    } else {
    }
    const shippingPrice =
      product.shipping === 'Free' ? 0 : parseFloat(product.shipping);
    console.log(parseFloat(product.shipping));

    onAddToCartClick(
      product.id,
      product.price,
      product.title,
      shippingPrice,
      1,
      product.sizes
    );
  };

  return (
    <Box
      sx={{
        margin: 2,
        padding: '5px 3px',
        background: '#e0e0e4',
        boxShadow: '11px 10px 18px -7px rgba(181,181,181,1)',
        width: 270,
      }}
    >
      {product.shipping.includes('Free') ? (
        <div className='Delivery'>{product.shipping} Delivery</div>
      ) : null}
      <img
        alt={product.title}
        src={IMG(product.imageFront)}
        width='250px'
        height='250px'
      />
      <Typography variant='h5'>{product.title}</Typography>
      {product.sizes.map(size => (
        <Typography
          variant='caption'
          className='pizzaSize'
          key={Math.random() * 10}
        >
          {' '}
          {size}{' '}
        </Typography>
      ))}
      <Typography variant='h6'>{product.price}€</Typography>
      <Button
        variant='contained'
        color='secondary'
        onClick={handleAddToCartClick}
      >
        Add to card
      </Button>
    </Box>
  );
};
export default ProductCard;
