import React from "react";
import CourseContentList from './CourseContentList'
function CourseContent() {
    return (
        <div className="course-content">
            <div className="course-content__container">
                <div className="course-content__body">
                    <h1 className="course-content__heading">Course Content</h1>
                    <div className="course-content__subheader">
                        <span>60 sections</span>
                        <span> • 614 lectures</span>
                        <span> • 63h 12m total length</span>
                    </div>
                    <CourseContentList />
                </div>
            </div>
        </div>
    );
}

export default CourseContent;
