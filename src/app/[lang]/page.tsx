import CompanyDedication from "@/components/home/company-dedication";
import { Locale } from "@/types/common.type";
import { getDictionary } from "@/utils/dictionary";
import Banner from "@/components/home/banner";
import ContainerItemHome from "@/components/home/container-items-home";
import NewsSection from "@/components/home/news-sections";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  const dictionaryHome = dictionary.home;

  return (
    <div>
      <Banner />
      <ContainerItemHome
        title={dictionaryHome.title_company_dedication}
        textContent={dictionaryHome.text_company_dedication}
        hrefButton="https://agora2030.org/programas"
        titleButton={dictionaryHome.btn_programs}
      >
        <CompanyDedication dictionary={dictionary.home} />
      </ContainerItemHome>

      <ContainerItemHome title={dictionaryHome.title_news}>
       <NewsSection dictionary={dictionaryHome} />
      </ContainerItemHome>
    </div>
  );
}
