import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KMpHuGZpLBWPzVwqvOliVSUvVTsDkqLK9Vzp3IOPj3fJXqO4fX4FCU1tSv9ThPPC5FaEMfoHycGQe8Cp3fbkHhG00WIfgbWpY";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Just-Black"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total Is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripCheckoutButton;
