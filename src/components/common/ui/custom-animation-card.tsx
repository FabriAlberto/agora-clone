"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import RayasIcon from "../icons/rayas-icon";
import Link from "next/link";
import { customStyles } from "@/styles/common";
type Props = {
  title: string;
  content: string;
  href?: string;
  src: StaticImageData | string;
  backgroundColorContent?: string;
  className?: string;
};
const CustomAnimationCard = ({
  content,
  href = "#",
  src,
  title,
  backgroundColorContent,
  className,
}: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative p-[10px] ${className} group`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`absolute left-10 top-[-9px]  opacity-0 group-hover:opacity-100 ${hovered ? "opacity-100" : "opacity-0"}   `}
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

      <div
        className={`rounded-xl ${hovered ? "text-white " : ""} p-[30px] `}
        style={{
          background: hovered ? backgroundColorContent || customStyles.gradient1 : "",
        }}
      >
        <h3 className="mb-[1rem] text-lg  font-bold">{title}</h3>
        <p className="mb-[1rem] text-base">{content}</p>
      </div>
    </div>
  );
};

export default CustomAnimationCard;
