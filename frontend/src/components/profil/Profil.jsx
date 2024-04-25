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

  return (
    <div className=" flex flex-col justify-center items-center max-w-lg w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-center py-20">
        <div>
          <div className="max-w-lg w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <TbPhotoEdit />
          </div>
          <h1 className="text-xl  text-gray-800">
            Profil de {user?.user?.firstname}
          </h1>
          <p className="mb-2">
            <div className="font-semibold">Email :{user?.user?.email} </div>
          </p>
        </div>
      </div>
      <div className=" flex p-4">
        <div className=" p-2">
          <SlCalender />
        </div>
        <Link to="/MesReservations">
          <button className=" bg-slate-300  hover:bg-slate-400 rounded-full text-white font-bold w-64 py-2 px-4 ">
            Mes réservations
          </button>
        </Link>
      </div>
      <div className=" flex  p-4">
        <div className=" p-2">
          <IoSettingsOutline />
        </div>
        <button className="bg-slate-300  hover:bg-slate-400 rounded-full text-white font-bold w-64 py-2 px-4">
          Modifier le profil
        </button>
      </div>
      <div className=" flex p-4">
        <div className=" p-2">
          <IoMdLogOut />
        </div>
        <button className="bg-slate-300  hover:bg-slate-400 rounded-full text-white font-bold w-64 py-2 px-4">
          Déconnexion
        </button>
      </div>
    </div>
  );
}
