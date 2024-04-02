"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowUp from "../../../../public/arrow-up.svg";
type Props = {
  title: string;
  href: string;
  className:string;
};
const ButtonArrowAnimation = ({ title, href,className }: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      className={`${className} gap-1.5`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className=" text-sm font-extrabold text-secondary">{title}</p>
      <Image
        src={ArrowUp}
        alt="arrow up"
        width={19}
        height={19}
        className={hovered ? "move-suscribe-button" : "suscribe-button"}
      />
    </Link>
  );
};

export default ButtonArrowAnimation;
