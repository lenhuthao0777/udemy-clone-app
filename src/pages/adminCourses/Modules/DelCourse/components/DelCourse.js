import { Button } from "antd";
import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
function DelCourse({ cb }) {
  return (
    <Button type="primary" onClick={cb} size="small">
      <DeleteOutlined />
    </Button>
  );
}

export default DelCourse;
