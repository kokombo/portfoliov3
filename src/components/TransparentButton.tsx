import Link from "next/link";

type Props = {
  label: string;
  leftIcon?: string;
  rightIcon?: string;
  to: string;
};

const TransparentButton = (props: Props) => {
  return (
    <Link
      href={props.to}
      className="py-4 px-8 text-base rounded-3xl border-[1px] border-purple bg-inherit text-violet dark:text-fadedWhite hover:border-fadedPurple"
    >
      {props.leftIcon} {props.label}{" "}
      <span className="text-purple dark:text-white"> {props.rightIcon}</span>
    </Link>
  );
};

export default TransparentButton;
