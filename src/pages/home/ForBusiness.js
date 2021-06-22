import React from "react";
import { Button } from "components/button/Button";

function ForBusiness() {
	return (
		<div className='business'>
			<div className='business-content'>
				<div className='business-content-info'>
					<h1>Udemy for Business</h1>
					<p>
						Give your team unlimited access to over 5,500 of Udemy's
						best courses.
					</p>
					<Button color='btn btn--primary' size='md'>
						Get Udemy for Business
					</Button>
				</div>
				<img src='./img/business.jpg' alt='' />
			</div>
		</div>
	);
}

export default ForBusiness;
