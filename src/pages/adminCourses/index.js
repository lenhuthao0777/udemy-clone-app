import React, { useState } from "react";
function AdminCourses() {
    const [pagenation, setPagenation] = useState(1);
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <div className="admin-courses">
            <h3 className="admin-title">COURSES MANAGE</h3>
            <div className="admin-courses__content">
                <div className="table-header">
                    <h3>Courses Manage</h3>
                    <form action="">
                        <span>Search:</span>
                        <input type="text" />
                    </form>
                </div>
                <div className="table-body">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Image</td>
                                <td>Courses Name</td>
                                <td>Handel</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Id" className="id">
                                    1
                                </td>
                                <td data-label="Image">
                                    <img src="https://www.seekpng.com/png/detail/263-2630215_web-design-programming-courses-in-london-java.png" alt="" />
                                </td>
                                <td data-label="Course Name">2021 Complete Python Bootcamp From Zero to Hero in Python</td>
                                <td data-label="Handel">
                                    <button className="btn btn-primary">Edit</button>
                                    <button className="btn btn-danger">Del</button>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="id" className="id">
                                    1
                                </td>
                                <td data-label="Image">
                                    <img src="https://www.seekpng.com/png/detail/263-2630215_web-design-programming-courses-in-london-java.png" alt="" />
                                </td>
                                <td data-label="CourseName">2021 Complete Python Bootcamp From Zero to Hero in Python</td>
                                <td data-label="Handel">
                                    <button className="btn btn-primary">Edit</button>
                                    <button className="btn btn-danger">Del</button>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="id" className="id">
                                    1
                                </td>
                                <td data-label="Image">
                                    <img src="https://www.seekpng.com/png/detail/263-2630215_web-design-programming-courses-in-london-java.png" alt="" />
                                </td>
                                <td data-label="CourseName">2021 Complete Python Bootcamp From Zero to Hero in Python</td>
                                <td data-label="Handel">
                                    <button className="btn btn-primary">Edit</button>
                                    <button className="btn btn-danger">Del</button>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="id" className="id">
                                    1
                                </td>
                                <td data-label="Image">
                                    <img src="https://www.seekpng.com/png/detail/263-2630215_web-design-programming-courses-in-london-java.png" alt="" />
                                </td>
                                <td data-label="CourseName">2021 Complete Python Bootcamp From Zero to Hero in Python</td>
                                <td data-label="Handel">
                                    <button className="btn btn-primary">Edit</button>
                                    <button className="btn btn-danger">Del</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="table-footer">
                    <div className="table-footer__content">
                        <button className={`btn-pagenation ${pagenation === 1 ? "active" : ""}`} onClick={() => setPagenation(1)}>
                            1
                        </button>
                        <button className={`btn-pagenation ${pagenation === 2 ? "active" : ""}`} onClick={() => setPagenation(2)}>
                            2
                        </button>
                        <button className={`btn-pagenation ${pagenation === 3 ? "active" : ""}`} onClick={() => setPagenation(3)}>
                            3
                        </button>
                        <button className={`btn-pagenation ${pagenation === 4 ? "active" : ""}`} onClick={() => setPagenation(4)}>
                            4
                        </button>
                    </div>
                </div>
            </div>
            <div className="admin-modal"></div>
        </div>
    );
}

export default AdminCourses;
