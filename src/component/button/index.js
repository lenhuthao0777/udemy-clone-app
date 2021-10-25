import React from "react";
// import { useState } from 'react';
const STYLE = [
	"btn--btn-primary",
	"btn--btn-light",
	"btn--btn-outline",
	"btn--outline-no-hover",
];
const SIZE = ["md", "sm", "lg", "full"];
export const Button = ({ children, type, onClick, color, size }) => {
	// const [ButtonStyle, setButtonStyle] = useState();
	// const [ButtonSize, SetButtonSize] = useState();
	const checkButtonStyle = STYLE.includes(color) ? color : STYLE[0];
	const checkButtonSize = SIZE.includes(size) ? size : SIZE[0];
	return (
		<button
			className={`btn ${checkButtonStyle} ${checkButtonSize}`}
			onClick={onClick}
			type={type}>
			{children}
		</button>
	);
};
