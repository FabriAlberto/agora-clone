import ImageDedication from "../../public/Mujer-emprendedora.png";
import ImageDedication3 from "../../public/planeacion.png";
import ImageDedication2 from "../../public/empresario-levantando-la-mano-e1689204118270.png";
import ImageProgram from "../../public/Juntas-Contamos-portada-1-jpg.webp";
import ImageWoman from "../../public/Francis-Castillo-2048x1604.webp";
import ImagePeople from "../../public/Agora-Partnership-y-Change-Lab-jpg.webp";
import Meli from "../../public/meli.jpg";
import Kueski from "../../public/kUESKI.jpg";
import Lendera from "../../public/lendera.jpg";
import Cenprompye from "../../public/cenpromype.jpg";
import Center from "../../public/center.jpg";
import Yunus from "../../public/yunus.png";
import Palladium from "../../public/palladium.png";
import Citybanamex from "../../public/citibanamex.png";
import M from "../../public/m.png";
import Walmart from "../../public/walmart.jpg";
import PriceSmart from "../../public/pricesmart.jpg";
import Pretmex from "../../public/pretmex.jpg";
import Drip from "../../public/drip.jpg";
import Irex from "../../public/IREX.jpg";
import Embassy from "../../public/Embajada-EEUU-en-mexico.jpg";
import Tawingo from "../../public/Tawingo-fund.jpg";
import WorldEconomic from "../../public/World-Economic-Forum.jpg";
import Athena from "../../public/Athena-Fundation.jpg";
import Argidius from "../../public/Arguidius.jpg";
import Bidlab from "../../public/BID-Lab-Color_SPA.png";
import Foundation from "../../public/Target-Foundation.jpeg";
import NewVenture from "../../public/New-Venture-Fund.png";
import GraphicDesigner from "../../public/Disenador-freelance-1024x716.webp";
import DataEngineer from "../../public/Data-engineer-1024x684.webp";
import Manager from "../../public/Gerente-de-Alianzas-1024x684.webp";
import { customStyles } from "@/styles/common";
import { StaticImageData } from "next/image";
import { ItemCompanyDedication, ItemCount, ItemMenuCommon } from "@/types/common.type";

export const itemsCompanyDedication: ItemCompanyDedication[] = [
  {
    image: ImageDedication,
    titleKey: "title_card_entrepreneurs",
    contentKey: "content_card_entrepreneurs",
    backgroundColorContent: customStyles.gradient1,
    href: "https://agora2030.org/programas#emprender",
  },
  {
    image: ImageDedication2,
    titleKey: "title_card_ecosystem",
    contentKey: "content_card_ecosystem",
    backgroundColorContent: customStyles.gradient2,
    href: "https://agora2030.org/programas#ecosistema",
  },
  {
    image: ImageDedication3,
    titleKey: "title_card_inclusive_projects",
    contentKey: "content_card_inclusive_projects",
    backgroundColorContent: customStyles.gradient3,
    href: "hhttps://agora2030.org/programas#proyectos",
  },
];

export const itemsNewsAndCalls: ItemMenuCommon[] = [
  {
    titleKey: "title_card_program",
    contentKey: "content_card_program",
    buttonTitleKey: "btn_more_information",
    image: ImageProgram,
    tag: "CONVOCATORIA ABIERTA",
  },
  {
    titleKey: "title_card_ceo",
    contentKey: "content_card_ceo",
    buttonTitleKey: "btn_more_information",
    image: ImageWoman,
    tag: "BLOG",
  },
  {
    titleKey: "title_card_agora",
    contentKey: "content_card_agora",
    buttonTitleKey: "btn_more_information",
    image: ImagePeople,
    tag: "SALA DE PRENSA",
  },
];

export const itemsCarrouselPartners: StaticImageData[] = [
  Meli,
  Kueski,
  Lendera,
  Cenprompye,
  Center,
  Yunus,
  Palladium,
  Citybanamex,
  M,
  Walmart,
  PriceSmart,
  Pretmex,
  Drip,
];
export const itemsFinanciersCarousel: StaticImageData[] = [
  Palladium,
  Irex,
  Embassy,
  Tawingo,
  WorldEconomic,
  Cenprompye,
  Citybanamex,
  Yunus,
  Athena,
  Argidius,
  Bidlab,
  Foundation,
  NewVenture,
];

export const itemsImpact: ItemCount[] = [
  {
    count: 2300,
    description_key:"counter_card_entrepreneurs_assisted"
  },
  {
    count: 329,
    description_key: "counter_card_catalysts_trained",
  },
  {
    count: 23,
    description_key: "counter_card_countries",
  },
];
export const itemsJobOpportunities: ItemMenuCommon[] = [
  {
    titleKey: "title_graphic_designer",
    contentKey: "content_graphic_designer",
    buttonTitleKey: "btn_more_information",
    image: GraphicDesigner,
    tag: "OPORTUNIDAD LABORAL",
  },
  {
    titleKey: "title_data_engineer",
    contentKey: "content_data_engineer",
    buttonTitleKey: "btn_more_information",
    image: DataEngineer,
    tag: "OPORTUNIDAD LABORAL",
  },
  {
    titleKey: "title_manager",
    contentKey: "content_manager",
    buttonTitleKey: "btn_more_information",
    image: Manager,
    tag: "OPORTUNIDAD LABORAL",
  },
];
