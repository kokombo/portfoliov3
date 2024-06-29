import { AboutMeText, ColorButton, SlideItem } from "@/components";
import { images } from "@/constant";
import Image from "next/image";

const About = () => {
  return (
    <section className="section grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 overflow-hidden">
      <SlideItem position="left">
        <article>
          <AboutMeText />

          <ColorButton to="/about" label="Read more" />
        </article>
      </SlideItem>

      <SlideItem position="right">
        <article className="bg-fadedWhite dark:bg-gray rounded-3xl  h-500 lg:h-full w-full">
          <div className="relative h-full w-full">
            <Image
              src={images.code}
              alt="coding laptop"
              fill
              className="rounded-3xl"
              quality={100}
              sizes="any"
            />
          </div>
        </article>
      </SlideItem>
    </section>
  );
};

export default About;
