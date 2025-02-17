const SectionHeading = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2
    className={`mb-8 md:mb-12 text-2xl md:text-3xl font-medium text-black dark:text-white tracking-wide ${className}`}
    {...props}
  />
);

export default SectionHeading;
