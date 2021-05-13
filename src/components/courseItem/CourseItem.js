import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import { FaCheck, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
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
	id,
	view,
}) {
	const checkClsName = STYLE.includes(clsName) ? clsName : STYLE[0];
	const checkSale = SALE.includes(sale) ? sale : "";
	return (
		<div
			className={`${checkClsName} ${checkSale}`}
			id={id}
			onClick={onClick}>
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
				<span>{`(${view})`}</span>
			</div>
			<div className='course-item__price'>
				<span>US $ {price}</span>
			</div>
			<div className='course-item__sale'>
				<span>Best Sale</span>
			</div>
			{/* <div className='hover'>
				<h1>{courseName}</h1>
				<p className='update-day'>Update March 2021</p>
				<p className='time'>30.05 hours in total . All level</p>
				<p className='info'>{author}</p>

				<div className='btns'>
					<div className='btn-add'>
						<Link to='/'>
							<button>Add to cart</button>
						</Link>
					</div>
					<div className='btn-like'>
						<FaRegHeart className='icon-heart' />
					</div>
				</div>
			</div>
			<div className='hover-last'>
				<h1>{courseName}</h1>
				<p className='update-day'>Update March 2021</p>
				<p className='time'>30.05 hours in total . All level</p>
				<p className='info'>{author}</p>
				<div className='btns'>
					<div className='btn-add'>
						<Link to='/'>
							<button>Add top cart</button>
						</Link>
					</div>
					<div className='btn-like'>
						<FaRegHeart className='icon-heart' />
					</div>
				</div>
			</div>
		 */}
		</div>
	);
}

export default CourseItem;
