import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
const STYLE = ["course-item", "sale-active"];
const SALE = ["sale-active"];
function CourseItem({
	courseName,
	image,
	author,
	price,
	clsName,
	sale,
	onClick,
}) {
	const checkClsName = STYLE.includes(clsName) ? clsName : STYLE[0];
	const checkSale = SALE.includes(sale) ? sale : "";
	return (
		<div className={`${checkClsName} ${checkSale}`} onClick={onClick}>
			<div className='course-item__img'>
				<img src={image} alt='' />
			</div>
			<div className='course-item__info'>
				<h1 className='course-item__info-name'>{courseName}</h1>
				<p className='course-item__info-author'>{author}</p>
			</div>
			<div className='course-item__rate'>
				<p>4.7</p>
				<StarIcon className='star-icon' />
				<StarIcon className='star-icon' />
				<StarIcon className='star-icon' />
				<StarIcon className='star-icon' />
				<StarHalfIcon className='star-icon' />
				<span>(31,57)</span>
			</div>
			<div className='course-item__price'>
				<span>US $ {price}</span>
			</div>
			<div className='course-item__sale'>
				<span>Best Sale</span>
			</div>
			{/* <div className='hover'>
				<h1>this is hover</h1>
			</div> */}
		</div>
	);
}

export default CourseItem;
