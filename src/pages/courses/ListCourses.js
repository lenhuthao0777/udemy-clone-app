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
			name: "ASP.NET Core",
			count: 125,
		},
		{
			id: 16,
			name: "Python",
			count: 123,
		},
		{
			id: 17,
			name: "Java",
			count: 98,
		},
	];
	const subCate = [
		{
			id: 1,
			name: "Web development",
			count: "7,676",
		},
		{
			id: 2,
			name: "IT certification",
			count: "2",
		},
		{
			id: 3,
			name: "Programming languages",
			count: "2",
		},
		{
			id: 4,
			name: "Development tool",
			count: "1",
		},
	];
	const level = [
		{
			id: 1,
			name: "All level",
			count: "3,617",
		},
		{
			id: 2,
			name: "Beginner",
			count: "2,704",
		},
		{
			id: 3,
			name: "Intermediate",
			count: "1,229",
		},
		{
			id: 4,
			name: "Confirmed",
			count: "130",
		},
	];
	const languages = [
		{ code: "ab", name: "Abkhazian" },
		{ code: "aa", name: "Afar" },
		{ code: "af", name: "Afrikaans" },
		{ code: "ak", name: "Akan" },
		{ code: "sq", name: "Albanian" },
		{ code: "am", name: "Amharic" },
		{ code: "ar", name: "Arabic" },
		{ code: "an", name: "Aragonese" },
		{ code: "hy", name: "Armenian" },
		{ code: "as", name: "Assamese" },
		{ code: "av", name: "Avaric" },
		{ code: "ae", name: "Avestan" },
		{ code: "ay", name: "Aymara" },
		{ code: "az", name: "Azerbaijani" },
		{ code: "bm", name: "Bambara" },
		{ code: "ba", name: "Bashkir" },
		{ code: "eu", name: "Basque" },
		{ code: "be", name: "Belarusian" },
		{ code: "bn", name: "Bengali" },
		{ code: "bh", name: "Bihari languages" },
		{ code: "bi", name: "Bislama" },
		{ code: "bs", name: "Bosnian" },
		{ code: "br", name: "Breton" },
		{ code: "bg", name: "Bulgarian" },
		{ code: "my", name: "Burmese" },
		{ code: "ca", name: "Catalan, Valencian" },
		{ code: "km", name: "Central Khmer" },
		{ code: "ch", name: "Chamorro" },
		{ code: "ce", name: "Chechen" },
		{ code: "ny", name: "Chichewa, Chewa, Nyanja" },
		{ code: "zh", name: "Chinese" },
		{ code: "cv", name: "Chuvash" },
		{ code: "kw", name: "Cornish" },
		{ code: "co", name: "Corsican" },
		{ code: "cr", name: "Cree" },
		{ code: "hr", name: "Croatian" },
		{ code: "cs", name: "Czech" },
		{ code: "da", name: "Danish" },
		{ code: "dv", name: "Divehi, Dhivehi, Maldivian" },
		{ code: "nl", name: "Dutch, Flemish" },
		{ code: "dz", name: "Dzongkha" },
		{ code: "en", name: "English" },
		{ code: "eo", name: "Esperanto" },
		{ code: "et", name: "Estonian" },
		{ code: "ie", name: "Interlingue" },
		{ code: "iu", name: "Inuktitut" },
		{ code: "ik", name: "Inupiaq" },
		{ code: "ga", name: "Irish" },
		{ code: "it", name: "Italian" },
		{ code: "ja", name: "Japanese" },
		{ code: "jv", name: "Javanese" },
		{ code: "kn", name: "Kannada" },
		{ code: "kr", name: "Kanuri" },
	];
	const features = [
		{
			id: 1,
			name: "Subtitles",
			count: "5,262",
		},
		{
			id: 2,
			name: "Questionnaires",
			count: "1,326",
		},
		{
			id: 3,
			name: "Coding exercises",
			count: "143",
		},
		{
			id: 4,
			name: "Practical exercises",
			count: "152",
		},
	];
	const subtitles = [
		{
			name: "Mandarin Chinese",
		},
		{
			name: "Spanish",
		},
		{
			name: "English",
		},
		{
			name: "Hindi/Urdu",
		},
		{
			name: "Arabic",
		},
		{
			name: "Bengali",
		},
		{
			name: "Portuguese",
		},
		{
			name: "Russian",
		},
		{
			name: "Japanese",
		},
		{
			name: "German",
		},
		{
			name: "Javanese",
		},
		{
			name: "Punjabi",
		},
		{
			name: "Wu",
		},
		{
			name: "French",
		},
		{
			name: "Telugu",
		},
		{
			name: "Vietnamese",
		},
		{
			name: "Marathi",
		},
		{
			name: "Korean",
		},
		{
			name: "Tamil",
		},
		{
			name: "Italian",
		},
		{
			name: "Turkish",
		},
		{
			name: "Cantonese/Yue",
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
							{theme.map((item, index) => {
								return (
									<li
										className='filter-sidebar__list-dropdown-item'
										key={index}>
										<div className='filter-choose'>
											<label className='radio'>
												<input type='radio' />
												<span className='radio-btn'></span>
												<FiCheck className='filter-check-icon' />
											</label>
											<span className='filter-label'>
												{item.name}
											</span>
											<span className='filter-count'>
												({item.count})
											</span>
										</div>
									</li>
								);
							})}
						</ul>
					</li>
					<li className='filter-sidebar__list-item'>
						<div className='filter-sidebar__list-item-heading'>
							<span>Sub-category</span>
							<FaAngleDown className='filter-angle-icon active' />
						</div>
						<ul className='filter-sidebar__list-dropdown active'>
							{subCate.map((item) => {
								return (
									<li
										className='filter-sidebar__list-dropdown-item'
										key={item.id}>
										<div className='filter-choose'>
											<label className='radio'>
												<input type='radio' />
												<span className='radio-btn'></span>
												<FiCheck className='filter-check-icon' />
											</label>
											<span className='filter-label'>
												{item.name}
											</span>
											<span className='filter-count'>
												({item.count})
											</span>
										</div>
									</li>
								);
							})}
						</ul>
					</li>
					<li className='filter-sidebar__list-item'>
						<div className='filter-sidebar__list-item-heading'>
							<span>Level</span>
							<FaAngleDown className='filter-angle-icon active' />
						</div>
						<ul className='filter-sidebar__list-dropdown active'>
							{level.map((item) => {
								return (
									<li
										className='filter-sidebar__list-dropdown-item'
										key={item.id}>
										<div className='filter-choose'>
											<label className='radio'>
												<input type='radio' />
												<span className='radio-btn'></span>
												<FiCheck className='filter-check-icon' />
											</label>
											<span className='filter-label'>
												{item.name}
											</span>
											<span className='filter-count'>
												({item.count})
											</span>
										</div>
									</li>
								);
							})}
						</ul>
					</li>
					<li className='filter-sidebar__list-item'>
						<div className='filter-sidebar__list-item-heading'>
							<span>Languages</span>
							<FaAngleDown className='filter-angle-icon active' />
						</div>
						<ul className='filter-sidebar__list-dropdown active'>
							{languages.map((item, index) => {
								return (
									<li
										className='filter-sidebar__list-dropdown-item'
										key={index}>
										<div className='filter-choose'>
											<label className='radio'>
												<input type='radio' />
												<span className='radio-btn'></span>
												<FiCheck className='filter-check-icon' />
											</label>
											<span className='filter-label'>
												{item.name}
											</span>
											<span className='filter-count'>
												(
												{Math.floor(
													Math.random() * 10000
												)}
												)
											</span>
										</div>
									</li>
								);
							})}
						</ul>
					</li>
					<li className='filter-sidebar__list-item'>
						<div className='filter-sidebar__list-item-heading'>
							<span>Features</span>
							<FaAngleDown className='filter-angle-icon active' />
						</div>
						<ul className='filter-sidebar__list-dropdown active'>
							{features.map((item) => {
								return (
									<li
										className='filter-sidebar__list-dropdown-item'
										key={item.id}>
										<div className='filter-choose'>
											<label className='radio'>
												<input type='radio' />
												<span className='radio-btn'></span>
												<FiCheck className='filter-check-icon' />
											</label>
											<span className='filter-label'>
												{item.name}
											</span>
											<span className='filter-count'>
												({item.count})
											</span>
										</div>
									</li>
								);
							})}
						</ul>
					</li>
					<li className='filter-sidebar__list-item'>
						<div className='filter-sidebar__list-item-heading'>
							<span>Subtitles</span>
							<FaAngleDown className='filter-angle-icon active' />
						</div>
						<ul className='filter-sidebar__list-dropdown active'>
							{subtitles.map((item, index) => {
								return (
									<li
										className='filter-sidebar__list-dropdown-item'
										key={index}>
										<div className='filter-choose'>
											<label className='radio'>
												<input type='radio' />
												<span className='radio-btn'></span>
												<FiCheck className='filter-check-icon' />
											</label>
											<span className='filter-label'>
												{item.name}
											</span>
											<span className='filter-count'>
												(
												{Math.floor(
													Math.random() * 10000
												)}
												)
											</span>
										</div>
									</li>
								);
							})}
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
