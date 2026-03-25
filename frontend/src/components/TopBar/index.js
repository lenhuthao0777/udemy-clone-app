import React from "react";

function TopBar({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #d1ccc0",
      }}
    >
      {children}
    </div>
  );
}

export default TopBar;
