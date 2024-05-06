import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import ModalUpdate from "../../components/modal/ModalUpdate";

export default function EditProfilePage() {
  const { user, token } = useContext(UserContext);
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const [dataForm, setDataForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    city: "",
    country: "",
    postal_code: "",
    phone_number: "",
  });

  useEffect(() => {
    if (user && user.user) {
      setDataForm({
        firstname: user.user?.firstname,
        lastname: user.user?.lastname,
        email: user.user.email,
        address: user.user?.address,
        city: user.user?.city,
        country: user.user?.country,
        postal_code: user.user?.postal_code,
        phone_number: user.user?.phone_number,
      });
    }
  }, [user]);

  console.info("dataForm in EditProfilePage--->", dataForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmitInfoUser = () => {
    fetch(`http://localhost:3310/api/users/${user.user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataForm),
    })
      .then((res) => res.json())
      .then((res) => console.info(res))
      .catch((error) => {
        console.error("Error:", error);
      });
    const storage = [];
    // storage.push(formData);
    const messageInLocalStorage =
      JSON.parse(localStorage.getItem("message")) || [];
    console.info(messageInLocalStorage);
    if (messageInLocalStorage.length) {
      messageInLocalStorage.push(dataForm);
      localStorage.setItem("message", JSON.stringify(messageInLocalStorage));
    } else {
      storage.push(dataForm);
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
        onSubmit={handleSubmitInfoUser}
      >
        <h1 className="font-jacques text-2xl">Je modifie mes informations</h1>

        <label htmlFor="firstname">Prénom</label>
        <input
          className="border-2 pl-2 h-12"
          type="text"
          name="firstname"
          value={dataForm.firstname}
          onChange={handleChange}
          required
        />
        <label htmlFor="lastname">Nom de famille</label>
        <input
          className="border-2 pl-2 h-12"
          type="text"
          name="lastname"
          value={dataForm.lastname}
          onChange={handleChange}
          placeholder="lastname"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          className="border-2 pl-2 h-12 bg-gray-100"
          type="email"
          name="email"
          value={dataForm.email}
          onChange={handleChange}
          placeholder="email"
          disabled
        />
        <label htmlFor="phone">Numéro de téléphone</label>
        <input
          className="border-2 pl-2 h-12"
          type="text"
          name="phone_number"
          value={dataForm.phone_number}
          onChange={handleChange}
          placeholder="phone_number"
          required
        />
        <label htmlFor="address">Address</label>
        <input
          className="border-2 pl-2 h-12"
          type="text"
          name="address"
          value={dataForm.address}
          onChange={handleChange}
          placeholder="address"
          required
        />
        <label htmlFor="postal code">Postal Code</label>
        <input
          className="border-2 pl-2 h-12"
          type="text"
          name="postal_code"
          value={dataForm.postal_code}
          onChange={handleChange}
          placeholder="postal code"
          required
        />
        <label htmlFor="city">City</label>
        <input
          className="border-2 pl-2 h-12"
          type="text"
          name="city"
          value={dataForm.city}
          onChange={handleChange}
          placeholder="city"
          required
        />
        <label htmlFor="Country">Country</label>
        <input
          className="border-2 pl-2 h-12"
          type="text"
          name="country"
          value={dataForm.country}
          onChange={handleChange}
          placeholder="country"
          required
        />
        <label htmlFor="Mot de passe">Mot de passe</label>
        <Link to="/edit-password">
          <p className="bg-gray-300 hover:bg-gray-400 active:bg-gray-500 text-gray-800 font-semibold pl-2 h-12 rounded flex justify-center items-center">
            Je modifie mon mot de passe
          </p>
        </Link>

        <button
          type="submit"
          className="h-12 bg-vert text-white hover:border-2 hover:boder-slate-700 hover:bg-white hover:text-slate-700 transition-all duration-500 font-bold"
        >
          Je valide
        </button>
      </form>
      {show && <ModalUpdate message={message} show={show} />}
    </div>
  );
}
