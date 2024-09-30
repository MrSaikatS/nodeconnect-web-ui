import NoPosts from "@/components/sections/NoPosts";
import PostCard from "@/components/sections/PostCard";
import getAllPosts from "@/utils/queries/getAllPosts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feed | NodeSocial",
  description: "NodeSocial Feed Page",
};

const page = async () => {
  const allPosts = await getAllPosts();

  if (allPosts === undefined) {
    return <></>;
  }

  if (allPosts.length === 0) {
    return <NoPosts />;
  }

  return (
    <>
      <div className="grid gap-4 py-4 pb-20 sm:pb-4">
        {allPosts.map((item) => (
          <PostCard
            key={item.id}
            selfPost={false}
            postData={item}
          />
        ))}
      </div>
    </>
  );
};

export default page;
