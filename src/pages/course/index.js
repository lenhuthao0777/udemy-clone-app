import React from "react";
import TopInfo from "./TopInfo";
import WillLearn from "./WillLearn";

function Course() {
    console.log(window.innerWidth);
    return (
        <div className="course">
            <TopInfo />
            <WillLearn />
        </div>
    );
}

export default Course;
