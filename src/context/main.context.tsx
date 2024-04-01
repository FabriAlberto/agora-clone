"use client";

import { Locale } from "@/types/common.type";
import { getDictionary } from "@/utils/dictionary";
import React, { createContext, useContext, useMemo } from "react";

export type MasterDictionaryType = Awaited<ReturnType<typeof getDictionary>>;

export type MasterDataType = {
  dictionary: MasterDictionaryType;
 lang:Locale
  
};

const MainContext = createContext({} as MasterDataType);

type MasterProps = {
  children: React.ReactNode;
  dictionary: MasterDictionaryType;
  lang:Locale;
};

export const useMainContext = () => {
  return useContext(MainContext)!;
};

export function MainWrapper({ children, dictionary,lang }: Readonly<MasterProps>) {
  return <MainContext.Provider value={{ dictionary,lang }}>{children}</MainContext.Provider>;
}
