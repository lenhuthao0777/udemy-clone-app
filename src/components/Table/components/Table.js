import React from "react";
import { Table } from "antd";
function Tables({ columns, data, loading }) {
  return <Table columns={columns} dataSource={data} loading={loading} />;
}

export default Tables;
