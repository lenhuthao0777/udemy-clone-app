import { addToCart } from "actions/Cart";
import React from "react";
import { BsFillExclamationOctagonFill } from "react-icons/bs";
import { FaClosedCaptioning, FaPlayCircle, FaRegHeart } from "react-icons/fa";
import { GiAlarmClock } from "react-icons/gi";
import { IoMdShareAlt, IoMdStar, IoMdStarHalf } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function TopInfo({ course }) {
  const dispatch = useDispatch();
  return (
    <div className="top-info">
      <div className="top-container">
        <div className="top-info__content">
          <div className="topic-menu">
            <h3>
              <Link to="/">Development</Link>
            </h3>
          </div>
          <div className="course-img">
            <img src={course.hinhAnh} alt="" />
            <span>
              <FaPlayCircle className="play-icon" />
              <p>Preview this course</p>
            </span>
          </div>
          <h1 className="title-heading">{course.tenKhoaHoc}</h1>
          <h3 className="title-text">{course.moTa}</h3>
          <div className="rating">
            <p>4.7</p>
            <IoMdStar className="icon-star" />
            <IoMdStar className="icon-star" />
            <IoMdStar className="icon-star" />
            <IoMdStar className="icon-star" />
            <IoMdStarHalf className="icon-starhaft" />
            <span>({course.luotXem} ratings)</span>
            <span>682,828 students</span>
          </div>
          <div className="authen">
            <span>Created by </span>
            <span>Colt Steele</span>
          </div>
          <div className="time">
            <div className="time-item">
              <BsFillExclamationOctagonFill className="icon-time" />
              <p>Last updated {course.ngayTao}</p>
            </div>
            <div className="time-item">
              <MdLanguage className="icon-language" />
              <p>English</p>
            </div>
            <div className="time-item">
              <FaClosedCaptioning className="icon-caption" />
              <p>English [Auto], French [Auto],</p>
              <button className="more">5 more</button>
            </div>
          </div>
          <div className="price">
            <span className="new-price">$89.99</span>
            <span className="old-price">$129.99</span>
            <span className="sale-off">86% off</span>
          </div>
          <div className="sale-day">
            <div className="sale-day__content">
              <GiAlarmClock />
              <p>1 day</p>
              <span>left at this price!</span>
            </div>
          </div>
          <div className="button-add">
            <button onClick={() => dispatch(addToCart(course))}>
              Add to cart
            </button>
          </div>
          <div className="day-purchase">
            <p>30-Day Money-Back Guarantee</p>
          </div>
          <div className="info-buttons">
            <div className="info-btn">
              <Link to="/">
                <button>
                  Wishlist
                  <FaRegHeart className="heart-icon" />
                </button>
              </Link>
            </div>
            <div className="info-btn">
              <Link to="/">
                <button>
                  Share
                  <IoMdShareAlt className="share-icon" />
                </button>
              </Link>
            </div>
            <div className="info-btn">
              <Link to="/">
                <button>Gift this course</button>
              </Link>
            </div>
            <div className="info-btn">
              <Link to="/">
                <button>Apply coupon</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopInfo;
