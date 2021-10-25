import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import authApi from "services/AuthApi";
import AdminUser from "../components/AdminUser";
import { Button, Space } from "antd";
import { v4 as uuid } from "uuid";
function AdminUserContainer() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllUserData = async () => {
    setIsLoading(true);
    try {
      const { data } = await authApi.getUsers();
      const newData = data.map((item, index) => ({
        id: index,
        email: item.email,
        hoTen: item.hoTen,
        maLoaiNguoiDung: item.maLoaiNguoiDung,
        soDt: item.soDt,
        taiKhoan: item.taiKhoan,
        matKhau: "",
        key: uuid(),
      }));
      setIsLoading(false);
      setData(newData);
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
    },
    {
      title: "Name",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "soDt",
      key: "soDt",
    },
    {
      title: "Account",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
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
  return <AdminUser columns={columns} data={data} loading={isLoading} />;
}

export default AdminUserContainer;
