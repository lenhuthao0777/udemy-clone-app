import { getCourses } from "actions/courses";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function AdminCourses() {
    const [pagenation, setPagenation] = useState(1);
    const { courses } = useSelector((state) => state.courses);
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCourses());
    }, []);
    const handeChange = (e) => {
        const target = e.target.value;
        setSearchTerm(target);
    };
    const searchData = courses.filter((val) => {
        if (searchTerm === "") {
            return val;
        } else if (
            val.tenKhoaHoc
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
        ) {
            return val;
        }
    });
    return (
        <div className="admin-data">
            <h3 className="admin-title">COURSES MANAGE</h3>
            <div className="admin-content">
                <div className="table-header">
                    <form action="">
                        <span>Search:</span>
                        <input type="text" onChange={handeChange} />
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
                            {searchData.map((item, key) => {
                                return (
                                    <tr key={key}>
                                        <td data-label="Id" className="id">
                                           {key + 1}
                                        </td>
                                        <td data-label="Image">
                                            <img
                                                src={item.hinhAnh}
                                                alt=""
                                            />
                                        </td>
                                        <td data-label="Course Name">
                                            {item.tenKhoaHoc}
                                        </td>
                                        <td data-label="Handel">
                                            <button className="btn btn-primary">
                                                Edit
                                            </button>
                                            <button className="btn btn-danger">
                                                Del
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="table-footer">
                    <div className="table-footer__content">
                        <button
                            className={`btn-pagenation ${
                                pagenation === 1 ? "active" : ""
                            }`}
                            onClick={() => setPagenation(1)}
                        >
                            1
                        </button>
                        <button
                            className={`btn-pagenation ${
                                pagenation === 2 ? "active" : ""
                            }`}
                            onClick={() => setPagenation(2)}
                        >
                            2
                        </button>
                        <button
                            className={`btn-pagenation ${
                                pagenation === 3 ? "active" : ""
                            }`}
                            onClick={() => setPagenation(3)}
                        >
                            3
                        </button>
                        <button
                            className={`btn-pagenation ${
                                pagenation === 4 ? "active" : ""
                            }`}
                            onClick={() => setPagenation(4)}
                        >
                            4
                        </button>
                    </div>
                </div>
            </div>
            <div className="admin-modal">
                <div className="form-modal">
                    <form action=""></form>
                </div>
            </div>
        </div>
    );
}

export default AdminCourses;
