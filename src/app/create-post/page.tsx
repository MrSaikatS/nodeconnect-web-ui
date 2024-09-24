import PostForm from "@/components/forms/PostForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Post | NodeSocial",
  description: "NodeSocial Create Post Page",
};

const page = () => {
  return (
    <>
      <div className="grid h-[90dvh] place-items-center">
        <PostForm />
      </div>
    </>
  );
};

export default page;
