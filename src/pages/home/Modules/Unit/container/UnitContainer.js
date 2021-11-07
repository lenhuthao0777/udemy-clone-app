import React, { useEffect, useState } from "react";
import coursesApi from "services/CoursesApi";
import Unit from "../components/Unit";

function UnitContainer() {
  const [data, setData] = useState([]);
  const getAllCourse = async () => {
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
    setData(newData);
  };
  useEffect(() => {
    getAllCourse();
  }, []);
  return <Unit data={data} />;
}

export default UnitContainer;
