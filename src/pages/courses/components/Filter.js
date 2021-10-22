import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
function Filter({ ShowSidebar,data }) {
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState("Most Popular");
    const selectDropdown = [
        {
            id: 1,
            name: "Most Popular",
        },
        {
            id: 2,
            name: "Highest Rated",
        },
        {
            id: 3,
            name: "Newest",
        },
    ];
    const count = data.length;
    return (
        <div className="filter">
            <div className="filter-heading">
                <div className="filter-heading__buttons">
                    <button className="filter-btn" onClick={ShowSidebar}>
                        <BiMenuAltLeft className="filter-icon" />
                        <p>Filter</p>
                    </button>
                    <div
                        className="filter-select"
                        onClick={() => {
                            setIsActive(!isActive);
                        }}
                    >
                        <div className="filter-select__btn">
                            <p>{selected}</p>
                            <FaAngleDown />
                        </div>
                        {isActive && (
                            <div className="filter-select__dropdown">
                                <h3>Sort</h3>
                                {selectDropdown.map((item) => {
                                    return (
                                        <p key={item.id} onClick={() => setSelected(item.name)}>
                                            {item.name}
                                        </p>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
                <div className="filter-heading__result">
                    <span>({count}) result</span>
                </div>
            </div>
        </div>
    );
}

export default Filter;
