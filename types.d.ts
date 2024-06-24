type ProjectType = {
  id: string;
  image: string | StaticImageData;
  title: string;
  description: string;
  slug: string;
  images: Array<string | StaticImageData>;
  stack: string;
  live?: string;
  github?: string;
};

type SocialsType = {
  id: string;
  url: string;
  label: string;
  icon: IconType;
};

type Experience = {
  startDate: string;
  endDate: string;
  position: string;
  company: string;
  outlines: string[];
};
