import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCoursesByCategory } from "actions/CourseByCate";
import SubCategory from "./SubCategory";
import UdeCourses from "./UdeCourses";
function Courses() {
    const dispatch = useDispatch();
    const { category } = useParams();
    const { coursesByCate } = useSelector((state) => state.CoursesByCate);
    useEffect(() => {
        dispatch(getCoursesByCategory(category));
    }, [category]);
    console.log(category)
    return (
        <div>
            <SubCategory />
            <div className="container">
                <h1 className="courses-heading">Web development courses</h1>
            </div>
            <div className="container">
                <div className="ude-courses__heading">All courses in the category Web Development</div>
                <UdeCourses coursesByCate={coursesByCate}/>
            </div>
        </div>
    );
}

export default Courses;
