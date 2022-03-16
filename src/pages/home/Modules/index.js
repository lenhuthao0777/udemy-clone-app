import React from "react";
import BestCate from "./BestCate";
import Billboard from "./Billboard";
import ForBusiness from "./ForBusiness";
import HeadLine from "./HeadLine";
import NonStudent from "./NonStudent";
import OnBoarding from "./OnBoarding";
import Partner from "./Partner";
import TabCourses from "./Tabs";
import TabsMB from "./TabsMB";
import TopicCate from "./TopicCate";
import Unit from "./Unit";
function Home() {
  return (
    <div className="home">
      <Billboard />
      <HeadLine />
      <TabCourses />
      <TabsMB />
      <Unit />
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
