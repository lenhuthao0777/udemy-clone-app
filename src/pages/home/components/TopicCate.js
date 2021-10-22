import { Button } from "component/button";
import React from "react";
import { Link } from "react-router-dom";

function TopicCate() {
	return (
		<div className='topic-cate'>
			<div className='container'>
				<h1 className='topic-cate__heading'>
					Featured topics by category
				</h1>
				<div className='topic-cate__list'>
					<div className='topic-cate__list-item'>
						<h1>Development</h1>
						<ul>
							<li>
								<Link to='/'>
									<p>Python</p>
									<span>26,000,000 participants</span>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<p>Webdevelopment</p>
									<span>1,000,000 participants</span>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<p>Machine learnig</p>
									<span>22,000,000 participants</span>
								</Link>
							</li>
						</ul>
					</div>
					<div className='topic-cate__list-item'>
						<h1>Business</h1>
						<ul>
							<li>
								<Link to='/'>
									<p>Financial analysis</p>
									<span>17,000,000 participants</span>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<p>SQL</p>
									<span>11,000,000 participants</span>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<p>PMP</p>
									<span>6,000,000 participants</span>
								</Link>
							</li>
						</ul>
					</div>
					<div className='topic-cate__list-item'>
						<h1>IT and software</h1>
						<ul>
							<li>
								<Link to='/'>
									<p>AWS Certification</p>
									<span>2,000,000 participants</span>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<p>Ethical hacking</p>
									<span>8,000,000 participants</span>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<p>Cybersecurity</p>
									<span>7,000,000 participants</span>
								</Link>
							</li>
						</ul>
					</div>
					<div className='topic-cate__list-item'>
						<h1>Design</h1>
						<ul>
							<li>
								<Link to='/'>
									<p>PhotoShop</p>
									<span>8,600,000 participants</span>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<p>Graphic design</p>
									<span>2,667,000 participants</span>
								</Link>
							</li>
							<li>
								<Link to='/'>
									<p>Drawing</p>
									<span>2,080,000 participants</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<Button size='md' color='btn btn--primary'>
					Explore more
				</Button>
			</div>
		</div>
	);
}

export default TopicCate;
