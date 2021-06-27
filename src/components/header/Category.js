import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
function Category() {
    const cate = [
        {
            id: 1,
            title: "Development",
            subCate: [
                {
                    id: 1,
                    title: "Webdevelopment",
                    subCate: [
                        {
                            id: 1,
                            title: "FrontEnd",
                            key: "FrontEnd",
                        },
                        {
                            id: 2,
                            title: "BackEnd",
                            key: "BackEnd",
                        },
                        {
                            id: 3,
                            title: "Mobile",
                            key: "DiDong",
                        },
                    ],
                },
            ],
        },
    ];
    return (
        <>
            <div className="header--navbar__category">
                <span>Categories</span>
                <div className="header--navbar__category-submenu" style={{ transition: ".3s ease in" }}>
                    <ul className="header--navbar__category-submenu__list">
                        {cate.map((item) => {
                            return (
                                <li className="header--navbar__category-submenu__list-item" key={item.id}>
                                    <Link to="/">
                                        {item.title}
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
                                            {item.subCate.map((item1) => {
                                                return (
                                                    <li className="drop-right__list-item" key={item1.id}>
                                                        <Link
                                                            to="/"
                                                            style={{
                                                                textDecoration: "none",
                                                            }}
                                                        >
                                                            {item1.title}
                                                            <KeyboardArrowRightIcon className="angleRightIcon" />
                                                        </Link>
                                                        <div className="drop-right__2">
                                                            <h3 className="drop-right__2-heading">Popular Topics</h3>
                                                            <ul className="drop-right__2-list">
                                                                {item1.subCate.map((item2) => {
                                                                    return (
                                                                        <Link to={`/courses/${item2.key}`} key={item2.id}>
                                                                            <li className="drop-right__2-list-item">{item2.title}</li>
                                                                        </Link>
                                                                    );
                                                                })}
                                                            </ul>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Category;
