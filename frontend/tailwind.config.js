/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        itim: ["Itim", "sans-serif"],
        inria: ["Inria-sans", "sans-serif"],
        jacques: ["Jacques-francois", "sans-serif"],
      },
      colors: {
        mm: "#001F8A",
        violet: "#3B2399",
        jaune: "#FFE44E",
        vert: "#00543C",
        cream: "rgba(255, 251, 219, 1)",
      },
    },
  },
  plugins: [],
};
