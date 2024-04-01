"use client";

import { MasterDictionaryType } from "@/context/main.context";
import { Locale, NavbarItemLink } from "@/types/common.type";
import { getFullPath } from "@/utils/common-functions";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import React, { useRef, useState } from "react";

type Props = {
  item: NavbarItemLink;
  dictionary: MasterDictionaryType["layout"];
  lang: Locale;
};
const NavbarItemDropDown = ({ item, dictionary, lang }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleOpen = () => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleClose = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 500);
  };

  return (
    <Dropdown isOpen={open}>
      <NavbarItem onMouseLeave={handleClose} onMouseEnter={handleOpen}>
        <DropdownTrigger>
          <Link
            key={item.key}
            href={getFullPath(lang, item.path)}
            className="text-sm text-black hover:text-secondary"
          >
            {dictionary[item.key]}
          </Link>
        </DropdownTrigger>
      </NavbarItem>

      <DropdownMenu
        aria-label="ACME features"
        className="w-[340px]"
        itemClasses={{
          base: "gap-4",
        }}
        onMouseLeave={handleClose}
        onMouseEnter={handleOpen}
      >
        {item.children!.map((item) => {
          return (
            <DropdownItem key={item.key}>
              <Link href={getFullPath(lang, item.path)} className="text-sm text-black">
                {dictionary[item.key]}
              </Link>
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarItemDropDown;
