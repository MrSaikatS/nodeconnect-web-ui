import getPostsByUser from "@/utils/queries/getPostsByUser";
import PostCard from "./PostCard";
import NoPosts from "./NoPosts";

type ProfilePostCardContainerProps = {
  userId: string;
};

const ProfilePostCardContainer = async ({
  userId,
}: ProfilePostCardContainerProps) => {
  const userPosts = await getPostsByUser(userId);

  if (userPosts === undefined) {
    return <></>;
  }

  if (userPosts.length === 0) {
    return <NoPosts />;
  }

  return (
    <>
      <div className="grid gap-4 py-4 pb-20 sm:pb-4">
        {userPosts.map((item) => (
          <PostCard
            key={item.id}
            selfPost={true}
            postData={item}
          />
        ))}
      </div>
    </>
  );
};

export default ProfilePostCardContainer;
