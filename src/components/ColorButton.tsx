import Link from "next/link";

type Props = {
  label: string;
  leftIcon?: string;
  rightIcon?: string;
  to: string;
  target?: string;
};

const ColorButton = (props: Props) => {
  return (
    <Link
      href={props.to}
      target={props.target}
      className="py-4 px-8 rounded-[30px] text-base text-fadedWhite bg-gradient-to-r from-fadedPurple to-purple hover:opacity-80"
    >
      {props.leftIcon} {props.label} {props.rightIcon}
    </Link>
  );
};

export default ColorButton;
