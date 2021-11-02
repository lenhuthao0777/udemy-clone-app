import React from "react";
// import { getCourses } from "../../actions/courses";
import BestCate from "./BestCate";
import Billboard from "./Billboard";
import ForBusiness from "./ForBusiness";
import HeadLine from "./HeadLine";
import NonStudent from "./NonStudent";
import OnBoarding from "./OnBoarding";
import Partner from "./Partner";
import TabCourseMobile from "./TabCourseMobile";
import TabCourses from "./Tabs/components/TabCourses";
import TopicCate from "./TopicCate";
import Unit from "./Unit";
function Home({ courses }) {
  return (
    <div className="home">
      <Billboard />
      <HeadLine />
      <TabCourses />
      <div className="tabs-mobile">
        <TabCourseMobile courses={courses} />
      </div>
      <Unit courses={courses} />
      <OnBoarding />
      <BestCate />
      <TopicCate />
      <NonStudent />
      <Partner />
      <ForBusiness />
      {/* <Video /> */}
    </div>
  );
}

export default Home;
