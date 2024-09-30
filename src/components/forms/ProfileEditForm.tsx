"use client";

import updateProfile from "@/utils/queries/updateProfile";
import { ProfileEditFormType, UserType } from "@/utils/types";
import { profileEditFormSchema } from "@/utils/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type ProfileEditFormProps = {
  profile: UserType;
};

const ProfileEditForm = ({ profile }: ProfileEditFormProps) => {
  const { push } = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ProfileEditFormType>({
    resolver: zodResolver(profileEditFormSchema),
  });

  const updateProfileFunc = async (pData: ProfileEditFormType) => {
    const { success, message } = await updateProfile(pData);

    if (!success) {
      toast.error(message);
    }

    if (success) {
      toast.success(message);
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
              defaultValue={profile.first_name}
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
              defaultValue={profile.last_name}
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
              defaultSelectedKeys={[profile.gender]}
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
              defaultValue={profile.title || ""}
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
              defaultValue={profile.description || ""}
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
