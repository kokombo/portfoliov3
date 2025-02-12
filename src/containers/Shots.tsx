import { SectionHeading } from "@/components";
import Image from "next/image";

type Props = {
  currentProject: ProjectType;
};

const Shots = (props: Props) => {
  return (
    <section>
      <SectionHeading className="text-4xl">Shots</SectionHeading>

      <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 bg-fadedWhite dark:bg-gray py-6 px-4 rounded-3xl">
        {props.currentProject.images?.map((shot, index) => {
          return (
            <Image
              key={index.toString()}
              src={shot}
              alt={`${props.currentProject.title}-${index}`}
              height={500}
              width={500}
              quality={100}
              placeholder="blur"
              className="object-contain"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Shots;
