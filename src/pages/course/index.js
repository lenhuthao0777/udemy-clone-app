import React, { useState } from "react";
import CourseContent from "./CourseContent";
import Instructor from "./Instructor";
import TopInfo from "./TopInfo";
import WillLearn from "./WillLearn";
import Feedback from "./Feedback";
import Preview from "./Preview";
import Comments from "./Comments";
import CourseSidebar from "./CourseSidebar";
import NavbarScroll from "./NavbarScroll";

function Course() {
    
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
            <NavbarScroll/>
        </div>
    );
}

export default Course;
