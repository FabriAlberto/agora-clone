import Image from "next/image";
import Icon from "../../../../public/agora-logo.svg";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import NavbarLinks from "./navbar-links";
import ButtonLanguage from "@/components/common/ui/language-button";
import { Navbar, NavbarContent, NavbarMenuToggle } from "@nextui-org/navbar";
import { navbarItems } from "@/lib/routes";
import MenuMobile from "./menu-mobile";
import { Locale } from "@/types/common.type";
import { getLocaleFromHeader } from "@/utils/utils.server";
import { getDictionary } from "@/utils/dictionary";
import ButtonDonate from "@/components/common/ui/button-donate";

export default async function CustomNavbar() {
  const lang = getLocaleFromHeader();
  const dictionary = await getDictionary(lang);
  return (
    <Navbar
      className=" flex h-[75px] w-full justify-center shadow-md"
      maxWidth="lg"
      position="sticky"
    >
      <NavbarContent className="w-2/12">
        <Image alt="logo agora" src={Icon} width={110} height={110} />
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

      <NavbarMenuToggle className="md:hidden" />

      <MenuMobile navbarItems={navbarItems} dictionary={dictionary.layout} lang={lang as Locale} />
    </Navbar>
  );
}
