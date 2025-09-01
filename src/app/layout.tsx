import type { Metadata } from "next";
import "./styles/globals.scss";
import "normalize.css"


export const metadata: Metadata = {
  title: "CV Myr-dev",
  description: "CV Myrhorodskyi dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className =""
      >
        {children}
      </body>
    </html>
  );
}
