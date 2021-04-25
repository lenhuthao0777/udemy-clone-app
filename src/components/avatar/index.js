import React from 'react';
const SIZE = ['AvatarSm', 'AvatarMd'];
export default function UdeAvatar({ AvatarSrc, size }) {
	console.log(AvatarSrc);
	const checkSize = SIZE.includes(size) ? size : SIZE[0];
	return (
		<div className={`ude-avatar ${checkSize}`}>
			<img src={AvatarSrc} alt='' />
		</div>
	);
}
