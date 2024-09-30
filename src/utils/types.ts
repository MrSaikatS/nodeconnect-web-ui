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

export type PublicUserType = {
  first_name: string;
  last_name: string;
  email: string;
};

export type UserType = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  title: null | string;
  description: null | string;
  avatar: null | string;
  gender: string;
};

export type PostType = {
  id: string;
  date_created: string;
  caption: null | string;
  postImg: string;
  user_created: {
    id: string;
    first_name: string;
    last_name: string;
    avatar: null | string;
    gender: string;
  };
};
