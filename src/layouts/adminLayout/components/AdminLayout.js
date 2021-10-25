import { FileOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import LOGO from "assets/images/avatar1.jpg";
import UdeAvatar from "components/avatar";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../asset/AdminLayout.scss";
const { Header, Content, Sider } = Layout;
function AdminLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo">
          <UdeAvatar AvatarSrc={LOGO} size="AvatarLg" />
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item icon={<UserOutlined />} key="3">
            <Link to="/admin/users">User</Link>
          </Menu.Item>
          <Menu.Item key="9" icon={<FileOutlined />}>
            <Link to="/admin/courses">Courses</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
