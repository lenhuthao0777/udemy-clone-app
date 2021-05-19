import React from "react";
import Select from "react-select";

const divStyle = {
	width: "100%",
	maxWidth: "100%",
};

const options = [
	{
		label: "Sort",
		value: "Sort",
		disabled: true,
	},
	{
		label: "The most popular",
		value: "The most popular",
	},
	{
		label: "Top rated",
		value: "Top rated",
	},
	{
		label: "The most recent",
		value: "The most recent",
	},
];

const customStyles = {
	control: (styles) => ({ ...styles, padding: "4px 0" }),
};
function ButtonFilterSelect() {
	return (
		<div style={divStyle}>
			<Select
				options={options}
				styles={customStyles}
				placeholder={"Selected"}
			/>
		</div>
	);
}
export default ButtonFilterSelect;
