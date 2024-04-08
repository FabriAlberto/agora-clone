"use client";

import Image from "next/image";
import Icon from "../../../../public/agora-logo.svg";
import NavbarLinks from "./navbar-links";
import ButtonLanguage from "@/components/common/ui/language-button";
import { Navbar, NavbarContent, NavbarMenuToggle } from "@nextui-org/navbar";
import { navbarItems } from "@/lib/routes";
import MenuMobile from "./menu-mobile";
import { Locale } from "@/types/common.type";
import ButtonDonate from "@/components/common/ui/button-donate";
import Link from "next/link";
import { MasterDictionaryType } from "@/context/main.context";
import { useState } from "react";
type Props = {
  lang: Locale;
  dictionary: MasterDictionaryType;
};
export default function CustomNavbar({ lang, dictionary }: Readonly<Props>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className=" fixed flex h-[75px] w-full justify-center shadow-md"
      maxWidth="lg"
    >
      <NavbarContent className="w-2/12">
        <Link href={`/${lang}`}>
          <Image
            alt="logo agora"
            src={Icon}
            width={110}
            height={110}
            onClick={() => setIsMenuOpen(false)}
          />
        </Link>
      </NavbarContent>

      <NavbarContent
        justify="center"
        className={`  hidden  w-8/12 items-center gap-2 md:flex md:justify-between  md:gap-4 lg:gap-7`}
      >
        <NavbarLinks navbarItems={navbarItems} dictionary={dictionary.layout} lang={lang} />
      </NavbarContent>

      <NavbarContent className="w-2/12">
        <ButtonDonate dictionary={dictionary.layout} />

        <div className=" hidden md:flex">
          <ButtonLanguage lang={lang as Locale} />
        </div>
      </NavbarContent>

      <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="md:hidden" />
      <MenuMobile
        navbarItems={navbarItems}
        dictionary={dictionary.layout}
        lang={lang as Locale}
        onCloseMenu={() => setIsMenuOpen(false)}
      />
    </Navbar>
  );
}
