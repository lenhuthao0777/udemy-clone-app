import React from "react";
import { Link } from "react-router-dom";
import TopBar from "components/topBar/index";
function AdminLayout({ children }) {
    return (
        <div className="admin">
            <div className="admin-sidebar">
                <h3>CyberLearn</h3>
                {/* <Link className="text" to="/admin/courses">
                    Courses
                </Link>
                <Link to="/admin/users">Users</Link> */}
				<ul>
					<li>Dashboard</li>
					<li>Form</li>
				</ul>
            </div>
            <div className="admin-dashboard">
                <TopBar />
                {children}
            </div>
        </div>
    );
}

export default AdminLayout;
