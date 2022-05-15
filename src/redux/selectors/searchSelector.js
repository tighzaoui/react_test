import { createSelector } from "reselect";

export default createSelector(
  (state) => state.search,
  (searchState) => {
    const result = {
      searchField: searchState.searchField,
    };
    return result;
  }
);
