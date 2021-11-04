import React, { useEffect, useState } from "react";
import coursesApi from "services/CoursesApi";
import Unit from "../components/Unit";

function UnitContainer() {
  const [data, setData] = useState([]);
  const getAllCourse = async () => {
    const { data } = await coursesApi.getCourses();
    setData(data);
  };
  useEffect(() => {
    getAllCourse();
  }, []);
  return <Unit data={data} />;
}

export default UnitContainer;
