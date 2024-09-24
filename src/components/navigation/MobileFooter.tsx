import { Button } from "@nextui-org/button";
import { Navbar } from "@nextui-org/navbar";
import { ImagePlus, LayoutDashboard } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import LogoutButton from "../buttons/LogoutButton";
import AvatarMenu from "./AvatarMenu";

const MobileFooter = () => {
  const pathname = usePathname();

  const { push } = useRouter();

  if (pathname === "/auth/login" || pathname === "/auth/register") {
    return <></>;
  }

  return (
    <>
      <div className="fixed bottom-0 w-full border-t border-foreground-100 sm:hidden">
        <Navbar isBlurred>
          <div className="flex w-full justify-between py-2">
            <Button
              isIconOnly
              variant="light"
              startContent={<LayoutDashboard size={38} />}
              onPress={() => push("/")}
              //   onPressEnd={onClose}
            >
              {/* Feed */}
            </Button>

            <Button
              isIconOnly
              variant="light"
              startContent={<ImagePlus size={38} />}
              onPress={() => push("/create-post")}
              //   onPressEnd={onClose}
            >
              {/* Post */}
            </Button>

            <Button
              isIconOnly
              variant="light"
              onPress={() => push("/profile")}
              //   onPressEnd={onClose}
            >
              <AvatarMenu withName={false} />
            </Button>

            <LogoutButton />
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default MobileFooter;
