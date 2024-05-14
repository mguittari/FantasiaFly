import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import CheckoutForm from "../stripe/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51P97enCpAjFkrctJ02lKDRdtKzUDc6NXWQwJH03RqAbwzYNzF9QIWS9C43p0hkjKYs5F2zeS2wjy2MsLjw84pmEz00x4ofOq1e"
);
// eslint-disable-next-line react/prop-types
export default function Payment({ totalPrice, quantity, idTravel, idPeriod }) {
  const [clientSecret, setClientSecret] = useState("");

  console.info(totalPrice);
  console.info(quantity);
  console.info(idTravel);
  console.info(idPeriod);

  useEffect(() => {
    fetch("http://localhost:3310/pay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalAmount: totalPrice[0] }),
    })
      .then((res) => res.json())
      .then(
        (data) =>
          console.info("data", data) || setClientSecret(data.clientSecret)
      );
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
            idPeriod={idPeriod}
            idTravel={idTravel}
          />
        </Elements>
      )}
    </div>
  );
}
