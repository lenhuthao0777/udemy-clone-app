import React from "react";
import { Link } from "react-router-dom";

function CoursesEmpty({ courseName }) {
  return (
    <div className="container">
      <div className="search-courses">
        <div className="search-courses__heading">
          <h1>
            SEARCH -<span className="tag">{`#${courseName}`}</span>
          </h1>
        </div>
        <div className="search-courses__content">
          <div className="no-courses">
            <h1>
              There is no course you were looking for :((
              <Link to="/" style={{ color: "red" }}>
                - Back to home
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesEmpty;
