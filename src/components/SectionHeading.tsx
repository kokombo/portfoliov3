type Props = {
  children: React.ReactNode;
  className?: string;
};

const SectionHeading = ({ children, className }: Props) => {
  return (
    <h2
      className={`mb-8 md:mb-12 text-2xl md:text-3xl font-medium text-black dark:text-white tracking-wide ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
