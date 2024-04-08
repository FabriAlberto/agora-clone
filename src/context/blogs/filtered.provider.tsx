"use client";
import { NYTArticle } from "@/types/article";
import { FilteredContext } from "./filtered.context";
import { useEffect, useReducer } from "react";
import { FilteredReducer } from "./filtered.reduce";

export interface FilteredState {
  filteredArticles: NYTArticle[];
  sectionFilteredArticles: NYTArticle[];
  sections: string[];
  originalState: NYTArticle[];
  pages: number;
  maxPerPage: number;
  currentSection: string;
  currentPage: number;
}
type ContextProps = {
  children: React.JSX.Element;
  articles: NYTArticle[];
};
export const FilteredContextProvider = ({ children, articles }: ContextProps) => {
  const [state, dispatch] = useReducer(FilteredReducer, {
    filteredArticles: [],
    sectionFilteredArticles: articles,
    originalState: articles,
    sections: [],
    pages: 1,
    maxPerPage: 10,
    currentSection: "all",
    currentPage: 1,
  });

  useEffect(() => {
    dispatch({ type: "INITIAL_CONFIG", payload: { articles: articles } });
  }, []);
  const changePage = (newPage: number) => {
    dispatch({ type: "CHANGE_PAGE", payload: { newPage } });
  };
  const changeSection = (newSection: string) => {
    dispatch({ type: "SET_SECTION", payload: { newSection } });
  };
  
  return (
    <FilteredContext.Provider value={{ ...state, changeSection, changePage }}>
      {children}
    </FilteredContext.Provider>
  );
};
