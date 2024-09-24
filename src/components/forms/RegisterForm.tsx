"use client";

import { fakeApiDelay } from "@/utils/helpers";
import { RegisterFormType } from "@/utils/types";
import { registerFormSchema } from "@/utils/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { useState } from "react";
import { useForm } from "react-hook-form";
import EyeAnimated from "../icons/EyeAnimated";
import EyeSlashAnimated from "../icons/EyeSlashAnimated";
import { authRegister } from "@/utils/queries/client";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registerFormSchema),
    mode: "all",
  });

  const userRegisterFunc = async (rData: RegisterFormType) => {
    const { success, message, data } = await authRegister(rData);

    if (!success) {
      toast.error(message);
    }

    if (success) {
      toast.success(message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(userRegisterFunc)}
        className="grid grid-cols-2 gap-4"
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
          className="col-span-2"
          isDisabled={isSubmitting}
          {...register("gender")}
          errorMessage={errors.gender?.message}
          isInvalid={!!errors.gender?.message}
        >
          <SelectItem key={"male"}>Male</SelectItem>
          <SelectItem key={"female"}>Female</SelectItem>
        </Select>
        <Input
          type="email"
          size="lg"
          variant="bordered"
          label="Email"
          placeholder="Enter your email"
          className="col-span-2"
          isDisabled={isSubmitting}
          {...register("email")}
          errorMessage={errors.email?.message}
          isInvalid={!!errors.email?.message}
        />
        <Input
          type={isVisible ? "text" : "password"}
          endContent={
            <button
              type="button"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? <EyeSlashAnimated /> : <EyeAnimated />}
            </button>
          }
          size="lg"
          variant="bordered"
          label="Password"
          placeholder="Enter your password"
          className="col-span-2"
          isDisabled={isSubmitting}
          {...register("password")}
          errorMessage={errors.password?.message}
          isInvalid={!!errors.password?.message}
        />

        <Button
          size="lg"
          type="submit"
          variant="ghost"
          className="col-span-2"
          isLoading={isSubmitting}
        >
          Register
        </Button>
      </form>
    </>
  );
};

export default RegisterForm;
