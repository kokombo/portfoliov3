import { twMerge } from "tailwind-merge";

type Props = {
  experience: Experience;
  index: number;
};

const ExperienceCard = (props: Props) => {
  return (
    <article
      className={twMerge(
        "flex flex-col lg:flex-row gap-6",
        props.index > 0 && "pt-8 lg:pt-16"
      )}
    >
      <article className="flex gap-1 font-medium text-2xl lg:w-1/3 ">
        <h6>{props.experience.startDate} </h6> -{" "}
        <h6>{props.experience.endDate} </h6>
      </article>

      <article className="flex flex-col gap-6 lg:w-2/3">
        <span>
          <h5 className="font-medium text-2xl mb-2">
            {props.experience.position}
          </h5>

          <h6 className=" font-medium text-lg">{props.experience.company} </h6>
        </span>

        <span className="flex flex-col gap-8">
          {props.experience.outlines.map((outline, index) => {
            return (
              <ul
                key={index.toString()}
                className="list-item text-fadedBlack dark:text-fadedWhite text-wrap"
              >
                <li>{outline}</li>
              </ul>
            );
          })}
        </span>
      </article>
    </article>
  );
};

export default ExperienceCard;
