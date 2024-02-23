/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1025px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "475px" },
    },
    colors: {
      "pw-blue": "#000C24",
      "pw-light": "#FBFBFB",
      "pw-orange": "#F44336",
      "pw-orange-100": "#FFE3E1",
      "pw-orange-200": "#FFCCC8",
      "pw-orange-500": "#F44336",
      "pw-grey": "#928A97",
      white: "#fff",
    },
    fontFamily: {
      spartanExtraBold: ["SPARTAN-EXTRABOLD"],
    },
  },
  plugins: [],
};
