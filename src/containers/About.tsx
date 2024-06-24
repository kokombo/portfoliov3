import { AboutMeText, ColorButton } from "@/components";
import Image from "next/image";

const About = () => {
  return (
    <section className="section grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
      <article>
        <AboutMeText />

        <ColorButton to="/about" label="Read more" />
      </article>

      <article className="bg-fadedWhite dark:bg-gray rounded-3xl  h-500 lg:h-full w-full">
        <div className="relative h-full w-full">
          <Image
            src="/assets/images/samuel.jpeg"
            alt="samuel ibrahim"
            fill
            className="rounded-3xl"
            quality={100}
            sizes="any"
          />
        </div>
      </article>
    </section>
  );
};

export default About;
