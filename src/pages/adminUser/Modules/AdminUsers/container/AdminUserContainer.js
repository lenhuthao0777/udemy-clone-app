import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import authApi from "services/AuthApi";
import AdminUser from "../components/AdminUser";
import { Button, Space } from "antd";
import { v4 as uuid } from "uuid";
function AdminUserContainer() {
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getAllUserData = async (page = 1, pageSize = 10) => {
    setIsLoading(true);
    try {
      const { data } = await authApi.getUserByPage(page, pageSize);
      const newData = data.items.map((item, index) => ({
        id: index,
        email: item.email,
        hoTen: item.hoTen,
        maLoaiNguoiDung: item.maLoaiNguoiDung,
        soDt: item.soDT,
        taiKhoan: item.taiKhoan,
        matKhau: "",
        key: uuid(),
      }));
      setIsLoading(false);
      setData(newData);
      setTotalCount(data.totalCount);
      setTotalPages(data.totalPages);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllUserData();
  }, []);

  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      width: 100,
    },
    {
      title: "Name",
      dataIndex: "hoTen",
      key: "hoTen",
      width: 200,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 300,
    },
    {
      title: "Phone",
      dataIndex: "soDt",
      key: "soDt",
      width: 200,
    },
    {
      title: "Account",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 150,
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
  return (
    <AdminUser
      totalCount={totalCount}
      totalPages={totalPages}
      columns={columns}
      data={data}
      getAllUserData={getAllUserData}
      loading={isLoading}
    />
  );
}

export default AdminUserContainer;
