import { getCourses } from "actions/courses";
import { DeleteCourse } from "actions/DeleteCourseAction";
import { EditCourse } from "actions/UpdateActions";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AdminCourses() {
    const dispatch = useDispatch();
    const [pagenation, setPagenation] = useState(1);
    const { courses, updateCourseData } = useSelector((state) => state.courses);
    const [searchTerm, setSearchTerm] = useState("");
    const [modal, setModal] = useState(false);
    const [updateCourse, setUpdateCourse] = useState({
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
        } else if (val.tenKhoaHoc.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            return val;
        }
    });

    const deleteCourse = (id) => {
        if (window.confirm("Are you sure?")) {
            dispatch(DeleteCourse(id));
        }
    };

    const onChangeUpdate = (e) => {
        if (e.target.name === "hinhAnh") {
            setUpdateCourse({ ...updateCourse, hinhAnh: e.target.files[0] });
        } else if (e.target.name === "ngayTao") {
            setUpdateCourse({
                ...updateCourse,
                [e.target.name]: moment(e.target.value).format("DD/MM/YYYY"),
            });
        } else {
            setUpdateCourse({ ...updateCourse, [e.target.name]: e.target.value });
        }
    };
    const onEdit = (item) => {
        setModal(!modal);
        const newDataUpdate = {
            maKhoaHoc: item.maKhoaHoc,
            biDanh: item.biDanh,
            tenKhoaHoc: item.tenKhoaHoc,
            moTa: item.moTa,
            luotXem: 100,
            danhGia: 10,
            hinhAnh: updateCourse.hinhAnh,
            maNhom: item.maNhom,
            ngayTao: moment("").format("DD/MM/YYYY"),
            maDanhMucKhoaHoc: item.danhMucKhoaHoc.maDanhMucKhoahoc,
            taiKhoanNguoiTao: item.nguoiTao.taiKhoan,
        };
        setUpdateCourse(newDataUpdate);
        console.log(item);
    };
    const onUpdateCourse = (e) => {
        e.preventDefault();
        const form_data = new FormData();
        for (let key in updateCourse) {
            form_data.append(key, updateCourse[key]);
            // console.log(key, updateCourse[key]);
        }
        dispatch(EditCourse(form_data));
        // dispatch(AddCourseSS(form_data));
        // console.log(updateCourse);
        // console.log(form_data);
    };
    const handleClose = () => {
        setModal(!modal);
        // window.location.reload();
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
                                <td>Handle</td>
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
                                        <td data-label="Course Name">{item.tenKhoaHoc}</td>
                                        <td data-label="Handel">
                                            <button className="btn btn-primary" onClick={() => onEdit(item)}>
                                                Edit
                                            </button>

                                            <button className="btn btn-danger" onClick={() => deleteCourse(item.maKhoaHoc)}>
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
                <form>
                    <div className="form-group">
                        <label htmlFor="">Ma khoa hoc</label>
                        <input
                            type="text"
                            className="form-control"
                            name="maKhoaHoc"
                            value={updateCourse.maKhoaHoc}
                            onChange={onChangeUpdate}
                            placeholder="maKhoaHoc"
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">biDanh</label>
                        <input
                            type="text"
                            className="form-control"
                            name="biDanh"
                            value={updateCourse.biDanh}
                            onChange={onChangeUpdate}
                            placeholder="biDanh"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">tenKhoaHoc</label>
                        <input
                            type="text"
                            className="form-control"
                            name="tenKhoaHoc"
                            value={updateCourse.tenKhoaHoc}
                            onChange={onChangeUpdate}
                            placeholder="tenKhoaHoc"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">moTa</label>
                        <input
                            type="text"
                            className="form-control"
                            name="moTa"
                            value={updateCourse.moTa}
                            onChange={onChangeUpdate}
                            placeholder="moTa"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">luotXem</label>
                        <input type="number" className="form-control" name="luotXem" onChange={onChangeUpdate} placeholder="luotXem" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">danhGia</label>
                        <input type="number" className="form-control" name="danhGia" onChange={onChangeUpdate} placeholder="danhGia" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">hinhAnh</label>
                        <input type="file" className="form-control" name="hinhAnh" onChange={onChangeUpdate} placeholder="hinhAnh" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">maNhom</label>
                        <input
                            type="text"
                            className="form-control"
                            name="maNhom"
                            value={updateCourse.maNhom}
                            onChange={onChangeUpdate}
                            placeholder="maNhom"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">ngayTao</label>
                        <input type="date" className="form-control" name="ngayTao" onChange={onChangeUpdate} placeholder="ngayTao" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">maDanhMucKhoaHoc</label>
                        <input
                            type="text"
                            className="form-control"
                            name="maDanhMucKhoaHoc"
                            value={updateCourse.maDanhMucKhoaHoc}
                            onChange={onChangeUpdate}
                            placeholder="maDanhMucKhoaHoc"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">taiKhoanNguoiTao</label>
                        <input
                            type="text"
                            className="form-control"
                            name="taiKhoanNguoiTao"
                            value={updateCourse.taiKhoanNguoiTao}
                            onChange={onChangeUpdate}
                            placeholder="taiKhoanNguoiTao"
                        />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={onUpdateCourse}>
                        Submit
                    </button>
                    <button type="button" className="btn btn-danger" onClick={handleClose}>
                        Close
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminCourses;
