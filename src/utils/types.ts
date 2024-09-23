import { z } from "zod";
import { loginFormSchema, registerFormSchema } from "./zodSchemas";

export type LoginFormType = z.infer<typeof loginFormSchema>;
export type RegisterFormType = z.infer<typeof registerFormSchema>;
