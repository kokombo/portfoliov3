type Props = {
  label: string;
};

const TechnicalSkill = (props: Props) => {
  return <h4 className="text-base lg:text-xl font-medium">{props.label}</h4>;
};

export default TechnicalSkill;
