import { ICONS } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  return (
    <Link href="/">
      <span className="flex items-center gap-2">
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
    </Link>
  );
};

export default Profile;
