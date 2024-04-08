import { NavbarItemLink } from "@/types/common.type";

export const navbarItems: NavbarItemLink[] = [
  {
    key: "about_us",
    path: "#",
  },
  {
    key: "programs",
    path: "#",
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
    path: "#",
  },
  {
    key: "join_us",
    path: "#",
  },
  {
    key: "blog",
    path: "/blogs",
  },
  {
    key: "resources",
    path: "#",
  },
  {
    key: "offices",
    path: "#",
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
    classes: "text-sm font-semibold text-secondary  ",
  },
];
