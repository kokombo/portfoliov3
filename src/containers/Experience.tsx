import { Divider, ExperienceCard } from "@/components";
import { experiences } from "@/constant/data";

const Experience = () => {
  return (
    <div>
      {experiences.map((experience, index) => {
        return (
          <div key={index.toString()} className="flex flex-col gap-8 lg:gap-16">
            <ExperienceCard experience={experience} index={index} />
            {index < experiences.length - 1 ? <Divider /> : null}
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
