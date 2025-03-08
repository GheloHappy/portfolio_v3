import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/nav";

export const metadata: Metadata = {
  title: "Ghelonico Maligaya",
  description: "Portfolio of Ghelonico Maligaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
