// /* eslint-disable no-unused-vars */
// import NavDesktop from "../nav-desktop/NavDesktop";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import img from "../../assets/image 10.png";
import NavMobile from "../nav-mobile/NavMobile";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-mm text-white flex justify-between p-4 items-center font-itim text-2xl">
      <div className="flex items-center md:hidden ">
        <IoMenuOutline onClick={toggleMenu} className="text-white" />
      </div>
      <ul className="hidden md:flex gap-8 ">
        <li>
          <Link to="/">Nos destinations</Link>
        </li>
        <li>
          <Link to="/">Concept</Link>
        </li>
      </ul>
      <div>
        <img className=" w-20" src={img} alt="img" />
      </div>
      <ul className="hidden md:flex gap-8 ">
        <li>
          <Link to="/"> Connexion</Link>
        </li>
        <li>
          <Link to="/">Inscription</Link>
        </li>
      </ul>
      <NavMobile active={showMenu} showMenu={toggleMenu} />
      {/* </nav> */}
    </div>
  );
}
