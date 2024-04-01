import { MasterDictionaryType } from "@/context/main.context";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

type Props = {
  dictionary: MasterDictionaryType["layout"];
};
const ButtonDonate = ({ dictionary }: Props) => {
  return (
    <Button
      as={Link}
      href={"https://change-lab.co/"}
      className="flex h-[25px] items-center rounded-xl bg-primary  px-4 px-7 py-2 text-white"
    >
      <p className="text-sm">{dictionary.donate}</p>
    </Button>
  );
};

export default ButtonDonate;
