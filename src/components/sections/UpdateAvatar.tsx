"use client";

import { revalidateAuthUser } from "@/app/actions";
import env from "@/utils/env/client";
import uploadAvatar from "@/utils/queries/uploadAvatar";
import { UserType } from "@/utils/types";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { FilePenLine } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { useFilePicker } from "use-file-picker";

type UpdateAvatarProps = {
  profile: UserType;
};

const UpdateAvatar = ({ profile }: UpdateAvatarProps) => {
  const [isFileSelected, setIsFileSelected] = useState(false);

  const { push } = useRouter();

  const avatarUrl =
    profile.avatar === null
      ? `https://avatar.iran.liara.run/public/${profile.gender === "male" ? "boy" : "girl"}?username=${profile.first_name}+${profile.last_name}`
      : `${env.NEXT_PUBLIC_API_URL}/assets/${profile.avatar}`;

  const { openFilePicker, clear, filesContent, plainFiles } = useFilePicker({
    multiple: false,
    accept: "image/*",
    readAs: "DataURL",
    onFilesSuccessfullySelected: () => setIsFileSelected(true),
    onClear: () => setIsFileSelected(false),
  });

  const uploadAvatarFunc = async () => {
    const { success, message } = await uploadAvatar(
      profile.avatar,
      plainFiles[0],
    );

    if (!success) {
      toast.error(message);
    }

    if (success) {
      clear();
      toast.success(message);
      await revalidateAuthUser();
      push("/profile");
    }
  };

  return (
    <>
      <Card
        as={"section"}
        className="mx-auto w-[86dvw] max-w-screen-sm"
      >
        <CardHeader className="flex justify-center text-2xl">
          Change Avatar
        </CardHeader>

        <CardBody className="grid place-items-center">
          {!isFileSelected && (
            <div className="relative">
              <Image
                src={avatarUrl}
                alt={profile.first_name}
                width={300}
                height={300}
                className="aspect-square h-[300px] w-[300px] rounded-full"
              />

              <button
                onClick={openFilePicker}
                className="absolute left-0 top-0 grid h-[300px] w-[300px] place-items-center rounded-full bg-slate-500/50 backdrop-blur"
              >
                <FilePenLine size={48} />
              </button>
            </div>
          )}

          {filesContent.map((file, index) => (
            <Image
              key={index}
              src={file.content}
              alt={file.name}
              width={300}
              height={300}
              className="aspect-square h-[300px] w-[300px] rounded-full"
            />
          ))}
        </CardBody>

        {isFileSelected && (
          <CardFooter className="grid place-items-center">
            <div className="flex w-[300px] justify-between">
              <Button
                type="button"
                size="lg"
                color="danger"
                variant="ghost"
                onPress={clear}
              >
                Discard
              </Button>

              <Button
                type="button"
                size="lg"
                variant="ghost"
                onPress={uploadAvatarFunc}
              >
                Update
              </Button>
            </div>
          </CardFooter>
        )}
      </Card>
    </>
  );
};

export default UpdateAvatar;
