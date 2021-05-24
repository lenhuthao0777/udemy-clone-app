import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";
function SubMenu({ item }) {
	const [subnav, setSubNav] = useState(false);
	const showSubNav = () => setSubNav(!subnav);
	return (
		<div className='submenu'>
			<div className='submenu-heading' onClick={item.subNav && showSubNav}>
				<h3>{item.title}</h3>
				<div className='submenu-heading__icon'>{item.subNav && subnav ? item.iconOpen : item.subNav ? item.iconClose : null}</div>
			</div>
			<div className='submenu-dropdown' id={`dropdown-${item.id}`}>
				{subnav &&
					item.subNav.map((item) => {
						return (
							<div className='submenu-dropdown__item' key={item.id}>
								<label className={`radio`}>
									<input type='radio' />
									<span></span>
									<FiCheck className='filter-check-icon' />
								</label>
								{subnav && item.icon1 ? item.icon1 : null}
								{subnav && item.icon2 ? item.icon2 : null}
								{subnav && item.icon3 ? item.icon3 : null}
								{subnav && item.icon4 ? item.icon4 : null}
								{subnav && item.icon5 ? item.icon5 : null}
								<p className='filter-label'>{item.subNavTitle}</p>
								<p className='filter-count'>({item.count})</p>
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
	//
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
