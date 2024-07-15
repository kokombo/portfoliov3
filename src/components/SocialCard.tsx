import Link from "next/link";
import type { IconType } from "react-icons";

type Props = {
  icon: IconType;
  name: string;
  href: string;
};

const SocialCard = (props: Props) => {
  return (
    <Link href={props.href} target="_blank">
      <article className="flex items-center gap-2 lg:gap-4 hover:scale-105">
        <props.icon height={32} width={32} />

        <span className="text-black dark:text-white">{props.name}</span>
      </article>
    </Link>
  );
};

export default SocialCard;
