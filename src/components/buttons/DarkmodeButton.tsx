import { darkModeAtom } from "@/utils/helpers";
import { Button } from "@nextui-org/button";
import { useAtom } from "jotai";
import MoonAnimated from "../icons/MoonAnimated";
import SunAnimated from "../icons/SunAnimated";

const DarkmodeButton = () => {
  const [isDark, setIsDark] = useAtom(darkModeAtom);

  return (
    <>
      <Button
        isIconOnly
        variant="light"
        onPress={() => setIsDark(!isDark)}
      >
        {isDark ? <MoonAnimated /> : <SunAnimated />}
      </Button>
    </>
  );
};

export default DarkmodeButton;
