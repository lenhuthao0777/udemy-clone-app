import React from "react";
import Billboard from "./Billboard";
import HeadLine from "./HeadLine";
import OnBoarding from "./OnBoarding";
import TabCourses from "./TabCourses";

function Home() {
	return (
		<div className='home'>
			<Billboard />
			<HeadLine />
			<div className='tabs-course'>
				<TabCourses />
			</div>
			<OnBoarding />
		</div>
	);
}

export default Home;
