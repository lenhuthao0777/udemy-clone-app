import React from "react";
import { Link } from "react-router-dom";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import FilterCoursesItem from "./FilterCoursesItem";

function FilterCoursesList({ sidebar }) {
    return (
        <div className={`filter-courses-list ${sidebar ? "full-width" : ""}`}>
            <FilterCoursesItem />
            <FilterCoursesItem />
            <FilterCoursesItem />
            <FilterCoursesItem />
            <FilterCoursesItem />
            <FilterCoursesItem />
            <FilterCoursesItem />
            <FilterCoursesItem />
            <FilterCoursesItem />
            <FilterCoursesItem />
        </div>
    );
}

export default FilterCoursesList;
