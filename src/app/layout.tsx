import type { Metadata } from "next";
import { LangProvider } from "@/context/LangContext";
import { ModalProvider } from "@/context/ModalContext";
import { LikesProvider } from "@/context/LikesContext";
import localFont from 'next/font/local'
import "normalize.css"
import "@/styles/globals.scss";
import { AuthProvider } from "@/context/AuthContext";


export const metadata: Metadata = {
  title: "CV Myr-dev",
  description: "CV Myrhorodskyi dev",
};

const myFont = localFont({
  src: [
    {
      path: './fonts/Baloo2-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: './fonts/Baloo2-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: './fonts/Baloo2-Regular.ttf',
      weight: '400',
      style: 'regular',
    },
  ],
  variable: '--font-baloo'
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en | pl | ua">
      <body
        className={myFont.className}
      >
        <LangProvider>
          <AuthProvider>
            <LikesProvider>
              <ModalProvider>
                {children}
              </ModalProvider>
            </LikesProvider>
          </AuthProvider>
        </LangProvider>
      </body>
    </html>
  );
}
