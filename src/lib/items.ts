import ImageDedication from "../../public/Mujer-emprendedora.png";
import ImageDedication3 from "../../public/planeacion.png";
import ImageDedication2 from "../../public/empresario-levantando-la-mano-e1689204118270.png";
import ImageProgram from "../../public/Juntas-Contamos-portada-1-jpg.webp";
import ImageWoman from "../../public/Francis-Castillo-2048x1604.webp";
import ImagePeople from "../../public/Agora-Partnership-y-Change-Lab-jpg.webp";

import { customStyles } from "@/styles/common";

export const itemsCompanyDedication = [
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
export const itemsNewsAndCalls = [
  {
    titleKey: "title_card_program",
    contentKey: "content_card_program",
    buttonTitleKey: "more_information",
    image: ImageProgram,
    tag: "CONVOCATORIA ABIERTA",
  },
  {
    titleKey: "title_card_ceo",
    contentKey: "content_card_ceo",
    buttonTitleKey: "more_information",
    image: ImageWoman,
    tag: "BLOG",
  },
  {
    titleKey: "title_card_agora",
    contentKey: "content_card_agora",
    buttonTitleKey: "more_information",
    image: ImagePeople,
    tag: "SALA DE PRENSA",
  },
];
