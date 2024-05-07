import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import CheckoutForm from "../stripe/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51P5ZPi1Tf5Roqbp5Lg8nvqh4QrG4YFk9O3hMrAP6PMl0GUHfTXu9mzUre6WlzhYlGJzWBC8Zv555NgEefGp13clO00u0pkFpcG"
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
