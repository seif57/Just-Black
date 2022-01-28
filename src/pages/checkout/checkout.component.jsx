import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import StripCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

function CheckOutPage({ cartItems, total }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>Total: ${total}</span>
      </div>
      <div className="test-warning">
        *Please Use the following Data for test Payments*
        <br />
        4242 4242 4242 4242 -Exp: "Any Date" -CVV:"Any 3 Numbers"
      </div>
      <StripCheckoutButton price={total} />
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
