import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { AddCourse } from "actions/AddCourseAction";
function AddCourses() {
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.authReducer);
    const schema = yup.object().shape({
        maKhoaHoc: yup.string().required("ma khoa hoc can't be blank"),
        biDanh: yup.string().required("bi danh can't be blank"),
        tenKhoaHoc: yup.string().required("Course name can't be blank"),
        moTa: yup.string().required("Description can't be blank"),
        luotXem: yup.number().required("View type can't be blank"),
        danhGia: yup.number().required("danh gia can't be blank"),
        hinhAnh: yup
            .mixed()
            .required("Image can't be blank")
            .test("filesize", "The file is too large", (value) => {
                return value && value[0].size <= 2000000;
            }),
        maNhom: yup.string().required("Group id can't be blank"),
        ngayTao: yup.string().required("Date't be blank"),
        maDanhMucKhoaHoc: yup.string().required("maDanhMucKhoaHoc can't be blank"),
        taiKhoanNguoiTao: yup.string().required("taiKhoanNguoiTao can't be blank"),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const handelForm = (data) => {
        console.log(data);
        dispatch(AddCourse(data));
    };
    return (
        <div className="form-adds">
            <form onSubmit={handleSubmit(handelForm)}>
                <div className="form-group">
                    <label>Ma khoa hoc</label>
                    <input type="text" className="form-control" placeholder="Ma Khoa Hoc" {...register("maKhoaHoc")} />
                    <small className="text-muted">{errors.maKhoaHoc?.message}</small>
                </div>
                <div className="form-group">
                    <label>Bi danh</label>
                    <input type="text" className="form-control" placeholder="Bi danh" {...register("biDanh")} />
                    <small className="text-muted">{errors.biDanh?.message}</small>
                </div>
                <div className="form-group">
                    <label>Ten khoa hoc</label>
                    <input type="text" className="form-control" placeholder="Ten khoa hoc" {...register("tenKhoaHoc")} />
                    <small className="text-muted">{errors.tenKhoaHoc?.message}</small>
                </div>
                <div className="form-group">
                    <label>Mo ta</label>
                    <input type="text" className="form-control" placeholder="Mo ta" {...register("moTa")} />
                    <small className="text-muted">{errors.moTa?.message}</small>
                </div>
                <div className="form-group">
                    <label>Luot xem</label>
                    <input type="number" className="form-control" placeholder="Luot xem" {...register("luotXem")} />
                    <small className="text-muted">{errors.luotXem?.message}</small>
                </div>
                <div className="form-group">
                    <label>Danh gia</label>
                    <input type="number" className="form-control" placeholder="Danh gia" {...register("danhGia")} />
                    <small className="text-muted">{errors.danhGia?.message}</small>
                </div>
                <div className="form-group">
                    <label>Hinh anh</label>
                    <input type="file" className="form-control" placeholder="Hinh anh" {...register("hinhAnh")} />
                    <small className="text-muted">{errors.hinhAnh?.message}</small>
                </div>
                <div className="form-group">
                    <label>Ma nhom</label>
                    <input type="text" className="form-control" placeholder="Ma nhom" {...register("maNhom")} />
                    <small className="text-muted">{errors.maNhom?.message}</small>
                </div>
                <div className="form-group">
                    <label>Ngay tao</label>
                    <input type="text" className="form-control" placeholder="Ngay tao" {...register("ngayTao")} />
                    <small className="text-muted">{errors.ngayTao?.message}</small>
                </div>
                <div className="form-group">
                    <label>Ma danh muc khoa hoc</label>
                    <input type="text" className="form-control" placeholder="Ma danh muc khoa hoc" {...register("maDanhMucKhoaHoc")} />
                    <small className="text-muted">{errors.maDanhMucKhoaHoc?.message}</small>
                </div>
                <div className="form-group">
                    <label>Tai khoan nguoi tao</label>
                    <input type="text" className="form-control" placeholder="Tai khoan nguoi tao" {...register("taiKhoanNguoiTao")} />
                    <small className="text-muted">{errors.taiKhoanNguoiTao?.message}</small>
                </div>

                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default AddCourses;
