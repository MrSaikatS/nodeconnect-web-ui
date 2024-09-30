"use server";

import { revalidateTag } from "next/cache";

export const revalidateAuthUser = async () => {
  try {
    // ...
  } catch (error) {
    // ...
  }

  revalidateTag("getAuthenticatedUser");
};
