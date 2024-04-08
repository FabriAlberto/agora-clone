import React from "react";
import ButtonArrowAnimation from "../common/ui/button-arrow-animation";
import { itemsImpact } from "@/lib/items";
import CardCountAnimate from "../common/ui/card-count-animate";
import { MasterDictionaryType } from "@/context/main.context";
type Props = {
  dictionary: MasterDictionaryType["home"];
};
const ImpactSection = ({ dictionary }: Props) => {
  return (
    <section className="w-full bg-secondary px-[50px]  py-[70px] text-white ">
      <div className={`mx-auto flex max-w-[1140pxpx] flex-wrap justify-between`}>
        <div className="w-12/12 pb-[40px] pt-[50px] md:w-3/12">
          <p className="mb-4 text-3xl font-medium">{dictionary.title_impact}</p>
          <p>{dictionary.text_impact}</p>
        </div>

        <div className="w-12/12 md:w-7/12">
          <div className="flex w-full justify-end">
            <ButtonArrowAnimation
              title={dictionary.see_more}
              href={"#"}
              className="flex items-start text-white"
              textColor="text-white"
            />
          </div>

          <div className="mt-10 flex  w-full flex-wrap justify-between">
            {itemsImpact.map((item, index) => {
              return (
                <CardCountAnimate
                  key={item.count + index}
                  count={item.count}
                  description={dictionary[item.description_key]}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
