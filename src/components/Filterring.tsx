import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { Products } from '../Products';
import ProductCard from './ProductCard';

const Filterring = () => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleValueClick = (clicking: any) => {
    setSelectedFilter(clicking.target.id);
  };

  let filteredData = Products.filter(Products => {
    if (selectedFilter === '' || selectedFilter === 'Delete') {
      return Products;
    } else {
      if (
        Products.shipping.toLowerCase().includes(selectedFilter.toLowerCase())
      ) {
        return Products.shipping
          .toLowerCase()
          .includes(selectedFilter.toLowerCase());
      } else if (
        Products.sizes.find(prodSize =>
          prodSize.toLowerCase().includes(selectedFilter.toLowerCase())
        )
      ) {
        return Products.sizes.map(prodSize =>
          prodSize.toLowerCase().includes(selectedFilter.toLowerCase())
        );
      }
    }
  });

  return (
    <Box sx={{ padding: 3 }}>
      <Button
        variant='text'
        id='S'
        onClick={clicking => handleValueClick(clicking)}
      >
        S
      </Button>
      <Button
        variant='text'
        id='M'
        onClick={clicking => handleValueClick(clicking)}
      >
        M
      </Button>
      <Button
        variant='text'
        id='L'
        onClick={clicking => handleValueClick(clicking)}
      >
        L
      </Button>
      <Button
        variant='text'
        id='Xl'
        onClick={clicking => handleValueClick(clicking)}
      >
        Xl
      </Button>
      <Button
        variant='text'
        id='XXl'
        onClick={clicking => handleValueClick(clicking)}
      >
        XXl
      </Button>
      <Button
        variant='text'
        id='Free'
        onClick={clicking => handleValueClick(clicking)}
      >
        Free Delivery
      </Button>
      <Button
        variant='text'
        id='Delete'
        onClick={clicking => handleValueClick(clicking)}
      >
        Delete FIlters
      </Button>
      <Box
        sx={{
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '80%',
          flexWrap: 'wrap',
        }}
      >
        {filteredData.map(product => (
          <div>
            <ProductCard product={product} key={product.id} />
          </div>
        ))}
      </Box>
    </Box>
  );
};
export default Filterring;
