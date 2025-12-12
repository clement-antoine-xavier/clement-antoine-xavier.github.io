import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
