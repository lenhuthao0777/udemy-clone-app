import React from "react";
import Filter from "./Filter";
import ListCourses from "./ListCourses";

function UdeCourses() {
	return (
		<div className='ude-courses'>
			<Filter />
			<ListCourses />
		</div>
	);
}

export default UdeCourses;
