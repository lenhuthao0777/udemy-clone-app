import { addToCart } from "actions/Cart";
import React, { useEffect, useState } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsCollectionPlay, BsDownload, BsFileEarmark, BsPhone, BsQuestionCircle } from "react-icons/bs";
import { CgInfinity } from "react-icons/cg";
import { GiRibbonMedal } from "react-icons/gi";
import { VscSymbolNamespace } from "react-icons/vsc";
import { useDispatch } from "react-redux";
function CourseSidebar({ course }) {
    const dispath = useDispatch();
    const [scrollSideBar, setScrollSideBar] = useState(false);
    useEffect(() => {
        const scrollSide = () => {
            if (window.scrollY >= 350) {
                setScrollSideBar(true);
            } else {
                setScrollSideBar(false);
            }
        };
        window.addEventListener("scroll", scrollSide);
        return () => window.removeEventListener("scroll", scrollSide);
    }, [scrollSideBar]);

    return (
        <div className={`course-sidebar ${scrollSideBar ? "srcoll" : ""}`}>
            <div className="course-sidebar-container">
                <div className="course-sidebar__content">
                    <div className="course-sidebar__img">
                        <img src={course.hinhAnh} alt="" />
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
                        <div className="course-sidebar__purchase-buttons">
                            <button className="course-sidebar__purchase-buttons-add" onClick={() => dispath(addToCart(course))}>
                                Add to cart
                            </button>
                            <button className="course-sidebar__purchase-buttons-buy">Buy now</button>
                            <span className="course-sidebar__purchase-buttons-text">30-Day Money-Back Guarantee</span>
                        </div>
                        <div className="course-sidebar__purchase-info">
                            <h3>This course includes</h3>
                            <p>
                                <BsCollectionPlay />
                                <span>29.5 hours on-demand video</span>
                            </p>
                            <p>
                                <BsFileEarmark />
                                <span>85 articles</span>
                            </p>
                            <p>
                                <BsDownload />
                                <span>42 downloadable resources</span>
                            </p>
                            <p>
                                <BsQuestionCircle />
                                <span>1 practice test</span>
                            </p>
                            <p>
                                <VscSymbolNamespace />
                                <span>70 coding exercises</span>
                            </p>
                            <p>
                                <CgInfinity />
                                <span>Full lifetime access</span>
                            </p>
                            <p>
                                <BsPhone />
                                <span> Access on mobile and TV</span>
                            </p>
                            <p>
                                <GiRibbonMedal />
                                <span>Certificate of completion</span>
                            </p>
                        </div>
                        <div className="course-sidebar__purchase-apply">
                            <button>Apply Coupon</button>
                        </div>
                    </div>
                    <div className="course-sidebar__traning">
                        <h3>Training 5 or more people?</h3>
                        <p>Get your team access to 5,500+ top Udemy courses anytime, anywhere.</p>
                        <button>Try Udemy for Business</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseSidebar;
