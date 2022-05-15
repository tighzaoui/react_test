import { SearchContainer, SearchField } from "./searchBox.style.js";
import SearchIcon from "../icons/search";
import { useSelector, useDispatch } from "react-redux";
import searchSelector from "../../../redux/selectors/searchSelector";
import { setSearchField } from "../../../redux/actions/searchAction";

function SearchBox() {
  const { searchField } = useSelector(searchSelector);
  const dispatch = useDispatch();
  return (
    <SearchContainer>
      <SearchField
        type="search"
        placeholder="Search"
        value={searchField}
        onChange={(e) => dispatch(setSearchField)}
      />
      <SearchIcon width="19" height="18" color="black" />
    </SearchContainer>
  );
}
export default SearchBox;
