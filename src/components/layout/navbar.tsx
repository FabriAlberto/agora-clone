import Image from "next/image";
import React from "react";
import Icon from "../../../public/logo-14.png";
import { itemsNavbar } from "@/lib/routes";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="bg-withe flex h-[75px] w-full justify-center shadow-md">
      <div className="w-12/12 mx-auto flex items-center justify-between md:w-10/12 lg:w-9/12">
        <Image alt="logo agora" src={Icon} width={110} height={110} />

        {itemsNavbar.map((item) => {
          return (
            <a key={item.key} href={item.path} className="text-sm text-black hover:text-black">
              {item.key}
            </a>
          );
        })}

        <Link href={"https://change-lab.co/"}>
          <p className=" text-sm font-semibold text-secondary hover:text-primary ">Change Lab</p>
        </Link>

        <button></button>
      </div>
    </div>
  );
};

export default Navbar;
