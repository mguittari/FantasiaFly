/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import ModalLogOut from "../modal/ModalLogOut";

export default function ButtonLogout() {
  const { setUser, updateToken, token } = useContext(UserContext);

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleClick = () => {
    fetch("http://localhost:3310/api/logout", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.info("res from Login", res);
        updateToken(res);
        setUser({});
        navigate("/");
      })
      .catch((err) => console.info(err));
    setShowModal(false);
  };
  return (
    <div>
      <button onClick={() => setShowModal(true)}>Déconnexion</button>
      <ModalLogOut
        show={showModal}
        handleClick={handleClick}
        handleCancel={handleCancel}
      />
    </div>
  );
}
