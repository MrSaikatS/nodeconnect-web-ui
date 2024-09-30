import PostCard from "@/components/sections/PostCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feed | NodeSocial",
  description: "NodeSocial Feed Page",
};

const page = () => {
  return (
    <>
      <div className="grid gap-4 py-4 pb-20 sm:pb-4">
        <PostCard selfPost={false} />
        <PostCard selfPost={false} />
        <PostCard selfPost={false} />
      </div>
    </>
  );
};

export default page;
