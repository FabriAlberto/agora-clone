"use client";
import { Locale } from "@/types/common.type";
import { useRouter } from "next/navigation";
import React from "react";
type Props = {
  lang: Locale;
};
const mainStyles = "flex items-center justify-center rounded  px-[15px] h-[26px]  text-xs  ";
const selectedLanguageStyles = "bg-black font-bold text-white leading-3	";
const languageStyle = "bg-white text-black leading-3 	";

const ButtonLanguage = ({ lang }: Props) => {
  const redirect = useRouter();
  const getStylesBylanguage = (currentLan: string) => {
    if (currentLan === lang) {
      return mainStyles + selectedLanguageStyles;
    }
    return mainStyles + languageStyle;
  };

  const onChangeLenguage = (lang: Locale) => {
    redirect.push(`/${lang}`);
    redirect.refresh();
  };

  return (
    <div className="flex  w-[80px] ">
      <button onClick={() => onChangeLenguage("es")} className={`${getStylesBylanguage("es")}`}>
        ES
      </button>
      <button onClick={() => onChangeLenguage("en")} className={` ${getStylesBylanguage("en")}`}>
        EN
      </button>
    </div>
  );
};

export default ButtonLanguage;
