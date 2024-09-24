"use client";

import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { FilePenLine } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useFilePicker } from "use-file-picker";

const UpdateAvatar = () => {
  const [isFileSelected, setIsFileSelected] = useState(false);

  const { openFilePicker, clear, filesContent, plainFiles } = useFilePicker({
    multiple: false,
    accept: "image/*",
    readAs: "DataURL",
    onFilesSuccessfullySelected: () => setIsFileSelected(true),
    onClear: () => setIsFileSelected(false),
  });

  const uploadAvatarFunc = async () => {
    console.log(plainFiles[0]);

    clear();
  };

  return (
    <>
      <Card as={"section"}>
        <CardHeader className="flex justify-center text-2xl">
          Change Avatar
        </CardHeader>

        <CardBody className="grid place-items-center">
          {!isFileSelected && (
            <div className="relative">
              <Image
                src={`https://avatar.iran.liara.run/public/boy?username=Saikat+Sardar`}
                alt="Profile Image"
                width={300}
                height={300}
                className="h-[300px] w-[300px] rounded-full"
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
              className="h-[300px] w-[300px] rounded-full"
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
