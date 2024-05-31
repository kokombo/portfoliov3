import Link from "next/link";

type Props = {
  label: string;
  leftIcon?: string;
  rightIcon?: string;
  to: string;
};

const ColorButton = (props: Props) => {
  return (
    <Link
      href={props.to}
      className="py-4 px-8 rounded-3xl text-base text-fadedWhite bg-gradient-to-r from-fadedPurple to-purple "
    >
      {props.leftIcon} {props.label} {props.rightIcon}
    </Link>
  );
};

export default ColorButton;
