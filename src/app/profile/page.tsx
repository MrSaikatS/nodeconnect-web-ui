import ProfileInfo from "@/components/sections/ProfileInfo";
import ProfilePostCardContainer from "@/components/sections/ProfilePostCardContainer";
import getAuthenticatedUser from "@/utils/queries/getAuthenticatedUser";
import { Divider } from "@nextui-org/divider";
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

      <Divider className="mx-auto w-[86dvw] max-w-screen-sm" />

      <ProfilePostCardContainer
        key={userData.id}
        userId={userData.id}
      />
    </>
  );
};

export default page;
