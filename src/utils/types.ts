import { z } from "zod";
import {
  loginFormSchema,
  postFormSchema,
  profileEditFormSchema,
  registerFormSchema,
} from "./zodSchemas";

export type LoginFormType = z.infer<typeof loginFormSchema>;
export type RegisterFormType = z.infer<typeof registerFormSchema>;
export type ProfileEditFormType = z.infer<typeof profileEditFormSchema>;
export type PostFormType = z.infer<typeof postFormSchema>;

export type DefautResponseType<T> = {
  data: T;
};

export type ExsistedUserType = {
  email: string;
};
