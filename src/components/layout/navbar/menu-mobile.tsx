import ButtonLanguage from "@/components/common/ui/language-button";
import { MasterDictionaryType } from "@/context/main.context";
import { Locale, NavbarItemLink } from "@/types/common.type";
import { NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

type Props = {
  navbarItems: NavbarItemLink[];
  dictionary: MasterDictionaryType["layout"];
  lang:Locale;
};
const MenuMobile = ({ navbarItems, dictionary ,lang}: Props) => {
  return (
    <NavbarMenu>
      {navbarItems.map((item, idx) => {
        return (
          <NavbarMenuItem key={`${item.key}-${idx}`}>
            <Link href={item.path} className="text-sm">
              {dictionary[item.key]}
            </Link>
          </NavbarMenuItem>
        );
      })}

      <ButtonLanguage lang={lang} />
    </NavbarMenu>
  );
};

export default MenuMobile;
