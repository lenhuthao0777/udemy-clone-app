import { AddCourseSS } from "actions/AddCourseAction";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function AddCourses() {
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.authReducer);
    // const { addNewCourse, addDts } = useSelector((state) => state.AddCourse);

    const [newCourse, setNewCourse] = useState({
        maKhoaHoc: "",
        biDanh: "",
        tenKhoaHoc: "",
        moTa: "",
        luotXem: 0,
        danhGia: 0,
        hinhAnh: {},
        maNhom: "",
        ngayTao: moment("").format("DD/MM/YYYY"),
        maDanhMucKhoaHoc: "",
        taiKhoanNguoiTao: userInfo.taiKhoan,
    });
    // console.log(newCourse);
    const handleChangeAddNewCourse = (e) => {
        if (e.target.name === "hinhAnh") {
            setNewCourse({ ...newCourse, hinhAnh: e.target.files[0] });
        } else if (e.target.name === "ngayTao") {
            setNewCourse({
                ...newCourse,
                [e.target.name]: moment(e.target.value).format("DD/MM/YYYY"),
            });
        } else {
            setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
        }
    };
    const handleAddNewCourse = (e) => {
        e.preventDefault();
        const form_data = new FormData();
        for (let key in newCourse) {
            // console.log(key, newCourse[key]);
            form_data.append(key, newCourse[key]);
        }
        dispatch(AddCourseSS(form_data));
    };

    return (
        <div className="form-adds">
            <form>
                <div className="form-group">
                    <label htmlFor="">Ma khoa hoc</label>
                    <input type="text" className="form-control" name="maKhoaHoc" onChange={handleChangeAddNewCourse} placeholder="maKhoaHoc" />
                </div>
                <div className="form-group">
                    <label htmlFor="">biDanh</label>
                    <input type="text" className="form-control" name="biDanh" onChange={handleChangeAddNewCourse} placeholder="biDanh" />
                </div>
                <div className="form-group">
                    <label htmlFor="">tenKhoaHoc</label>
                    <input type="text" className="form-control" name="tenKhoaHoc" onChange={handleChangeAddNewCourse} placeholder="tenKhoaHoc" />
                </div>
                <div className="form-group">
                    <label htmlFor="">moTa</label>
                    <input type="text" className="form-control" name="moTa" onChange={handleChangeAddNewCourse} placeholder="moTa" />
                </div>
                <div className="form-group">
                    <label htmlFor="">luotXem</label>
                    <input type="number" className="form-control" name="luotXem" onChange={handleChangeAddNewCourse} placeholder="luotXem" />
                </div>
                <div className="form-group">
                    <label htmlFor="">danhGia</label>
                    <input type="number" className="form-control" name="danhGia" onChange={handleChangeAddNewCourse} placeholder="danhGia" />
                </div>
                <div className="form-group">
                    <label htmlFor="">hinhAnh</label>
                    <input type="file" className="form-control" name="hinhAnh" onChange={handleChangeAddNewCourse} placeholder="hinhAnh" />
                </div>
                <div className="form-group">
                    <label htmlFor="">maNhom</label>
                    <input type="text" className="form-control" name="maNhom" onChange={handleChangeAddNewCourse} placeholder="maNhom" />
                </div>
                <div className="form-group">
                    <label htmlFor="">ngayTao</label>
                    <input type="date" className="form-control" name="ngayTao" onChange={handleChangeAddNewCourse} placeholder="ngayTao" />
                </div>
                <div className="form-group">
                    <label htmlFor="">maDanhMucKhoaHoc</label>
                    <input
                        type="text"
                        className="form-control"
                        name="maDanhMucKhoaHoc"
                        onChange={handleChangeAddNewCourse}
                        placeholder="maDanhMucKhoaHoc"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">taiKhoanNguoiTao</label>
                    <input
                        type="text"
                        className="form-control"
                        name="taiKhoanNguoiTao"
                        disabled
                        value={newCourse.taiKhoanNguoiTao}
                        onChange={handleChangeAddNewCourse}
                        placeholder="taiKhoanNguoiTao"
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleAddNewCourse}>
                    Add
                </button>
            </form>
        </div>
    );
}

export default AddCourses;
