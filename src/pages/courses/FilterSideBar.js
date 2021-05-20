import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { FiCheck } from "react-icons/fi";
function FilterSideBar() {
	const [menu1, setMenu1] = useState(true);
	// const [menu2, setMenu2] = useState(2);
	// const [menu3, setMenu3] = useState(3);
	// const [menu4, setMenu4] = useState(4);
	// const [menu5, setMenu5] = useState(5);
	// const [menu6, setMenu6] = useState(6);
	// const [menu7, setMenu7] = useState(7);
	// const [menu8, setMenu8] = useState(8);
	const [radio, setRadio] = useState(1);
	const [subNavs, setSubNavs] = useState(false);
	const sideBarData = [
		{
			id: 1,
			title: "Notes",
			show: false,
			subNav: [
				{
					id: 1,
					icon: [
						<IoMdStar className='filter-star-icon-bold' />,
						<IoMdStar className='filter-star-icon-bold' />,
						<IoMdStar className='filter-star-icon-bold' />,
						<IoMdStar className='filter-star-icon-bold' />,
						<IoMdStarHalf className='filter-star-icon-half' />,
					],
					subNavTitle: "From 4.5",
					count: Math.floor(Math.random() * 1000),
				},
				{
					id: 2,
					icon: [
						<IoMdStar className='filter-star-icon-bold' />,
						<IoMdStar className='filter-star-icon-bold' />,
						<IoMdStar className='filter-star-icon-bold' />,
						<IoMdStar className='filter-star-icon-bold' />,
						<IoMdStarOutline className='filter-star-icon-ountline' />,
					],
					subNavTitle: "From 4",
					count: Math.floor(Math.random() * 1000),
				},
				{
					id: 3,
					icon: [
						<IoMdStar className='filter-star-icon-bold' />,
						<IoMdStar className='filter-star-icon-bold' />,
						<IoMdStar className='filter-star-icon-bold' />,
						<IoMdStarHalf className='filter-star-icon-half' />,
						<IoMdStarOutline className='filter-star-icon-ountline' />,
					],
					subNavTitle: "From 3.5",
					count: Math.floor(Math.random() * 1000),
				},
				{
					id: 4,
					icon: [
						<IoMdStar className='filter-star-icon-bold' />,
						<IoMdStar className='filter-star-icon-bold' />,
						<IoMdStar className='filter-star-icon-bold' />,
						<IoMdStarOutline className='filter-star-icon-ountline' />,
						<IoMdStarOutline className='filter-star-icon-ountline' />,
					],
					subNavTitle: "From 3",
					count: Math.floor(Math.random() * 1000),
				},
			],
		},
		{
			id: 2,
			title: "Video duration",
			show: false,
			subNav: [
				{
					id: 1,
					subNavTitle: "0-3 hours",
					count: Math.floor(Math.random() * 1000),
				},
				{
					id: 2,
					subNavTitle: "3-6 hours",
					count: Math.floor(Math.random() * 1000),
				},
				{
					id: 3,
					subNavTitle: "6-17 hours",
					count: Math.floor(Math.random() * 1000),
				},
				{
					id: 1,
					subNavTitle: "More than 17 hours",
					count: Math.floor(Math.random() * 1000),
				},
			],
		},
		{
			id: 3,
			title: "Theme",
			show: true,
			subNav: [
				{
					id: 1,
					subNavTitle: "Javascript",
					count: 596,
				},
				{
					id: 2,
					subNavTitle: "Web development",
					count: 564,
				},
				{
					id: 3,
					subNavTitle: "PHP language",
					count: 473,
				},
				{
					id: 4,
					subNavTitle: "WordPress",
					count: 470,
				},
				{
					id: 5,
					subNavTitle: "React",
					count: 372,
				},
				{
					id: 6,
					subNavTitle: "CSS",
					count: 315,
				},
				{
					id: 7,
					subNavTitle: "HTML language",
					count: 281,
				},
				{
					id: 8,
					subNavTitle: "Angular application framework",
					count: 241,
				},
				{
					id: 9,
					subNavTitle: "Laravel",
					count: 236,
				},
				{
					id: 10,
					subNavTitle: "NodeJs",
					count: 226,
				},
				{
					id: 11,
					subNavTitle: "Bootstrap",
					count: 201,
				},
				{
					id: 12,
					subNavTitle: "Django",
					count: 177,
				},
				{
					id: 13,
					subNavTitle: "VueJs application framework",
					count: 145,
				},
				{
					id: 14,
					subNavTitle: "Front-end web development",
					count: 140,
				},
				{
					id: 15,
					subNavTitle: "ASP.NET Core",
					count: 125,
				},
				{
					id: 16,
					subNavTitle: "Python",
					count: 123,
				},
				{
					id: 17,
					subNavTitle: "Java",
					count: 98,
				},
			],
		},
		{
			id: 4,
			title: "Sub-category",
			show: false,
			subNav: [
				{
					id: 1,
					subNavTitle: "Web development",
					count: "7,676",
				},
				{
					id: 2,
					subNavTitle: "IT certification",
					count: "2",
				},
				{
					id: 3,
					subNavTitle: "Programming languages",
					count: "2",
				},
				{
					id: 4,
					subNavTitle: "Development tool",
					count: "1",
				},
			],
		},
		{
			id: 5,
			title: "Level",
			show: false,
			subNav: [
				{
					id: 1,
					subNavTitle: "All level",
					count: "3,617",
				},
				{
					id: 2,
					subNavTitle: "Beginner",
					count: "2,704",
				},
				{
					id: 3,
					subNavTitle: "Intermediate",
					count: "1,229",
				},
				{
					id: 4,
					subNavTitle: "Confirmed",
					count: "130",
				},
			],
		},
		{
			id: 6,
			title: "Languages",
			show: true,
			subNav: [
				{
					code: "ab",
					subNavTitle: "Abkhazian",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "aa",
					subNavTitle: "Afar",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "af",
					subNavTitle: "Afrikaans",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "ak",
					subNavTitle: "Akan",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "sq",
					subNavTitle: "Albanian",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "am",
					subNavTitle: "Amharic",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "ar",
					subNavTitle: "Arabic",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "an",
					subNavTitle: "Aragonese",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "hy",
					subNavTitle: "Armenian",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "as",
					subNavTitle: "Assamese",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "av",
					subNavTitle: "Avaric",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "ae",
					subNavTitle: "Avestan",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "ay",
					subNavTitle: "Aymara",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "az",
					subNavTitle: "Azerbaijani",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "bm",
					subNavTitle: "Bambara",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "ba",
					subNavTitle: "Bashkir",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "eu",
					subNavTitle: "Basque",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "be",
					subNavTitle: "Belarusian",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "bn",
					subNavTitle: "Bengali",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "bh",
					subNavTitle: "Bihari languages",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "bi",
					subNavTitle: "Bislama",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "bs",
					subNavTitle: "Bosnian",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "br",
					subNavTitle: "Breton",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "bg",
					subNavTitle: "Bulgarian",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "my",
					subNavTitle: "Burmese",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "ca",
					subNavTitle: "Catalan, Valencian",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "km",
					subNavTitle: "Central Khmer",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "ch",
					subNavTitle: "Chamorro",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "ce",
					subNavTitle: "Chechen",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "ny",
					subNavTitle: "Chichewa, Chewa, Nyanja",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "zh",
					subNavTitle: "Chinese",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "cv",
					subNavTitle: "Chuvash",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "kw",
					subNavTitle: "Cornish",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "co",
					subNavTitle: "Corsican",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "cr",
					subNavTitle: "Cree",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "hr",
					subNavTitle: "Croatian",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "cs",
					subNavTitle: "Czech",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "da",
					subNavTitle: "Danish",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "dv",
					subNavTitle: "Divehi, Dhivehi, Maldivian",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "nl",
					subNavTitle: "Dutch, Flemish",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "dz",
					subNavTitle: "Dzongkha",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "en",
					subNavTitle: "English",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "eo",
					subNavTitle: "Esperanto",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "et",
					subNavTitle: "Estonian",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "ie",
					subNavTitle: "Interlingue",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "iu",
					subNavTitle: "Inuktitut",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "ik",
					subNavTitle: "Inupiaq",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "ga",
					subNavTitle: "Irish",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "it",
					subNavTitle: "Italian",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "ja",
					subNavTitle: "Japanese",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "jv",
					subNavTitle: "Javanese",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "kn",
					subNavTitle: "Kannada",
					count: Math.floor(Math.random() * 10000),
				},
				{
					code: "kr",
					subNavTitle: "Kanuri",
					count: Math.floor(Math.random() * 10000),
				},
			],
		},
		{
			id: 7,
			title: "Features",
			show: false,
			subNav: [
				{
					id: 1,
					subNavTitle: "Subtitles",
					count: "5,262",
				},
				{
					id: 2,
					subNavTitle: "Questionnaires",
					count: "1,326",
				},
				{
					id: 3,
					subNavTitle: "Coding exercises",
					count: "143",
				},
				{
					id: 4,
					subNavTitle: "Practical exercises",
					count: "152",
				},
			],
		},
		{
			id: 8,
			title: "Subtitles",
			show: true,
			subNav: [
				{
					subNavTitle: "Mandarin Chinese",
					count: Math.floor(Math.random() * 100),
				},
				{
					subNavTitle: "Spanish",
					count: Math.floor(Math.random() * 100),
				},
				{
					subNavTitle: "English",
					count: Math.floor(Math.random() * 100),
				},
				{
					subNavTitle: "Hindi/Urdu",
					count: Math.floor(Math.random() * 100),
				},
				{
					subNavTitle: "Arabic",
					count: Math.floor(Math.random() * 100),
				},
				{
					subNavTitle: "Bengali",
					count: Math.floor(Math.random() * 100),
				},
				{
					subNavTitle: "Portuguese",
					count: Math.floor(Math.random() * 100),
				},
				{
					subNavTitle: "Russian",
					count: Math.floor(Math.random() * 100),
				},
				{
					subNavTitle: "Japanese",
					count: Math.floor(Math.random() * 100),
				},
				{
					subNavTitle: "German",
					count: Math.floor(Math.random() * 100),
				},
				{
					subNavTitle: "Javanese",
					count: Math.floor(Math.random() * 100),
				},
				{
					subNavTitle: "Punjabi",
					count: Math.floor(Math.random() * 100),
				},
				{
					subNavTitle: "Wu",
					count: Math.floor(Math.random() * 100),
				},
				{
					subNavTitle: "French",
					count: Math.floor(Math.random() * 100),
				},
				{
					subNavTitle: "Telugu",
					count: Math.floor(Math.random() * 100),
				},
				{
					subNavTitle: "Vietnamese",
					count: Math.floor(Math.random() * 100),
				},
				{
					subNavTitle: "Marathi",
					count: Math.floor(Math.random() * 100),
				},
				{
					subNavTitle: "Korean",
					count: Math.floor(Math.random() * 100),
				},
				{
					subNavTitle: "Tamil",
					count: Math.floor(Math.random() * 100),
				},
				{
					subNavTitle: "Italian",
					count: Math.floor(Math.random() * 100),
				},
				{
					subNavTitle: "Turkish",
					count: Math.floor(Math.random() * 100),
				},
				{
					subNavTitle: "Cantonese/Yue",
					count: Math.floor(Math.random() * 100),
				},
			],
		},
	];

	return (
		<div className='filter-sidebar'>
			<ul className='filter-sidebar__list'>
				{sideBarData.map((item, index) => {
					return (
						<li
							className='filter-sidebar__list-item'
							key={item.id}
							id={`menu${item.id}`}>
							<div
								className='filter-sidebar__list-item-heading'
								onClick={() => setMenu1(!menu1)}>
								<span>{item.title}</span>
								<FaAngleDown className='filter-angle-icon' />
								{/* them active vao icon */}
							</div>
							<ul
								className={`filter-sidebar__list-dropdown ${
									menu1 ? "active open" : null
								}`}>
								{item.subNav.map((items, index) => {
									return (
										<li
											className='filter-sidebar__list-dropdown-item'
											key={index}
											id='menu1'
											onClick={() => setRadio(1)}>
											<div className='filter-rated'>
												<label
													className={`radio ${
														radio === 1
															? "active"
															: ""
													}`}>
													<input type='radio' />
													<span></span>
													<FiCheck className='filter-check-icon' />
												</label>
												{items.icon}
												<span className='filter-label'>
													{items.subNavTitle}
												</span>
												<span className='filter-count'>
													({items.count})
												</span>
											</div>
										</li>
									);
								})}
								{/* {item.show ? (
									<div className='show-more'>
										<p>Show more</p>
										<FaAngleDown className='show-more-icon ' />
									</div>
								) : null} */}
							</ul>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default FilterSideBar;
