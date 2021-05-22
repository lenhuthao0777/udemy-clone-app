import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";
function SubMenu({ item }) {
	const [subnav, setSubNav] = useState(false);
	const showSubNav = () => setSubNav(!subnav);
	return (
		<div className='submenu'>
			<div onClick={item.subNav && showSubNav}>
				<div>
					<div>{item.title}</div>
				</div>
				<div>{item.subNav && subnav ? item.iconOpen : item.subNav ? item.iconClose : null}</div>
			</div>
			<div>
				{subnav &&
					item.subNav.map((item) => {
						return (
							<div>
								{subnav && item.icon1 ? item.icon1 : null}
								{subnav && item.icon2 ? item.icon2 : null}
								{subnav && item.icon3 ? item.icon3 : null}
								{subnav && item.icon4 ? item.icon4 : null}
								{subnav && item.icon5 ? item.icon5 : null}
								<p>{item.subNavTitle}</p>
							</div>
						);
					})}
			</div>
		</div>
	);
	// return (
	// 	<>
	// 		<div className='submenu'>
	// 			<div className='hidden-show-more'>
	// 				{item.subNav.map((itemSubNav) => {
	// 					return (
	// 						<div className='submenu-list' key={itemSubNav.id}>
	// 							<div className='filter-rated'>
	// 								<label className={`radio active`}>
	// 									<input type='radio' />
	// 									<span></span>
	// 									<FiCheck className='filter-check-icon' />
	// 								</label>
	//
	// 								<span className='filter-label'>{itemSubNav.subNavTitle}</span>
	// 								<span className='filter-count'>({itemSubNav.count})</span>
	// 							</div>
	// 						</div>
	// 					);
	// 				})}
	// 			</div>
	// 			{item.subNav.length > 4 ? (
	// 								<div className='show-more'>
	// 									<p>Show more</p>
	// 									<FaAngleDown className='show-more-icon ' />
	// 								</div>
	// 							) : null}
	// 		</div>
	// 	</>
	// );
}

export default SubMenu;
