"use client";

import authLogin from "@/utils/queries/authLogin";
import { LoginFormType } from "@/utils/types";
import { loginFormSchema } from "@/utils/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import EyeAnimated from "../icons/EyeAnimated";
import EyeSlashAnimated from "../icons/EyeSlashAnimated";

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { push } = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
    mode: "all",
  });

  const userLoginFunc = async (lData: LoginFormType) => {
    const { success, message } = await authLogin(lData);

    if (!success) {
      toast.error(message);
    }

    if (success) {
      toast.success(message);
      push("/");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(userLoginFunc)}
        className="grid gap-4"
        noValidate
      >
        <Input
          type="email"
          size="lg"
          variant="bordered"
          label="Email"
          placeholder="Enter your email"
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
          isDisabled={isSubmitting}
          {...register("password")}
          errorMessage={errors.password?.message}
          isInvalid={!!errors.password?.message}
        />

        <Button
          size="lg"
          type="submit"
          variant="ghost"
          isLoading={isSubmitting}
        >
          Login
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
