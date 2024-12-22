type Props = {
  label: string;
};

const TechnicalSkill = (props: Props) => {
  return <span className="text-base lg:text-lg">{props.label}</span>;
};

export default TechnicalSkill;
