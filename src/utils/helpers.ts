import { atomWithStorage } from "jotai/utils";

export const darkModeAtom = atomWithStorage("darkMode", true);

export const fakeApiDelay = async (timeInMs?: number) => {
  await new Promise<void>((resolve) => setTimeout(resolve, timeInMs || 1000));
};
