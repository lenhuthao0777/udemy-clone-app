import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
function Feedback() {
    return (
        <div className="feedback">
            <div className="feedback-container">
                <div className="feedback-content">
                    <div className="feedback-heading">
                        <h1>Student feedback</h1>
                    </div>
                    <div className="feedback-rating">
                        <div className="feedback-rating__average">
                            <p>4.7</p>
                            <div className="feedback-rating__icon">
                                <BsStarFill className="feedback-star" />
                                <BsStarFill className="feedback-star" />
                                <BsStarFill className="feedback-star" />
                                <BsStarFill className="feedback-star" />
                                <BsStarHalf className="feedback-star" />
                            </div>
                            <span>Course Rating</span>
                        </div>
                        <div className="feedback-rating__rates">
                            <ul>
                                <li>
                                    <button>
                                        <span className="feedback-gauge">
                                            <span className="feedback-gauge__percent"></span>
                                        </span>
                                    </button>
                                    <div className="rates-star">
                                        <BsStarFill className="rates-star-icon" />
                                        <BsStarFill className="rates-star-icon" />
                                        <BsStarFill className="rates-star-icon" />
                                        <BsStarFill className="rates-star-icon" />
                                        <BsStarHalf className="rates-star-icon" />
                                        <div className="percent">
                                            <p>66%</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button>
                                        <span className="feedback-gauge">
                                            <span className="feedback-gauge__percent"></span>
                                        </span>
                                    </button>
                                    <div className="rates-star">
                                        <BsStarFill className="rates-star-icon" />
                                        <BsStarFill className="rates-star-icon" />
                                        <BsStarFill className="rates-star-icon" />
                                        <BsStarHalf className="rates-star-icon" />
                                        <BsStar className="rates-star-icon" />
                                        <div className="percent">
                                            <p>43%</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button>
                                        <span className="feedback-gauge">
                                            <span className="feedback-gauge__percent"></span>
                                        </span>
                                    </button>
                                    <div className="rates-star">
                                        <BsStarFill className="rates-star-icon" />
                                        <BsStarFill className="rates-star-icon" />
                                        <BsStarFill className="rates-star-icon" />
                                        <BsStar className="rates-star-icon" />
                                        <BsStar className="rates-star-icon" />
                                        <div className="percent">
                                            <p>33%</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button>
                                        <span className="feedback-gauge">
                                            <span className="feedback-gauge__percent"></span>
                                        </span>
                                    </button>
                                    <div className="rates-star">
                                        <BsStarFill className="rates-star-icon" />
                                        <BsStarFill className="rates-star-icon" />
                                        <BsStar className="rates-star-icon" />
                                        <BsStar className="rates-star-icon" />
                                        <BsStar className="rates-star-icon" />
                                        <div className="percent">
                                            <p>15%</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button>
                                        <span className="feedback-gauge">
                                            <span className="feedback-gauge__percent"></span>
                                        </span>
                                    </button>
                                    <div className="rates-star">
                                        <BsStarFill className="rates-star-icon" />
                                        <BsStar className="rates-star-icon" />
                                        <BsStar className="rates-star-icon" />
                                        <BsStar className="rates-star-icon" />
                                        <BsStar className="rates-star-icon" />
                                        <div className="percent">
                                            <p>3%</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
