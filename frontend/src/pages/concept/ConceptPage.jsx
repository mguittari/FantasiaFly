import React from "react";
import { Link } from "react-router-dom";
import Ifrane from "../../assets/Ifrane.jpg";
import Londo from "../../assets/Londo.png";
import Twin from "../../assets/Home/Twin-Peaks.png";
import Hopital from "../../assets/Home/Hopital.png";

export default function Concept() {
  return (
    <div className="bg-gray-100 min-h-screen py-20">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-800">FantasiaFly</h1>
          <p className="text-gray-600">Voyagez vers l'infini et au-delà</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <section className="bg-blue-500 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-4">
              Découvrez le monde avec FantasiaFly
            </h2>
            <p className="text-lg mb-8">
              Trouvez les meilleures destinations pour vos prochaines aventures
            </p>
            <Link to="/travels">
              <button
                type="button"
                className="bg-white text-blue-500 hover:bg-blue-400 py-2 px-6 rounded-full font-semibold shadow-lg"
              >
                Découvrez nos destinations!
              </button>
            </Link>
          </div>
        </section>

        {/* Présentation de Nous */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-5xl mx-auto ">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 ">
              À propos de nous
            </h2>
            <p className="text-lg text-gray-600 mb-8 an">
              FantasiaFly est votre compagnon de voyage ultime, offrant une
              expérience unique pour découvrir le monde. Notre équipe passionnée
              est dévouée à vous fournir les meilleures offres de vol, des
              conseils de voyage avisés et un service client exceptionnel. Que
              vous recherchiez une escapade de week-end ou un voyage autour du
              monde, FantasiaFly est là pour vous aider à réaliser vos rêves de
              voyage.
            </p>
          </div>
        </section>

        {/* Présentation du Site */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              À propos de FantasiaFly
            </h2>
            <p className="text-lg text-gray-600 mb-8 ">
              FantasiaFly est un site de voyage révolutionnaire qui vise à
              simplifier le processus de réservation de vols et à rendre vos
              voyages plus agréables que jamais. Avec notre interface conviviale
              et nos fonctionnalités innovantes, vous pouvez rechercher,
              comparer et réserver des vols en toute simplicité. Notre
              engagement envers la qualité, la fiabilité et la satisfaction
              client est au cœur de tout ce que nous faisons.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Notre mission est de rendre le voyage accessible à tous en offrant
              des tarifs compétitifs, une sélection étendue de destinations et
              un service clientèle de premier ordre. Que vous voyagiez pour le
              plaisir, les affaires ou l'aventure, FantasiaFly est là pour vous
              accompagner à chaque étape de votre voyage.
            </p>
          </div>
        </section>

        {/* Destinations populaires */}
        <section className="py-12 bg-gray-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Destinations populaires
            </h2>
            {/* Grid of popular destinations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Popular destination item */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={Ifrane}
                  alt="Ifrane"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Ifrane
                  </h3>
                  <p className="text-gray-600">Description de la destination</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={Londo}
                  alt="Londo"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Anor Londo
                  </h3>
                  <p className="text-gray-600">Description de la destination</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={Twin}
                  alt="Twin"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Twin Peaks
                  </h3>
                  <p className="text-gray-600">Description de la destination</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={Hopital}
                  alt="Hopital"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Hopital psychiatrique Briarcliff
                  </h3>
                  <p className="text-gray-600">Description de la destination</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
