import React from "react";
import { Table } from "antd";
function Tables({ columns, data, loading }) {
  const fixedData = [];
  for (let i = 0; i < 20; i += 1) {
    fixedData.push({
      key: i,
      name: ["Light", "Bamboo", "Little"][i % 3],
      description: "Everything that has a beginning, has an end.",
    });
  }
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      loading={loading}
      scroll={{ x: 2000, y: 600 }}
      bordered
    />
  );
}

export default Tables;
