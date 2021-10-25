import React from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Close } from "@material-ui/icons";
import { useState } from "react";

function SearchMobile({ searchBar, setSearchBar }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handelSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };
  return (
    <div>
      <div className={`mobile-input__search ${searchBar ? "active" : ""}`}>
        <div className="mobile-search-icon">
          <SearchOutlinedIcon className="search-icon" />
        </div>
        <form action={`/search/${searchTerm}`}>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handelSearch}
          />
        </form>
        <div className="mobile-close-icon" onClick={() => setSearchBar(false)}>
          <Close className="close-icon" />
        </div>
      </div>
      <div
        className={`mobile-input__search-overlay ${searchBar ? "active" : ""}`}
        onClick={() => setSearchBar(false)}
      ></div>
    </div>
  );
}

export default SearchMobile;
