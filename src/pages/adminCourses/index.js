import { getCourses } from "actions/courses";
import { DeleteCourse } from "actions/DeleteCourseAction";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function AdminCourses() {
    const [pagenation, setPagenation] = useState(1);
    const { courses } = useSelector((state) => state.courses);
    const [searchTerm, setSearchTerm] = useState("");
    const [modal, setModal] = useState(false);
    const handelEdit = () => {
        setModal(!modal);
    };
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

    const deleteCourse = (id) => {
        if (window.confirm("Are you sure?")) {
            dispatch(DeleteCourse(id));
        }
    };
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
                                            <img src={item.hinhAnh} alt="" />
                                        </td>
                                        <td data-label="Course Name">
                                            {item.tenKhoaHoc}
                                        </td>
                                        <td data-label="Handel">
                                            <button
                                                className="btn btn-primary"
                                                onClick={handelEdit}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() =>
                                                    deleteCourse(item.maKhoaHoc)
                                                }
                                            >
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
            <div className={`admin-modal ${modal ? "modal-open" : ""}`}>
                <form>
                    <div className="form-group">
                        <h3>Update Form</h3>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => setModal(!modal)}
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminCourses;
