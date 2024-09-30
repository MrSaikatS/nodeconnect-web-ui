import env from "@/utils/env/server";
import { PostType } from "@/utils/types";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { format } from "date-fns";
import { enIN } from "date-fns/locale";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PostCardProps = {
  selfPost: boolean;
  postData: PostType;
  clickableProfile: boolean;
};

const PostCard = ({ selfPost, postData, clickableProfile }: PostCardProps) => {
  const avatarUrl =
    postData.user_created.avatar === null
      ? `https://avatar.iran.liara.run/public/${postData.user_created.gender === "male" ? "boy" : "girl"}?username=${postData.user_created.first_name}+${postData.user_created.last_name}`
      : `${env.API_URL}/assets/${postData.user_created.avatar}`;

  const postImgUrl = `${env.API_URL}/assets/${postData.postImg}`;

  const postedOnDate = format(new Date(postData.date_created), "d MMM yyyy", {
    locale: enIN,
  });

  const postedOnTime = format(new Date(postData.date_created), "h:mm aaa", {
    locale: enIN,
  });

  return (
    <>
      <Card as={"section"}>
        <CardHeader className="flex justify-between">
          {clickableProfile && (
            <Link
              href={`/profile/${postData.user_created.id}`}
              className="flex items-center gap-2 text-lg"
            >
              <Image
                src={avatarUrl}
                alt={postData.user_created.first_name}
                width={45}
                height={45}
                className="rounded-full"
              />

              <div className="">
                <div className="text-xl font-semibold">
                  {postData.user_created.first_name}{" "}
                  {postData.user_created.last_name}
                </div>
                <div className="text-sm text-foreground-500">
                  {postedOnDate}
                </div>
              </div>
            </Link>
          )}

          {!clickableProfile && (
            <div className="flex items-center gap-2 text-lg">
              <Image
                src={avatarUrl}
                alt={postData.user_created.first_name}
                width={45}
                height={45}
                className="rounded-full"
              />

              <div className="">
                <div className="text-xl font-semibold">
                  {postData.user_created.first_name}{" "}
                  {postData.user_created.last_name}
                </div>
                <div className="text-sm text-foreground-500">
                  {postedOnDate}
                </div>
              </div>
            </div>
          )}

          <div className="">
            {selfPost && (
              <Button
                isIconOnly
                color="danger"
                variant="light"
              >
                <Trash size={32} />
              </Button>
            )}
          </div>
        </CardHeader>

        <Divider />

        <CardBody>
          {postData.caption === null ? null : (
            <div className="mb-4">{postData.caption}</div>
          )}

          <Image
            src={postImgUrl}
            alt={postData.caption || "Post Image"}
            height={536}
            width={952}
            className="aspect-video h-[auto] w-[auto] rounded-lg object-contain"
          />
        </CardBody>

        <Divider />

        <CardFooter className="justify-between">
          <div className="">10+ Likes</div>

          <div className="">Posted On: {postedOnTime}</div>
        </CardFooter>
      </Card>
    </>
  );
};

export default PostCard;
