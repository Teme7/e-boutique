import { useContext } from 'react';

import { CartContext, addItemToCart } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);
  
  return (
    <div className='checkout-container'>
      <h1>Welcome to the checkout page!</h1>
      {cartItems.map((cartItem) => {
        const { id, imageUrl, name, quantity } = cartItem;
        return(
          <div key={id}>
            <img src={imageUrl} alt={`${name}`} />
            <h2>{name}</h2>
            <span>{quantity}</span>
            <button onClick={() => removeItemFromCart(cartItem)}>-</button>
            <br />
            <button onClick={() => addItemToCart(cartItem)}>+</button>
          </div>
        )
      })}
    </div>
  )
}

export default Checkout;