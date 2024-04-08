import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Locale } from "@/types/common.type";
import { getLocaleFromHeader } from "@/utils/utils.server";
import { getDictionary } from "@/utils/dictionary";
import { MainWrapper } from "@/context/main.context";
import { Toaster } from "react-hot-toast";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agora",
  description: "Agora 2030",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = getLocaleFromHeader();
  const dictionary = await getDictionary(locale as Locale);

  return (
    <html lang="es">
      <body className={manrope.className}>
        <Providers>
          <MainWrapper dictionary={dictionary} lang={locale}>
            {children}
          </MainWrapper>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
