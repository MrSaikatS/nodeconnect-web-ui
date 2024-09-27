import authLogout from "@/utils/queries/authLogout";
import { Button } from "@nextui-org/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LogoutButton = () => {
  const { push } = useRouter();

  const handleLogout = async () => {
    const { success, message } = await authLogout();

    if (!success) {
      toast.error(message);
    }

    if (success) {
      toast.success(message);
      push("/auth/login");
    }
  };

  return (
    <>
      <Button
        isIconOnly
        color="danger"
        variant="light"
        onPress={handleLogout}
      >
        <LogOut size={38} />
      </Button>
    </>
  );
};

export default LogoutButton;
