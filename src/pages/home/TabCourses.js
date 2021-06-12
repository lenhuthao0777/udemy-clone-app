import React, { useState } from "react";
import Slider from "react-slick";
import UdeAvatar from "src/components/avatar/index";
import { Button } from "src/components/button/Button";
import CourseItem from "src/components/courseItem/CourseItem";
function TabCourses({ courses }) {
	const [toggleState, setToggleState] = useState(1);
	const handelTabs = (state) => {
		setToggleState(state);
	};
	var settings = {
		dots: true,
		arrows: false,
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 3,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 668,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
					arrows: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
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
									AvatarSrc={"./img/avatar3.jpg"}
									size='AvatarLg'
								/>
							</div>
						</div>
						<div className='carousels'>
							<Slider {...settings}>
								{courses.map((item, index) => {
									return (
										<div key={index}>
											<CourseItem
												clsName={"course-item"}
												id={`item${index + 1}`}
												sale={`${
													(index + 1) % 2 === 0
														? "sale-active"
														: ""
												}`}
												image={item.hinhAnh}
												courseName={item.tenKhoaHoc}
												author={item.moTa}
												view={item.luotXem}
												price={"129.99"}
											/>
										</div>
									);
								})}
							</Slider>
						</div>
					</div>
					<div
						className={`content ${
							toggleState === 2 ? "active" : ""
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
									AvatarSrc={"./img/avatar1.jpg"}
									size='AvatarLg'
								/>
							</div>
						</div>
						<div className='carousels'>
							<Slider {...settings}>
								{courses.map((item, index) => {
									return (
										<CourseItem
											key={index}
											clsName={"course-item"}
											id={`item${index + 1}`}
											sale={`${
												(index + 1) % 2 === 0
													? "sale-active"
													: ""
											}`}
											image={item.hinhAnh}
											courseName={item.tenKhoaHoc}
											author={item.moTa}
											view={item.luotXem}
											price={"129.99"}
										/>
									);
								})}
							</Slider>
						</div>
					</div>
					<div
						className={`content ${
							toggleState === 3 ? "active" : ""
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
									AvatarSrc={"./img/avatar2.jpg"}
									size='AvatarLg'
								/>
							</div>
						</div>
						<div className='carousels'>
							<Slider {...settings}>
								{courses.map((item, index) => {
									return (
										<CourseItem
											key={index}
											clsName={"course-item"}
											id={`item${index + 1}`}
											sale={`${
												(index + 1) % 2 === 0
													? "sale-active"
													: ""
											}`}
											image={item.hinhAnh}
											courseName={item.tenKhoaHoc}
											author={item.moTa}
											view={item.luotXem}
											price={"129.99"}
										/>
									);
								})}
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TabCourses;
