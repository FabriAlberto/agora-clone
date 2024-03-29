import { NavbarItem } from "@/types/common.type";

export const itemsNavbar: NavbarItem[] = [
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
  },
];
