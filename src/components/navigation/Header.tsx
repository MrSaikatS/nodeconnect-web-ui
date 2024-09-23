import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { ImagePlus, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import LogoutButton from "../buttons/LogoutButton";
import DarkmodeButton from "../buttons/DarkmodeButton";

const Header = () => {
  const pathname = usePathname();

  const { push } = useRouter();

  if (pathname === "/auth/login" || pathname === "/auth/register") {
    return <></>;
  }

  return (
    <>
      <Navbar isBordered>
        <NavbarBrand className="text-2xl font-bold tracking-wide">
          <Link href="/">NodeConnect</Link>
        </NavbarBrand>

        <NavbarContent
          justify="end"
          className="flex sm:hidden"
        >
          <NavbarItem>
            <DarkmodeButton />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent
          justify="end"
          className="hidden sm:flex"
        >
          <NavbarItem>
            <Button
              variant="light"
              startContent={<LayoutDashboard size={38} />}
              onPress={() => push("/")}
              className="text-lg"
            >
              Feed
            </Button>
          </NavbarItem>

          <NavbarItem>
            <Button
              variant="light"
              startContent={<ImagePlus size={38} />}
              onPress={() => push("/create-post")}
              className="text-lg"
            >
              Post
            </Button>
          </NavbarItem>

          <NavbarItem>
            <Button
              variant="light"
              onPress={() => push("/profile")}
            >
              pro
              {/* <AvatarMenu withName={true} /> */}
            </Button>
          </NavbarItem>

          <NavbarItem>
            <LogoutButton />
          </NavbarItem>

          <NavbarItem>
            <DarkmodeButton />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Header;
