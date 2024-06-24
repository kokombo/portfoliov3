import { ColorButton } from "@/components";
import { INTRO } from "@/constant/data";

const Hero = () => {
  return (
    <section className="section flex flex-col items-center justify-center text-center gap-8">
      <h1 className="text-lg font-medium text-fadedViolet">{INTRO.heading}</h1>

      <h2 className="text-4xl md:text-5xl md:leading-[60px] font-medium text-black dark:text-white capitalize">
        {INTRO.subheading}
      </h2>

      <h6 className="lg:text-lg max-w-[650px] text-fadedBlack dark:text-fadedWhite">
        {INTRO.description}
      </h6>

      <ColorButton
        label="Let's Talk"
        leftIcon="👋"
        to="mailto:samuelibrahim3029@gmail.com"
      />
    </section>
  );
};

export default Hero;
