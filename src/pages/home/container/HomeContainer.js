import React from "react";
import Home from "../Modules";

function HomeContainer() {
  // const [courses, setCourses] = useState([]);
  // const getAllData = async () => {
  //   try {
  //     const { data } = await coursesApi.getCourses();
  //     const newData = data.map((item) => {
  //       return {
  //         biDanh: item.biDanh,
  //         danhMucKhoaHoc: item.danhMucKhoaHoc,
  //         hinhAnh: item.hinhAnh,
  //         luotXem: item.luotXem,
  //         maKhoaHoc: item.maKhoaHoc,
  //         maNhom: item.maNhom,
  //         moTa: item.moTa,
  //         ngayTao: item.ngayTao,
  //         nguoiTao: item.nguoiTao,
  //         soLuongHocVien: item.soLuongHocVien,
  //         tenKhoaHoc: item.tenKhoaHoc,
  //         price: (Math.random() * 200).toFixed(2),
  //       };
  //     });
  //     setCourses(newData);
  //   } catch (error) {
  //     return error;
  //   }
  // };
  // useEffect(() => {
  //   getAllData();
  // }, []);
  return <Home />;
}

export default HomeContainer;
