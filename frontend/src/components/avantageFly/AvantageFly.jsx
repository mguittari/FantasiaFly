import expertise from "../../assets/expertise.png";
import surMesure from "../../assets/surMesure.png";
import prix from "../../assets/prix.png";
import garantie from "../../assets/garantie.png";

export default function AvantageFly() {
  return (
    <div className="flex flex-col items-center gap-6 bg-violet text-white py-10 px-4 lg:px-8 xl:px-16">
      <h1 className="text-2xl lg:text-3xl font-jacques text-center">
        Pourquoi voyager avec FantasiaFly ?
      </h1>
      <div className="md:flex flex-row lg:flex-row gap-10 mt-6 lg:mt-8 ">
        <div className="flex flex-col text-center md:text-left items-center">
          <img
            className="w-20 lg:w-24 mb-4 lg:mb-16 "
            src={expertise}
            alt="expertise"
          />

          <h2 className="text-jaune text-lg lg:text-xl font-itim">
            Expertise locale
          </h2>

          <p className="text-sm lg:text-base font-inria">
            Une sélection de voyages organisés <br /> dans des lieux imaginaires
            réels, <br /> organisés par nos soins.
          </p>
        </div>
        <div className="flex flex-col text-center md:text-left items-center">
          <img
            className="w-20 lg:w-24 mb-4 lg:mb-6"
            src={surMesure}
            alt="surMerure"
          />
          <h2 className="text-jaune text-lg lg:text-xl font-itim">
            100% organisé
          </h2>
          <p className="text-sm lg:text-base font-inria">
            Un voyage entièrement non-modulable :<br /> étapes, hébergements,
            activités choisies <br />
            par FantasiaFly.
          </p>
        </div>
        <div className="flex flex-col text-center md:text-left items-center">
          <img className="w-16 lg:w-20 mb-4 lg:mb-12" src={prix} alt="prix" />
          <h2 className="text-jaune text-lg lg:text-xl font-itim">
            Juste prix
          </h2>
          <p className="text-sm lg:text-base font-inria text-center md:text-left items-center">
            Pour vous et pour toutes les personnes <br />
            qui contribuent à la réussite de votre <br /> voyage.
          </p>
        </div>
        <div className="flex flex-col text-center md:text-left items-center">
          <img
            className="w-14 lg:w-16 mb-4 lg:mb-6"
            src={garantie}
            alt="garantie"
          />
          <h2 className="text-jaune text-lg lg:text-xl font-itim">
            Garanties FantasiaFLy
          </h2>
          <p className="text-sm lg:text-base font-inria">
            FantasiaFly assure votre voyage, de la
            <br /> préparation jusqu'à votre retour.
          </p>
        </div>
      </div>
      <button
        className="bg-vert font-bold py-2 px-4 rounded mt-6 lg:mt-8 font-itim"
        type="button"
      >
        Le concept FantasiaFly
      </button>
    </div>
  );
}
