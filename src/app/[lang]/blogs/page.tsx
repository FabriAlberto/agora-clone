import BlogSection from "@/components/blogs/blogs-section";
import BlogsSectionHeader from "@/components/blogs/blogs-section-header";
import { FilteredContextProvider } from "@/context/blogs/filtered.provider";
import { api } from "@/service/api.service";
import { Locale } from "@/types/common.type";
import { getDictionary } from "@/utils/dictionary";
import React from "react";

type Props = { params: { lang: Locale }; searchParams: { page: string } };
const classSectionContainer = `mx-auto max-w-[1140px]`;

const fetchNytArticles = async () => {
  const response = await api.getArticles();
  return response;
};
export default async function BlogsPage({
  params: { lang },
  searchParams: { page },
}: Readonly<Props>) {

  const articles = await fetchNytArticles();
  const dictionary = await getDictionary(lang);

  return (
    <div className="w-full pt-[40px]">
      <section className={`${classSectionContainer}`}>
        <BlogsSectionHeader />
      </section>
      <section className={`${classSectionContainer}`}>
        {articles.length > 0 ? (
          <FilteredContextProvider articles={articles}>
            <BlogSection dictionary={dictionary} />
          </FilteredContextProvider>
        ) : (
          <div className="w-full justify-center">
            <p className="text-2xl text-primary">{dictionary.blogs.error_not_found}</p>
          </div>
        )}
      </section>
    </div>
  );
}
