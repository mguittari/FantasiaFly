/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */

import { useState } from "react";
import SearchBar from "./SearchBar";
import welcome from "../../assets/welcome.png";
import SearchResultsList from "./SearchResultsList";

export default function Welcome() {
  const [results, setResults] = useState([]);

  return (
    <div className="relative h-screen bg-cover bg-center">
      <img
        src={welcome}
        alt="welcome"
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full   opacity-50" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="text-center text-white z-10">
          <h1 className="text-6xl font-bold mb-4 animate-bounce">
            Bienvenue sur FANTASIAFLY
          </h1>
          <div className=" flex flex-col items-center">
            <SearchBar setResults={setResults} />
            <SearchResultsList results={results} />
          </div>
        </div>
      </div>
    </div>
  );
}
