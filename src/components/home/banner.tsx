import React from "react";
import HeaderImage from "../../../public/juntascontamos.jpg";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="cursor-pointer">
      <Link href={"https://agora2030.org/programa-juntas-contamos/"}>
        <Image
          src={HeaderImage}
          alt="logo"
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
      </Link>
    </div>
  );
};

export default Banner;
