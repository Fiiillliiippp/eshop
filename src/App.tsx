import { Box } from '@mui/material';
import './App.css';
import Cart from './components/Cart';
import Container from './components/Container';
import ProductHolder from './components/ProductHolder';

function App() {
  return (
    <Container>
      {params => (
        <Box
          className='App'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '96%',
            marginX: '2%',
          }}
        >
          <Box sx={{ width: '85%' }}>
            <ProductHolder />
          </Box>
          <Box sx={{ width: '15%' }}>
            <Cart />
          </Box>
        </Box>
      )}
    </Container>
  );
}

export default App;
