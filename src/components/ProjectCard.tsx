"use client";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

type Props = {
  image?: StaticImport;
  title: string;
  meta: string;
  to: string;
};

const ProjectCard = (props: Props) => {
  return (
    <Link href={props.to}>
      <article className="bg-fadedWhite dark:bg-gray rounded-3xl px-6 py-8 space-y-6">
        <h3 className="text-black dark:text-white text-2xl font-medium pt-20 tracking-wide">
          {props.title}
        </h3>

        <p className="text-fadedBlack dark:text-fadedWhite tracking-wide leading-relaxed">
          {props.meta}
        </p>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="inline-block p-3 text-3xl rounded-full bg-gradient-to-r from-fadedPurple to-purple"
        >
          <GoArrowUpRight height={16} width={12} color="white" />
        </motion.div>
      </article>
    </Link>
  );
};

export default ProjectCard;
