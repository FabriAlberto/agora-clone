import React from "react";
import HeaderImage from "../../../public/juntascontamos.jpg";
import HeaderImageMobile from "../../../public/Banner-cel-1-jpg.webp";

import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="cursor-pointer">
      <Link href={"https://agora2030.org/programa-juntas-contamos/"} className="hidden md:block">
        <Image src={HeaderImage} alt="logo" className="h-auto w-full object-contain md:h-auto" />
      </Link>
      <Link href={"https://agora2030.org/programa-juntas-contamos/"} className="block md:hidden">
        <Image
          src={HeaderImageMobile}
          alt="logo agora agora2030"
          className=" h-[70vh] w-full object-cover md:h-auto"
        />
      </Link>
    </div>
  );
};

export default Banner;
