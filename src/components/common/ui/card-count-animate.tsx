"use client";
import React from "react";
import CountUpCustom from "./custom-count-up";
type Props = {
  count: number;
  description: string;
  className?: string;
};
const CardCountAnimate = ({ count, description, className = " md:w-4/12 w-full  " }: Props) => {
  return (
    <div className={`${className} px-2 py-2  text-secondary  duration-300 hover:scale-110  `}>
      <div
        className=" flex w-full flex-col  items-center justify-center rounded-xl bg-white
     py-10 "
      >
        <CountUpCustom start={0} end={count} duration={3} className={"text-3xl font-bold"} />
        <p className="text-sm font-medium">{description}</p>
      </div>
    </div>
  );
};

export default CardCountAnimate;
