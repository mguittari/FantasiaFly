/* eslint-disable camelcase */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewsLetter from "../components/newsLetter/NewsLetter";
import londo from "../assets/Londo.png";

export default function TravelsPage() {
  const [travels, setTravels] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/travels")
      .then((res) => res.json())
      .then((data) => setTravels(data));
  }, []);
  return (
    <main className="bg-cream">
      <div className="relative">
        <img src={londo} alt="Anor Londo" />
        <p className="bg-gold w-2/3 text-white font-serif text-xl md:text-3xl absolute bottom-0 text-center py-2 md:py-5">
          Tous nos séjours
        </p>
      </div>
      <div>
        <div className="bg-purpull text-white px-6 pt-6 text-center">
          “Le voyage est la seule chose qu'on achète qui nous rende plus riche,
          nous mais aussi l'agence de voyage qui nous vend le billet.”
          <p className="text-right italic pb-3">Anonyme</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-[40px]">
        {travels.map(
          ({ id, destination_name, img_url, country, description }) => (
            <div key={id}>
              <Link to={`/travel/${id}`}>
                <img
                  className="w-full"
                  src={`http://localhost:5000/${img_url}`}
                  alt="test"
                />
              </Link>
              <h1 className="inria-sans font-bold">{destination_name}</h1>
              <h2>{country}</h2>
              <p>{description}</p>
              <Link to={`/travel/${id}`}>
                <p className="underline text-gold font-semibold hover:text-green-600 focus:text-blue-500">
                  En savoir plus
                </p>
              </Link>
            </div>
          )
        )}
      </div>
      <NewsLetter />
    </main>
  );
}
