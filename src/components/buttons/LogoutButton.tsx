import { Button } from "@nextui-org/button";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
  return (
    <>
      <Button
        isIconOnly
        color="danger"
        variant="light"
        // onPress={userLogoutFunc}
      >
        <LogOut size={38} />
      </Button>
    </>
  );
};

export default LogoutButton;
