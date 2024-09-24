import { HTTPError } from "ky";
import api from "../ky/client";
import {
  DefautResponseType,
  ExsistedUserType,
  RegisterFormType,
} from "../types";

export const authRegister = async (rData: RegisterFormType) => {
  try {
    const getExsistingUser = await api
      .get("users", {
        searchParams: {
          filter: JSON.stringify({
            email: {
              _eq: rData.email,
            },
          }),
        },
      })
      .json<DefautResponseType<ExsistedUserType[]>>();

    if (getExsistingUser.data.length !== 0) {
      return {
        success: false,
        message: "Email already exists",
        data: null,
      };
    } else {
      return {
        success: true,
        message: "User Registeration Successful",
        data: null,
      };
    }
  } catch (error: any) {
    if (error.name === "HTTPError") {
      const httpError = error as HTTPError;
      const errorJson = await httpError.response.json<any>();
      return {
        success: false,
        message: errorJson.errors[0].message as string,
        data: null,
      };
    } else {
      return {
        success: false,
        message: "Network Error",
        data: null,
      };
    }
  }
};
