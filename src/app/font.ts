import localFont from "next/font/local";

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

export { NeutonRegular, NeutonBold };
