import React from "react";
import { Link } from "react-router-dom";
function BestCate() {
	return (
		<div className='best-cate'>
			<div className='container'>
				<h1 className='best-cate__heading'>Best Categories</h1>
				<div className='best-cate__list'>
					<div className='best-cate__list-item'>
						<Link to='/design'>
							<img
								src='./img/ct1.jpg'
								alt=''
							/>
							<h3>Design</h3>
						</Link>
					</div>
					<div className='best-cate__list-item'>
						<Link to='/'>
							<img
								src='./img/ct2.jpg'
								alt=''
							/>
							<h3>Development</h3>
						</Link>
					</div>
					<div className='best-cate__list-item'>
						<Link to='/'>
							<img
								src='./img/ct3.jpg'
								alt=''
							/>
							<h3>Marketing</h3>
						</Link>
					</div>
					<div className='best-cate__list-item'>
						<Link to='/'>
							<img
								src='./img/ct4.jpg'
								alt=''
							/>
							<h3>IT and software</h3>
						</Link>
					</div>
					<div className='best-cate__list-item'>
						<Link to='/'>
							<img
								src='./img/ct5.jpg'
								alt=''
							/>
							<h3>Peronal development</h3>
						</Link>
					</div>
					<div className='best-cate__list-item'>
						<Link to='/'>
							<img
								src='./img/ct6.jpg'
								alt=''
							/>
							<h3>Business</h3>
						</Link>
					</div>
					<div className='best-cate__list-item'>
						<Link to='/'>
							<img
								src='./img/ct7.jpg'
								alt=''
							/>
							<h3>Photography</h3>
						</Link>
					</div>
					<div className='best-cate__list-item'>
						<Link to='/'>
							<img
								src='./img/ct8.jpg'
								alt=''
							/>
							<h3>Music</h3>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BestCate;
