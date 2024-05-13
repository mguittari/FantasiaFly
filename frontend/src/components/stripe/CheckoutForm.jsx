/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Success from "../../assets/success.svg";
import { UserContext } from "../../context/userContext";

export default function CheckoutForm({
  clientSecret,

  quantity,
  totalPrice,
}) {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { token } = useContext(UserContext);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setLoading(true);
    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );

    if (error) {
      setMessage("echec");
      setLoading(false);
    } else {
      setLoading(false);
      setMessage(paymentIntent.status);

      fetch("http://localhost:3310/api/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ totalPrice: totalPrice[0], quantity }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.info("data", data);
          navigate("/");
        })
        .catch((err) => console.info(err));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="card-element" className="block mb-2 font-medium">
          Card details
        </label>
        <div className="w-96 bg-white p-4 rounded-md shadow-md">
          <CardElement
            id="card-element"
            options={{
              hidePostalCode: true,
              style: {
                base: {
                  width: "400px",
                  fontSize: "16px",
                  fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                },
              },
            }}
          />
        </div>
      </div>
      <button
        type="submit"
        className={`w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 ${
          loading ? " bg-opacity-15" : ""
        }`}
        disabled={loading}
      >
        Pay
      </button>
      {message && (
        <div className="absolute bottom-0 flex flex-row gap-4 items-center bg-white text-green-700 border px-8 py-2 rounded-lg">
          <img src={Success} className="w-8" alt="icon-sucess" />
          <p className="">{message}</p>
        </div>
      )}
    </form>
  );
}
