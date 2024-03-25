// /* eslint-disable no-unused-vars */
// import NavDesktop from "../nav-desktop/NavDesktop";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import img from "../../assets/image 10.png";
import NavMobile from "../nav-mobile/NavMobile";

export default function Header() {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className=" w-full bg-mm text-white flex justify-between uppercase p-4 item-center">
      <nav className="flex justify-center gap-20 ">
        <div className="absolute right-6 md:hidden top-8 scale-150">
          <IoMenuOutline
            onClick={showMenu}
            className="scale=150 cursor-pointer"
          />
        </div>
        <ul className="hidden md:flex gap-8 pt-6">
          <li>
            <Link to="/">Nos destinations</Link>
          </li>
          <li>
            <Link to="/">Concept</Link>
          </li>
        </ul>
        <div>
          <img className="w-20 items-center" src={img} alt="img" />
        </div>
        <ul className="hidden md:flex gap-8 pt-6">
          <li>
            <Link to="/"> Connexion</Link>
          </li>
          <li>
            <Link to="/">Inscription</Link>
          </li>
        </ul>
        <NavMobile showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
}
