import React, { useEffect, useState } from "react";
import coursesApi from "services/CoursesApi";
import Unit from "../components/Unit";

function UnitContainer() {
  const [data, setData] = useState([]);
  const getAllCourse = async () => {
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
    setData(newData);
  };
  useEffect(() => {
    getAllCourse();
  }, []);
  return <Unit data={data} />;
}

export default UnitContainer;
