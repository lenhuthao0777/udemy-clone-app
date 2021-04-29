import React from "react";
import { useState } from "react";
import CourseItem from "src/components/courseItem/CourseItem";
import UdeAvatar from "src/components/avatar/index";
import { Button } from "src/components/button/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function TabCourses() {
	const [toggleState, setToggleState] = useState(1);
	const handelTabs = (state) => {
		setToggleState(state);
	};
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToScroll: 1,
					slidesToShow: 3,
					infinite: true,
					dots: false,
				},
			},
		],
	};
	return (
		<div className='container'>
			<div className='tabs-courses'>
				<header className='tabs-courses__list'>
					<div
						className={`tab ${toggleState === 1 ? "active" : ""}`}
						onClick={() => handelTabs(1)}>
						<span>FrontEnd</span>
					</div>
					<div
						className={`tab ${toggleState === 2 ? "active" : ""}`}
						onClick={() => handelTabs(2)}>
						<span>BackEnd</span>
					</div>
					<div
						className={`tab ${toggleState === 3 ? "active" : ""}`}
						onClick={() => handelTabs(3)}>
						<span>Mobile Developer</span>
					</div>
					{/* <div
						className={`tab ${toggleState === 4 ? "active" : ""}`}
						onClick={() => handelTabs(4)}>
						<span>Tab 4</span>
					</div> */}
				</header>
				<div className='tabs-courses__content'>
					<div
						className={`content ${
							toggleState === 1 ? "active" : ""
						}`}>
						<div className='headshot-banner'>
							<div className='headshot-banner__content'>
								<h1>
									Develop your career opportunities with
									Python
								</h1>
								<p>
									Whether you work in machine learning or
									finance, web development or data science,
									the Python language is one of the most
									important skills to learn. Python's simple
									syntax is particularly suitable for office,
									web, and commercial applications.
								</p>
								<Button size='md' color='btn--btn-outline'>
									Discover Python
								</Button>
							</div>
							<div className='headshot-banner__avatar'>
								<UdeAvatar
									AvatarSrc={
										"https://i1.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?fit=1920%2C1920&ssl=1"
									}
									size='AvatarLg'
								/>
							</div>
						</div>
						<div className='carousel'>
							<Slider {...settings}>
								<CourseItem
									clsName={"course-item"}
									sale={"sale-active"}
									image={
										"https://img-a.udemycdn.com/course/240x135/2281794_46a6_15.jpg?LgIBm_HWbkXMpRN-LxErTODlCFHjLdw7Jc2_er00VzAKN1kf5HCvVjfANEoiLupxCPCVp9WetaPcFFQuewuuGULDchP5rHS_Jr0Q5522gFGVjCyNj3jvEXDcrTfPbhLB-A"
									}
									courseName={
										"Python Developer - Complete Training 2021 "
									}
									author={
										"Thibault Houdon | Python trainer and developer, Docstring | Online Python training"
									}
									price={"129.99"}
								/>
								<CourseItem
									clsName={"course-item"}
									sale={"sale-active"}
									image={
										"https://img-a.udemycdn.com/course/240x135/2281794_46a6_15.jpg?LgIBm_HWbkXMpRN-LxErTODlCFHjLdw7Jc2_er00VzAKN1kf5HCvVjfANEoiLupxCPCVp9WetaPcFFQuewuuGULDchP5rHS_Jr0Q5522gFGVjCyNj3jvEXDcrTfPbhLB-A"
									}
									courseName={
										"Python Developer - Complete Training 2021 "
									}
									author={
										"Thibault Houdon | Python trainer and developer, Docstring | Online Python training"
									}
									price={"129.99"}
								/>
								<CourseItem
									clsName={"course-item"}
									sale={"sale-active"}
									image={
										"https://img-a.udemycdn.com/course/240x135/2281794_46a6_15.jpg?LgIBm_HWbkXMpRN-LxErTODlCFHjLdw7Jc2_er00VzAKN1kf5HCvVjfANEoiLupxCPCVp9WetaPcFFQuewuuGULDchP5rHS_Jr0Q5522gFGVjCyNj3jvEXDcrTfPbhLB-A"
									}
									courseName={
										"Python Developer - Complete Training 2021 "
									}
									author={
										"Thibault Houdon | Python trainer and developer, Docstring | Online Python training"
									}
									price={"129.99"}
								/>
								<CourseItem
									clsName={"course-item"}
									sale={"sale-active"}
									image={
										"https://img-a.udemycdn.com/course/240x135/2281794_46a6_15.jpg?LgIBm_HWbkXMpRN-LxErTODlCFHjLdw7Jc2_er00VzAKN1kf5HCvVjfANEoiLupxCPCVp9WetaPcFFQuewuuGULDchP5rHS_Jr0Q5522gFGVjCyNj3jvEXDcrTfPbhLB-A"
									}
									courseName={
										"Python Developer - Complete Training 2021 "
									}
									author={
										"Thibault Houdon | Python trainer and developer, Docstring | Online Python training"
									}
									price={"129.99"}
								/>
								<CourseItem
									clsName={"course-item"}
									sale={"sale-active"}
									image={
										"https://img-a.udemycdn.com/course/240x135/2281794_46a6_15.jpg?LgIBm_HWbkXMpRN-LxErTODlCFHjLdw7Jc2_er00VzAKN1kf5HCvVjfANEoiLupxCPCVp9WetaPcFFQuewuuGULDchP5rHS_Jr0Q5522gFGVjCyNj3jvEXDcrTfPbhLB-A"
									}
									courseName={
										"Python Developer - Complete Training 2021 "
									}
									author={
										"Thibault Houdon | Python trainer and developer, Docstring | Online Python training"
									}
									price={"129.99"}
								/>
								<CourseItem
									clsName={"course-item"}
									sale={"sale-active"}
									image={
										"https://img-a.udemycdn.com/course/240x135/2281794_46a6_15.jpg?LgIBm_HWbkXMpRN-LxErTODlCFHjLdw7Jc2_er00VzAKN1kf5HCvVjfANEoiLupxCPCVp9WetaPcFFQuewuuGULDchP5rHS_Jr0Q5522gFGVjCyNj3jvEXDcrTfPbhLB-A"
									}
									courseName={
										"Python Developer - Complete Training 2021 "
									}
									author={
										"Thibault Houdon | Python trainer and developer, Docstring | Online Python training"
									}
									price={"129.99"}
								/>
							</Slider>
						</div>
					</div>
					<div
						className={`content ${
							toggleState === 2 ? "active" : ""
						}`}>
						<h1>content 2</h1>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Expedita nulla tenetur perferendis nesciunt
							accusamus possimus. Omnis enim vel amet cupiditate
							id, optio veniam inventore iste blanditiis tempora
							sapiente iusto ut non dolore ex. Quam, perferendis a
							earum minima repellat enim eum aspernatur molestias
							iste, accusantium nulla quis? Officia,
							exercitationem quos.
						</p>
					</div>
					<div
						className={`content ${
							toggleState === 3 ? "active" : ""
						}`}>
						<h1>content 3</h1>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Expedita nulla tenetur perferendis nesciunt
							accusamus possimus. Omnis enim vel amet cupiditate
							id, optio veniam inventore iste blanditiis tempora
							sapiente iusto ut non dolore ex. Quam, perferendis a
							earum minima repellat enim eum aspernatur molestias
							iste, accusantium nulla quis? Officia,
							exercitationem quos.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TabCourses;
