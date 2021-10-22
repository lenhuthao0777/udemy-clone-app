import React, { useEffect, useState } from "react";
import CourseItem from "../courseItem/CourseItem";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
function Carousel({ callback = (src) => {}, courses }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(courses);
    }, [courses]);
    const next = () => {
        const newOrder = [];
        data.forEach((item, index) => {
            const newIndex = --index < 0 ? data.length - 1 : index;
            newOrder[newIndex] = item;
            if (newIndex === 1) {
                callback(item);
            }
        });
        setData(newOrder);
    };
    const prev = () => {
        const newOrder = [];
        data.forEach((item, index) => {
            const newIndex = ++index >= data.length ? 0 : index;
            newOrder[newIndex] = item;
            if (newIndex === 1) {
                callback(item);
            }
        });
        setData(newOrder);
    };
    return (
        <div className="slides">
            <div className="container">
                <div className="slide">
                    {data.map((item, index) => {
                        return (
                            <CourseItem
                                key={index}
                                clsName={"course-item"}
                                id={`item${index + 1}`}
                                sale={`${(index + 1) % 2 === 0 ? "sale-active" : ""}`}
                                image={item.hinhAnh}
                                courseName={item.tenKhoaHoc}
                                author={item.moTa}
                                view={item.luotXem}
                                price={"129.99"}
                            />
                        );
                    })}
                </div>
                <div className="btn btn-prev">
                    <button onClick={prev}>
                        <FaAngleLeft />
                    </button>
                </div>
                <div className="btn btn-next">
                    <button onClick={next}>
                        <FaAngleRight />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
