import React, { useState } from "react";

function CourseContentList({ item, showSection }) {
    const [subCourse, setSubCourse] = useState(false);
    const ShowDrop = () => {
        setSubCourse(!subCourse);
    };

    return (
        <div className={`course-content-list__item ${showSection === false ? "hidden" : ""}`}>
            <div className="course-content-list__item-content" onClick={item.subCourse && ShowDrop}>
                {subCourse === false ? <span className="icon-angle">{item.iconOpen}</span> : <span className="icon-angle">{item.iconClose}</span>}
                <h3>{item.title}</h3>
                <span className="time">
                    {item.hours} lectures • {item.minute} min
                </span>
            </div>
            <div className="course-content-list__item-dropdown">
                <ul>
                    {subCourse &&
                        item.subCourse.map((item) => {
                            return (
                                <li key={item.subId}>
                                    <span className="icon">{item.icon}</span>
                                    <h3>{item.subTitle}</h3>
                                    <span className="preview">{item.textPreview}</span>
                                    <span className="minute">{item.time}m</span>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
}

export default CourseContentList;
