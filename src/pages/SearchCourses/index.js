import CourseItem from "components/courseItem/CourseItem";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Search } from "actions/Search";
function SearchCourses() {
    const dispath = useDispatch();
    const { searchData } = useSelector((state) => state.Search);
    const { name } = useParams();
    useEffect(() => {
        dispath(Search(name));
    }, [name]);
    return (
        <div className="search-courses">
            <div className="container">
                <div className="search-courses__heading">
                    <h1>
                        SEARCH -
                        <span className="tag">{`#${name}`}</span>
                    </h1>
                </div>
                <div className="search-courses__content">
                    {searchData.length > 0 ? (
                        searchData.map((item, key) => {
                            return (
                                <div className="search-courses__content--item" key={key}>
                                    <CourseItem
                                        clsName={"course-item"}
                                        id={item.maKhoaHoc}
                                        sale={`${(key + 1) % 2 === 0 ? "sale-active" : ""}`}
                                        image={item.hinhAnh}
                                        courseName={item.tenKhoaHoc}
                                        author={item.moTa}
                                        view={item.luotXem}
                                        price={"129.99"}
                                    />
                                    <div className="search-courses__content--item-button">
                                        <button>Add to cart</button>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="no-courses">
                            <h1>Courses Not Found :(( </h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SearchCourses;
