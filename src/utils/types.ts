import { z } from "zod";
import { loginFormSchema } from "./zodSchemas";

export type LoginFormType = z.infer<typeof loginFormSchema>;
