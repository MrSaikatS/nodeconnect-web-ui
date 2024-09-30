import ProfileInfo from "@/components/sections/ProfileInfo";
import ProfilePostCardContainer from "@/components/sections/ProfilePostCardContainer";
import getUserById from "@/utils/queries/getUserById";
import { Divider } from "@nextui-org/divider";

type DynamicPageProps = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({ params }: DynamicPageProps) {
  const userData = await getUserById(params.userId);

  if (userData === undefined) {
    return {
      title: "Public Profile | NodeSocial",
      description: "NodeSocial Public Profile Page",
    };
  } else {
    return {
      title: `${userData.first_name}'s Profile | NodeSocial`,
      description: `Profile Page of ${userData.first_name}`,
    };
  }
}

const page = async ({ params: { userId } }: DynamicPageProps) => {
  const userData = await getUserById(userId);

  if (userData === undefined) {
    return <></>;
  }

  return (
    <>
      <ProfileInfo
        key={userData.id}
        selfProfile={false}
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
