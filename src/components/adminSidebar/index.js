import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { VscOutput } from "react-icons/vsc";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
function AdminSidebar({ showSideBar, setShowSideBar }) {
    return (
        <div className={`admin-sidebar ${showSideBar ? "closed" : ""}`}>
            <div className="admin-sidebar__content">
                <div className="admin-sidebar__content--heading">
                    <Link to="/">
                        <img src="https://www.udemy.com/staticx/udemy/js/webpack/udemy-pride-logo.d1b003c808a949847374f9a4267e1053.svg" alt="" />
                    </Link>
                </div>
                <div className="admin-sidebar__contents--body">
                    <ul className="admin-sidebar__lists">
                        <li className="admin-sidebar__lists-item">
                            <Link to="/">
                                <span className="admin-sidebar__lists-item--icon">
                                    <AiFillDashboard />
                                </span>
                                <span className="admin-sidebar__lists-item--text">Dashboard</span>
                            </Link>
                        </li>
                        <li className="admin-sidebar__lists-item">
                            <Link to="/">
                                <span className="admin-sidebar__lists-item--icon">
                                    <VscOutput />
                                </span>
                                <span className="admin-sidebar__lists-item--text">Courses Manage</span>
                            </Link>
                        </li>
                        <li className="admin-sidebar__lists-item">
                            <Link to="/">
                                <span className="admin-sidebar__lists-item--icon">
                                    <FiUsers />
                                </span>
                                <span className="admin-sidebar__lists-item--text">User Manage</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`admin-button ${showSideBar ? "" : "openButton"}`} onClick={() => setShowSideBar(!showSideBar)}>
                <span>
                    <MdClose />
                </span>
            </div>
        </div>
    );
}

export default AdminSidebar;
