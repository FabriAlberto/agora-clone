import { redirect } from "next/navigation";
import React from "react";

const NotFound = () => {
  redirect("/es");
  return <div className="flex h-full w-full items-center justify-center">Not Found This Page</div>;
};

export default NotFound;
