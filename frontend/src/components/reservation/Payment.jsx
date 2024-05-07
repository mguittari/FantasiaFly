import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import CheckoutForm from "../stripe/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51HaUZjFs5eldFP7lkxwEQ01EsRIQWnzDKtxXw3r3Kr9osvn4QOQ4yF4NpD3CJT7T7JkDO5Mswoyy5aIs3YFUxhMA00LLHgtZr9"
);
// eslint-disable-next-line react/prop-types
export default function Payment({ totalPrice }) {
  const [clientSecret, setClientSecret] = useState("");

  console.info(totalPrice);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:3310/pay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalAmount: totalPrice[0] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);
  console.info("clientSecret", clientSecret);
  return (
    <div>
      <p>Montant à régler : {totalPrice} € TTC </p>
      {clientSecret && (
        <Elements stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
}
