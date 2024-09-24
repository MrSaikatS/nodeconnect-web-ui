"use client";

import { fakeApiDelay } from "@/utils/helpers";
import { ProfileEditFormType } from "@/utils/types";
import { profileEditFormSchema } from "@/utils/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { useForm } from "react-hook-form";

const ProfileEditForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ProfileEditFormType>({
    resolver: zodResolver(profileEditFormSchema),
  });

  const updateProfileFunc = async (pData: ProfileEditFormType) => {
    await fakeApiDelay();

    console.log(pData);
  };

  return (
    <>
      <Card
        as={"section"}
        className="mx-auto w-[310px] sm:w-[390px]"
      >
        <CardHeader className="flex justify-center text-2xl">
          Change Profile Details
        </CardHeader>

        <CardBody>
          <form
            onSubmit={handleSubmit(updateProfileFunc)}
            className="grid gap-4"
            noValidate
          >
            <Input
              type="text"
              size="lg"
              variant="bordered"
              label="First Name"
              placeholder="Enter your first name"
              isDisabled={isSubmitting}
              {...register("first_name")}
              errorMessage={errors.first_name?.message}
              isInvalid={!!errors.first_name?.message}
            />

            <Input
              type="text"
              size="lg"
              variant="bordered"
              label="Last Name"
              placeholder="Enter your last name"
              isDisabled={isSubmitting}
              {...register("last_name")}
              errorMessage={errors.last_name?.message}
              isInvalid={!!errors.last_name?.message}
            />

            <Select
              label="Gender"
              size="lg"
              variant="bordered"
              placeholder="Select your gender"
              isDisabled={isSubmitting}
              {...register("gender")}
              errorMessage={errors.gender?.message}
              isInvalid={!!errors.gender?.message}
            >
              <SelectItem key={"male"}>Male</SelectItem>
              <SelectItem key={"female"}>Female</SelectItem>
            </Select>

            <Input
              type="text"
              size="lg"
              variant="bordered"
              label="Nickname"
              placeholder="Enter your nickname"
              isDisabled={isSubmitting}
              {...register("title")}
              errorMessage={errors.title?.message}
              isInvalid={!!errors.title?.message}
            />

            <Textarea
              size="lg"
              variant="bordered"
              label="Bio"
              placeholder="Enter your bio here"
              isDisabled={isSubmitting}
              {...register("description")}
              errorMessage={errors.description?.message}
              isInvalid={!!errors.description?.message}
            />

            <div className="grid grid-cols-2 gap-4">
              <Button
                type="button"
                size="lg"
                color="danger"
                variant="ghost"
                isLoading={isSubmitting}
              >
                Discard
              </Button>
              <Button
                type="submit"
                size="lg"
                variant="ghost"
                isLoading={isSubmitting}
              >
                Update
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default ProfileEditForm;
