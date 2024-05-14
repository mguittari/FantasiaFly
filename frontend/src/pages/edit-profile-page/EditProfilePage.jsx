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
    <div className=" bg-cream py-24">
      <form
        className="  w-1/2 mx-auto flex flex-col justify-center gap-4 bg-white p-5 shadow-xl rounded-2xl space-y-4  md:items-center  "
        onSubmit={handleSubmitInfoUser}
      >
        <h1 className="font-jacques text-2xl">Je modifie mes informations</h1>
        <div className="flex  flex-row gap-6 md:w-96">
          <div className="flex flex-col">
            <label htmlFor="firstname">Prénom</label>
            <input
              className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="firstname"
              value={dataForm.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastname">Nom de famille</label>
            <input
              className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="lastname"
              value={dataForm.lastname}
              onChange={handleChange}
              placeholder="lastname"
              required
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="shadow appearance-none border rounded md:w-96  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
            placeholder="email"
            disabled
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone">Numéro de téléphone</label>
          <input
            className="shadow appearance-none border rounded md:w-96  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="phone_number"
            value={dataForm.phone_number}
            onChange={handleChange}
            placeholder="phone_number"
            required
          />
        </div>
        <div className="flex  flex-row gap-6 md:w-96">
          <div className="flex flex-col">
            <label htmlFor="address">Address</label>
            <input
              className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="address"
              value={dataForm.address}
              onChange={handleChange}
              placeholder="address"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="postal code">Postal Code</label>
            <input
              className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="postal_code"
              value={dataForm.postal_code}
              onChange={handleChange}
              placeholder="postal code"
              required
            />
          </div>
        </div>
        <div className="flex  flex-row gap-6 md:w-96  ">
          <div className="flex flex-col">
            <label htmlFor="city">City</label>
            <input
              className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="city"
              value={dataForm.city}
              onChange={handleChange}
              placeholder="city"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Country">Country</label>
            <input
              className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="country"
              value={dataForm.country}
              onChange={handleChange}
              placeholder="country"
              required
            />
          </div>
        </div>
        <div className="flex flex-col">
          <Link to="/edit-password">
            <p className="bg-gray-300 hover:bg-gray-400 active:bg-gray-500 text-gray-800 font-semibold pl-2 h-12 rounded flex justify-center items-center   py-2 px-4 md:w-96  focus:outline-none focus:shadow-outline">
              Je modifie mon mot de passe
            </p>
          </Link>
        </div>

        <button
          type="submit"
          className="h-12 bg-vert text-white hover:border-2 hover:boder-slate-700 hover:bg-white hover:text-slate-700 transition-all duration-500 font-bold  py-2 px-4 md:w-96 rounded focus:outline-none focus:shadow-outline"
        >
          Je valide
        </button>
      </form>
      {show && <ModalUpdate message={message} show={show} />}
    </div>
  );
}
