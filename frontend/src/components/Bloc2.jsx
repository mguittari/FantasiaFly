import { Link } from "react-router-dom";

export default function Bloc2() {
  return (
    <div className="container">
      <img
        className="w-80 h-40 mx-auto"
        src="src/assets/Train.png"
        alt="Hogwart express"
      />
      <div className="w-80 h-40 mx-auto p-1.5 text-justify">
        <h1 className="font-semibold">
          Vivez des expériences uniques et insolites
        </h1>
        <p>
          En couple, en famille, en solo ? Vous aimez les expériences hors du
          commun ? Plutôt jeu vidéo ou IRL ? Découvrez plus de 10 idées de
          séjours sélectionnées par nos.
        </p>
        <Link
          to="/"
          className="underline hover:text-green-600 focus:text-blue-500"
        >
          En savoir plus
        </Link>
      </div>
      <div className="flex justify-center items-center mb-2 mx-[-1px]">
        <div className="flex w-80">
          <img
            className="w-1/3 h-auto mr-1"
            src="src/assets/Anor-Londo.png"
            alt="Anor Londo Lordran"
          />
          <div className="w-1/3 mx-[0.5px]">
            <img
              className="w-full h-1/2 mb-[1px]"
              src="src/assets/Ifrane.png"
              alt="Anor Londo Lordran"
            />
            <img
              className="w-full h-49 mt-1"
              src="src/assets/Miami 1.png"
              alt="Miami palmiers pink sky"
            />
          </div>
          <img
            className="w-1/3 h-auto ml-1"
            src="src/assets/Mountain.png"
            alt="Snow Mountain"
          />
        </div>
      </div>
    </div>
  );
}
