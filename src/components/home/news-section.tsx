import { itemsNewsAndCalls } from "@/lib/items";
import React from "react";
import { MasterDictionaryType } from "@/context/main.context";
import CustomStaticInfoCard from "../common/ui/custom-static-info-card";

type Props = {
  dictionary: MasterDictionaryType["home"];
};
const NewsSection = ({ dictionary }: Props) => {
  return (
    <div className="mt-7 flex w-full flex-wrap justify-between">
      {itemsNewsAndCalls.map((item) => {
        return (
          <CustomStaticInfoCard
            key={item.titleKey}
            content={dictionary[item.contentKey as keyof typeof dictionary]}
            title={dictionary[item.titleKey as keyof typeof dictionary]}
            img={item.image}
            buttonHref="#"
            tag={item.tag}
            buttonTitle={dictionary.btn_more_information}
          />
        );
      })}
    </div>
  );
};

export default NewsSection;
