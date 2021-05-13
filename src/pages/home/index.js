import React, { useEffect, useState } from "react";
import Billboard from "./Billboard";
import HeadLine from "./HeadLine";
import OnBoarding from "./OnBoarding";
import TabCourses from "./TabCourses";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../actions/courses";
import Carousel from "src/components/carousel";
import Unit from "./Unit";
import TabCourseMobile from "./TabCourseMobile";
import BestCate from "./BestCate";
import TopicCate from "./TopicCate";
function Home() {
	const dispatch = useDispatch();
	const { courses, isLoading, error } = useSelector(
		(state) => state.coursesReducer
	);

	useEffect(() => {
		dispatch(getCourses());
	}, []);
	return (
		<div className='home'>
			<Billboard />
			<HeadLine />
			<div className='tabs-pc'>
				<TabCourses courses={courses} />
			</div>
			<div className='tabs-mobile'>
				<TabCourseMobile courses={courses} />
			</div>
			<Unit courses={courses} />
			<OnBoarding />
			<BestCate />
			<TopicCate />
		</div>
	);
}

export default Home;
