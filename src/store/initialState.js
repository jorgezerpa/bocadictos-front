import { Products } from '../constants';

Products.forEach(product=>  product.quantity = 0);

const CART_INITIAL_STATE = {
    products: [...Products],
  };

  
export default  CART_INITIAL_STATE;