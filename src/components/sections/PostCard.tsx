import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Trash } from "lucide-react";
import Image from "next/image";

type PostCardProps = {
  selfPost: boolean;
};

const PostCard = ({ selfPost }: PostCardProps) => {
  return (
    <>
      <Card as={"section"}>
        <CardHeader className="flex justify-between">
          <div className="flex items-center gap-2 text-lg">
            <Image
              src={`https://avatar.iran.liara.run/public/boy?username=Saikat+Sardar`}
              alt="Profile Image"
              width={45}
              height={45}
              className="rounded-full"
            />

            <div className="">Saikat Sardar</div>
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
          <div className="mb-4">Lorem ipsum dolor sit amet.</div>

          <Image
            src="/postimg.jpg"
            alt="Post Image"
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
