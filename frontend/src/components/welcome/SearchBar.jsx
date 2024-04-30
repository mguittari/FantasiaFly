/* eslint-disable react/prop-types */
import { useState } from "react";

export default function SearchBar({ setResults }) {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch("http://localhost:3310/api/travels")
      .then((res) => res.json())
      .then((json) => {
        const results = json.filter((travel) => {
          return (
            value &&
            travel &&
            travel.destination_name &&
            travel.destination_name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="relative flex justify-center ">
      <input
        className="flex items-center   w-72 h-10 text-black rounded-md"
        type="text"
        placeholder="Rechercher..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
