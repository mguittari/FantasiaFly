import { Link } from "react-router-dom";
import img from "../../assets/image 10.png";
import insta from "../../assets/instagram.png";
import fb from "../../assets/facebook.png";
import linke from "../../assets/linkedin.png";
import tik from "../../assets/tiktok.png";
import yout from "../../assets/youtube.png";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <Link to="/" className="md:w-1/4 mb-4 md:mb-0 ">
            <img className="w-20 md:w-auto shadow-lg" src={img} alt="img" />
          </Link>

          <div className="md:flex flex-row justify-between w-full  ">
            <div className="w-full md:w-1/2 mb-4 text-center md:text-left">
              <h3 className="text-lg mb-2">Nos engagements</h3>
              <ul className="text-sm ">
                <li>100% carbone absorbé</li>
                <li>Tourisme responsable</li>
                <li>Agir pour un Tourisme responsable</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 mb-4 md:mb-0 text-center md:text-left">
              <Link to="/">
                <h3 className="text-lg mb-2">Qui sommes-nous ?</h3>
              </Link>
              <ul className="text-sm">
                <Link to="/">
                  <li>Où nous trouver ?</li>
                </Link>
                <Link to="/">
                  <li>Fantasia Fly</li>
                </Link>
                <Link to="/">
                  <li>Notre valeur ajoutée</li>
                </Link>
              </ul>
            </div>
            <div className="w-full md:w-1/2 mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-lg mb-2">Top destinations</h3>
              <ul className="text-sm">
                <Link to="/">
                  <li>Poudlard</li>
                </Link>
                <Link to="/">
                  <li>Ifrane</li>
                </Link>
                <Link to="/">
                  <li>Westworld</li>
                </Link>
                <Link to="/">
                  <li>Vice City</li>
                </Link>
                <Link to="/">
                  <li>Maison Picassiette</li>
                </Link>
              </ul>
            </div>
            <div className="w-full md:w-1/2 mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-lg mb-2">Idées voyages</h3>
              <ul className="text-sm">
                <Link to="/">
                  <li>On part où ?</li>
                </Link>
                <Link to="/">
                  <li>Voyage de noces</li>
                </Link>
                <Link to="/">
                  <li>Vacances en famille</li>
                </Link>
                <Link to="/">
                  <li>Week-end en amoureux</li>
                </Link>
                <Link to="/">
                  <li>Vacances d'été</li>
                </Link>
                <Link to="/">
                  <li>Voyage de luxe</li>
                </Link>
                <Link to="/">
                  <li>Déconnecter</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-8 font-itim">
          <p>Suivez-nous !</p>
          <div className="mt-4 flex items-center gap-4">
            <Link to="/">
              <img className="w-10 shadow-lg" src={insta} alt="insta" />
            </Link>
            <Link to="/">
              <img className="w-10 shadow-lg" src={fb} alt="fb" />
            </Link>
            <Link to="/">
              <img className="w-10 shadow-lg" src={linke} alt="linke" />
            </Link>
            <Link to="/">
              <img className="w-10 shadow-lg" src={tik} alt="tik" />
            </Link>
            <Link to="/">
              <img className="w-10 shadow-lg" src={yout} alt="yout" />
            </Link>
          </div>
          <div className="mt-8 text-sm text-gray-400 flex gap-8 font-itim">
            <Link to="/">
              <p>Copyrights</p>
            </Link>
            <Link to="/">
              <p>Cookies</p>
            </Link>
            <Link to="/">
              <p>Notice légale et CGU</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
