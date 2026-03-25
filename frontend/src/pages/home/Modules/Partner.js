import React from "react";
import { Link } from "react-router-dom";

function Partner() {
	return (
		<div className='partner'>
			<div className='container'>
				<div className='partner-content'>
					<h1>Companies of all sizes trust us</h1>
					<div className='partner-content__img'>
						<Link to='/'>
							<img src='./img/booking.svg' alt='' />
						</Link>

						<Link to='/'>
							<img src='./img/volkswagen.svg' alt='' />
						</Link>

						<Link to='/'>
							<img src='./img/mercedes.svg' alt='' />
						</Link>

						<Link to='/'>
							<img src='./img/adidas.svg' alt='' />
						</Link>

						<Link to='/'>
							<img src='./img/pinterest.svg' alt='' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Partner;
