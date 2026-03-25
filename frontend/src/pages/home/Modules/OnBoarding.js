import { Button } from "components/button";
import React from "react";

function OnBoarding() {
	return (
		<div className='onboarding '>
			<div className='onboarding__content'>
				<div className='onboarding__content-text'>
					<h1>Get personalized learning recommendations</h1>
				</div>
				<div className='onboarding__content-action--button'>
					<Button size='md' color='btn--btn-light'>
						First step
					</Button>
				</div>
			</div>
		</div>
	);
}

export default OnBoarding;
