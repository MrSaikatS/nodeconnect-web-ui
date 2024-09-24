import { Button } from "@nextui-org/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const { push } = useRouter();

  return (
    <>
      <Button
        isIconOnly
        color="danger"
        variant="light"
        onPress={() => push("/auth/login")}
      >
        <LogOut size={38} />
      </Button>
    </>
  );
};

export default LogoutButton;
