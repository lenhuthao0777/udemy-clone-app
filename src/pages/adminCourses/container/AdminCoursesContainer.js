import { Button, Space } from "antd";
import React, { useEffect, useState } from "react";
import coursesApi from "services/CoursesApi";
import AdminCoursesTable from "../components/AdminCoursesTable";
import { v4 as uuid } from "uuid";

function AdminCoursesContainer() {
  const [isLoading, setIsloading] = useState(true);
  const [data, setData] = useState([]);
  const columns = [
    {
      title: "No",
      dataIndex: "maKhoaHoc",
      key: "id",
    },
    {
      title: "Image",
      dataIndex: "hinhAnh",
      key: "image",
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
      render: (item) => (
        <Space size="middle">
          <Button key="add" type="primary">
            Detail
          </Button>
          <Button key="add" type="primary">
            Delete
          </Button>
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
      console.log(error);
    }
  };
  useEffect(() => {
    getAllDatas();
  }, []);
  return (
    <AdminCoursesTable columns={columns} isLoading={isLoading} data={data} />
  );
}

export default AdminCoursesContainer;
