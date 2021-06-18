import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

function CommentsItem() {
    return (
        <div className="comments-item">
            <h3 className="people-name">Kesav Kumar R</h3>
            <div className="rates">
                <BsStarFill className="comments-rate-icon" />
                <BsStarFill className="comments-rate-icon" />
                <BsStarFill className="comments-rate-icon" />
                <BsStarHalf className="comments-rate-icon" />
                <BsStar className="comments-rate-icon" />
                <p className="time">3 Weeks ago</p>
            </div>
            <div className="comments-text">
                <p>
                    As an beginner this course greatly helped me.I certainly learnt all methods in Python and I have good confidence on solving problems in python now.I will recommend this course for
                    students who wants to learn python for kickstart into their programming career.
                </p>
                <p>Was this review helpful?</p>
            </div>
            <div className="comments-buttons">
                <p>
                    <AiOutlineLike />
                </p>
                <p>
                    <AiOutlineDislike />
                </p>
                <span>Report</span>
            </div>
        </div>
    );
}

export default CommentsItem;
