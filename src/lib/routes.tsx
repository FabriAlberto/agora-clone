import { NavbarItemLink } from "@/types/common.type";

export const navbarItems: NavbarItemLink[] = [
  {
    key: "about_us",
    path: "/about-us",
  },
  {
    key: "programs",
    path: "/programs",
    children: [
      {
        key: "entrepreneurs",
        path: "/entrepreneurs",
      },
      {
        key: "ecosystem",
        path: "/ecosystem",
      },
      {
        key: "inclusive_projects",
        path: "/inclusive-projects",
      },
    ],
  },
  {
    key: "impact",
    path: "/impact",
  },
  {
    key: "join_us",
    path: "/join-us",
  },
  {
    key: "blog",
    path: "/blog",
  },
  {
    key: "resources",
    path: "/resources",
  },
  {
    key: "offices",
    path: "/offices",
    children: [
      {
        key: "mexico",
        path: "#",
      },
    ],
  },
  {
    key: "change_lab",
    path: "https://change-lab.co/",
    classes: "font-semibold text-secondary hover:text-primary ",
  },
];
