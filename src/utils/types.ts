import { z } from "zod";
import {
  loginFormSchema,
  profileEditFormSchema,
  registerFormSchema,
} from "./zodSchemas";

export type LoginFormType = z.infer<typeof loginFormSchema>;
export type RegisterFormType = z.infer<typeof registerFormSchema>;
export type ProfileEditFormType = z.infer<typeof profileEditFormSchema>;
