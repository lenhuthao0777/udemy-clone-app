import Pagination from "components/Pagination";
import Row from "components/Row";
import Tables from "components/Table/components/Table";
import TopBar from "components/TopBar";
import React, { Fragment, useState } from "react";
import CreateCourse from "../../CreateCourse";
import TbSearch from "../../TbSearch";
function AdminCoursesTable({
  data,
  columns,
  isLoading,
  totalCount,
  totalPages,
  getAllDatas,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  // const hdChange = (data) => {
  //   setSearchTerm(data);
  // };
  // const searchData = data.filter((val) => {
  //   if (searchTerm === "") {
  //     return val;
  //   }
  //   if (val.tenKhoaHoc.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
  //     return val;
  //   }
  //   return false;
  // });

  const getPage = (page, pageSize) => {
    getAllDatas(page, pageSize);
  };
  return (
    <Fragment>
      <TopBar>
        <Row>
          <CreateCourse />
          {/* <TbSearch cb={hdChange} /> */}
        </Row>
        <Pagination
          totalCount={totalCount}
          totalPages={totalPages}
          cb={getPage}
        />
      </TopBar>
      {/* <Tables data={searchData} columns={columns} loading={isLoading} /> */}
      {
        // data.map((item,index)=> console.log(item.lenght))
      }
    </Fragment>
  );
}

export default AdminCoursesTable;
