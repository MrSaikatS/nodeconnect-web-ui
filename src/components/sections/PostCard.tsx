import env from "@/utils/env/server";
import { PostType } from "@/utils/types";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Trash } from "lucide-react";
import Image from "next/image";

type PostCardProps = {
  selfPost: boolean;
  postData: PostType;
};

const PostCard = ({ selfPost, postData }: PostCardProps) => {
  const avatarUrl =
    postData.user_created.avatar === null
      ? `https://avatar.iran.liara.run/public/${postData.user_created.gender === "male" ? "boy" : "girl"}?username=${postData.user_created.first_name}+${postData.user_created.last_name}`
      : `${env.API_URL}/assets/${postData.user_created.avatar}`;

  const postImgUrl = `${env.API_URL}/assets/${postData.postImg}`;

  return (
    <>
      <Card as={"section"}>
        <CardHeader className="flex justify-between">
          <div className="flex items-center gap-2 text-lg">
            <Image
              src={avatarUrl}
              alt={postData.user_created.first_name}
              width={45}
              height={45}
              className="rounded-full"
            />

            <div className="">
              {postData.user_created.first_name}{" "}
              {postData.user_created.last_name}
            </div>
          </div>

          <div className="">
            {selfPost && (
              <Button
                isIconOnly
                color="danger"
                variant="light"
              >
                <Trash size={24} />
              </Button>
            )}
          </div>
        </CardHeader>

        <Divider />

        <CardBody>
          {postData.caption === null ? null : (
            <div className="mb-4">Lorem ipsum dolor sit amet.</div>
          )}

          <Image
            src={postImgUrl}
            alt={postData.caption || "Post Image"}
            height={536}
            width={952}
            className="aspect-video h-[auto] w-[auto] rounded-lg"
          />
        </CardBody>

        <Divider />

        <CardFooter className="justify-between">
          <div className="">10+ Likes</div>
          <div className="">Date,Time</div>
        </CardFooter>
      </Card>
    </>
  );
};

export default PostCard;
