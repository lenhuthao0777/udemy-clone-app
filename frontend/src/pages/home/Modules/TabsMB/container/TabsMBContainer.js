import React, { useEffect, useState } from "react";
import coursesApi from "services/CoursesApi";
import TabCourseMobile from "../components/TabCourseMobile";

function TabsMBContainer() {
  const [courses, setCourses] = useState([]);
  const getAllData = async () => {
    try {
      const data = await coursesApi.getCourses();
      const newData = data.map((item) => {
        return {
          slug: item.slug,
          category: item.category,
          thumbnail: item.thumbnail,
          rating: item.rating,
          id: item.id,
          description: item.description,
          title: item.title,
          price: item.price || 100,
        };
      });
      setCourses(newData);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    getAllData();
  }, []);
  return <TabCourseMobile courses={courses} />;
}

export default TabsMBContainer;
