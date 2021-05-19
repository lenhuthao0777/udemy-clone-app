import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { FiCheck } from "react-icons/fi";
function ListCourses() {
	const [menu1, setMenu1] = useState(1);
	const [menu2, setMenu2] = useState(2);
	const [menu3, setMenu3] = useState(3);
	const [menu4, setMenu4] = useState(4);
	const [menu5, setMenu5] = useState(5);
	const [menu6, setMenu6] = useState(6);
	const [menu7, setMenu7] = useState(7);
	const [menu8, setMenu8] = useState(8);
	const theme = [
		{
			id: 1,
			name: "Javascript",
			count: 596,
		},
		{
			id: 2,
			name: "Web development",
			count: 564,
		},
		{
			id: 3,
			name: "PHP language",
			count: 473,
		},
		{
			id: 4,
			name: "WordPress",
			count: 470,
		},
		{
			id: 5,
			name: "React",
			count: 372,
		},
		{
			id: 6,
			name: "CSS",
			count: 315,
		},
		{
			id: 7,
			name: "HTML language",
			count: 281,
		},
		{
			id: 8,
			name: "Angular application framework",
			count: 241,
		},
		{
			id: 9,
			name: "Laravel",
			count: 236,
		},
		{
			id: 10,
			name: "NodeJs",
			count: 226,
		},
		{
			id: 11,
			name: "Bootstrap",
			count: 201,
		},
		{
			id: 12,
			name: "Django",
			count: 177,
		},
		{
			id: 13,
			name: "VueJs application framework",
			count: 145,
		},
		{
			id: 14,
			name: "Front-end web development",
			count: 140,
		},
		{
			id: 15,
			name: "Javascript",
			count: 596,
		},
		{
			id: 1,
			name: "Javascript",
			count: 596,
		},
		{
			id: 1,
			name: "Javascript",
			count: 596,
		},
	];
	const [radio, setRadio] = useState(1);
	// const handelRadio = (state) => {
	// 	setRadio(state);
	// };
	return (
		<div className='list-cuorses'>
			<div className='filter-sidebar'>
				<ul className='filter-sidebar__list'>
					<li className='filter-sidebar__list-item'>
						<div className='filter-sidebar__list-item-heading'>
							<span>Notes</span>
							<FaAngleDown className='filter-angle-icon active' />
						</div>
						<ul className='filter-sidebar__list-dropdown active'>
							<li
								className='filter-sidebar__list-dropdown-item'
								id='menu1'
								onClick={() => setRadio(1)}>
								<div className='filter-rated'>
									<label
										className={`radio ${
											radio === 1 ? "active" : ""
										}`}>
										<input type='radio' />
										<span></span>
									</label>
									<IoMdStar className='filter-star-icon-bold' />
									<IoMdStar className='filter-star-icon-bold' />
									<IoMdStar className='filter-star-icon-bold' />
									<IoMdStar className='filter-star-icon-bold' />
									<IoMdStarHalf className='filter-star-icon-half' />
									<span className='filter-label'>
										From 4.5
									</span>
									<span className='filter-count'>(137)</span>
								</div>
							</li>
							<li
								className='filter-sidebar__list-dropdown-item'
								id='menu1'
								onClick={() => setRadio(2)}>
								<div className='filter-rated'>
									<label
										className={`radio ${
											radio === 2 ? "active" : ""
										}`}>
										<input type='radio' />
										<span></span>
									</label>
									<IoMdStar className='filter-star-icon-bold' />
									<IoMdStar className='filter-star-icon-bold' />
									<IoMdStar className='filter-star-icon-bold' />
									<IoMdStar className='filter-star-icon-bold' />
									<IoMdStarOutline className='filter-star-icon-ountline' />
									<span className='filter-label'>From 4</span>
									<span className='filter-count'>(1000)</span>
								</div>
							</li>
							<li
								className='filter-sidebar__list-dropdown-item'
								id='menu1'
								onClick={() => setRadio(3)}>
								<div className='filter-rated'>
									<label
										className={`radio ${
											radio === 3 ? "active" : ""
										}`}>
										<input type='radio' />
										<span></span>
									</label>
									<IoMdStar className='filter-star-icon-bold' />
									<IoMdStar className='filter-star-icon-bold' />
									<IoMdStar className='filter-star-icon-bold' />
									<IoMdStarHalf className='filter-star-icon-half' />
									<IoMdStarOutline className='filter-star-icon-ountline' />
									<span className='filter-label'>
										From 3.5
									</span>
									<span className='filter-count'>(90)</span>
								</div>
							</li>
							<li
								className='filter-sidebar__list-dropdown-item'
								id='menu1'
								onClick={() => setRadio(4)}>
								<div className='filter-rated'>
									<label
										className={`radio ${
											radio === 4 ? "active" : ""
										}`}>
										<input type='radio' />
										<span></span>
									</label>
									<IoMdStar className='filter-star-icon-bold' />
									<IoMdStar className='filter-star-icon-bold' />
									<IoMdStar className='filter-star-icon-bold' />
									<IoMdStarOutline className='filter-star-icon-ountline' />
									<IoMdStarOutline className='filter-star-icon-ountline' />
									<span className='filter-label'>From 3</span>
									<span className='filter-count'>(30)</span>
								</div>
							</li>
						</ul>
					</li>
					<li className='filter-sidebar__list-item'>
						<div className='filter-sidebar__list-item-heading'>
							<span>Video duration</span>
							<FaAngleDown className='filter-angle-icon active' />
						</div>
						<ul className='filter-sidebar__list-dropdown active'>
							<li className='filter-sidebar__list-dropdown-item'>
								<div className='filter-choose'>
									<label className='radio'>
										<input type='radio' />
										<span className='radio-btn'></span>
										<FiCheck className='filter-check-icon' />
									</label>
									<span className='filter-label'>
										0-3 hours
									</span>
									<span className='filter-count'>(571)</span>
								</div>
							</li>
							<li className='filter-sidebar__list-dropdown-item'>
								<div className='filter-choose'>
									<label className='radio'>
										<input type='radio' />
										<span className='radio-btn'></span>
										<FiCheck className='filter-check-icon' />
									</label>
									<span className='filter-label'>
										3-6 hours
									</span>
									<span className='filter-count'>(571)</span>
								</div>
							</li>
							<li className='filter-sidebar__list-dropdown-item'>
								<div className='filter-choose'>
									<label className='radio'>
										<input type='radio' />
										<span className='radio-btn'></span>
										<FiCheck className='filter-check-icon' />
									</label>
									<span className='filter-label'>
										6-17 hours
									</span>
									<span className='filter-count'>(571)</span>
								</div>
							</li>
							<li className='filter-sidebar__list-dropdown-item'>
								<div className='filter-choose'>
									<label className='radio'>
										<input type='radio' />
										<span className='radio-btn'></span>
										<FiCheck className='filter-check-icon' />
									</label>
									<span className='filter-label'>
										More than 17 hours
									</span>
									<span className='filter-count'>(571)</span>
								</div>
							</li>
						</ul>
					</li>
					<li className='filter-sidebar__list-item'>
						<div className='filter-sidebar__list-item-heading'>
							<span>Theme</span>
							<FaAngleDown className='filter-angle-icon active' />
						</div>
						<ul className='filter-sidebar__list-dropdown active'>
							<li className='filter-sidebar__list-dropdown-item'>
								<div className='filter-choose'>
									<label className='radio'>
										<input type='radio' />
										<span className='radio-btn'></span>
										<FiCheck className='filter-check-icon' />
									</label>
									<span className='filter-label'>
										0-3 hours
									</span>
									<span className='filter-count'>(571)</span>
								</div>
							</li>
							<li className='filter-sidebar__list-dropdown-item'>
								<div className='filter-choose'>
									<label className='radio'>
										<input type='radio' />
										<span className='radio-btn'></span>
										<FiCheck className='filter-check-icon' />
									</label>
									<span className='filter-label'>
										3-6 hours
									</span>
									<span className='filter-count'>(571)</span>
								</div>
							</li>
							<li className='filter-sidebar__list-dropdown-item'>
								<div className='filter-choose'>
									<label className='radio'>
										<input type='radio' />
										<span className='radio-btn'></span>
										<FiCheck className='filter-check-icon' />
									</label>
									<span className='filter-label'>
										6-17 hours
									</span>
									<span className='filter-count'>(571)</span>
								</div>
							</li>
							<li className='filter-sidebar__list-dropdown-item'>
								<div className='filter-choose'>
									<label className='radio'>
										<input type='radio' />
										<span className='radio-btn'></span>
										<FiCheck className='filter-check-icon' />
									</label>
									<span className='filter-label'>
										More than 17 hours
									</span>
									<span className='filter-count'>(571)</span>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div className='filter-courses-list'>
				<h1>courses list</h1>
			</div>
		</div>
	);
}

export default ListCourses;
