import ProfileInfo from "@/components/sections/ProfileInfo";
import ProfilePostCardContainer from "@/components/sections/ProfilePostCardContainer";
import getAuthenticatedUser from "@/utils/queries/getAuthenticatedUser";
import { Divider } from "@nextui-org/divider";

export async function generateMetadata() {
  const userData = await getAuthenticatedUser();

  if (userData === undefined) {
    return {
      title: "Private Profile | NodeSocial",
      description: "NodeSocial Private Profile Page",
    };
  } else {
    return {
      title: `${userData.first_name}'s Profile | NodeSocial`,
      description: `Profile Page of ${userData.first_name}`,
    };
  }
}

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
