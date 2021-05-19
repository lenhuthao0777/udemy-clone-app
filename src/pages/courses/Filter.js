import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import ButtonFilterSelect from "./ButtonFilterSelect";
function Filter() {
	return (
		<div className='filter'>
			<div className='filter-heading'>
				<div className='filter-heading__buttons'>
					<button className='filter-btn'>
						<BiMenuAltLeft className='filter-icon' />
						<p>Filter</p>
					</button>
					<ButtonFilterSelect />
				</div>
				<div className='filter-heading__result'>
					<span>432 result</span>
				</div>
			</div>
		</div>
	);
}

export default Filter;
