import React from "react";

function Video() {
	return (
		<div className='video'>
			<div className='video-content'>
				<iframe
					src='https://www.youtube.com/embed/QFIhEmOd6No'
					title='YouTube video player'
					frameBorder={0}
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				/>
				<div className='video-content__info'>
					<h1>Transform Your Life Through Learning</h1>
					<p>
						Mohamad Alaloush started a career in software
						development taking courses on Udemy. And you, what are
						you going to achieve?
					</p>
				</div>
			</div>
		</div>
	);
}

export default Video;
