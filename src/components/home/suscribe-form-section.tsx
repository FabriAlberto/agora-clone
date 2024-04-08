import { MasterDictionaryType } from "@/context/main.context";
import React from "react";
import SuscribeForm from "./suscribe-form";
type Props = {
  dictionary: MasterDictionaryType;
};
const SuscribeFormSection = ({ dictionary }: Props) => {
  return (
    <section className="mx-auto my-[100px] bg-black px-[50px] py-[70px]">
      <div className={` mx-auto max-w-[1140px] text-white`}>
        <div className="w-full md:w-4/12">
          <p className="text-3xl font-semibold">{dictionary.home.title_suscribe_form}</p>
        </div>
        <div className="mt-6 w-full">
          <SuscribeForm dictionary={dictionary} />
        </div>
      </div>
    </section>
  );
};

export default SuscribeFormSection;
