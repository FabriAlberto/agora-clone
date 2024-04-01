import { NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import React from "react";
import NavbarItemDropDown from "./navbar-item-drop-down";
import { Locale, NavbarItemLink } from "@/types/common.type";
import { MasterDictionaryType } from "@/context/main.context";
import { getFullPath } from "../../../utils/common-functions";
import { useParams } from "next/navigation";

type Props = {
  navbarItems: NavbarItemLink[];
  dictionary: MasterDictionaryType["layout"];
  lang:Locale;
};
const NavbarLinks = ({ navbarItems, dictionary, lang}: Props) => {

  return (
    <>
      {navbarItems.map((item) => {
        return item.children ? (
          <NavbarItemDropDown
            key={item.key}
            item={item}
            dictionary={dictionary}
            lang={(lang as Locale) ?? "es"}
          />
        ) : (
          <NavbarItem key={item.key}>
            <Link 
              key={item.key}
              href={getFullPath((lang as Locale) ?? "es", item.path)}
              className={`hover:text-secondary text-sm text-black ${item.classes} `}
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
