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
      <div>
        <form
          className=" w-96 m-auto flex flex-col justify-center gap-4 "
          onSubmit={handlSubmit}
        >
          <h1 className=" mt-8 font-jacques text-xl">Se connecter</h1>
          <input
            className="border-2 pl-2 h-12 "
            type="email"
            name="email"
            value={dataForm.email}
            onChange={handlChange}
            placeholder="Eamil"
          />
          <input
            className="border-2 pl-2 h-12"
            type="password"
            name="password"
            value={dataForm.password}
            onChange={handlChange}
            placeholder="Password"
          />
          <button
            type="submit"
            className=" bg-vert text-white h-12 hover:border-2 hover:border-slate-700 hover:bg-white hover:text-slate-700 transition-all duration-500"
          >
            Se connecter
          </button>
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
