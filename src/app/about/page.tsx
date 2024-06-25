"use client";

import { AboutMeText, PreviewLink, SectionHeading } from "@/components";
import { Experience } from "@/containers";

const AboutPage = () => {
  return (
    <main className="section flex flex-col gap-10">
      <AboutMeText />

      <section>
        <div className="flex items-baseline justify-between">
          <SectionHeading heading="Experience" />

          <PreviewLink
            label="Resume"
            href="https://drive.google.com/file/d/1yb9n6K34IQdJEHoui6tXxQmcM9I62m1h/view?usp=sharing"
          />
        </div>

        <Experience />
      </section>
    </main>
  );
};

export default AboutPage;
