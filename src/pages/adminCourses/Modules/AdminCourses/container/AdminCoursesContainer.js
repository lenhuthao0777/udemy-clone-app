import { Space } from "antd";
import React, { useEffect, useState } from "react";
import coursesApi from "services/CoursesApi";
import { v4 as uuid } from "uuid";
import DelCourse from "../../DelCourse";
import EditCourse from "../../EditCourse";
import AdminCourses from "../components/AdminCourses";
function AdminCoursesContainer() {
  const [isLoading, setIsloading] = useState(true);
  const [data, setData] = useState([]);
  const columns = [
    {
      title: "No",
      dataIndex: "maKhoaHoc",
      key: "id",
      width: 150,
    },
    {
      title: "Image",
      dataIndex: "hinhAnh",
      key: "image",
      width: 200,
      render: (hinhAnh) => (
        <img style={{ width: "120px" }} src={hinhAnh} alt="img" />
      ),
    },
    {
      title: "Name",
      dataIndex: "tenKhoaHoc",
      key: "name",
    },

    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 150,
      render: (item) => (
        <Space size="middle">
          <EditCourse />
          <DelCourse id={item.maKhoaHoc} />
        </Space>
      ),
    },
  ];
  const getAllDatas = async () => {
    setIsloading(true);
    try {
      const { data } = await coursesApi.getCourses();
      const newData = data.map((item) => ({
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
        key: uuid(),
      }));
      setData(newData);
      setIsloading(false);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    getAllDatas();
  }, []);
  return <AdminCourses columns={columns} isLoading={isLoading} data={data} />;
}

export default AdminCoursesContainer;
