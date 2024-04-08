import React from "react";
import Link from "next/link";
import ArrowUpIcon from "../icons/arrow-up-icon";
type Props = {
  title: string;
  href: string;
  className: string;
  textColor?: string;
};
const ButtonArrowAnimation = ({ title, href, className, textColor = "text-secondary" }: Props) => {
  return (
    <Link href={href} className={`${className} group-button-arrow gap-1.5 `}>
      <p className={` text-sm font-extrabold ${textColor}`}>{title}</p>

      <ArrowUpIcon className={` suscribe-button  h-10px w-10px  ${textColor} `} />
    </Link>
  );
};

export default ButtonArrowAnimation;
