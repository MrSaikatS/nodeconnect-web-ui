import { HTTPError } from "ky";
import api from "../ky/client";

const authLogout = async () => {
  try {
    await api.post("auth/logout", {
      next: { tags: ["authLogout"] },
      json: {
        refresh_token: "",
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
      const errorResponse = httpError.response;

      if (errorResponse.status === 400 || errorResponse.status === 401) {
        return {
          success: true,
          message: "User already logged out",
        };
      } else {
        return {
          success: false,
          message: "Something went wrong",
        };
      }
    } else {
      return {
        success: false,
        message: "Network Error",
      };
    }
  }
};

export default authLogout;
