import React, { useState } from "react";
import { AiOutlineFile, AiFillPlayCircle } from "react-icons/ai";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function CourseContentList({ item }) {
    const [subCourse, setSubCourse] = useState(false);
    const ShowDrop = () => {
        setSubCourse(!subCourse);
    };

    return (
        <div className="course-content-list__item">
            <div className="course-content-list__item-content" onClick={item.subCourse && ShowDrop}>
                {subCourse == false ? <span>{item.iconOpen}</span> : <span>{item.iconClose}</span>}
                <h3>{item.title}</h3>
                <span>
                    {item.hours} lectures • {item.minute} min
                </span>
            </div>
            <div className="course-content-list__item-dropdown">
                <ul>
                    {subCourse &&
                        item.subCourse.map((item) => {
                            return (
                                <li key={item.subId}>
                                    <span>{item.icon}</span>
                                    <h3>{item.subTitle}</h3>
                                    <span>{item.textPreview}</span>
                                    <span>{item.time}m</span>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
}

export default CourseContentList;
