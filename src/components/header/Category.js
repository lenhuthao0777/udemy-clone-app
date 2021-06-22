import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
function Category() {
    return (
        <>
            <div className="header--navbar__category">
                <span>Categories</span>
                <div className="header--navbar__category-submenu" style={{ transition: ".3s ease in" }}>
                    <ul className="header--navbar__category-submenu__list">
                        <li className="header--navbar__category-submenu__list-item">
                            <Link to="/">
                                Development
                                <KeyboardArrowRightIcon className="angleRightIcon" />
                            </Link>
                            <div className="drop-right">
                                <ul className="drop-right__list">
                                    <li className="drop-right__list-item">
                                        <Link
                                            to="/"
                                            style={{
                                                textDecoration: "none",
                                            }}
                                        >
                                            All Development
                                        </Link>
                                    </li>
                                    <li className="drop-right__list-item">
                                        <Link
                                            to="/"
                                            style={{
                                                textDecoration: "none",
                                            }}
                                        >
                                            Wed Development
                                            <KeyboardArrowRightIcon className="angleRightIcon" />
                                        </Link>
                                        <div className="drop-right__2">
                                            <h3 className="drop-right__2-heading">Popular Topics</h3>
                                            <ul className="drop-right__2-list">
                                                <li className="drop-right__2-list-item">Html & Css</li>
                                                <li className="drop-right__2-list-item">Vue Js</li>
                                                <li className="drop-right__2-list-item">React Js</li>
                                                <li className="drop-right__2-list-item">Node Js</li>
                                                <li className="drop-right__2-list-item">Java</li>
                                                <li className="drop-right__2-list-item">Python</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Category;
