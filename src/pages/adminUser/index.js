import { getUser } from "actions/auth";
import { DeleteUser } from "actions/DelUserAction";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { EditUser } from "actions/EditUser";
import { UpdateUser } from "actions/UpdateActions";
function AdminUser() {
    const dispatch = useDispatch();
    const [pagenation, setPagenation] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [modal, setModal] = useState(false);
    const { users } = useSelector((state) => state.GetUser);
    useEffect(() => {
        dispatch(getUser());
    }, []);
    const handelChange = (e) => {
        const target = e.target.value;
        setSearchTerm(target);
    };
    const searchData = users.filter((val) => {
        if (searchTerm === "") {
            return val;
        } else if (val.hoTen.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            return val;
        }
    });

    const deleteData = (values) => {
        if (window.confirm("Are you sure?")) {
            dispatch(DeleteUser(values));
        }
    };
    const handelEdit = (user) => {
        setModal(!modal);
        dispatch(EditUser(user));
    };
    const schema = yup.object().shape({
        taiKhoan: yup.string().required("User name can't be blank"),
        matKhau: yup.string().required("Password can't be blank"),
        hoTen: yup.string().required("Full name can't be blank"),
        soDT: yup.string().required("Phone number can't be blank"),
        maLoaiNguoiDung: yup.string().required("User type can't be blank"),
        maNhom: yup.string().required("Gruop id can't be blank"),
        email: yup.string().required("Email can't be blank").min(5, "Email from 5 to 20 characters").max(20, "Email < 20 characters"),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const handleForm = (data) => {
        console.log(data);
        dispatch(UpdateUser(data));
    };
    return (
        <div className="admin-data">
            <h3 className="admin-title">COURSES MANAGE</h3>
            <div className="admin-content">
                <div className="table-header">
                    <form action="">
                        <span>Search:</span>
                        <input type="text" onChange={handelChange} />
                    </form>
                </div>
                <div className="table-body">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>User Name</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone Number</td>
                                <td>User Type</td>
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
                                        <td data-label="User Name">{item.taiKhoan}</td>
                                        <td data-label="User Name">{item.hoTen}</td>
                                        <td data-label="Email">{item.email}</td>
                                        <td data-label="Phone Number">{item.soDt}</td>
                                        <td data-label="User Type">{item.maLoaiNguoiDung}</td>
                                        <td data-label="Handel">
                                            <button className="btn btn-primary" onClick={handelEdit}>
                                                Edit
                                            </button>
                                            <button className="btn btn-danger" onClick={() => deleteData(item.taiKhoan)}>
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
            <div className={`admin-modal ${modal ? "modal-open" : ""}`}>
                <form onSubmit={handleSubmit(handleForm)}>
                    <div className="form-group">
                        <h3>Update Form</h3>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">User Name</label>
                        <input type="text" className="form-control" placeholder="User Name" {...register("taiKhoan")} />
                        <small id="emailHelp" className="form-text" style={{ color: "red" }}>
                            {errors.taiKhoan?.message}
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" placeholder="Password" {...register("matKhau")} />
                        <small id="emailHelp" className="form-text" style={{ color: "red" }}>
                            {errors.matKhau?.message}
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Full Name</label>
                        <input type="text" className="form-control" placeholder="Full Name" {...register("hoTen")} />
                        <small id="emailHelp" className="form-text" style={{ color: "red" }}>
                            {errors.hoTen?.message}
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Phone Number</label>
                        <input type="text" className="form-control" placeholder="Phone Number" {...register("soDT")} />
                        <small id="emailHelp" className="form-text" style={{ color: "red" }}>
                            {errors.soDT?.message}
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">User Type</label>
                        <input type="text" className="form-control" placeholder="User Type" {...register("maLoaiNguoiDung")} />
                        <small id="emailHelp" className="form-text" style={{ color: "red" }}>
                            {errors.maLoaiNguoiDung?.message}
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Group Id</label>
                        <input type="text" className="form-control" placeholder="Group Id" {...register("maNhom")} />
                        <small id="emailHelp" className="form-text" style={{ color: "red" }}>
                            {errors.maNhom?.message}
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" {...register("email")} />
                        <small id="emailHelp" className="form-text" style={{ color: "red" }}>
                            {errors.email?.message}
                        </small>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    <button type="button" className="btn btn-danger" onClick={() => setModal(!modal)}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminUser;
