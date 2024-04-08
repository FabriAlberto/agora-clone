import { Button } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  tag?: string;
  img: string | StaticImageData;
  title: string;
  content: string;
  buttonTitle?: string;
  buttonHref?: string;
  className?: string;
};

const CustomStaticInfoCard = ({
  content,
  img,
  title,
  buttonHref,
  tag,
  buttonTitle,
  className,
}: Props) => {
  return (
    <article className={` p-[10px] ${className ?? "w-full md:w-1/3"} group`}>
      <div className={`relative  mb-[20px] overflow-hidden rounded-xl `}>
        <div className="absolute left-7 top-[25px] rounded-3xl bg-black text-white transition-colors duration-300 group-hover:bg-[#E2663A]">
          <p className="px-3 py-1 text-[12px]">{tag?.toUpperCase()}</p>
        </div>

        <Link href={buttonHref ?? ""} target={"_blank"}>
          <Image
            src={img}
            alt="mujer_emprendedora"
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
            className=""
            width={1000}
            height={1000}
          />
        </Link>
      </div>

      <div className={`p-y-[30px] min-h-[170px] rounded-xl `}>
        <h3 className="mb-[1rem] text-lg  font-bold">{title}</h3>
        <p className="mb-[1rem] text-base">{content}</p>
      </div>
      <div className="mt-[20px] w-full ">
        <Link href={buttonHref ?? ""} target={"_blank"}>
          <Button color="primary" variant="solid" className="h-7 rounded-xl px-5 py-1">
            {buttonTitle}{" "}
          </Button>
        </Link>
      </div>
    </article>
  );
};

export default CustomStaticInfoCard;
