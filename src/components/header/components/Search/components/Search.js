import React from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { useState } from "react";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handelSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };
  return (
    <div className="header--navbar__input">
      <form action={`/search/${searchTerm}`}>
        <button>
          <SearchOutlinedIcon className="searchIcon" />
        </button>
        <input
          className="input-search__filter"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handelSearch}
        />
        {/* <div className="search-courses">
                            <div className="search-courses__content">
                                <ul>
                                    {filterCourses.map((val, key) => {
                                        return (
                                            <li key={key}>
                                                <Link to={`course/${val.maKhoaHoc}`}>
                                                    <span>
                                                        <SearchOutlinedIcon />
                                                    </span>
                                                    <span>{val.tenKhoaHoc}</span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div> */}
      </form>
    </div>
  );
}

export default Search;
