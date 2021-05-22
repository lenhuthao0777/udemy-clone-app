import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCoursesByCategory } from "../../actions/courses";
import SubCategory from "./SubCategory";
import UdeCourses from "./UdeCourses";
function Courses() {
	// const dispatch = useDispatch();
	// const { category } = useParams();
	// const { courses, isLoading, error } = useSelector(
	// 	(state) => state.coursesReducer
	// );
	// console.log(courses);
	// console.log(isLoading);
	// console.log(error);
	// useEffect(() => {
	// 	dispatch(getCoursesByCategory(category));
	// }, [category]);
	return (
		<div>
			<SubCategory />
			<div className='container'>
				<h1 className='courses-heading'>Web development courses</h1>
			</div>
			<div className='container'>
				<div className='ude-courses__heading'>All courses in the category Web Development</div>
				<UdeCourses />
			</div>
		</div>
	);
}

export default Courses;
