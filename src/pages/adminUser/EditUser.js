import { getUser } from "actions/auth";
import { edit } from "actions/Cart";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function EditUser() {
    const { users, testData } = useSelector((state) => state.GetUser);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser());
    }, []);

    const [datas, setDatas] = useState({
        taiKhoan: "",
        email: "",
        hoTen: "",
    });
    console.log(datas);
    console.log(testData);
    const onChange = (e) => {
        const newDatas = { ...datas };
        newDatas[e.target.name] = e.target.value;
        setDatas(newDatas);
    };
    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(edit(datas));
    };
    const onEdit = (value) => {
        const newValue = {
            taiKhoan: value.taiKhoan,
            email: value.email,
            hoTen: value.hoTen,
        };
        setDatas(newValue);
    };
    return (
        <div className="d-flex">
            <form action="" style={{ width: "40%" }} onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="">TAI KHOAN</label>
                    <input type="text" className="form-control" value={datas.taiKhoan} name="taiKhoan" onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="">MAT KHAU</label>
                    <input type="email" className="form-control" value={datas.email} name="email" onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="">FULL NAME</label>
                    <input type="" className="form-control" value={datas.hoTen} name="hoTen" onChange={onChange} />
                </div>
                <button className="btn btn-success">SUBMIT</button>
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <td>TAI KHOAN</td>
                        <td>MAT KHAU</td>
                        <td>FULL NAME</td>
                        <td>HANDLE</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((i, key) => {
                        return (
                            <tr key={key}>
                                <td>{i.taiKhoan}</td>
                                <td>{i.email}</td>
                                <td>{i.hoTen}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => onEdit(i)}>
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default EditUser;
