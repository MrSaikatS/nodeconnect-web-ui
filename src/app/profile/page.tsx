import ProfileInfo from "@/components/sections/ProfileInfo";
import getAuthenticatedUser from "@/utils/queries/getAuthenticatedUser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | NodeSocial",
  description: "NodeSocial Profile Page",
};

const page = async () => {
  const userData = await getAuthenticatedUser();

  if (userData === undefined) {
    return <></>;
  }

  return (
    <>
      <ProfileInfo
        key={userData.id}
        selfProfile={true}
        user={userData}
      />

      <div className="grid gap-4 py-4"></div>
    </>
  );
};

export default page;
