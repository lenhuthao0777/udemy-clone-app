import React from "react";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { BsHeart, BsCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
function FilterCoursesItem({ item }) {
    return (
        <div className="filter-courses-list__item">
            <Link to={`/course/${item.maKhoaHoc}`}>
                <div className="filter-courses-list__item-content">
                    <div className="filter-courses-list__img">
                        <img src={item.hinhAnh} alt="" />
                    </div>
                    <div className="filter-courses-list__info">
                        <h1 className="filter-courses-list__info-heading">{item.tenKhoaHoc}</h1>
                        <p className="filter-courses-list__info-name">{item.moTa}</p>
                        <p className="filter-courses-list__info-authen">Colt Steele</p>
                        <div className="filter-courses-list__info-rating">
                            <p>4.6</p>
                            <IoMdStar className="icon-rating" />
                            <IoMdStar className="icon-rating" />
                            <IoMdStar className="icon-rating" />
                            <IoMdStar className="icon-rating" />
                            <IoMdStarHalf className="icon-rating" />
                            <span>({item.luotXem})</span>
                        </div>
                        <div className="filter-courses-list__info-text">
                            <span>63 total hours</span>
                            <span>614 lectures</span>
                            <span>All Levels</span>
                        </div>
                        <div className="filter-courses-list__info-price-mobile">
                            <p className="new-price">$12.99</p>
                            <p className="old-price">$94.99</p>
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
            <div className="course-item__hover">
                <div className="course-item__hover--content">
                    <div className="course-item__hover--content-willlearn">
                        <h3>What you will learn</h3>
                        <ul>
                            <li><BsCheck/> Create a React.js app or site from A to Z.</li>
                            <li><BsCheck/> Create a React.js app or site from A to Z.</li>
                            <li><BsCheck/> Create a React.js app or site from A to Z.</li>
                        </ul>
                    </div>
                    <div className="course-item__hover--content-buttons">
                        <button>Add to cart</button>
                        <span>
                            <BsHeart />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterCoursesItem;
