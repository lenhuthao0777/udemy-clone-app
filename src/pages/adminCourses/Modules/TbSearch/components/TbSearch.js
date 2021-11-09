import React, { useRef, useState } from "react";
import "../assets/TbSearch.scss";
import { SearchOutlined } from "@ant-design/icons";
function TbSearch({ cb }) {
  const [open, setOpen] = useState(false);
  const inputRef = useRef("");
  const hdChange = (e) => {
    inputRef.current = e.target.value;
    cb(inputRef.current);
  };
  return (
    <div className="search">
      <button className="icon" onClick={() => setOpen(!open)}>
        <SearchOutlined />
      </button>
      {open ? <input type="text" onChange={hdChange} /> : null}
    </div>
  );
}

export default TbSearch;
