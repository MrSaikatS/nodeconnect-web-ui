import { HTTPError } from "ky";
import api from "../ky/client";
import { LoginFormType } from "../types";

const authLogin = async (lData: LoginFormType) => {
  try {
    //
    await api.post("auth/login", {
      json: {
        email: lData.email,
        password: lData.password,
        mode: "session",
      },
    });

    return {
      success: true,
      message: "User Login Successful",
    };
  } catch (error: any) {
    if (error.name === "HTTPError") {
      const httpError = error as HTTPError;
      const errorJson = await httpError.response.json<any>();
      return {
        success: false,
        message: errorJson.errors[0].message as string,
      };
    } else {
      return {
        success: false,
        message: "Network Error",
      };
    }
  }
};

export default authLogin;
