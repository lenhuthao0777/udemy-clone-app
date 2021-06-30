import React from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { FiUserPlus, FiUsers } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { VscOutput } from "react-icons/vsc";
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
                        </li>
                        <li className="admin-sidebar__lists-item">
                            <Link to="/admin/courses">
                                <span className="admin-sidebar__lists-item--icon">
                                    <VscOutput />
                                </span>
                                <span className="admin-sidebar__lists-item--text">Courses Manage</span>
                            </Link>
                        </li>
                        <li className="admin-sidebar__lists-item">
                            <Link to="/admin/addcourses">
                                <span className="admin-sidebar__lists-item--icon">
                                    <AiOutlineFileAdd />
                                </span>
                                <span className="admin-sidebar__lists-item--text">Add Courses</span>
                            </Link>
                        </li>
                        <li className="admin-sidebar__lists-item">
                            <Link to="/admin/users">
                                <span className="admin-sidebar__lists-item--icon">
                                    <FiUsers />
                                </span>
                                <span className="admin-sidebar__lists-item--text">User Manage</span>
                            </Link>
                        </li>
                        <li className="admin-sidebar__lists-item">
                            <Link to="/admin/addusers">
                                <span className="admin-sidebar__lists-item--icon">
                                    <FiUserPlus />
                                </span>
                                <span className="admin-sidebar__lists-item--text">Add User</span>
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
            <div className={`admin-sidebar__overlay ${showSideBar ? "" : ""}`}></div>
        </div>
    );
}

export default AdminSidebar;
