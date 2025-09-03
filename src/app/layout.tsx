import type { Metadata } from "next";
import "normalize.css"
import "./styles/globals.scss";


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
