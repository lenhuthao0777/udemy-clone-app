import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
function Preview() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("All Ratings");
    const dropdown = [
        {
            id: 1,
            title: "All Ratings",
        },
        {
            id: 2,
            title: "Five Star",
        },
        {
            id: 3,
            title: "Four Star",
        },
        {
            id: 4,
            title: "Three Star",
        },
        {
            id: 5,
            title: "Two Star",
        },
        {
            id: 6,
            title: "One Star",
        },
    ];
    return (
        <div className="preview">
            <div className="preview-container">
                <div className="preview-content">
                    <div className="preview-heading">
                        <h1>Preview</h1>
                    </div>
                    <div className="preview-controls">
                        <form action="" className="preview-controls__form">
                            <input type="text" />
                            <button>
                                <AiOutlineSearch />
                            </button>
                        </form>
                        <div className="drop-menu" onClick={() => setIsOpen(!isOpen)}>
                            <button>
                                <span>{selected}</span>
                                <span>
                                    <FaAngleDown />
                                </span>
                            </button>
                            <div className={`drop-down ${isOpen ? "open" : ""}`}>
                                <ul>
                                    {dropdown.map((item) => {
                                        return (
                                            <li key={item.id} onClick={() => setSelected(item.title)}>
                                                {item.title}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Preview;
