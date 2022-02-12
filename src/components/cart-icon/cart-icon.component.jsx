import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./cart-icon.styles";

function CartIcon() {
  const dispatch = useDispatch();
  const cartItemsCount = useSelector(selectCartItemsCount);
  const toggleCartHiddenClickHandler = () => dispatch(toggleCartHidden());

  return (
    <CartContainer onClick={toggleCartHiddenClickHandler}>
      <ShoppingIcon />
      <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
    </CartContainer>
  );
}

export default CartIcon;
