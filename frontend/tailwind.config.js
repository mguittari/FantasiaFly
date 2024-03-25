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
    },
  },
};
export const plugins = [];
