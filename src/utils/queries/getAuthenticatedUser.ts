import { HTTPError } from "ky";
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
  } catch (error: any) {
    if (error.name === "HTTPError") {
      const httpError = error as HTTPError;
      const errorJson = await httpError.response.json<any>();

      // console.log(`----------------------------------`);
      // console.log(`Log from getAuthenticatedUser Func`);
      // console.log(`----------------------------------`);

      // console.log(errorJson.errors[0].message);
      return undefined;
    } else {
      console.log("Network Error");
      return undefined;
    }
  }
};

export default getAuthenticatedUser;
