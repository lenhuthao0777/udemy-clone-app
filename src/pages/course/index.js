import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comments from "./Comments";
import CourseContent from "./CourseContent";
import CourseSidebar from "./CourseSidebar";
import Feedback from "./Feedback";
import Instructor from "./Instructor";
import NavbarScroll from "./NavbarScroll";
import Preview from "./Preview";
import SlideMenu from "./SlideMenu";
import TopInfo from "./TopInfo";
import WillLearn from "./WillLearn";
import { getCoursesById } from "actions/CourseDetail";
import { useParams } from "react-router-dom";
function Course() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { course } = useSelector((state) => state.Course);
    useEffect(() => {
        dispatch(getCoursesById(id));
    }, [id]);
    console.log(course);
    return (
        <div className="course">
            <TopInfo course={course} />
            <WillLearn />
            <CourseContent />
            <Instructor />
            <Feedback />
            <Preview />
            <div className="comments-items">
                <Comments />
                <Comments />
                <Comments />
            </div>
            <CourseSidebar course={course} />
            <NavbarScroll course={course} />
            <SlideMenu />
        </div>
    );
}

export default Course;
