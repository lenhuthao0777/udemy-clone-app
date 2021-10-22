import React from "react";
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
function Course({course}) {
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
