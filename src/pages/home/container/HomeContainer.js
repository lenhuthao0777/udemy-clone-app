import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import coursesApi from "services/CoursesApi";
import Home from "../Modules";

function HomeContainer() {
  const [courses, setCourses] = useState([]);
  const getAllData = async () => {
    try {
      const { data, status } = await coursesApi.getCourses();
      const newData = data.map((item) => {
        return {
          biDanh: item.biDanh,
          danhMucKhoaHoc: item.danhMucKhoaHoc,
          hinhAnh: item.hinhAnh,
          luotXem: item.luotXem,
          maKhoaHoc: item.maKhoaHoc,
          maNhom: item.maNhom,
          moTa: item.moTa,
          ngayTao: item.ngayTao,
          nguoiTao: item.nguoiTao,
          soLuongHocVien: item.soLuongHocVien,
          tenKhoaHoc: item.tenKhoaHoc,
          price: (Math.random() * 200).toFixed(2),
        };
      });
      setCourses(newData);
      console.log(status);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    getAllData();
  }, []);
  return <Home courses={courses} />;
}

export default HomeContainer;
