"use client";

import Header from "@/components/navigation/Header";
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
      </NextUIProvider>
    </>
  );
};

export default Providers;
