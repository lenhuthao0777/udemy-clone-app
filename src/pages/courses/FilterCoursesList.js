import React from "react";
import FilterCoursesItem from "./FilterCoursesItem";

function FilterCoursesList({ sidebar, coursesByCate }) {
    return (
        <div className={`filter-courses-list ${sidebar ? "full-width" : ""}`}>
            {coursesByCate.map((item,index) => {
                return <FilterCoursesItem key={index} item={item}/>;
            })}
        </div>
    );
}

export default FilterCoursesList;
