import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCoursesByCategory } from "../../actions/courses";
function Courses() {
	const dispatch = useDispatch();
	const { category } = useParams();
	const { courses, isLoading, error } = useSelector(
		(state) => state.coursesReducer
	);
	console.log(courses);
	console.log(isLoading);
	console.log(error);
	useEffect(() => {
		dispatch(getCoursesByCategory(category));
	}, [category]);
	return (
		<div>
			<h1>Courses List</h1>
		</div>
	);
}

export default Courses;
