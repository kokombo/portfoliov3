type Props = {
  heading: string;
};

const SectionHeading = (props: Props) => {
  return (
    <h2 className="mb-8 md:mb-12 text-2xl md:text-3xl font-medium text-black dark:text-white">
      {props.heading}
    </h2>
  );
};

export default SectionHeading;
