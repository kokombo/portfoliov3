import { SocialCard } from "@/components";
import { socials } from "@/constant/data";

const Footer = () => {
  return (
    <footer className="px-4 md:px-6 lg:px-24">
      <div className="flex items-center gap-8">
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

      <div></div>
    </footer>
  );
};

export default Footer;

//px-4 py-10 md:px-6 md:py-12 lg:px-24 lg:py-20
