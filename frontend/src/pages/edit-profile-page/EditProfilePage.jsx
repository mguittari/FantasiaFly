import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import ModalUpdate from "../../components/modal/ModalUpdate";

export default function EditProfilePage() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const { user, token } = useContext(UserContext);

  const id = user?.user?.id;

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    address: "",
    postal_code: "",
    city: "",
    country: "",
  });

  useEffect(() => {
    if (user && user.user) {
      setFormData({
        firstname: user.user.firstname,
        lastname: user.user.lastname,
        email: user.user.email,
        phone_number: user.user.phone_number,
        address: user.user.address,
        postal_code: user.user.postal_code,
        city: user.user.city,
        country: user.user.country,
      });
    }
  }, [user]);

  console.info("/me:", user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3310/api/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .catch((error) => {
        console.error("Error:", error);
      });

    const storage = [];
    // storage.push(formData);
    const messageInLocalStorage =
      JSON.parse(localStorage.getItem("message")) || [];
    console.info(messageInLocalStorage);
    if (messageInLocalStorage.length) {
      messageInLocalStorage.push(formData);
      localStorage.setItem("message", JSON.stringify(messageInLocalStorage));
    } else {
      storage.push(formData);
      localStorage.setItem("message", JSON.stringify(storage));
    }
    setMessage(
      "Vos informations ont bien été mises à jour. Vous allez être redirigé vers votre page profil dans un instant."
    );
    setShow(true);
    setTimeout(() => {
      navigate("/myProfile");
      setShow(false);
      window.location.reload();
    }, 5000);
  };
  return (
    <div className="py-10 bg-cream">
      <form
        className="w-96 mx-auto flex flex-col justify-center gap-4 bg-white p-5 shadow-xl rounded-2xl"
        onSubmit={handleSubmit}
      >
        <h1 className="font-jacques text-2xl">Je modifie mes informations</h1>

        <label htmlFor="firstname">Prénom</label>
        <input
          className="border-2 pl-2 h-12"
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          placeholder=""
          required
        />
        <label htmlFor="lastname">Nom de famille</label>
        <input
          className="border-2 pl-2 h-12"
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="lastname"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          className="border-2 pl-2 h-12"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email"
          required
        />
        <label htmlFor="phone">Numéro de téléphone</label>
        <input
          className="border-2 pl-2 h-12"
          type="text"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          placeholder="phone_number"
          required
        />
        <label htmlFor="address">Address</label>
        <input
          className="border-2 pl-2 h-12"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="address"
          required
        />
        <label htmlFor="postal code">Postal Code</label>
        <input
          className="border-2 pl-2 h-12"
          type="text"
          name="postal_code"
          value={formData.postal_code}
          onChange={handleChange}
          placeholder="postal code"
          required
        />
        <label htmlFor="city">City</label>
        <input
          className="border-2 pl-2 h-12"
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="city"
          required
        />
        <label htmlFor="Country">Country</label>
        <input
          className="border-2 pl-2 h-12"
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="country"
          required
        />
        <h2> Composant Mise à jour mot de passe</h2>

        <button
          type="submit"
          className="h-12 bg-vert text-white hover:border-2 hover:boder-slate-700 hover:bg-white hover:text-slate-700 transition-all duration-500"
        >
          Je valide
        </button>
      </form>
      {show && <ModalUpdate message={message} show={show} />}
    </div>
  );
}
