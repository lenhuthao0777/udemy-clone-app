import React, { useState } from "react";
import coursesApi from "services/CoursesApi";
import TabCourses from "../components/TabCourses";

function TabsContainer() {
  const [courses, setCourses] = useState([]);

  const getDataByCate = async (category) => {
    const { data } = await coursesApi.getCoursesByCategory(category);
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
  };
  return <TabCourses getDataByCate={getDataByCate} courses={courses} />;
}

export default TabsContainer;
