import { HTTPError } from "ky";
import { DefautResponseType, PostType } from "../types";
import api from "../ky/server";
import { cookies } from "next/headers";

const getAllPosts = async () => {
  try {
    const sessionToken = cookies().get("directus_session_token")
      ?.value as string;

    const { data } = await api
      .get("items/posts", {
        cache: "no-store",
        next: { tags: ["getPostsByUser"] },
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
        searchParams: {
          sort: "-date_created",
          fields: `*,user_created.id,user_created.first_name,user_created.last_name,user_created.avatar,user_created.gender`,
        },
      })
      .json<DefautResponseType<PostType[]>>();

    return data;
  } catch (error: any) {
    if (error.name === "HTTPError") {
      const httpError = error as HTTPError;
      const errorJson = await httpError.response.json<any>();
      console.log(errorJson.errors[0].message);
      return undefined;
    } else {
      console.log("Network Error");
      return undefined;
    }
  }
};

export default getAllPosts;
