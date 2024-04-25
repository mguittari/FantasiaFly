/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import { useContext } from "react";
import { IoMdLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { TbPhotoEdit } from "react-icons/tb";
import { Link } from "react-router-dom"; // Import correct pour Link
import { UserContext } from "../../context/userContext";

export default function Profil() {
  const { user } = useContext(UserContext);
  console.info(user?.user?.img_url);
  return (
    <>
      <div className="flex justify-center py-12">
        <div>
          <div>
            <button>
              <TbPhotoEdit />
            </button>
          </div>
          <img
            className=" w-40 rounded-full mx-auto "
            src={`http://localhost:3310/${user?.user?.img_url}`}
            alt="user avatar"
          />
          <h1 className="text-xl  font-semibold text-gray-800 py-2 text-center">
            {user?.user?.lastname} {user?.user?.firstname}
          </h1>
          <p className="mb-2">
            <div className="font-semibold">Email :{user?.user?.email} </div>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mx-auto w-1/3 rounded-2xl py-8 bg-violet">
        <div className=" flex py-4 items-center">
          <div className=" p-2 ">
            <SlCalender className=" text-white" />
          </div>
          <Link to="/MesReservations">
            <button className=" bg-slate-400  hover:bg-slate-500 rounded-full text-white font-bold w-64 py-2 px-4 ">
              Mes réservations
            </button>
          </Link>
        </div>
        <div className=" flex py-4 items-center">
          <div className=" p-2">
            <IoSettingsOutline className=" text-white" />
          </div>
          <button className="bg-slate-400  hover:bg-slate-500 rounded-full text-white font-bold w-64 py-2 px-4">
            Modifier le profil
          </button>
        </div>
        <div className=" flex py-4 items-center">
          <div className=" p-2">
            <IoMdLogOut className=" text-white" />
          </div>
          <button className="bg-slate-400  hover:bg-slate-500 rounded-full text-white font-bold w-64 py-2 px-4">
            Déconnexion
          </button>
        </div>
      </div>
    </>
  );
}
