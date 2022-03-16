import React from "react";
import avatar from "assets/images/avatar1.jpg";
import UdeAvatar from "components/avatar";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
function Comments() {
  return (
    <div className="comments-items">
      <div className="comments">
        <div className="comments-container">
          <div className="comments-content">
            <div className="comments-body">
              <div className="comments-img">
                <UdeAvatar size="AvatarMd" AvatarSrc={avatar} />
              </div>
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
                    As an beginner this course greatly helped me.I certainly
                    learnt all methods in Python and I have good confidence on
                    solving problems in python now.I will recommend this course
                    for students who wants to learn python for kickstart into
                    their programming career.
                  </p>
                  <span>Was this review helpful?</span>
                </div>
                <div className="comments-buttons">
                  <button>
                    <AiOutlineLike />
                  </button>
                  <button>
                    <AiOutlineDislike />
                  </button>
                  <span>Report</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="comments">
        <div className="comments-container">
          <div className="comments-content">
            <div className="comments-body">
              <div className="comments-img">
                <UdeAvatar size="AvatarMd" AvatarSrc={avatar} />
              </div>
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
                    As an beginner this course greatly helped me.I certainly
                    learnt all methods in Python and I have good confidence on
                    solving problems in python now.I will recommend this course
                    for students who wants to learn python for kickstart into
                    their programming career.
                  </p>
                  <span>Was this review helpful?</span>
                </div>
                <div className="comments-buttons">
                  <button>
                    <AiOutlineLike />
                  </button>
                  <button>
                    <AiOutlineDislike />
                  </button>
                  <span>Report</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="comments">
        <div className="comments-container">
          <div className="comments-content">
            <div className="comments-body">
              <div className="comments-img">
                <UdeAvatar size="AvatarMd" AvatarSrc={avatar} />
              </div>
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
                    As an beginner this course greatly helped me.I certainly
                    learnt all methods in Python and I have good confidence on
                    solving problems in python now.I will recommend this course
                    for students who wants to learn python for kickstart into
                    their programming career.
                  </p>
                  <span>Was this review helpful?</span>
                </div>
                <div className="comments-buttons">
                  <button>
                    <AiOutlineLike />
                  </button>
                  <button>
                    <AiOutlineDislike />
                  </button>
                  <span>Report</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="comments">
        <div className="comments-container">
          <div className="comments-content">
            <div className="comments-body">
              <div className="comments-img">
                <UdeAvatar size="AvatarMd" AvatarSrc={avatar} />
              </div>
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
                    As an beginner this course greatly helped me.I certainly
                    learnt all methods in Python and I have good confidence on
                    solving problems in python now.I will recommend this course
                    for students who wants to learn python for kickstart into
                    their programming career.
                  </p>
                  <span>Was this review helpful?</span>
                </div>
                <div className="comments-buttons">
                  <button>
                    <AiOutlineLike />
                  </button>
                  <button>
                    <AiOutlineDislike />
                  </button>
                  <span>Report</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
