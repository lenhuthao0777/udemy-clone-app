import React from "react";
import { FaAngleRight, FaClosedCaptioning, FaRegHeart, FaPlayCircle,FaRegPlayCircle } from "react-icons/fa";
import { IoMdStarHalf, IoMdStar, IoMdStarOutline, IoMdShareAlt } from "react-icons/io";
import { BsFillExclamationOctagonFill } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom";
function TopInfo() {
    return (
        <div className="top-info">
            <div className="container">
                <div className="top-info__content">
                    <div className="topic-menu">
                        <h3>
                            <Link to="/">Development</Link>
                        </h3>
                        <FaAngleRight className="topic-icon" />
                        <h3>
                            <Link to="/">Webdevelopment</Link>
                        </h3>
                    </div>
                    <div className="course-img">
                        <img src="./img/course1.jpg" alt="" />
                        <span>
                            <FaPlayCircle className="play-icon"/>
                        </span>
                    </div>
                    <h1 className="title-heading">The Web Developer Bootcamp 2021</h1>
                    <h3 className="title-text">COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!</h3>
                    <div className="rating">
                        <p>4.7</p>
                        <IoMdStar className="icon-star" />
                        <IoMdStar className="icon-star" />
                        <IoMdStar className="icon-star" />
                        <IoMdStar className="icon-star" />
                        <IoMdStarHalf className="icon-starhaft" />
                        <span>(206,826 ratings)</span>
                        <span>682,828 students</span>
                    </div>
                    <div className="authen">
                        <span>Created by </span>
                        <span>Colt Steele</span>
                    </div>
                    <div className="time">
                        <BsFillExclamationOctagonFill className="icon-time" />
                        <span>Last updated 5/2021</span>
                        <MdLanguage className="icon-language" />
                        <span>English</span>
                        <FaClosedCaptioning className="icon-caption" />
                        <span>English [Auto], French [Auto],</span>
                        <span className="more">5 more</span>
                    </div>
                    <div className="info-buttons">
                        <span>
                            <Link to="/">
                                <p>Wishlist</p>
                                <FaRegHeart />
                            </Link>
                        </span>
                        <span>
                            <Link to="/">
                                <p>Share</p>
                                <IoMdShareAlt />
                            </Link>
                        </span>
                        <span>
                            <Link to="/">
                                <p>Gift this course</p>
                            </Link>
                        </span>
                        <span>
                            <Link to="/">
                                <p>Apply coupon</p>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopInfo;
