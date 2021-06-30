import { getUser } from "actions/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AdminUser() {
    const dispatch = useDispatch();
    const [pagenation, setPagenation] = useState(1);
    const { users } = useSelector((state) => state.GetUser);
    console.log(users);
    useEffect(() => {
        dispatch(getUser());
    }, []);
    return (
        <div className="admin-data">
            <h3 className="admin-title">COURSES MANAGE</h3>
            <div className="admin-content">
                <div className="table-header">
                    <button className="admin-button__add">Add</button>
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
                                <td>User Name</td>
                                <td>Email</td>
                                <td>Phone Number</td>
                                <td>Handel</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item) => {
                                return (
                                    <tr>
                                        <td data-label="Id" className="id">
                                            1
                                        </td>
                                        <td data-label="User Name">2021 Complete Python Bootcamp From Zero to Hero in Python</td>
                                        <td data-label="Email">2021 Complete Python Bootcamp From Zero to Hero in Python</td>
                                        <td data-label="Phone Number">2021 Complete Python Bootcamp From Zero to Hero in Python</td>
                                        <td data-label="Handel">
                                            <button className="btn btn-primary">Edit</button>
                                            <button className="btn btn-danger">Del</button>
                                        </td>
                                    </tr>
                                );
                            })}
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
            <div className="admin-modal">
                {/* <form action="">
                    <p>User</p>
                </form> */}
            </div>
        </div>
    );
}

export default AdminUser;
