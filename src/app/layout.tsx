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
          <Providers>{children}</Providers>
        </JotaiProvider>
      </body>
    </html>
  );
};

export default RootLayout;
