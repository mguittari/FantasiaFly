import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Google from "../../assets/Google.png";
import INS from "../../assets/INS.png";
import Apple from "../../assets/apple.png";
import fb from "../../assets/facebook.png";

export default function InscriptionForm() {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    birth_date: "",
    email: "",
    phone_number: "",
    password: "",
    address: "",
    postal_code: "",
    city: "",
    country: "",
    img_url: "",
  });
  console.info(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Valider le mot de passe
    if (!passwordRegex.test(formData.password)) {
      // eslint-disable-next-line no-alert
      setErrorMessage(
        "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule et un chiffre."
      );
      return;
    }
    // Si le mot de passe est valide, soumettre les données
    fetch("http://localhost:3310/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        navigate("/connexion");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="flex flex-col  items-center py-24">
        <form
          className="space-y-4 p-4 md:items-center  flex flex-col justify-center shadow-2xl bg-white w-1/2   "
          onSubmit={handleSubmit}
        >
          <h1 className="mt-8 font-jacques text-2xl">Créer un compte</h1>
          <div className="flex  flex-row gap-6 md:w-96  ">
            <div className="flex flex-col">
              <h2>Prénom</h2>
              <input
                className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="Firstname"
                required
              />
            </div>
            <div className="flex flex-col">
              <h2>Nom de famille</h2>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Lastname"
                required
              />
            </div>
          </div>
          <div className="md:w-96">
            <h2>Date de naissance</h2>
            <input
              className="shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              name="birth_date"
              value={formData.birth_date}
              onChange={handleChange}
              placeholder="Date de naissance"
              required
            />
          </div>
          <div className="flex flex-row gap-6 md:w-96 ">
            <div>
              <h2>Address</h2>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                required
              />
            </div>
            <div>
              <h2>Code Postal</h2>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="postal_code"
                value={formData.postal_code}
                onChange={handleChange}
                placeholder="Postal Code"
                required
              />
            </div>
          </div>
          <div className="flex flex-row gap-6 md:w-96 ">
            <div>
              <h2>Ville</h2>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                required
              />
            </div>
            <div>
              <h2>Pays</h2>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="country"
                required
              />
            </div>
          </div>
          <div className="md:w-96">
            <h2>Numéro de téléphone</h2>
            <input
              className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="texte"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="md:w-96">
            <h2>Email</h2>
            <input
              className="shadow appearance-none border rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>

          <div className="md:w-96">
            <h2>Mot de passe</h2>
            <input
              className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline relative"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Mot de passe"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            {errorMessage && (
              <p className="text-red-500 md:w-96 ">{errorMessage}</p>
            )}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 md:w-96 rounded focus:outline-none focus:shadow-outline"
            >
              S'inscrire
            </button>

            <Link to="/connexion">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </Link>
          </div>
        </form>

        <p className=" text-center mt-4">
          Ou j'utilise un autre compte pour m'inscrire
        </p>
        <div className=" flex flex-row justify-center gap-8 mt-4 ">
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
        <p className=" text-center font-itim underline mt-4">
          En vous inscrivant, vous acceptez nos Conditions <br />
          Générales d'Utilisation.
        </p>
      </div>
      <div>
        <img className=" flex justify-center mt-8  " src={INS} alt="incsript" />
      </div>
    </>
  );
}
