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
					<img
						src='https://s.udemycdn.com/browse_components/link-bar/large-next.svg'
						alt=''
					/>
				</li>
				<li className='sub-category__list-item'>
					<Link to='/'>FrontEnd</Link>
				</li>
				<li className='sub-category__list-item'>
					<Link to='/'>BackEnd</Link>
				</li>
				<li className='sub-category__list-item'>
					<Link to='/'>Mobile Developer</Link>
				</li>
			</ul>
		</nav>
	);
}

export default SubCategory;
