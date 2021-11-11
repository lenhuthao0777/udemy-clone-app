import avatar from "assets/images/avatar1.jpg";
import UdeAvatar from "components/avatar/index";
import { Button } from "components/button";
import CourseItem from "components/courseItem/CourseItem";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
function TabCourses({ courses, cb }) {
  const [toggleState, setToggleState] = useState(1);
  const [cate, setCate] = useState("FrontEnd");
  const handelTabs = (state, key) => {
    setToggleState(state);
    setCate(key);
  };
  useEffect(() => {
    cb(cate);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cate]);
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
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
  const tabs = [
    {
      id: 1,
      title: "Front End",
      key: "FrontEnd",
    },
    {
      id: 2,
      title: "Back End",
      key: "BackEnd",
    },
    {
      id: 3,
      title: "Mobile Developer",
      key: "DiDong",
    },
  ];
  return (
    <div className="tabs-pc">
      <div className="container">
        <div className="tabs-courses">
          <header className="tabs-courses__list">
            {tabs.map((item) => {
              return (
                <div
                  className={`tab ${toggleState === item.id ? "active" : ""}`}
                  onClick={() => handelTabs(item.id, item.key)}
                  key={item.id}
                >
                  <span>{item.title}</span>
                </div>
              );
            })}
          </header>
          <div className="tabs-courses__content">
            <div className={`content ${toggleState === 1 ? "active" : ""}`}>
              <div className="headshot-banner">
                <div className="headshot-banner__content">
                  <h1>Develop your career opportunities with Python</h1>
                  <p>
                    Whether you work in machine learning or finance, web
                    development or data science, the Python language is one of
                    the most important skills to learn. Python's simple syntax
                    is particularly suitable for office, web, and commercial
                    applications.
                  </p>
                  <Button size="md" color="btn--btn-outline">
                    Discover Python
                  </Button>
                </div>
                <div className="headshot-banner__avatar">
                  <UdeAvatar AvatarSrc={avatar} size="AvatarLg" />
                </div>
              </div>
              <div className="carousels">
                <Slider {...settings}>
                  {courses.map((item, index) => {
                    return (
                      <div key={index}>
                        <CourseItem
                          clsName={"course-item"}
                          link={item.maKhoaHoc}
                          id={`item${index + 1}`}
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
            <div className={`content ${toggleState === 2 ? "active" : ""}`}>
              <div className="headshot-banner">
                <div className="headshot-banner__content">
                  <h1>Develop your career opportunities with Python</h1>
                  <p>
                    Whether you work in machine learning or finance, web
                    development or data science, the Python language is one of
                    the most important skills to learn. Python's simple syntax
                    is particularly suitable for office, web, and commercial
                    applications.
                  </p>
                  <Button size="md" color="btn--btn-outline">
                    Discover Python
                  </Button>
                </div>
                <div className="headshot-banner__avatar">
                  <UdeAvatar AvatarSrc={avatar} size="AvatarLg" />
                </div>
              </div>
              <div className="carousels">
                <Slider {...settings}>
                  {courses.map((item, index) => {
                    return (
                      <CourseItem
                        key={index}
                        clsName={"course-item"}
                        link={item.maKhoaHoc}
                        id={`item${index + 1}`}
                        sale={`${(index + 1) % 2 === 0 ? "sale-active" : ""}`}
                        image={item.hinhAnh}
                        courseName={item.tenKhoaHoc}
                        author={item.moTa}
                        view={item.luotXem}
                        price={item.price}
                      />
                    );
                  })}
                </Slider>
              </div>
            </div>
            <div className={`content ${toggleState === 3 ? "active" : ""}`}>
              <div className="headshot-banner">
                <div className="headshot-banner__content">
                  <h1>Develop your career opportunities with Python</h1>
                  <p>
                    Whether you work in machine learning or finance, web
                    development or data science, the Python language is one of
                    the most important skills to learn. Python's simple syntax
                    is particularly suitable for office, web, and commercial
                    applications.
                  </p>
                  <Button size="md" color="btn--btn-outline">
                    Discover Python
                  </Button>
                </div>
                <div className="headshot-banner__avatar">
                  <UdeAvatar AvatarSrc={avatar} size="AvatarLg" />
                </div>
              </div>
              <div className="carousels">
                <Slider {...settings}>
                  {courses.map((item, index) => {
                    return (
                      <CourseItem
                        key={index}
                        clsName={"course-item"}
                        link={item.maKhoaHoc}
                        id={`item${index + 1}`}
                        sale={`${(index + 1) % 2 === 0 ? "sale-active" : ""}`}
                        image={item.hinhAnh}
                        courseName={item.tenKhoaHoc}
                        author={item.moTa}
                        view={item.luotXem}
                        price={item.price}
                      />
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabCourses;
