/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    boxShadow: {
      x: "0px 0px 10px 2px rgba(0, 0, 0, 0.3)",
    },
    colors: {
      bottle: "#025728",
      cream: "rgba(255, 251, 219, 1)",
      purpull: "rgba(59, 35, 153, 1)",
      gold: "rgba(232, 165, 36, 1)",
      mm: "#001F8A",
      violet: "#3B2399",
      jaune: "#FFE44E",
      vert: "#00543C",
    },
    width: {
      652: "652px",
      99: "99%",
    },
    height: {
      99: "99%",
      49: "49%",
    },
    backgroundImage: {
      miami: "url('/src/assets/Vice-City.png')",
    },
    fontFamily: {
      itim: ["Itim", "sans-serif"],
      inria: ["Inria-sans", "sans-serif"],
      jacques: ["Jacques-francois", "sans-serif"],
    },
  },
};
export const plugins = [];
