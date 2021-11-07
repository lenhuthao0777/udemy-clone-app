import Tables from "components/Table/components/Table";
import React, { Fragment } from "react";
import CreateCourse from "../../CreateCourse";

function AdminCoursesTable({ data, columns, isLoading }) {
 
  return (
    <Fragment>
      <CreateCourse />
      <Tables data={data} columns={columns} loading={isLoading}/>
    </Fragment>
  );
}

export default AdminCoursesTable;
