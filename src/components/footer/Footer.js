import React from "react";
import { Link } from "react-router-dom";
function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-content'>
				<div className='footer-content__info'>
					<ul className='footer-info--list'>
						<li>
							<Link to='/' className='footer-bs'>
								Udemy for Business
							</Link>
						</li>
						<li>
							<Link to='/' className='footer-teach'>
								Teach on Udemy
							</Link>
						</li>
						<li>
							<Link to='/'>Udemy app</Link>
						</li>
						<li>
							<Link to='/'>About us</Link>
						</li>
						<li>
							<Link to='/'>Contact us</Link>
						</li>
					</ul>
					<ul className='footer-info--list'>
						<li>
							<Link to='/'>Careers</Link>
						</li>
						<li>
							<Link to='/'>Blog</Link>
						</li>
						<li>
							<Link to='/'>Help and Support</Link>
						</li>
						<li>
							<Link to='/'>Affiliate</Link>
						</li>
					</ul>
					<ul className='footer-info--list'>
						<li>
							<Link to='/'>Terms & Conditions</Link>
						</li>
						<li>
							<Link to='/'>Privacy Policy</Link>
						</li>
						<li>
							<Link to='/'>Sitemap</Link>
						</li>
						<li>
							<Link to='/'>Showing courses</Link>
						</li>
					</ul>
					<ul className='footer-info--list__mobile'>
						<li>
							<Link to='/'>About Udemy</Link>
						</li>
						<li>
							<Link to='/'>Contact us</Link>
						</li>
						<li>
							<Link to='/'>Terms & Conditions</Link>
						</li>
						<li>
							<Link to='/'>Privacy Policy</Link>
						</li>
						<li>
							<Link to='/'>Showing courses</Link>
						</li>
						<li>
							<Link to='/'>Blog</Link>
						</li>
						<li>
							<Link to='/'>Sitemap</Link>
						</li>
						<li>
							<Link to='/'>Download the app</Link>
						</li>
					</ul>
				</div>
				<div className='footer-content__dropdown'>
					<div className='footer-btn'>
						<button className='footer-btn--dropdown'>
							<span className='fa fa-globe-africa' />
							Language
							<span className='fa fa-angle-up' />
						</button>
					</div>
					{/* <div className='footer-btn--laguage'>
							<ul className='language-list'>
								<li className='laguage-item'>VietNam</li>
								<li className='laguage-item'>Englisgh</li>
								<li className='laguage-item'>Japan</li>
								<li className='laguage-item'>ThaiLand</li>
								<li className='laguage-item'>Korean</li>
								<li className='laguage-item'>Lao</li>
								<li className='laguage-item'>Chinese</li>
								<li className='laguage-item'>Chinese</li>
								<li className='laguage-item'>Chinese</li>
							</ul>
						</div> */}
				</div>
			</div>
			<div className='footer-bottom'>
				<div className='footer-bottom--list'>
					<div className='footer-bottom--list__item'>
						<img
							src='./img/logo-coral.svg'
							alt=''
							className='footer-img'
						/>
						<span className='footer-copy'>© 2021 Udemy, Inc.</span>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
