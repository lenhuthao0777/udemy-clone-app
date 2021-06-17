import React from "react";
import CourseContent from "./CourseContent";
import Instructor from "./Instructor";
import TopInfo from "./TopInfo";
import WillLearn from "./WillLearn";
import Feedback from "./Feedback";

function Course() {
    console.log(window.innerWidth);
    return (
        <div className="course">
            <TopInfo />
            <WillLearn />
            <CourseContent />
            <Instructor />
            <Feedback />
        </div>
    );
}

export default Course;
