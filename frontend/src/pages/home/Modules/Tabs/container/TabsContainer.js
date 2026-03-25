import React, { useState } from "react";
import coursesApi from "services/CoursesApi";
import TabCourses from "../components/TabCourses";

function TabsContainer() {
  const [courses, setCourses] = useState([]);

  const getDataByCate = async (category) => {
    const data = await coursesApi.getCoursesByCategory(category);
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
  };

  return <TabCourses cb={getDataByCate} courses={courses} />;
}

export default TabsContainer;
