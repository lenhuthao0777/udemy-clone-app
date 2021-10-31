import React from "react";
import Slider from "react-slick";
import CourseItem from "components/courseItem/CourseItem";
function Unit({ courses }) {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
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
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="unit">
      <div className="container">
        <div className="unit-content">
          <h1 className="unit-content__heading">Participants consult</h1>
          <div className="carousels">
            <Slider {...settings}>
              {courses.map((item, index) => {
                return (
                  <div key={index}>
                    <CourseItem
                      clsName={"course-item"}
                      id={item.maKhoaHoc}
                      sale={`${(index + 1) % 2 === 0 ? "sale-active" : ""}`}
                      image={item.hinhAnh}
                      courseName={item.tenKhoaHoc}
                      author={item.moTa}
                      view={item.luotXem}
                      price={item.price}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unit;
