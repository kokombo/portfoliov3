import { ICONS } from "@/constant";
import Image from "next/image";

const Profile = () => {
  return (
    <span className="flex items-center gap-2 lg:gap-4">
      <Image
        src={ICONS.samuel}
        alt="profile image"
        priority
        quality={100}
        height={48}
        width={48}
        className="rounded-100"
      />

      <h5 className="text-black dark:text-white text-base lg:text-lg font-medium">
        Samuel
      </h5>
    </span>
  );
};

export default Profile;
