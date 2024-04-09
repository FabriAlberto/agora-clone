"use client";
import { NYTArticle } from "@/types/article";
import { FilteredContext } from "./filtered.context";
import { useEffect, useMemo, useReducer } from "react";
import { FilteredReducer } from "./filtered.reduce";

export interface FilteredState {
  filteredArticles: NYTArticle[];
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
    dispatch({ type: "CHANGE_SECTION", payload: { newSection } });
  };

  const contextValue = useMemo(
    () => ({
      ...state,
      changeSection,
      changePage,
    }),
    [state, changeSection, changePage]
  );
  return <FilteredContext.Provider value={contextValue}>{children}</FilteredContext.Provider>;
};
