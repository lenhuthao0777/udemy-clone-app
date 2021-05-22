import React, { useState } from "react";
import Filter from "./Filter";
import FilterSideBar from "./FilterSideBar";

function UdeCourses() {
	const [sidebar, setSidebar] = useState(false);
	const ShowSidebar = () => setSidebar(!sidebar);
	return (
		<div className='ude-courses'>
			<Filter ShowSidebar={ShowSidebar} />
			<div className='list-cuorses'>
				<FilterSideBar sidebar={sidebar} />
				<div className='filter-courses-list'>
					<h1>courses list</h1>
				</div>
			</div>
		</div>
	);
}

export default UdeCourses;
