/* eslint-disable camelcase */

import "./searchResultList.css";

// eslint-disable-next-line react/prop-types
export default function SearchResultsList({ results }) {
  console.info("result------------>", results);
  return (
    <div className="results-list text-black">
      {results.map(({ id, destination_name }) => {
        return (
          <div key={id}>
            <div
              className=" p-4 hover:bg-slate-200"
              onClick={(e) => (window.location.href = `/travel/${id}`)}
            >
              {destination_name}
            </div>
          </div>
        );
      })}
    </div>
  );
}
