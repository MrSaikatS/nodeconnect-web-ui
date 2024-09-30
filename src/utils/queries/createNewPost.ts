import { HTTPError } from "ky";
import api from "../ky/client";
import { DefautResponseType } from "../types";

const createNewPost = async (caption: string | undefined, postImg: File) => {
  if (postImg === undefined) {
    return {
      success: false,
      message: "An image is required",
    };
  }

  try {
    const formData = new FormData();

    formData.append("file", postImg);

    const { data } = await api
      .post("files", {
        next: { tags: ["uploadPostImg"] },
        body: formData,
      })
      .json<DefautResponseType<{ id: string }>>();

    if (caption !== undefined && caption !== "") {
      await api
        .post("items/posts", {
          next: { tags: ["createNewPost"] },
          json: {
            caption: caption,
            postImg: data.id,
          },
        })
        .json();
    } else {
      await api
        .post("items/posts", {
          next: { tags: ["createNewPost"] },
          json: {
            postImg: data.id,
          },
        })
        .json();
    }

    return {
      success: true,
      message: "Post Created Successfully",
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

export default createNewPost;
