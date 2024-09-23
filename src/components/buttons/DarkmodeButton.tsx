import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import MoonAnimated from "../icons/MoonAnimated";
import SunAnimated from "../icons/SunAnimated";

const DarkmodeButton = () => {
  // const [isDark, setIsDark] = useAtom(darkModeAtom);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

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
