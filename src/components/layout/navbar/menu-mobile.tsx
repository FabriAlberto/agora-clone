"use client";
import ButtonLanguage from "@/components/common/ui/language-button";
import { MasterDictionaryType } from "@/context/main.context";
import { Locale, NavbarItemLink } from "@/types/common.type";
import { getFullPath } from "@/utils/common-functions";
import { NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

type Props = {
  navbarItems: NavbarItemLink[];
  dictionary: MasterDictionaryType["layout"];
  lang: Locale;
  onCloseMenu: () => void;
};
const MenuMobile = ({ navbarItems, dictionary, lang, onCloseMenu }: Props) => {
  return (
    <NavbarMenu>
      {navbarItems.map((item, idx) => {
        return (
          <NavbarMenuItem key={`${item.key}-${idx}`} onClick={onCloseMenu}>
            <Link href={getFullPath((lang as Locale) ?? "es", item.path)} className="text-sm">
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
