// // import React, { useState } from "react";
// // import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// // import { useState } from "react";

// // function CheckoutForm() {
// //   const stripe = useStripe();
// //   const elements = useElements();
// //   const [error, setError] = useState(null);

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     if (!stripe || !elements) {
// //       // Stripe.js has not yet loaded.
// //       return;
// //     }

// //     // eslint-disable-next-line no-shadow
// //     const { error, paymentMethod } = await stripe.createPaymentMethod({
// //       type: "card",
// //       card: elements.getElement(CardElement),
// //     });

// //     if (error) {
// //       console.info("[error]", error);
// //       setError(error.message);
// //     } else {
// //       console.info("[PaymentMethod]", paymentMethod);
// //       // Envoyer le token de paiement à votre serveur pour traitement
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <CardElement />
// //       <button type="submit" disabled={!stripe}>
// //         Payer
// //       </button>
// //       {error && <div>{error}</div>}
// //     </form>
// //   );
// // }

// // export default CheckoutForm;

// // export default function Payment() {
// //   const itemName = "FIREIMG";
// //   const itemPrice = 500;
// //   const [quantity, setQuantity] = useState(1);
// //   const [finalAmount, setFinalAmount] = useState(itemPrice);

// //   const decrement = () => {
// //     if (quantity <= 1) {
// //       setQuantity(1);
// //       setFinalAmount(itemPrice);
// //     } else if (quantity > 1) {
// //       setQuantity(quantity - 1);
// //       setFinalAmount(finalAmount - itemPrice);
// //     }
// //   };
// //   const increment = () => {
// //     setQuantity(quantity + 1);
// //     setFinalAmount(finalAmount + itemPrice);
// //   };
// //   const checkout = async () => {
// //     try {
// //       const res = await fetch("http://localhost:3310/checkout", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         mode: "cors",
// //         body: JSON.stringify({
// //           items: [
// //             {
// //               id: 1,
// //               quantity: quantity,
// //               price: itemPrice,
// //               name: itemName,
// //             },
// //           ],
// //         }),
// //       });
// //       const data = await res.json();
// //       window.location = data.url;
// //     } catch (error) {
// //       console.info(error);
// //     }
// //   };
// //   return <div>Payment</div>;
// // }
// // import StripeContainer from "../stripe/StripeContainer";

// // export default function Payment() {
// //   return (
// //     <div>
// //       <StripeContainer />
// //     </div>
// //   );
// // }
// import { useStripe } from "@stripe/react-stripe-js";
// import React, { useState } from "react";

// export default function Payment() {
//   const [price, setPrice] = useState("");
//   const stripe = useStripe();
//   // eslint-disable-next-line consistent-return
//   const subscribe = async () => {
//     try {
//       const response = await fetch("http://localhost:3310/pay", {
//         method: "POST",
//         body: JSON.stringify({ price }),
//         headers: {
//           "content-type": "application/json",
//         },
//       });
//       const data = await response.json();
//       // eslint-disable-next-line no-undef
//       if (!response.ok) return Alert.alert(data.message);
//       const { clientSecret } = data;
//       const initSheet = await stripe.initPaymentSheet({
//         paymentIntentClientSecret: clientSecret,
//       });
//       // eslint-disable-next-line no-undef
//       if (initSheet.error) return Alert.alert(initSheet.error.message);
//       const presentSheet = await stripe.presentPaymentSheet({
//         clientSecret,
//       });
//       // eslint-disable-next-line no-undef
//       if (presentSheet.error) return Alert.alert(presentSheet.erroe.message);
//       // eslint-disable-next-line no-undef
//       Alert.alert("Payment complete, thank you!");
//     } catch (error) {
//       console.error(error);
//       // eslint-disable-next-line no-undef
//       Alert.alert("Something went wrong, try again later!");
//     }
//   };
//   return (
//     <>
//       <input
//         value={price}
//         onChange={(text) => setPrice(text)}
//         placeholder="price"
//         style={{
//           width: 300,
//           fontsize: 20,
//           padding: 10,
//           borderWidth: 1,
//         }}
//       />
//       <button type="button" onClick={subscribe} />
//     </>
//   );
// }
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../stripe/CheckoutForm";

const stripePromise = loadStripe(
  "pk_live_51P5ZPi1Tf5Roqbp5zp0Rtbs4XTUUsrrVQG6BMc4esMIOeCv7y8DDopjQWPG7cRDknTmJnro5af72nlGbddBY9QP600aPedVn7B"
);
export default function Payment() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:3310/pay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalAmount: 100 }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  return (
    <div>
      {clientSecret && (
        <Elements stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
}
