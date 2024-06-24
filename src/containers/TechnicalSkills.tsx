import { SectionHeading, TechnicalSkill } from "@/components";
import { skills } from "@/constant/data";

const TechnicalSkills = () => {
  return (
    <section className="section">
      <SectionHeading heading="Technical Skills" />

      <div className="flex flex-wrap gap-x-4 gap-y-6 justify-center items-center bg-fadedWhite dark:bg-gray rounded-3xl px-3 py-12 lg:px-6 lg:py-24">
        {skills.map((skill, index) => (
          <TechnicalSkill key={index} label={skill} />
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
