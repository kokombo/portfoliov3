import { ColorButton, SectionHeading } from "@/components";
import { ABOUT } from "@/constant/data";

const About = () => {
  return (
    <section className="px-4 py-10 md:px-6 md:py-12 lg:px-24 lg:py-14 grid grid-cols-2 gap-4 md:gap-6 lg:gap-24">
      <div>
        <SectionHeading heading="About Me" />

        <p className="mb-6 text-fadedBlack dark:text-fadedWhite text-lg">
          {ABOUT.paragraph1}
        </p>

        <p className="mb-6 text-fadedBlack dark:text-fadedWhite text-lg">
          {ABOUT.paragraph2}
        </p>

        <ColorButton to="" label="Read more" />
      </div>

      <div></div>
    </section>
  );
};

export default About;
