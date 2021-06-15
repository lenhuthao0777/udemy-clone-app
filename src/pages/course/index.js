import React from "react";
import CourseContent from "./CourseContent";
import TopInfo from "./TopInfo";
import WillLearn from "./WillLearn";

function Course() {
    console.log(window.innerWidth);
    return (
        <div className="course">
            <TopInfo />
            <WillLearn />
            <CourseContent />
        </div>
    );
}

export default Course;
