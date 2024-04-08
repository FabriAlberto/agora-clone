"use client";
import React from "react";
import CustomStaticInfoCard from "../common/ui/custom-static-info-card";
import { MasterDictionaryType } from "@/context/main.context";
import MenuSectionsBlogs from "./menu-sections-blogs";
import { useFilteredContext } from "@/context/blogs/filtered.context";
import { Pagination } from "@nextui-org/react";

type Props = {
  dictionary: MasterDictionaryType;
};
const BlogSection = ({ dictionary }: Props) => {
  const { sections, filteredArticles, currentPage, pages, changePage } = useFilteredContext();

  return (
    <section className="mb-10 flex w-full flex-wrap justify-center">
      <MenuSectionsBlogs sections={sections} />
      <div className="flex flex-wrap">
        {filteredArticles.map((art) => {
          return (
            <CustomStaticInfoCard
              key={art.title}
              content={art.abstract}
              img={art.multimedia[0].url}
              title={art.title}
              buttonHref={art.url}
              tag={art.section}
              buttonTitle={dictionary.home.btn_more_information}
            />
          );
        })}
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Pagination
          initialPage={1}
          showControls
          page={currentPage}
          total={pages}
          onChange={(page) => {
            changePage(page);
          }}
        />
      </div>
    </section>
  );
};

export default BlogSection;
