import { HTTPError } from "ky";
import api from "../ky/client";
import { DefautResponseType, PublicUserType, RegisterFormType } from "../types";

const authRegister = async (rData: RegisterFormType) => {
  try {
    const { data } = await api
      .get("users", {
        searchParams: {
          filter: JSON.stringify({
            email: {
              _eq: rData.email,
            },
          }),
        },
      })
      .json<DefautResponseType<PublicUserType[]>>();

    if (data.length === 0) {
      await api
        .post("users", {
          json: {
            first_name: rData.first_name,
            last_name: rData.last_name,
            gender: rData.gender,
            email: rData.email,
            password: rData.password,
            role: "4cd82120-1c0d-4679-9971-9a432a09a571",
          },
        })
        .json();

      return {
        success: true,
        message: "User Registeration Successful",
      };
    } else {
      return {
        success: false,
        message: `Email ${rData.email} already exists`,
      };
    }
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

export default authRegister;
