import React, { useRef, useState } from "react";
import "../assets/TbSearch.scss";
import { SearchOutlined } from "@ant-design/icons";
function TbSearch({ cb }) {
  const [open, setOpen] = useState(false);
  const inputRef = useRef("");
  const typingSearch = useRef(null);
  const hdChange = (e) => {
    inputRef.current = e.target.value;
    if (!cb) return;
    if (typingSearch.current) {
      clearTimeout(typingSearch.current);
    }
    typingSearch.current = setTimeout(() => {
      inputRef.current = e.target.value;
      cb(inputRef.current);
    }, 300);
  };
  return (
    <div className="search">
      <button className="icon" onClick={() => setOpen(!open)}>
        <SearchOutlined />
      </button>
      {open ? (
        <input type="text" placeholder="Enter key!" onChange={hdChange} />
      ) : null}
    </div>
  );
}

export default TbSearch;
