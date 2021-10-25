import React from "react";
import SubCategory from "./SubCategory";
import UdeCourses from "./UdeCourses";
function Courses({ data }) {
  return (
    <div>
      <SubCategory />
      <div className="container">
        <h1 className="courses-heading">Web development courses</h1>
      </div>
      <div className="container">
        <div className="ude-courses__heading">
          All courses in the category Web Development
        </div>
        <UdeCourses data={data} />
      </div>
    </div>
  );
}

export default Courses;
