import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
function Filter() {
	return (
		<div className='filter'>
			<div className='filter-heading'>
				<div className='filter-heading__buttons'>
					<button className='filter-btn'>
						<BiMenuAltLeft className='filter-icon' />
						<p>Filter</p>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Filter;
