import React from "react";
import Courses from "pages/courses/components";
import { useParams } from "react-router";
import coursesApi from "services/CoursesApi";
import { useState } from "react";
import { useEffect } from "react";
import CoursesEmpty from "../components/CoursesEmpty";
function SearchCourseContainer() {
  const [searchCourses, setSearchCourses] = useState([]);
  const { courseName } = useParams();
  const handleSearchCourse = async (courseName) => {
    try {
      const { data } = await coursesApi.searchCourse(courseName);
      setSearchCourses(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleSearchCourse(courseName);
  }, [courseName]);
  return (
    <>
      {searchCourses.length > 0 ? (
        <Courses data={searchCourses} />
      ) : (
        <CoursesEmpty courseName={courseName} />
      )}
    </>
  );
}

export default SearchCourseContainer;
