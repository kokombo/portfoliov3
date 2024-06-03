import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "wavy-pattern":
          "repeating-linear-gradient(-45deg, #f8f8f8, #f8f8f8 10px, #e0e0e0 10px, #e0e0e0 20px)",
      },

      colors: {
        black: "#414141",
        fadedBlack: "#606060",
        gray: "#363D41",
        fadedGray: "#575D60",
        white: "#FEFEFE",
        fadedWhite: "#F8F8F8",
        purple: "#390B6F",
        fadedPurple: "#9C7BC3",
        violet: "#49108B",
        fadedViolet: "#855FB1",
      },

      borderWidth: {
        2: "2px",
      },

      borderRadius: {
        100: "100%",
      },
    },
  },
  plugins: [],
};
export default config;
