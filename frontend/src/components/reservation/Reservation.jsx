/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect, useContext } from "react";

import { useLocation, useParams } from "react-router-dom";

import { UserContext } from "../../context/userContext";

export default function ReservationPage() {
  // Utilisez useLocation() pour récupérer les données de période et de prix total
  const location = useLocation();
  const { periodData } = location.state || {};
  const [showInfo, setShowInfo] = useState(false);
  const { user, token } = useContext(UserContext);

  console.info("user-->", user);

  const [dataForm, setDataForm] = useState({
    firstname: user.user.firstname,
    lastname: user.user.lastname,
    address: user.user.address,
    city: user.user.city,
    country: user.user.country,
    postal_code: user.user.postal_code,
    phone_number: user.user.phone_number,
  });

  console.info("dataform in reservation page-->", dataForm);

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.info(dataForm);
  };
  const [travel, setTravel] = useState([]);
  console.info("travel :>> ", travel);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3310/api/travels/${id}`)
      .then((res) => res.json())
      .then((data) => setTravel(data))
      .catch((error) => console.info(error));
  }, []);

  console.info("id?", id);
  console.info("user id", user.user.id);
  console.info("/me", user);
  console.info(travel);
  console.info("dataForm -->", dataForm);

  return (
    <div className=" flex flex-col">
      <div className="  flex  flex-col text-center border-2 ">
        <p className=" text-green-900">
          NEW ! Voyage 100% annulable et remboursable
        </p>
        <p>
          Vous pourrez sélectionner en étape 2 cette option qui vous permet
          <br />
          d'annuler votre voyage (vol + séjour) jusqu'à 8 jours du départ.
        </p>
      </div>
      <div className="flex flex-row gap-6 py-8">
        <form onSubmit={handleSubmit} className="space-y-4  p-4 shadow-2xl">
          <div className=" flex  gap-4">
            <div>
              <label htmlFor="firstname" className="block">
                <div className=" flex">
                  Prénom<p className=" text-red-700">*</p>
                </div>
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={dataForm.firstname}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="lastname" className="block">
                <div className=" flex">
                  Nom<p className=" text-red-700">*</p>
                </div>
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={dataForm.lastname}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
          </div>
          {/* <div>
            <label htmlFor="birth_date" className="block">
              <div className=" flex">
                Date de naissance<p className=" text-red-700">*</p>
              </div>
            </label>
            <input
              type="date"
              id="birth_date"
              name="birth_date"
              value={dataForm.birth_date}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div> */}
          <div className=" flex gap-4">
            <div>
              <label htmlFor="country" className="block">
                <div className=" flex">
                  Pays<p className=" text-red-700">*</p>
                </div>
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={dataForm.country}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="postalCode" className="block">
                <div className=" flex">
                  Code Postal<p className=" text-red-700">*</p>
                </div>
              </label>
              <input
                type="text"
                id="postal_code"
                name="postal_code"
                value={dataForm.postal_code}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="postalCode" className="block">
                <div className=" flex">
                  ville<p className=" text-red-700">*</p>
                </div>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={dataForm.city}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
          </div>
          <div className=" w-4/6">
            <label htmlFor="postalCode" className="block">
              <div className=" flex">
                Adresse<p className=" text-red-700">*</p>
              </div>
            </label>
            <input
              type="text"
              id="adress"
              name="address"
              value={dataForm.address}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className=" flex gap-4">
            <div>
              <label htmlFor="phoneNumber" className="block">
                <div className=" flex">
                  Téléphone 1<p className=" text-red-700">*</p>
                </div>
              </label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                value={dataForm.phone_number}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={handleSubmitInfoUser}
            className="w-44 bg-gold text-white px-4 py-2 rounded-md hover:bg-gold"
          >
            Je confirme mes coordonnées
          </button>
        </form>

        <div>
          <div className=" bg-slate-400">
            <p className=" text-center">Votre réservation</p>
          </div>
          <div>
            {travel.map(({ destination_name, img_url }) => (
              <div>
                <h2 className="font-bold text-md text-center">
                  {destination_name}
                </h2>

                <img
                  className=" w-80"
                  src={`http://localhost:3310/${img_url}`}
                  alt={destination_name}
                />
              </div>
            ))}
          </div>
          <div className="relative p-8 py-2">
            <button
              className=" bg-slate-400 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setShowInfo(!showInfo)}
            >
              Voir les details de voyage
            </button>
            {showInfo &&
              travel.map(({ country, description }) => (
                <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-300 shadow-lg rounded-lg p-4">
                  <p className="text-gray-800">{country}</p>
                  <p className="text-gray-800">{description}</p>

                  <button
                    className="mt-2 bg-slate-400 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => setShowInfo(false)}
                  >
                    Voir moins
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
