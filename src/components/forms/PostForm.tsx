"use client";

import { revalidateGetPostsByUser } from "@/app/actions";
import createNewPost from "@/utils/queries/createNewPost";
import { PostFormType } from "@/utils/types";
import { postFormSchema } from "@/utils/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { ImagePlus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useFilePicker } from "use-file-picker";

const PostForm = () => {
  const { push } = useRouter();

  const { openFilePicker, clear, filesContent, plainFiles } = useFilePicker({
    multiple: false,
    accept: "image/*",
    readAs: "DataURL",
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PostFormType>({
    resolver: zodResolver(postFormSchema),
    mode: "all",
  });

  const clearPost = () => {
    clear();
    reset();
  };

  const createPostFunc = async ({ caption }: PostFormType) => {
    const { success, message } = await createNewPost(caption, plainFiles[0]);

    if (!success) {
      toast.error(message);
    }

    if (success) {
      clearPost();
      toast.success(message);
      await revalidateGetPostsByUser();
      push("/profile");
    }
  };

  return (
    <>
      <Card className="mx-auto w-[310px] sm:w-[390px]">
        {filesContent.map((file, index) => (
          <CardHeader key={index}>
            <Image
              src={file.content}
              alt={file.name}
              height={219}
              width={390}
              className="aspect-video h-auto w-auto rounded-lg"
            />
          </CardHeader>
        ))}

        <CardBody>
          <form
            onSubmit={handleSubmit(createPostFunc)}
            className="grid grid-cols-5 gap-4"
            noValidate
          >
            <div className="grid place-items-center">
              <Button
                isIconOnly
                onPress={openFilePicker}
                type="button"
                size="lg"
                variant="ghost"
              >
                <ImagePlus size={28} />
              </Button>
            </div>

            <Input
              type="text"
              size="lg"
              variant="bordered"
              // label="Caption"
              placeholder="Write a caption"
              className="col-span-4"
              {...register("caption")}
              errorMessage={errors.caption?.message}
              isInvalid={!!errors.caption?.message}
            />

            <div className="col-span-5 flex gap-4">
              <Button
                isLoading={isSubmitting}
                type="button"
                onPress={clearPost}
                fullWidth
                size="lg"
                color="danger"
                variant="ghost"
              >
                Discard
              </Button>

              <Button
                isLoading={isSubmitting}
                type="submit"
                fullWidth
                size="lg"
                variant="ghost"
              >
                Create Post
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default PostForm;
