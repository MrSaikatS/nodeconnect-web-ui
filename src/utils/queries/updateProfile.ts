import { HTTPError } from "ky";
import { ProfileEditFormType } from "../types";
import api from "../ky/client";

const updateProfile = async (pData: ProfileEditFormType) => {
  try {
    await api.patch("users/me", {
      next: { tags: ["updateUserProfile"] },
      json: pData,
    });

    return {
      success: true,
      message: "Profile Updated Successfully",
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

export default updateProfile;
