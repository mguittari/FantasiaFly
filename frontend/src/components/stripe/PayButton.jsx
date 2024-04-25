import React from "react";
import { useCustomCheckout } from "@stripe/react-stripe-js";

function PayButton() {
  const { confirm, canConfirm } = useCustomCheckout();
  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
    confirm().then(() => {
      setLoading(false);
    });
  };

  return (
    // eslint-disable-next-line react/button-has-type
    <button disabled={!canConfirm || loading} onClick={handleClick}>
      Pay
    </button>
  );
}

export default PayButton;
