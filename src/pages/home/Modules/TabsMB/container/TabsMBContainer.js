import React, { useEffect, useState } from "react";
import coursesApi from "services/CoursesApi";
import TabCourseMobile from "../components/TabCourseMobile";

function TabsMBContainer() {
  const [courses, setCourses] = useState([]);
  const getAllData = async () => {
    try {
      const { data } = await coursesApi.getCourses();
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
          price: 100,
        };
      });
      setCourses(newData);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    getAllData();
  }, []);
  return <TabCourseMobile courses={courses} />;
}

export default TabsMBContainer;
