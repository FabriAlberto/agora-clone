import { itemsNewsAndCalls } from "@/lib/items";
import React from "react";
import NewsSectionItem from "./news-sections-item";
import { MasterDictionaryType } from "@/context/main.context";

type Props = {
  dictionary: MasterDictionaryType["home"];
};
const NewsSection = ({ dictionary }: Props) => {
  return (
    <div className="mt-7 flex w-full flex-wrap justify-between">
      {itemsNewsAndCalls.map((item) => {
        return (
          <NewsSectionItem
            key={item.titleKey}
            content={dictionary[item.contentKey as keyof typeof dictionary]}
            title={dictionary[item.titleKey as keyof typeof dictionary]}
            image={item.image}
            href="#"
            tag={item.tag}
            buttonTitle="CONOCER MÁS  "
          />
        );
      })}
    </div>
  );
};

export default NewsSection;
