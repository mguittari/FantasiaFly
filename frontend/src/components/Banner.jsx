import React from "react";

function Banner() {
  return (
    // <div>
    //   <div className="relative">
    //     <img
    //       className="w-auto mx-auto"
    //       src="src/assets/Vice-City.png"
    //       alt="Vice City View"
    //     />
    //     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    //       <input
    //         style={{ borderWidth: "20px", borderRightWidth: "22px" }}
    //         className="px-5 py-2 border-[20px] rounded-xl focus:outline-none focus:border-purpull focus:ring focus:ring-white focus:ring-opacity-50 border-purpull shadow-x"
    //         type="text"
    //         placeholder="Où souhaitez-vous aller ?"
    //       />
    //       <bouton className="hidden ml-2 bg-green-500 hover:bg-green-700 text-white font-bold">
    //         <span className="text-sm" role="img" aria-label="Loupe">
    //           &#x1F50D;
    //         </span>
    //       </bouton>
    //     </div>
    //   </div>
    <div>
      <div className="bg-gold text-white font-serif text-center px-4 py-10 mb-8">
        <p className="">
          Notre vision du voyage ? Moins local, moins responsable, plus
          polluant.
        </p>
      </div>
    </div>
  );
}

export default Banner;
