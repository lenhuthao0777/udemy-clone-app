import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import coursesApi from "services/CoursesApi";
import Home from "../components";

function HomeContainer() {
  const [courses, setCourses] = useState([]);
  const getAllData = async () => {
    try {
      const { data } = await coursesApi.getCourses();
      setCourses(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllData();
  }, []);
  return <Home courses={courses} />;
}

export default HomeContainer;
