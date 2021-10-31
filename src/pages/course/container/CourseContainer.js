import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import coursesApi from "services/CoursesApi";
import Course from "../components";

function CourseContainer() {
  const [course, setCourse] = useState({});
  const { id } = useParams();
  const getDataById = async (id) => {
    try {
      const { data } = await coursesApi.getCourseById(id);
      setCourse(data);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    getDataById(id);
  }, [id]);
  return <Course course={course} />;
}

export default CourseContainer;
