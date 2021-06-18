import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BiTimer } from "react-icons/bi";
function CourseSidebar() {
    return (
        <div className="course-sidebar">
            <div className="course-sidebar-container">
                <div className="course-sidebar__content">
                    <div className="course-sidebar__img">
                        <img src="./img/course1.jpg" alt="" />
                        <div className="course-sidebar__img-overlay">
                            <span>
                                <AiOutlinePlayCircle />
                            </span>
                        </div>
                    </div>
                    <div className="course-sidebar__purchase">
                        <div className="course-sidebar__purchase-price">
                            <span className="course-sidebar__purchase-price-new">$89.00</span>
                            <span className="course-sidebar__purchase-price-old">$129.99</span>
                            <span className="course-sidebar__purchase-price-sale">15% off</span>
                        </div>
                        <div className="course-sidebar__purchase-time">
                            <span className="course-sidebar__purchase-time-icon">
                                <BiTimer />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseSidebar;
