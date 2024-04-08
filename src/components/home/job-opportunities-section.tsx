import React from "react";
import CustomStaticInfoCard from "../common/ui/custom-static-info-card";
import { itemsJobOpportunities } from "@/lib/items";
import { MasterDictionaryType } from "@/context/main.context";
type Props = {
  dictionary: MasterDictionaryType["home"];
};
const JobOpportunitiesSection = ({ dictionary }: Props) => {
  return (
    <section className="mt-7 flex w-full flex-wrap justify-between">
      {itemsJobOpportunities.map((item) => {
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
    </section>
  );
};

export default JobOpportunitiesSection;
