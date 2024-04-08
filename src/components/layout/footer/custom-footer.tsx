import Image from "next/image";
import React from "react";
import Icon from "../../../../public/agora-logo.svg";
import FooterLinks from "./footer-links";
import { getLocaleFromHeader } from "@/utils/utils.server";
import { getDictionary } from "@/utils/dictionary";
import { navbarItems } from "@/lib/routes";
import ButtonDonate from "@/components/common/ui/button-donate";
import ButtonLanguage from "@/components/common/ui/language-button";
import Link from "next/link";
import ButtonSuscribe from "./button-suscribe";
import SocialNetworkingList from "./social-networking-list";
import ButtonArrowAnimation from "@/components/common/ui/button-arrow-animation";
export default async function CustomFooter() {
  const lang = getLocaleFromHeader();
  const dictionary = await getDictionary(lang);

  return (
    <div className={`mx-auto flex  flex-wrap md:max-w-[1140px]`}>
      <div className="flex min-h-[200px] w-full  flex-col justify-between p-2.5 md:w-3/12">
        <Image src={Icon} alt="agora logo" />
        <div>
          <p className="text-xs">
            <span className="font-bold "> Agora Partnerships® </span> All Rights Reserved.Reg. U.S.
            Pat. and TM
          </p>
          <p className="text-xs">
            Off{" "}
            <Link
              target="_blank"
              href={"https://agora2030.org/politica-de-privacidad-agora-partnerships"}
              className=" text-primary hover:text-secondary "
            >
              Política de Privacidad
            </Link>
          </p>
        </div>
      </div>

      <div className="w-full p-2.5 md:w-3/12">
        <FooterLinks dictionary={dictionary.layout} lang={lang} footerItems={navbarItems} />
      </div>

      <div className=" flex min-h-[150px] w-full flex-col items-start justify-start  gap-4 p-2.5 md:w-3/12">
        <ButtonDonate dictionary={dictionary.layout} />
        <ButtonArrowAnimation
          title={dictionary.layout.btn_suscribe}
          className="flex items-center gap-1.5 "
          href="#"
        />
        <ButtonLanguage lang={lang} />
      </div>

      <div className=" flex   min-h-[150px] w-full flex-col items-start justify-between p-2.5 md:w-3/12 md:items-end">
        <SocialNetworkingList />
        <p className="text-sm">info@agora2030.org</p>
      </div>
    </div>
  );
}
