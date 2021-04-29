import React from "react";
import CourseItem from "src/components/courseItem/CourseItem";

function HeadLine() {
	return (
		<div className='headline container'>
			<div className='headline__content'>
				<div className='headline__main-text'>
					<h3>The widest choice of courses in the world</h3>
				</div>
				<div className='headline__sub-text'>
					<span>Choose from 130,000 online course videos. </span>
					<span>New courses are added every month</span>
				</div>
			</div>
		</div>
	);
}

export default HeadLine;
