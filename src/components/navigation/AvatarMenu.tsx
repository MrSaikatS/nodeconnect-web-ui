import getAuthenticatedUser from "@/utils/queries/getAuthenticatedUser";
import Image from "next/image";

type AvatarMenuProps = {
  withName: boolean;
};

const AvatarMenu = async ({ withName }: AvatarMenuProps) => {
  const userData = await getAuthenticatedUser();

  if (userData === undefined) {
    return <></>;
  }

  const { first_name, last_name, avatar, gender } = userData;

  const avatarUrl =
    avatar === null
      ? `https://avatar.iran.liara.run/public/${gender === "male" ? "boy" : "girl"}?username=${first_name}+${last_name}`
      : avatar;

  return (
    <div className="flex items-center gap-2">
      <Image
        src={avatarUrl}
        alt="Profile Image"
        width={38}
        height={38}
        className="h-[38px] w-[38px] rounded-full"
      />
      {withName && <span className="pr-[2rem] text-lg">{first_name}</span>}
    </div>
  );
};

export default AvatarMenu;
