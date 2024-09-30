import ProfileInfo from "@/components/sections/ProfileInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public Profile | NodeSocial",
  description: "NodeSocial Profile Page",
};

type DynamicPageProps = {
  params: {
    userId: string;
  };
};

const page = ({ params: { userId } }: DynamicPageProps) => {
  console.log(userId);

  return (
    <>
      {/* <ProfileInfo selfProfile={false} /> */}

      <div className="grid gap-4 py-4"></div>
    </>
  );
};

export default page;
