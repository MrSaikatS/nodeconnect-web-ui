import { HTTPError } from "ky";
import api from "../ky/client";
import { DefautResponseType } from "../types";

const uploadAvatar = async (prevAvatarId: null | string, avatarFile: File) => {
  try {
    //
    if (prevAvatarId !== null) {
      console.log("Deleting previous avatar");

      await api.delete(`files/${prevAvatarId}`, {
        next: { tags: ["deletePreviousAvatar"] },
      });

      console.log("Previous avatar deleted");
    }

    const formData = new FormData();

    formData.append("file", avatarFile);

    const { data } = await api
      .post("files", {
        next: { tags: ["uploadAvatar"] },
        body: formData,
      })
      .json<DefautResponseType<{ id: string }>>();

    await api.patch("users/me", {
      next: { tags: ["updateUserProfile"] },
      json: {
        avatar: data.id,
      },
    });

    return {
      success: true,
      message: "Avatar Uploaded Successfully",
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

export default uploadAvatar;
