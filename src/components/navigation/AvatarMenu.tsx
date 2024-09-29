import Image from "next/image";

type AvatarMenuProps = {
  withName: boolean;
};

const AvatarMenu = async ({ withName }: AvatarMenuProps) => {
  const user = {
    first_name: "Saikat",
    last_name: "Sardar",
    avatar: null,
    gender: "male",
  };

  const avatarUrl =
    user.avatar === null
      ? `https://avatar.iran.liara.run/public/${user.gender === "male" ? "boy" : "girl"}?username=${user.first_name}+${user.last_name}`
      : user.avatar;

  return (
    <div className="flex items-center gap-2">
      <Image
        src={avatarUrl}
        alt="Profile Image"
        width={38}
        height={38}
        className="h-[38px] w-[38px] rounded-full"
      />
      {withName && <span className="pr-[2rem] text-lg">{user.first_name}</span>}
    </div>
  );
};

export default AvatarMenu;
