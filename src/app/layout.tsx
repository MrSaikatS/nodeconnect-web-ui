import { ReactNode } from "react";
import "./globals.css";
import Providers from "./providers";

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      className="dark">
      <body className={``}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
