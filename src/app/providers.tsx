"use client";

import Header from "@/components/navigation/Header";
import MobileFooter from "@/components/navigation/MobileFooter";
import { NextUIProvider } from "@nextui-org/system";
import { ReactNode } from "react";

type ProvidersProps = Readonly<{
  children: ReactNode;
}>;

const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <NextUIProvider>
        <Header />

        <main className="container mx-auto max-w-screen-lg px-6">
          {children}
        </main>

        <MobileFooter />
      </NextUIProvider>
    </>
  );
};

export default Providers;
