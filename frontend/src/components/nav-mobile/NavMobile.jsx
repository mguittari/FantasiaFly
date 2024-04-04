import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

// eslint-disable-next-line react/prop-types
export default function NavMobile({ showMenu, active }) {
  return (
    <div
      className={
        active
          ? "flex-col flex items-center fixed inset-0 text-2xl font-itim bg-mm backedrop-blur-lg gap-10 justify-center p-6 md:hidden"
          : "hidden"
      }
    >
      <ul className="bg-mm text-white fixed inset-0 left-0 top-0 flex-col flex items-center justify-center p-6 gap-10">
        <IoMdClose onClick={showMenu} className=" cursor-pointer" />
        <li>
          <Link to="/">Nos destinations</Link>
        </li>
        <li>
          <Link to="/">Concept</Link>
        </li>
        <li>
          <Link to="/"> Connexion</Link>
        </li>
        <li>
          <Link to="/">Inscription</Link>
        </li>
      </ul>
    </div>
  );
}
