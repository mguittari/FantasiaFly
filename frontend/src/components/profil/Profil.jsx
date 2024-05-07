/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import { useContext, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { TbPhotoEdit } from "react-icons/tb";
import { Link } from "react-router-dom";

import { UserContext } from "../../context/userContext";
import ButtonLogout from "../buttonLogout/ButtonLogout";

export default function Profil() {
  const { user, token } = useContext(UserContext);
  const [inputVisible, setInputVisible] = useState(false); // Gestion de la visibilité de l'input
  const [image, setImage] = useState({
    image: user?.user?.img_url,
  });

  console.info("user----------->>>>>", user);

  const handleChange = (e) => {
    console.info(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", image);

    fetch(`http://localhost:3310/api/users/${user?.user?.id}/update-picture`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token} `,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        setImage(res);
        setInputVisible(false);
      })
      .catch((error) => console.error(error));
  };
  console.info(user?.user?.id);
  console.info(user?.user?.img_url);
  return (
    <>
      <div className="flex justify-center py-10">
        <div>
          <div>
            {inputVisible && (
              <div className="flex">
                <input
                  type="file"
                  accept=".jpeg, .jpg, .png"
                  onChange={handleChange}
                />
                <div className=" items-center flex justify-center">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className=" border-2 bg-slate-400 w-28 h-8 rounded-lg hover:bg-slate-300"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
            {!inputVisible && (
              <button onClick={() => setInputVisible(true)}>
                <TbPhotoEdit />
              </button>
            )}
          </div>

          <img
            className="w-40 rounded-full mx-auto"
            src={
              user?.user?.img_url
                ? `http://localhost:3310/${user?.user?.img_url}`
                : ""
            }
            alt="user avatar"
          />
        </div>
      </div>
      <div className="flex flex-col py-6">
        <h1 className="text-xl font-semibold text-gray-800 py-2 text-center">
          {user?.user?.lastname} {user?.user?.firstname}
        </h1>
        <p className="mb-2">
          <div className="font-semibold text-center">
            Email: {user?.user?.email}
          </div>
        </p>
      </div>
      <div className="flex flex-col items-center mx-auto w-1/3 rounded-2xl py-8 bg-violet">
        <div className="flex py-4 items-center">
          <div className="p-2">
            <SlCalender className="text-white" />
          </div>
          <Link to="/MesReservations">
            <button className="bg-slate-400 hover:bg-slate-500 rounded-full text-white font-bold w-64 py-2 px-4">
              Mes réservations
            </button>
          </Link>
        </div>
        <div className="flex py-4 items-center">
          <div className="p-2">
            <IoSettingsOutline className="text-white" />
          </div>
          <Link to="/edit-profile">
            <button className="bg-slate-400 hover:bg-slate-500 rounded-full text-white font-bold w-64 py-2 px-4">
              Modifier le profil
            </button>
          </Link>
        </div>
        <div className="flex py-4 items-center">
          <div className="p-2">
            <IoMdLogOut className="text-white" />
          </div>
          <div className="bg-slate-400 hover:bg-slate-500 rounded-full text-white font-bold w-64 py-2 px-4 text-center">
            <ButtonLogout />
          </div>
        </div>
      </div>
    </>
  );
}
