import { getCourses } from "actions/courses";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getCourses } from "../../actions/courses";
import BestCate from "./BestCate";
import Billboard from "./Billboard";
import ForBusiness from "./ForBusiness";
import HeadLine from "./HeadLine";
import NonStudent from "./NonStudent";
import OnBoarding from "./OnBoarding";
import Partner from "./Partner";
import TabCourseMobile from "./TabCourseMobile";
import TabCourses from "./TabCourses";
import TopicCate from "./TopicCate";
import Unit from "./Unit";
function Home() {
    const dispatch = useDispatch();
    const { courses } = useSelector((state) => state.courses);
    useEffect(() => {
        dispatch(getCourses());
    }, []);
    return (
        <div className="home">
            <Billboard />
            <HeadLine />
            <div className="tabs-pc">
                <TabCourses courses={courses} />
            </div>
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
