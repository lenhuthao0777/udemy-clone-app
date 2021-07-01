import { getUser } from "actions/auth";
import { DeleteUser } from "actions/DelUserAction";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function AdminUser() {
    const dispatch = useDispatch();
    const [pagenation, setPagenation] = useState(1);
    const { users } = useSelector((state) => state.GetUser);
    useEffect(() => {
        dispatch(getUser());
    }, []);
    return (
        <div className="admin-data">
            <h3 className="admin-title">COURSES MANAGE</h3>
            <div className="admin-content">
                <div className="table-header">
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
                                <td>User Type</td>
                                <td>Handel</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, key) => {
                                return (
                                    <tr key={key}>
                                        <td data-label="Id" className="id">
                                            1
                                        </td>
                                        <td data-label="User Name">{item.hoTen}</td>
                                        <td data-label="Email">{item.email}</td>
                                        <td data-label="Phone Number">{item.soDt}</td>
                                        <td data-label="User Type">{item.maLoaiNguoiDung}</td>
                                        <td data-label="Handel">
                                            <button className="btn btn-primary">Edit</button>
                                            <button className="btn btn-danger" onClick={()=>dispatch(DeleteUser(item.taiKhoan))}>Del</button>
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
