import CourseItem from "components/courseItem/CourseItem";
import React, { useState } from "react";
import Slider from "react-slick";
import { FaAngleDown } from "react-icons/fa";

function TabCourseMobile({ courses }) {
  const [isOpen, setIsOpen] = useState(1);
  // const [toggle, setToggle] = useState(false);
  const BackEnd = courses.filter((e) => {
    return e.danhMucKhoaHoc.maDanhMucKhoahoc === "BackEnd";
  });
  const FrontEnd = courses.filter((e) => {
    return e.danhMucKhoaHoc.maDanhMucKhoahoc === "FrontEnd";
  });
  const Mobile = courses.filter((e) => {
    return e.danhMucKhoaHoc.maDanhMucKhoahoc === "DiDong";
  });
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <ul className="tabs-mobile__list">
      <li className="tabs-mobile__list-item" onClick={() => setIsOpen(1)}>
        <p className="tabs-mobile__list-item-text">
          FrontEnd <FaAngleDown className="down-icon" />
        </p>
        <div className={`courses ${isOpen === 1 ? "active" : ""}`}>
          <Slider {...settings}>
            {FrontEnd.map((item, index) => {
              return (
                <CourseItem
                  key={index}
                  clsName={"course-item"}
                  id={item.maKhoaHoc}
                  sale={`${(index + 1) % 2 === 0 ? "sale-active" : ""}`}
                  image={item.hinhAnh}
                  courseName={item.tenKhoaHoc}
                  author={item.moTa}
                  view={item.luotXem}
                  price={"129.99"}
                />
              );
            })}
          </Slider>
        </div>
      </li>
      <li className="tabs-mobile__list-item" onClick={() => setIsOpen(2)}>
        <p className="tabs-mobile__list-item-text">
          BackEnd <FaAngleDown className="down-icon" />
        </p>
        <div className={`courses ${isOpen === 2 ? "active" : ""}`}>
          <Slider {...settings}>
            {BackEnd.map((item, index) => {
              return (
                <CourseItem
                  key={index}
                  clsName={"course-item"}
                  id={item.maKhoaHoc}
                  sale={`${(index + 1) % 2 === 0 ? "sale-active" : ""}`}
                  image={item.hinhAnh}
                  courseName={item.tenKhoaHoc}
                  author={item.moTa}
                  view={item.luotXem}
                  price={"129.99"}
                />
              );
            })}
          </Slider>
        </div>
      </li>
      <li className="tabs-mobile__list-item" onClick={() => setIsOpen(3)}>
        <p className="tabs-mobile__list-item-text">
          Mobile Developer <FaAngleDown className="down-icon" />
        </p>
        <div className={`courses ${isOpen === 3 ? "active" : ""}`}>
          <Slider {...settings}>
            {Mobile.map((item, index) => {
              return (
                <CourseItem
                  key={index}
                  clsName={"course-item"}
                  id={item.maKhoaHoc}
                  sale={`${(index + 1) % 2 === 0 ? "sale-active" : ""}`}
                  image={item.hinhAnh}
                  courseName={item.tenKhoaHoc}
                  author={item.moTa}
                  view={item.luotXem}
                  price={"129.99"}
                />
              );
            })}
          </Slider>
        </div>
      </li>
    </ul>
  );
}

export default TabCourseMobile;
