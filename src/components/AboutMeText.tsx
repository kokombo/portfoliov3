import { ABOUT } from "@/constant/data";
import SectionHeading from "./SectionHeading";

const AboutMeText = () => {
  return (
    <article>
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-6 text-fadedBlack dark:text-fadedWhite lg:text-lg tracking-wide">
        {ABOUT.paragraph1}
      </p>

      <p className="mb-6 text-fadedBlack dark:text-fadedWhite lg:text-lg tracking-wide">
        {ABOUT.paragraph2}
      </p>
    </article>
  );
};

export default AboutMeText;
