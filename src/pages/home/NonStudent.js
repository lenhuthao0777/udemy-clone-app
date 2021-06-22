import { Button } from "components/button/Button";
import React from "react";

function NonStudent() {
	return (
		<div className='non-student'>
			<div className='non-student__content'>
				<img src='./img/teach.jpg' alt='' />
				<div className='non-student__content-info'>
					<h1>Become a trainer</h1>
					<p>
						The world's best trainers teach millions of participants
						on Udemy. We give you the tools and skills to teach what
						you love.
					</p>
					<Button color='btn btn--primary' size='md'>
						Start teaching today
					</Button>
				</div>
			</div>
		</div>
	);
}

export default NonStudent;
