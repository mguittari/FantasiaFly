import { Link } from "react-router-dom";

export default function Bloc2() {
  return (
    <div className="md:flex md:flex-row md:gap-2">
      <img
        className="w-80 h-40 mx-auto md:hidden"
        src="src/assets/Train.png"
        alt="Hogwart express"
      />
      <img
        className="hidden md:flex w-40 h-40 ml-auto"
        src="src/assets/Twin Peaks.png"
        alt="Twin Peaks"
      />
      <div className="w-80 h-40 mx-auto p-1.5 text-justify md:mx-0">
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
      <img
        className="hidden md:flex w-40 h-40 mr-auto"
        src="src/assets/Western.png"
        alt="Western"
      />
      <div className="md:hidden flex justify-center items-center mb-2 mx-[-1px]">
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
