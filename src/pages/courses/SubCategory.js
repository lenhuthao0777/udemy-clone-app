import React from "react";
import { Link } from "react-router-dom";

function SubCategory() {
	return (
		<nav className='sub-category'>
			<ul className='sub-category__list'>
				<li className='sub-category__list-item'>
					<Link className='sub-category__list-item-heading' to='/'>
						Development
					</Link>
				</li>
				<li className='sub-category__list-item'>
					<Link to='/courses/FrontEnd'>FrontEnd</Link>
				</li>
				<li className='sub-category__list-item'>
					<Link to='/courses/BackEnd'>BackEnd</Link>
				</li>
				<li className='sub-category__list-item'>
					<Link to='/courses/Mobile'>Mobile Developer</Link>
				</li>
			</ul>
		</nav>
	);
}

export default SubCategory;
