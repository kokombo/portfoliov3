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

// export interface IconsType {
//   icon: ReactNode;
//   url: string;
//   name: string;
// }

type SocialsType = {
  id: string;
  url: string;
  label: string;
};
