import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

// eslint-disable-next-line react/prop-types
export default function NavMobile({ showMenu, active }) {
  return (
    <div>
      <ul
        className={
          active
            ? "flex-col flex items-center fixed inset-0 left-1/4 text-3xl font-itim bg-mm backedrop-blur-lg gap-10 justify-center p-6 md:hidden"
            : "hidden"
        }
      >
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
