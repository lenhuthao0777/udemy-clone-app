import React from "react";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import CloseIcon from "@material-ui/icons/Close";
import UdeAvatar from "../avatar/index";
import { Link } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";
function NavBarMobile({ SideBar, setSideBar }) {
	return (
		<>
			<div className='header-navbar--mobile'>
				<div className={`side-bar ${SideBar ? "active" : ""}`}>
					<div
						className={`side-bar__button-click ${
							SideBar ? "active" : ""
						}`}
						onClick={() => setSideBar(false)}>
						<div className='side-bar__button-click-close'>
							<button>
								<GrFormClose className='close-icon' />
							</button>
						</div>
					</div>
					<div className='side-bar__menu'>
						<div className='side-bar__menu-profile'>
							<ul className='side-bar__menu-profile__list'>
								<li>
									<button>
										<div className='profile-img'>
											<UdeAvatar
												AvatarSrc={
													"https://i1.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?fit=1920%2C1920&ssl=1"
												}
												size='AvatarMd'
											/>
										</div>
										<div className='profile-user__name'>
											<p className='user-name'>
												Hello, Funny Cat
											</p>
											<p className='welcome'>Welcome</p>
										</div>
										<KeyboardArrowRightIcon className='iconRightProfile' />
									</button>
								</li>
							</ul>
						</div>
						<div className='side-bar__menu-heading'>
							<h3>Learn</h3>
						</div>
						<div className='side-bar__menu-learning'>
							<ul>
								<li>
									<Link to='/'>My learning</Link>
								</li>
							</ul>
						</div>
						{/* <ul className='side-bar__menu-list'>
								<li className='side-bar__menu-list--item'>
									Development
								</li>
							</ul> */}
					</div>
				</div>
				<div
					className={`side-bar__overlay ${SideBar ? "active" : ""}`}
					onClick={() => setSideBar(false)}></div>
			</div>
		</>
	);
}

export default NavBarMobile;
