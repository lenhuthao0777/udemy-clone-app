import React from "react";
import FilterCoursesItem from "./FilterCoursesItem";

function FilterCoursesList({ sidebar, data }) {
    return (
        <div className={`filter-courses-list ${sidebar ? "full-width" : ""}`}>
            {data.map((item,index) => {
                return <FilterCoursesItem key={index} item={item}/>;
            })}
        </div>
    );
}

export default FilterCoursesList;
