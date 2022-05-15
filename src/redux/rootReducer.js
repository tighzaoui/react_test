import { combineReducers } from "redux";
import appReducer from "./reducers/appReducer";
import searchReducer from "./reducers/searchReducer";

export default combineReducers({
  app: appReducer,
  search: searchReducer,
});
