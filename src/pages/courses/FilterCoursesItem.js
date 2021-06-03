import React from "react";
import { Link } from "react-router-dom";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
function FilterCoursesItem() {
    return (
        <div className="filter-courses-list__item">
            <Link to="/">
                <div className="filter-courses-list__item-content">
                    <div className="filter-courses-list__img">
                        <img
                            src="https://img-b.udemycdn.com/course/240x135/625204_436a_3.jpg?secure=boTjIK-qj0mbouOGz1oQ_w%3D%3D%2C1622703902"
                            alt=""
                        />
                    </div>
                    <div className="filter-courses-list__info">
                        <h1 className="filter-courses-list__info-heading">
                            The website bootcamp 2021
                        </h1>
                        <p className="filter-courses-list__info-name">
                            COMPLETELY REDONE - The only course you need to learn web development -
                            HTML, CSS, JS, Node, and More!
                        </p>
                        <p className="filter-courses-list__info-authen">Colt Steele</p>
                        <div className="filter-courses-list__info-rating">
                            <p>4.6</p>
                            <IoMdStar className="icon-rating" />
                            <IoMdStar className="icon-rating" />
                            <IoMdStar className="icon-rating" />
                            <IoMdStar className="icon-rating" />
                            <IoMdStarHalf className="icon-rating" />
                            <span>(205,656)</span>
                        </div>
                        <div className="filter-courses-list__info-text">
                            <span>63 total hours</span>
                            <span>614 lectures</span>
                            <span>All Levels</span>
                        </div>
                        <div className="filter-courses-list__info-bestseller">
                            <p>Bestseller</p>
                        </div>
                        <div className="filter-courses-list__info-price">
                            <p className="new-price">$12.99</p>
                            <p className="old-price">$94.99</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default FilterCoursesItem;
