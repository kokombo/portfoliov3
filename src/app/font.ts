import localFont from "next/font/local";
import { Arimo, Cabin, Inter_Tight } from "next/font/google";

const NeutonRegular = localFont({
  src: [
    {
      path: "../../public/assets/font/Neuton/Neuton-Regular.ttf",
      style: "normal",
    },
  ],
});

const NeutonBold = localFont({
  src: [
    {
      path: "../../public/assets/font/Neuton/Neuton-Bold.ttf",
      style: "normal",
    },
  ],
});

const font = Cabin({
  weight: ["400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
});

export { NeutonRegular, NeutonBold, font };
