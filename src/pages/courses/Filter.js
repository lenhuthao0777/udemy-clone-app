import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
function Filter({ ShowSidebar }) {
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
    return (
        <div className="filter">
            <div className="filter-heading">
                <div className="filter-heading__buttons">
                    <button className="filter-btn" onClick={ShowSidebar}>
                        <BiMenuAltLeft className="filter-icon" />
                        <p>Filter</p>
                    </button>
                    {/* <ButtonFilterSelect className='filter-select'/> */}
                    <div className="filter-select">
                        <div className="filter-select__btn">
                            <p>Selected</p>
                            <FaAngleDown />
                        </div>
                        <div className="filter-select__dropdown">
                            <h3>Sort</h3>
                            {selectDropdown.map((item) => {
                                return <p key={item.id}>{item.name}</p>;
                            })}
                        </div>
                    </div>
                </div>
                <div className="filter-heading__result">
                    <span>432 result</span>
                </div>
            </div>
        </div>
    );
}

export default Filter;
