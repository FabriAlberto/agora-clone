import { MasterDictionaryType } from "@/context/main.context";
import { StaticImageData } from "next/image";

export interface NavbarItemLink {
  key: keyof MasterDictionaryType["layout"];
  path: string;
  children?: NavbarItemLink[];
  classes?: string;
}

export const Locales = ["es", "en"] as const;
export type Locale = (typeof Locales)[number];

export type ItemCount={
  count: number,
 description_key: keyof MasterDictionaryType["home"],
}
export type ItemCompanyDedication = {
  image: StaticImageData;
  titleKey: keyof MasterDictionaryType["home"];
  contentKey: keyof MasterDictionaryType["home"];
  backgroundColorContent: string;
  href: string;
}
export type ItemMenuCommon = {
  titleKey: keyof MasterDictionaryType["home"],
  contentKey: keyof MasterDictionaryType["home"],
  buttonTitleKey: keyof MasterDictionaryType["home"],
  image: StaticImageData,
  tag: string,
}
export type ActionResponse = {
  message: string;
  success: boolean;
  data?: any;
};