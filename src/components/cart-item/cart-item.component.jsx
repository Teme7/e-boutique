import { 
  CartItemContainer, 
  ItemDetails, 
  Name, 
  ImageContainer 
} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <ImageContainer src={imageUrl} alt={`${name}`}></ImageContainer>
      <ItemDetails>
        <Name>{name}</Name>
        <span>{quantity} X ${price}</span>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem;
