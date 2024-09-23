import ProfileInfo from "@/components/sections/ProfileInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | NodeSocial",
  description: "NodeSocial Profile Page",
};

const page = () => {
  return (
    <>
      <ProfileInfo selfProfile={true} />

      <div className="grid gap-4 py-4"></div>
    </>
  );
};

export default page;
