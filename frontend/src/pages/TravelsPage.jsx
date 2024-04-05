/* eslint-disable camelcase */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewsLetter from "../components/newsLetter/NewsLetter";

export default function TravelsPage() {
  const [travels, setTravels] = useState([]);
  useEffect(() => {
    console.info(travels);
    fetch("http://localhost:5000/api/travels")
      .then((res) => res.json())
      .then((data) => setTravels(data));
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-[40px]">
        {travels.map(
          ({ id, destination_name, img_url, country, description }) => (
            <div key={id}>
              <img
                className="w-full"
                src={`http://localhost:5000/${img_url}`}
                alt="test"
              />
              <h1 className="inria-sans font-bold">{destination_name}</h1>
              <h2>{country}</h2>
              <p>{description}</p>
              <Link to="/">
                <p className="underline hover:text-green-600 focus:text-blue-500">
                  En savoir plus
                </p>
              </Link>
            </div>
          )
        )}
      </div>
      <NewsLetter />
    </>
  );
}
