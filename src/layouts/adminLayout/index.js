import AdminSidebar from "components/adminSidebar/index";
import TopBar from "components/topBar/index";
import React from "react";
import { useState } from "react";
function AdminLayout({ children }) {
    const [showSideBar, setShowSideBar] = useState(false);
    return (
        <div className="admin">
            <div className="admin-dashboard">
                <AdminSidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
                <div className={`admin-overlay ${showSideBar ? "adminOverlayIsopen" : ""}`} onClick={() => setShowSideBar(!showSideBar)}></div>

                <div className="admin-content">
                    <TopBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;
