"use client";

import { useFilteredContext } from "@/context/blogs/filtered.context";
type Props = {
  sections: string[];
};
const MenuSectionsBlogs = ({ sections }: Props) => {
  const { changeSection, currentSection } = useFilteredContext();

  const handleChangeSection = (section: string) => {
    changeSection(section);
  };

  return (
    <div className="my-8 flex flex w-11/12 flex-wrap justify-center gap-3 rounded-xl bg-black px-8 py-4 md:w-8/12">
      {sections.map((section) => (
        <button
          key={section}
          className={`text-sm ${currentSection === section ? "font-bold text-primary" : "text-white"}`}
          onClick={() => handleChangeSection(section)}
        >
          {section.toLocaleUpperCase()}
        </button>
      ))}
      <button
        className={`text-sm ${currentSection === "all" ? "font-bold text-primary" : "text-white"}`}
        onClick={() => handleChangeSection("all")}
      >
        ALL
      </button>
    </div>
  );
};

export default MenuSectionsBlogs;
