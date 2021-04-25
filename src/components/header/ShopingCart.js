import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";
function ShopingCart() {
	return (
		<>
			<div className='header--navbar__cart'>
				<Link to='/cart'>
					<ShoppingCartOutlinedIcon className='cart-icon' />
				</Link>
				<div className='header--navbar__cart-quantity'>
					<span>2</span>
				</div>
				<div className='header--navbar__cart-list'>
					<ul className='header--navbar__cart-list-courses'>
						<li className='header--navbar__cart-list-courses__item'>
							<div className='courses--item__img'>
								<img
									src='https://img-a.udemycdn.com/course/100x100/875276_6906_5.jpg?-F6K0Twk7Va-Vdf-EZJ3hjFCoZY7jYzJ3BxxyUVGsvt-bLx98ZhBMpcb-_3BKkePIuWg7ISgf5bAF1kRzDQ7LYC8r6Nk35BSdJAYIZzhBj0JJ8b5ijtj-W-Wgk2v79o'
									alt=''
								/>
							</div>
							<div className='header--navbar__cart-list-courses__item-infor'>
								<div className='cart--courses__name'>
									<h3>
										AngularJS and Node.js | Complete Guide
									</h3>
								</div>
								<div className='cart--courses__author'>
									<span>Rudy Nappe</span>
								</div>
								<div className='cart--courses__price'>
									<span className='cart--courses__price-new'>
										USD 11.99
									</span>
									<span className='cart--courses__price-old'>
										USD 99.99
									</span>
								</div>
							</div>
						</li>
						<li className='header--navbar__cart-list-courses__item'>
							<div className='courses--item__img'>
								<img
									src='https://img-a.udemycdn.com/course/100x100/875276_6906_5.jpg?-F6K0Twk7Va-Vdf-EZJ3hjFCoZY7jYzJ3BxxyUVGsvt-bLx98ZhBMpcb-_3BKkePIuWg7ISgf5bAF1kRzDQ7LYC8r6Nk35BSdJAYIZzhBj0JJ8b5ijtj-W-Wgk2v79o'
									alt=''
								/>
							</div>
							<div className='header--navbar__cart-list-courses__item-infor'>
								<div className='cart--courses__name'>
									<h3>
										AngularJS and Node.js | Complete Guide
									</h3>
								</div>
								<div className='cart--courses__author'>
									<span>Rudy Nappe</span>
								</div>
								<div className='cart--courses__price'>
									<span className='cart--courses__price-new'>
										USD 11.99
									</span>
									<span className='cart--courses__price-old'>
										USD 99.99
									</span>
								</div>
							</div>
						</li>
						<li className='header--navbar__cart-list-courses__item'>
							<div className='courses--item__img'>
								<img
									src='https://img-a.udemycdn.com/course/100x100/875276_6906_5.jpg?-F6K0Twk7Va-Vdf-EZJ3hjFCoZY7jYzJ3BxxyUVGsvt-bLx98ZhBMpcb-_3BKkePIuWg7ISgf5bAF1kRzDQ7LYC8r6Nk35BSdJAYIZzhBj0JJ8b5ijtj-W-Wgk2v79o'
									alt=''
								/>
							</div>
							<div className='header--navbar__cart-list-courses__item-infor'>
								<div className='cart--courses__name'>
									<h3>
										AngularJS and Node.js | Complete Guide
									</h3>
								</div>
								<div className='cart--courses__author'>
									<span>Rudy Nappe</span>
								</div>
								<div className='cart--courses__price'>
									<span className='cart--courses__price-new'>
										USD 11.99
									</span>
									<span className='cart--courses__price-old'>
										USD 99.99
									</span>
								</div>
							</div>
						</li>
						<li className='header--navbar__cart-list-courses__item'>
							<div className='courses--item__img'>
								<img
									src='https://img-a.udemycdn.com/course/100x100/875276_6906_5.jpg?-F6K0Twk7Va-Vdf-EZJ3hjFCoZY7jYzJ3BxxyUVGsvt-bLx98ZhBMpcb-_3BKkePIuWg7ISgf5bAF1kRzDQ7LYC8r6Nk35BSdJAYIZzhBj0JJ8b5ijtj-W-Wgk2v79o'
									alt=''
								/>
							</div>
							<div className='header--navbar__cart-list-courses__item-infor'>
								<div className='cart--courses__name'>
									<h3>
										AngularJS and Node.js | Complete Guide
									</h3>
								</div>
								<div className='cart--courses__author'>
									<span>Rudy Nappe</span>
								</div>
								<div className='cart--courses__price'>
									<span className='cart--courses__price-new'>
										USD 11.99
									</span>
									<span className='cart--courses__price-old'>
										USD 99.99
									</span>
								</div>
							</div>
						</li>
					</ul>
					<div className='header--navbar__cart-list__total'>
						<div className='cart-sub--total'>
							<span className='cart-sub--total__new'>
								Total US $ 23.98
							</span>
							<span className='cart-sub--total__old'>
								US $ 192.98
							</span>
						</div>
						<div className='cart-button__pay'>
							<Button
								type='button'
								color='btn btn--btn-primary'
								size='full'>
								Go to shopping cart
							</Button>
						</div>
					</div>
				</div>
				<div className='header--navbar__cart-no_cart'>
					<p>Your basket is empty.</p>
					<Link className='no-cart__link' to='/'>
						Continue your purchase
					</Link>
				</div>
			</div>
		</>
	);
}

export default ShopingCart;
