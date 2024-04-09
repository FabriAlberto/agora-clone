import { MasterDictionaryType } from "@/context/main.context";
import { Locale, NavbarItemLink } from "@/types/common.type";
import { getFullPath } from "@/utils/common-functions";
import Link from "next/link";
import React from "react";

type Props = {
  footerItems: NavbarItemLink[];
  lang: Locale;
  dictionary: MasterDictionaryType["layout"];
};

const FooterLinks = ({ footerItems, lang, dictionary }: Props) => {
  return (
    <ul className="flex flex-col gap-3 ">
      {footerItems.map((item) => {
        return (
          <Link key={item.key} href={getFullPath(lang, item.path)}>
            <p className={` ${item.classes} text-base  `}>{dictionary[item.key]} </p>
          </Link>
        );
      })}
    </ul>
  );
};

export default FooterLinks;
