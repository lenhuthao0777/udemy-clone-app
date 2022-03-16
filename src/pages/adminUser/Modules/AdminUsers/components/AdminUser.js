import { Button } from "antd";
import Pagination from "components/Pagination";
import Row from "components/Row";
import Tables from "components/Table/components/Table";
import TopBar from "components/TopBar";
import TbSearch from "pages/adminCourses/Modules/TbSearch";
import React, { Fragment, useState } from "react";

function AdminUser({
  totalCount,
  getAllUserData,
  totalPages,
  columns,
  data,
  loading,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const hdChange = (data) => {
    setSearchTerm(data);
  };
  const searchData = data.filter((val) => {
    if (searchTerm === "") {
      return val;
    }
    if (
      val.taiKhoan.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      val.hoTen.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    ) {
      return val;
    }
    return false;
  });
  const getPage = (page, pageSize) => {
    getAllUserData(page, pageSize);
  };
  return (
    <Fragment>
      <TopBar>
        <Row>
          <Button type="primary">Add</Button>
          <TbSearch cb={hdChange} />
        </Row>
        <Pagination
          totalCount={totalCount}
          totalPages={totalPages}
          cb={getPage}
        />
      </TopBar>
      <Tables columns={columns} data={searchData} loading={loading} />
    </Fragment>
  );
}

export default AdminUser;
