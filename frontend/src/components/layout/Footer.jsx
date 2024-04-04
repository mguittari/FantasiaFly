// export default function Footer() {
//   return <div className="border-2 h-20">Footer</div>;
// }
// import React from "react";

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
      <div className="flex flex-col items-center p-4">
        <div className="md:flex flex-row gap-4">
          <Link to="/">
            <img className="w-20 shadow-lg" src={img} alt="img" />
          </Link>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Nos engagements</h3>
                <ul>
                  <li>100% carbone absorbé</li>
                  <li>Tourisme responsable</li>
                  <li>Agir pour un Tourisme responsable</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Qui sommes-nous ?
                </h3>
                <ul>
                  <li>Où nous trouver ?</li>
                  <li>Fantasia Fly</li>
                  <li>Notre valeur ajoutée</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Top destinations</h3>
                <ul>
                  <li>Poudlard</li>
                  <li>Ifrane</li>
                  <li>Westworld</li>
                  <li>Vice City</li>
                  <li>Maison Picassiette</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Idées voyages</h3>
                <ul>
                  <li>On part où ?</li>
                  <li>Voyage de noces</li>
                  <li>Vacances en famille</li>
                  <li>Week-end en amoureux</li>
                  <li>Vacances d'été</li>
                  <li> Voyage de luxe</li>
                  <li> Déconnecter</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p>Suivez-nous !</p>
          <div className="mt-8 text-sm text-gray-400  md:flex flex-row gap-4 ">
            <img className="w-10 shadow-lg" src={insta} alt="insta" />
            <img className="w-10 shadow-lg" src={fb} alt="fb" />
            <img className="w-10 shadow-lg" src={linke} alt="linke" />
            <img className="w-10 shadow-lg" src={tik} alt="tik" />
            <img className="w-10 shadow-lg" src={yout} alt="yout" />
          </div>

          <div className="mt-8 text-sm text-gray-400 md:flex flex-row gap-40 items-center">
            <p>Copyrights</p>
            <p>Cookies</p>
            <p>Notice légale et CGU</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
