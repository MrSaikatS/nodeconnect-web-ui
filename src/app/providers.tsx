"use client";

import Header from "@/components/navigation/Header";
import MobileFooter from "@/components/navigation/MobileFooter";
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
        <Header />

        <main className="container mx-auto max-w-screen-lg px-6">
          {children}
        </main>

        <MobileFooter />

        <ToastContainer
          position="top-center"
          autoClose={1500}
          // stacked={true}
          // closeOnClick={true}
          draggable={true}
          theme={isDark ? "dark" : "light"}
        />
      </NextUIProvider>
    </>
  );
};

export default Providers;
