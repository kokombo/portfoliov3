import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        black: "#414141",
        white: "#FEFEFE",
        fadedBlack: "#606060",
        fadedWhite: "#F8F8F8",
        purple: "#390B6F",
        fadedPurple: "#9C7BC3",
        violet: "#49108B",
      },

      borderWidth: {
        2: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
