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

      <Divider />

      <div className="py-4">
        <ProfileEditForm />
      </div>
    </>
  );
};

export default page;
