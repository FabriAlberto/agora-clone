"use client";

import { MasterDictionaryType } from "@/context/main.context";
import Link from "next/link";
import React, { useState } from "react";
import ArrowUp from "../../../../public/arrow-up.svg";
import Image from "next/image";
type Props = {
  dictionary: MasterDictionaryType["layout"];
};
const ButtonSuscribe = ({ dictionary }: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="#"
      className="flex items-center gap-1.5 "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className=" text-sm font-extrabold text-secondary">{dictionary.btn_suscribe}</p>
      <Image
        src={ArrowUp}
        alt="arrow up icon"
        width={19}
        height={19}
        className={hovered ? "move-suscribe-button" : "suscribe-button"}
      />
    </Link>
  );
};

export default ButtonSuscribe;
