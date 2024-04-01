import { Locale } from "@/types/common.type";

const dictionaries = {
  en: () => import("@/dictionary/en.json").then((module) => module.default),
  es: () => import("@/dictionary/es.json").then((module) => module.default),
};  
export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.es();
};
