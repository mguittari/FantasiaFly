import { Link } from "react-router-dom";

export default function Bloc1() {
  return (
    <div>
      <div className="flex flex-wrap justify-center" id="container">
        <div className="w-40 h-40 border-8 border-blue-600 mr-1">
          <h1>Des voyages 100% imaginaires</h1>
          <p>Voyagez dans le monde de vos fictions préférées</p>
          <Link
            to="/"
            className="underline hover:text-green-600 focus:text-blue-500"
          >
            En savoir plus
          </Link>
        </div>
        <div>
          <img
            className="w-40 h-40"
            src="src/assets/Map.png"
            alt="Map of fictional world"
          />
        </div>
        <div>
          <img
            className="w-40 h-40 mt-1"
            src="src/assets/Space-Forest.png"
            alt="Map of fictional world"
          />
        </div>
        <div className="w-40 h-40 border-8 border-blue-600 ml-1 mt-1">
          <h1>Un service conciergerie</h1>
          <p>Votre agence vous répond</p>
          <a href="localhost:3000" className="underline">
            En savoir plus
          </a>
        </div>
        <div>
          <img
            className="w-full h-40 mt-1"
            src="src/assets/Bridge.png"
            alt="Map of fictional world"
          />
        </div>
        <div className="w-40 h-40 border-8 border-blue-600 mt-1">
          <h1>Une galaxie de services</h1>
          <p>La possibilité de ne pas modifier</p>
          <a href="localhost:3000" className="underline">
            En savoir plus
          </a>
        </div>
        <div>
          <img
            className="w-40 h-40 ml-1 mt-1"
            src="src/assets/Plum-Creek.png"
            alt="Ingall's Family"
          />
        </div>
      </div>
    </div>
  );
}
