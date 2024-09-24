import ProfileEditForm from "@/components/forms/ProfileEditForm";
import UpdateAvatar from "@/components/sections/UpdateAvatar";
import { Divider } from "@nextui-org/divider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Profile | NodeSocial",
  description: "NodeSocial Edit Profile Page",
};

const page = () => {
  return (
    <>
      <div className="py-4">
        <UpdateAvatar />
      </div>

      <Divider className="mx-auto w-[310px] sm:w-[390px]" />

      <div className="pb-20 pt-4 sm:pb-4">
        <ProfileEditForm />
      </div>
    </>
  );
};

export default page;
