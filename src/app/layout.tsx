import AvatarMenu from "@/components/navigation/AvatarMenu";
import Header from "@/components/navigation/Header";
import MobileFooter from "@/components/navigation/MobileFooter";
import { Provider as JotaiProvider } from "jotai";
import { ReactNode } from "react";
import "react-toastify/dist/ReactToastify.min.css";
import "./globals.css";
import Providers from "./providers";

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      className="dark"
    >
      <body className={``}>
        <JotaiProvider>
          <Providers>
            <Header>
              <AvatarMenu withName={true} />
            </Header>

            {children}

            <MobileFooter>
              <AvatarMenu withName={false} />
            </MobileFooter>
          </Providers>
        </JotaiProvider>
      </body>
    </html>
  );
};

export default RootLayout;
