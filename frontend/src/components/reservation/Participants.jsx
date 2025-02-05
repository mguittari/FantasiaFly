/* eslint-disable camelcase */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import vid1 from "../../assets/vid1.mp4";
import Payment from "./Payment";
import Reservation from "./Reservation";
import "./stepper.css";

export default function Participants() {
  const steps = ["Participants", "Coordonnées", "payment"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [nbPlace, setNbPlace] = useState(1);

  const { id } = useParams();
  const [period, setPeriod] = useState([]);
  console.info("period", period);

  const idPeriod = period[0]?.id_period;
  const idTravel = period[0]?.id_travel;
  console.info(idPeriod);
  console.info(idTravel);

  useEffect(() => {
    fetch(`http://localhost:3310/api/period/${id}/travel`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.info(data) || setPeriod(data))
      .catch((error) => console.info(error));
  }, []);

  const incrementPlace = () => {
    setNbPlace(nbPlace + 1);
  };

  const decrementPlace = () => {
    if (nbPlace > 1) {
      setNbPlace(nbPlace - 1);
    }
  };

  const totalPrice = period.map(({ unit_price }) => {
    return unit_price * nbPlace;
  });

  return (
    <div className="relative">
      <div className=" flex justify-center">
        <video
          src={vid1}
          type="video/mp4"
          controls
          autoPlay
          loop
          muted
          className=" absolute top-0 left-0 min-w-full min-h-full z-0 pointer-events-none"
        />
      </div>
      <div className="z-10 flex flex-col justify-center items-center relative py-20">
        <div className=" flex justify-center py-10 ">
          {steps?.map((step, i) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className={`step-item ${currentStep === i + 1 && "active"} ${
                (i + 1 < currentStep || complete) && "complete"
              } `}
            >
              <div className=" step ">{i + 1}</div>
              <p className=" text-gray-500">{step}</p>
            </div>
          ))}
        </div>
        {currentStep === 1 && (
          <div>
            {/* Affichez ici les éléments spécifiques à l'étape 1 */}
            <div className="  flex  flex-col text-center border-2">
              <p className=" text-green-900  ">
                NEW ! Voyage 100% annulable et remboursable
              </p>
              <p>
                Vous pourrez sélectionner en étape 2 cette option qui vous
                permet
                <br />
                d'annuler votre voyage (vol + séjour) jusqu'à 8 jours du départ.
              </p>
            </div>
            <div>
              <p className=" text-3xl p-8 text-green-900">
                Voici les détails de vos voyage choisi :
              </p>
              <ul className="flex flex-row flex-wrap justify-center">
                {period.map(
                  ({
                    unit_price,
                    date_departure,
                    date_return,
                    duration_stay,
                  }) => (
                    <div
                      key={id}
                      className="relative w-96 md:w-96 flex flex-col justify-center gap-2  shadow-2xl "
                    >
                      <div className="flex gap-4">
                        <p className="font-bold">Date de départ :</p>
                        <p>{date_departure}</p>
                      </div>
                      <div className="flex gap-4">
                        <p className="font-bold">Date de retour :</p>
                        <p>{date_return}</p>
                      </div>

                      <div className=" flex gap-4">
                        <p className="font-bold">Durée de séjour :</p>
                        <p>{duration_stay}</p>
                      </div>
                      <div className="flex gap-4">
                        <p className="font-bold">Prix total</p>
                        <p className=" ">{unit_price * nbPlace} €</p>
                      </div>
                    </div>
                  )
                )}
              </ul>
            </div>

            <div className=" py-8">
              <p className="text-lg">Choisir le nombre de place souhaité:</p>
              <div className="flex items-center">
                <button
                  type="button"
                  className="px-3 py-1 bg-slate-400 text-white rounded"
                  onClick={decrementPlace}
                >
                  -
                </button>
                <span className="mx-2">{nbPlace}</span>
                <button
                  type="button"
                  className="px-3 py-1 bg-slate-400 text-white rounded"
                  onClick={incrementPlace}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            {/* Affichez ici les éléments spécifiques à l'étape 2 */}
            <Reservation />
          </div>
        )}

        {currentStep === 3 && (
          <div>
            {/* Affichez ici les éléments spécifiques à l'étape 3 */}
            <Payment
              totalPrice={totalPrice}
              quantity={nbPlace}
              idPeriod={idPeriod}
              idTravel={idTravel}
            />
          </div>
        )}
        <div className=" flex justify-center gap-16 py-8">
          <div className=" p-10">
            {!complete &&
              period.map(({ id_travel }) => (
                <Link
                  key={id_travel}
                  to={{
                    pathname: `/reservations/travel/${id_travel}`,
                  }}
                >
                  <button
                    type="button"
                    className="w-44 bg-vert text-white px-4 py-2 rounded-md hover:bg-green-800"
                    onClick={() => {
                      // eslint-disable-next-line no-unused-expressions
                      currentStep === steps.length
                        ? setComplete(true)
                        : setCurrentStep((prev) => prev + 1);
                    }}
                  >
                    {currentStep === steps.length ? "Finish" : "Réserver"}
                  </button>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
