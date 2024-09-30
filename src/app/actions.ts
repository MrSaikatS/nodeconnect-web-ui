"use server";

import { revalidateTag } from "next/cache";

export const revalidateAuthUser = async () => {
  revalidateTag("getAuthenticatedUser");
};

export const revalidateGetPostsByUser = async () => {
  revalidateTag("getPostsByUser");
};
