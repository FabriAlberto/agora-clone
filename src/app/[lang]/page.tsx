import CompanyDedication from "@/components/home/company-dedication-section";
import { Locale } from "@/types/common.type";
import { getDictionary } from "@/utils/dictionary";
import Banner from "@/components/home/banner";
import ContainerItemHome from "@/components/home/container-items-home";
import NewsSection from "@/components/home/news-section";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCustom from "@/components/common/ui/custom-carousel";
import { itemsCarrouselPartners, itemsFinanciersCarousel } from "@/lib/items";
import ImpactSection from "@/components/home/impact-section";
import JobOpportunitiesSection from "@/components/home/job-opportunities-section";
import SuscribeFormSection from "@/components/home/suscribe-form-section";

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

      <ContainerItemHome
        title={dictionaryHome.title_partners}
        textContent={dictionaryHome.text_partners}
        hrefButton="https://agora2030.org/sumate"
        titleButton={dictionaryHome.btn_partners_redirect}
      >
        <CarouselCustom items={itemsCarrouselPartners} />
      </ContainerItemHome>

      <ContainerItemHome title={dictionaryHome.title_financiers}>
        <CarouselCustom items={itemsFinanciersCarousel} />
      </ContainerItemHome>
      <div className="w-full">
        <ImpactSection dictionary={dictionary.home} />
      </div>
      <ContainerItemHome
        title={dictionary.home.title_job_opportunities}
        titleButton={dictionary.home.btn_more_jobs}
        hrefButton="https://agora2030.org/category/oportunidad-laboral/"
      >
        <JobOpportunitiesSection dictionary={dictionaryHome} />
      </ContainerItemHome>
      <div className="w-full">
        <SuscribeFormSection dictionary={dictionary} />
      </div>
    </div>
  );
}
