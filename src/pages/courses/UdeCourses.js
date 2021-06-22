import React, { useEffect, useState } from "react";
import CoursesPaginations from "./CoursesPaginations";
import Filter from "./Filter";
import FilterCoursesList from "./FilterCoursesList";
import FilterSideBar from "./FilterSideBar";
import FilterSidebarMobile from "./FilterSidebarMobile";

function UdeCourses({coursesByCate}) {
    const [sidebar, setSidebar] = useState(false);
    const ShowSidebar = () => setSidebar(!sidebar);
    return (
        <div className="ude-courses">
            <Filter ShowSidebar={ShowSidebar} coursesByCate={coursesByCate} />
            <div className={`ude-courses__list ${sidebar ? "isClose" : ""}`}>
                <div className="list-cuorses">
                    <FilterSideBar />
                    <FilterCoursesList sidebar={sidebar} coursesByCate={coursesByCate} />
                </div>
            </div>
            <FilterSidebarMobile sidebar={sidebar} setSidebar={setSidebar} />
            <div className={`filter-overlay ${sidebar ? "isOpen" : ""}`} onClick={() => setSidebar(!sidebar)}></div>
            <CoursesPaginations />
        </div>
    );
}

export default UdeCourses;
