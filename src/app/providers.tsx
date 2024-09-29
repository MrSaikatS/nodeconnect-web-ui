"use client";

import { darkModeAtom } from "@/utils/helpers";
import { NextUIProvider } from "@nextui-org/system";
import { useAtom } from "jotai";
import { ReactNode, useEffect } from "react";
import { ToastContainer } from "react-toastify";

type ProvidersProps = Readonly<{
  children: ReactNode;
}>;

const Providers = ({ children }: ProvidersProps) => {
  const [isDark, setIsDark] = useAtom(darkModeAtom);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      <NextUIProvider>
        {children}

        <ToastContainer
          position="top-center"
          autoClose={1500}
          draggable={true}
          theme={isDark ? "dark" : "light"}
        />
      </NextUIProvider>
    </>
  );
};

export default Providers;
