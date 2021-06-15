import React, { useState } from "react";
import { AiOutlineFile } from "react-icons/ai";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function CourseContentList() {
    const [subCourse, setSubCourse] = useState(false);
    const courseList = [
        {
            id: 1,
            title: "Course Orientation",
            subCourse: [
                {
                    subId: 1,
                    subTitle: "",
                },
            ],
        },
    ];
    return (
        <div>
            <h1>list course</h1>
        </div>
    );
}

export default CourseContentList;
