import React from "react";
import UdeAvatar from "../avatar/index";
function HeadShot({}) {
	return (
		<div>
			<div className='headshot-banner'>
				<div className='headshot-banner__content'></div>
				<UdeAvatar
					AvatarSrc={
						"https://i1.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?fit=1920%2C1920&ssl=1"
					}
					size='AvatarMd'
				/>
			</div>
		</div>
	);
}

export default HeadShot;
