import { MasterDictionaryType } from "@/context/main.context";
import ButtonArrowAnimation from "../common/ui/button-arrow-animation";

import CustomAnimationCard from "../common/ui/custom-animation-card";
import { itemsCompanyDedication } from "@/lib/items";
type Props = {
  dictionary: MasterDictionaryType["home"];
};

const CompanyDedication = ({ dictionary }: Props) => {
  return (
    <div className="mt-7 flex w-full flex-wrap justify-between">
      {itemsCompanyDedication.map((item) => {
        return (
          <CustomAnimationCard
            key={item.titleKey}
            title={dictionary[item.titleKey as keyof typeof dictionary]}
            content={dictionary[item.contentKey as keyof typeof dictionary]}
            src={item.image}
            href={item.href}
            backgroundColorContent={item.backgroundColorContent}
            className="w-full md:w-2/4 lg:w-4/12"
          />
        );
      })}
    </div>
  );
};

export default CompanyDedication;
