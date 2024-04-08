import { NYTArticle } from "@/types/article";
import { FilteredState } from "./filtered.provider";

type FilteredActionType =
  | {
      type: "INITIAL_CONFIG";
      payload: {
        articles: NYTArticle[];
      };
    }
  | {
      type: "SET_SECTION";
      payload: { newSection: string };
    }
  | {
      type: "CHANGE_PAGE";
      payload: { newPage: number };
    };

const onCeil = (num: number) => Math.ceil(num);
export const FilteredReducer = (
  state: FilteredState,
  action: FilteredActionType
): FilteredState => {
  switch (action.type) {
    case "INITIAL_CONFIG": {
      const articlesFiltered = [...action.payload.articles].slice(0, state.maxPerPage);

      const newState = {
        ...state,
        sections: Array.from(new Set(action.payload.articles.map((art) => art.section))),
        pages: onCeil(action.payload.articles.length / state.maxPerPage),
        filteredArticles: articlesFiltered,
        currentPage:1,
      };
      return newState;
    }

    case "SET_SECTION": {
      const { newSection } = action.payload;
      if (newSection === "all") {
        const articlesFiltered = [...state.originalState].slice(0, state.maxPerPage);
        return {
          ...state,
          currentSection: newSection,
          pages: onCeil(state.originalState.length / state.maxPerPage),
          filteredArticles: articlesFiltered,
          currentPage: 1,
        };
      }
      const articlesFilter = [...state.originalState].filter((art) => art.section === newSection);
      return {
        ...state,
        currentSection: newSection,
        filteredArticles: articlesFilter,
        pages: onCeil(articlesFilter.length / state.maxPerPage),
        currentPage: 1,
      };
    }

    case "CHANGE_PAGE": {
      const { newPage } = action.payload;
      const start = (newPage - 1) * state.maxPerPage;
      const end = start + state.maxPerPage;
      const filterByPage = state.originalState
        .filter((art) => {
          return state.currentSection === "all" ? true : art.section === state.currentSection;
        })
        .slice(start, end);

      return {
        ...state,
        currentPage: newPage,
        filteredArticles: filterByPage,
      };
    }
    default:
      return { ...state };
  }
};
