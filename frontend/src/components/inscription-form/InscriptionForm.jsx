import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Google from "../../assets/Google.png";
import INS from "../../assets/INS.png";
import Apple from "../../assets/apple.png";
import fb from "../../assets/facebook.png";

export default function InscriptionForm() {
  const navigate = useNavigate();

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
    img_url: "", // Champ pour stocker le chemin de l'image
  });
  console.info(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <form
        className="w-96 m-auto flex flex-col justify-center gap-4"
        onSubmit={handleSubmit}
      >
        <h1 className="mt-8 font-jacques text-2xl">Créer un compte</h1>
        <h2>Prénom</h2>
        <input
          className="border-2 pl-2 h-12"
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          placeholder="Prénom"
        />
        <h2>Nom de famille</h2>
        <input
          className="border-2 pl-2 h-12"
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="Nom de famille"
        />
        <h2>Date de naissance</h2>
        <input
          className="border-2 pl-2 h-12"
          type="date"
          name="birth_date"
          value={formData.birth_date}
          onChange={handleChange}
          placeholder="Date de naissance"
        />
        <h2>Address</h2>
        <input
          className="border-2 pl-2 h-12"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
        />
        <h2>Code Postal</h2>
        <input
          className="border-2 pl-2 h-12"
          type="text"
          name="postal_code"
          value={formData.postal_code}
          onChange={handleChange}
          placeholder="Postal Code"
        />
        <h2>Ville</h2>
        <input
          className="border-2 pl-2 h-12"
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
        />
        <h2>Pays</h2>
        <input
          className="border-2 pl-2 h-12"
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="country"
        />
        <h2>Email</h2>
        <input
          className="border-2 pl-2 h-12"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <h2>Numéro de téléphone</h2>
        <input
          className="border-2 pl-2 h-12"
          type="texte"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <h2>Mot de passe</h2>
        <input
          className="border-2 pl-2 h-12"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Mot de passe"
        />

        <button
          type="submit"
          className="h-12 bg-vert text-white hover:border-2 hover:boder-slate-700 hover:bg-white hover:text-slate-700 transition-all duration-500"
        >
          S'inscrire
        </button>
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
      <div>
        <img
          className=" flex justify-center mt-8 w-auto "
          src={INS}
          alt="incsript"
        />
      </div>
    </div>
  );
}
