type Props = {
  heading: string;
  subheading: string;
};

const TextGroup = (props: Props) => {
  return (
    <div>
      <h2 className="mb-4 text-4xl font-medium text-black dark:text-white">
        {props.heading}
      </h2>

      <h3 className="text-fadedBlack dark:text-fadedWhite text-lg">
        {props.subheading}
      </h3>
    </div>
  );
};

export default TextGroup;
