import { useAppContainer } from './Context';

const Cart = () => {
  const { insideCart, onCartProductPlus, onCartProductDelete } = useAppContainer();

  return (
    <div>
      {insideCart.map(cartProduct => (
        <div>
          <div>{cartProduct.title}</div>
          <div>{cartProduct.shipping}€</div>
          <div>{cartProduct.price}€</div>
          <select onChange={changing => onCartProductPlus(cartProduct.id, parseInt(changing.target.value))}>
            <option value={1 * cartProduct.price} >1x</option>
            <option value={1 * cartProduct.price}>2x</option>
            <option value={2 * cartProduct.price}>3x</option>
            <option value={3 * cartProduct.price}>4x</option>
            <option value={4 * cartProduct.price}>5x</option>
          </select>
          <div>Total: {cartProduct.shipping + cartProduct.price}€</div> 
          <button onClick={() => onCartProductDelete(cartProduct.id)}>X</button>  
        </div>
      ))}
      
    </div>
  );
};
export default Cart;
