"use client";

import { NextUIProvider } from "@nextui-org/system";
import { ReactNode } from "react";

type ProvidersProps = Readonly<{
  children: ReactNode;
}>;

const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <NextUIProvider>
        <main className="container mx-auto max-w-screen-lg px-6">
          {children}
        </main>
      </NextUIProvider>
    </>
  );
};

export default Providers;
