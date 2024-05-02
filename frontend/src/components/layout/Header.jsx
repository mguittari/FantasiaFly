// /* eslint-disable no-unused-vars */
// import NavDesktop from "../nav-desktop/NavDesktop";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import img from "../../assets/image 10.png";
import NavMobile from "../nav-mobile/NavMobile";
import Login from "../login/Login";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-mm text-white flex justify-between  p-4 md:p-8 gap-8 items-center font-itim text-2xl">
      <div className="flex gap-8 items-center md:hidden  ">
        <IoMenuOutline onClick={toggleMenu} className="text-white " />
      </div>
      <ul className="hidden md:flex gap-8 ">
        <li>
          <Link to="/travels">Nos destinations</Link>
        </li>
        <li>
          <Link to="/concept">Concept</Link>
        </li>
      </ul>
      <Link to="/">
        <img
          className="  hidden md:flex left-1/2 transform -translate-x-1/2  absolute  z-10 w-36 top-6 "
          src={img}
          alt="img"
        />
      </Link>
      <div className="  z-20">
        <NavMobile active={showMenu} showMenu={toggleMenu} />
      </div>
      <Login />
    </div>
  );
}
