import { MasterDictionaryType } from "@/context/main.context";

export interface NavbarItemLink {
  key: keyof MasterDictionaryType["layout"];
  path: string;
  children?: NavbarItemLink[];
  classes?: string;
}

export const Locales = ["es", "en"] as const;
export type Locale = (typeof Locales)[number];
