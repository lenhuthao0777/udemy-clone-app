import React, { useState } from "react";
import Filter from "./Filter";
import FilterCoursesList from "./FilterCoursesList";
import FilterSideBar from "./FilterSideBar";
import FilterSidebarMobile from "./FilterSidebarMobile";

function UdeCourses({data}) {
    const [sidebar, setSidebar] = useState(false);
    const ShowSidebar = () => setSidebar(!sidebar);
    return (
        <div className="ude-courses">
            <Filter ShowSidebar={ShowSidebar} data={data} />
            <div className={`ude-courses__list ${sidebar ? "isClose" : ""}`}>
                <div className="list-cuorses">
                    <FilterSideBar />
                    <FilterCoursesList sidebar={sidebar} data={data} />
                </div>
            </div>
            <FilterSidebarMobile sidebar={sidebar} setSidebar={setSidebar} />
            <div className={`filter-overlay ${sidebar ? "isOpen" : ""}`} onClick={() => setSidebar(!sidebar)}></div>
        </div>
    );
}

export default UdeCourses;
