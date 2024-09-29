"use client";

import { Button } from "@nextui-org/button";
import { Navbar } from "@nextui-org/navbar";
import { ImagePlus, LayoutDashboard } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";
import LogoutButton from "../buttons/LogoutButton";

type MobileFooterProps = Readonly<{
  children: ReactNode;
}>;

const MobileFooter = ({ children }: MobileFooterProps) => {
  const pathname = usePathname();

  const { push } = useRouter();

  if (pathname === "/auth/login" || pathname === "/auth/register") {
    return <></>;
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 z-10 w-full border-t border-foreground-100 sm:hidden">
        <Navbar isBlurred>
          <div className="flex w-full justify-between py-2">
            <Button
              isIconOnly
              variant="light"
              startContent={<LayoutDashboard size={38} />}
              onPress={() => push("/")}
            >
              {/* Feed */}
            </Button>

            <Button
              isIconOnly
              variant="light"
              startContent={<ImagePlus size={38} />}
              onPress={() => push("/create-post")}
            >
              {/* Post */}
            </Button>

            <Button
              isIconOnly
              variant="light"
              onPress={() => push("/profile")}
            >
              {/* AvatarMenu */}
              {children}
            </Button>

            <LogoutButton />
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default MobileFooter;
