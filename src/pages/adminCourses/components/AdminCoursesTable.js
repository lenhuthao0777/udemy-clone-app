import Tables from "components/Table/components/Table";
import React from "react";

function AdminCoursesTable({ data, columns, isLoading }) {
  return <Tables data={data} columns={columns} loading={isLoading} />;
}

export default AdminCoursesTable;
