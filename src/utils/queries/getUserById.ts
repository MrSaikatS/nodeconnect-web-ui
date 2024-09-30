import { HTTPError } from "ky";
import { cookies } from "next/headers";
import api from "../ky/server";
import { DefautResponseType, UserType } from "../types";
import { notFound } from "next/navigation";

const getUserById = async (userId: string) => {
  try {
    const sessionToken = cookies().get("directus_session_token")
      ?.value as string;

    const { data } = await api
      .get(`users/${userId}`, {
        cache: "no-store",
        next: { tags: ["getUserById"] },
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
        searchParams: {
          fields: `id,first_name,last_name,email,title,description,avatar,gender`,
        },
      })
      .json<DefautResponseType<UserType>>();

    return data;
  } catch (error: any) {
    if (error.name === "HTTPError") {
      notFound();
    } else {
      console.log("Network Error");
      return undefined;
    }
  }
};

export default getUserById;
