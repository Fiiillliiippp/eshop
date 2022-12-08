import { Box } from '@mui/material';
import { Products } from '../Products';
import Filterring from './Filterring';
import ProductCard from './ProductCard';

const ProductHolder = () => {

  return (
    <Box>
      <h1>Idea from <a href='https://react-shopping-cart-67954.firebaseapp.com/' target={"_blank"} rel="noreferrer">This Site</a></h1>
      <Filterring />
    </Box>
  );
};
export default ProductHolder;
