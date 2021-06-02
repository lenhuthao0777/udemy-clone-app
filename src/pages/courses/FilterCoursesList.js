import React from "react";
import { Link } from "react-router-dom";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import FilterCoursesItem from "./FilterCoursesItem";

function FilterCoursesList() {
    return (
        <div className="filter-courses-list">
            <FilterCoursesItem />
        </div>
    );
}

export default FilterCoursesList;
