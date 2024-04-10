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
    <div className={`${className} mt-5 px-3 py-2 text-secondary md:mt-0`}>
      <div
        className=" card-count-animate flex w-full  flex-col items-center justify-center rounded-xl
     bg-white  py-10"
      >
        <CountUpCustom start={0} end={count} duration={3} className={"text-3xl font-bold"} />
        <p className="text-sm font-medium">{description}</p>
      </div>
    </div>
  );
};

export default CardCountAnimate;
