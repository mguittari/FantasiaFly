/* eslint-disable no-shadow */
/* eslint-disable camelcase */
// import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import travelData from "../../data/travelDatas.json";

export default function Tab() {
  const [periods, setPeriods] = useState([]);
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/api/travels/${id}/periods`)
      .then((res) => res.json())
      .then((res) => setPeriods(res))
      .catch((error) => console.info(error));
  }, []);
  return (
    <div className="">
      <div className="bloc-tabs">
        <button
          className={
            toggleState === 1
              ? "border border-gold rounded-tl-lg rounded-tr-lg text-2xl p-5 font-bold text-gold"
              : "rounded-tl-lg rounded-tr-lg text-2xl p-5 font-bold text-gold"
          }
          type="button"
          onClick={() => toggleTab(1)}
        >
          DATES
        </button>
        <button
          className={
            toggleState === 2
              ? "border border-gold rounded-tl-lg rounded-tr-lg text-2xl p-5 font-bold text-gold"
              : "rounded-tl-lg rounded-tr-lg text-2xl p-5 font-bold text-gold"
          }
          type="button"
          onClick={() => toggleTab(2)}
        >
          BUDGET
        </button>
      </div>
      <div className="content-tab text-left">
        <div className={toggleState === 1 ? "block" : "hidden"}>
          <table className="w-full mt-2">
            <thead className="bg-gold text-white uppercase">
              <tr className="">
                <th className=" p-2">Date de départ</th>
                <th className=" p-2">Date de retour</th>
                <th className=" p-2">Durée</th>
                <th className=" p-2">Prix</th>
                <th className=" p-2">Réservation</th>
              </tr>
            </thead>
            {periods.map(
              ({ date_departure, date_return, duration_stay, unit_price }) => (
                <tbody>
                  <tr className="hover:bg-purple-400">
                    <td className="p-2">{date_departure}</td>
                    <td className="p-2">{date_return}</td>
                    <td className="p-2">{duration_stay} jours</td>
                    <td className="p-2">{unit_price} €</td>
                    <td className="p-2">
                      <Link to="/participants">
                        <button
                          type="button"
                          className="bg-green-500 border border-white text-white py-1 px-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
                        >
                          Réserver
                        </button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              )
            )}
          </table>
        </div>
        <div className="content-tab text-left">
          <div className={toggleState === 2 ? "block" : "hidden"}>
            <table className="w-full mt-2">
              <thead className="bg-gold text-white uppercase">
                <th className="p-2">
                  {" "}
                  Inclus ✅ | Non inclus ❌ dans le prix du voyage du voyage
                </th>
              </thead>
              {travelData.map((travelData) => {
                if (travelData.id === parseInt(id, 10)) {
                  return (
                    <tbody>
                      <tr className="grid grid-cols-1 mt-2 leading-7 p-2">
                        {travelData.budget.map((budget) => (
                          <td key={budget.id}>{budget.content}</td>
                        ))}
                      </tr>
                    </tbody>
                  );
                }
                return null;
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
