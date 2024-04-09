"use client";

import { NYTArticle } from "@/types/article";
import { createContext, useContext } from "react";

export type FilteredDataType = {
  filteredArticles: NYTArticle[];
  originalState: NYTArticle[];
  sections: string[];
  currentSection: string;
  currentPage: number;
  changeSection: (newSection: string) => void;
  pages: number;
  maxPerPage: number;
  changePage: (newPage: number) => void;
};

export const FilteredContext = createContext<FilteredDataType>({} as FilteredDataType);
export const useFilteredContext = () => {
  return useContext(FilteredContext)!;
};
