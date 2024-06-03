import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

type Props = {
  image?: StaticImport;
  title: string;
  meta: string;
  to: string;
};

const ProjectCard = (props: Props) => {
  return (
    <Link href={props.to}>
      <article className="bg-fadedWhite dark:bg-gray rounded-3xl px-6">
        <h6 className="text-black dark:text-white text-2xl font-medium mb-6 pt-[128px]">
          {props.title}
        </h6>

        <p className="text-fadedBlack dark:text-fadedWhite text-base mb-6">
          {props.meta}{" "}
        </p>

        <span className="inline-block p-3 mb-8 lg:mb-12 text-3xl rounded-full bg-gradient-to-r from-fadedPurple to-purple hover:scale-105 transition-transform duration-300 ease-in-out">
          <GoArrowUpRight height={16} width={12} />
        </span>
      </article>
    </Link>
  );
};

export default ProjectCard;
