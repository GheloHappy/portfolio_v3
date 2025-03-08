import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ghelonico Maligaya",
  description: "Portfolio of Ghelonico Maligaya",
  icons: {
    icon: [
      {
        url: '/happy.webp',
        type: 'image/webp',
      },
    ],
    shortcut: '/happy.webp',
    apple: '/happy.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
