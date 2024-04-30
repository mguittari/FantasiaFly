/* eslint-disable camelcase */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import travelDatas from "../data/travelDatas.json";
import Tabs from "../components/tabs/Tabs";
import Slider from "../components/slider/Slider";

export default function Travel() {
  const [travels, setTravels] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:3310/api/travels/${params.id}`)
      .then((res) => res.json())
      .then((res) => setTravels(res))
      .catch((error) => console.info(error));
  }, []);
  return (
    <main className="bg-cream">
      {travels.map(({ id, destination_name, img_url, country }) => (
        <div key={id}>
          <div className="relative">
            <img
              className="w-full"
              src={`http://localhost:3310/${img_url}`}
              alt={destination_name}
            />
            <p className="bg-gold w-2/3 text-white font-serif text-xl md:text-3xl absolute bottom-0 text-center py-2 md:py-5">
              {destination_name}
            </p>
          </div>
          <p>{country}</p>
          {travelDatas.map((travelData) => {
            if (travelData.id === parseInt(id, 10)) {
              return (
                <div key={travelData.id} className="m-[40px]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <div className="text-justify" key={travelData.id}>
                      <p>{travelData.description}</p>
                    </div>
                    <div>
                      <h1 className="bg-gold">Les + du voyage</h1>
                      <ul className="list-disc border border-gold pl-8">
                        {travelData.benefits.map((benefit) => (
                          <li key={benefit.id}>{benefit.content}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Slider />
                  <Tabs />
                </div>
              );
            }
            return null;
          })}
          <p />
        </div>
      ))}
    </main>
  );
}
