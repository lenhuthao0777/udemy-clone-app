import DateFiled from "components/DatePicker";
import FileField from "components/FileField";
import Modal from "components/Modal";
import TextFileld from "components/TextField";
import moment from "moment";
import React, { useState } from "react";
import { useSelector } from "react-redux";
function CreateCourse({ hdAddCourse }) {
  const { userInfo } = useSelector((state) => state.authReducer);
  const [data, setData] = useState({
    maKhoaHoc: "",
    biDanh: "",
    tenKhoaHoc: "",
    moTa: "",
    hinhAnh: {},
    maNhom: "GP08",
    ngayTao: moment("").format("DD/MM/YYYY"),
    maDanhMucKhoaHoc: "",
    taiKhoanNguoiTao: userInfo.taiKhoan,
  });
  const hdChange = (field) => {
    switch (field.name) {
      case "hinhAnh": {
        setData({ ...data, hinhAnh: field.files[0] });
        break;
      }
      case "ngayTao": {
        setData({ ...data, ngayTao: moment(field.value).format("DD/MM/YYYY") });
        break;
      }
      default: {
        setData({ ...data, [field.name]: field.value });
        break;
      }
    }
  };
  const hdSubmit = () => {
    const form_data = new FormData();
    for (let key in data) {
      form_data.append(key, data[key]);
    }
    hdAddCourse(form_data);
  };
  // console.log(data);
  return (
    <Modal title="Create Course" cb={hdSubmit}>
      <TextFileld
        fieldName="maKhoaHoc"
        label="Mã khóa học:"
        placehd="Nhập mã khóa học"
        cb={hdChange}
      />
      <TextFileld
        fieldName="tenKhoaHoc"
        label="Tên khóa học:"
        placehd="Nhập tên khóa học"
        cb={hdChange}
      />
      <TextFileld
        fieldName="biDanh"
        label="Bí danh:"
        placehd="Nhập bí danh"
        cb={hdChange}
      />
      <TextFileld
        fieldName="moTa"
        label="Mô tả:"
        placehd="Nhập mô tả"
        cb={hdChange}
      />
      {/* <TextFileld
        fieldName="luotXem"
        label="Lượt xem:"
        placehd="Nhập lượt xem"
        cb={hdChange}
      />
      <TextFileld
        fieldName="danhGia"
        label="Đánh giá:"
        placehd="Nhập đánh giá"
        cb={hdChange}
      /> */}
      <TextFileld
        fieldName="maDanhMucKhoaHoc"
        label="Mã danh mục:"
        placehd="Nhập mã danh mục"
        cb={hdChange}
      />
      <FileField fieldName="hinhAnh" label="Hình ảnh:" cb={hdChange} />
      <DateFiled fieldName="ngayTao" label="Ngày tạo:" cb={hdChange} />
    </Modal>
  );
}

export default CreateCourse;
