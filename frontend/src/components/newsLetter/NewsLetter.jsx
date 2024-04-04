import { Link } from "react-router-dom";

export default function NewsLetter() {
  return (
    <div className=" bg-violet ">
      <div className=" max-w-3xl mx-auto p-6 bg-violet shadow-md rounded-md">
        <h2 className="text-2xl lg:text-3xl font-jacques py-4 text-white">
          Et si on voyageait autrement ?
        </h2>
        <p className=" text-white mb-4 ">
          Destinations alternatives, adresses cachées, tips responsables :
          toutes les semaines, découvrez comment faire évoluer votre vision du
          voyage
        </p>
        <label className="flex items-center space-x-2 py-4">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-500"
          />
          <span className=" text-white">
            J'accepte de recevoir par e-mail les newsletters et actualités
            FantasiaFly
          </span>
        </label>
        <form className="flex flex-col space-y-4">
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <input
              type="email"
              placeholder="Votre email"
              className="px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:border-blue-500 flex-grow"
            />

            <button
              type="button"
              className="px-4 py-2 bg-vert text-white rounded-md focus:outline-none  "
            >
              S'abonner
            </button>
          </div>
          <Link to="/">
            <p className=" py-4 underline text-white">
              Pour plus d'informations, consultez nos conditions générales
              d'utilisation Comment Evaneos utilise mes données ?
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
}
