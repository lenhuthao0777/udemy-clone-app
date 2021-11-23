import React from "react";
import coursesApi from "services/CoursesApi";
import CreateCourse from "../components/CreateCourse";

function CreateCourseContainer() {
  const hdAddCourse=(course)=>{
    coursesApi.addCourse(course)
  }
  return <CreateCourse hdAddCourse={hdAddCourse}/>;
}

export default CreateCourseContainer;
