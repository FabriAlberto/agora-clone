import { headers } from "next/headers";
import { getDictionary } from "./dictionary";
import { Locale } from "@/types/common.type";

export const getLocaleFromHeader = (): Locale => {
  return (headers().get("locale") as Locale) ?? "es";
};
export const getDictionaryFromServer = async () => {
  return await getDictionary(getLocaleFromHeader() as Locale);
};
