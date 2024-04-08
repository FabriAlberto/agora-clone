import { Locale } from "@/types/common.type";

export const getFullPath = (locale: Locale, path: string) => {
  return `/${locale}/${path}`;
};
export const sleep = (seconds: number = 1) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};
