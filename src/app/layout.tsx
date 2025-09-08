import type { Metadata } from "next";
import { LangProvider } from "@/context/LangContext";
import { ModalProvider } from "@/context/ModalContext";
import { LikesProvider } from "@/context/LikesContext";
import "normalize.css"
import "@/styles/globals.scss";


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
    <html lang="en | pl | ua">
      <body
        className=""
      >
        <LangProvider>
          <LikesProvider>
          <ModalProvider>
            {children}
          </ModalProvider>
          </LikesProvider>
        </LangProvider>
      </body>
    </html>
  );
}
