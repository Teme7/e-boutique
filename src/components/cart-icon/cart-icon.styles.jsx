import styled from 'styled-components';

import { ReactComponent as ShoppingIConSvg } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

 /* .shopping-icon { //nested classes work within styled-components library just fine
    width: 24px;
    height: 24px;
  } */

  /* svg {  // this is also another way to target the icon in svg format and style it
    width: 24px;
    height: 24px;
  } */
`;

// bettter way to apply the styling by utlizing the full power of the library
export const ShoppingICon = styled(ShoppingIConSvg)`
  width: 24px;
  height: 24px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
