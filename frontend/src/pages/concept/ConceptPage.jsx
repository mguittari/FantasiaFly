import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ifrane from "../../assets/Ifrane.jpg";
import Londo from "../../assets/Londo.png";
import Twin from "../../assets/Home/Twin-Peaks.png";
import Poudlard from "../../assets/Slider/Poudlard-1.jpg";

export default function Concept() {
  return (
    <div className="bg-gray-100 min-h-screen py-20">
      <header className="bg-white shadow-lg">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-800">FantasiaFly</h1>
          <p className="text-gray-600">Voyagez vers l'infini et au-delà</p>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <section className="bg-blue-500 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-semibold mb-4 ">
              <TypeAnimation
                sequence={["Découvrez le monde avec FantasiaFly", 1000]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2rem", display: "inline-block" }}
                repeat={Infinity}
                cursor={false}
              />
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

        <section className="py-12 bg-gray-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Destinations populaires
            </h2>
            <Slider
              // eslint-disable-next-line react/jsx-boolean-value
              dots={true}
              // eslint-disable-next-line react/jsx-boolean-value
              infinite={true}
              speed={800}
              slidesToShow={3}
              slidesToScroll={1}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
                <img
                  src={Ifrane}
                  alt="Ifrane"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Ifrane
                  </h3>
                  <p className="text-gray-600 text-justify">
                    Ifrane est une ville et commune urbaine du Maroc située dans
                    le Moyen Atlas, à 1 650 mètres d'altitude. Elle est le
                    chef-lieu de la province d'Ifrane, dans la région
                    administrative de Fès-Meknès, et compte une population de 15
                    553 habitants1. Ifrane est surnommée la petite Suisse en
                    raison de son climat et de ses paysages enneigé et
                    montagneux faisant rappeler le pays neutre.
                  </p>
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
                  <p className="text-gray-600 text-justify">
                    Anor Londo est une ville fictive de la série de jeux de rôle
                    d’action Dark Souls. Apparaissant à la fois dans Dark Souls
                    et Dark Souls III, c’est le siège du pouvoir des dieux, des
                    divinités du monde Dark Souls qui ont utilisé le pouvoir de
                    la Première Flamme pour détruire les dragons éternels qui le
                    contrôlaient autrefois. À l’époque de Dark Souls, cependant,
                    elle est devenue une cité perdue abandonnée, car Lord Gwyn
                    s’était sacrifié depuis longtemps pour raviver la Première
                    Flamme qui s’éteignait.
                  </p>
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
                  <p className="text-gray-600 text-justify">
                    Twin Peaks (connue aussi sous le nom francophone de Mystères
                    à Twin Peaks) est une série américaine créée par Mark Frost
                    et David Lynch. La série connaît deux saisons diffusées pour
                    la première fois sur la chaîne ABC du 8 avril 1990 au 10
                    juin 1991. En 2017, la série fait son retour avec la
                    diffusion d'une troisième saison intitulée Twin Peaks: The
                    Return, qui est diffusée sur Showtime du 21 mai au 3
                    septembre 2017.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={Poudlard}
                  alt="Poudlard"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Poudlard
                  </h3>
                  <p className="text-gray-600 text-justify">
                    Poudlard (Hogwarts en version originale) est une école
                    fictive créée par J. K. Rowling pour l'univers de la suite
                    romanesque Harry Potter. Dans l'univers de Harry Potter,
                    Poudlard est un pensionnat pour jeunes sorcières et sorciers
                    dirigé principalement par Albus Dumbledore, considéré comme
                    le plus grand sorcier de sa génération. Le directeur
                    enseigne à ses élèves la valeur du courage, de l'amitié, de
                    la justice et de la vérité par son attitude et ses discours.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </section>
      </main>
    </div>
  );
}
