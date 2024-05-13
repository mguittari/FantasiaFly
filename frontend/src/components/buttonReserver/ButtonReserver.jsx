/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthenticationModal from "../modal/AuthenticationModal";

export default function ButtonReserver() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleCancel = () => {
    setShowModal(false);
  };

  const handleClick = () => {
    navigate("/connexion");
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Reserver</button>
      <AuthenticationModal
        show={showModal}
        handleClick={handleClick}
        handleCancel={handleCancel}
      />
    </div>
  );
}
