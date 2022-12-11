import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';
import { Products } from '../Products';
import ProductCard from './ProductCard';

const Filterring = () => {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [checked, setChecked] = useState(false);
  const [freeDelivery, setFreeDeliver] = useState('');
  const handleValueClick = (clicking: any) => {
    setSelectedFilter(clicking.target.value);
  };

  const handleFreeDelivery = (checkBox: any) => {
    if (checkBox.target.checked === true) {
      setChecked(true);
      // setSelectedFilter(checkBox.target.id);
      setFreeDeliver('free');
    } else {
      setChecked(false);
      // setSelectedFilter('Delete');
      setFreeDeliver('');
    }
  };

  let filteredData = Products.filter(Products => {
    // if (selectedFilter === '' || selectedFilter === 'Delete') {
    //   return Products;
    // } else {
    //   if (
    //     Products.shipping
    //       .toLowerCase()
    //       .includes(selectedFilter.toLowerCase())
    //   ) {
    //     return Products.shipping
    //       .toLowerCase()
    //       .includes(selectedFilter.toLowerCase());
    //   } else if (
    //     Products.sizes.find(prodSize =>
    //       prodSize.toLowerCase().includes(selectedFilter.toLowerCase())
    //     )
    //   ) {
    //     return Products.sizes.map(prodSize =>
    //       prodSize.toLowerCase().includes(selectedFilter.toLowerCase())
    //     );
    //   }
    // }

    if (
      selectedFilter === '' ||
      selectedFilter === 'Delete' ||
      freeDelivery === ''
    ) {
      return Products;
    } else if (selectedFilter === '' && freeDelivery === 'free') {
      return Products.shipping
        .toLowerCase()
        .includes(freeDelivery.toLowerCase());
    } else if (
      Products.sizes.find(prodSize =>
        prodSize.toLowerCase().includes(selectedFilter.toLowerCase())
      )
    ) {
      return Products.sizes.map(prodSize =>
        prodSize.toLowerCase().includes(selectedFilter.toLowerCase())
      );
    } else if (selectedFilter !== '' && freeDelivery === 'free') {
      if (
        Products.sizes.find(prodSize =>
          prodSize.toLowerCase().includes(selectedFilter.toLowerCase())
        ) &&
        Products.shipping.toLowerCase().includes(freeDelivery.toLowerCase())
      ) {
        return (
          Products.sizes.map(prodSize =>
            prodSize.toLowerCase().includes(selectedFilter.toLowerCase())
          ) &&
          Products.shipping.toLowerCase().includes(freeDelivery.toLowerCase())
        );
      }
    }
  });

  return (
    <Box sx={{ padding: 3 }}>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id='demo-simple-select-autowidth-label'>Size</InputLabel>
        <Select
          labelId='demo-simple-select-autowidth-label'
          id='demo-simple-select-autowidth'
          onChange={clicking => handleValueClick(clicking)}
          autoWidth
          label='Size'
          value={''}
        >
          <MenuItem value='Delete'>
            <em>Choose Size</em>
          </MenuItem>
          <MenuItem value={'S'}>S</MenuItem>
          <MenuItem value={'M'}>M</MenuItem>
          <MenuItem value={'L'}>L</MenuItem>
          <MenuItem value={'XL'}>XL</MenuItem>
          <MenuItem value={'XXL'}>XXL</MenuItem>
        </Select>
      </FormControl>

      <label>
        <input
          type='checkbox'
          id='Free'
          onChange={checkBox => handleFreeDelivery(checkBox)}
        />
        Free Delivery
      </label>
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
