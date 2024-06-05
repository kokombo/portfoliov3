import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";

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

        <motion.div
          whileHover={{ scale: 1.2 }}
          className="inline-block p-3 mb-8 lg:mb-10 text-3xl rounded-full bg-gradient-to-r from-fadedPurple to-purple"
        >
          <GoArrowUpRight height={16} width={12} />
        </motion.div>
      </article>
    </Link>
  );
};

export default ProjectCard;
