import { ColorButton, SectionHeading } from "@/components";
import { ABOUT } from "@/constant/data";

const About = () => {
  return (
    <section className="section grid grid-cols-1 lg:grid-cols-2 gap-y-4 md:gap-y-6 lg:gap-24">
      <article>
        <SectionHeading heading="About Me" />

        <p className="mb-6 text-fadedBlack dark:text-fadedWhite text-lg">
          {ABOUT.paragraph1}
        </p>

        <p className="mb-6 text-fadedBlack dark:text-fadedWhite text-lg">
          {ABOUT.paragraph2}
        </p>

        <ColorButton to="" label="Read more" />
      </article>

      <article className="bg-fadedWhite dark:bg-gray rounded-3xl px-6 h-500 lg:h-full w-full"></article>
    </section>
  );
};

export default About;
