import { Button } from "antd";
import React from "react";
import { EditOutlined } from "@ant-design/icons";

function EditCourse({ cb }) {
  return (
    <Button type="primary" onClick={cb} size="small">
      <EditOutlined />
    </Button>
  );
}

export default EditCourse;
