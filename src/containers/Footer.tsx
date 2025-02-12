import { SocialCard } from "@/components";
import { socials } from "@/constant/data";

const Footer = () => {
  return (
    <footer className="px-4 py-6 md:px-6 md:py-8 lg:px-24 lg:py-10 flex flex-col md:flex-row items-center md:justify-between gap-2 lg:gap-0">
      <div className="flex items-center gap-4 lg:gap-8">
        {socials.map((social) => {
          return (
            <SocialCard
              key={social.id.toString()}
              icon={social.icon}
              name={social.label}
              href={social.url}
            />
          );
        })}
      </div>

      <p className="text-black dark:text-white">All Rights Reserved ©2024</p>
    </footer>
  );
};

export default Footer;
