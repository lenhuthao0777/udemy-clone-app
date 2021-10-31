import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import coursesApi from "services/CoursesApi";
import Courses from "../components";

function CoursesContainer() {
  const [coursesDatas, setCoursesDatas] = useState([]);
  const { category } = useParams();
  const getCoursesByCategory = async (category) => {
    try {
      const { data } = await coursesApi.getCoursesByCategory(category);
      setCoursesDatas(data);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    getCoursesByCategory(category);
  }, [category]);
  return <Courses data={coursesDatas} />;
}

export default CoursesContainer;
