import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useEffect, useRef, useState } from "react";
import "../assets/Pagination.scss";
function Pagination({ cb, totalCount, totalPages }) {
  const [page, setPage] = useState(1);
  const pageSize = useRef(10);

  const from = () => {
    return (page - 1) * Number(pageSize.current) + 1;
  };

  const to = () => {
    const value = Number(pageSize.current);
    return (page - 1) * value + value > totalCount
      ? totalCount
      : (page - 1) * value + value;
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  useEffect(() => {
    cb(page, pageSize.current);
  }, [page, pageSize.current]);
  return (
    <div className="pagination">
      <div className="data">{`${
        to() === 0 ? "0" : from()
      } - ${to()} of ${totalCount}`}</div>
      <Button
        type="default"
        className="itemCenter borderNone bgTran"
        style={{ marginRight: "10px" }}
        onClick={prevPage}
        disabled={page <= 1}
      >
        <LeftOutlined />
      </Button>
      <Button
        type="default"
        className="itemCenter borderNone bgTran"
        onClick={nextPage}
        disabled={page === totalPages}
      >
        <RightOutlined />
      </Button>
    </div>
  );
}

export default Pagination;
