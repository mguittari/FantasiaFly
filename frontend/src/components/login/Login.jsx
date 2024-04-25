/* eslint-disable jsx-a11y/control-has-associated-label */
import { useContext, useState } from "react";
import { FaUserCheck } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import ModalLogOut from "../modal/ModalLogOut";

export default function Login() {
  const { user, setUser, updateToken, token } = useContext(UserContext);
  console.info("user from Login", user);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    fetch("http://localhost:3310/api/logout", {
      // method: "POST",
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
    setShow(false);
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {user.message === "isLogged" ? (
        <>
          <ModalLogOut show={show} handleClick={handleClick} />
          <div className="flex  gap-2">
            <FaUserCheck />
            <p>{user.user.lastname}</p>
          </div>
          <button
            className="bg-transparent border-none"
            type="button"
            onClick={() => setShow(true)}
          >
            <IoMdLogOut />
          </button>
        </>
      ) : (
        <ul className="hidden md:flex gap-8 ">
          <li>
            <Link to="/connexion"> Connexion</Link>
          </li>
          <li>
            <Link to="/inscription">Inscription</Link>
          </li>
        </ul>
      )}
    </>
  );
}
