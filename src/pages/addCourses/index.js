import { yupResolver } from "@hookform/resolvers/yup";
import { AddCourseSS, ADDDTS } from "actions/AddCourseAction";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import moment from "moment";
function AddCourses() {
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.authReducer);
    const { addNewCourse, addDts } = useSelector((state) => state.AddCourse);
    console.log(addNewCourse);
    const [courseDTS, setCourseDTS] = useState({
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
        taiKhoanNguoiTao: "",
    });
    console.log(courseDTS);
    const schema = yup.object().shape({
        maKhoaHoc: yup.string().required("ma khoa hoc can't be blank"),
        biDanh: yup.string().required("bi danh can't be blank"),
        tenKhoaHoc: yup.string().required("Course name can't be blank"),
        moTa: yup.string().required("Description can't be blank"),
        luotXem: yup.number().required("View type can't be blank"),
        danhGia: yup.number().required("danh gia can't be blank"),
        // hinhAnh: yup
        //     .mixed()
        //     .required("Image can't be blank")
        //     .test("fileSize", "The file is too large", (value) => {
        //         return value && value[0].size <= 2000000;
        //     })
        //     .test("type", "we only support jpeg", (value) => {
        //         return value && value[0].type === "image/jpeg";
        //     }),
        hinhAnh: yup.mixed().test("fileSize", "The file is too large", (value) => {
            console.log(value[0]);
            return value;
        }),
        maNhom: yup.string().required("Group id can't be blank"),
        ngayTao: yup.string().required("Date can't be blank"),
        maDanhMucKhoaHoc: yup.string().required("maDanhMucKhoaHoc can't be blank"),
        taiKhoanNguoiTao: yup.string().required("taiKhoanNguoiTao can't be blank"),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const handelForm = (data) => {
        console.log(data.hinhAnh);
        // setCourseDTS(...data);
        const form_data = new FormData();
        for (let key in data) {
            console.log(key, data[key]);
            form_data.append(key, data[key]);
        }
        console.log(form_data);
        // dispatch(AddCourseSS(form_data));
    };

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
        taiKhoanNguoiTao: "",
    });
    console.log(newCourse);

    const handlChangeDate = (e) => {
        setNewCourse({
            ...newCourse,
            [e.target.name]: moment(e.target.value).format("DD/MM/YYYY"),
        });
    };

    const handleChangeAddNewCourse = (e) => {
        if (e.target.name === "hinhAnh") {
            setNewCourse({ ...newCourse, hinhAnh: e.target.files[0] });
        } else {
            setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
        }
    };
    const handleAddNewCourse = (e) => {
        e.preventDefault();
        const form_data = new FormData();
        for (let key in newCourse) {
            console.log(key, newCourse[key]);
            form_data.append(key, newCourse[key]);
        }
        dispatch(AddCourseSS(form_data));
        console.log(form_data);
    };

    return (
        <div className="form-adds">
            {/* <form onSubmit={handleSubmit(handelForm)}>
                <div className="form-group">
                    <label>Ma khoa hoc</label>
                    <input type="text" className="form-control" placeholder="Ma Khoa Hoc" {...register("maKhoaHoc")} />
                    <small className="text-muted" style={{ color: "red" }}>
                        {errors.maKhoaHoc?.message}
                    </small>
                </div>
                <div className="form-group">
                    <label>Bi danh</label>
                    <input type="text" className="form-control" placeholder="Bi danh" {...register("biDanh")} />
                    <small className="text-muted" style={{ color: "red" }}>
                        {errors.biDanh?.message}
                    </small>
                </div>
                <div className="form-group">
                    <label>Ten khoa hoc</label>
                    <input type="text" className="form-control" placeholder="Ten khoa hoc" {...register("tenKhoaHoc")} />
                    <small className="text-muted" style={{ color: "red" }}>
                        {errors.tenKhoaHoc?.message}
                    </small>
                </div>
                <div className="form-group">
                    <label>Mo ta</label>
                    <input type="text" className="form-control" placeholder="Mo ta" {...register("moTa")} />
                    <small className="text-muted" style={{ color: "red" }}>
                        {errors.moTa?.message}
                    </small>
                </div>
                <div className="form-group">
                    <label>Luot xem</label>
                    <input type="number" className="form-control" placeholder="Luot xem" {...register("luotXem")} />
                    <small className="text-muted" style={{ color: "red" }}>
                        {errors.luotXem?.message}
                    </small>
                </div>
                <div className="form-group">
                    <label>Danh gia</label>
                    <input type="number" className="form-control" placeholder="Danh gia" {...register("danhGia")} />
                    <small className="text-muted" style={{ color: "red" }}>
                        {errors.danhGia?.message}
                    </small>
                </div>
                <div className="form-group">
                    <label>Hinh anh</label>
                    <input type="file" className="form-control" placeholder="Hinh anh" {...register("hinhAnh")} />
                    <small className="text-muted" style={{ color: "red" }}>
                        {errors.hinhAnh?.message}
                    </small>
                </div>
                <div className="form-group">
                    <label>Ma nhom</label>
                    <input type="text" className="form-control" placeholder="Ma nhom" {...register("maNhom")} />
                    <small className="text-muted" style={{ color: "red" }}>
                        {errors.maNhom?.message}
                    </small>
                </div>
                <div className="form-group">
                    <label>Ngay tao</label>
                    <input type="text" className="form-control" placeholder="Ngay tao" {...register("ngayTao")} />
                    <small className="text-muted" style={{ color: "red" }}>
                        {errors.ngayTao?.message}
                    </small>
                </div>
                <div className="form-group">
                    <label>Ma danh muc khoa hoc</label>
                    <input type="text" className="form-control" placeholder="Ma danh muc khoa hoc" {...register("maDanhMucKhoaHoc")} />
                    <small className="text-muted" style={{ color: "red" }}>
                        {errors.maDanhMucKhoaHoc?.message}
                    </small>
                </div>
                <div className="form-group">
                    <label>Tai khoan nguoi tao</label>
                    <input type="text" className="form-control" placeholder="Tai khoan nguoi tao" {...register("taiKhoanNguoiTao")} />
                    <small className="text-muted" style={{ color: "red" }}>
                        {errors.taiKhoanNguoiTao?.message}
                    </small>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form> */}

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
                    <input type="text" className="form-control" name="luotXem" onChange={handleChangeAddNewCourse} placeholder="luotXem" />
                </div>
                <div className="form-group">
                    <label htmlFor="">danhGia</label>
                    <input type="text" className="form-control" name="danhGia" onChange={handleChangeAddNewCourse} placeholder="danhGia" />
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
                    <input type="text" className="form-control" name="ngayTao" onChange={handlChangeDate} placeholder="ngayTao" />
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
