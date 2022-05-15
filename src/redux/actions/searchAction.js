export const setSearchField = (e) => (dispatch, getState) => {
  dispatch({
    type: "SET_SEARCH_FIELD",
    payload: e.target.value,
  });
};
