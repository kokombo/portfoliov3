import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

type Props = {
  href: string;
  label: string;
};

const PreviewLink = (props: Props) => {
  return (
    <Link
      href={props.href}
      target="_blank"
      className="text-purple dark:text-white flex justify-center items-center gap-2 border-purple border-[1px] py-4 px-8 rounded-[30px] "
    >
      {props.label}{" "}
      <GoArrowUpRight
        height={8}
        width={8}
        className="text-purple dark:text-white"
      />
    </Link>
  );
};

export default PreviewLink;
