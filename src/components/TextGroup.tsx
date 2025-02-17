type Props = {
  heading: string;
  subheading: string;
};

const TextGroup = (props: Props) => {
  return (
    <div>
      <h2 className="mb-4 text-2xl md:text-3xl font-medium text-black dark:text-white text-wrap tracking-wide">
        {props.heading}
      </h2>

      <p className="text-fadedBlack dark:text-fadedWhite text-wrap tracking-wide">
        {props.subheading}
      </p>
    </div>
  );
};

export default TextGroup;
