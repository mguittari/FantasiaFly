import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export default function Login() {
  const { user } = useContext(UserContext);
  console.info("user:>>", user);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {user.message === "isLogged" ? (
        <p>{user.user.lastname}</p>
      ) : (
        <ul className="hidden md:flex gap-8 ">
          <li>
            <Link to="/connexion"> Connexion</Link>
          </li>
          <li>
            <Link to="/">Inscription</Link>
          </li>
        </ul>
      )}
    </>
  );
}
