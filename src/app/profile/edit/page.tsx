import ProfileEditForm from "@/components/forms/ProfileEditForm";
import UpdateAvatar from "@/components/sections/UpdateAvatar";
import getAuthenticatedUser from "@/utils/queries/getAuthenticatedUser";
import { Divider } from "@nextui-org/divider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Profile | NodeSocial",
  description: "NodeSocial Edit Profile Page",
};

const page = async () => {
  const userData = await getAuthenticatedUser();

  if (userData === undefined) {
    return <></>;
  }

  return (
    <>
      <div className="py-4">
        <UpdateAvatar profile={userData} />
      </div>

      <Divider className="mx-auto min-w-[86dvw] max-w-screen-sm" />

      <div className="pb-20 pt-4 sm:pb-4">
        <ProfileEditForm profile={userData} />
      </div>
    </>
  );
};

export default page;
