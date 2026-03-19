import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import StyledComponentsRegistry from "./styled-components-registry";

export const metadata: Metadata = {
  title: "Clément Antoine XAVIER",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
