import { Link, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useContext, useState } from "react";
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
      <div className=" absolute z-20">
        <ModalLogOut
          show={showModal}
          handleClick={handleClick}
          handleCancel={handleCancel}
        />
      </div>
      <div
        className={
          active
            ? "flex-col flex  items-center fixed inset-0 text-2xl font-itim bg-mm backedrop-blur-lg gap-10  md:hidden transform -translate-x-40 -translate-y-72 "
            : "hidden "
        }
      >
        <ul className="bg-mm text-white fixed inset-0  flex-col flex items-center justify-center mt-60  gap-8 left-32 ">
          <IoMdClose onClick={showMenu} className=" cursor-pointer " />
          <li>
            <Link to="/travels" onClick={() => showMenu(false)}>
              Nos destinations
            </Link>
          </li>

          <li>
            <Link to="/concept" onClick={() => showMenu(false)}>
              Concept
            </Link>
          </li>
          {user.message === "isLogged" ? (
            <>
              <li>
                <Link to="/myProfile" onClick={() => showMenu(false)}>
                  Mon profil
                </Link>
              </li>
              <li>
                <button
                  className="bg-transparent border-none flex gap-8 items-center"
                  type="button"
                  onClick={() => {
                    showMenu(false);
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
                <Link to="/connexion" onClick={() => showMenu(false)}>
                  Connexion
                </Link>
              </li>
              <li>
                <Link to="/inscription" onClick={() => showMenu(false)}>
                  Inscription
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
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
