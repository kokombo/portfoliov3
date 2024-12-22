import { ABOUT } from "@/constant/data";
import SectionHeading from "./SectionHeading";

const AboutMeText = () => {
  return (
    <article>
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-6 text-fadedBlack dark:text-fadedWhite tracking-wide leading-relaxed">
        {ABOUT.paragraph1}
      </p>

      <p className="mb-6 text-fadedBlack dark:text-fadedWhite tracking-wide leading-relaxed">
        {ABOUT.paragraph2}
      </p>
    </article>
  );
};

export default AboutMeText;
