import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { IoMdStarHalf, IoMdStar, IoMdStarOutline } from "react-icons/io";
function TopInfo() {
    return (
        <div className="top-info">
            <div className="container">
                <div className="top-info__content">
                    <div className="topic-menu">
                        <h3>Development</h3>
                        <FaAngleRight />
                        <h3>Webdevelopment</h3>
                    </div>
                    <h1 className="title-heading">The Web Developer Bootcamp 2021</h1>
                    <h3 className="title-text">COMPLETELY REDONE - The only course you need to learn web development - HTML, CSS, JS, Node, and More!</h3>
                    <div className="rating">
                        <span>4.7</span>
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStarHalf />
                        <span>(206,826 ratings)</span>
                        <span>682,828 students</span>
                    </div>
                    <div className="authen">
                        <span>Created by</span>
                        <span>Colt Steele</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopInfo;
