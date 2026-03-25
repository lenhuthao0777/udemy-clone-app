import React from "react";
import Home from "../Modules";

function HomeContainer() {
  // const [courses, setCourses] = useState([]);
  // const getAllData = async () => {
  //   try {
  //     const { data } = await coursesApi.getCourses();
  //     const newData = data.map((item) => {
  //       return {
  //         slug: item.slug,
  //         category: item.category,
  //         thumbnail: item.thumbnail,
  //         rating: item.rating,
  //         id: item.id,
  //         description: item.description,
  //         title: item.title,
  //         price: (Math.random() * 200).toFixed(2),
  //       };
  //     });
  //     setCourses(newData);
  //   } catch (error) {
  //     return error;
  //   }
  // };
  // useEffect(() => {
  //   getAllData();
  // }, []);
  return <Home />;
}

export default HomeContainer;
