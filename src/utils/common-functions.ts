import { Locale } from "@/types/common.type";

export const getFullPath = (locale: Locale, path: string) => {
  return `/${locale}/${path}`;
};
