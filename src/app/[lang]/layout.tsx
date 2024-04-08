import CustomFooter from "@/components/layout/footer/custom-footer";
import CustomNavbar from "@/components/layout/navbar/custom-navbar";
import { getDictionary } from "@/utils/dictionary";
import { getLocaleFromHeader } from "@/utils/utils.server";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const lang = getLocaleFromHeader();
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <header className="mb-[75px]">
        <CustomNavbar dictionary={dictionary} lang={lang} />
      </header>
      <main>{children}</main>
      <footer className="min-h-[270px] w-full  px-[50px] py-3 ">
        <CustomFooter />
      </footer>
    </div>
  );
};

export default Layout;
