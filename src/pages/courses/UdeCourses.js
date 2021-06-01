import React, { useState } from "react";
import Filter from "./Filter";
import FilterCoursesList from "./FilterCoursesList";
import FilterSideBar from "./FilterSideBar";
import FilterSidebarMobile from "./FilterSidebarMobile";

function UdeCourses() {
	const [sidebar, setSidebar] = useState(false);
	const ShowSidebar = () => setSidebar(!sidebar);
	return (
		<div className='ude-courses'>
			<Filter ShowSidebar={ShowSidebar} />
			<div className={`ude-courses__list ${sidebar ? "isClose" : ""}`}>
				<div className='list-cuorses'>
					<FilterSideBar sidebar={sidebar}/>
					<FilterCoursesList/>
				</div>
			</div>
			<FilterSidebarMobile sidebar={sidebar} setSidebar={setSidebar}/>
			<div className={`filter-overlay ${sidebar ? "isOpen" : ""}`} onClick={() =>setSidebar(!sidebar)}></div>
		</div>
	);
}

export default UdeCourses;
