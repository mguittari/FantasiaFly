/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from "react";

import { useLocation, useParams } from "react-router-dom";

export default function ReservationPage() {
  // Utilisez useLocation() pour récupérer les données de période et de prix total
  const location = useLocation();
  const { periodData } = location.state || {};
  const [showInfo, setShowInfo] = useState(false);

  const [dataForm, setDataForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    city: "",
    country: "",
    postalCode: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value,
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
      .then((data) => setTravel([data]))
      .catch((error) => console.info(error));
  }, []);

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
              <label htmlFor="firstName" className="block">
                <div className=" flex">
                  Prénom<p className=" text-red-700">*</p>
                </div>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={dataForm.firstName}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block">
                <div className=" flex">
                  Nom<p className=" text-red-700">*</p>
                </div>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={dataForm.lastName}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
          </div>
          <div className=" flex gap-4">
            <div>
              <label htmlFor="email" className="block">
                <div className=" flex">
                  Email<p className=" text-red-700">*</p>
                </div>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={dataForm.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="confirmEmail" className="block">
                <div className=" flex">
                  Confirmer Email<p className=" text-red-700">*</p>
                </div>
              </label>
              <input
                type="email"
                id="confirmEmail"
                name="confirmEmail"
                value={dataForm.confirmEmail}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
          </div>
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
              value={dataForm.adress}
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
            <div>
              <label htmlFor="phoneNumber" className="block">
                Téléphone 2(facultatif)
              </label>
              <input
                type="tel"
                id="phoneN"
                name="phoneN"
                value={dataForm.phoneN}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
          </div>
        </form>

        <div>
          <div className=" bg-slate-400">
            <p className=" text-center">Votre réservation</p>
          </div>
          <div>
            {travel.map(({ destination_name, img_url }) => (
              <div
                key={id}
                className="relative w-96 md:w-72 flex flex-col justify-center items-center gap-4 shadow-2xl p-7"
              >
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
            {showInfo && (
              <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-300 shadow-lg rounded-lg p-4">
                <p className="text-gray-800">
                  Ceci est un petit onglet d'information.
                </p>
                <button
                  className="mt-2 bg-slate-400 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => setShowInfo(false)}
                >
                  Voir moins
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
