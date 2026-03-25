import React from "react";
const SIZE = ["AvatarSm", "AvatarMd", "AvatarLg"];
export default function UdeAvatar({ AvatarSrc, size }) {
	const checkSize = SIZE.includes(size) ? size : SIZE[0];
	return (
		<div className={`ude-avatar ${checkSize}`}>
			<img src={AvatarSrc} alt='' />
		</div>
	);
}
