import { cookies } from "next/headers";
import api from "../ky/server";
import { DefautResponseType, UserType } from "../types";

const getAuthenticatedUser = async () => {
  try {
    const sessionToken = cookies().get("directus_session_token")
      ?.value as string;

    const { data } = await api
      .get("users/me", {
        cache: "no-store",
        next: { tags: ["getAuthenticatedUser"] },
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
        searchParams: {
          fields: `id,first_name,last_name,email,title,description,avatar,gender`,
        },
      })
      .json<DefautResponseType<UserType>>();

    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export default getAuthenticatedUser;
