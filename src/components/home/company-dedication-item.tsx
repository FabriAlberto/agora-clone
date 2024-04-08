"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import RayasIcon from "../common/icons/rayas-icon";
import Link from "next/link";
type Props = {
  title: string;
  content: string;
  href?: string;
  src: StaticImageData | string;
};
const CustomAnimationCard = ({ content, href="#", src, title }: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-4/12 p-[10px] "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`absolute left-10 top-[-9px] ${hovered ? "block" : "hidden"}   `}
        style={{ zIndex: 11 }}
      >
        <RayasIcon height={"35px"} width={"35px"} />
      </div>
      <div className={`mb-[20px]  overflow-hidden rounded-xl `}>
        <Link href={href} target={"_blank"}>
          <Image
            src={src}
            alt="mujer_emprendedora"
            style={{ width: "100%", height: "100%" }}
            className={`${hovered ? "img-dedication-animation" : "img-dedication"}`}
          />
        </Link>
      </div>

      <div className={`rounded-xl ${hovered ? "bg-primary text-white " : ""} p-[30px] `}>
        <h3 className="mb-[1rem] text-lg  font-bold">{title}</h3>
        <p className="mb-[1rem] text-base">{content}</p>
      </div>
    </div>
  );
};

export default CustomAnimationCard;
