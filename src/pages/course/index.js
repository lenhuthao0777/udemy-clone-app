import React from "react";
import CourseContent from "./CourseContent";
import Instructor from "./Instructor";
import TopInfo from "./TopInfo";
import WillLearn from "./WillLearn";
import Feedback from "./Feedback";
import Preview from "./Preview";
import Comments from "./Comments";
import CourseSidebar from "./CourseSidebar";

function Course() {
    console.log(window.innerWidth);
    return (
        <div className="course">
            <TopInfo />
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
            <CourseSidebar />
        </div>
    );
}

export default Course;
