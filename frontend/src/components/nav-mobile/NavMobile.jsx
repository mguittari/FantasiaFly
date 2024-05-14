import { useContext, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/image 10.png";
import { UserContext } from "../../context/userContext";
import ModalLogOut from "../modal/ModalLogOut";

// eslint-disable-next-line react/prop-types
export default function NavMobile({ showMenu, active }) {
  const { user, setUser, updateToken, token } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
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
    <>
      <ModalLogOut
        show={showModal}
        handleClick={handleClick}
        handleCancel={handleCancel}
      />

      <ul
        className={
          active
            ? "fixed left-0 top-0 w-screen h-screen flex flex-col justify-center items-center gap-10 pt-5 text-2xl font-itim bg-mm md:hidden "
            : "hidden "
        }
      >
        <RxCross1
          onClick={showMenu}
          className=" cursor-pointer absolute top-4 right-4"
        />
        <li>
          <Link to="/travels" onClick={showMenu}>
            Nos destinations
          </Link>
        </li>

        <li>
          <Link to="/concept" onClick={showMenu}>
            Concept
          </Link>
        </li>
        {user.message === "isLogged" ? (
          <>
            <li>
              <Link to="/myProfile" onClick={showMenu}>
                Mon profil
              </Link>
            </li>
            <li>
              <button
                className="bg-transparent border-none flex gap-8 items-center"
                type="button"
                onClick={() => {
                  showMenu();
                  setShowModal(true);
                }}
              >
                Se déconnecter
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/connexion" onClick={showMenu}>
                Connexion
              </Link>
            </li>
            <li>
              <Link to="/inscription" onClick={showMenu}>
                Inscription
              </Link>
            </li>
          </>
        )}
      </ul>
      <div>
        <Link to="/">
          <img
            className="w-20 justify-center md:hidden    "
            src={img}
            alt="img"
          />
        </Link>
      </div>
    </>
  );
}
