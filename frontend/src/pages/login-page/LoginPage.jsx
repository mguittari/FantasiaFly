import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Google from "../../assets/Google.png";
import Maroc2 from "../../assets/Maroc2 1.png";
import Apple from "../../assets/apple.png";
import fb from "../../assets/facebook.png";
import { UserContext } from "../../context/userContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { updateToken } = useContext(UserContext);
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });
  const handlChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handlSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3310/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForm),
    })
      .then((res) => res.json())
      .then((res) => {
        updateToken(res);
        navigate("/");
      })
      .catch((err) => console.info("err :>>", err));
  };

  return (
    <main className="min-h-[calc(100vh-160px)] bg-cream">
      <div className="flex flex-col  items-center py-24">
        <form
          className="space-y-4 p-4 items-center  flex flex-col justify-center shadow-2xl bg-white w-1/2 "
          onSubmit={handlSubmit}
        >
          <h1 className="   font-jacques  text-xl">Se connecter</h1>
          <div>
            <h2>Email</h2>
            <input
              className="shadow appearance-none border rounded  md:w-96  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              value={dataForm.email}
              onChange={handlChange}
              placeholder="Email"
            />
          </div>
          <div>
            <h2>Mot de passe</h2>
            <input
              className="shadow appearance-none border rounded md:w-96  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              value={dataForm.password}
              onChange={handlChange}
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col gap-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 md:w-96 rounded focus:outline-none focus:shadow-outline"
            >
              Se connecter
            </button>
            <Link to="/inscription">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 md:w-96 rounded focus:outline-none focus:shadow-outline"
              >
                Créer un compte
              </button>
            </Link>
          </div>
          <p className=" font-itim text-center">ou identifiez-vous autrement</p>
          <div className=" flex flex-row justify-center gap-8 ">
            <Link to="/">
              <img className="w-10 shadow-lg" src={fb} alt="fb" />
            </Link>
            <Link to="/">
              <img className="w-10 shadow-lg" src={Google} alt="google" />
            </Link>
            <Link to="/">
              <img className="w-10 shadow-lg" src={Apple} alt="apple" />
            </Link>
          </div>
          <p className=" text-center font-itim">
            En vous inscrivant, vous acceptez nos Conditions Générales
            d'Utilisation.
          </p>
        </form>
      </div>
      <div>
        <img className=" " src={Maroc2} alt="maroc" />
      </div>
    </main>
  );
  // return (
  //   <main className="min-h-[calc(100vh-160px)] bg-cream">
  //     <LoginForm />
  //   </main>
  // );
}
