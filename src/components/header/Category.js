import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
function Category() {
	return (
		<>
			<div className='header--navbar__category'>
				<span>Categories</span>
				<div
					className='header--navbar__category-submenu'
					style={{ transition: ".3s ease in" }}>
					<ul className='header--navbar__category-submenu__list'>
						<li className='header--navbar__category-submenu__list-item'>
							<Link to='/'>
								Development
								<KeyboardArrowRightIcon className='angleRightIcon' />
							</Link>
							<div className='drop-right'>
								<ul className='drop-right__list'>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All Development
										</Link>
									</li>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											Wed Development
											<KeyboardArrowRightIcon className='angleRightIcon' />
										</Link>
										<div className='drop-right__2'>
											<h3 className='drop-right__2-heading'>
												Popular Topics
											</h3>
											<ul className='drop-right__2-list'>
												<li className='drop-right__2-list-item'>
													Html & Css
												</li>
												<li className='drop-right__2-list-item'>
													Vue Js
												</li>
												<li className='drop-right__2-list-item'>
													React Js
												</li>
												<li className='drop-right__2-list-item'>
													Node Js
												</li>
												<li className='drop-right__2-list-item'>
													Java
												</li>
												<li className='drop-right__2-list-item'>
													Python
												</li>
											</ul>
										</div>
									</li>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											Data Science
											<KeyboardArrowRightIcon className='angleRightIcon' />
										</Link>
										<div className='drop-right__2'>
											<h3 className='drop-right__2-heading'>
												Popular Topics
											</h3>
											<ul className='drop-right__2-list'>
												<li className='drop-right__2-list-item'>
													All Data Science
												</li>
												<li className='drop-right__2-list-item'>
													Python
												</li>
												<li className='drop-right__2-list-item'>
													Machine Learning
												</li>
												<li className='drop-right__2-list-item'>
													Deep Learning
												</li>
												<li className='drop-right__2-list-item'>
													Data Analysis
												</li>
												<li className='drop-right__2-list-item'>
													Artificial Intelligence
												</li>
												<li className='drop-right__2-list-item'>
													R
												</li>
												<li className='drop-right__2-list-item'>
													Popular topics
												</li>
												<li className='drop-right__2-list-item'>
													TensorFlow
												</li>
											</ul>
										</div>
									</li>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											Mobile Development
											<KeyboardArrowRightIcon className='angleRightIcon' />
										</Link>
										<div className='drop-right__2'>
											<h3 className='drop-right__2-heading'>
												Popular Topics
											</h3>
											<ul className='drop-right__2-list'>
												<li className='drop-right__2-list-item'>
													All Mobile Development
												</li>
												<li className='drop-right__2-list-item'>
													Google Flutter
												</li>
												<li className='drop-right__2-list-item'>
													Android Development
												</li>
												<li className='drop-right__2-list-item'>
													IOS Development
												</li>
												<li className='drop-right__2-list-item'>
													React Native
												</li>
												<li className='drop-right__2-list-item'>
													Swift
												</li>
												<li className='drop-right__2-list-item'>
													Dart Programming Language
												</li>
												<li className='drop-right__2-list-item'>
													Kotlin
												</li>
												<li className='drop-right__2-list-item'>
													SwiftUI
												</li>
											</ul>
										</div>
									</li>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											Programming Languages
											<KeyboardArrowRightIcon className='angleRightIcon' />
										</Link>
										<div className='drop-right__2'>
											<h3 className='drop-right__2-heading'>
												Popular Topics
											</h3>
											<ul className='drop-right__2-list'>
												<li className='drop-right__2-list-item'>
													Java
												</li>
												<li className='drop-right__2-list-item'>
													JavaScript
												</li>
												<li className='drop-right__2-list-item'>
													C#
												</li>
												<li className='drop-right__2-list-item'>
													C++
												</li>
												<li className='drop-right__2-list-item'>
													Php
												</li>
												<li className='drop-right__2-list-item'>
													Python
												</li>
												<li className='drop-right__2-list-item'>
													Spring Famework
												</li>
												<li className='drop-right__2-list-item'>
													Go Progamming Language
												</li>
											</ul>
										</div>
									</li>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											Game Development
											<KeyboardArrowRightIcon className='angleRightIcon' />
										</Link>
										<div className='drop-right__2'>
											<h3 className='drop-right__2-heading'>
												Popular Topics
											</h3>
											<ul className='drop-right__2-list'>
												<li className='drop-right__2-list-item'>
													Css
												</li>
											</ul>
										</div>
									</li>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											Database Design & Development
											<KeyboardArrowRightIcon className='angleRightIcon' />
										</Link>
										<div className='drop-right__2'>
											<h3 className='drop-right__2-heading'>
												Popular Topics
											</h3>
											<ul className='drop-right__2-list'>
												<li className='drop-right__2-list-item'>
													Css
												</li>
											</ul>
										</div>
									</li>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											Software Testing
											<KeyboardArrowRightIcon className='angleRightIcon' />
										</Link>
										<div className='drop-right__2'>
											<h3 className='drop-right__2-heading'>
												Popular Topics
											</h3>
											<ul className='drop-right__2-list'>
												<li className='drop-right__2-list-item'>
													Css
												</li>
											</ul>
										</div>
									</li>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											Software Engineering
											<KeyboardArrowRightIcon className='angleRightIcon' />
										</Link>
										<div className='drop-right__2'>
											<h3 className='drop-right__2-heading'>
												Popular Topics
											</h3>
											<ul className='drop-right__2-list'>
												<li className='drop-right__2-list-item'>
													Css
												</li>
											</ul>
										</div>
									</li>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All
											<KeyboardArrowRightIcon className='angleRightIcon' />
										</Link>
										<div className='drop-right__2'>
											<h3 className='drop-right__2-heading'>
												Popular Topics
											</h3>
											<ul className='drop-right__2-list'>
												<li className='drop-right__2-list-item'>
													Css
												</li>
											</ul>
										</div>
									</li>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											Development Tools
											<KeyboardArrowRightIcon className='angleRightIcon' />
										</Link>
										<div className='drop-right__2'>
											<h3 className='drop-right__2-heading'>
												Popular Topics
											</h3>
											<ul className='drop-right__2-list'>
												<li className='drop-right__2-list-item'>
													Css
												</li>
											</ul>
										</div>
									</li>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											No-Code Development
											<KeyboardArrowRightIcon className='angleRightIcon' />
										</Link>
										<div className='drop-right__2'>
											<h3 className='drop-right__2-heading'>
												Popular Topics
											</h3>
											<ul className='drop-right__2-list'>
												<li className='drop-right__2-list-item'>
													Css
												</li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li className='header--navbar__category-submenu__list-item'>
							<Link to='/'>
								Business
								<KeyboardArrowRightIcon className='angleRightIcon' />
							</Link>
							<div className='drop-right'>
								<ul className='drop-right__list'>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All Business
										</Link>
									</li>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All
											<KeyboardArrowRightIcon className='angleRightIcon' />
										</Link>
										<div className='drop-right__2'>
											<h3 className='drop-right__2-heading'>
												Popular Topics
											</h3>
											<ul className='drop-right__2-list'>
												<li className='drop-right__2-list-item'>
													Css
												</li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li className='header--navbar__category-submenu__list-item'>
							<Link to='/'>
								Finance & Accounting Courses
								<KeyboardArrowRightIcon className='angleRightIcon' />
							</Link>
							<div className='drop-right'>
								<ul className='drop-right__list'>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All Finance & Accounting Courses
										</Link>
									</li>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All
											<KeyboardArrowRightIcon className='angleRightIcon' />
										</Link>
										<div className='drop-right__2'>
											<h3 className='drop-right__2-heading'>
												Popular Topics
											</h3>
											<ul className='drop-right__2-list'>
												<li className='drop-right__2-list-item'>
													Css
												</li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li className='header--navbar__category-submenu__list-item'>
							<Link to='/'>
								IT & Software
								<KeyboardArrowRightIcon className='angleRightIcon' />
							</Link>
							<div className='drop-right'>
								<ul className='drop-right__list'>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All Business
										</Link>
									</li>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All
											<KeyboardArrowRightIcon className='angleRightIcon' />
										</Link>
										<div className='drop-right__2'>
											<h3 className='drop-right__2-heading'>
												Popular Topics
											</h3>
											<ul className='drop-right__2-list'>
												<li className='drop-right__2-list-item'>
													Css
												</li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li className='header--navbar__category-submenu__list-item'>
							<Link to='/'>
								Office Productivity
								<KeyboardArrowRightIcon className='angleRightIcon' />
							</Link>
							<div className='drop-right'>
								<ul className='drop-right__list'>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All Business
										</Link>
									</li>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All
											<KeyboardArrowRightIcon className='angleRightIcon' />
										</Link>
										<div className='drop-right__2'>
											<h3 className='drop-right__2-heading'>
												Popular Topics
											</h3>
											<ul className='drop-right__2-list'>
												<li className='drop-right__2-list-item'>
													Css
												</li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li className='header--navbar__category-submenu__list-item'>
							<Link to='/'>
								Personal Development
								<KeyboardArrowRightIcon className='angleRightIcon' />
							</Link>
							<div className='drop-right'>
								<ul className='drop-right__list'>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All Business
										</Link>
									</li>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All
											<KeyboardArrowRightIcon className='angleRightIcon' />
										</Link>
										<div className='drop-right__2'>
											<h3 className='drop-right__2-heading'>
												Popular Topics
											</h3>
											<ul className='drop-right__2-list'>
												<li className='drop-right__2-list-item'>
													Css
												</li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li className='header--navbar__category-submenu__list-item'>
							<Link to='/'>
								Design
								<KeyboardArrowRightIcon className='angleRightIcon' />
							</Link>
							<div className='drop-right'>
								<ul className='drop-right__list'>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All Business
										</Link>
									</li>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All
											<KeyboardArrowRightIcon className='angleRightIcon' />
										</Link>
										<div className='drop-right__2'>
											<h3 className='drop-right__2-heading'>
												Popular Topics
											</h3>
											<ul className='drop-right__2-list'>
												<li className='drop-right__2-list-item'>
													Css
												</li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li className='header--navbar__category-submenu__list-item'>
							<Link to='/'>
								Marketing
								<KeyboardArrowRightIcon className='angleRightIcon' />
							</Link>
							<div className='drop-right'>
								<ul className='drop-right__list'>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All Business
										</Link>
									</li>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All
											<KeyboardArrowRightIcon className='angleRightIcon' />
										</Link>
										<div className='drop-right__2'>
											<h3 className='drop-right__2-heading'>
												Popular Topics
											</h3>
											<ul className='drop-right__2-list'>
												<li className='drop-right__2-list-item'>
													Css
												</li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li className='header--navbar__category-submenu__list-item'>
							<Link to='/'>
								Lifestyle
								<KeyboardArrowRightIcon className='angleRightIcon' />
							</Link>
							<div className='drop-right'>
								<ul className='drop-right__list'>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All Business
										</Link>
									</li>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All
											<KeyboardArrowRightIcon className='angleRightIcon' />
										</Link>
										<div className='drop-right__2'>
											<h3 className='drop-right__2-heading'>
												Popular Topics
											</h3>
											<ul className='drop-right__2-list'>
												<li className='drop-right__2-list-item'>
													Css
												</li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li className='header--navbar__category-submenu__list-item'>
							<Link to='/'>
								Photography & Video
								<KeyboardArrowRightIcon className='angleRightIcon' />
							</Link>
							<div className='drop-right'>
								<ul className='drop-right__list'>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All Business
										</Link>
									</li>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All
											<KeyboardArrowRightIcon className='angleRightIcon' />
										</Link>
										<div className='drop-right__2'>
											<h3 className='drop-right__2-heading'>
												Popular Topics
											</h3>
											<ul className='drop-right__2-list'>
												<li className='drop-right__2-list-item'>
													Css
												</li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li className='header--navbar__category-submenu__list-item'>
							<Link to='/'>
								Health & Fitness
								<KeyboardArrowRightIcon className='angleRightIcon' />
							</Link>
							<div className='drop-right'>
								<ul className='drop-right__list'>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All Business
										</Link>
									</li>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All
											<KeyboardArrowRightIcon className='angleRightIcon' />
										</Link>
										<div className='drop-right__2'>
											<h3 className='drop-right__2-heading'>
												Popular Topics
											</h3>
											<ul className='drop-right__2-list'>
												<li className='drop-right__2-list-item'>
													Css
												</li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li className='header--navbar__category-submenu__list-item'>
							<Link to='/'>
								Music
								<KeyboardArrowRightIcon className='angleRightIcon' />
							</Link>
							<div className='drop-right'>
								<ul className='drop-right__list'>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All Business
										</Link>
									</li>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All
											<KeyboardArrowRightIcon className='angleRightIcon' />
										</Link>
										<div className='drop-right__2'>
											<h3 className='drop-right__2-heading'>
												Popular Topics
											</h3>
											<ul className='drop-right__2-list'>
												<li className='drop-right__2-list-item'>
													Css
												</li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</li>
						<li className='header--navbar__category-submenu__list-item'>
							<Link to='/'>
								Teaching & Academics
								<KeyboardArrowRightIcon className='angleRightIcon' />
							</Link>
							<div className='drop-right'>
								<ul className='drop-right__list'>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All Business
										</Link>
									</li>
									<li className='drop-right__list-item'>
										<Link
											to='/'
											style={{
												textDecoration: "none",
											}}>
											All
											<KeyboardArrowRightIcon className='angleRightIcon' />
										</Link>
										<div className='drop-right__2'>
											<h3 className='drop-right__2-heading'>
												Popular Topics
											</h3>
											<ul className='drop-right__2-list'>
												<li className='drop-right__2-list-item'>
													Css
												</li>
											</ul>
										</div>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Category;
