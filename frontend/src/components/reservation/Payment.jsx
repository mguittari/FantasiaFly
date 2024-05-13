import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import CheckoutForm from "../stripe/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51P97enCpAjFkrctJ02lKDRdtKzUDc6NXWQwJH03RqAbwzYNzF9QIWS9C43p0hkjKYs5F2zeS2wjy2MsLjw84pmEz00x4ofOq1e"
);
// eslint-disable-next-line react/prop-types
export default function Payment({ totalPrice, quantity }) {
  const [clientSecret, setClientSecret] = useState("");

  console.info(totalPrice);
  console.info(quantity);

  useEffect(() => {
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
      <p>Nombre de places : {quantity}</p>
      <p>Montant à régler : {totalPrice} € TTC </p>
      {clientSecret && (
        <Elements stripe={stripePromise}>
          <CheckoutForm
            clientSecret={clientSecret}
            setClientSecret={setClientSecret}
            totalPrice={totalPrice}
            quantity={quantity}
          />
        </Elements>
      )}
    </div>
  );
}
