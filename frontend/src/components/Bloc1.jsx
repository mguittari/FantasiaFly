import { Link } from "react-router-dom";

export default function Bloc1() {
  return (
    <div className="">
      <div
        className="container flex flex-wrap mx-auto justify-center max-w-full sm:max-w-full md:max-w-4xl"
        id="container"
      >
        <div className="w-40 h-40 border-8 border-purpull mr-1 md:mt-1 sm:mt-1">
          <div className="ml-1">
            <h1>Des voyages 100% imaginaires</h1>
            <p>Voyagez dans le monde de vos fictions préférées</p>
            <Link
              to="/"
              className="underline hover:text-green-600 focus:text-blue-500"
            >
              En savoir plus
            </Link>
          </div>
        </div>
        <div>
          <img
            className="w-40 h-40 sm:mt-1 sm:mr-1 md:mt-1 md:mr-1"
            src="src/assets/Home/Map.png"
            alt="Map of fictional world"
          />
        </div>
        <div>
          <img
            className="w-40 h-40 mt-1"
            src="src/assets/Home/Space-Forest.png"
            alt="Map of fictional world"
          />
        </div>
        <div className="w-40 h-40 bg-purpull  ml-1 mt-1">
          <div className="ml-1 text-white">
            <h1>Un service conciergerie</h1>
            <p>Votre agence vous répond</p>
            <Link
              to="/"
              className="underline hover:text-green-600 focus:text-blue-500"
            >
              En savoir plus
            </Link>
          </div>
        </div>
        <div>
          <img
            className="w-full h-40 mt-1"
            src="src/assets/Home/Bridge.png"
            alt="Map of fictional world"
          />
        </div>
        <div className="w-40 h-40 bg-gold mt-1 sm:ml-1 md:ml-1">
          <div className="ml-1 text-white">
            <h1>Une galaxie de services</h1>
            <p>La possibilité de ne pas modifier son voyage</p>
            <Link
              to="/"
              className="underline hover:text-green-600 focus:text-blue-500"
            >
              En savoir plus
            </Link>
          </div>
        </div>
        <div>
          <img
            className="w-40 h-40 ml-1 mt-1"
            src="src/assets/Home/Plum-Creek.png"
            alt="Ingall's Family"
          />
        </div>
      </div>
    </div>
  );
}
