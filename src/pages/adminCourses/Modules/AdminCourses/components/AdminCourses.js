import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Tables from "components/Table/components/Table";
import React, { Fragment, useState } from "react";
import "styles/ButtonOutline/ButtonOutLine.scss";
import CreateCourse from "../../CreateCourse";
import TbSearch from "../../TbSearch";
function AdminCoursesTable({ data, columns, isLoading }) {
  const [searchTerm, setSearchTerm] = useState("");
  const searchData = data.filter((val) => {
    if (searchTerm === "") {
      return val;
    } else if (
      val.tenKhoaHoc.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    ) {
      return val;
    }
  });
  const hdChange = (data) => {
    setSearchTerm(data);
  };
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <CreateCourse />
          <TbSearch cb={hdChange} />
        </div>
        <div>
          <button className="button-outline">
            <LeftOutlined />
          </button>
          <button className="button-outline">
            <RightOutlined />
          </button>
        </div>
      </div>
      <Tables data={searchData} columns={columns} loading={isLoading} />
    </Fragment>
  );
}

export default AdminCoursesTable;
