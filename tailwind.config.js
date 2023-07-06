/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "#151515",
        black: "#000",
        dimgray: "#505050",
        blueviolet: "#8e44ec",
        whitesmoke: "#eee",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
    fontSize: {
      smi: "13px",
      mini: "15px",
      base: "16px",
      "37xl": "56px",
      mid: "17px",
    },
    screens: {
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
