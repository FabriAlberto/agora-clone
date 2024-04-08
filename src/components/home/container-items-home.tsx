import React from "react";
import ButtonArrowAnimation from "../common/ui/button-arrow-animation";
type Props = {
  children: React.ReactNode;
  title: string;
  textContent?: string;
  hrefButton?: string;
  titleButton?: string;
};
const ContainerItemHome = ({ children, title, textContent, hrefButton, titleButton }: Props) => {
  return (
    <section className=" mx-auto px-[10px] md:px-[50px] pt-[70px]">
      <div className={`mx-auto max-w-[1140px]`}>
        <div className="w-full">
          <div className="flex w-full flex-wrap justify-between">
            <div className={` w-12/12 p-[10px]  ${!titleButton ? "md:w-8/12" : "md:w-6/12"}`}>
              <p className="text-3xl font-semibold text-secondary">{title}</p>
              <p className="mt-5">{textContent}</p>
            </div>

            {titleButton && hrefButton && (
              <div className="w-12/12 flex justify-end p-[10px]  md:w-4/12 ">
                <ButtonArrowAnimation
                  title={titleButton}
                  href={hrefButton}
                  className="flex items-start"
                />
              </div>
            )}
          </div>
        </div>

        {children}
      </div>
    </section>
  );
};

export default ContainerItemHome;
