"use client";
import { NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import React from "react";
import NavbarItemDropDown from "./navbar-item-drop-down";
import { Locale, NavbarItemLink } from "@/types/common.type";
import { MasterDictionaryType } from "@/context/main.context";
import { getFullPath } from "../../../utils/common-functions";
import { usePathname } from "next/navigation";

type Props = {
  navbarItems: NavbarItemLink[];
  dictionary: MasterDictionaryType["layout"];
  lang: Locale;
};
const NavbarLinks = ({ navbarItems, dictionary, lang }: Props) => {
  const pathname = usePathname();

  const checkIsActive = (path: string) => {
    const newPath = pathname.replace(`/${lang}`, "");
    return newPath.startsWith(path);
  };
  
  return (
    <>
      {navbarItems.map((item, index) => {
        return item.children ? (
          <NavbarItemDropDown
            key={item.key}
            item={item}
            dictionary={dictionary}
            lang={(lang as Locale) ?? "es"}
          />
        ) : (
          <NavbarItem key={item.key} isActive={checkIsActive(item.path)}>
            <Link
              key={item.key}
              href={getFullPath((lang as Locale) ?? "es", item.path)}
              className={` text-sm text-black ${item.classes} 
              ${index === navbarItems.length - 1 ? "hover:text-primary" : "hover:text-secondary"} `}
            >
              {dictionary[item.key]}
            </Link>
          </NavbarItem>
        );
      })}
    </>
  );
};

export default NavbarLinks;
