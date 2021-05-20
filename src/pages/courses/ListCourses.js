import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { FiCheck } from "react-icons/fi";
import FilterSideBar from "./FilterSideBar";
function ListCourses() {
	// const handelRadio = (state) => {
	// 	setRadio(state);
	// };
	return (
		<div className='list-cuorses'>
			<FilterSideBar />
			<div className='filter-courses-list'>
				<h1>courses list</h1>
			</div>
		</div>
	);
}

export default ListCourses;
