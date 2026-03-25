import React from "react";
import { Table } from "antd";
function Tables({ columns, data, loading }) {
  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={loading}
      // pagination={{
      //   pageSize: 10,
      // }}
      pagination={false}
      scroll={{ x: 2000, y: 600 }}
      bordered
    />
  );
}

export default Tables;
